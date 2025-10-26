import React from "react";

const teamImages = [
  { src: "../../assets/team/b-one.png", alt: "Top Left" },
  { src: "../../assets/team/b-two.png", alt: "Top Right" },
  { src: "../../assets/team/b-three.png", alt: "Center" },
  { src: "../../assets/team/b-four.png", alt: "Bottom Left" },
  { src: "../../assets/team/b-two.png", alt: "Bottom Right" },
];

const DiamondImageLayout = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-900 dark:from-gray-950 dark:to-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-zinc-300 dark:text-zinc-400 text-base">
          Compassionate professionals dedicated to your smile.
        </p>
      </div>

      <div className="relative w-full max-w-xl mx-auto h-[400px] md:h-[500px]">
        {/* Top Left */}
        <img
          src={teamImages[0].src}
          alt={teamImages[0].alt}
          className="absolute top-0 left-1/4 transform -translate-x-1/2 w-24 h-24 rounded-full object-cover shadow-lg"
        />

        {/* Top Right */}
        <img
          src={teamImages[1].src}
          alt={teamImages[1].alt}
          className="absolute top-0 right-1/4 transform translate-x-1/2 w-24 h-24 rounded-full object-cover shadow-lg"
        />

        {/* Center */}
        <img
          src={teamImages[2].src}
          alt={teamImages[2].alt}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-xl border-4 border-fuchsia-500"
        />

        {/* Bottom Left */}
        <img
          src={teamImages[3].src}
          alt={teamImages[3].alt}
          className="absolute bottom-0 left-1/4 transform -translate-x-1/2 w-24 h-24 rounded-full object-cover shadow-lg"
        />

        {/* Bottom Right */}
        <img
          src={teamImages[4].src}
          alt={teamImages[4].alt}
          className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-24 h-24 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default DiamondImageLayout;
