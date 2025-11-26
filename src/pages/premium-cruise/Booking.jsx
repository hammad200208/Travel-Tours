import React from 'react'
import { Link } from 'react-router-dom'

const BookNow = () => {
  return (
    <>
    <section className="w-full bg-[#F6B15C] py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
        Reserve Your Premium Cruise Now
      </h2>

      {/* Paragraph */}
      <p className="text-[#FFF8EF] font-poppins text-lg max-w-xl mb-8">
        Enjoy 2.5 hours of Dubai skyline, premium dinner, live music, and an unforgettable evening on the water.
      </p>

      {/* Button */}
      <Link to="/booking-form">
      <button className="bg-[#FFFFFF] text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Book Premium Cruise
      </button>
      </Link>
      
    </section>
    </>
  )
}

export default BookNow
