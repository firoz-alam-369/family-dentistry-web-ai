import React from "react";

const doctors = [
  {
    name: "Dr. Mahmud Karim",
    designation: "BDS, MDS (Oral & Maxillofacial Surgery)",
    bio: "Over 20 years of experience in dental surgery, implantology, and trauma care.",
    image: "https://via.placeholder.com/300x300?text=Dr+Mahmud",
    featured: true,
  },
  {
    name: "Dr. Ayesha Rahman",
    designation: "BDS, MDS (Orthodontics)",
    bio: "Specialist in Braces, Smile Design & Facial Aesthetics.",
    image: "https://via.placeholder.com/300x300?text=Dr+Ayesha",
  },
  {
    name: "Dr. Imran Hossain",
    designation: "BDS, FCPS (Endodontics)",
    bio: "Expert in Root Canal Therapy & Pain Management.",
    image: "https://via.placeholder.com/300x300?text=Dr+Imran",
  },
  {
    name: "Dr. Nusrat Jahan",
    designation: "BDS, MDS (Pediatric Dentistry)",
    bio: "Gentle care for children & teens.",
    image: "https://via.placeholder.com/300x300?text=Dr+Nusrat",
  },
];

const DoctorsSection = () => {
  const featured = doctors.find((doc) => doc.featured);
  const others = doctors.filter((doc) => !doc.featured);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-10 animate-fade-in">
        👨‍⚕️ Meet Our Doctors
      </h2>

      {/* Featured Doctor */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 animate-fade-in">
          <img
            src={featured.image}
            alt={featured.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-teal-400 shadow-lg"
          />
          <div className="text-center md:text-left">
            <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Chief Consultant
            </span>
            <h3 className="text-2xl font-bold mb-1 text-white">
              {featured.name}
            </h3>
            <p className="text-sm font-medium mb-2 text-teal-300">
              {featured.designation}
            </p>
            <p className="text-sm mb-4 text-gray-300">{featured.bio}</p>
            <button className="px-5 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition font-semibold shadow-md">
              📅 Book with {featured.name.split(" ")[1]}
            </button>
          </div>
        </div>
      </div>

      {/* Other Doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {others.map((doc, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center animate-fade-in delay-[200ms]"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-teal-400"
            />
            <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
            <p className="text-sm text-teal-300 mb-2">{doc.designation}</p>
            <p className="text-gray-400 mb-4">{doc.bio}</p>
            <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md hover:scale-105 transition font-semibold">
              Book with {doc.name.split(" ")[1]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
