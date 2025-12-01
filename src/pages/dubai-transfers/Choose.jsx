import React from "react";

const chooseImages = [
  "dubai-transfer/img1.jpg",
  "dubai-transfer/img2.jpg",
  "dubai-transfer/img3.jpg",
];

const quickInfo = [
  {
    icon: "dubai-transfer/time.png",
    title: "24/7 Daily",
  },
  {
    icon: "dubai-transfer/bag.png",
    title: "2 bags per person",
  },
  {
    icon: "dubai-transfer/calculator.png",
    title: "Online or cash",
  },
  {
    icon: "dubai-transfer/location.png",
    title: "All Dubai areas",
  },
];

const Choose = () => {
  return (
    <>
      {/* WHY CHOOSE SECTION */}
      <section className="bg-[#FAFAFA] py-12 px-6 md:px-20 font-poppins">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#2C2C2C]">
          Why Choose Tripsiy
        </h2>

        {/* Images + Text */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* IMAGES GRID */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            {/* Big IMG 1 */}
            <img
              src={chooseImages[0]}
              alt=""
              className="rounded-lg w-full h-full object-cover row-span-2"
            />

            {/* IMG 2 */}
            <img
              src={chooseImages[1]}
              alt=""
              className="rounded-lg w-full h-32 md:h-43 object-cover"
            />

            {/* IMG 3 */}
            <img
              src={chooseImages[2]}
              alt=""
              className="rounded-lg w-full h-32 md:h-43 object-cover"
            />
          </div>

          {/* Text List */}
          <ul className="space-y-4 text-[#4A4A4A]">
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span>
              Professional, punctual drivers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span>
              Clean, comfortable vehicles
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span>
              24/7 availability
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span>
              Instant booking confirmation
            </li>
          </ul>
        </div>
      </section>

      {/* QUICK INFO — OUTSIDE MAIN BG */}
      <div className="bg-[#FEFEFF] py-10 px-6 md:px-20 font-poppins">
        <h3 className="text-center text-2xl font-bold text-[#2C2C2C]">
          Quick Info
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {quickInfo.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={item.icon} alt="" className="w-10 h-10 mb-2" />
              <p className="text-[#4A4A4A] text-sm md:text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Choose;
