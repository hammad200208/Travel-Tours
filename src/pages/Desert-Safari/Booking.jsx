import React from 'react'

const Booking = () => {
  return (
    <>
            <section className="w-full bg-[#F6B15C] py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Feel the Desert’s Pulse
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-xl mb-8">
        Adventure, culture, and serenity — all in one unforgettable safari.
      </p>

      {/* Button */}
      <button className="bg-white text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Book Desert Safari
      </button>
    </section>
    </>
  )
}

export default Booking
