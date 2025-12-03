import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-[#FFF8F3] p-6 rounded-xl flex flex-col md:flex-row gap-6 justify-center items-start font-poppins">

      {/* LEFT SECTION */}
      <div className="flex flex-col gap-4 items-center md:items-start">

        {/* BIG IMAGE */}
        <img
          src="/night-desert-safari/img1.jpg"
          alt="Main"
          className="max-w-70 h-[350px] object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/time.png" className="w-4 h-4" />
            <p className="text-[#4A4A4A]">6 hours</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/user.png" className="w-4 h-4" />
            <p className="text-[#4A4A4A]">Couples, Families & Culture Lovers</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/price.png" className="w-4 h-4" />
            <p className="text-[#4A4A4A]">From AED 330</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/evening-desert-safari/date.png" className="w-4 h-4" />
            <p className="text-[#4A4A4A]">4:00 PM – 10:00 PM</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-4 items-center">

        {/* TOP ROW */}
        <div className="flex gap-4 justify-center">
          <img
            src="/night-desert-safari/img2.jpg"
            className="w-[200px] h-60 object-cover rounded-xl"
          />
          <img
            src="/night-desert-safari/img3.jpg"
            className="w-[200px] h-60 object-cover rounded-xl"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-4 justify-center">
          <img
            src="/night-desert-safari/img4.jpg"
            className="w-[200px] h-60 object-cover rounded-xl"
          />
          <img
            src="/night-desert-safari/img5.jpg"
            className="w-[200px] h-60 object-cover rounded-xl"
          />
        </div>

      </div>

    </div>
  );
};

export default Card;
