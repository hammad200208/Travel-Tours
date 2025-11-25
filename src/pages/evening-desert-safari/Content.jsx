import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Content() {
  return (
    <section className="bg-[#FFF8F3] py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 font-poppins">
        
        {/* Left Section */}
        <div>
          <p className="text-[#333333] font-poppins text-sm leading-relaxed mb-6">
            As the sun dips below the dunes, embark on an exhilarating ride, enjoy cultural performances, and dine under the stars in a traditional Bedouin camp.
          </p>

          {/* Item 1 */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="/evening-desert-safari/car.png"
              alt="Dune Bashing"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Dune Bashing</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Ride across golden dunes in a 4x4 adventure.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="/evening-desert-safari/sun.png"
              alt="Sun Shine"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Sunset Views</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Capture Dubai’s breathtaking golden-hour skyline.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img
              src="/evening-desert-safari/fire.png"
              alt="Refreshment"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-semibold text-base">Bedouin Camp</h3>
              <p className="text-[#555555] font-poppins text-sm">
                Enjoy BBQ dinner, music, and mesmerizing fire shows.
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
              4x4 dune drive
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Camel ride
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              BBQ buffet dinner
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Fire and Tanoura dance shows
            </li>
            <li className="flex items-center gap-3">
              <FaCheck className="text-green-600" />
              Henna painting
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
