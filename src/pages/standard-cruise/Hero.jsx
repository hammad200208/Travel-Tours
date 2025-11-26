import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('standard-cruise/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2 mt-20">
          Standard Dubai Dhow Cruise
        </h1>
        <p className="text-lg md:text-lg font-poppins text-[#EAEAEA] max-w-4xl mb-6">
          Enjoy a 2-hour evening cruise with buffet dinner and Dubai skyline views.
        </p>
        <button className="bg-[#F49C0B] text-white px-6 py-3 rounded-lg font-poppins hover:bg-[#d88509] transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
