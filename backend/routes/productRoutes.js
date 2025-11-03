import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// Create new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
});

export default router;