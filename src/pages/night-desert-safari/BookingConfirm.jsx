import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const BookingConfirm = () => {
  return (
    <div className="w-full flex justify-center py-20 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl p-10 shadow">

        {/* SUCCESS ICON */}
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="/tickmark.png"
            className="w-16 h-16 mb-4"
            alt="Success"
          />
          <h1 className="text-2xl text-[#000000] font-poppins font-semibold mb-2">Booking Confirmed!</h1>
          <p className="text-[#2B2B2B] font-poppins text-center">
            Your Desert Safari adventure is all set. <br />
            A confirmation email with all details has been sent to your inbox.
          </p>
        </div>

        {/* SUMMARY HEADER */}
        <div className="bg-[#FFF8F0] rounded-xl p-4 mt-10 flex items-center justify-between">
          <h2 className="font-medium text-[#000000] font-poppins text-lg">Booking Summary</h2>
          <button className="text-sm text-[#2B2B2B] underline">
            Download Receipt
          </button>
        </div>

        {/* SUMMARY DETAILS */}
        <div className="grid grid-cols-2 gap-y-4 mt-6 text-sm">
          <p className="text-[#2B2B2B] font-semibold">Booking ID</p>
          <p className="font-medium text-[#2B2B2B]">TRP-DSA-0943</p>

          <p className="text-[#2B2B2B] font-semibold">Name</p>
          <p className="font-medium text-[#2B2B2B]">Ahmad Khan</p>

          <p className="text-[#2B2B2B] font-semibold">Safari Type</p>
          <p className="font-medium text-[#2B2B2B]">Evening Desert Safari</p>

          <p className="text-[#2B2B2B] font-semibold">Date</p>
          <p className="font-medium text-[#2B2B2B]">18 Oct 2025</p>

          <p className="text-[#2B2B2B] font-semibold">Guests</p>
          <p className="font-medium text-[#2B2B2B]">2 Adults</p>

          <p className="text-[#2B2B2B] font-semibold">Pickup Location</p>
          <p className="font-medium text-[#2B2B2B]">Hyatt Regency, Dubai</p>

          <p className="text-[#2B2B2B] font-semibold">Add-ons</p>
          <p className="font-medium text-[#2B2B2B]">Private 4x4, Premium BBQ Dinner</p>

          <p className="text-[#2B2B2B] font-semibold">Total Amount</p>
          <p className="font-medium text-[#2B2B2B]">AED 690</p>
        </div>

        {/* SAFARI AT A GLANCE */}
        <h2 className="text-lg font-semibold font-poppins text-[#000000] text-center mt-12 mb-6">
          Your Safari at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="border border-[#00000030] rounded-xl p-5 flex flex-col items-center text-center">
            <img src="/night-desert-safari/time.png" className="w-10 h-10 mb-3" />
            <h3 className="font-poppins font-medium">Pickup Time</h3>
            <p className="text-[#2B2B2B] text-sm">3:30 PM</p>
          </div>
          <div className="border border-[#00000030] rounded-xl p-5 flex flex-col items-center text-center">
            <img src="night-desert-safari/location.png" className="w-10 h-10 mb-3" />
            <h3 className="font-poppins font-medium">Meet Point</h3>
            <p className="text-[#2B2B2B] text-sm">Hotel lobby</p>
          </div>
          <div className="border border-[#00000030] rounded-xl p-5 flex flex-col items-center text-center">
            <img src="night-desert-safari/bag.png" className="w-10 h-10 mb-3" />
            <h3 className="font-medium font-poppins">What to Bring</h3>
            <p className="text-[#2B2B2B] text-sm">Sunglasses, jacket</p>
          </div>
          <div className="border border-[#00000030] rounded-xl p-5 flex flex-col items-center text-center">
            <img src="night-desert-safari/call.png" className="w-10 h-10 mb-3" />
            <h3 className="font-medium font-poppins">Support</h3>
            <p className="text-[#2B2B2B] text-sm">+971 800 TRIPSY</p>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg text-[#000000] font-poppins font-semibold mt-12 mb-4">Next Steps</h2>

          <ol className="list-decimal list-inside text-[#4A4A4A] font-poppins space-y-2 mb-10 text-sm">
            <li className="flex items-center gap-2">
              <AiOutlineCheck className="text-green-600" /> Keep your confirmation email handy
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheck className="text-green-600" /> Expect a WhatsApp update 12 hrs before pickup
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheck className="text-green-600" /> You can modify or cancel within 24 hrs
            </li>
          </ol>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#F49C0B] text-white rounded-lg hover:bg-[#d68707] transition duration-300">
            View My Bookings
          </button>

          <button className="px-8 py-3 border border-[#F49C0B] rounded-lg hover:bg-gray-50">
            Explore More Adventures
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
