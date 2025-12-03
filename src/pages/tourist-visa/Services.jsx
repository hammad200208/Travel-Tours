import React from "react";

const services = [
  {
    img: "tourist-visa/time.png",
    title: "Fast Approval",
    desc: "Average 24–48 hour processing time.",
  },
  {
    img: "tourist-visa/card.png",
    title: "Simple Requirements",
    desc: "Only passport copy and photo needed.",
  },
  {
    img: "tourist-visa/light.png",
    title: "Real-time Updates",
    desc: "Get status notifications directly by email or WhatsApp.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4 font-poppins">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
          Why Apply with Tripsiy?
        </h2>
        <p className="text-[#2B2B2B] text-center max-w-xl mx-auto mt-3">
          Tripsiy takes the stress out of visa processing — from form submission to final approval. With transparent fees and fast communication, we ensure your Dubai travel plans stay on schedule.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center w-full max-w-[260px]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-1">
              {service.title}
            </h3>
            <p className="text-[#4A4A4A] text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
