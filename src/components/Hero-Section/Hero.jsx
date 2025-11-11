import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-extrabold text-4xl md:text-6xl font-poppins mb-4">
          Discover the World with Tripsiy
        </h1>
        <p className="text-white text-lg md:text-xl font-poppins mb-8">
          Your trusted travel partner for unforgettable experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Explore Packages */}
          <button
            className="px-6 py-3 rounded-2xl text-white font-semibold text-lg 
            bg-linear-to-r from-[#FFA94D] to-[#FF6B35] hover:opacity-90 transition"
          >
            Explore Packages
          </button>

          {/* Plan Your Trip */}
          <button
            className="px-6 py-3 rounded-2xl text-white font-semibold text-lg 
            border-2 border-[#f2f2f2] bg-transparent hover:bg-white hover:text-black transition"
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
