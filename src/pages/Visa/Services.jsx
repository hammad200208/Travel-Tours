import React from "react";

const services = [
  {
    img: "visa/time.png",
    title: "Fast Processing",
    desc: "Standard and express options available",
  },
  {
    img: "visa/visa.png",
    title: "Multiple Visa Types",
    desc: "30-day, 60-day, and multi-entry visas.",
  },
  {
    img: "visa/call.png",
    title: "Dedicated Support",
    desc: "Real humans, ready to assist 24/7.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4 font-poppins">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
          Simple. Fast. Reliable.
        </h2>
        <p className="text-[#2B2B2B] text-center max-w-xl mx-auto mt-3">
          Get your Dubai tourist visa processed within 24–72 hours. Whether you’re planning a short getaway or an extended stay, Tripsiy ensures a smooth and secure application experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
