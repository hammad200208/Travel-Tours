import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "How long does it take to get a Dubai tourist visa?", answer: "Visa approval typically takes 1 to 3 working days depending on the application type and documentation provided." },
  { question: "Can I apply for someone else?", answer: "Yes, Dubai visas can be extended depending on the type of visa and current regulations." },
  { question: "What happens if my visa is delayed?", answer: "If your visa is rejected, you may reapply by correcting the issues or providing additional documents." },
  { question: "How do I extend my stay?", answer: "Visa fees are typically non-refundable once the application is processed." },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF8F3] py-14 font-poppins">
      <h2 className="text-center text-[26px] font-semibold text-[#2C2C2C] mb-8">
        FAQs
      </h2>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-xl p-4 cursor-pointer shadow-sm"
            onClick={() => toggleFaq(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <p className="text-[#333333] font-medium">
                {item.question}
              </p>

              {openIndex === index ? (
                <FaMinus className="text-[#333333]" />
              ) : (
                <FaPlus className="text-[#333333]" />
              )}
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-3 text-[#4A4A4A] text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
