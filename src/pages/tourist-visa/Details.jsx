import React from "react";
import { FaCheck } from "react-icons/fa";

const Details = () => {
  return (
    <div className="w-full bg-[#FAFAFA] font-poppins flex justify-center py-14 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl text-[#2B2B2B] font-semibold text-center">Visa Details</h2>

          <div className="text-sm">
            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Duration</span>
              <span className="">30 Days</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Processing Time</span>
              <span className="">24–72 Hours</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Validity</span>
              <span className="">60 Days from Issue Date</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Price</span>
              <span className="">AED 380</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Entry Type</span>
              <span className="">Single Entry</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-[#2B2B2B]">Extension</span>
              <span className="">Available up to 60 Days</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE REQUIREMENTS */}
        <div className="space-y-4 md:space-y-8 text-[#4A4A4A] text-sm">
          {[
            "Passport copy (valid for 6 months)",
            "Passport-size photograph (white background)",
            "Confirmed return ticket",
            "Hotel booking (optional)",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Details;
