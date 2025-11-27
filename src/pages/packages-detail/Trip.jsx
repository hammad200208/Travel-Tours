import React from "react";

const Trip = () => {
  return (
    <div className="w-full flex font-poppins justify-center py-12 px-4 bg-[#FAFAFA]">
      <div className="w-full max-w-4xl bg-[#FFFFFF] shadow-md rounded-2xl p-8">

        {/* Heading */}
        <h2 className="text-center text-[#2C2C2C] text-xl font-semibold mb-8">
          Book Your Trip Now
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-[#00000030] rounded-lg px-4 py-3 mb-5 focus:outline-none"
        />

        {/* Email + Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border text-[#2B2B2B7D] border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border text-[#2B2B2B7D] border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Date Picker + Number of Travelers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="date"
            className="w-full border text-[#2B2B2B7D] border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Number of Travelers"
            className="w-full border text-[#2B2B2B7D] border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Button */}
        <div className="w-full flex justify-center">
          <button className="bg-[#F49C0B] text-[#FFFFFF] px-6 py-3 rounded-lg font-medium hover:bg-[#e6910a] transition">
            Confirm Booking
          </button>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-[#B4B4B4] mt-2">
          Our team will contact you within 24 hours.
        </p>

      </div>
    </div>
  );
};

export default Trip;
