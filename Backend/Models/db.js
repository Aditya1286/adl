import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
    console.error("❌ Error: MONGO_CONN is missing in .env");
    process.exit(1);
}

mongoose.connect(mongo_url)
    .then(() => console.log("✅ Mongoose Connected..."))
    .catch((err) => {
        console.error("❌ Mongoose Connection error:", err);
    });

export default mongoose;
