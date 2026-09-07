// import React from "react";
// import { Link } from "react-router-dom";
// import logoFreeTitle from "../assets/logofreetitle.png";

// function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#fff3df] py-12 md:py-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
        
//         {/* Left Content */}
//         <div className="flex flex-col items-start text-left z-10 space-y-4">
//           <span className="text-[#8c0a15] font-bold text-xs md:text-sm tracking-widest uppercase bg-amber-900/10 px-3 py-1 rounded-full">
//             PREDICTION SE PUJA TAK
//           </span>
//           <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#4a2e18] leading-tight">
//             Unlock The <span className="text-[#df972b]">Power Of Divine Blessings</span>
//           </h1>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
//             Experience sacred pujas, authentic rituals, and spiritual guidance designed to bring peace, positivity, and prosperity into your life with Puja Heetu.
//           </p>
//           <div className="pt-2 flex items-center gap-4">
//             <Link 
//               to="/pandit-booking" 
//               className="bg-[#df972b] hover:bg-[#c27803] text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-sm md:text-base"
//             >
//               Book Pandit Ji
//             </Link>
//             <Link 
//               to="/pooja-booking" 
//               className="border-2 border-[#4a2e18] text-[#4a2e18] hover:bg-[#4a2e18] hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base"
//             >
//               Explore Pujas
//             </Link>
//           </div>
//         </div>

//         {/* Right Side: logofreetitle.png with 360 Degree Continuous Rotation */}
//         <div className="relative flex justify-center items-center">
//           <div className="w-72 sm:w-96 md:w-[450px] lg:w-[500px] aspect-square flex items-center justify-center p-4">
//             <img
//               src={logoFreeTitle}
//               alt="Logo Free Title 360"
//               className="w-full h-full object-contain animate-spin-slow drop-shadow-xl"
//               style={{ animationDuration: "25s" }}
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
//           animation: spinSlow 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default HeroSection;



import React from "react";
import { Link } from "react-router-dom";
import logoFreeTitle from "../assets/logofreetitle.png";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fff3df]  px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left z-10 space-y-5">
          <span className="text-white font-bold text-xs md:text-sm tracking-widest  bg-[#df972b] px-3.5 py-1.5 rounded-md">
            PREDICTION SE PUJA TAK
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a2e18] leading-[1.15]">
            Unlock The <span className="text-[#df972b]">Power Of Divine Blessings</span>
          </h1>
          <p className="text-black text-sm md:text-base leading-relaxed max-w-lg">
            Experience sacred pujas, authentic rituals, and spiritual guidance designed to bring peace, positivity, and prosperity into your life with Puja Heetu.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <Link 
              to="/book-pandit-ji" 
              className="bg-[#df972b] hover:bg-[#c27803] text-white font-bold px-7 py-3 rounded-md shadow-md transition-all duration-300 text-sm md:text-base"
            >
              Book Pandit Ji
            </Link>
            <Link 
              to="/puja" 
              className="border-2 border-[#4a2e18] text-[#4a2e18] hover:bg-[#4a2e18] hover:text-white font-bold px-7 py-3 rounded-md transition-all duration-300 text-sm md:text-base"
            >
              Explore Pujas
            </Link>
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