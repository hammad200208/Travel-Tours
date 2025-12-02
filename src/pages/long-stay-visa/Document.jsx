import React from "react";
import { FaCheck } from "react-icons/fa";

const Documents = () => {
  const items = [
    "Passport copy (valid 6+ months)",
    "Passport-size photograph (white background)",
    "Bank statement (last 3 months)",
    "Proof of accommodation",
    "Return or onward flight ticket",
  ];

  return (
    <div className="bg-[#FFF8F3] py-12 font-poppins">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#2C2C2C] mb-10">
        Required Documents
      </h2>

      {/* Slightly left from center */}
      <div className="max-w-3xl mx-auto pl-4 md:pl-40 space-y-4">

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <FaCheck className="text-green-600" />
            <p className="text-[#4A4A4A] text-sm sm:text-base">{item}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Documents;
