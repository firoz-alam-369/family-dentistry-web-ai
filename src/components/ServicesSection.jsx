import React, { useState } from "react";
import {
  FaTooth,
  FaChild,
  FaTeethOpen,
  FaBrush,
  FaSmile,
  FaUserMd,
  FaClinicMedical,
  FaAmbulance,
} from "react-icons/fa";

const services = [
  {
    name: "General Dentistry",
    icon: <FaTooth />,
    details: "Routine checkups, fillings, and preventive care.",
  },
  {
    name: "Pediatric Dentistry",
    icon: <FaChild />,
    details: "Gentle dental care for children and teens.",
  },
  {
    name: "Root Canal Treatment",
    icon: <FaTeethOpen />,
    details: "Endodontic therapy to save damaged teeth.",
  },
  {
    name: "Scaling & Polishing",
    icon: <FaBrush />,
    details: "Professional cleaning for healthy gums.",
  },
  {
    name: "Braces & Aligners",
    icon: <FaSmile />,
    details: "Orthodontic solutions for perfect alignment.",
  },
  {
    name: "Cosmetic Dentistry",
    icon: <FaUserMd />,
    details: "Smile makeovers, whitening, and veneers.",
  },
  {
    name: "Dental Implants",
    icon: <FaClinicMedical />,
    details: "Permanent tooth replacement solutions.",
  },
  {
    name: "Emergency Care",
    icon: <FaAmbulance />,
    details: "Urgent dental treatment when you need it most.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-white mb-8 animate-fade-in">
        🦷 Our Dental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer opacity-0 animate-fade-in delay-[200ms]"
          >
            <div className="text-3xl text-blue-600 dark:text-white mb-2">
              {service.icon}
            </div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {service.name}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-xl max-w-md text-center">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-white mb-4">
              {selectedService.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedService.details}
            </p>
            <button
              onClick={() => setSelectedService(null)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
