import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

dotenv.config();

import AuthRouter from './Routes/AuthRouter.js';
import ProductRouter from './Routes/ProductRouter.js';
import otpRouter from './Routes/OtpRouter.js';
import AdminRouter from './Routes/AdminRouter.js';
import LibraryRouter from './Routes/LibraryRouter.js';
import ContactRouter from './Routes/ContactRouter.js';
import './Models/db.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/api/otp', otpRouter);
app.use("/admin", AdminRouter);
app.use("/library", LibraryRouter);
app.use("/contact", ContactRouter);
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
