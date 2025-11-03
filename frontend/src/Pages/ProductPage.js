import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Exploremore from '../components/Exploremore'
import RoyalCircle from '../components/RoyalCircle'
import ProductFeature from "../components/ProductFeature";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";




const categoryProducts = {
  "pooja-accessories": [
    {
      name: "Incense Holder",
      image: [
        "/homepage/offerbanner/second.png",
        "/homepage/offerbanner/second.png",
        "/homepage/offerbanner/second.png",
        "/homepage/offerbanner/second.png",
        "/homepage/offerbanner/second.png",
      ],
      price: 250,
    },
    {
      name: "Pooja Thali",
      image: ["/homepage/offerbanner/second.png","/homepage/offerbanner/second.png"],
      price: 350,
    },
  ],
  "hand-bags": [
    {
      name: "Leather Handbag",
      image: ["/homepage/offerbanner/second.png", "/homepage/offerbanner/second.png"],
      price: 1200,
    },
    {
      name: "Clutch Bag",
      image: ["/homepage/offerbanner/second.png"],
      price: 800,
    },
  ],
};

const accordions = [
  { title: "Description", text: "This is a beautiful handcrafted product." },
  { title: "Care Instruction", text: "Keep away from water and chemicals. Store safely." },
  { title: "Return & Refund Policy", text: "Returns accepted within 7 days of delivery." },
  { title: "Disclaimer", text: "All our silver products are handcrafted, slight variations in design may occur." },
];

const ProductPage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { category, id } = useParams();
  const navigate = useNavigate();
  const product = categoryProducts[category]?.[id];

  const [selectedImage, setSelectedImage] = useState(product?.image[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-[#1f2d5c] text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(186, 157, 75, 0.5), rgba(247, 246, 242, 0.5)), url("/homepage/Vector.png")`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="mb-1 fw-bold text-[#23264D] text-center py-6">
            Hallmarked. Handcrafted. 100% Real Silver.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full px-3 pt-0 gap-6">
          {/* Left Section - Images */}
          <div className="flex flex-col items-center w-full md:w-5/12 relative">
            {/* Product Image Area (Dynamic) */}
            {isMobile ? (
              // ✅ Mobile: Carousel
              <Swiper
                modules={[Pagination,Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg w-full"
              >
                {product.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="h-52 w-full flex items-center justify-center p-2 bg-right rounded-lg border-1 border-[#d5b67a]"
                      style={{
                        backgroundImage: "url('/homepage/productbg.png')",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <img
                        src={img}
                        alt={product.name}
                        className="h-40 rounded-t-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // ✅ Desktop: Static Zoom Box
              <div
                className="h-52 md:h-[320px] w-full md:w-[350px] flex items-center justify-center p-2 bg-right rounded-lg border-1 border-[#d5b67a] cursor-pointer"
                style={{
                  backgroundImage: "url('/homepage/productbg.png')",
                  backgroundSize: "100% 100%",
                }}
                onMouseOver={() => setZoomedImage(selectedImage)}
                onMouseLeave={() => setZoomedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-40 md:h-52 rounded-t-2xl"
                />
              </div>
            )}

            <div className="flex gap-2">
              {product.image.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  style={{
                    backgroundImage: "url('/homepage/productbg.png')",
                    backgroundSize: "100% 100%",
                  }}
                  className={`w-14 h-14 rounded-md cursor-pointer border-1 mt-2 ${selectedImage === img ? "border-[#d5b67a]" : "border-gray-200"
                    }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Zoom Box */}
            {/* Zoom Box */}
            {zoomedImage && (
              <div
                className="hidden md:flex absolute top-0 right-[-520px] w-[500px] h-[500px] bg-white border-1 border-[#d5b67a] shadow-lg items-center justify-center p-4 rounded-lg"
                style={{
                  backgroundImage: "url('/homepage/productbg.png')",
                  backgroundSize: "100% 100%",
                }}
              >
                <img
                  src={zoomedImage}
                  alt="zoomed"
                  className="object-contain h-full w-full"
                />
                <button
                  className="absolute top-2 right-2 bg-gray-200 rounded-full px-3 py-1 text-sm"
                  onClick={() => setZoomedImage(null)}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Right Section - Details */}
          <div className="flex flex-col w-full md:w-1/2 space-y-">
            <h1 className="text-3xl text-[#2C2F59]">{product.name}</h1>
            <p className="text-3xl text-[#2C2F59]">₹{product.price}</p>

            {/* Quantity */}
            <div className="flex flex-col items-start mt-2">
              <span className="text-[#2C2F59] text-lg">Quantity:</span>
              <div className="flex gap-8">
                <div className="flex items-center border rounded-md bg-white">
                  <button
                    className="px-3 py-1 text-[#2C2F59] font-semibold"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-1 font-semibold text-[#2C2F59]">{quantity}</span>
                  <button
                    className="px-3 py-1 text-[#2C2F59] font-semibold"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/product/product-icon-1.png"
                      alt={product.name}
                      className="w-24 h-8 "
                    />
                    <p className="text-[8px] font-bold text-[#2C2F59] mt-1">100% BIS HALLMARKED</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/product/product-icon-2.png"
                      alt={product.name}
                      className="w-10 h-8 "
                    />
                    <p className="text-[8px] font-bold text-[#2C2F59] mt-1">100% PURE SILVER</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-2 w-full md:w-7/12">
              <button
                className="flex-1 bg-[#d5b67a] py-2 rounded-lg"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                ADD TO CART
              </button>
              <button
                className="flex-1 bg-[#1f2d5c] text-white py-2 rounded-lg"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Buy Now
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-4 space-y-1">
              {accordions.map((item, idx) => (
                <details key={idx} className="group border-b border-[#2C2F59] pb-3">
                  <summary className="cursor-pointer text-[#2C2F59] font-semibold flex justify-between list-none mt-1">
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#2C2F59] transition-transform rotate-180 group-open:rotate-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  </summary>
                  <p className="text-[#2C2F59] mt-2">{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <ProductFeature />
      </div>
      <div className="w-100 bg-white">
        <Exploremore />
        <RoyalCircle />
      </div>
    </section>
  );
};

export default ProductPage;
