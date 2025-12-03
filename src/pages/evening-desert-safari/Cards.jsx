import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-[#FFF8F3] p-6 rounded-xl flex flex-col md:flex-row gap-6 justify-center items-start">

      {/* LEFT SECTION */}
      <div className="flex flex-col gap-4 items-center md:items-start">

        {/* BIG IMAGE */}
        <img
          src="/morning-desert-safari/img1.jpg"
          alt="Main"
          className="max-w-60 h-56 object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/time.png" className="w-4 h-4" />
            <p className="text-gray-700">4 hours</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/user.png" className="w-4 h-4" />
            <p className="text-gray-700">Families & Adventure Seekers</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/price.png" className="w-4 h-4" />
            <p className="text-gray-700">From AED 250</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/date.png" className="w-4 h-4" />
            <p className="text-gray-700">7:00 AM – 11:00 AM</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-4 items-center">

        {/* TOP ROW */}
        <div className="flex gap-4 justify-center">
          <img
            src="/evening-desert-safari/img2.jpg"
            className="w-[200px] h-45 object-cover rounded-xl"
          />
          <img
            src="/evening-desert-safari/img3.jpg"
            className="w-[200px] h-45 object-cover rounded-xl"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-4 justify-center">
          <img
            src="/evening-desert-safari/img4.jpg"
            className="w-[200px] h-45 object-cover rounded-xl"
          />
          <img
            src="/evening-desert-safari/img5.jpg"
            className="w-[200px] h-45 object-cover rounded-xl"
          />
        </div>

      </div>

    </div>
  );
};

export default Card;
