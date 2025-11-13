import React from "react";

const destinations = [
  {
    img: "/srilanka.jpg",
    title: "Sri Lanka",
    desc: "Golden coasts, lush tea hills, and cultural wonders — an island full of surprises.",
  },
  {
    img: "/newyork.jpg",
    title: "New York",
    desc: "The city that never sleeps iconic landmarks, global flavors, and endless energy.",
  },
  {
    img: "/istanbul.jpg",
    title: "Istanbul",
    desc: "Where East meets West discover rich history,vibrant bazaars, and timeless charm.",
  },
  {
    img: "/switzerland.jpg",
    title: "Switzerland",
    desc: "Snowy peaks, serene lakes, and scenic train rides — Europe’s ultimate fairytale escape.",
  },
  {
    img: "/bali1.jpg",
    title: "Bali",
    desc: "A tropical haven of beaches and tranquility — where every moment feels magical.",
  },
  {
    img: "/dubai1.jpg",
    title: "Dubai",
    desc: "From skylines to adventures, experience the perfect blend of luxury and culture.",
  },
  {
    img: "/kenya.jpg",
    title: "Kenya",
    desc: "Witness the wild heart of Africa — safari adventures and sunsets like no other.",
  },
  {
    img: "/paris1.jpg",
    title: "Paris",
    desc: "Romance, art, and café culture — the timeless beauty of the City of Lights.",
  },
  {
    img: "/egypt.jpg",
    title: "Egypt",
    desc: "Journey through ancient wonders, golden deserts, and timeless beauty.",
  },
  {
    img: "/austrailia.jpg",
    title: "Austrailia",
    desc: "Explore vibrant cities, wild landscapes, and endless adventure.",
  },
  {
    img: "/thailand.jpg",
    title: "Thailand",
    desc: "Explore vibrant cities, wild landscapes, and endless adventure.",
  },
  {
    img: "/kyoto.jpg",
    title: "Kyoto",
    desc: "Experience ancient temples, serene gardens, and timeless beauty.",
  },
];

const DestinationCards = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-4xl font-bold font-poppins text-[#000000] mb-8">
        Destinations
      </h2>

      {/* Search Bar */}
      <div className="p-3 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 max-w-3xl w-full mx-auto mb-12">
        <select className="bg-[#D9D9D9] text-black px-4 py-2 rounded-lg outline-none flex-1 sm:max-w-[30%]">
          <option>Region</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>America</option>
        </select>

        <select className="bg-[#D9D9D9] text-black px-4 py-2 rounded-lg outline-none flex-1 sm:max-w-[30%]">
          <option>Travel Type</option>
          <option>Adventure</option>
          <option>Luxury</option>
          <option>Budget</option>
        </select>

        <button className="bg-[#F49C0B] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#e08c00] transition sm:max-w-[25%] w-full">
          Search
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {destinations.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCards;
