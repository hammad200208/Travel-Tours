import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Form4 = () => {
  return (
    <div className="w-full min-h-screen bg-[#ffffff] font-poppins flex justify-center items-start pt-30 px-4">
      <div className="w-full max-w-3xl">

        {/* PAGE HEADING */}
        <h2 className="text-2xl text-[#000000] font-semibold text-center mb-1">
          Visa Application Form
        </h2>
        <p className="text-[#2B2B2B] text-center mb-8">
          Step 4 – Payment & Review
        </p>

        {/* APPLICATION SUMMARY */}
        <div className="rounded-xl p-6 mb-6">
          <div className="bg-[#FFF8F0] font-semibold rounded-xl py-4 px-4 text-[#000000]">
            <h3>Application Summary</h3>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-y-3 text-[#2B2B2B]">
            <p className="font-medium">Visa Type</p> <p>30-Day Tourist Visa</p>
            <p className="font-medium">Applicant Name</p> <p>Ayesha Khan</p>
            <p className="font-medium">Passport No.</p> <p>BN567890</p>
            <p className="font-medium">Nationality</p> <p>Pakistan</p>
            <p className="font-medium">Processing Time</p> <p>3–5 Working Days</p>

            <p className="font-medium">Visa Fee</p> <p>AED 450</p>
            <p className="font-medium">Processing Fee</p> <p>AED 100</p>
            <p className="font-medium">VAT</p> <p>AED 25</p>

            <p className="font-semibold">Total</p>
            <p className="font-semibold">AED 575</p>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="rounded-xl p-6 mb-6 ">
          <div className="bg-[#FFF8F0] rounded-xl p-4 text-[#000000]">
            <h3 className="font-semibold">Payment Method</h3>
          </div>

          {/* Radio Options */}
          <div className="space-y-3 mb-5 mt-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="accent-[#F49C0B]"
              />
              <span className="text-[#2B2B2B]">Credit/Debit Card</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-[#F49C0B]" />
              <span className="text-[#2B2B2B]">PayPal</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-[#F49C0B]" />
              <span className="text-[#2B2B2B]">Apple Pay</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-[#F49C0B]" />
              <span className="text-[#2B2B2B]">Bank Transfer</span>
            </label>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-1 text-[#2B2B2B]">Cardholder Name</p>
              <input
                type="text"
                className="w-full border border-[#00000030] rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <p className="text-sm mb-1 text-[#2B2B2B]">Expiry Date</p>
              <input
                type="text"
                className="w-full border border-[#00000030] rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <p className="text-sm mb-1 text-[#2B2B2B]">Card Number</p>
              <input
                type="text"
                className="w-full border border-[#00000030] rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <p className="text-sm mb-1 text-[#2B2B2B]">CVV</p>
              <input
                type="text"
                className="w-full border border-[#00000030] rounded-lg px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* TERMS CHECKBOX */}
        <div className="flex items-start gap-3 mb-6">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 accent-[#008000]"
          />
          <p className="text-sm text-[#2B2B2B]">
            I confirm that all details are correct and I agree to the Terms & Conditions.
          </p>
        </div>

        {/* PAYMENT BUTTON */}
        <div className="w-full flex justify-center mb-10">
          <Link to="/visa-updated">
          <button className="bg-[#F49C0B] hover:bg-[#e28b00] text-white font-medium px-10 py-3 rounded-lg shadow">
            Complete Payment
          </button>
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default Form4;
