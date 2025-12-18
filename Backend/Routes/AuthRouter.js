import { Router } from "express";
import multer from "multer";
import path from "path";
import { loginValidation, signupValidation } from "../Middlewares/AuthValidation.js";
import { createQuery, getDashboard, getProfile, login, rateQuery, reopenQuery, signup, updateProfile } from "../Controllers/AuthController.js";
import ensureAuthenticated from "../Middlewares/Auth.js";

const router = Router();
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, "uploads/"),
    filename: (_req, file, cb) => {
        const safeName = file.originalname.replace(/\s+/g, "_");
        cb(null, `${Date.now()}-${safeName}`);
    }
});
const upload = multer({ storage });

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.get("/me", ensureAuthenticated, getProfile);
router.put("/profile", ensureAuthenticated, updateProfile);
router.get("/dashboard", ensureAuthenticated, getDashboard);
router.post("/query", ensureAuthenticated, upload.array("attachments", 5), createQuery);
router.post("/query/:problemId/rate", ensureAuthenticated, rateQuery);
router.post("/query/:problemId/reopen", ensureAuthenticated, reopenQuery);

export default router;
