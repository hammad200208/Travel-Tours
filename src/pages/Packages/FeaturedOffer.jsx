import React from "react";

const offers = [
  {
    img: "/featuredoffer.jpg",
    heading: "Summer in Santorini — 20% Off!",
    paragraph: "Limited-time offer valid till July 31.",
  },
  {
    img: "/featuredoffer1.jpg",
    heading: "Maldives Honeymoon Escape — 15% Off",
    paragraph: "Enjoy beachfront villas with romantic private dinners.",
  },
];

const FeatureOffer = () => {
  return (
    <section className="bg-[#FFF8F0] py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        Featured Offers
      </h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden cursor-pointer group">
            {/* Image */}
            <img
              src={offer.img}
              alt={offer.heading}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {offer.heading}
              </h3>
              <p className="text-[#F9E7C0] text-sm md:text-base mb-4">
                {offer.paragraph}
              </p>

              {/* Book Now Button */}
              <button className="bg-white text-[#2C2C2C] px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureOffer;
