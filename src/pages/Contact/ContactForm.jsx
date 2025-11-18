import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full py-12 bg-white font-[Poppins] text-[#000000]">
      <div className="max-w-6xl mx-auto px-5">

        {/* Center Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10 font-[Poppins]">
          Get in touch with us easily.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT FORM */}
          <div>
            <form className="space-y-5 font-[Poppins]">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]"
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition font-[Poppins]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-6 font-[Poppins]">

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <p>Office 204, Downtown Dubai, UAE</p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <FaPhoneAlt className="text-yellow-500" />
                <p>+971 55 123 4567</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                <p>info@tripizy.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>

              <div className="flex items-center gap-3">
                <FaClock className="text-yellow-500" />
                <p>
                  Monday – Friday:
                  <br />
                  9:00am – 6:00pm
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
