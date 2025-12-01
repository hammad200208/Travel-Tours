import React from "react";
import { Link } from "react-router-dom";

const Form2 = () => {
  return (
    <div className="w-full flex justify-center py-30 px-4 bg-[#FAFAFA]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-10">

        {/* TITLE */}
        <h1 className="text-center text-2xl font-semibold">Visa Application Form</h1>
        <p className="text-center text-gray-600 mt-1">Step 2 – Travel Details</p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* Visa Type */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Visa Type</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>Tourist</option>
              <option>Transit</option>
              <option>Business</option>
            </select>
          </div>

          {/* Address in UAE */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Address in UAE</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Intended Arrival Date */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Intended Arrival Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Duration of Stay */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Duration of Stay</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
            </select>
          </div>

          {/* Purpose of Visit – full width */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Purpose of Visit</label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>Tourism</option>
              <option>Business</option>
              <option>Family Visit</option>
              <option>Transit</option>
            </select>
          </div>

        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-center mt-10">
            <Link to="/visa-form3">
          <button className="bg-[#FF9F1C] text-white px-10 py-3 rounded-lg font-semibold shadow">
            Save & Next
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Form2;
