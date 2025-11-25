import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-[#FFF8F3] p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT SECTION — BIG IMAGE + DETAILS */}
      <div className="md:col-span-1 flex flex-col gap-5">
        
        {/* BIG IMAGE */}
        <img
          src="/night-desert-safari/img1.jpg"
          alt="Main"
          className="w-full h-90 object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/evening-desert-safari/time.png" className="w-5 h-5" />
            <p className="text-[#4A4A4A] font-poppins">6 hours</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/evening-desert-safari/user.png" className="w-5 h-5" />
            <p className="text-[#4A4A4A] font-poppins">Couples, Families & Culture Lovers</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/evening-desert-safari/price.png" className="w-5 h-5" />
            <p className="text-[#4A4A4A] font-poppins">From AED 330</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/evening-desert-safari/date.png" className="w-5 h-5" />
            <p className="text-[#4A4A4A] font-poppins">4:00 PM – 10:00 PM</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION — IMAGES GRID */}
      <div className="md:col-span-2 flex flex-col gap-6">

        {/* TOP ROW — only 2 images now */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/night-desert-safari/img2.jpg"
            className="w-full h-60 object-center rounded-xl"
          />
          <img
            src="/night-desert-safari/img3.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/night-desert-safari/img4.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
          <img
            src="/night-desert-safari/img5.jpg"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

      </div>

    </div>
  );
};

export default Card;
