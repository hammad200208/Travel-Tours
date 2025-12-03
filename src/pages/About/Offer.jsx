import React from "react";

const offers = [
  {
    icon: "/airplane.png",
    title: "Custom Travel Packages",
    description:
      "Personalized itineraries designed around your preferences, budget, and dream destinations.",
  },
  {
    icon: "/hotel.png",
    title: "Hotel & Flight Booking",
    description:
      "Seamless booking experiences with trusted global partners for comfort and convenience.",
  },
  {
    icon: "/bus.png",
    title: "Guided Tours",
    description:
      "Expert-led tours that let you explore destinations deeply, safely, and stress-free.",
  },
  {
    icon: "/sun.png",
    title: "Honeymoon Getaways",
    description:
      "Romantic escapes crafted to create unforgettable moments with your special.",
  },
  {
    icon: "/compass.png",
    title: "Adventure Trips",
    description:
      "Thrilling outdoor journeys for explorers who crave excitement and new challenges.",
  },
  {
    icon: "/world.png",
    title: "International Destinations",
    description:
      "Discover handpicked locations across the globe, curated for every kind of traveler.",
  },
];

const Offer = () => {
  return (
    <section className="w-full bg-[#FFF6EC] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-12">
          What We Offer
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={offer.icon}
                alt={offer.title}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">
                {offer.title}
              </h3>
              <p className="text-[#4A4A4A] text-base leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
