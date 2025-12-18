import { Router } from "express";
import { addArticle, searchLibrary } from "../Controllers/LibraryController.js";
import adminAuth from "../Middlewares/AdminAuth.js";

const router = Router();

router.get("/", searchLibrary);
router.post("/", adminAuth, addArticle);

export default router;

