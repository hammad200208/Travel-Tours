import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Booking = () => {
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();


  return (
    <div className="w-full flex flex-col items-center py-10 px-4 mt-24">
      {/* Top Heading */}
      <h2 className="text-2xl text-[rgb(0,0,0)] font-poppins font-bold">Start Your Booking</h2>
      <p className="text-[#2B2B2B] font-poppins text-sm mt-1 text-center">
        Tell us your details and we’ll arrange the perfect travel experience.
      </p>

      {/* Main Card */}
      <div className="w-full max-w-5xl mt-8 bg-white rounded-2xl shadow p-8 border border-[#00000029]">
        
        {/* Trip Details */}
        <h3 class="font-semibold text-lg font-poppins text-[#000000]">Trip Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Destination */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Destination</label>
            <select className="border border-[#00000029] rounded-md p-3 outline-none">
              <option>Dubai</option>
              <option>Turkey</option>
              <option>Maldives</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Number of Guests</label>
            <div className="border border-[#00000029] rounded-md flex items-center justify-between">
              <button
                onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                className="px-4 py-3"
              >
                −
              </button>
              <span className="px-6">{guests}</span>
              <button
                onClick={() => setGuests((prev) => prev + 1)}
                className="px-4 py-3"
              >
                +
              </button>
            </div>
          </div>

          {/* Package Type */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Package Type</label>
            <select className="border border-[#00000029] rounded-md p-3 outline-none">
              <option>Luxury</option>
              <option>Adventure</option>
              <option>Family</option>
              <option>Honeymoon</option>
            </select>
          </div>
        </div>

        {/* Dates + Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Left: Dates */}
          <div>
            <h3 className="font-semibold text-lg text-[#000000] font-poppins">Dates</h3>

            {/* Check-in */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Check-in Date</label>
              <input
                type="date"
                className="border border-[#00000029] rounded-md p-3 outline-none"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Check-out Date</label>
              <input
                type="date"
                className="border border-[#00000029] rounded-md p-3 outline-none"
              />
            </div>
          </div>

          {/* Right: Personal Info */}
          <div>
            <h3 className="font-semibold text-lg text-[#000000] font-poppins">Personal Info</h3>

            {/* Full Name */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Full Name</label>
              <input
                type="text"
                className="border border-[#00000029] rounded-md p-3 outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium mb-1 text-[#2B2B2B] font-poppins">Email</label>
              <input
                type="email"
                className="border border-[#00000029] rounded-md p-3 outline-none"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
          onClick={() => navigate("/confirm")}
          className="bg-[#F49C0B] text-[#FFFFFF] font-medium font-poppins px-6 py-3 rounded-md">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
