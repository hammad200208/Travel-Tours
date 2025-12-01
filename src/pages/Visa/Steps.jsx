import React from "react";

const steps = [
  { number: "1", text: "Fill out your details" },
  { number: "2", text: "Upload documents" },
  { number: "3", text: "Make payment" },
  { number: "4", text: "Receive your e-Visa" },
];

const Step = () => {
  return (
    <section className="bg-[#FFFCF8] py-14 font-poppins">
      <h2 className="text-center text-[26px] font-semibold text-[#2C2C2C] mb-10">
        Application Steps
      </h2>

      <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
        {steps.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#F49C0B] flex items-center justify-center text-xl font-semibold text-[#2B2B2B]">
                {item.number}
              </div>
              <p className="mt-3 text-sm text-[#4A4A4A] text-center w-32">
                {item.text}
              </p>
            </div>

            {/* Line except after last circle */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block w-10 h-0.5 bg-[#F49C0B]"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Step;
