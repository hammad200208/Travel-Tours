import React from "react";

const features = [
  {
    icon: "/wide.png",
    title: "Wide Destinations",
    description: "Explore beautiful places across the world with Tripsiy.",
  },
  {
    icon: "/trust.png",
    title: "Trusted Service",
    description: "Enjoy safe, smooth, and reliable travel experiences.",
  },
  {
    icon: "/guarantee.png",
    title: "Best Price Guarantee",
    description: "Get the best deals and value for every trip.",
  },
  {
    icon: "/assistance.png",
    title: "24/7 Assistance",
    description: "We’re here to help you anytime, anywhere.",
  },
];

const Choose = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins text-[#2C2C2C]">
          Why Choose Tripsiy
        </h2>
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Column: Image */}
        <div className="md:w-1/2">
          <img
            src="/choose.jpg"
            alt="Why Choose Tripsiy"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Right Column: Features */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-[#f4b755] p-4 rounded-full shrink-0">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C2C2C] font-poppins mb-1">{feature.title}</h3>
                <p className="text-gray-700 font-poppins">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
