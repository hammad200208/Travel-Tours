import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[500px] md:h-[610px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/about.jpg')" }} // using public folder
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-4">
          Discover the Story Behind Tripsiy
        </h1>
        <p className="text-white text-lg md:text-xl ">
          A UAE-based travel company turning dream vacations into real adventures.
        </p>
      </div>
    </section>
  );
};

export default Hero;
