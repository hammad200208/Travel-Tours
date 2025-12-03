import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const features = [
  {
    img: "/nepal.jpg",
    city: "Nepal",
    paragraph: "Conquer the Himalayas",
    description: "9 days",
    price: "AED 499",
    rating: 4.5,
  },
  {
    img: "/costarica.jpg",
    city: "Costa Rica",
    paragraph: "Wild Rainforests & Volcano Thrills",
    description: "6 days",
    price: "AED 1999",
    rating: 5,
  },
  {
    img: "/dubai4.jpg",
    city: "Dubai",
    paragraph: "Desert & Thrill Adventure",
    description: "8 days",
    price: "AED 1299",
    rating: 5,
  },
  {
    img: "/bali4.jpg",
    city: "Bali",
    paragraph: "Tropical Adventure Awaits",
    description: "7 days",
    price: "AED 1799",
    rating: 5,
  },
];

const TopPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins text-[#2C2C2C] mb-4">
          Top Packages
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex flex-col"
          >
            <img
              src={feature.img}
              alt={feature.city}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl text-[#2B2B2B] font-bold font-poppins mb-1">
                {feature.city}
              </h3>
              <h3 className="text-lg text-[#777777] font-medium font-poppins mb-2 truncate overflow-hidden whitespace-nowrap text-ellipsis">
                {feature.paragraph}
              </h3>

              <div className="flex items-center justify-between w-full mb-2 px-2">
                <p className="text-[#777777] font-poppins">{feature.description}</p>
                <p className="text-[#E8B958] font-semibold">{feature.price}</p>
              </div>

              <div className="flex items-start gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => {
                  if (i < Math.floor(feature.rating)) {
                    return <FaStar key={i} className="text-[#F6B15C]" />;
                  } else if (i < feature.rating) {
                    return <FaStarHalfAlt key={i} className="text-[#F6B15C]" />;
                  } else {
                    return <FaRegStar key={i} className="text-gray-300" />;
                  }
                })}
              </div>

              {/* View Details Button */}
              <div className="flex justify-center mt-auto">
                <button
                  onClick={() => {
                    if (index === 2) {
                      navigate("/packages-detail");
                    }
                  }}
                  className="bg-[#F49C0B] text-white px-6 py-2 rounded-2xl font-medium hover:scale-105 transition-transform duration-300"
                >
                  View Details
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPackages;
