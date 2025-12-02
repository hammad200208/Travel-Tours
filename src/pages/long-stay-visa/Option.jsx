import React from "react";

const Option = () => {
  return (
    <div className="bg-[#FAFAFA] py-12 font-poppins">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#000000] mb-10">
        Visa Options
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 90-Day Visa */}
        <div className="bg-[#FFFFFF] rounded-xl shadow-md p-6">
          <h3 className="text-lg text-[#2B2B2B] font-semibold mb-4">90-Day Visa</h3>

          <ul className="text-sm text-[#2B2B2B] space-y-2">
            <li className="flex justify-between"><strong>Duration:</strong> <span>3 Months</span></li>
            <li className="flex justify-between"><strong>Processing Time:</strong> <span>3 – 5 Days</span></li>
            <li className="flex justify-between"><strong>Validity:</strong> <span>60 Days from Issue Date</span></li>
            <li className="flex justify-between"><strong>Price:</strong> <span>AED 800</span></li>
            <li className="flex justify-between"><strong>Entry Type:</strong> <span>Single Entry</span></li>
            <li className="flex justify-between"><strong>Extension:</strong> <span>Available up to 90 Days</span></li>
          </ul>
        </div>

        {/* 180-Day Visa */}
        <div className="bg-[#FFFFFF] rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">180-Day Visa</h3>

          <ul className="text-sm text-[#2B2B2B] space-y-2">
            <li className="flex justify-between"><strong>Duration:</strong> <span>6 Months</span></li>
            <li className="flex justify-between"><strong>Processing Time:</strong> <span>5 – 7 Days</span></li>
            <li className="flex justify-between"><strong>Validity:</strong> <span>60 Days from Issue Date</span></li>
            <li className="flex justify-between"><strong>Price:</strong> <span>AED 1150</span></li>
            <li className="flex justify-between"><strong>Entry Type:</strong> <span>Single Entry</span></li>
            <li className="flex justify-between"><strong>Extension:</strong> <span>Renewable</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Option;
