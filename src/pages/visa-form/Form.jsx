import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="w-full flex justify-center py-30 px-4 bg-[#FAFAFA]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-10">

        {/* TITLE */}
        <h1 className="text-center text-2xl font-semibold">Visa Application Form</h1>
        <p className="text-center text-gray-600 mt-1">Step 1 – Personal Information</p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Full Name (as on Passport)</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              placeholder=""
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Nationality</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Gender</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Passport Number */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Passport Number</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Passport Expiry Date */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Passport Expiry Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email Address</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Phone Number (with country code)</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-center mt-10">
          <Link to="/visa-form2">
          <button className="bg-[#FF9F1C] text-white px-10 py-3 rounded-lg font-semibold shadow">
            Save & Next
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Form;
