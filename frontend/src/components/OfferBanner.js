import React from "react";

function OfferBanner() {
  return (
    <>
      <div className="md:h-[450px] h-fit flex flex-col md:flex-row py-10 bg-cover bg-center justify-center gap-10"
       style={{backgroundImage: "url('/homepage/offersecbg.png')"}}>

        <div className="flex justify-center items-center">
          <img src="/homepage/offerbanner/offerbannerimg.png" className="h-80"/>
        </div>
        <div className="flex flex-col items-center  h-full justify-center">

          <div>
            <h3
              className="text-3xl text-center mt-4 md:mt-0 md:text-3xl font-bold text-[#1c364f] mb-3 drop-shadow leading-relaxed md:leading-loose tracking-wide">
              The Royal Home Essential
            </h3>
            <p
              className="text-3xl text-center w-full mt-0 w-11/12 md:mt-8 md:text-3xl font-bold text-[#1c364f] mb-3 drop-shadow leading-relaxed md:leading-relaxed ">
              "Enjoy an Exclusive 15% Discount"
            </p>
          </div>

          <div className="flex justify-end">
            <button
              className="px-8 py-2 mt-8 w-64 rounded-full border border-[#1a1a2e] bg-white text-[#d5b67a] font-medium hover:bg-[#1a1a2e] transition">
              EXPLORE COLLECTION
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default OfferBanner;