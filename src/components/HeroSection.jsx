



// import React from "react";
// import { Link } from "react-router-dom";
// import logoFreeTitle from "../assets/logofreetitle.png";

// function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]   md:px-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
        
//         {/* Left Content */}
//        {/* Parent Container */}
// <div className="w-full min-h-[500px] flex flex-col justify-start items-start pt-4 px-4">
  
//   {/* Your Content Component */}
//   <div className="flex flex-col items-start text-left z-10 space-y-5">
//     <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a2e18] leading-[1.15]">
//       Unlock The <span className="text-[#df972b]">Power Of Divine Blessings</span>
//     </h1>
//     <p className="text-black text-sm md:text-base leading-relaxed max-w-lg">
//       Experience sacred pujas, authentic rituals, and spiritual guidance designed to bring peace, positivity, and prosperity into your life with Puja Heetu.
//     </p>
    
//   </div>

// </div>

//         {/* Right Side: logofreetitle.png aligned and 360 Degree Spinning like reference */}
//         <div className="relative flex justify-center items-center">
//           <div className="w-80 sm:w-96 md:w-[480px] lg:w-[520px] aspect-square flex items-center justify-center p-2 relative">
//             <img
//               src={logoFreeTitle}
//               alt="Logo Free Title 360"
//               className="w-full h-full object-contain animate-spin-slow"
//               style={{ animationDuration: "35s" }}
//             />
//           </div>
//         </div>

//       </div>

//       {/* Tailwind Custom Animation Injection for 360 Rotation */}
//       <style>{`
//         @keyframes spinSlow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spinSlow 35s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default HeroSection;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import baner1 from "../assets/homebaner1.png";
import baner2 from "../assets/homebaners.png";

function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [baner1, baner2];

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <section className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] group">

      {/* 🔥 BANNER IMAGES */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentBg ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={bg}
            alt={`Banner ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* 🌫️ Dark overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* 📦 CONTENT */}
      <div className="relative z-30 max-w-7xl mx-auto h-full flex items-center px-6 md:px-12">
        <div className="flex flex-col items-start text-left space-y-3 md:space-y-4 max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Unlock The{" "}
            <span className="text-[#df972b]">Power Of Divine Blessings</span>
          </h1>
          <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg drop-shadow">
            Experience sacred pujas, authentic rituals, and spiritual guidance
            designed to bring peace, positivity, and prosperity into your life.
          </p>

          <div className="flex gap-3 pt-1 flex-wrap">
            <Link
              to="/pooja-booking"
              className="bg-[#7b1e2b] hover:bg-[#5e1620] text-white px-5 py-2 rounded-md font-semibold text-xs md:text-sm transition shadow-2xl"
            >
              Book a Puja
            </Link>
            <Link
              to="/temples"
              className="bg-white hover:bg-gray-100 text-[#7b1e2b] px-5 py-2 rounded-md font-semibold text-xs md:text-sm transition shadow-2xl"
            >
              Explore Temples →
            </Link>
          </div>
        </div>
      </div>

      {/* ⬅️ LEFT ARROW — Professional Glass Style */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-40
                   w-10 h-10 md:w-12 md:h-12
                   rounded-full
                   bg-white/15 hover:bg-white/95
                   backdrop-blur-md
                   border border-white/30 hover:border-white
                   text-white hover:text-[#7b1e2b]
                   flex items-center justify-center
                   shadow-2xl
                   transition-all duration-300
                   opacity-0 md:opacity-100 group-hover:opacity-100
                   hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ➡️ RIGHT ARROW — Professional Glass Style */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-40
                   w-10 h-10 md:w-12 md:h-12
                   rounded-full
                   bg-white/15 hover:bg-white/95
                   backdrop-blur-md
                   border border-white/30 hover:border-white
                   text-white hover:text-[#7b1e2b]
                   flex items-center justify-center
                   shadow-2xl
                   transition-all duration-300
                   opacity-0 md:opacity-100 group-hover:opacity-100
                   hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 🔘 DOTS — Professional */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40
                      px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
        {backgrounds.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBg(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === currentBg
                ? "w-6 h-1.5 bg-white shadow-md"
                : "w-1.5 h-1.5 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;