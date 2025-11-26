import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <>
            <section className="w-full bg-[#F6B15C] font-poppins py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold  text-[#FFFFFF] mb-4">
        Book Your Dubai Dhow Cruise
      </h2>

      {/* Paragraph */}
      <p className="text-[#FFF8EF] text-lg max-w-xl mb-8">
        Choose your cruise package, pick a date, and enjoy an unforgettable evening on Dubai’s waters.
      </p>

      {/* Button */}
      <Link to="/safari-tickets">
      <button className="bg-[#FFFFFF] text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Book Cruise
      </button>
      </Link>
    </section>
    </>
  )
}

export default Booking
