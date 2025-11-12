import React from "react";

const Adventure = () => {
  return (
    <section className="bg-[#F6B15C] flex flex-col items-center justify-center text-center py-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4">
        Ready for your next adventure?
      </h2>
      <p className="text-white text-base sm:text-lg md:text-xl mb-8 max-w-xl">
        Plan your dream trip with expert guidance and unbeatable deals.
      </p>
      <button className="bg-white text-black font-semibold px-6 py-3 rounded transition-transform duration-300 hover:scale-105">
        Start Planning Now
      </button>
    </section>
  );
};

export default Adventure;
