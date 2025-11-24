import React from "react";

const tickets = [
  {
    img: "desert-safari-tickets/morningsafari.png",
    title: "Morning Safari",
    desc: "Sunrise dune drive, sandboarding, and light refreshments.",
    duration: "4 hrs",
    price: "AED 250",
  },
  {
    img: "desert-safari-tickets/eveningsafari.png",
    title: "Evening Safari",
    desc: "Dune bashing, BBQ dinner, and live entertainment.",
    duration: "6 hrs",
    price: "AED 330",
  },
  {
    img: "desert-safari-tickets/nightsafari.png",
    title: "Overnight Safari",
    desc: "Sunset to sunrise — camp under the stars and sky.",
    duration: "12 hrs",
    price: "AED 440",
  },
];

export default function TicketOption() {
  return (
    <section className="bg-[#FFF8F3] py-16">
      <h2 className="text-3xl text-[#000000] font-poppins font-bold text-center mb-12">
        Ticket Options
        </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {tickets.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />

            {/* Title */}
            <h3 className="text-lg text-[#2B2B2B] font-poppins font-semibold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-[#4A4A4A] font-poppins text-sm mb-4">{item.desc}</p>

            {/* Duration & Price */}
            <div className="flex justify-between w-full text-sm mb-4">
              <span className="text-[#777777] font-poppins">{item.duration}</span>
              <span className="font-poppins font-semibold text-[#E8B958]">
                From {item.price}
              </span>
            </div>

            {/* Button */}
            <button className="bg-[#F49C0B] text-white py-2 px-6 rounded-xl hover:bg-[#f49b0bea] duration-200">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
