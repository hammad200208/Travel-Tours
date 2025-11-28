import React from "react";

const Vehicle = () => {
  const cars = [
    {
      img: "dubai-transfer/car1.jpg",
      title: "Standard Sedan",
      desc: "Up to 3 passengers",
      price: "AED 120",
    },
    {
      img: "dubai-transfer/car2.jpg",
      title: "Luxury Van",
      desc: "Up to 6 passengers",
      price: "AED 220",
    },
    {
      img: "dubai-transfer/car3.jpg",
      title: "Premium SUV",
      desc: "Up to 4 passengers",
      price: "AED 300",
    },
  ];

  return (
    <div className="w-full bg-[#FFFCF8] font-poppins py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#000000] font-bold text-center mb-10">
          Vehicle Option
        </h2>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-48 object-cover"
              />

              {/* Content Background */}
              <div className="bg-white p-4">
                <h3 className="text-xl text-[#2B2B2B] font-semibold">
                  {car.title}
                </h3>

                <p className="text-[#777777] mt-2 text-sm">{car.desc}</p>

                {/* Price */}
                <p className="text-lg font-semibold mt-3 text-[#E8B958]">
                  {car.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
