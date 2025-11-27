import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  const images = [
    "packages-detail/img1.jpg",
    "packages-detail/img2.jpg",
    "packages-detail/img3.jpg",
    "packages-detail/img4.jpg",
    "packages-detail/img5.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleLeftClick = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="font-poppins bg-[#FAFAFA]">
      <h2 className="text-lg pl-20 font-semibold text-[#000000] mb-3">
        Gallery
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* IMAGE ROW */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:overflow-x-auto overflow-y-hidden px-4 sm:px-16 justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative w-2/2 sm:w-44 h-36 transition-transform duration-300 ${
                selectedIndex === index ? "scale-105" : ""
              }`}
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* LEFT ARROW on first image – hidden on mobile */}
              {index === 0 && (
                <button
                  onClick={handleLeftClick}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-[#FFFFFF] p-2 rounded-full z-10 cursor-pointer hidden sm:block"
                >
                  <FaChevronLeft size={18} />
                </button>
              )}

              {/* RIGHT ARROW on last image – hidden on mobile */}
              {index === images.length - 1 && (
                <button
                  onClick={handleRightClick}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFFFFF] p-2 rounded-full z-10 cursor-pointer hidden sm:block"
                >
                  <FaChevronRight size={18} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
