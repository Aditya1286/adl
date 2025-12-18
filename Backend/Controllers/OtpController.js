import twilio from "twilio";
import dotenv from "dotenv";
import OtpModel from "../Models/Otp.js";
import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";
import DUserModel from "../Models/DUser.js";

dotenv.config();

// Twilio client
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

// ----------------------------------------------------
// SEND OTP
// ----------------------------------------------------
export const sendOtp = async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email || !phone) {
      return res.status(400).json({ success: false, message: "Email & phone required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in DB
    await OtpModel.create({ email, otp });

    // Send OTP with Twilio
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });

    return res.json({ success: true, message: "OTP sent successfully!" });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: err.message,
    });
  }
};

// ----------------------------------------------------
// CHECK OTP IN DB
// ----------------------------------------------------
const validateOtp = async (email, otp) => {
  const record = await OtpModel.findOne({ email, otp });

  if (!record) return false;

  const ageInSeconds = (Date.now() - new Date(record.createdAt).getTime()) / 1000;

  if (ageInSeconds > 300) {
    await OtpModel.deleteOne({ email, otp });
    return "expired";
  }

  await OtpModel.deleteOne({ email, otp });
  return true;
};

// ----------------------------------------------------
// VERIFY OTP + CREATE USER
// ----------------------------------------------------
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp, name, password, phone, picture } = req.body;
    
    if (!email || !otp || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const otpStatus = await validateOtp(email, otp);

    if (!otpStatus)
      return res.status(400).json({ success: false, message: "Invalid OTP" });

    if (otpStatus === "expired")
      return res.status(400).json({ success: false, message: "OTP expired" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create base user
    const newUser = await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Create extended profile
    await DUserModel.create({
      userId: newUser._id,
      name,
      email,
      phone,
      password: hashedPassword,
      picture: picture || "",
      totalProblems: 0,
      solvedProblems: 0,
      problems: []
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully!",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};
