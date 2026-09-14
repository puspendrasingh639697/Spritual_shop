import React, { useState, useEffect } from "react";
import { BiMapPin, BiStar } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";

/* ================= IMAGE IMPORTS ================= */
import coins from "../../assets/TampleImage/coines.webp";
import tample18 from "../../assets/TampleImage/tample18.png";
import pojaKit2 from "../../assets/pojakit_2.jpg";

/* ================= DATA ================= */
const recentChadhavaData = [
    {
        id: 1,
        location: "Ujjain",
        title: "Maa Baglamukhi Dham Rituals",
        date: "Performed Today",
        image: coins,
    },
    {
        id: 2,
        location: "Kolhapur",
        title: "Mahalakshmi Temple Chadhava",
        date: "Performed Yesterday",
        image: tample18,
    },
    {
        id: 3,
        location: "Kashi",
        title: "Kashi Vishwanath Corridor Seva",
        date: "Performed Today",
        image: pojaKit2,
    },
    {
        id: 4,
        location: "Ayodhya",
        title: "Shri Ram Janmabhoomi Chadhava",
        date: "Performed 2 days ago",
        image: coins,
    },
    {
        id: 5,
        location: "Mathura",
        title: "Shri Krishna Janmabhoomi Seva",
        date: "Performed Today",
        image: tample18,
    },
    {
        id: 6,
        location: "Ujjain",
        title: "Mahakaleshwar Bhasma Aarti",
        date: "Performed Today",
        image: pojaKit2,
    },
];

/* ================= MAIN COMPONENT ================= */
function RecentChadhavaPhotos() {
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Filter by location
    const filteredData =
        selectedLocation === "All"
            ? recentChadhavaData
            : recentChadhavaData.filter((item) => item.location === selectedLocation);

    // ✅ Auto-slide every 3.5 seconds
    useEffect(() => {
        if (filteredData.length <= 3) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = filteredData.length - 3;
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 3500);

        return () => clearInterval(timer);
    }, [filteredData.length]);

    // ✅ Reset on location change
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedLocation]);

    const locations = ["All", "Ujjain", "Kolhapur", "Kashi", "Ayodhya", "Mathura"];

    // ✅ Get visible cards
    const visibleCards = filteredData.slice(currentIndex, currentIndex + 3);

    // ✅ If fewer than 3 (end of loop), add from beginning
    const displayCards = [...visibleCards];
    while (displayCards.length < 3 && filteredData.length > 0) {
        const remaining = 3 - displayCards.length;
        displayCards.push(...filteredData.slice(0, remaining));
    }

    return (
        <section className="w-full py-6 md:py-10 px-0 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ================= SECTION HEADER ================= */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#df972b] to-[#c27803] px-3 py-1 rounded-md text-[11px] font-bold text-white mb-3 shadow-md">
                            <BiStar className="text-sm" />
                            Verified Temple Rituals
                        </div>

                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
                            Recent Chadhava Photos
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mb-3"></div>

                        <p className="text-xs md:text-sm text-black mt-1 max-w-xl leading-relaxed">
                            Every Puja follows Your (Yajman) Name and Gotra
                            chant, Vedic mantra, bhog, Aarti as applicable.
                            Real proofs straight from the sanctum.
                        </p>
                    </div>

                    {/* Location Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-4 py-2 rounded-md text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
                                    selectedLocation === loc
                                        ? " bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md scale-105"
                                        : " bg-gradient-to-r from-[#df972b] to-[#c27803] text-white hover:border-black hover:text-black"
                                }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= CARDS GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayCards.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 hover:border-[#df972b] transition-all duration-500 group hover:-translate-y-2 relative"
                        >
                            {/* Image */}
                            <div className="relative h-72 md:h-80 w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={`Chadhava in ${item.location}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                                {/* Location Badge — Top Right */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#7a1c1c] px-3 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 shadow-md">
                                    <BiMapPin className="text-[#c27803] text-sm" />
                                    <span>{item.location}</span>
                                </div>

                                {/* Camera Icon — Top Left */}
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md">
                                    <FaCamera className="text-white text-xs" />
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-[10px] font-bold px-2.5 py-1 rounded-md text-white shadow-sm">
                                        {item.date}
                                    </span>
                                    <h3 className="text-base font-bold mt-2 leading-snug drop-shadow-md line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= AUTO-SLIDE INDICATORS ================= */}
                {filteredData.length > 3 && (
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {Array.from({
                            length: Math.max(1, filteredData.length - 2),
                        }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`rounded-full transition-all duration-300 cursor-pointer ${
                                    currentIndex === i
                                        ? "w-8 h-2 bg-gradient-to-r from-[#df972b] to-[#c27803]"
                                        : "w-2 h-2 bg-amber-300 hover:bg-[#df972b]"
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* ================= STATS FOOTER ================= */}
                <div className="mt-0 text-center">
                   
                </div>
            </div>
        </section>
    );
}

export default RecentChadhavaPhotos;