import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="w-full bg-[#F6B15C] font-poppins py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Your Dubai getaway is just a visa away
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-2xl mb-8">
        Apply now and get ready for golden dunes, city lights, and endless memories.
      </p>

      {/* Button */}
      <Link to="/visa-form">
      <button className="bg-white text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Apply for Tourist Visa
      </button>
      </Link>
    </section>
  );
};

export default Booking;
