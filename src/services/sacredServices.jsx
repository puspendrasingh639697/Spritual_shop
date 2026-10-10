import React from "react";
import { Link } from "react-router-dom";

import pojakit2 from "../assets/pojakit_2.jpg";
import pojakit8 from "../assets/pojakit_8.jpg";
import coines from "../assets/TampleImage/coines.webp";
import idols5 from "../assets/Idols5.png";

const sacredServices = [
  {
    title: "E-Pooja",
    description: "Book sacred pujas performed in your name by expert priests with rituals.",
    image: pojakit2,
    path: "/pooja-booking",
    buttonText: "Book E-Pooja"
  },
  {
    title: "Chadhawa",
    description: "Offer flowers, prasad, and sacred items at temples through trusted priests.",
    image: pojakit8,
    path: "/chadhawa",
    buttonText: "Book Chadhawa"
  },
  {
    title: "Siddh Coins",
    description: "Bring home energized sacred coins for prosperity, wealth, and divine grace.",
    image: coines,
    path: "/siddh-coins",
    buttonText: "Explore Coins"
  },
  {
    title: "E-Shop",
    description: "Discover authentic puja essentials, rudraksha, malas, yantras, and idols.",
    image: idols5,
    path: "/e-shop",
    buttonText: "Visit E-Shop"
  },
];

function SacredServicesSection() {
  return (
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] md:px-10 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a1c1c] tracking-wide font-serif mb-3">
            Sacred Services
          </h2>
          <div className="w-24 h-1 bg-[#df972b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sacredServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#fff3df] rounded-md overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[390px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a04] via-[#1a0a04]/80 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full justify-between">
                <div></div> {/* Top spacer */}

                {/* Title & Description at the bottom area */}
                <div className="mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-wide group-hover:text-[#df972b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Full-width Button pushed to bottom */}
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
    </section>
  );
}

export default SacredServicesSection;