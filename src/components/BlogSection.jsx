import React from "react";

const tips = [
  {
    title: "Brushing Techniques | ব্রাশ করার সঠিক পদ্ধতি",
    excerpt:
      "Use a soft-bristled brush and gentle circular motions twice daily. নরম ব্রাশ দিয়ে দিনে দুবার গোলাকারভাবে ব্রাশ করুন।",
    image: "https://via.placeholder.com/400x250?text=Brushing",
    link: "#",
  },
  {
    title: "Flossing Matters | ফ্লস করা কেন জরুরি",
    excerpt:
      "Flossing removes plaque between teeth where brushes can't reach. ফ্লস দাঁতের মাঝখানের জমা প্লাক দূর করে।",
    image: "https://via.placeholder.com/400x250?text=Flossing",
    link: "#",
  },
  {
    title: "Kids’ Dental Care | শিশুদের দাঁতের যত্ন",
    excerpt:
      "Start brushing as soon as the first tooth appears. প্রথম দাঁত উঠলেই ব্রাশিং শুরু করুন।",
    image: "https://via.placeholder.com/400x250?text=Kids+Care",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-500 dark:text-indigo-400 mb-10 animate-fade-in">
        🦷 Oral Health Tips | মুখের স্বাস্থ্য টিপস
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden animate-fade-in delay-[200ms]"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                {tip.excerpt}
              </p>
              <a
                href={tip.link}
                className="inline-block text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline"
              >
                📖 Read More | বিস্তারিত পড়ুন
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
