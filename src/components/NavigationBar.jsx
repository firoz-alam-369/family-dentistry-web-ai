import React from "react";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router";

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-100 bg-gradient-to-r from-indigo-900 via-violet-800 to-indigo-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <FaTooth className="text-fuchsia-400 text-xl" />
          <span className="text-lg font-bold tracking-wide">
            Family Dentistry
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to={"/"} className="hover:text-fuchsia-300 transition">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-fuchsia-300 transition">
            About Us
          </Link>
          <Link to={"/services"} className="hover:text-fuchsia-300 transition">
            Services
          </Link>
          <Link to={"/doctors"} className="hover:text-fuchsia-300 transition">
            Doctors
          </Link>
          <Link
            to={"/appointment"}
            className="hover:text-fuchsia-300 transition"
          >
            Appointment
          </Link>

          <Link to={"/blog"} className="hover:text-fuchsia-300 transition">
            Blog / Oral Tips
          </Link>
          <Link to={"/contact"} className="hover:text-fuchsia-300 transition">
            Contact
          </Link>
        </nav>

        {/* Right: Language Switcher */}
        <div className="flex items-center gap-2 text-sm font-semibold">
          <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
            EN
          </button>
          <span className="text-zinc-300">|</span>
          <button className="px-2 py-1 rounded hover:bg-fuchsia-600 transition">
            BN
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
