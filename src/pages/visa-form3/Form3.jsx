import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form3 = ({ onNext, onSave }) => {
  const [passportCopy, setPassportCopy] = useState(null);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [returnTicket, setReturnTicket] = useState(null);
  const [hotelBooking, setHotelBooking] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = {
      passportCopy,
      passportPhoto,
      returnTicket,
      hotelBooking,
    };

    if (onSave) onSave(formData);
    if (onNext) onNext();

    // Redirect to Step 4
    navigate("/visa-form4");
  };

  return (
    <section className="bg-[#fafafa] pt-30 pb-10">
    <div className="w-full max-w-xl bg-white py-4 px-4 rounded-xl shadow-md mx-auto text-center">

      <h2 className="text-xl font-semibold mb-1">Visa Application Form</h2>
      <p className="text-sm text-gray-500 mb-6">Step 3 – Upload Documents</p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        {/* Passport Copy */}
        <div className="flex flex-col text-left">
          <label className="text-sm font-medium mb-1">Passport Copy</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setPassportCopy(e.target.files[0])}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        {/* Passport Photo */}
        <div className="flex flex-col text-left">
          <label className="text-sm font-medium mb-1">Passport-Size Photo</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setPassportPhoto(e.target.files[0])}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        {/* Return Ticket */}
        <div className="flex flex-col text-left">
          <label className="text-sm font-medium mb-1">Return Ticket (Optional)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setReturnTicket(e.target.files[0])}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

        {/* Hotel Booking */}
        <div className="flex flex-col text-left">
          <label className="text-sm font-medium mb-1">Hotel Booking (Optional)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setHotelBooking(e.target.files[0])}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>

      </form>

      {/* Save & Next Button */}
      <button
        onClick={handleSubmit}
        className="bg-[#F49C0B] hover:bg-[#F49C0B] text-white px-6 py-3 rounded-lg text-sm font-medium transition"
      >
        Save & Next
      </button>
    </div>
    </section>
  );
};

export default Form3;
