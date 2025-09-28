import React from "react";
import { Link } from "react-router";

const AboutPage = () => {
  return (
    <section className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 to-zinc-200 dark:from-gray-950 dark:to-slate-900 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold text-center text-violet-600 dark:text-violet-400 mb-6">
          🦷 About Us | আমাদের সম্পর্কে
        </h1>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
          Family Dentistry is a trusted name in dental care, serving the Dhaka
          community with compassion and excellence. With two modern chambers in
          Banani and Dhanmondi, we offer comprehensive oral health services for
          all ages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-violet-500 dark:text-violet-300 mb-2">
              🎯 Our Mission
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              To deliver premium, pain-free dental care with a focus on hygiene,
              empathy, and long-term oral wellness.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-violet-500 dark:text-violet-300 mb-2">
              💡 Our Values
            </h2>
            <ul className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>Patient-first approach</li>
              <li>Clean, safe, and modern environment</li>
              <li>Transparent communication</li>
              <li>Continuous learning and innovation</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-violet-500 dark:text-violet-300 mb-2">
            👨‍⚕️ Our Team
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            Led by Dr. Mahmud Karim and a team of specialists in orthodontics,
            pediatric care, and cosmetic dentistry, we ensure every smile gets
            the attention it deserves.
          </p>
          <Link
            to="/doctors"
            className="inline-block px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-md hover:scale-105 transition font-semibold"
          >
            Meet Our Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
