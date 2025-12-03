import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/destination.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Custom Option & Arrow Styles */}
      <style>{`
        select option {
          color: #F49C0B;
          background-color: #1f1f1f;
        }
        select {
          appearance: none; /* remove default arrow */
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='%23F49C0B' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Explore the World with Tripsiy
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          Uncover places you’ve only dreamed of visiting.
        </p>

        {/* Search Box */}
        <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 max-w-3xl w-full mx-auto">
          {/* Left - Region */}
          <select className="bg-white/10 text-white px-4 py-2 rounded-lg outline-none flex-1 sm:max-w-[30%] pr-10">
            <option>Region</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>America</option>
          </select>

          {/* Center - Travel Type */}
          <select className="bg-white/10 text-white px-4 py-2 rounded-lg outline-none flex-1 sm:max-w-[30%] pr-10">
            <option>Travel Type</option>
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Budget</option>
          </select>

          {/* Right - Search */}
          <button className="bg-[#F49C0B] text-[#FFFFFF] font-semibold px-6 py-2 rounded-lg hover:bg-[#e08c00] transition sm:max-w-[25%] w-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
