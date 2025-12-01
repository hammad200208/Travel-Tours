import React from "react";

const Booking = () => {
  return (
    <section className="w-full bg-[#F6B15C] font-poppins py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Your Dubai adventure starts with a visa
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-xl mb-8">
        Quick approvals, expert help, and 24/7 updates — all in one place.
      </p>

      {/* Button */}
      <button className="bg-white text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Apply for Dubai Visa
      </button>
    </section>
  );
};

export default Booking;
