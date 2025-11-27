
import { FaStar, FaRegClock } from "react-icons/fa";
import { FaCheck, FaTimes } from "react-icons/fa";

const Tour = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">

        {/* Heading + Price + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#000000]">
              Dubai Luxury Tour
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <FaStar className="text-[#F6B15C]" />
              <FaStar className="text-[#F6B15C]" />
              <FaStar className="text-[#F6B15C]" />
              <FaStar className="text-[#F6B15C]" />
              <FaStar className="text-[#F6B15C]" />
            </div>

            {/* Days/Nights */}
            <div className="flex items-center gap-2 text-[#777777] mt-2">
              <FaRegClock />
              <p className="font-medium">8 Days / 7 Nights</p>
            </div>

            <p className="text-[#777777] mt-1">
              Desert safari, Burj Khalifa Tickets, Dubai Mall Experience, Dhow Cruise, Global Village Dubai
            </p>
          </div>

          {/* Price */}
          <div className="text-right mt-5 md:mt-0">
            <p className="text-xl font-bold text-[#E8B958]">
              <span className="text-md pr-2 font-medium text-[#777777]">From</span>
              AED 7,000<span className="text-md font-medium text-[#777777]">/person</span>
            </p>

            <button className="bg-[#F49C0B] text-white px-6 py-3 rounded-xl font-medium mt-4 hover:scale-105 transition">
              Book This Package
            </button>
          </div>
        </div>

        {/* Itinerary */}
        <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Itinerary</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { day: "Day 1", text: "Arrival in Dubai, city highlights" },
            { day: "Day 2", text: "Desert safari, camel rides, BBQ dinner" },
            { day: "Day 3–4", text: "Atlantis, aquarium, Dhow cruise, Dubai Fountain" },
            { day: "Day 5", text: "Palm Jumeirah, Jumeirah Beach" },
            { day: "Day 6–7", text: "Dubai Frame, Al Fahidi, shopping, Global Village" },
            { day: "Day 8", text: "Leisure morning, departure" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              <h4 className="text-lg font-semibold text-[#2C2C2C]">{item.day}</h4>
              <p className="text-[#606060] mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Inclusions / Exclusions */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Inclusions</h3>

            {["Hotel", "Breakfast", "Airport Transfer", "Tours"].map((item, i) => (
              <p key={i} className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                <FaCheck className="text-green-600" /> {item}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Exclusions</h3>

            {["Flights", "Personal Expenses", "Tips"].map((item, i) => (
              <p key={i} className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                <FaTimes className="text-red-500" /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
