import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('multiple-visa/bg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2 mt-20">
          Dubai Multiple Entry Visa
        </h1>
        <p className="text-lg md:text-lg font-poppins text-[#EAEAEA] max-w-4xl mb-6">
          Freedom to travel — visit Dubai as often as you like.
        </p>
        <button className="bg-[#F49C0B] text-white px-10 py-3 rounded-lg font-poppins hover:bg-[#d88509] transition">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
