import React from "react";

const ChooseUs = () => {
  const cards = [
    {
      // card 1: border image + tick centered
      icon: { border: "/verify.png", tick: "/verify1.png" },
      title: "Trusted Expertise",
      description:
        "Backed by years of travel expertise, we take pride in curating flawless itineraries that bring your dream destinations to life.",
    },
    {
      icon: "/diamond.png",
      title: "Affordable Luxury",
      description:
        "Experience the comfort of premium travel without breaking the bank — we bring you the best stays, flights, and experiences at the most reasonable prices.",
    },
    {
      icon: "/envelope.png",
      title: "Seamless Experience",
      description:
        "From planning to booking and beyond, we take care of every detail so you can relax, explore, and enjoy your trip without a single worry.",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-12">
          Why Choose Tripsiy?
        </h2>

        {/* Cards Row */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6"
            >
              {/* Special composition for first card */}
              {index === 0 ? (
                <div
                  className="w-20 h-20 mb-6 relative flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${card.icon.border}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* tick mark centered */}
                  <img
                    src={card.icon.tick}
                    alt="Verified tick"
                    className="relative w-8 h-8"
                  />
                </div>
              ) : (
                // normal icon for other cards
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 mb-6"
                />
              )}

              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">
                {card.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
