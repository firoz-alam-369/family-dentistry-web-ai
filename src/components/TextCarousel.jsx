import React, { useState, useEffect } from "react";

const TextCarousel = () => {
  const texts = [
    "🦷 Welcome to our Dental Care!",
    "📦 Fast Delivery & Trusted Products",
    "🌐 Bilingual Support: English & Bengali",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // Fade-in new text
      }, 500); // Match duration with Tailwind transition
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-32 bg-transparent text-center">
      <h2
        className={`text-xl font-semibold text-blue-800 transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {texts[currentIndex]}
      </h2>
    </div>
  );
};

export default TextCarousel;
