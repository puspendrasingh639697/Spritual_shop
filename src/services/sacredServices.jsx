import React from "react";
import { Link } from "react-router-dom";

import tample6 from "../assets/TampleImage/tample6.png";
import pojakit2 from "../assets/pojakit_2.jpg";
import rudraksha8 from "../assets/Rudraksha8.webp";
import pojakit8 from "../assets/pojakit_8.jpg";
import coines from "../assets/TampleImage/coines.webp";
import idols5 from "../assets/Idols5.png";


const sacredServices = [
  {
    title: "Temple Darshan",
    description: "Experience divine blessings from renowned temples across India virtually.",
    image: tample6,
    path: "/temples",
    buttonText: "Explore Temples >"
  },
  {
    title: "E-Pooja",
    description: "Book sacred pujas performed in your name by expert priests with rituals.",
    image: pojakit2,
    path: "pooja-booking",
    buttonText: "Book E-Pooja >"
  },
  {
    title: "Book Pandit Ji",
    description: "Hire verified and knowledgeable pandits for all your auspicious ceremonies.",
    image: rudraksha8,
    path: "/pandit-booking",
    buttonText: "Book Pandit >"
  },
  {
    title: "Chadhawa",
    description: "Offer flowers, prasad, and sacred items at temples through trusted priests.",
    image: pojakit8,
    path: "/chadhawa",
    buttonText: "Book Chadhawa >"
  },
  {
    title: "Siddh Coins",
    description: "Bring home energized sacred coins for prosperity, wealth, and divine grace.",
    image: coines,
    path: "/siddh-coins",
    buttonText: "Explore Coins >"
  },
  {
    title: "E-Shop",
    description: "Discover authentic puja essentials, rudraksha, malas, yantras, and idols.",
    image: idols5,
    path: "/e-shop",
    buttonText: "Visit E-Shop >"
  },
 
];

function SacredServicesSection() {
  return (
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a1c1c] tracking-wide font-serif mb-3">
            Sacred Services
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Temple darshan, virtual and physical pujas, chadhawa, panchang and the divine e-shop — all in one place.
          </p>
          <div className="w-24 h-1 bg-[#df972b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#fff3df] rounded-xl overflow-hidden flex flex-col justify-end min-h-[380px] sm:min-h-[420px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a04] via-[#1a0a04]/70 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide group-hover:text-[#df972b] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-[#df972b] text-[#2a1408] hover:text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md"
                  >
                    <span>{service.buttonText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SacredServicesSection;