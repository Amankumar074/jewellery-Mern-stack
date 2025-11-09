import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Exploremore from "../components/Exploremore";
import RoyalCircle from "../components/RoyalCircle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";
import api from "../api/api";

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { addToCart, addToWishList } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishList = (product) => {
    addToWishList(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        const allCategories = response.data || [];
        setCategories(allCategories);
        const currentCategory = allCategories.find(
          (cat) => cat.slug === slug
        );
        setCategory(currentCategory);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err);
      }
    };
    fetchCategories();
  }, [slug]);
  console.log("🔹 slug from URL:", slug);


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/products`);
        setProducts(response.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (error) {
    console.error("Error state:", error);
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load products. Please try again.
      </p>
    );
  }


  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-[rgba(184,164,107,0.5)] to-[rgba(255,255,255,1)]">
        {/* Search Bar */}
        <SearchBar />

        {/* Category Banner */}
        <div
          className="relative h-40 md:h-64 md-w-full flex items-center justify-center mx-4 text-white md:rounded-xl rounded"
          style={{
            backgroundImage: `url(${category?.banner || ""})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            {category?.name || ""}
          </h1>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 relative">
            <div
              className={`relative bg-white p-6 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-[#d5b67a]
              ${sidebarOpen ? "max-h-[1000px]" : "max-h-20"} md:max-h-full`}
            >
              {/* Left & Right gradient borders */}
              <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-[#d5b67a] to-[#FFFFFF] z-0"></div>
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-[#d5b67a] to-[#FFFFFF] z-0"></div>

              {/* Content with higher z-index */}
              <div className="relative z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                    Filter & Sort
                  </h2>
                  <button
                    className="md:hidden flex justify-center items-center"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <i
                      className={`bi bi-caret-down-fill text-black text-2xl transition-transform duration-300 mb-3 ${sidebarOpen ? "rotate-180 mb-6" : ""
                        }`}
                    ></i>
                  </button>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-[#1f2d5c]">Sort By</h3>
                  <div className="flex flex-col space-y-1 text-sm text-[#3b3b3b]">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sort"
                        className="accent-[#1f2d5c]"
                      />
                      <span>High to Low : Price</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sort"
                        className="accent-[#1f2d5c]"
                      />
                      <span>Low to High : Price</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sort"
                        className="accent-[#1f2d5c]"
                      />
                      <span>Recommended</span>
                    </label>
                  </div>
                </div>

                {/* Price Slider */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-[#1f2d5c]">Price</h3>
                  <input
                    type="range"
                    min="500"
                    max="1000"
                    className="w-full accent-[#1f2d5c]"
                  />
                  <div className="flex justify-between text-xs mt-1 text-[#3b3b3b]">
                    <span>₹500</span>
                    <span>₹1000</span>
                  </div>
                </div>

                {/* Type */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-[#1f2d5c]">Type</h3>
                  <div className="flex flex-col space-y-1 text-sm text-[#3b3b3b]">
                    {[
                      "Classic",
                      "Modern",
                      "Trending",
                      "Traditional",
                      "Religious",
                    ].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="type"
                          className="accent-[#1f2d5c]"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Slider */}
                <div>
                  <h3 className="font-medium mb-2 text-[#1f2d5c]">Size</h3>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    className="w-full accent-[#1f2d5c]"
                  />
                  <div className="flex justify-between text-xs mt-1 text-[#3b3b3b]">
                    <span>M</span>
                    <span>Free Size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={{
                  ...product,
                  price: product.price
                    ? Number(product.price)
                    : Number(product.main_price.replace(/[^\d.-]/g, "")),
                  image: product.image || "/placeholder.png",
                }}
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
                link={`/product/${slug}/${index}`} // ✅ Only image clickable
              />
            ))}
          </div>
        </div>
      </div>

      {/* Exploremore & RoyalCircle */}
      <Exploremore />
      <RoyalCircle />
    </div>
  );
};

export default CategoryPage;