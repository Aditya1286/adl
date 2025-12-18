import { Router } from "express";
import { sendContactEmail } from "../Controllers/ContactController.js";

const router = Router();

router.post("/send-email", sendContactEmail);

export default router;


