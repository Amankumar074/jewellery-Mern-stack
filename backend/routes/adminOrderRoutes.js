import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getOrders,
  updateOrderStatus,
} from "../controllers/adminOrderController.js";

const router = express.Router();

router.get("/", protect, admin, getOrders);
router.put("/:id", protect, admin, updateOrderStatus);

export default router;
