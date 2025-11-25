import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-[#FFF8F3] p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT SECTION — BIG IMAGE + DETAILS */}
      <div className="md:col-span-1 flex flex-col gap-5">
        
        {/* BIG IMAGE */}
        <img
          src="/morning-desert-safari/img1.jpg"
          alt="Main"
          className="w-full h-90 object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/morning-desert-safari/time.png" className="w-5 h-5" />
            <p className="text-gray-700">4 hours</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/morning-desert-safari/user.png" className="w-5 h-5" />
            <p className="text-gray-700">Families & Adventure Seekers</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/morning-desert-safari/price.png" className="w-5 h-5" />
            <p className="text-gray-700">From AED 250</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/morning-desert-safari/date.png" className="w-5 h-5" />
            <p className="text-gray-700">7:00 AM – 11:00 AM</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION — IMAGES GRID */}
      <div className="md:col-span-2 flex flex-col gap-6">

        {/* TOP ROW — only 2 images now */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/morning-desert-safari/img2.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
          <img
            src="/morning-desert-safari/img3.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/morning-desert-safari/img4.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
          <img
            src="/morning-desert-safari/img5.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

      </div>

    </div>
  );
};

export default Card;
