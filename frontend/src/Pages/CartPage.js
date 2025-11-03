import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeItem, updateQty } = useCart();

  console.log("🛒 Cart Data:", cart);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.qty || 1) *
      Number(item.main_price?.replace(/[^\d.-]/g, "") || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-20">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1f2d5c] mb-6 text-center sm:text-left">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            className="w-32 h-32 mb-4 opacity-80"
          />
          <p className="text-gray-600 text-lg mb-4">
            Your cart is currently empty.
          </p>
          <a
            href="/"
            className="bg-[#f8e6a0] text-[#1f2d5c] px-6 py-2 rounded-xl font-semibold hover:brightness-110 transition"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 🛍️ Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => {
              const itemPrice = Number(
                item.main_price?.replace(/[^\d.-]/g, "") || 0
              );
              const subtotal = itemPrice * (item.qty || 1);

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-2xl p-4 sm:p-5 hover:shadow-lg transition"
                >
                  {/* 🖼️ Product Image */}
                  <img
                    src={item.thumbnail_image || "/placeholder.png"}
                    alt={item.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-xl mb-3 sm:mb-0 sm:mr-4"
                  />

                  {/* 🧾 Product Info */}
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start sm:items-center w-full">
                      <h2 className="font-semibold text-lg sm:text-xl text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base">
                        ₹ {itemPrice.toLocaleString()}
                      </p>
                    </div>

                    {/* 📦 Quantity Controls */}
                    <div className="flex flex-wrap items-center justify-between sm:justify-start sm:space-x-4 mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, "dec")}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-gray-800 font-medium">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, "inc")}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm font-semibold hover:underline mt-3 sm:mt-0"
                      >
                        Remove
                      </button>
                    </div>

                    {/* 🧾 Subtotal */}
                    <div className="mt-3 text-gray-700 text-sm sm:text-base font-medium">
                      Subtotal: ₹ {subtotal.toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 💳 Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-xl font-semibold mb-5 text-[#1f2d5c]">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹ {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>₹ 0</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold text-[#1f2d5c]">
              <span>Total</span>
              <span>₹ {total.toLocaleString()}</span>
            </div>
            <Link to="/checkout">
              <button className="mt-6 w-full bg-[#f8e6a0] text-[#1f2d5c] py-3 rounded-xl font-semibold hover:brightness-110 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
