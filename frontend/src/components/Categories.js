import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import api from "../api/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ initialize navigation after DOM is rendered
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // destroy old nav
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [categories]); // run after categories load

  if (loading) return <p className="text-center py-10">Loading categories...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Failed to load categories.</p>;

  return (
    <div className="py-10 pb-3 md:pb-10 w-full md:w-11/12 mx-auto relative px-3">
      <div className="md:w-11/12 mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2.5}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          grabCursor={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i} className="px-1 py-3">
              <Link to={`/category/${item.slug || item._id}`}>
                <div
                  className="border-1 border-[#d5b67a] rounded-2xl flex flex-col items-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(213,182,122,0.4)] hover:scale-102"
                  style={{ backgroundImage: "url('/homepage/productbg.png')" }}
                >
                  <div className="rounded-2xl h-36 md:h-40 flex items-center justify-center w-full p-3">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                <p className="text-center text-sm font-medium my-2">{item.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Navigation buttons, hidden on mobile */}
      <img
        ref={prevRef}
        src="/sliderleftarrow.png"
        alt="Prev"
        className="w-24 h-32 absolute top-1/2 -left-2 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block transition-all duration-500 ease-out hover:scale-125 hover:-rotate-6 hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:brightness-125"
      />
      <img
        ref={nextRef}
        src="/sliderrightarrow.png"
        alt="Next"
        className="w-24 h-32 absolute top-1/2 -right-1 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block transition-all duration-500 ease-out hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:brightness-125"
      />
    </div>
  );
};

export default Categories;
