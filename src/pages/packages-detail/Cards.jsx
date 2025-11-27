import React from "react";

const Cards = () => {
  const packages = [
    {
      image: "packages-detail/newzeland.jpg",
      title: "New Zealand Extreme Explorer",
      days: "6 Days / 5 Nights",
      price: "AED 1699",
    },
    {
      image: "packages-detail/bali.jpg",
      title: "Bali Escape",
      days: "5 Days / 4 Nights",
      price: "AED 1899",
    },
    {
      image: "packages-detail/phuket.jpg",
      title: "Phuket Getaway",
      days: "4 Days / 3 Nights",
      price: "AED 1299",
    },
  ];

  return (
    <div className="w-full font-poppins bg-[#FAFAFA] flex flex-col items-center py-10">
      {/* Heading */}
      <h2 className="text-center text-[#000000] text-3xl font-bold mb-8">
        You Might Also Like
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px]"
          >
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-[15px] text-[#2B2B2B] leading-tight">
                {pkg.title}
              </h3>

              <p className="text-xs text-[#777777] mt-1">{pkg.days}</p>

              <p className="text-sm text-[#777777] mt-2">
                Starting from{" "}
                <span className="text-[#E8B958] font-semibold">
                  {pkg.price}
                </span>
              </p>
              <div className="flex justify-center">
              <button className="w-30 bg-[#F49C0B] text-[#FFFFFF] text-xs py-2 mt-4 rounded-md hover:bg-[#e6910a] transition">
                View Details
              </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cards;
