// ServicesHero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('packages-detail/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-10 mb-4">
          Dubai Luxury Tour
        </h1>
        <p className="text-lg md:text-xl font-poppins  text-[#EAEAEA] max-w-4xl">
          Experience the magic of the desert and city — from golden dunes to dazzling skyscrapers.
        </p>
      </div>
    </section>
  );
};

export default Hero;
