import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/desert-safari/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2 mt-10">
          Feel the Desert’s Pulse
        </h1>
        <p className="text-lg md:text-lg font-poppins text-[#EAEAEA] max-w-2xl mb-6">
          Golden dunes, starry skies, and the thrill of adventure await.
        </p>
        <button className="bg-[#F49C0B] text-white px-6 py-3 rounded-lg font-poppins hover:bg-[#d88509] transition">
          Book This Experience
        </button>
      </div>
    </section>
  );
};

export default Hero;
