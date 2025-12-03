import React from "react";

const categories = [
  {
    img: "tabler_mountain.png",
    title: "Adventure Trips",
    bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]",
  },
  { img: "proicons_beach.png", title: "Luxury Escapes", bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]" },
  { img: "icon-park-outline_family.png", title: "Family Vacations", bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]" },
  { img: "mdi-light_heart.png", title: "Honeymoon Specials", bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]" },
  { img: "stash_leaf-light.png", title: "Nature Retreats", bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]" },
  { img: "tdesign_architecture-hui-style.png", title: "Cultural Tours", bg: "bg-gradient-to-br from-[#FFE4B5] via-[#FFD166]" },
];

const Explore = () => {
  return (
    <section className="bg-[#FFF8F3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-[#2C2C2C] text-center mb-12">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 justify-items-center max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-32 h-32 flex items-center justify-center rounded-full ${cat.bg} mb-4`}
              >
                <img src={cat.img} alt={cat.title} className="w-16 h-16" />
              </div>
              <h3 className="text-[#333333] font-poppins font-medium">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
