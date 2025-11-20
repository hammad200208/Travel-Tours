import React from 'react'

const Trip = () => {
  return (
    <>
      <section className="w-full bg-[#F6B15C] py-20 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Live Your Dubai Story?
      </h2>

      {/* Paragraph */}
      <p className="text-white text-lg max-w-xl mb-8">
        Adventure, luxury, and unforgettable moments — all waiting for you in the City of Gold.
      </p>

      {/* Button */}
      <button className="bg-white text-[#2B2B2B] font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition duration-300">
        Plan Your Trip to Dubai
      </button>
    </section>
    </>
  )
}

export default Trip
