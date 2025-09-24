import React from "react";
import {
  FaTooth,
  FaSmile,
  FaXRay,
  FaChild,
  FaTeethOpen,
  FaHeartbeat,
} from "react-icons/fa";

const services = [
  {
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, and cavity fillings to maintain everyday oral health.",
    icon: <FaTooth />,
    image: "https://i.ibb.co.com/TM0x5y7x/general-denitistry-3-D-img.png",
    bg: "from-indigo-600 via-indigo-500 to-indigo-700",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Smile makeovers, teeth whitening, and aesthetic restorations for confident smiles.",
    icon: <FaSmile />,
    image: "https://via.placeholder.com/400x250?text=Cosmetic+Dentistry",
    bg: "from-fuchsia-600 via-pink-500 to-fuchsia-700",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions with titanium-rooted implants.",
    icon: <FaTeethOpen />,
    image: "https://via.placeholder.com/400x250?text=Dental+Implants",
    bg: "from-slate-700 via-zinc-700 to-slate-800",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle care for children including fluoride treatments and early orthodontics.",
    icon: <FaChild />,
    image: "https://via.placeholder.com/400x250?text=Pediatric+Dentistry",
    bg: "from-violet-600 via-purple-500 to-violet-700",
  },
  {
    title: "Orthodontics",
    description:
      "Braces and aligners to correct misaligned teeth and improve bite.",
    icon: <FaXRay />,
    image: "https://via.placeholder.com/400x250?text=Orthodontics",
    bg: "from-emerald-600 via-teal-500 to-emerald-700",
  },
  {
    title: "Emergency Care",
    description: "24/7 urgent dental care for pain, trauma, or broken teeth.",
    icon: <FaHeartbeat />,
    image: "https://via.placeholder.com/400x250?text=Emergency+Care",
    bg: "from-rose-600 via-rose-500 to-rose-700",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-gray-950 dark:to-slate-900 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-center text-violet-600 dark:text-violet-400 mb-10">
          🦷 Our Dental Services | আমাদের ডেন্টাল সেবা
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.bg} text-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition`}
            >
              {/* Image */}
              <div className="w-full h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-white">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
