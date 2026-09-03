import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiFilter, BiChevronDown, BiTimeFive } from "react-icons/bi";

const allChadhavasData = [
    {
        id: 1,
        title: "Baglamukhi Lakshmi Chadhava",
        subtitle: "For the destruction of enemies and the attainment of wealth",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 Sept 2026",
        timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
        image: "https://images.unsplash.com/photo-1609137144850-42940bc18c92?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/baglamukhi-lakshmi-chadhava",
        booked: "31,414 people already booked",
        isSpecial: true
    },
    {
        id: 2,
        title: "Sheetla Saptami Vishesh: Maa Sheetla Santan Sampoorna Raksha Chadhava",
        subtitle: "For the long life of your child, protection from evil eyes and unseen obstacles.",
        temple: "Siddhapeeth Sheetla Mata Mandir, Haldwani",
        date: "Thu, 3 Sept 2026",
        timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/maa-sheetla-santan-sampoorna-raksha-chadhava",
        booked: "28,756 people already booked",
        isSpecial: false
    },
    {
        id: 3,
        title: "Maa Baglamukhi Special Chadhava",
        subtitle: "Destruction of enemies and protection from evil eye",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 Sept 2026",
        timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
        image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/maa-baglamukhi-special-chadhava",
        booked: "19,234 people already booked",
        isSpecial: false
    },
    {
        id: 4,
        title: "Baglamukhi Sankat-Naashak Mirchi Havan",
        subtitle: "Complete freedom from crises, fear, and opponents",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 Sept 2026",
        timeLeft: "0 Days : 2 Hrs : 37 Min : 1 Sec",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/baglamukhi-sankat-naashak-mirchi-havan",
        booked: "31,998 people already booked",
        isSpecial: true
    },
    {
        id: 5,
        title: "Shiv Baglamukhi Chadhava",
        subtitle: "For victory over enemies & end of challenges",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 Sept 2026",
        timeLeft: "0 Days : 2 Hrs : 37 Min : 1 Sec",
        image: "https://images.unsplash.com/photo-1533661734498-d4308d90a66b?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/shiv-baglamukhi-chadhava",
        booked: "22,543 people already booked",
        isSpecial: false
    },
    {
        id: 6,
        title: "Maa Durga Vishesh Chadhava",
        subtitle: "For protection, courage and removal of obstacles",
        temple: "Maa Durga Mandir, Varanasi",
        date: "Fri, 4 Sept 2026",
        timeLeft: "1 Days : 5 Hrs : 20 Min : 15 Sec",
        image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/maa-durga-vishesh-chadhava",
        booked: "15,678 people already booked",
        isSpecial: false
    },
    {
        id: 7,
        title: "Hanuman Sankat Mochan Chadhava",
        subtitle: "For strength, courage and protection from evil forces",
        temple: "Hanuman Mandir, Ayodhya",
        date: "Sat, 5 Sept 2026",
        timeLeft: "2 Days : 8 Hrs : 45 Min : 20 Sec",
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/hanuman-sankat-mochan-chadhava",
        booked: "25,891 people already booked",
        isSpecial: true
    },
    {
        id: 8,
        title: "Maa Kali Raksha Kavach Chadhava",
        subtitle: "For ultimate protection and removal of negative energies",
        temple: "Maa Kali Mandir, Kolkata",
        date: "Sun, 6 Sept 2026",
        timeLeft: "3 Days : 2 Hrs : 30 Min : 10 Sec",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=600&auto=format&fit=crop",
        link: "/chadhawa-details/maa-kali-raksha-kavach-chadhava",
        booked: "18,432 people already booked",
        isSpecial: false
    }
];

function AllChadhavasSection() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="w-full py-12 px-4 md:px-12 bg-[#fcf8f2] text-[#4a2e18]">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
                    All Chadhavas
                </h2>

                {/* Search & Filters Bar */}
                <div className="flex flex-col lg:flex-row gap-3 items-center justify-between mb-8">
                    {/* Search Input */}
                    <div className="relative w-full lg:w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400 text-lg">
                            <BiSearch />
                        </span>
                        <input 
                            type="text"
                            placeholder="Search Chadhava, Temple, God Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#8c0a15] shadow-sm"
                        />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
                        <button className="flex items-center gap-1.5 bg-[#8c0a15] border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-xl text-xs  shadow-sm">
                            <BiFilter className="text-sm text-white" /> <span className="text-white">Filters</span>
                        </button>
                        <button className="flex items-center gap-1 bg-[#8c0a15] border border-gray-300 hover:border-gray-400 px-3.5 py-2 rounded-xl text-xs shadow-sm">
                            <span className="text-white">Deity</span> <BiChevronDown className="text-white" />
                        </button>
                        <button className="flex items-center gap-1 bg-[#8c0a15]  border border-gray-300 hover:border-gray-400 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm">
                            <span  className="text-white">Location</span> <BiChevronDown  className="text-white"/>
                        </button>
                        <button className="flex items-center gap-1 bg-white border border-gray-300 hover:border-gray-400 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm">
                            <span>Temple</span> <BiChevronDown />
                        </button>
                        <button className="flex items-center gap-1 bg-white border border-gray-300 hover:border-gray-400 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm">
                            <span>Theme</span> <BiChevronDown />
                        </button>
                    </div>
                </div>

                {/* Grid Cards - 8 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allChadhavasData.map((item) => (
                        <Link 
                            to={item.link} 
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Card Top Image with overlay */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end text-white text-center">
                                        <h3 className="text-sm md:text-base font-bold leading-snug drop-shadow line-clamp-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                    {/* Special Badge */}
                                    {item.isSpecial && (
                                        <div className="absolute top-3 right-3 bg-[#8c0a15] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                                            SPECIAL
                                        </div>
                                    )}
                                </div>

                                {/* Date and Countdown Bar */}
                                <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-600">
                                    <span>{item.date}</span>
                                    <span className="flex items-center gap-1 text-[#8c0a15]">
                                        <BiTimeFive /> {item.timeLeft}
                                    </span>
                                </div>

                                {/* Card Body Text */}
                                <div className="p-4 space-y-2 bg-[#fff3df]">
                                    <p className="text-xs text-gray-600 line-clamp-2 min-h-[32px]">
                                        {item.subtitle}
                                    </p>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#8c0a15] transition-colors line-clamp-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 truncate">
                                        {item.temple}
                                    </p>
                                    {/* Booked count */}
                                    <div className="pt-2 border-t border-gray-200/60">
                                        <p className="text-[10px] font-semibold text-[#8c0a15]">
                                            {item.booked}
                                        </p>
                                    </div>
                                    {/* Offer Button */}
                                    <div className="mt-2">
                                        <button className="w-full bg-[#8c0a15] hover:bg-[#6d0811] text-white text-xs font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                                            Offer Chadhava
                                        </button>
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

export default AllChadhavasSection;