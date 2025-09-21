import React from "react";

const testimonials = [
  {
    name: "Farzana Akter",
    feedback:
      "I was nervous before my root canal, but the doctor made me feel completely at ease. No pain, just relief!",
    rating: 5,
    before: "https://via.placeholder.com/150x150?text=Before",
    after: "https://via.placeholder.com/150x150?text=After",
  },
  {
    name: "Rafiul Islam",
    feedback:
      "My braces journey was smooth and the results are amazing. I smile confidently now!",
    rating: 4,
    before: "https://via.placeholder.com/150x150?text=Before",
    after: "https://via.placeholder.com/150x150?text=After",
  },
  {
    name: "Shamima Nasrin",
    feedback:
      "Emergency care was prompt and professional. Highly recommend this clinic!",
    rating: 5,
    before: null,
    after: null,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-600 dark:text-rose-400 mb-10 animate-fade-in">
        🗣️ Patient Testimonials | রোগীর অভিজ্ঞতা
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 animate-fade-in delay-[200ms]"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {t.name}
              </h3>
              <div className="flex items-center mt-1">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <span key={i} className="text-slate-400 text-lg">
                    ☆
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
              “{t.feedback}”
            </p>

            {t.before && t.after && (
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <img
                    src={t.before}
                    alt="Before"
                    className="w-24 h-24 rounded-md shadow-md"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Before
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src={t.after}
                    alt="After"
                    className="w-24 h-24 rounded-md shadow-md"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    After
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
