import React, { useState } from "react";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router"; // ✅ Correct import

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // ✅ Auto-close function

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointment", path: "/appointment" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog / Oral Tips", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-violet-800 to-indigo-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <Link to={"/"} className="flex items-center gap-2">
          <FaTooth className="text-fuchsia-400 text-xl" />
          <span className="text-lg font-bold tracking-wide">
            Family Dentistry
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-fuchsia-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold">
          <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
            EN
          </button>
          <span className="text-zinc-300">|</span>
          <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
            BN
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-xl text-fuchsia-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-indigo-950">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block py-2 border-b border-violet-700 hover:text-fuchsia-300 transition"
              onClick={closeMenu} // ✅ Auto-close on click
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
              EN
            </button>
            <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
              BN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
