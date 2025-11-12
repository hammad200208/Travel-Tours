import React from "react";

const Journey = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Column 1: Image */}
        <div className="md:w-1/2">
          <img
            src="/journey.jpg"
            alt="Our Journey"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Column 2: Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center mb-6">
            Our Journey
          </h2>
          <p className="text-[#4A4A4A] text-lg md:text-xl mb-4">
            Founded in Dubai, Tripsiy was born from a simple idea — to make travel
            planning effortless, exciting, and reliable. From local adventures to
            international escapes, our team ensures that every trip is crafted with
            care and authenticity.
          </p>
          <p className="text-[#F6B15C] text-lg md:text-xl">
            We believe travel isn’t just about places — it’s about people, memories,
            and stories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
