import React from "react";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            At <strong>BSJ SILVER</strong>, we believe in creating timeless pieces that celebrate individuality, culture, and craftsmanship. Every piece tells a story, and we are honored to be part of yours.
          </p>
        </div>

        {/* Our Beginning */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <img
              src="/bsj1.jpg"
              alt="Our Beginning"
              className="rounded-xl shadow-lg w-full object-cover h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Beginning</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              BSJ SILVER started with a vision to create exquisite silver jewellery that combines tradition with modern elegance. Our journey began in a small workshop where passion and creativity shaped every design.
            </p>
          </div>
        </div>

        {/* Craftsmanship */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <img
              src="/bsj2.jpg"
              alt="Craftsmanship"
              className="rounded-xl shadow-lg w-full object-cover h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Craftsmanship</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Each piece of jewellery is handcrafted by skilled artisans who pour their heart into every detail. From intricate engravings to delicate finishing, our commitment to quality ensures that every piece is a masterpiece.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <img
              src="/bsj3.jpg"
              alt="Our Values"
              className="rounded-xl shadow-lg w-full object-cover h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We value creativity, authenticity, and sustainability. Our designs reflect the beauty of silver and the stories behind every cultural inspiration. BSJ SILVER is committed to ethical practices while creating jewellery that lasts for generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
