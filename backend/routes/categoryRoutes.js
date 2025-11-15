import express from "express";
import Category from "../models/categoryModel.js";

const router = express.Router();

// Public route: Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
