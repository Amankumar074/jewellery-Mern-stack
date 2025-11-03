import React, { useState } from "react";

const Bannersection = () => {
  const [play, setPlay] = useState(false);

  return (
    <section
      className="relative flex h-64 md:h-[500px] w-full bg-cover bg-center text-white text-center font-playfair"
      style={{ backgroundImage: "url('/bannerimg.png')" }}
    >
      <div className="absolute inset-0 flex">
        {play ? (
          <video
            className="w-full h-full object-cover"
            src="/videos/bannersection.mp4"
            autoPlay
            controls
            playsInline
          />
        ) : (
          <button
            onClick={() => setPlay(true)}
            className="bg-black/10 transition text-white h-full w-full font-old flex items-start justify-center"
          >
            <p className="text-xl md:text-7xl mt-4"
             style={{ fontFamily: '"Playfair Display", serif',}}>
              Feel the  <span className="text-[#FFF3C7]"> Legacy.</span> Wear the <span className="text-[#FFF3C7]">Royal.</span>
            </p>
          </button>
        )}
      </div>
    </section>
  );
};

export default Bannersection;
