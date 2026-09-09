// // import React from "react";
// // import { 
// //   FaOm, 
// //   FaShoppingBag, 
// //   FaVideo, 
// //   FaUserShield, 
// //   FaHandsHelping, 
// //   FaStar 
// // } from "react-icons/fa";

// // const featuresList = [
// //   {
// //     id: 1,
// //     title: "Puja Booking",
// //     desc: "Book sacred pujas performed at holy shrines and verified temples with complete Vedic rituals.",
// //     icon: <FaOm className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   },
// //   {
// //     id: 2,
// //     title: "Pandit Booking",
// //     desc: "Experienced and verified pandits for homam, griha pravesh, marriage, and custom ceremonies.",
// //     icon: <FaHandsHelping className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   },
// //   {
// //     id: 3,
// //     title: "E-Shop Products",
// //     desc: "Authentic rudraksha, gemstones, energized yantras, and divine idols delivered to your home.",
// //     icon: <FaShoppingBag className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   },
// //   {
// //     id: 4,
// //     title: "HD Video Proof",
// //     desc: "Receive full HD footage of your ritual being performed, because faith deserves complete transparency.",
// //     icon: <FaVideo className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   },
// //   {
// //     id: 5,
// //     title: "Verified Astrologers, No AI",
// //     desc: "Real consultations with experienced astrologers. Public reviews, accurate predictions, zero bots.",
// //     icon: <FaStar className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   },
// //   {
// //     id: 6,
// //     title: "1 Lakh+ Puja Performed",
// //     desc: "Over 100,000 devotees trusted JaatakAstro for their spiritual journey and sacred offerings.",
// //     icon: <FaUserShield className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
// //   }
// // ];

// // function FeaturesGridSection() {
// //   return (
// //     <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-20 px-4 md:px-10 overflow-hidden relative">
      
// //       {/* Section Header */}
// //       <div className="max-w-[1200px] mx-auto text-center mb-14">
// //         <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1a0d00] tracking-tight">
// //           Why 10 Million Devotees Trust Astro
// //         </h2>
// //       </div>

// //       {/* 6 Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
// //       <div className="max-w-[1400px] mx-auto">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
// //           {featuresList.map((item) => (
// //             <div 
// //               key={item.id}
// //               className="group bg-white hover:bg-gradient-to-r hover:from-[#df972b] hover:to-[#c27803] rounded-xl p-6 shadow-sm border border-gray-100 hover:border-transparent flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
// //             >
// //               <div>
// //                 {/* Icon Box top-left with hover background transition */}
// //                 <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#fff9f0] group-hover:bg-white/20 border border-[#fde68a]/50 group-hover:border-white/30 mb-4 transition-all duration-300">
// //                   {item.icon}
// //                 </div>

// //                 {/* Title */}
// //                 <h3 className="font-bold text-[#1a0d00] group-hover:text-white text-lg mb-2 transition-colors duration-300">
// //                   {item.title}
// //                 </h3>
                
// //                 {/* Description */}
// //                 <p className="text-gray-600 group-hover:text-white/90 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
// //                   {item.desc}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }

// // export default FeaturesGridSection;


// import React from "react";
// import { 
//   FaOm, 
//   FaShoppingBag, 
//   FaVideo, 
//   FaUserShield, 
//   FaHandsHelping, 
//   FaStar 
// } from "react-icons/fa";
// import templeBannerImg from "../assets/TampleImage/tabmplebaner.png";

// const featuresList = [
//   {
//     id: 1,
//     title: "Puja Booking",
//     desc: "Book sacred pujas performed at holy shrines and verified temples with complete Vedic rituals.",
//     icon: <FaOm className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   },
//   {
//     id: 2,
//     title: "Pandit Booking",
//     desc: "Experienced and verified pandits for homam, griha pravesh, marriage, and custom ceremonies.",
//     icon: <FaHandsHelping className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   },
//   {
//     id: 3,
//     title: "E-Shop Products",
//     desc: "Authentic rudraksha, gemstones, energized yantras, and divine idols delivered to your home.",
//     icon: <FaShoppingBag className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   },
//   {
//     id: 4,
//     title: "HD Video Proof",
//     desc: "Receive full HD footage of your ritual being performed, because faith deserves complete transparency.",
//     icon: <FaVideo className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   },
//   {
//     id: 5,
//     title: "Verified Astrologers, No AI",
//     desc: "Real consultations with experienced astrologers. Public reviews, accurate predictions, zero bots.",
//     icon: <FaStar className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   },
//   {
//     id: 6,
//     title: "1 Lakh+ Puja Performed",
//     desc: "Over 100,000 devotees trusted JaatakAstro for their spiritual journey and sacred offerings.",
//     icon: <FaUserShield className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
//   }
// ];

// function FeaturesGridSection() {
//   return (
//     <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-12 px-4 md:px-10 overflow-hidden relative">
      
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* Top Banner with matching design and heading */}
//         <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[160px] md:min-h-[170px] flex items-center mb-14">
//           <div className="absolute inset-0 z-0">
//             <img
//               src={templeBannerImg}
//               alt="Temple Banner"
//               className="w-full h-full object-cover opacity-60 mix-blend-overlay"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#4a2311] via-[#4a2311]/80 to-transparent"></div>
//           </div>

//           <div className="relative z-10 px-6 md:px-12 py-8 flex flex-col justify-center w-full gap-1">
//             <p className="text-amber-200 text-xs md:text-sm font-semibold tracking-wider uppercase">
//               Our Core Strengths
//             </p>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
//               Why 10 Million Devotees <span className="text-[#df972b]">Trust Astro</span>
//             </h2>
//           </div>
//         </div>

//         {/* 6 Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
//           {featuresList.map((item) => (
//             <div 
//               key={item.id}
//               className="group bg-white hover:bg-gradient-to-r hover:from-[#df972b] hover:to-[#c27803] rounded-xl p-6 shadow-sm border border-gray-100 hover:border-transparent flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//             >
//               <div>
//                 {/* Icon Box top-left with hover background transition */}
//                 <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#fff9f0] group-hover:bg-white/20 border border-[#fde68a]/50 group-hover:border-white/30 mb-4 transition-all duration-300">
//                   {item.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-bold text-[#1a0d00] group-hover:text-white text-lg mb-2 transition-colors duration-300">
//                   {item.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-gray-600 group-hover:text-white/90 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//     </section>
//   );
// }

// export default FeaturesGridSection;


import React from "react";
import { 
  FaOm, 
  FaShoppingBag, 
  FaVideo, 
  FaUserShield, 
  FaHandsHelping, 
  FaStar 
} from "react-icons/fa";
import templeBannerImg from "../assets/TampleImage/tabmplebaner.png";

const featuresList = [
  {
    id: 1,
    title: "Puja Booking",
    desc: "Book sacred pujas performed at holy shrines and verified temples with complete Vedic rituals.",
    icon: <FaOm className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  },
  {
    id: 2,
    title: "Pandit Booking",
    desc: "Experienced and verified pandits for homam, griha pravesh, marriage, and custom ceremonies.",
    icon: <FaHandsHelping className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  },
  {
    id: 3,
    title: "E-Shop Products",
    desc: "Authentic rudraksha, gemstones, energized yantras, and divine idols delivered to your home.",
    icon: <FaShoppingBag className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  },
  {
    id: 4,
    title: "HD Video Proof",
    desc: "Receive full HD footage of your ritual being performed, because faith deserves complete transparency.",
    icon: <FaVideo className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  },
  {
    id: 5,
    title: "Verified Astrologers, No AI",
    desc: "Real consultations with experienced astrologers. Public reviews, accurate predictions, zero bots.",
    icon: <FaStar className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  },
  {
    id: 6,
    title: "1 Lakh+ Puja Performed",
    desc: "Over 100,000 devotees trusted JaatakAstro for their spiritual journey and sacred offerings.",
    icon: <FaUserShield className="text-[#df972b] group-hover:text-white transition-colors duration-300 text-lg" />
  }
];

function FeaturesGridSection() {
  return (
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-4 px-4 md:px-10 overflow-hidden relative">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Banner with Centered Text and White Line */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[180px] md:min-h-[200px] flex items-center justify-center mb-14 text-center">
          <div className="absolute inset-0 z-0">
            <img
              src={templeBannerImg}
              alt="Temple Banner"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a2311] via-[#4a2311]/70 to-[#4a2311]/50"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 py-8 flex flex-col items-center justify-center w-full">
            <p className="text-amber-200 text-xs md:text-sm font-bold tracking-wider uppercase mb-2">
              Our Core Strengths
            </p>
            {/* White Divider Line */}
            <div className="w-16 h-0.5 bg-white/70 mb-3 rounded-md"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
              <span className="text-white "> Why 10 Million Devotees</span>
            </h2>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuresList.map((item) => (
            <div 
              key={item.id}
              className="group bg-white/10 hover:bg-gradient-to-r hover:from-[#df972b] hover:to-[#c27803] rounded-xl p-6 shadow-sm border border-gray-100 hover:border-transparent flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#fff9f0] group-hover:bg-white/20 border border-[#fde68a]/50 group-hover:border-white/30 mb-4 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-bold text-[#1a0d00] group-hover:text-white text-lg mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default FeaturesGridSection;