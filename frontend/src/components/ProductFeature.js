import React from 'react';

function ProductFeature() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#2C2F59] via-[#5E65BF] to-[#FFFFFF] py-10 md:py-20 px-4 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="flex-1 text-white border-l-[1px] pl-3 md:pl-6 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left"
           style={{ fontFamily: '"Playfair Display", serif' }}>
            What Makes This Piece Royal
          </h1>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
            <li>Inspired by the Sheesh Mahal: Intricate carvings reflect the grandeur of Rajasthan's royal palaces.</li>
            <li>100% Pure Silver (925 Hallmark): Authenticated and certified for purity.</li>
            <li>Handcrafted Excellence: Every detail is shaped by master artisans with decades of heritage.</li>
            <li>Gemstone Accents: Embellished with semi-precious stones for an opulent touch.</li>
            <li>Luxury Collectible: Not just an accessory — a timeless heirloom.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center pl-0 md:pl-10">
          <img
            src="/homepage/offerbanner/second.png"
            alt="Royal Piece"
            className="w-40 h-40 md:w-60 md:h-60 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
