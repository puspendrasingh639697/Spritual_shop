import React from "react";
import { Link } from "react-router-dom";

// Sacred Services images
import pojakit2 from "../assets/pojakit_2.jpg";
import pojakit8 from "../assets/pojakit_8.jpg";
import coines from "../assets/TampleImage/coines.webp";
import idols5 from "../assets/Idols5.png";

// Real Icons for Icon Strip
import templesIcon from "../assets/templespush.webp";
import onlinePujasIcon from "../assets/online-pujas2.png"; 
import chadhavaIcon from "../assets/chadhava.webp";
import shopIcon from "../assets/shop.webp";
// import kundliIcon from "../assets/kundli.webp";
import panchangIcon from "../assets/panchang.webp";
import libraryIcon from "../assets/library.webp";

/* ============================================================
   1️⃣ ICON STRIP DATA
   ============================================================ */
const iconServices = [
  { title: "Temples",       subtitle: "20,000+ Temples",         icon: templesIcon,     path: "/temples" },
  { title: "Online Pujas",  subtitle: "Authentic Vedic Pujas",   icon: onlinePujasIcon, path: "/pooja-booking" },
  { title: "Chadhava",      subtitle: "Offer with Devotion",     icon: chadhavaIcon,    path: "/chadhawa" },
  { title: "Store",         subtitle: "Sacred Puja Essentials",  icon: shopIcon,        path: "/e-shop" },
  // { title: "Kundli",        subtitle: "Explore Your Birth Chart", icon: kundliIcon,      path: "/kundli" },
  { title: "Panchang",      subtitle: "Daily Hindu Calendar",    icon: panchangIcon,    path: "/panchang" },
  { title: "Library",       subtitle: "Know & Grow in Faith",    icon: libraryIcon,     path: "/blogs" },
];

/* ============================================================
   2️⃣ SACRED SERVICES DATA
   ============================================================ */
const sacredServices = [
  {
    title: "E-Pooja",
    description: "Book sacred pujas performed in your name by expert priests with rituals.",
    image: pojakit2,
    path: "/pooja-booking",
    buttonText: "Book E-Pooja",
  },
  {
    title: "Chadhawa",
    description: "Offer flowers, prasad, and sacred items at temples through trusted priests.",
    image: pojakit8,
    path: "/chadhawa",
    buttonText: "Book Chadhawa",
  },
  {
    title: "Siddh Coins",
    description: "Bring home energized sacred coins for prosperity, wealth, and divine grace.",
    image: coines,
    path: "/siddh-coins",
    buttonText: "Explore Coins",
  },
  {
    title: "E-Shop",
    description: "Discover authentic puja essentials, rudraksha, malas, yantras, and idols.",
    image: idols5,
    path: "/e-shop",
    buttonText: "Visit E-Shop",
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
function SacredServicesSection() {
  return (
    <>
      {/* ============================================================
          🟠 ICON STRIP — WITH 2D WHITE SHADOW
          ============================================================ */}
      <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {iconServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group
                           flex flex-col items-center justify-center text-center
                           bg-white rounded-xl
                           border border-gray-100
                           shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                           px-3 py-5
                           h-[170px] md:h-[185px]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:shadow-[0_10px_25px_rgba(123,30,43,0.08)]
                           hover:border-rose-100"
              >
                {/* Icon — MEDIUM SIZE */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain
                             mb-2.5
                             group-hover:scale-110
                             transition-transform duration-300"
                />

                {/* Title */}
                <h3 className="text-gray-900 font-semibold text-[13px] md:text-[14px] leading-tight mb-1">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-500 text-[10.5px] md:text-[11px] leading-snug font-normal px-1">
                  {service.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          🟡 SACRED SERVICES (4 cards) — commented out
          ============================================================ */}
      {/* <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] md:px-10 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a1c1c] tracking-wide font-serif mb-3">
              Sacred Services
            </h2>
            <div className="w-24 h-1 bg-[#df972b] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sacredServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#fff3df] rounded-md overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[390px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a04] via-[#1a0a04]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full justify-between">
                  <div></div>

                  <div className="mt-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-wide group-hover:text-[#df972b] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <Link
                      to={service.path}
                      className="w-full mt-6 py-2.5 px-3 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-medium rounded-md shadow-sm transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
                    >
                      <span>{service.buttonText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default SacredServicesSection;