import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-96 flex items-center justify-center"
      style={{
        backgroundImage: `url("")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-[#EAEAEA] text-lg max-w-xl mx-auto">
          Everything you need for a seamless travel experience — all in one place.
        </p>
      </div>
    </section>
  );
};

export default Hero;
