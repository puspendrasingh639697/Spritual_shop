// import React, { useRef, useEffect } from "react";
// import { Link } from "react-router-dom";

// import tample1 from "../../assets/TampleImage/tample1.png";
// import tample2 from "../../assets/TampleImage/tample2.png";
// import tample6 from "../../assets/TampleImage/tample6.png";
// import tample17 from "../../assets/TampleImage/tample17.png";
// import tample18 from "../../assets/TampleImage/tample18.png";
// import idols2 from "../../assets/Idols2.png";
// import templeBanner from "../../assets/TampleImage/tabmplebaner.png";

// const pilgrimageSites = [
//   { title: "Puri", image: tample1, href: "/temples/puri" },
//   { title: "Dwarka", image: tample2, href: "/temples/dwarka" },
//   { title: "Ayodhya", image: tample6, href: "/temples/ayodhya" },
//   { title: "Shirdi & Shani Shingnapur", image: tample17, href: "/temples/shirdi" },
//   { title: "Kashi Vishwanath", image: tample18, href: "/temples/kashi" },
//   { title: "Divine Sanctuaries", image: idols2, href: "/temples/divine" },
// ];

// function ExplorePilgrimage() {
//   const scrollRef = useRef(null);

//   // Infinite Auto Scroll Effect (Left to Right continuous loop)
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let animationId;
//     let scrollSpeed = 1; // Adjust speed here (lower = smoother/slower)

//     const step = () => {
//       if (container) {
//         container.scrollLeft += scrollSpeed;
//         // If it reaches the halfway mark (end of original list items), loop back seamlessly
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//       animationId = requestAnimationFrame(step);
//     };

//     animationId = requestAnimationFrame(step);

//     // Pause auto-scroll on hover so user can click cards easily
//     const handleMouseEnter = () => cancelAnimationFrame(animationId);
//     const handleMouseLeave = () => {
//       animationId = requestAnimationFrame(step);
//     };

//     container.addEventListener("mouseenter", handleMouseEnter);
//     container.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationId);
//       if (container) {
//         container.removeEventListener("mouseenter", handleMouseEnter);
//         container.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   // Duplicate items array to make the infinite loop completely seamless
//   const infiniteSites = [...pilgrimageSites, ...pilgrimageSites];

//   return (
//     <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  md:px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section (UI untouched as requested) */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d1b0d]">
//             Explore <span className="text-[#df972b] font-normal">Top Pilgrimage</span> Sites of India
//           </h2>
//           <p className="text-black text-sm md:text-base mt-2">
//             Discover the spiritual heart of India by exploring its top pilgrimage sites like never before
//           </p>
//         </div>

//       {/* Infinite Continuous Scrolling Track */}
//         <div className="relative mb-14 px-2 md:px-6">
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-2 px-2 select-none"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {infiniteSites.map((site, index) => (
//               <Link
//                 key={index}
//                 to={site.href}
//                 className="flex-none w-[270px] sm:w-[290px] md:w-[300px] group/card cursor-pointer"
//               >
//                 <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-900/10">
//                   <div className="w-full h-[210px] overflow-hidden bg-gray-50 flex items-center justify-center p-3">
//                     <img
//                       src={site.image}
//                       alt={site.title}
//                       className="w-full h-full object-contain object-center group-hover/card:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   {/* डिफ़ॉल्ट नारंगी बैकग्राउंड और सफेद टेक्स्ट, होवर पर हल्का बैकग्राउंड और काला टेक्स्ट */}
//                   <div className="py-4 px-3 text-center transition-all duration-300 bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:via-[#fff7ed] group-hover/card:to-[#fff3df]">
//                     <h3 className="text-base md:text-lg text-white group-hover/card:text-black tracking-wide transition-colors duration-300">
//                       {site.title}
//                     </h3>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         {/* Bottom Banner Section (UI untouched) */}
//         <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[160px] md:min-h-[170px] flex items-center">
//           <div className="absolute inset-0 z-0">
//             <img
//               src={templeBanner}
//               alt="Temple Banner"
//               className="w-full h-full object-cover opacity-60 mix-blend-overlay"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#4a2311] via-[#4a2311]/80 to-transparent"></div>
//           </div>

//           <div className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
//             <div>
//               <p className="text-amber-200 text-xs md:text-sm font-semibold tracking-wider uppercase mb-1">
//                 Two Sacred Cities, One Divine Journey
//               </p>
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-white">
//                 Kashi Vishwanath <span className="text-[#df972b]">&</span> Ayodhya
//               </h3>
//             </div>
            
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default ExplorePilgrimage;



import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import tample1 from "../../assets/TampleImage/tample1.png";
import tample2 from "../../assets/TampleImage/tample2.png";
import tample6 from "../../assets/TampleImage/tample6.png";
import tample17 from "../../assets/TampleImage/tample17.png";
import tample18 from "../../assets/TampleImage/tample18.png";
import idols2 from "../../assets/Idols2.png";
import templeBanner from "../../assets/TampleImage/tabmplebaner.png";

const pilgrimageSites = [
  { title: "Puri", image: tample1, href: "/temples/puri" },
  { title: "Dwarka", image: tample2, href: "/temples/dwarka" },
  { title: "Ayodhya", image: tample6, href: "/temples/ayodhya" },
  { title: "Shirdi & Shani Shingnapur", image: tample17, href: "/temples/shirdi" },
  { title: "Kashi Vishwanath", image: tample18, href: "/temples/kashi" },
  { title: "Divine Sanctuaries", image: idols2, href: "/temples/divine" },
];

function ExplorePilgrimage() {
  const scrollRef = useRef(null);

  // Infinite Auto Scroll Effect (Left to Right continuous loop)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let scrollSpeed = 1; // Adjust speed here (lower = smoother/slower)

    const step = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;
        // If it reaches the halfway mark (end of original list items), loop back seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // Pause auto-scroll on hover so user can click cards easily
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(step);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Duplicate items array to make the infinite loop completely seamless
  const infiniteSites = [...pilgrimageSites, ...pilgrimageSites];

  return (
    // 🔴 ADDED py-12: Taki banner neeche chipke nahi aur section clean lage
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-12 md:px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d1b0d]">
            {/* 🔴 Changed yellow to maroon */}
            Explore <span className="text-[#7b1e2b] font-normal">Top Pilgrimage</span> Sites of India
          </h2>
          <p className="text-black text-sm md:text-base mt-2 px-4">
            Discover the spiritual heart of India by exploring its top pilgrimage sites like never before
          </p>
        </div>

      {/* Infinite Continuous Scrolling Track */}
        <div className="relative mb-14 px-2 md:px-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-2 px-2 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {infiniteSites.map((site, index) => (
              <Link
                key={index}
                to={site.href}
                className="flex-none w-[270px] sm:w-[290px] md:w-[300px] group/card cursor-pointer"
              >
                <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#7b1e2b]/10">
                  <div className="w-full h-[210px] overflow-hidden bg-gray-50 flex items-center justify-center p-3">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="w-full h-full object-contain object-center group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* 🔴 Changed Card bottom bar to Maroon */}
                  <div className="py-4 px-3 text-center transition-all duration-300 bg-[#7b1e2b] group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:via-[#fff7ed] group-hover/card:to-[#fff3df] border-t border-[#7b1e2b]/20">
                    <h3 className="text-base md:text-lg text-white group-hover/card:text-[#7b1e2b] tracking-wide transition-colors duration-300 font-medium">
                      {site.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[160px] md:min-h-[170px] flex items-center mx-4 md:mx-0">
          <div className="absolute inset-0 z-0">
            <img
              src={templeBanner}
              alt="Temple Banner"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a2311] via-[#4a2311]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
            <div>
              <p className="text-amber-200 text-xs md:text-sm font-semibold tracking-wider uppercase mb-1">
                Two Sacred Cities, One Divine Journey
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-white">
                {/* 🔴 Changed yellow '&' to maroon */}
                Kashi Vishwanath <span className="text-[#7b1e2b] drop-shadow-sm">&</span> Ayodhya
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExplorePilgrimage;