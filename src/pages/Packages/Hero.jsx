import React from "react";
import { FiChevronDown } from "react-icons/fi"; // <-- Import the icon

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full h-[365px] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/package-bg.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Find Your Perfect Travel Package
          </h1>
          <p className="mt-2 text-sm md:text-base text-white">
            Curated trips for every traveler — choose your style and start exploring.
          </p>
        </div>
      </div>

      {/* CATEGORY OVERLAY */}
      <div className="w-full bg-[#202020] py-4 flex justify-center shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-2 w-[90%] max-w-5xl justify-center">
          {/* LEFT BUTTONS */}
          <div className="flex flex-wrap justify-center items-center">
            <button className="px-4 py-2 bg-[#2B2B2B] text-white text-sm">Luxury</button>
            <button className="px-4 py-2 bg-[#F6B15C] text-[#2C2C2C] text-sm font-medium">Adventure</button>
            <button className="px-4 py-2 bg-[#2B2B2B] text-white text-sm">Family</button>
            <button className="px-4 py-2 bg-[#2B2B2B] text-white text-sm">Honeymoon</button>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:pl-4 mt-2 md:mt-0">
            <button className="px-4 py-2 bg-[#2B2B2B] text-white rounded-lg text-sm flex items-center gap-1">
              Region <FiChevronDown className="text-[#F6B15C]" />
            </button>
            <button className="px-4 py-2 bg-[#2B2B2B] text-white rounded-lg text-sm flex items-center gap-1">
              Price Range <FiChevronDown className="text-[#F6B15C]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
