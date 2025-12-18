import AdminModel from "../Models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DUserModel from "../Models/DUser.js";

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await AdminModel.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const match = await bcrypt.compare(password, admin.password);
        
        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            "ADMIN_SECRET_KEY",
            { expiresIn: "7d" }
        );

        return res.json({
            success: true,
            message: "Admin login successful",
            token,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

export const listAdmins = async (_req, res) => {
    try {
        const admins = await AdminModel.find({}, "name email photo bio");
        return res.json({ success: true, admins });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to load admins", error: err.message });
    }
};

export const updateAdminProfile = async (req, res) => {
    try {
        const admin = await AdminModel.findById(req.admin.id);
        if (!admin) return res.status(404).json({ success: false, message: "Admin not found" });

        const { name, photo, bio } = req.body;
        if (name) admin.name = name;
        if (photo !== undefined) admin.photo = photo;
        if (bio !== undefined) admin.bio = bio;
        await admin.save();

        return res.json({ success: true, admin });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to update admin profile", error: err.message });
    }
};

export const getAssignedProblems = async (req, res) => {
    try {
        const adminId = req.admin.id;
        const users = await DUserModel.find({}, "userId name email problems assignedCA")
            .populate("problems.assignedAdmin", "name photo bio")
            .lean();

        const problems = [];
        users.forEach(u => {
            u.problems.forEach(p => {
                const isMine = p.assignedAdmin && String(p.assignedAdmin._id || p.assignedAdmin) === String(adminId);
                const unassigned = !p.assignedAdmin;
                if (isMine || unassigned) {
                    problems.push({
                        userId: u.userId,
                        userName: u.name,
                        userEmail: u.email,
                        problemId: p._id,
                        title: p.title,
                        description: p.description,
                        status: p.status,
                        rating: p.rating,
                        adminMessage: p.adminMessage,
                        attachments: p.attachments || [],
                        assignedAdmin: p.assignedAdmin ? {
                            id: p.assignedAdmin._id || p.assignedAdmin,
                            name: p.assignedAdmin.name,
                            photo: p.assignedAdmin.photo,
                            bio: p.assignedAdmin.bio
                        } : null
                    });
                }
            });
        });

        return res.json({ success: true, problems });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to load problems", error: err.message });
    }
};

export const updateProblemMessage = async (req, res) => {
    try {
        const { problemId } = req.params;
        const { status, adminMessage, assignTo, meetupDate } = req.body;
        const adminId = req.admin.id;

        const userDoc = await DUserModel.findOne({ "problems._id": problemId });
        if (!userDoc) return res.status(404).json({ success: false, message: "Problem not found" });

        const problem = userDoc.problems.id(problemId);
        if (assignTo) {
            problem.assignedAdmin = assignTo;
            if (!userDoc.assignedCA.includes(assignTo)) {
                userDoc.assignedCA.push(assignTo);
            }
        } else if (problem.assignedAdmin && String(problem.assignedAdmin) !== String(adminId)) {
            return res.status(403).json({ success: false, message: "Not authorized for this problem" });
        }

        if (status) problem.status = status;
        if (adminMessage !== undefined) problem.adminMessage = adminMessage;
        if (meetupDate !== undefined) problem.meetupDate = meetupDate ? new Date(meetupDate) : null;
        if (status === "closed") {
            userDoc.solvedProblems = (userDoc.solvedProblems || 0) + 1;
        }
        await userDoc.save();

        return res.json({ success: true, problem });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to update problem", error: err.message });
    }
};
