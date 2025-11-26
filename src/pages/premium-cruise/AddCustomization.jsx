import React from "react";

const addOns = [
  { img: "standard-cruise/music.png", label: "Private music performance upgrade" },
  { img: "desert-safari-tickets/photopackage.png", label: "Photographer / video service" },
  { img: "desert-safari-tickets/viplounge.png", label: "Premium drinks package" },
];

export default function AddCustomization() {
  return (
    <section className="bg-[#FFFCF8] py-16">
      {/* Heading */}
      <h2 className="text-2xl text-[#000000] font-poppins md:text-3xl font-bold text-center mb-12">
        Add-ons & Customization
      </h2>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-20 mb-12">
        {addOns.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(314.35deg, #FFE4B5 14.33%, #FFD166 85.69%)",
              }}
            >
              <img src={item.img} alt={item.label} className="w-12 h-12" />
            </div>
            <p className="mt-3 text-sm font-medium text-[#333333] font-poppins">{item.label}</p>
          </div>
        ))}
      </div>

      {/* White Background Section */}
      <div className="bg-[#FFFFFF] max-w-4xl mx-auto p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Picker */}
          <div className="flex items-center border border-[#00000030] rounded-lg px-3 py-2 bg-white">
            <img src="desert-safari-tickets/date.png" alt="date" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Date picker"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Number of Guests */}
          <div className="flex items-center border border-[#00000030] rounded-lg px-3 py-2 bg-white">
            <img src="desert-safari-tickets/user.png" alt="guests" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Number of guests"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Pickup Location */}
          <div className="flex items-center border border-[#00000030] rounded-lg px-3 py-2 bg-white">
            <img src="desert-safari-tickets/location.png" alt="location" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Pickup location"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Promo Code */}
          <div className="flex items-center border border-[#00000030] rounded-lg px-3 py-2 bg-white">
            <img src="desert-safari-tickets/tag.png" alt="promo" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Promo code"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button className="bg-[#F49C0B] hover:bg-[#664003] duration-200 text-white font-medium px-8 py-2 rounded-lg">
            Continue to Payment
          </button>
        </div>
      </div>
    </section>
  );
}
