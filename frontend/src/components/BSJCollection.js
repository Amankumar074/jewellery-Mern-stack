import React from "react";

const BSJCollection = () => {
  const collectionItems = [
    { title: "BLUE MOON", image: "/bsj1.jpg" },
    { title: "BLACK MOON", image: "/bsj2.jpg" },
    { title: "SILVER MOON", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPtdK20RK0OdY6LmKHW1v18i646a1Y3tWdw&s"},
     { title: "EARTHY MOON", image: "/bsj3.jpg" },
  ];

  return (
    <section className="pb-10 bg-gradient-to-r from-[rgba(184,164,107,0.5)] to-[rgba(255,255,255,1)]">
      {/* Section Title */}
      <h2 className="text-center mb-10 text-2xl md:text-3xl font-serif font-semibold text-[#1f2d5c] tracking-wider"
       style={{ fontFamily: '"Playfair Display", serif' }}>
        BSJ COLLECTION
      </h2>

      {/* Collection Items */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-3 md:gap-5">
        {collectionItems.map((item, i) => {
          let radiusClass = "rounded-2xl md:rounded-none"; // default: no radius

          if (i === 0) radiusClass = "rounded-2xl md:rounded-l-2xl md:rounded-r-none";
          else if (i === collectionItems.length - 1) radiusClass = "rounded-2xl md:rounded-r-2xl md:rounded-l-none"; // last → right

          return (
            <div key={i} className="w-full md:w-[250px]">
              <div   
                className={`h-40 md:h-[420px] flex items-end justify-center pb-5 ${radiusClass}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5 className="text-white font-bold text-lg text-center drop-shadow-md">
                  {item.title}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BSJCollection;
