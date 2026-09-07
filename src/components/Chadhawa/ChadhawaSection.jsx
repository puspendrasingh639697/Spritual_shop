import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaGift } from "react-icons/fa";

import coines from "../../assets/TampleImage/coines.webp";
import shapeBg from "../../assets/h2_testimonial_shape.png";
import image1 from "../../assets/image1.jpg";
import neevMuhurat from "../../assets/Neev_Ka_Muhurat_500x500_1abc7bf7-c3f2-4ca6-99d0-16718058148e.jpg";
import tample17 from "../../assets/TampleImage/tample17.png";

const chadhawaList = [
  {
    id: 1,
    title: "Divine Prasad & Chunri Chadhawa",
    description: "Offer sacred Prasad, flowers, and holy Chunri at renowned temples",
    location: "Kashi Vishwanath Temple, Varanasi",
    badge: "Most Offered",
    image: image1,
    path: "/chadhawa"
  },
  {
    id: 2,
    title: "Siddh Energized Coins & Bhog",
    description: "Bring home prosperity with blessed coins and special temple bhog",
    location: "Mahakaleshwar Temple, Ujjain",
    badge: "Special Offering",
    image: coines,
    path: "/chadhawa"
  },
  {
    id: 3,
    title: "Neev Ka Muhurat & Foundation Rituals",
    description: "Special sacred offerings and prayers for your new beginnings",
    location: "Holy Shrines across India",
    badge: "Auspicious",
    image: neevMuhurat,
    path: "/chadhawa"
  },
  {
    id: 4,
    title: "Grand Temple Flower Decoration & Chadha",
    description: "Dedicate fresh flower garlands and vastra to the deity",
    location: "Tirupati Balaji Temple",
    badge: "Divine Grace",
    image: tample17,
    path: "/chadhawa"
  }
];

function ChadhawaSection() {
  return (
    <section className="w-full bg-[#fff3df] py-8 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Shape Image & Ambient Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${shapeBg})` }}></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#df972b]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#8b3a2b]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-600 border border-[#df972b]/30 px-3.5 py-1 rounded-md text-black text-xs  tracking-wider uppercase mb-3">
              <FaGift className="text-xs" /> Sacred Offerings
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl  text-white  tracking-tight">
              Divine Chadhawa
            </h2>
          </div>

          <Link
            to="/chadhawa"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-3 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/20 hover:scale-105"
          >
            <span>View All Chadhawa</span>
            <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chadhawaList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-[#1c0f0a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-56 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>

                {/* Floating Badge */}
                <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-white  sm:text-lg line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Location & Action Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-medium">
                    <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>

                  <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-white group-hover:to-white text-[#120704] py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                    <span>Offer Chadhawa</span>
                    <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ChadhawaSection;