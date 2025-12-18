import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../Models/User.js";
import DUserModel from "../Models/DUser.js";

const buildToken = (user) => jwt.sign(
    { email: user.email, _id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
);

const ensureDUser = async (user) => {
    let duser = await DUserModel.findOne({ userId: user._id });
    if (!duser) {
        duser = await DUserModel.create({
            userId: user._id,
            name: user.name,
            email: user.email,
            phone: "",
            password: user.password,
            totalProblems: 0,
            solvedProblems: 0,
            problems: []
        });
    }
    return duser;
};

export const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user exists
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.status(409).json({
          message: "User already exists, you can login",
          success: false
        });
      }
  
      // Instead of creating user here, we return success and wait for OTP verification
      return res.json({
        success: true,
        message: "Signup details accepted, please verify OTP"
      });
  
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        const errorMsg = "Auth failed, email or password is wrong";

        // If email not found
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // Compare passwords
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        const duser = await ensureDUser(user);

        // Generate JWT Token
        const jwtToken = buildToken(user);

        return res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name,
            userId: user._id,
            profile: {
                picture: duser.picture,
                totalProblems: duser.totalProblems,
                solvedProblems: duser.solvedProblems
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message
        });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const duser = await ensureDUser(user);

        return res.json({
            success: true,
            user: {
                id: user._id,
                name: duser.name || user.name,
                email: duser.email || user.email,
                phone: duser.phone,
                picture: duser.picture,
                assignedCA: duser.assignedCA,
                totalProblems: duser.totalProblems,
                solvedProblems: duser.solvedProblems,
                problems: duser.problems
            }
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to load profile", error: err.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { name, email, phone, password, picture } = req.body;
        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        let hashedPassword;
        if (password) hashedPassword = await bcrypt.hash(password, 10);

        if (name) user.name = name;
        if (email) user.email = email;
        if (hashedPassword) user.password = hashedPassword;
        await user.save();

        const duser = await ensureDUser(user);
        if (name) duser.name = name;
        if (email) duser.email = email;
        if (phone !== undefined) duser.phone = phone;
        if (picture !== undefined) duser.picture = picture;
        if (hashedPassword) duser.password = hashedPassword;
        await duser.save();

        return res.json({ success: true, message: "Profile updated", user: duser });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to update profile", error: err.message });
    }
};

export const getDashboard = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        await ensureDUser(user);
        const duser = await DUserModel.findOne({ userId: user._id }).populate("problems.assignedAdmin", "name photo bio");

        const activeCases = duser.problems.filter(p => p.status !== "closed").length;
        const solved = duser.problems.filter(p => p.status === "closed").length;
        const open = activeCases - solved;

        // Basic trend data based on problems created order
        const serviceTrends = duser.problems.slice(-6).map((p, idx) => ({
            label: p.title || `Case ${idx + 1}`,
            value: p.status === "closed" ? 100 : 60
        }));

        return res.json({
            success: true,
            data: {
                fullName: duser.name || user.name,
                picture: duser.picture || "",
                assignedCA: duser.assignedCA,
                totals: {
                    totalProblems: duser.totalProblems || duser.problems.length,
                    solvedProblems: duser.solvedProblems || solved,
                    activeCases,
                    openIssues: open < 0 ? 0 : open
                },
                serviceTrends,
                problems: duser.problems
            }
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to load dashboard", error: err.message });
    }
};

export const createQuery = async (req, res) => {
    try {
        const { title, description, adminId } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }

        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const attachments = (req.files || []).map((file) => ({
            name: file.originalname,
            url: `/uploads/${file.filename}`,
            mime: file.mimetype,
            size: file.size
        }));

        const duser = await ensureDUser(user);
        duser.problems.push({ title, description, solution: "", status: "pending", assignedAdmin: adminId || null, attachments });
        if (adminId && !duser.assignedCA.includes(adminId)) {
            duser.assignedCA.push(adminId);
        }
        duser.totalProblems = (duser.totalProblems || 0) + 1;
        await duser.save();

        return res.status(201).json({ success: true, message: "Query created", problems: duser.problems });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to create query", error: err.message });
    }
};

export const rateQuery = async (req, res) => {
    try {
        const { problemId } = req.params;
        const { rating } = req.body;
        if (rating === undefined) return res.status(400).json({ success: false, message: "Rating required" });

        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const duser = await ensureDUser(user);
        const problem = duser.problems.id(problemId);
        if (!problem) return res.status(404).json({ success: false, message: "Problem not found" });
        problem.rating = rating;
        await duser.save();

        return res.json({ success: true, problem });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to rate query", error: err.message });
    }
};

export const reopenQuery = async (req, res) => {
    try {
        const { problemId } = req.params;
        const user = await UserModel.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const duser = await ensureDUser(user);
        const problem = duser.problems.id(problemId);
        if (!problem) return res.status(404).json({ success: false, message: "Problem not found" });
        problem.status = "in-progress";
        problem.rating = null;
        await duser.save();

        return res.json({ success: true, message: "Query reopened", problem });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to reopen query", error: err.message });
    }
};
