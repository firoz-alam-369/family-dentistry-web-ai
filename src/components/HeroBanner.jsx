import React from "react";
import b_one_img from "../assets/Images/b-one.png";
import b_two_img from "../assets/Images/b-two.png";
import b_three_img from "../assets/Images/b-three.png";
import b_four_img from "../assets/Images/b-four.png";
// Replace with your image path

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-900 dark:from-gray-950 dark:to-slate-900 text-white dark:text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 animate-fade-in">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h3 className="text-sm uppercase tracking-wider text-fuchsia-300">
            Professional Dental Care
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white dark:text-zinc-100">
            Family Dentistry
          </h1>
          <p className="text-zinc-200 dark:text-zinc-400 text-base md:text-lg">
            We provide compassionate, modern dental care for your entire family.
            Book your appointment today and experience the difference.
          </p>
          <a
            href="#appointment"
            className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            GET APPOINTMENT
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img src={b_one_img} alt="" className="w-2/3 max-w-sm " />
            <img src={b_two_img} alt="" className="w-2/3 max-w-sm " />
            <img
              src={b_three_img}
              alt=""
              className="row-span-2 w-2/3 max-w-sm "
            />
            <img
              src={b_four_img}
              alt=""
              className="row-span-2 w-2/3 max-w-sm "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
