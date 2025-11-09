import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import api from "../api/api";

const ExploreMore = () => {
  const { addToCart, addToWishList } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // show first 4 products initially

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get("/products");
        setProducts(response.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishList = (product) => {
    addToWishList(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4); // show next 4 products
  };

  const handleViewLess = () => {
    setVisibleCount(4); // collapse back to first 4 products
  };

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">Failed to load products.</p>;

  return (
    <section className="bg-[#FFF3C769] mt-4">
      <div className="py-10 w-full md:w-11/12 mx-auto relative px-3">
        <h2
          className="text-center mb-8 text-3xl font-serif font-semibold text-[#1f2d5c] tracking-wider"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Want To Explore More?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name || "No Name",
                price: product.price
                  ? Number(product.price)
                  : Number(product.main_price.replace(/[^\d.-]/g, "")),
                image: product.image || "/placeholder.png",
              }}
              handleAddToCart={() => handleAddToCart(product)}
              handleAddToWishList={() => handleAddToWishList(product)}
            />
          ))}
        </div>

        {/* View More / View Less buttons */}
        <div className="flex items-center mt-10">
          {visibleCount < products.length ? (
            <button
              onClick={handleViewMore}
              className="mx-auto px-6 py-2 bg-[#2C2F59] text-white rounded-lg shadow-md hover:bg-[#202344] transition"
            >
              VIEW MORE
            </button>
          ) : (
            visibleCount > 4 && (
              <button
                onClick={handleViewLess}
                className="mx-auto px-6 py-2 bg-[#2C2F59] text-white rounded-lg shadow-md hover:bg-[#202344] transition"
              >
                VIEW LESS
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
