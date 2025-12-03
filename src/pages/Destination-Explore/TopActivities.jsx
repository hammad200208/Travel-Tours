import React from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    title: "Desert Safari",
    desc: "Thrilling dune rides at golden hour",
    img: "/Destination-Explore/desertsafari.jpg",
  },
  {
    title: "Burj Khalifa",
    desc: "Touch the clouds from the world’s tallest tower",
    img: "/Destination-Explore/burjkhalifa.jpg",
  },
  {
    title: "Dubai Mall",
    desc: "Shop, dine, and marvel at the dancing fountains",
    img: "/Destination-Explore/dubaimall.jpg",
  },
  {
    title: "Palm Jumeirah",
    desc: "Indulge in beachfront luxury",
    img: "/Destination-Explore/palmjumeirah.jpg",
  },
  {
    title: "Old Dubai Souks",
    desc: "Discover heritage through scent and color",
    img: "/Destination-Explore/olddubaisoucks.jpg",
  },
  {
    title: "Yacht Cruise",
    desc: "Sail into the skyline",
    img: "/Destination-Explore/yachcruise.jpg",
  },
];

const TopActivities = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#FFF8F3]">
      <h2 className="text-center text-3xl font-bold font-poppins text-[#000000] mb-10">
        Top Activities
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold font-poppins text-[#2B2B2B]">
                {item.title}
              </h3>
              <p className="text-[#777777] font-poppins text-sm mt-1 max-w-sm">
                {item.desc}
              </p>

              <div className="mt-4 flex justify-center">
                <button
                  className="mt-4 bg-[#f49b0bf6] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#f49b0bf1] transition"
                  onClick={() => {
                    if (index === 0) {
                      navigate("/desert-safari");
                    }
                    if (index ===5) {
                      navigate("/cruise");
                    }
                  }}
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

export default TopActivities;
