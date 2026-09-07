import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#fff3df] py-12 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d1b0d]">
            Explore <span className="text-[#df972b] font-normal">Top Pilgrimage</span> Sites of India
          </h2>
          <p className="text-black text-sm md:text-base mt-2">
            Discover the spiritual heart of India by exploring its top pilgrimage sites like never before
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group mb-14 px-2 md:px-6">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-[#4a2e18] w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer border border-amber-900/10 transition-all"
            aria-label="Scroll Left"
          >
            <BiChevronLeft size={28} />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {pilgrimageSites.map((site, index) => (
              <Link
                key={index}
                to={site.href}
                className="flex-none w-[270px] sm:w-[290px] md:w-[300px] group/card cursor-pointer"
              >
                <div className=" rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-900/10">
                  <div className="w-full h-[210px] overflow-hidden bg-gray-50 flex items-center justify-center p-3">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="w-full h-full object-contain object-center group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="py-4 px-3 text-center">
                    <h3 className="text-base md:text-lg font-bold text-[#4a2e18] tracking-wide">
                      {site.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-[#4a2e18] w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer border border-amber-900/10 transition-all"
            aria-label="Scroll Right"
          >
            <BiChevronRight size={28} />
          </button>
        </div>

        {/* Bottom Banner Section matching reference style */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#4a2311] text-white min-h-[160px] md:min-h-[170px] flex items-center">
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
                Kashi Vishwanath <span className="text-[#df972b]">&</span> Ayodhya
              </h3>
            </div>
            <Link
              to="/temples/kashi-ayodhya-tour"
              className="inline-flex items-center gap-2 bg-[#df972b] hover:bg-[#c27803] text-white font-semibold px-6 py-2.5 rounded-full text-sm md:text-base transition-all duration-300 shadow-md"
            >
              <span>Book Now!</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExplorePilgrimage;