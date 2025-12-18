import mongoose from "mongoose";

// Detailed user profile tied to base User record
const DUserSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  name: String,
  email: String,
  phone: String,
  password: String,
  picture: { type: String, default: "" },
  assignedCA: [{ type: mongoose.Schema.Types.ObjectId, ref: "admins" }],
  totalProblems: { type: Number, default: 0 },
  solvedProblems: { type: Number, default: 0 },
  problems: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      title: String,
      description: String,
      solution: String,
      status: { type: String, default: "pending" },
      assignedAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "admins" },
      rating: { type: Number, default: null },
      adminMessage: { type: String, default: "" },
      meetupDate: { type: Date, default: null },
      attachments: [
        {
          name: String,
          url: String,
          mime: String,
          size: Number
        }
      ]
    }
  ]
});

export default mongoose.model("dusers", DUserSchema);
