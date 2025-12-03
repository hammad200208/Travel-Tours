import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    title: "Standard Cruise",
    duration: "2 hrs",
    price: "AED 250",
    features: ["Buffet", "Skyline views", "Evening cruise experience"],
  },
  {
    title: "Premium Cruise",
    duration: "2.5 hrs",
    price: "AED 400",
    features: [
      "Premium dinner",
      "Live music & performances",
      "Dubai skyline views",
    ],
  },
  {
    title: "Private Cruise",
    duration: "3 hrs",
    price: "AED 800",
    features: [
      "Private table on deck",
      "Photographer / Video",
      "Premium dinner & skyline views",
    ],
  },
];

export default function Packages() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF6EC] py-16 px-6 font-poppins">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#000000]">
        Packages
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 text-center"
          >
            <h3 className="text-lg font-semibold text-[#2B2B2B]">
              {pkg.title}
            </h3>

            {/* Time + Price in one line */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-[#777777]">{pkg.duration}</p>
              <p className="text-[#E8B958] font-semibold">{pkg.price}</p>
            </div>

            <ul className="text-sm text-[#4A4A4A] mt-4 space-y-2 text-left">
              {pkg.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                index === 0
                  ? navigate("/standard-cruise")
                  : index === 1
                  ? navigate("/premium-cruise")
                  : navigate("/private-cruise")
              }
              className="mt-6 bg-[#F49C0B] text-[#FFFFFF] hover:bg-[#d88509] cursor-pointer font-medium px-5 py-2 rounded-lg w-full"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
