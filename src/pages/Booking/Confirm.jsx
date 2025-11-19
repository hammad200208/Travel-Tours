import React from "react";
import { FaCheck } from "react-icons/fa";

const Confirm = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-4 mt-24 bg-white">

      {/* Tick Icon */}
      <img 
        src="/tickmark.png" 
        alt="success" 
        className="w-20 h-20 mb-4"
      />

      {/* Heading */}
      <h1 className="text-3xl font-bold font-poppins  text-[#000000] text-center">
        Booking Confirmed!
      </h1>
      <p className="text-[#2B2B2B] font-poppins text-center mt-2">
        Thank you for booking with Tripsiy. <br />
        A confirmation email with all details has been sent to your inbox.
      </p>

      {/* Summary Card */}
      <div className="w-full max-w-2xl bg-[#FFF4E6] rounded-xl shadow-sm p-4 mt-10 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#000000] font-poppins">
          Booking Summary
        </h2>
        <button className="text-sm [#2B2B2B] font-poppins underline">
          Download Receipt
        </button>
      </div>

      {/* Summary Info */}
      <div className="w-full max-w-2xl bg-white p-6">
        <div className="grid grid-cols-2 gap-y-3 text-[#2B2B2B] text-sm">
          <p className="font-medium">Destination</p>
          <p>Dubai</p>

          <p className="font-medium">Package Type</p>
          <p>Dubai Luxury Escape</p>

          <p className="font-medium">Check-in Date</p>
          <p>18 Nov 2025</p>

          <p className="font-medium">Check-out Date</p>
          <p>21 Oct 2025</p>

          <p className="font-medium">Guests</p>
          <p>2 Adults</p>

          <p className="font-medium">Total Amount</p>
          <p>AED 999</p>
        </div>
      </div>

      {/* Next Steps */}
      <h2 className="text-xl font-bold text-[#000000] font-poppins mt-10">Next Steps</h2>
      <div className="text-[#4A4A4A] font-poppins text-sm mt-4 space-y-2">
        <p className="flex items-center gap-2">
          <FaCheck className="text-green-600" /> 
          Keep your confirmation email handy
        </p>
        <p className="flex items-center gap-2">
          <FaCheck className="text-green-600" /> 
          Expect a WhatsApp update 12 hrs before pickup
        </p>
        <p className="flex items-center gap-2">
          <FaCheck className="text-green-600" /> 
          You can modify or cancel within 24 hrs
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-[#F49C0B] text-white px-6 py-2 rounded-lg text-sm shadow-md hover:bg-orange-600">
          View My Bookings
        </button>
        <button className="border border-[#F49C0B] text-[#4A4A4A] px-6 py-2 rounded-lg text-sm shadow-md hover:bg-gray-100">
          Explore More Adventures
        </button>
      </div>

    </div>
  );
};

export default Confirm;
