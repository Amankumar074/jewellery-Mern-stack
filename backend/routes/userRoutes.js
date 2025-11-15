import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", (req, res) => {
  res.json({ message: "Public: Get all users" });
});

// Protected
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Your profile", user: req.user });
});

// Admin-only
router.get("/admin", protect, admin, (req, res) => {
  res.json({ message: "Admin-only access" });
});

export default router;
