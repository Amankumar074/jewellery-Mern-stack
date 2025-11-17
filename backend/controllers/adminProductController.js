import Product from "../models/productModel.js";

const BASE_URL = "http://localhost:5000";

// Helper to get full image URL
const getFullImageUrl = (file) => {
  if (!file) return null;
  // If file is already an absolute URL, return it
  if (file.startsWith("http://") || file.startsWith("https://")) return file;
  return `${BASE_URL}/uploads/${file}`;
};

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");

    // Ensure image URLs are absolute
    const productsWithFullUrl = products.map((product) => {
      return {
        ...product._doc,
        image: getFullImageUrl(product.image),
      };
    });

    res.json(productsWithFullUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    // Save full URL instead of just filename
    const image = req.file ? getFullImageUrl(req.file.filename) : null;

    const product = new Product({
      name,
      price,
      description,
      category,
      image,
    });

    await product.save();
    res.status(201).json({
      ...product._doc,
      image: getFullImageUrl(product.image),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.category = category || product.category;

    // Update image if a new file is uploaded
    if (req.file) {
      product.image = getFullImageUrl(req.file.filename);
    }

    await product.save();

    res.json({
      ...product._doc,
      image: getFullImageUrl(product.image),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
