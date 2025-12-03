import React from "react";

const services = [
  {
    img: "long-stay-visa/time.png",
    title: "Flexible Durations",
    desc: "Choose between 90 or 180 days.",
  },
  {
    img: "long-stay-visa/arrows.png",
    title: "Hassle-Free Process",
    desc: "Simple form and digital submission.",
  },
  {
    img: "long-stay-visa/call.png",
    title: "Support Anytime",
    desc: "24/7 visa assistance and updates.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4 font-poppins">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
          Why Choose a Long Stay Visa with Tripsiy?
        </h2>
        <p className="text-[#2B2B2B] text-center max-w-md mx-auto mt-3">
          Whether you’re relocating temporarily or planning an extended visit, Tripsiy simplifies the process with quick guidance, transparent pricing, and full document support.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center w-full max-w-[280px]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-1">{service.title}</h3>
            <p className="text-[#4A4A4A] text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
