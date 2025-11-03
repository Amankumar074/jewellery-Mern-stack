import React from "react";

const RoyalCircle = () => {
  return (
    <section className="text-[#1f2d5c] relative mb-10 md:mb-20 mt-10 md:mx-20 md:rounded-xl  overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/RoyalCircleimg.png')", opacity: 0.6 }}
      ></div>

      {/* Content */}
      <div className="relative py-10 px-4 z-10">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-serif my-8 leading-relaxed">
          Join our royal circle — be the first to know about new collections,
          <br className="hidden md:block" /> exclusive offers, and timeless treasures.
        </h4>

        <div className="flex flex-wrap justify-between items-center gap-0 md:gap-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-52 md:w-64 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1f2d5c]"
            />
            <button className="ms-2 bg-[#1f2d5c] text-white uppercase px-6 py-2 text-sm rounded hover:bg-[#162144] transition duration-300">
              Subscribe
            </button>
          </div>

          <div className="relative flex justify-end gap-4 mt-8 z-10">
            <img src="/homepage/royelcircle/center.png" className="h-20 md:h-32 w-20 md:w-32" />
          </div>
          <div className="relative flex justify-end gap-4 mt-8 z-10">
            <img src="/homepage/royelcircle/rightimg.png" className="h-20 md:h-32 w-20 md:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalCircle;
