import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPopup = ({ showCart }) => {
  const { cart } = useCart();
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const cartRef = useRef(null);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!showCart) return null;

  return (
    <div className="relative" ref={cartRef}>
      <button
        onClick={() => setCartPopupOpen(!cartPopupOpen)}
        className="relative text-white text-xl hover:text-yellow-400 transition-colors"
      >
        <i className="bi bi-cart3 text-2xl" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {cartPopupOpen && (
        <div className="absolute -right-1 top-8 mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-[2000]">
          {totalItems === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-lg mb-2 border-b pb-2 border-black w-full">
                Cart items
              </p>
              <i className="bi bi-bag text-2xl bold"></i>
              <p className="text-xl text-center font-semibold">Your Cart is empty</p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-lg mb-2 border-b pb-2 border-black">
                Cart items: {totalItems}
              </p>
              <div className="max-h-60 overflow-y-auto mb-3">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b py-2"
                  >
                    <img
                      src={item.thumbnail_image || "/placeholder.png"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-base sm:text-lg">{item.name}</p>
                      <div className="flex justify-between text-sm sm:text-base text-gray-500">
                        <p>
                          {item.qty} × ₹
                          {item.main_price?.replace(/[^\d.-]/g, "") || 0}
                        </p>
                        <p>
                          ₹
                          {(
                            item.qty *
                            Number(item.main_price?.replace(/[^\d.-]/g, "") || 0)
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border p-2 mb-3 border-black flex justify-between text-lg font-semibold text-gray-800">
                <span>Total</span>
                <span>
                  ₹
                  {cart
                    .reduce(
                      (total, item) =>
                        total +
                        item.qty *
                          Number(item.main_price?.replace(/[^\d.-]/g, "") || 0),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              {/* 👇 Close popup on click */}
              <Link
                to="/cart"
                onClick={() => setCartPopupOpen(false)}
                className="block text-center bg-[#2c2f59] text-white py-2 rounded-md hover:bg-[#1f2348] transition"
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPopup;
