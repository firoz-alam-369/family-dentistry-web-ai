import React from "react";

const ContactSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-800 text-zinc-900 dark:text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-500 dark:text-indigo-400 mb-10 animate-fade-in">
        📍 Contact & Location | যোগাযোগ ও অবস্থান
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-violet-500 dark:text-violet-400 mb-2">
              Clinic Address
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              123 Smile Avenue, Dhanmondi, Dhaka 1209, Bangladesh
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-violet-500 dark:text-violet-400 mb-2">
              Phone & Email
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              📞 +880 1234-567890
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              ✉️ info@smileclinic.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-violet-500 dark:text-violet-400 mb-2">
              Opening Hours
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Sunday – Friday: 9:00 AM – 9:00 PM
              <br />
              Saturday: Closed
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-violet-500 dark:text-violet-400 mb-2">
              Emergency Contact
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              🚨 Hotline: +880 1987-654321
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">
              Available 24/7 for urgent dental care
            </p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902123456789!2d90.379234!3d23.750876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5a12345678%3A0xabcdef123456789!2sSmile+Dental+Clinic!5e0!3m2!1sen!2sbd!4v1690000000000"
            width="100%"
            height="100%"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
