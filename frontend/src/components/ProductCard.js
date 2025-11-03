import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart, handleAddToWishList, link }) => {
  const [liked, setLiked] = useState(false);

  const toggleWishlist = () => {
    setLiked(!liked);
    handleAddToWishList(product);
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-[#CEB88C] to-[#FFFFFF] p-0.5 rounded-lg ">
        <div className="flex flex-col w-full">
          <div
            className="md:h-64 h-36 flex flex-col items-center md:p-2 w-full bg-right rounded-t-lg"
            style={{
              backgroundImage: "url('/homepage/productbg.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="me-3 w-full flex justify-end">
              <button onClick={toggleWishlist}>
                <i
                  className={`bi bi-heart${liked ? "-fill" : ""} text-xl ${
                    liked ? "text-red-500" : "text-gray-400"
                  }`}
                ></i>
              </button>
            </div>

            {/* ✅ Wrap image in Link if link prop exists */}
            {link ? (
              <Link to={link} className="w-full flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 md:h-44 rounded-t-2xl cursor-pointer"
                />
              </Link>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="h-24 md:h-44 rounded-t-2xl"
              />
            )}
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <button
              onClick={() => handleAddToCart(product)}
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="flex-1 bg-white text-[#3E3E3E] font-bold text-[12px] uppercase py-1 md:py-2 h-10 border-t rounded-b-2xl border-[#CEB88C]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-1 text-left w-full">
        <p className="text-sm text-[#3E3E3E]">{product.name}</p>
        <p className="text-sm text-[#3E3E3E]">₹ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
