import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/adminCategoryController.js";

const router = express.Router();

router.get("/", protect, admin, getCategories);
router.post("/", protect, admin, createCategory);
router.delete("/:id", protect, admin, deleteCategory);

export default router;
