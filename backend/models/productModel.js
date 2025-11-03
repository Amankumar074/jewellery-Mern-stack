import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    image: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // relation with Category
      required: true,
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },
    isBSJCollection: {
      type: Boolean,
      default: false,
    },
    isTimelessEssential: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;