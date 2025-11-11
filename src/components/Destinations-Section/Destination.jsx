import React from "react";

const destinations = [
  {
    city: "Bali",
    description: "Tropical Bliss Awaits",
    img: "/bali.jpg",
  },
  {
    city: "Cappadocia",
    description: "Elegance Above the Clouds",
    img: "/cappadocia.jpg",
  },
  {
    city: "Paris",
    description: "The Art of Love and Luxury",
    img: "/paris.jpg",
  },
  {
    city: "Dubai",
    description: "Desert Gold and City Lights",
    img: "/dubai.jpg",
  },
  {
    city: "Maldives",
    description: "Paradise in Every Wave",
    img: "/maldives.jpg",
  },
  {
    city: "Kyoto",
    description: "Tradition Draped in Tranquility",
    img: "/kyoto.jpg",
  },
];

const Destination = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins text-black mb-4">
          Popular Destinations
        </h2>
        <p className="text-[#2B2B2B] text-lg font-poppins">
          Explore the most loved travel spots this season.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {destinations.map((dest) => (
          <div
            key={dest.city}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={dest.img}
              alt={dest.city}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Info */}
            <div className="absolute left-4 bottom-16 text-white">
              <h3 className="text-2xl font-bold font-poppins">{dest.city}</h3>
              <p className="text-sm font-poppins">{dest.description}</p>
            </div>

            {/* Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="bg-[#ff9700] px-6 py-2 rounded-2xl text-white font-semibold hover:opacity-90 transition">
                View Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
