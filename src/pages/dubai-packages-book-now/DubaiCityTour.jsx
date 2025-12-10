import React, { useState } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const DubaiCityTour = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-30 pb-10 font-poppins ">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#2C2C2C] mb-6">
        Dubai City Tour Package
      </h1>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <img
              src="/city.jpg"
              alt="Dubai"
              className="col-span-2 h-80 w-full object-cover rounded-xl"
            />
            <div className="grid gap-4">
              <img
                src="/island.jpg"
                className="h-[150px] w-full object-cover rounded-xl"
              />
              <img
                src="/ballon.jpg"
                className="h-[150px] w-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Dubai City Tour Inclusions
            </h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Hotel pickup and drop-off",
                "Professional tour guide",
                "Visit to Burj Al Arab, Palm Jumeirah, Jumeirah Mosque",
                "Dubai Creek & Gold Souk visit",
                "Air-conditioned vehicle",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Exclusions</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Personal expenses",
                "Meals & drinks",
                "Any extra activities not mentioned",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Redeem */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">How to Redeem</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "After booking, ticket will be sent on WhatsApp or Email",
                "Show digital voucher to the driver/guide",
                "Pickup timing will be confirmed one day before",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#F49C0B] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <p className="text-gray-600 mb-3">Dubai, United Arab Emirates</p>
            <iframe
              className="w-full h-64 rounded-xl"
              src="https://www.google.com/maps?q=Dubai&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white shadow-xl rounded-2xl p-6 h-fit sticky top-24">
          <p className="text-gray-500 text-sm">From</p>

          <h3 className="text-3xl font-bold text-[#F49C0B] mb-4">
            AED 499
          </h3>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            {/* Book Now Button */}
            <button
              onClick={() => setOpenForm(true)}
              className="w-full bg-[#F49C0B] text-white py-3 rounded-lg font-semibold hover:bg-[#d88509] transition"
            >
              Book Now
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971565880199"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-xl" />
              Book via WhatsApp
            </a>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="font-semibold mb-4">Why Choose Us?</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              {[
                "Best Price Guarantee",
                "Secure Online Payments",
                "24/7 Support",
                "Trusted by 10,000+ Travelers",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOOKING FORM MODAL */}

  {openForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    <div className="bg-white w-full max-w-lg rounded-xl p-6 relative max-h-[90vh] overflow-y-auto">

      {/* Close Button */}
      <button
        onClick={() => setOpenForm(false)}
        className="absolute top-3 right-3 text-gray-500 text-xl z-10"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Book Dubai City Tour
      </h2>

      {/* Form with onSubmit handler */}
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          
          // Collect form data
          const formData = new FormData(e.target);
          const bookingData = {
            fullName: formData.get("fullName"),
            phoneNumber: formData.get("phoneNumber"),
            whatsappNumber: formData.get("whatsappNumber"),
            date: formData.get("date"),
            persons: formData.get("persons"),
            pickupLocation: formData.get("pickupLocation"),
            extraRequirements: formData.get("extraRequirements"),
          };

          console.log("Booking Data:", bookingData); // Replace with API call or localStorage logic
          alert("Booking submitted successfully!");

          setOpenForm(false); // Close modal
        }}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <input
          type="tel"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <input
          type="date"
          name="date"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <input
          type="number"
          name="persons"
          placeholder="Number of Persons"
          min="1"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
          required
        />

        <textarea
          name="extraRequirements"
          placeholder="Extra Requirements (Optional)"
          rows="3"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F49C0B]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#F49C0B] text-white py-3 rounded-lg font-semibold hover:bg-[#d88509] transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  </div>
)}


    </section>
  );
};

export default DubaiCityTour;
