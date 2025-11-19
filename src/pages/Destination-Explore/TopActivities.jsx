import React from "react";

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
    img: "/Destination-Explore/yachtcruise.jpg",
  },
];

const TopActivities = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Top Activities
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

              <button className="mt-4 bg-orange-500 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopActivities;
