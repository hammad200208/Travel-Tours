// ServicesHero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('dubai-transfer/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl font-poppins  text-[#EAEAEA] max-w-2xl">
          Everything you need for a seamless travel experience — all in one place.
        </p>
      </div>
    </section>
  );
};

export default Hero;
