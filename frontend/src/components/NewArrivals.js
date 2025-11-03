import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";
import api from '../api/api';

const NewArrivals = () => {
  const { addToCart, addToWishList } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name || "Product"} added to cart!`);
  };

  // Handle add to wishlist
  const handleAddToWishList = (product) => {
    addToWishList(product);
    toast.success(`${product.name || "Product"} added to wishlist!`);
  };

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load products. Please try again.
      </p>
    );
  }

  return (
    <section className="bg-gradient-to-r from-[rgba(184,164,107,0.5)] to-[rgba(255,255,255,1)]">
      <div className="py-10 w-full md:w-11/12 mx-auto relative px-3">
        <h2
          className="text-center mb-8 text-2xl md:text-3xl font-serif font-semibold text-[#1f2d5c] tracking-wider"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          NEW ARRIVALS
        </h2>

        <div className="md:w-11/12 mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={16}
            slidesPerView={2.3}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            grabCursor={true}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider navigation arrows */}
        <img
          src="/sliderleftarrow.png"
          alt="Prev"
          className="custom-prev w-12 h-12 md:w-24 md:h-32 absolute top-1/2 -left-2 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block
            transition-all duration-500 ease-out
            hover:scale-125 hover:-rotate-6 hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:brightness-125"
        />
        <img
          src="/sliderrightarrow.png"
          alt="Next"
          className="custom-next w-12 h-12 md:w-24 md:h-32 absolute top-1/2 -right-2 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block
            transition-all duration-500 ease-out
            hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:brightness-125"
        />
      </div>
    </section>
  );
};

export default NewArrivals;
