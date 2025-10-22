import React from "react";
import { Link } from "react-router";

const chambers = [
  {
    name: "Banani Chamber",
    address: "House 12, Road 23, Block B, Banani, Dhaka",
    phone: "+880 1711-123456",
    hours: "Sun–Fri: 10 AM – 8 PM",
    email: "banani@familydental.com",
    bg: "from-indigo-700 via-violet-600 to-indigo-800",
    image: "https://i.ibb.co.com/35WXpd4L/clinic-banani.png",
  },
  {
    name: "Dhanmondi Chamber",
    address: "Road 7A, House 45, Dhanmondi, Dhaka",
    phone: "+880 1711-654321",
    hours: "Sun–Fri: 9 AM – 9 PM",
    email: "dhanmondi@familydental.com",
    bg: "from-slate-700 via-zinc-700 to-slate-800",
    image: "https://i.ibb.co.com/35WXpd4L/clinic-banani.png",
  },
];

const ChamberSection = () => {
  return (
    <section className="py-8 px-2 md:px-8 lg:px-16 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-800 text-zinc-900 dark:text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-500 dark:text-violet-400 mb-10 animate-fade-in">
        🏥 Family Dentistry Chambers | ফ্যামিলি ডেন্টিস্ট্রি চেম্বার
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chambers.map((chamber, index) => (
          <div
            key={index}
            className={`flex space-x-12 items-center rounded-xl shadow-xl p-6 text-white animate-fade-in delay-[200ms] bg-gradient-to-br ${chamber.bg} hover:scale-[1.02] transition`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{chamber.name}</h3>
              <p className="text-sm mb-2">📍 {chamber.address}</p>
              <p className="text-sm mb-2">📞 {chamber.phone}</p>
              <p className="text-sm mb-2">⏰ {chamber.hours}</p>
              <p className="text-sm mb-6">✉️ {chamber.email}</p>
              <Link
                to={"/appointment"}
                className="mt-14 px-4 py-2 bg-white text-zinc-900 font-semibold rounded-md hover:bg-zinc-100 transition sm:text-xl"
              >
                📅 Book Appointment
              </Link>
            </div>
            <div>
              <img
                src={chamber.image}
                alt={chamber.name}
                className="w-52 h-52  object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChamberSection;
