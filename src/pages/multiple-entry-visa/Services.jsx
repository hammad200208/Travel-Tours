import React from "react";

const services = [
  {
    img: "multiple-visa/time.png",
    title: "Unlimited Flexibility",
    desc: "Travel freely during your visa validity period.",
  },
  {
    img: "multiple-visa/bag.png",
    title: "Ideal for Business",
    desc: "Perfect for regular meetings or trade visits.",
  },
  {
    img: "multiple-visa/notes.png",
    title: "Hassle-Free Renewal",
    desc: "Quick extensions and full online support.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#FFF8F3] py-16 px-4 font-poppins">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
          Why Choose a Multiple Entry Visa?
        </h2>
        <p className="text-[#2B2B2B] text-center max-w-md mx-auto mt-3">
          If you travel in and out of Dubai often, the Multiple Entry Visa saves time and hassle — offering convenience, flexibility, and long-term value. Tripsiy ensures a smooth, guided process every step of the way.
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
