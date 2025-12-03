import React from "react";

const images = [
  "desert-safari/card1.jpg",
  "desert-safari/card2.jpg",
  "desert-safari/card3.jpg",
  "desert-safari/card4.jpg",
  "desert-safari/card5.jpg",
];

const Cards = () => {
  return (
    <>
      {/* Image Section */}
      <section className="bg-[#FFFCF8] py-12 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">

          {/* Image 1 → spans 2 rows */}
          <img
            src={images[0]}
            alt="card-1"
            className="rounded-xl object-cover w-full h-[500px] sm:row-span-2"
          />

          {/* Image 2 */}
          <img
            src={images[1]}
            alt="card-2"
            className="rounded-xl object-cover h-57 w-full"
          />

          {/* Image 3 */}
          <img
            src={images[2]}
            alt="card-3"
            className="rounded-xl object-cover h-57 w-full"
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

      {/* Info Section */}
<section className="bg-[#FFF6EC] py-10 px-6 md:px-12 lg:px-20">
  <div className="flex justify-center ">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-100 gap-y-10">
      <div className="flex items-center gap-3">
        <img src="desert-safari/time.png" alt="time" className="w-6 h-6" />
        <p className="text-[#4A4A4A] font-poppins text-sm">6 hours</p>
      </div>

      <div className="flex items-center gap-3">
        <img src="desert-safari/price.png" alt="price" className="w-6 h-6" />
        <p className="text-[#4A4A4A] font-poppins text-sm">From $80</p>
      </div>

      <div className="flex items-center gap-3">
        <img src="desert-safari/location.png" alt="location" className="w-6 h-6" />
        <p className="text-[#4A4A4A] font-poppins text-sm">
          Dubai Desert Conservation Reserve
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img src="desert-safari/date.png" alt="date" className="w-6 h-6" />
        <p className="text-[#4A4A4A] font-poppins text-sm">Oct–Apr</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Cards;
