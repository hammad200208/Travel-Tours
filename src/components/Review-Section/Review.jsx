import React, { useState } from "react";

const reviews = [
  {
    text: "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged! Tripsiy took care of every little detail",
    name: "Aisha Khan",
    country: "Pakistan",
    flag: "https://flagcdn.com/w40/pk.png",
  },
  {
    text: "Our Bali honeymoon was magical! Tripsiy took care of every little detail and made it stress-free.",
    name: "Zain & Hira",
    country: "Pakistan",
    flag: "https://flagcdn.com/w40/pk.png",
  },
  {
    text: "I booked a solo trip to Paris through Tripsiy, and it was seamless — best experience ever!",
    name: "Ahmed Raza",
    country: "Pakistan",
    flag: "https://flagcdn.com/w40/pk.png",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#FFF8F3] py-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="max-w-3xl px-6 relative">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#2C2C2C] mb-10">
          What Our Travelers Say
        </h2>

        {/* Review Section */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Vector Image */}
          <img
            src="/Vector.png"
            alt="Decorative Vector"
            className="absolute left-0 top-1/4 -translate-y-1/2 w-28 md:w-36"
          />

          {/* Review Text */}
          <p className="text-lg font-poppins text-[#2C2C2C] leading-relaxed max-w-xl mx-auto mb-4 relative z-10 md:px-4">
            “{reviews[current].text}”
          </p>

          {/* Name + Country + Flag */}
          <p className="text-[#F6B15C] font-semibold font-poppins flex items-center justify-center gap-2 relative z-10">
            — {reviews[current].name}
            {reviews[current].country}
            <img
              src={reviews[current].flag}
              alt="Pakistan Flag"
              className="w-5 h-5 object-cover"
            />
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-[#F6B15C] scale-110" : "bg-[#E0E0E0]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
