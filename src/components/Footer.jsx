import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 text-zinc-100 pt-12 pb-6 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 animate-fade-in">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-violet-500 dark:text-violet-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              <a href="#" className="hover:text-fuchsia-500 transition">
                🏠 Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-500 transition">
                🦷 Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-500 transition">
                👨‍⚕️ Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-500 transition">
                📍 Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold text-violet-500 dark:text-violet-400 mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
            Stay updated with oral health tips & clinic news.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md bg-zinc-200 dark:bg-slate-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600 transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-violet-500 dark:text-violet-400 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-500 transition hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-500 transition hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-500 transition hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-300 dark:border-zinc-700 pt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>© 2025 Smile Dental Clinic. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="hover:text-fuchsia-500 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-fuchsia-500 transition">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
