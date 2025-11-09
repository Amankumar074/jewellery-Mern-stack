import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const exists = await User.findOne({ email: "admin@example.com" });
    if (!exists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      });

      console.log("✅ Admin user created successfully!");
    } else {
      console.log("ℹ️ Admin user already exists.");
    }
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
