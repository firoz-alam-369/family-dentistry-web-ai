import React from "react";

const featuredDoctor = {
  name: "Dr. Mahmud Karim",
  designation: "BDS, MDS (Oral & Maxillofacial Surgery)",
  bio: "Over 20 years of experience in dental surgery, implantology, and trauma care.",
  image: "https://via.placeholder.com/300x300?text=Dr+Mahmud",
  chamber: "Chief Consultant – Banani",
};

const doctors = [
  {
    name: "Dr. Ayesha Rahman",
    designation: "BDS, MDS (Orthodontics)",
    bio: "Specialist in Braces, Smile Design & Facial Aesthetics.",
    image: "https://via.placeholder.com/300x300?text=Dr+Ayesha",
    chamber: "Banani",
  },
  {
    name: "Dr. Imran Hossain",
    designation: "BDS, FCPS (Endodontics)",
    bio: "Expert in Root Canal Therapy & Pain Management.",
    image: "https://via.placeholder.com/300x300?text=Dr+Imran",
    chamber: "Banani",
  },
  {
    name: "Dr. Imran Hossain",
    designation: "BDS, FCPS (Endodontics)",
    bio: "Expert in Root Canal Therapy & Pain Management.",
    image: "https://via.placeholder.com/300x300?text=Dr+Imran",
    chamber: "Banani",
  },
  {
    name: "Dr. Nusrat Jahan",
    designation: "BDS, MDS (Pediatric Dentistry)",
    bio: "Gentle care for children & teens.",
    image: "https://via.placeholder.com/300x300?text=Dr+Nusrat",
    chamber: "Dhanmondi",
  },
  {
    name: "Dr. Tanvir Ahmed",
    designation: "BDS, MDS (Implantology)",
    bio: "Dental Implants & Full Mouth Rehab.",
    image: "https://via.placeholder.com/300x300?text=Dr+Tanvir",
    chamber: "Dhanmondi",
  },
  {
    name: "Dr. Farzana Haque",
    designation: "BDS, MDS (Cosmetic Dentistry)",
    bio: "Smile makeover & aesthetic restoration expert.",
    image: "https://via.placeholder.com/300x300?text=Dr+Farzana",
    chamber: "Dhanmondi",
  },
];

const DoctorsSectionTwo = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 text-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-400 mb-10 animate-fade-in">
        👨‍⚕️ Meet Our Doctors | আমাদের অভিজ্ঞ ডাক্তারবৃন্দ
      </h2>

      {/* Featured Doctor */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-700 via-violet-600 to-indigo-800 rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
          <img
            src={featuredDoctor.image}
            alt={featuredDoctor.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center md:text-left">
            <span className="inline-block bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              {featuredDoctor.chamber}
            </span>
            <h3 className="text-2xl font-bold mb-1 text-white">
              {featuredDoctor.name}
            </h3>
            <p className="text-sm font-medium mb-2 text-violet-200">
              {featuredDoctor.designation}
            </p>
            <p className="text-sm mb-4 text-zinc-200">{featuredDoctor.bio}</p>
            <button className="px-5 py-2 bg-white text-zinc-900 rounded-md hover:bg-zinc-100 transition font-semibold shadow-md">
              📅 Book with {featuredDoctor.name.split(" ")[1]}
            </button>
          </div>
        </div>
      </div>

      {/* Other Doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="relative bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 pt-10 text-center animate-fade-in delay-[200ms]"
          >
            {/* Chamber Badge - Top Left */}
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                doc.chamber === "Banani"
                  ? "bg-violet-700 text-white"
                  : "bg-fuchsia-700 text-white"
              }`}
            >
              🏥 {doc.chamber} Chamber
            </span>

            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-violet-500"
            />
            <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
            <p className="text-sm text-violet-300 mb-2">{doc.designation}</p>
            <p className="text-zinc-300 mb-4">{doc.bio}</p>
            <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-md hover:scale-105 transition font-semibold">
              Book with {doc.name.split(" ")[1]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSectionTwo;
