import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const visaTypes = [
  {
    title: "Tourist Visa",
    days: "30 Days",
    price: "AED 380",
    list: ["Passport copy", "Passport-size photo", "Confirmed return ticket"],
    path: "/tourist-visa",
  },
  {
    title: "Long Stay Visa",
    days: "60 Days",
    price: "AED 650",
    list: ["Passport copy", "Passport-size photo", "Confirmed return ticket"],
    path: "/long-stay-visa",
  },
  {
    title: "Multiple Entry Visa",
    days: "30 Days",
    price: "AED 950",
    list: ["Passport copy", "Passport-size photo", "Confirmed return ticket"],
    path: "/multiple-entry-visa",
  },
];

const Cards = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FAFAFA] py-14 font-poppins">
      <h2 className="text-center text-[28px] font-bold text-[#000000] mb-10">
        Visa Type
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {visaTypes.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] shadow-md rounded-xl py-8 px-6 text-center"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-[#000000]">
              {item.title}
            </h3>

            {/* Days & Price */}
            <div className="flex justify-between mt-2 mb-4 text-[#777777]">
              <p>{item.days}</p>
              <p className="font-semibold text-[#E8B958]">{item.price}</p>
            </div>

            {/* List */}
            <ul className="text-left space-y-3 mt-4 text-[#4A4A4A]">
              {item.list.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-green-500 text-lg" /> {text}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate(item.path)}
              className="mt-6 w-full bg-[#F49C0B] text-[#FFFFFF] py-2 rounded-2xl font-medium"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
