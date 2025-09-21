import React from "react";

const AppointmentSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-500 dark:text-emerald-400 mb-10 animate-fade-in">
        📅 Book Your Appointment | 📞 আপনার অ্যাপয়েন্টমেন্ট নিন
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Online Form */}
        <form className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
              Name | নাম
            </label>

            <input className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone | ফোন নম্বর
            </label>
            <input
              type="tel"
              placeholder="+8801XXXXXXXXX"
              className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Date | তারিখ
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Service | সেবা
            </label>
            <select className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none">
              <option>General Dentistry</option>
              <option>Root Canal Treatment</option>
              <option>Braces & Aligners</option>
              <option>Dental Implants</option>
              <option>Emergency Care</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-md hover:scale-105 transition"
          >
            ✅ Confirm Appointment | ✅ অ্যাপয়েন্টমেন্ট নিশ্চিত করুন
          </button>
        </form>

        {/* Contact Options */}
        <div className="flex flex-col justify-center items-start space-y-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              📱 WhatsApp Booking
            </h3>
            <a className="inline-block px-5 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition font-semibold">
              💬 Chat on WhatsApp | 💬 হোয়াটসঅ্যাপে যোগাযোগ করুন
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              ☎️ Hotline Number
            </h3>
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
              +880 1234-567890
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Available 9 AM – 9 PM | প্রতিদিন সকাল ৯টা থেকে রাত ৯টা
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
