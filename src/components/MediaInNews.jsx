// import React from "react";

// // Top banner aur bottom icons/features ki images import ho rahi hain
// import bottomBannerImg from "../assets/pop_2.webp"; 
// import icon1 from "../assets/pop_1.avif";
// import icon2 from "../assets/pop_3.avif";
// import icon3 from "../assets/pop_6.avif";
// import icon4 from "../assets/popo_5.avif";

// const featureItems = [
//   { id: 1, title: "Certified by Authorized Labs", desc: "Every product is tested for quality and safety, so what touches your body honours it.", image: icon1 },
//   { id: 2, title: "Sacredly Sourced", desc: "Every product begins at its rightful origin, sourced through traditional channels that honour ritual, lineage, and purpose.", image: icon2 },
//   { id: 3, title: "Traceable for Life", desc: "Your product's authenticity stays accessible to you always. Simply check, verify, and download your certificate whenever you need it.", image: icon3 },
//   { id: 4, title: "Blessed through Sacred Rituals", desc: "Elevate your daily journey with authentic tools for spiritual awakening.", image: icon4 },
// ];

// const MediaInNews = () => {
//   return (
//     <section className="bg-[#fff3df] py-6 px-0 w-full overflow-hidden border-b border-[#edd5b9]">
//       <div className="w-full px-4 mx-auto text-center">

//         {/* Top Full Width Banner Image (`pop_2.webp`) */}
//         <div className="w-full flex justify-center items-center mb-12">
//           <img 
//             src={bottomBannerImg} 
//             alt="Divine Hindu Feature Banner" 
//             className="w-full h-auto object-cover rounded-none sm:rounded-xl shadow-none sm:shadow-sm"
//           />
//         </div>

//         {/* Bottom 4 Feature Icons / Cards Section (Screenshot Match) */}
//         <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
//           {featureItems.map((item) => (
//             <div key={item.id} className="flex flex-col items-center text-center px-2">
              
//               {/* Circular Icon Container */}
//               <div className="w-16 h-16 sm:w-20 sm:h-20  flex items-center justify-center p-3 mb-4">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-base font-serif font-bold text-[#4a2e18] mb-2">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-xs sm:text-sm text-black leading-relaxed">
//                 {item.desc}
//               </p>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MediaInNews;


import React from "react";
import { FaStar } from "react-icons/fa";

import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";
import userImg4 from "../assets/pop_1.avif";
import userImg5 from "../assets/pop_4.webp";

const reviews = [
  { 
    id: 1, 
    name: "Meera Reddy", 
    rating: 5, 
    comment: "Love the chat with astrologer feature. Got clarity on career and marriage. Thank you, team!", 
    avatar: userImg1 
  },
  { 
    id: 2, 
    name: "Ravi Kumar", 
    rating: 5, 
    comment: "Kundali matching here was so accurate. Our families were convinced. Best astrology platform.", 
    avatar: userImg2 
  },
  { 
    id: 3, 
    name: "Priya Sharma", 
    rating: 5, 
    comment: "Got my free kundali and daily horoscope. Predictions are precise and the pandit booking is seamless.", 
    avatar: userImg3 
  },
  { 
    id: 4, 
    name: "Arun Mehta", 
    rating: 5, 
    comment: "E-Pooja booking was hassle-free. The astrologer's advice changed my decisions for the better.", 
    avatar: userImg4 
  },
  { 
    id: 5, 
    name: "Sneha Iyer", 
    rating: 5, 
    comment: "Amazing consultation experience! Highly professional and trustworthy astrologers available here.", 
    avatar: userImg5 
  }
];

function CustomerReviews() {
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="w-full bg-[#f1c40f] py-16 overflow-hidden relative font-sans">
      
      {/* Section Header */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-12 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/60 mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222] font-serif tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-[#333] text-sm sm:text-base mt-2">
          See what our customers have to say about their experience with us.
        </p>
      </div>

      {/* Infinite Smooth Flowing Marquee Track with Left & Right Gradient Mask Shadows */}
      <div className="relative w-full overflow-hidden flex py-4 marquee-container">
        
        {/* Left & Right Shadow Gradient Fades matching background #f1c40f */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#f1c40f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#f1c40f] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {infiniteReviews.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[280px] sm:w-[310px] shrink-0 bg-[#fff9e6] rounded-2xl p-5 shadow-md border border-[#e6c65c] flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden whitespace-normal"
            >
              <div>
                {/* User Row: Avatar (Background image color removed) + Name + Rating Stars */}
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-amber-300 bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover mix-blend-luminosity opacity-90" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#222] text-sm sm:text-base leading-tight">{item.name}</h3>
                    <div className="flex text-amber-500 text-[11px] gap-0.5 mt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      <span className="text-gray-600 font-semibold ml-1">({item.rating})</span>
                    </div>
                  </div>
                </div>

                {/* Review Comment Text */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Marquee CSS Animation (Right to Left loop) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default CustomerReviews;