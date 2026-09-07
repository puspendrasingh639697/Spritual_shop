import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

import pojakit2 from "../../assets/pojakit_2.jpg";
import pojakit8 from "../../assets/pojakit_8.jpg";
import pujaSamagri from "../../assets/Puja _Samagri.png";
import pujaSamagri1 from "../../assets/Puja_Samagri1.png";

const recommendedPujaList = [
    {
        id: 1,
        title: "Prem Prapti Aur Sarv Vashikaran Mahatantrik Bhairav Puja",
        description: "For one-sided love, reunion & second chances in love",
        location: "Vikrant Bhairav Mandir, Ujjain",
        badge: "Most Popular",
        image: pojakit2,
        path: "/pooja-booking"
    },
   
    {
        id: 3,
        title: "Tribhairav Shatru Vinash Raksha Kavach Mahapujan",
        description: "Complete destruction of every enemy, obstacle, and fear",
        location: "Vikrant Bhairav Mandir, Ujjain",
        badge: "Protection",
        image: pujaSamagri,
        path: "/pooja-booking"
    },
    {
        id: 4,
        title: "Sarva Rog Nivaran Maha Mrunjaya Puja",
        description: "For divine healing, good health, longevity and peace",
        location: "Mahakaleshwar Temple, Ujjain",
        badge: "Divine Healing",
        image: pujaSamagri1,
        path: "/pooja-booking"
    }
];

function RecommendedPujaSection() {
    return (
        <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-4 px-4 md:px-10 relative overflow-hidden">

            {/* Background Divine Ambient Glows */}

            <div className="max-w-8xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
                    <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight font-extrabold font-serif relative inline-block pb-3">
                            Recommended Puja
                            {/* Underline styling */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
                        </h2>
                        <p className="text-black text-sm md:text-base font-bold tracking-wide">
                            Book sacred rituals performed by expert Vedic pandits for divine blessings.
                        </p>

                    </div>

                    <Link
                        to="/pooja-booking"
                        className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-3 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/20 hover:scale-105"
                    >
                        <span>View All Pujas</span>
                        <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                </div>

                {/* 4 Cards Grid Layout (Pro Level UI) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendedPujaList.map((puja) => (
                        <Link
                            key={puja.id}
                            to={puja.path}
                            className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-yellow-400 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
                        >
                            {/* Card Image Banner */}
                            <div className="relative w-full h-56 overflow-hidden bg-black">
                                <img
                                    src={puja.image}
                                    alt={puja.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>

                                {/* Floating Badge */}
                                <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                                    {puja.badge}
                                </span>
                            </div>

                            {/* Card Body Content */}
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className=" font-bold text-black text-base sm:text-lg line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
                                        {puja.title}
                                    </h3>
                                    <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                                        {puja.description}
                                    </p>
                                </div>

                                {/* Location & Action Button */}
                                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                                    <div className="flex items-center gap-1.5 text-black text-[11px] font-medium">
                                        <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
                                        <span className="line-clamp-1">{puja.location}</span>
                                    </div>

                                    <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-white group-hover:to-white text-[#120704] py-2.5 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                                        <span>Book Puja Now</span>
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

export default RecommendedPujaSection;