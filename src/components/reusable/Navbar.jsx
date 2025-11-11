import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Destinations", href: "#" },
    { name: "Packages", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Travel Logo" className="w-28 h-auto" />
        </div>

        {/* Center: Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#ff9700] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Search Icon + Book Now */}
        <div className="hidden md:flex items-center space-x-8">
          <Search className="w-5 h-5 cursor-pointer text-[#5C6B73]" />
          <button className="bg-[#ff9700] text-white px-5 py-2 rounded-2xl font-medium hover:bg-[#e28700] transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-black font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#ff9700] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Search className="w-5 h-5 cursor-pointer text-black" />
            <button className="bg-[#ff9700] text-white px-5 py-2 rounded-full font-medium hover:bg-[#e28700] transition-all">
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
