import React from "react";

const images = [
  "cruise/img1.jpg",
  "cruise/img2.jpg",
  "cruise/img3.jpg",
  "cruise/img4.jpg",
  "cruise/img5.jpg",
];

const Cards = () => {
  return (
    <>
      {/* Image Section */}
      <section className="bg-[#FFFCF8] py-12 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">

          {/* Image 1 → spans 2 rows */}
          <img
            src={images[0]}
            alt="card-1"
            className="rounded-xl object-cover w-full h-[530px] sm:row-span-2"
          />

          {/* Image 2 */}
          <img
            src={images[1]}
            alt="card-2"
            className="rounded-xl object-cover h-64 w-full"
          />

          {/* Image 3 */}
          <img
            src={images[2]}
            alt="card-3"
            className="rounded-xl object-cover h-64 w-full"
          />

          {/* Row 2 */}
          <img
            src={images[3]}
            alt="card-4"
            className="rounded-xl object-cover h-64 w-full sm:col-start-2"
          />
          <img
            src={images[4]}
            alt="card-5"
            className="rounded-xl object-cover h-64 w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Cards;
