import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    tags: [{ type: String, index: true }],
    summary: { type: String, required: true },
    citation: { type: String, default: "" },
    link: { type: String, default: "" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "admins", default: null }
  },
  { timestamps: true }
);

LibrarySchema.index({ title: "text", summary: "text", citation: "text", tags: "text" });

export default mongoose.model("library_items", LibrarySchema);

