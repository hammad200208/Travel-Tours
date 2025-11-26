import React from "react";

const inclusions = [
  {
    img: "standard-cruise/dinner1.png",
    title: "Premium Dinner",
    desc: "Gourmet cuisine and drinks on board",
  },
  {
    img: "standard-cruise/building.png",
    title: "Skyline Views",
    desc: "Stunning Dubai cityscapes along the cruise",
  },
  {
    img: "premium-cruise/music.png",
    title: "Live Entertainment",
    desc: "Traditional music and performances",
  },
];

const Inclusion = () => {
  return (
    <section className="bg-[#FFF8F3] py-14 px-6 font-poppins">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#000000] mb-10">
        Inclusion
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {inclusions.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inclusion;
