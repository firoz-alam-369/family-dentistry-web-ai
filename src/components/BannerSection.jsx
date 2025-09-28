import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const BannerWithImageSwap = () => {
  const images = [
    "https://i.ibb.co.com/21yS2Dp7/one.jpg",
    "https://i.ibb.co.com/3mwrPv9R/two.jpg",
    "https://i.ibb.co.com/9kF4Y09S/three.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const swapInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(swapInterval);
  }, []);

  return (
    <div className="pt-16 flex justify-center">
      <div className="w-11/12 h-[60vh] flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden bg-white">
        {/* Left: Timed Image Swap */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Clinic ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Right: Slogan + Appointment CTA */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in delay-200">
            Family Dentistry
          </h1>
          <p className="text-lg md:text-xl mb-2 opacity-0 animate-fade-in delay-500">
            Your trusted dental clinic with bilingual support and compassionate
            care.
          </p>
          <p className="text-base md:text-lg italic opacity-0 animate-fade-in delay-700">
            আপনার হাসি, আমাদের অঙ্গীকার। বিশ্বস্ত চিকিৎসা, সহজ অ্যাপয়েন্টমেন্ট।
          </p>
          <div className="mt-6">
            <button className="relative group px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-md overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition duration-300"></span>

              <Link to={"/appointment"} className="relative z-10 block">
                📅 Book Appointment | 📞 অ্যাপয়েন্টমেন্ট নিন
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithImageSwap;
