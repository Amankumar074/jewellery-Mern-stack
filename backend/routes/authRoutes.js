import express from "express";
import { authUser, registerUser, changePassword } from "../controllers/authController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.put("/change-password", protect, admin, changePassword);

export default router;
