import React, { useState } from "react";

const reviews = [
  {
    text: "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged!",
    name: "Aisha Khan",
    country: "Pakistan 🇵🇰",
  },
  {
    text: "Our Bali honeymoon was magical! Tripsiy took care of every little detail and made it stress-free.",
    name: "Zain & Hira",
    country: "Pakistan 🇵🇰",
  },
  {
    text: "I booked a solo trip to Paris through Tripsiy, and it was seamless — best experience ever!",
    name: "Ahmed Raza",
    country: "Pakistan 🇵🇰",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#fff8f3] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold font-poppins text-[#2C2C2C] mb-10">
          What Our Travelers Say
        </h2>

        {/* Review Card */}
        <div className="flex flex-col items-center md:flex-row gap-6 justify-center relative">
          {/* Vector Image (Left Side) */}
          <img
            src="/Vector.png"
            alt="Decorative Vector"
            className="w-20 h-20 md:w-32 md:h-32 opacity-80"
          />

          {/* Review Text */}
          <div className="md:text-center text-center">
            <p className="text-lg font-poppins text-[#2C2C2C] leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
              “{reviews[current].text}”
            </p>
            <p className="text-[#F6B15C] font-semibold font-poppins">
              — {reviews[current].name}, {reviews[current].country}
            </p>
          </div>
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
