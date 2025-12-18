import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ success: false, message: "Admin token required" });
  }
  try {
    const decoded = jwt.verify(auth, "ADMIN_SECRET_KEY");
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid or expired admin token" });
  }
};

export default adminAuth;

