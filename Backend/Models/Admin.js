import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    photo: { type: String, default: "" },
    bio: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("admins", AdminSchema);
