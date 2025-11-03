import React, { useState } from "react";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    country: "India",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Order Placed:", form);
    alert("🎉 Your order has been placed successfully!");
  };

  const subtotal = 18999;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#fffaf3] py-10 px-4 md:px-16 lg:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1f2d5c] mb-10 text-center">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* 🧾 Left: Billing Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#f8e6a0]/40">
          <h2 className="text-2xl font-semibold mb-6 text-[#1f2d5c]">
            Billing Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 font-medium">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 font-medium">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 font-medium">Pincode</label>
                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 font-medium">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 font-medium">Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f8e6a0] outline-none"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium block mb-2">
                Payment Method
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                    className="accent-[#f8e6a0]"
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={form.payment === "card"}
                    onChange={handleChange}
                    className="accent-[#f8e6a0]"
                  />
                  <span>Credit / Debit Card</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#f8e6a0] text-[#1f2d5c] py-3 rounded-xl font-semibold hover:brightness-110 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* 💳 Right: Order Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#f8e6a0]/40 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-[#1f2d5c]">
            Order Summary
          </h2>

          <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between text-gray-700">
              <span>Golden Necklace</span>
              <span>₹ 12,999</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Diamond Ring</span>
              <span>₹ 5,999</span>
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹ {shipping}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-xl font-bold text-[#1f2d5c]">
            <span>Total</span>
            <span>₹ {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
