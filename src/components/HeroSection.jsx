



import React from "react";
import { Link } from "react-router-dom";
import logoFreeTitle from "../assets/logofreetitle.png";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]   md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
        
        {/* Left Content */}
       {/* Parent Container */}
<div className="w-full min-h-[500px] flex flex-col justify-start items-start pt-4 px-4">
  
  {/* Your Content Component */}
  <div className="flex flex-col items-start text-left z-10 space-y-5">
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a2e18] leading-[1.15]">
      Unlock The <span className="text-[#df972b]">Power Of Divine Blessings</span>
    </h1>
    <p className="text-black text-sm md:text-base leading-relaxed max-w-lg">
      Experience sacred pujas, authentic rituals, and spiritual guidance designed to bring peace, positivity, and prosperity into your life with Puja Heetu.
    </p>
    
  </div>

</div>

        {/* Right Side: logofreetitle.png aligned and 360 Degree Spinning like reference */}
        <div className="relative flex justify-center items-center">
          <div className="w-80 sm:w-96 md:w-[480px] lg:w-[520px] aspect-square flex items-center justify-center p-2 relative">
            <img
              src={logoFreeTitle}
              alt="Logo Free Title 360"
              className="w-full h-full object-contain animate-spin-slow"
              style={{ animationDuration: "35s" }}
            />
          </div>
        </div>

      </div>

      {/* Tailwind Custom Animation Injection for 360 Rotation */}
      <style>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;


