import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight, BiMapPin, BiStar } from "react-icons/bi";

const recentChadhavaData = [
    {
        id: 1,
        location: "Ujjain",
        title: "Maa Baglamukhi Dham Rituals",
        date: "Performed Today",
        image: "https://images.unsplash.com/photo-1609137144850-42940bc18c92?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        location: "Kolhapur",
        title: "Mahalakshmi Temple Chadhava",
        date: "Performed Yesterday",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        location: "Kashi",
        title: "Kashi Vishwanath Corridor Seva",
        date: "Performed Today",
        image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        location: "Ayodhya",
        title: "Shri Ram Janmabhoomi Chadhava",
        date: "Performed 2 days ago",
        image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        location: "Mathura",
        title: "Shri Krishna Janmabhoomi Seva",
        date: "Performed Today",
        image: "https://images.unsplash.com/photo-1614082242765-7c98cc0e8ec3?q=80&w=800&auto=format&fit=crop"
    }
];

function RecentChadhavaPhotos() {
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredData = selectedLocation === "All" 
        ? recentChadhavaData 
        : recentChadhavaData.filter(item => item.location === selectedLocation);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
    };

    const locations = ["All", "Ujjain", "Kolhapur", "Kashi", "Ayodhya", "Mathura"];

    return (
        <section className="w-full py-16 px-4 md:px-12   text-[#4a2e18]">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 bg-[#f4e4d0] border border-[#d4b08c] px-3 py-1 rounded-full text-xs font-bold text-[#8c0a15] mb-3 shadow-sm">
                            <BiStar /> Verified Temple Rituals
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#4a2e18]">
                            Recent Chadhava Photos
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-xl">
                            Every Puja follows Your (Yajman) Name and Gotra chant, Vedic mantra, bhog, Aarti as applicable. Real proofs straight from the sanctum.
                        </p>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => { setSelectedLocation(loc); setCurrentIndex(0); }}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                                    selectedLocation === loc 
                                        ? "bg-[#8c0a15] text-white shadow-md scale-105" 
                                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                                }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Interactive Slider Container */}
                <div className="relative px-2 md:px-12">
                    
                    {filteredData.length > 3 && (
                        <button 
                            onClick={handlePrev}
                            className="absolute -left-2 md:left-1 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#8c0a15] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-gray-200"
                        >
                            <BiChevronLeft className="text-2xl" />
                        </button>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
                        {filteredData.slice(currentIndex, currentIndex + 3).map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 relative group transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
                            >
                                <div className="relative h-72 md:h-80 w-full overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={`Chadhava in ${item.location}`} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#8c0a15] px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                                        <BiMapPin className="text-sm" />
                                        <span>{item.location}</span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <span className="text-[11px] font-semibold bg-[#8c0a15] px-2.5 py-0.5 rounded-md text-amber-100">
                                            {item.date}
                                        </span>
                                        <h3 className="text-base font-bold mt-1.5 leading-snug drop-shadow">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredData.length > 3 && (
                        <button 
                            onClick={handleNext}
                            className="absolute -right-2 md:right-1 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#8c0a15] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-gray-200"
                        >
                            <BiChevronRight className="text-2xl" />
                        </button>
                    )}

                </div>

            </div>
        </section>
    );
}

export default RecentChadhavaPhotos;