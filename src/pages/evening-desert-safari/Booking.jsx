import React from 'react'
import { Link } from 'react-router-dom'

const BookNow = () => {
  return (
    <>
                  <section className="w-full bg-[#F6B15C] py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Watch the Sun Melt into the Dunes
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-2xl mb-8">
        From thrilling rides to fire-lit nights — the desert awaits your evening adventure.
      </p>

      {/* Button */}
      <Link to="/booking-form">
      <button className="bg-white text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Book Evening Safari
      </button>
      </Link>
    </section>
    </>
  )
}

export default BookNow
