import { Router } from "express";
import { adminLogin, getAssignedProblems, listAdmins, updateAdminProfile, updateProblemMessage } from "../Controllers/AdminController.js";
import { adminLoginValidation } from "../Middlewares/AdminValidation.js";
import adminAuth from "../Middlewares/AdminAuth.js";

const router = Router();

router.post("/login", adminLoginValidation, adminLogin);
router.get("/list", listAdmins);
router.put("/profile", adminAuth, updateAdminProfile);
router.get("/problems", adminAuth, getAssignedProblems);
router.put("/problems/:problemId", adminAuth, updateProblemMessage);

export default router;
