import React from "react";

const trustItems = [
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Our clinic meets international standards for quality management and patient care.",
    icon: "✅",
  },
  {
    title: "Bangladesh Dental Association Member",
    description:
      "We are officially registered and recognized by the national dental board.",
    icon: "🏷️",
  },
  {
    title: "Sterile Instrument Protocol",
    description:
      "All tools are sterilized using autoclave technology after every use.",
    icon: "🧼",
  },
  {
    title: "COVID-19 Safety Measures",
    description:
      "Temperature checks, PPE, air purification, and contactless appointments.",
    icon: "😷",
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-800 text-zinc-900 dark:text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-500 dark:text-violet-400 mb-10 animate-fade-in">
        🛡️ Trust & Compliance | বিশ্বস্ততা ও সুরক্ষা
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 animate-fade-in delay-[200ms]"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
