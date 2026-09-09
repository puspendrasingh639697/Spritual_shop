import React from "react";
import { FaStar } from "react-icons/fa";

import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";
import userImg4 from "../assets/pop_1.avif";
import userImg5 from "../assets/pop_4.webp";
import templeBannerImg from "../assets/TampleImage/tabmplebaner.png";

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
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  overflow-hidden relative ">
      
      <div className="max-w-[1500px] mx-auto px-4 md:px-12">
        
        {/* Top Banner exactly matching your provided structure */}
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[160px] md:min-h-[170px] flex items-center mb-12">
          <div className="absolute inset-0 z-0">
            <img
              src={templeBannerImg}
              alt="Temple Banner"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a2311] via-[#4a2311]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
            <div>
              <p className="text-amber-200 text-xs md:text-sm font-semibold tracking-wider uppercase mb-1">
                Testimonials
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-white">
                What Our Customers <span className="text-[#df972b]">Say</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Section: Infinite Smooth Marquee Cards */}
        <div className="relative w-full overflow-hidden flex py-4 marquee-container">
          
          {/* Subtle Gradient Fades on Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#fff7ed] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#fff3df] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {infiniteReviews.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[280px] sm:w-[310px] shrink-0 bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden whitespace-normal"
              >
                <div>
                  {/* User Info Row */}
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-amber-300/40">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#222] text-sm sm:text-base leading-tight">{item.name}</h3>
                      <div className="flex text-amber-500 text-[11px] gap-0.5 mt-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                        <span className="text-gray-500 font-medium ml-1 text-xs">({item.rating}.0)</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Comment */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                    "{item.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Marquee CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default CustomerReviews;