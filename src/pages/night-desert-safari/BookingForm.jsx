import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [guests, setGuests] = useState(1);

  return (
    <div className="w-full flex justify-center py-10 mt-15">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-md p-10">

        {/* Title */}
        <h2 className="text-2xl text-[#000000] font-poppins font-semibold text-center mb-8">
          Booking Form
        </h2>

        {/* GRID 2 COL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Safari Type */}
          <div className="col-span-2">
            <label className="block mb-1 font-poppins text-[#2B2B2B]">Safari Type</label>
            <input
              type="text"
              className="w-full border border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
              placeholder="Morning Safari"
              defaultValue="Morning Safari"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 text-[#2B2B2B]">Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full border border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
                defaultValue="2025-12-11"
              />
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block mb-1 text-[#2B2B2B]">Time Slot</label>
            <select className="w-full border border-[#00000030] rounded-lg px-4 py-3 focus:outline-none">
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block mb-1 text-[#2B2B2B]">Number of Guests</label>
            <div className="w-full border border-[#00000030] rounded-lg flex items-center">
              <button
                className="px-4 py-3 text-lg"
                onClick={() => guests > 1 && setGuests(guests - 1)}
              >
                -
              </button>
              <div className="flex-1 text-center">{guests}</div>
              <button
                className="px-4 py-3 text-lg"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block mb-1 text-[#2B2B2B]">Pickup Location</label>
            <input
              type="text"
              className="w-full border border-[#00000030] rounded-lg px-4 py-3 focus:outline-none"
              placeholder="Enter pickup location"
            />
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-6">
          <label className="block mb-2 text-[#2B2B2B] font-medium">Add-ons</label>
          <div className="flex items-center flex-wrap gap-6">

            <label className="flex items-center text-[#2B2B2B] gap-2">
              <input type="checkbox" />
              <span>Sandboarding</span>
            </label>

            <label className="flex items-center text-[#2B2B2B] gap-2">
              <input type="checkbox" />
              <span>Private 4x4</span>
            </label>

            <label className="flex items-center text-[#2B2B2B] gap-2">
              <input type="checkbox" />
              <span>Premium BBQ Dinner</span>
            </label>

            <label className="flex items-center text-[#2B2B2B] gap-2">
              <input type="checkbox" />
              <span>Premium Dinner</span>
            </label>

          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="w-full flex justify-center mt-10">
            <Link to="/booking-confirm">
          <button className="bg-[#F49C0B] hover:bg-[#d68707] text-white font-medium px-10 py-3 rounded-lg">
            Confirm Booking
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
