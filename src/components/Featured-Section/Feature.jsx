import React from "react";

const features = [
  {
    img: "/city.jpg",
    city: "Dubai City Tour",
    description: "3 days / 2 nights",
    price: "AED 499",
  },
  {
    img: "/island.jpg",
    city: "Luxury Island Escape",
    description: "5 days / 4 nights",
    price: "AED 1999",
  },
  {
    img: "/ballon.jpg",
    city: "Hot Air Balloon Experience",
    description: "4 days / 3 nights",
    price: "AED 1299",
  },
  {
    img: "/greek.jpg",
    city: "Romantic Greek Getaway",
    description: "5 days / 4 nights",
    price: "AED 1799",
  },
];

const Feature = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins text-[#2C2C2C] mb-4">
          Featured Packages
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={feature.img}
              alt={feature.city}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl text-[#2C2C2C] font-bold font-poppins mb-1">
                {feature.city}
              </h3>
              <p className="text-gray-500 font-poppins mb-2">{feature.description}</p>
              <p className="text-gray-700 font-poppins">
                Starting from{" "}
                <span className="text-[#F49C0B] font-semibold">{feature.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
