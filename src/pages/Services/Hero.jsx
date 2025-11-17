// ServicesHero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/service1.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-[#EAEAEA] max-w-2xl">
          Everything you need for a seamless travel experience — all in one place.
        </p>
      </div>

    </section>
  );
};

export default Hero;
