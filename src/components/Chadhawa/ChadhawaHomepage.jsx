import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight, BiCalendar, BiMapPin } from "react-icons/bi";

const popularChadhavas = [
    {
        id: 1,
        title: "Baglamukhi Sankat-Naashak Mirchi Havan",
        subtitle: "Complete freedom from crises, fear, and opponents",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 September 2026",
        image: "https://images.unsplash.com/photo-1609137144850-42940bc18c92?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/baglamukhi-sankat-naashak-mirchi-havan"
    },
    {
        id: 2,
        title: "Shiv-Parvati Prem Prapti Chadhava",
        subtitle: "An opportunity to attain love, prosperity, and marital bliss",
        temple: "Triyugi Narayan Teerth, Rudraprayag",
        date: "Fri, 4 September 2026",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/shiv-parvati-prem-prapti-chadhava"
    },
    {
        id: 3,
        title: "Shri Khatu Shyam Chadhava",
        subtitle: "Success in Business and Career",
        temple: "Khatu Shyam Temple, Sikar",
        date: "Sun, 6 September 2026",
        image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/shri-khatu-shyam-chadhava"
    }
];

function PopularChadhavaSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? popularChadhavas.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === popularChadhavas.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-b from-[#f99d1c] to-[#f47c12] relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-12 md:w-24 bg-white/60"></div>
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wider text-white uppercase text-center drop-shadow-sm">
                        MOST POPULAR CHADJAVA
                    </h2>
                    <div className="h-[1px] w-12 md:w-24 bg-white/60"></div>
                </div>

                {/* Slider Container with Navigation Arrows */}
                <div className="relative px-2 md:px-10">
                    
                    {/* Left Arrow */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-2.5 rounded-full shadow-lg transition-transform hover:scale-105 hidden md:flex items-center justify-center cursor-pointer"
                    >
                        <BiChevronLeft className="text-2xl" />
                    </button>

                    {/* Cards Grid / Carousel */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {popularChadhavas.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border border-white/40 transition-all duration-300 hover:shadow-3xl"
                            >
                                <div>
                                    {/* Card Image with Top Overlay Content */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-white text-center">
                                            <h3 className="text-base md:text-lg font-bold leading-snug drop-shadow">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-gray-200 mt-1 line-clamp-1 opacity-90">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Details */}
                                    <div className="p-4 space-y-2 text-center">
                                        <h4 className="text-sm font-bold text-gray-900 truncate">
                                            {item.title}
                                        </h4>
                                        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 font-medium">
                                            <BiCalendar className="text-purple-700 text-sm shrink-0" />
                                            <span>{item.date}</span>
                                            <span>·</span>
                                            <span className="truncate max-w-[160px]">{item.temple}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="p-4 pt-0">
                                    <Link 
                                        to={item.link}
                                        className="block w-full bg-[#751185] hover:bg-[#5e0c6a] text-white font-bold py-3 px-4 rounded-xl text-center text-sm shadow-md transition-colors duration-200"
                                    >
                                        Offer Chadhawa
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button 
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-2.5 rounded-full shadow-lg transition-transform hover:scale-105 hidden md:flex items-center justify-center cursor-pointer"
                    >
                        <BiChevronRight className="text-2xl" />
                    </button>

                </div>

            </div>
        </section>
    );
}

export default PopularChadhavaSection;