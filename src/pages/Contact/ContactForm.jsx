import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full py-12 bg-white pt-28"> 
      <div className="max-w-6xl mx-auto px-5">

        {/* Center Heading */}
        <h2 className="text-3xl text-[#000000] font-bold font-poppins text-center mb-2">Contact Us</h2>
        <p className="text-center text-[#2B2B2B] mb-10 font-poppins">
          Get in touch with us easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT FORM */}
          <div>
            <form className="space-y-5 font-poppins">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#F49C0B] hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-6 font-poppins">

            <div>
              <h3 className="text-xl text-[#2B2B2B] font-semibold mb-4">Contact Info</h3>

              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#F49C0B]" />
                <p>Office 204, Downtown Dubai, UAE</p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <FaPhoneAlt className="text-[#F49C0B]" />
                <p>+971 55 123 4567</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#F49C0B]" />
                <p>info@tripizy.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-[#2B2B2B] font-semibold mb-4">Business Hours</h3>

              <div className="flex items-center gap-3">
                <FaClock className="text-[#F49C0B]" />
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
