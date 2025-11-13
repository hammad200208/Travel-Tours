import React from "react";

const destinations = [
  { img: "dubai2.jpg", name: "Dubai" },
  { img: "bali2.jpg", name: "Bali" },
  { img: "paris2.jpg", name: "Paris" },
];

const Featured = () => {
  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-[#000000] mb-8 text-center">
          Featured Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-115 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-linear-to-t from-black/60 to-transparent text-white text-center py-2">
                {dest.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
