import React from 'react'

const Booking = () => {
  return (
    <>
      <section className="w-full bg-[#F6B15C] py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Your Journey, Made Effortless
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-2xl mb-8">
        Reliable, safe, and comfortable transfers — wherever you need to go in Dubai.
      </p>

      {/* Button */}
      <button className="bg-[#FFFF] text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Book Your Transfer
      </button>
    </section>
    </>
  )
}

export default Booking
