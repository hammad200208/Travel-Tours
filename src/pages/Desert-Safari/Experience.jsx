import React from "react";

const highlights = [
  {
    title: "Dune Bashing",
    desc: "Thrilling 4x4 rides through rolling sands.",
    img: "desert-safari/dunebashing.png",
  },
  {
    title: "Desert Camp",
    desc: "Enjoy BBQ, Arabic music, and cultural shows.",
    img: "desert-safari/desertcamp.png",
  },
  {
    title: "Camel Ride",
    desc: "A peaceful journey through timeless dunes.",
    img: "desert-safari/camelride.png",
  },
  {
    title: "Sunset View",
    desc: "Capture unforgettable desert sunsets.",
    img: "desert-safari/sunsetview.png",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#FFF8F3] py-14 px-5 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold font-poppins text-[#000000]">
        Experience Highlights
      </h2>
      <p className="text-center text-[#2B2B2B] mt-2 font-poppins text-sm md:text-base">
        Ride across golden dunes, enjoy a traditional Bedouin camp, and watch the desert come alive under starlit skies.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon Box */}
            <div
              className="w-16 h-16 flex items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(315.51deg, #FFE4B5 0.44%, #FFD166 99.56%)",
              }}
            >
              <img src={item.img} alt={item.title} className="w-9 h-9" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold font-poppins text-[#2B2B2B]">
                {item.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm font-poppins mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
