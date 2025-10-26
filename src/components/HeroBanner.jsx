// import React from "react";
// import b_one_img from "../assets/Images/b-one.png";
// import b_two_img from "../assets/Images/b-two.png";
// import b_three_img from "../assets/Images/b-three.png";
// import b_four_img from "../assets/Images/b-four.png";
// import DiamondImageLayout from "./Layout/DiamondImageLayout";
// // Replace with your image path

// const HeroBanner = () => {
//   return (
//     <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-900 dark:from-gray-950 dark:to-slate-900 text-white dark:text-zinc-100">
//       <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 animate-fade-in">
//         {/* Left: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <h3 className="text-sm uppercase tracking-wider text-fuchsia-300">
//             Professional Dental Care
//           </h3>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white dark:text-zinc-100">
//             Family Dentistry
//           </h1>
//           <p className="text-zinc-200 dark:text-zinc-400 text-base md:text-lg">
//             We provide compassionate, modern dental care for your entire family.
//             Book your appointment today and experience the difference.
//           </p>
//           <a
//             href="#appointment"
//             className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full transition"
//           >
//             GET APPOINTMENT
//           </a>
//         </div>

//         {/* Right: Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           {/* <div className="grid grid-cols-2 grid-rows-2 gap-4">
//             <img src={b_one_img} alt="" className="w-2/3 max-w-sm " />
//             <img src={b_two_img} alt="" className="w-2/3 max-w-sm " />
//             <img src={b_two_img} alt="" className="w-2/3 max-w-sm " />
//             <img src={b_three_img} alt="" className="w-2/3 max-w-sm " />
//             <img src={b_four_img} alt="" className=" w-2/3 max-w-sm " />
//           </div> */}
//           <DiamondImageLayout />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React from "react";
// import bannerImage from "../assets/smiling-patient.jpg";
// import teamImages from "../assets/team"; // teamImages.js file
import teamImages from "./Layout/teamImages";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-900 dark:from-gray-950 dark:to-slate-900 text-white dark:text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 flex flex-col-reverse lg:flex-row items-center gap-8 animate-fade-in">
        {/* Left Section: Slogan + CTA + Patient Image */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-sm uppercase tracking-wider text-fuchsia-300">
              Professional Dental Care
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white dark:text-zinc-100">
              Family Dentistry
            </h1>
            <p className="text-zinc-200 dark:text-zinc-400 text-base md:text-lg">
              We provide compassionate, modern dental care for your entire
              family. Book your appointment today and experience the difference.
            </p>
            <a
              href="#appointment"
              className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              GET APPOINTMENT
            </a>
          </div>

          {/* Patient Image */}
          {/* <div className="flex justify-center lg:justify-start mt-6">
            <img
              src={bannerImage}
              alt="Smiling Patient"
              className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-lg object-cover"
            />
          </div> */}
        </div>

        {/* Right Section: Diamond Image Layout */}
        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          {/* Top Left */}
          <img
            src={teamImages.topLeft}
            alt="Top Left"
            className="absolute top-12 left-1/4 transform -translate-x-1/2 w-16 sm:w-40 h-16 sm:h-40 rounded-full object-cover shadow-lg"
          />
          {/* Top Right */}
          <img
            src={teamImages.topRight}
            alt="Top Right"
            className="absolute top-12 right-1/4 transform translate-x-1/2 w-16 sm:w-40 h-16 sm:h-40 rounded-full object-cover shadow-lg"
          />
          {/* Center */}
          <img
            src={teamImages.center}
            alt="Center"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 sm:w-40 md:w-50 h-28 sm:h-50 md:h-50 rounded-full object-cover shadow-xl border-4 border-fuchsia-500"
          />
          {/* Bottom Left */}
          <img
            src={teamImages.bottomLeft}
            alt="Bottom Left"
            className="absolute bottom-8 left-1/4 transform -translate-x-1/2 w-16 sm:w-40 h-16 sm:h-40 rounded-full object-cover shadow-lg"
          />
          {/* Bottom Right */}
          <img
            src={teamImages.bottomRight}
            alt="Bottom Right"
            className="absolute bottom-8 right-1/4 transform translate-x-1/2 w-16 sm:w-40 h-16 sm:h-40 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
