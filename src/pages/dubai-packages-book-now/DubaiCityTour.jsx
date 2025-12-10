import React from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const DubaiCityTour = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-30 pb-10 font-poppins ">
      {/*Title */}
      <h1 className="text-3xl font-bold text-[#2C2C2C] mb-6">
        Dubai City Tour Package
      </h1>

      {/*Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/*LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/*Image Gallery */}
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

          {/*Inclusions */}
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

          {/*Exclusions */}
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

          {/*How to Redeem */}
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

          {/*Location */}
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
    <button className="w-full bg-[#F49C0B] text-white py-3 rounded-lg font-semibold hover:bg-[#d88509] transition">
      Book Now
    </button>

    {/* WhatsApp Button with Icon */}
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
    </section>
  );
};

export default DubaiCityTour;
