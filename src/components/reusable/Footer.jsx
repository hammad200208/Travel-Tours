// Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="text-gray-700"
      style={{
        background:
          "linear-gradient(285.12deg, #FFF8EF 28.12%, #F8E0B0 71.88%)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-300">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-3">
          <img
            src="/logo.png"
            alt="Tripsify Logo"
            className="w-32 object-contain"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted travel partner for unforgettable adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Destinations", "Packages", "Services", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-600 transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-[#6B5E4A] mt-1" />
              <span>Office 204, Downtown Dubai, UAE</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#6B5E4A]" />
              <span>+971 55 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#6B5E4A]" />
              <span>info@tripsify.com</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaWhatsapp />, href: "#" },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-[#F6B15C] hover:text-orange-700 text-xl transition-transform transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-5 text-sm text-gray-600">
        © 2025 Tripsify. All rights reserved.
      </div>
    </footer>
  );
}
