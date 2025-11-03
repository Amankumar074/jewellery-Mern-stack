import React from "react";
import { useCart } from "../context/CartContext";

const WishlistPage = () => {
  const { wishlist, addToCart, removeFromWishList } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishList(product.id); // wishlist से remove
    alert(`${product.name} moved to cart!`);
  };

  const handleRemove = (id) => {
    removeFromWishList(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-2xl md:text-3xl font-bold text-[#1f2d5c] mb-6">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Wishlist Items */}
          <div className="md:col-span-2 space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-xl"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">₹ {item.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="px-4 py-2 bg-[#2c2f59] text-white rounded-xl font-semibold"
                  >
                    Move to Cart
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 bg-[#2c2f59] text-white rounded-xl font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
