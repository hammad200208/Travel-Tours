import React from "react";
import { FaCheck } from "react-icons/fa";

const Updated = () => {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center font-poppins px-4">
      <div className="bg-white w-full max-w-3xl rounded-[30px] shadow-xl p-10 flex flex-col items-center text-center">

        {/* Check Icon */}
        <div className="w-20 h-20 bg-[#F49C0B] rounded-full flex items-center justify-center mb-6 shadow-md">
          <FaCheck className="text-white text-4xl" />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#111] mb-3">
          Your Visa Application Has Been Submitted!
        </h1>

        {/* Subtitle */}
        <p className="text-[#555] text-sm md:text-base mb-8 max-w-xl">
          We'll email you updates and your e-Visa once it's approved (within 3–5 working days).
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-[#F49C0B] text-white font-medium px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            View Application Summary
          </button>

          <button className="border border-[#F49C0B] text-[#333] font-medium px-8 py-3 rounded-lg hover:bg-[#FFF6E6] transition">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updated;
