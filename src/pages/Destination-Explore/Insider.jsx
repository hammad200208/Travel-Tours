import React from "react";

const tips = [
  {
    img: "/insider/vector1.png",
    text: "Best Time to Visit: November–March",
  },
  {
    img: "/insider/vector2.png",
    text: "Currency: AED (Dirham)",
  },
  {
    img: "/insider/vector3.png",
    text: "Local Transport: Metro, Taxi, Ride apps",
  },
  {
    img: "/insider/vector4.png",
    text: "Dress Code: Respectful in public areas",
  },
];

const Insider = () => {
  return (
    <section className="bg-[#FAFAFA] py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold font-poppins text-[#000000] mb-10">
        Insider’s Tips
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {tips.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={item.img}
              alt="icon"
              className="w-7 h-7 object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(77%) sepia(46%) saturate(516%) hue-rotate(4deg) brightness(94%) contrast(89%)" }} // color #E8B958
            />
            <p className="text-[#4A4A4A] font-poppins text-sm md:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insider;
