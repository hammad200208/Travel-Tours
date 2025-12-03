import React from "react";

const services = [
  {
    img: "dubai-transfer/plane.png",
    title: "Airport Transfers",
    desc: "Reliable pickups and drop-offs for every flight.",
  },
  {
    img: "dubai-transfer/hotel.png",
    title: "Hotel Transfers",
    desc: "Convenient rides from your stay to city attractions.",
  },
  {
    img: "dubai-transfer/officer.png",
    title: "Private Chauffeur",
    desc: "Luxury rides for comfort and flexibility.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4 font-poppins">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
          Our Service
        </h2>
        <p className="text-[#2B2B2B] text-center max-w-xl mx-auto mt-3">
          Whether you're arriving at the airport or heading to a hotel, Tripsiy’s 
          private transfer service ensures a smooth, on-time, and luxurious 
          journey every time.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center w-full max-w-[340px]"
          >
            <img src={service.img} alt={service.title} className="w-20 h-20 mb-6 object-contain" />
            <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">{service.title}</h3>
            <p className=" text-[#4A4A4A]">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
