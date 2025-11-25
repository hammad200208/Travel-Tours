import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Content() {
  return (
    <section className="bg-[#FFF8F3] py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 font-poppins">
        
        {/* Left Section */}
        <div>
          <p className="text-[#333333] font-poppins text-sm leading-relaxed mb-6">
            Drift through the dunes, enjoy an authentic dinner at a Bedouin camp, and fall asleep beneath a canopy of stars. Wake up to the stillness of dawn and a traditional Arabian breakfast.
          </p>

          {/* Item 1 */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="/evening-desert-safari/car.png"
              alt="Dune Bashing"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Dune Adventure</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Thrilling evening drive through Dubai’s golden dunes.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="/night-desert-safari/fire.png"
              alt="Born Fire"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Campfire Night</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Savor BBQ dinner and traditional performances.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img
              src="/night-desert-safari/stars.png"
              alt="Refreshment"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Stargazing & Stay</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Sleep in cozy desert tents under a starlit sky.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-[#2C2C2C] font-poppins font-semibold text-lg mb-5">
            Inclusions
          </h3>

          <ul className="space-y-4 text-sm font-poppins text-[#4A4A4A]">
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Hotel pickup and drop-off
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Dune bashing and sandboarding
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              BBQ buffet dinner
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Cultural performances
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Overnight camp stay
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Breakfast before return
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
