import express from "express";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

const router = express.Router();

/* ================================
   ✅ GET ALL PRODUCTS
================================= */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================================
   ✅ GET FEATURED PRODUCTS
================================= */
router.get("/featured", async (req, res) => {
  try {
    // Assuming your Product model has a `featured` boolean field
    const products = await Product.find({ featured: true }).populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================================
   ✅ GET PRODUCTS BY CATEGORY SLUG
================================= */
router.get("/category/:slug", async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase();

    // Find category by slug
    const category = await Category.findOne({ slug });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Find products in this category
    const products = await Product.find({ category: category._id }).populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching category products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================================
   ✅ GET SINGLE PRODUCT BY SLUG OR ID
================================= */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching single product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
