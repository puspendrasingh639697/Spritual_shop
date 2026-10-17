// import React, { useState, useEffect, useMemo } from "react";
// import { BiMapPin, BiStar } from "react-icons/bi";
// import { FaCamera } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// /* ================= HELPER: Relative Date ================= */
// function formatRelativeDate(dateStr) {
//   if (!dateStr) return "Recently";

//   const date = new Date(dateStr);
//   if (isNaN(date.getTime())) return "Recently";

//   const now = new Date();
//   const diffMs = now - date;
//   const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

//   if (diffDays <= 0) return "Performed Today";
//   if (diffDays === 1) return "Performed Yesterday";
//   if (diffDays < 7) return `Performed ${diffDays} days ago`;
//   if (diffDays < 30) return `Performed ${Math.floor(diffDays / 7)} weeks ago`;
//   return date.toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// /* ================= MAIN COMPONENT ================= */
// function RecentChadhavaPhotos() {
//   const [selectedLocation, setSelectedLocation] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ⭐ Store se data
//   const {
//     chadhavas = [],
//     loading = false,
//     error = null,
//     fetchChadhavas,
//   } = useChadhavaStore();

//   // ⭐ Fetch — recent 12 chadhavas (latest first)
//   useEffect(() => {
//     if (typeof fetchChadhavas === "function") {
//       fetchChadhavas({ limit: 12, page: 1, sortBy: "createdAt", order: "desc" });
//     }
//   }, [fetchChadhavas]);

//   // ⭐ API data ko "recent photo" format mein convert karo
//   const recentData = useMemo(() => {
//     if (!Array.isArray(chadhavas)) return [];

//     return chadhavas
//       .filter((item) => item && item.image)
//       .map((item) => ({
//         id: item._id,
//         location:
//           item.location?.city ||
//           item.templeLocation ||
//           item.templeName?.split(",").pop()?.trim() ||
//           "India",
//         title: item.name || "Chadhava",
//         date: formatRelativeDate(item.createdAt || item.updatedAt),
//         image: item.image,
//       }));
//   }, [chadhavas]);

//   // ⭐ Dynamic location pills
//   const locations = useMemo(() => {
//     const unique = Array.from(new Set(recentData.map((item) => item.location)));
//     return ["All", ...unique];
//   }, [recentData]);

//   // ✅ Filter by location
//   const filteredData =
//     selectedLocation === "All"
//       ? recentData
//       : recentData.filter((item) => item.location === selectedLocation);

//   // ✅ Auto-slide
//   useEffect(() => {
//     if (filteredData.length <= 3) return;

//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const maxIndex = filteredData.length - 3;
//         return prev >= maxIndex ? 0 : prev + 1;
//       });
//     }, 3500);

//     return () => clearInterval(timer);
//   }, [filteredData.length]);

//   // ✅ Reset on location change
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [selectedLocation]);

//   // ✅ Visible cards
//   const visibleCards = filteredData.slice(currentIndex, currentIndex + 3);
//   const displayCards = [...visibleCards];
//   while (displayCards.length < 3 && filteredData.length > 0) {
//     const remaining = 3 - displayCards.length;
//     displayCards.push(...filteredData.slice(0, remaining));
//   }

//   return (
//     <section className="w-full py-6 md:py-10 px-0 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
//       {/* Ambient Glow */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* ================= HEADER ================= */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-4 md:px-0">
//           <div>
//             <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#df972b] to-[#c27803] px-3 py-1 rounded-md text-[11px] font-bold text-white mb-3 shadow-md">
//               <BiStar className="text-sm" />
//               Verified Temple Rituals
//             </div>

//             <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
//               Recent Chadhava Photos
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mb-3"></div>

//             <p className="text-xs md:text-sm text-black mt-1 max-w-xl leading-relaxed">
//               Every Puja follows Your (Yajman) Name and Gotra chant, Vedic
//               mantra, bhog, Aarti as applicable. Real proofs straight from the
//               sanctum.
//             </p>
//           </div>

//           {/* Location Pills */}
//           {locations.length > 1 && (
//             <div className="flex flex-wrap gap-2">
//               {locations.map((loc) => (
//                 <button
//                   key={loc}
//                   onClick={() => setSelectedLocation(loc)}
//                   className={`px-4 py-2 rounded-md text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
//                     selectedLocation === loc
//                       ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md scale-105"
//                       : "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white hover:border-black hover:text-black"
//                   }`}
//                 >
//                   {loc}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ================= LOADING / ERROR / EMPTY ================= */}
//         {loading ? (
//           <div className="text-center py-16">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
//             <p className="mt-3 text-[#7a1c1c] font-semibold">
//               Loading recent photos...
//             </p>
//           </div>
//         ) : error ? (
//           <div className="text-center py-16 text-red-600 font-semibold">
//             ⚠️ Error: {error}
//           </div>
//         ) : displayCards.length === 0 ? (
//           <div className="text-center py-16 text-gray-500 font-semibold">
//             No recent chadhava photos available
//           </div>
//         ) : (
//           <>
//             {/* ================= CARDS GRID ================= */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
//               {displayCards.map((item, index) => (
//                 <div
//                   key={`${item.id}-${index}`}
//                   className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 hover:border-[#df972b] transition-all duration-500 group hover:-translate-y-2 relative"
//                 >
//                   <div className="relative h-72 md:h-80 w-full overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={`Chadhava in ${item.location}`}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x300?text=Chadhawa";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

//                     {/* Location Badge */}
//                     <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#7a1c1c] px-3 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 shadow-md">
//                       <BiMapPin className="text-[#c27803] text-sm" />
//                       <span>{item.location}</span>
//                     </div>

//                     {/* Camera Icon */}
//                     <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md">
//                       <FaCamera className="text-white text-xs" />
//                     </div>

//                     {/* Bottom Content */}
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <span className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-[10px] font-bold px-2.5 py-1 rounded-md text-white shadow-sm">
//                         {item.date}
//                       </span>
//                       <h3 className="text-base font-bold mt-2 leading-snug drop-shadow-md line-clamp-2">
//                         {item.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ================= SLIDE INDICATORS ================= */}
//             {filteredData.length > 3 && (
//               <div className="flex items-center justify-center gap-2 mt-6">
//                 {Array.from({
//                   length: Math.max(1, filteredData.length - 2),
//                 }).map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentIndex(i)}
//                     className={`rounded-full transition-all duration-300 cursor-pointer ${
//                       currentIndex === i
//                         ? "w-8 h-2 bg-gradient-to-r from-[#df972b] to-[#c27803]"
//                         : "w-2 h-2 bg-amber-300 hover:bg-[#df972b]"
//                     }`}
//                     aria-label={`Go to slide ${i + 1}`}
//                   />
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

// export default RecentChadhavaPhotos;


import React, { useEffect, useMemo } from "react";
import { BiMapPin, BiStar } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

/* ================= HELPER: Relative Date ================= */
function formatRelativeDate(dateStr) {
  if (!dateStr) return "Recently";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Recently";

  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Performed Today";
  if (diffDays === 1) return "Performed Yesterday";
  if (diffDays < 7) return `Performed ${diffDays} days ago`;
  if (diffDays < 30) return `Performed ${Math.floor(diffDays / 7)} weeks ago`;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ================= MAIN COMPONENT ================= */
function RecentChadhavaPhotos() {
  // ⭐ Store se data
  const {
    chadhavas = [],
    loading = false,
    error = null,
    fetchChadhavas,
  } = useChadhavaStore();

  // ⭐ Fetch — recent 12 chadhavas (latest first)
  useEffect(() => {
    if (typeof fetchChadhavas === "function") {
      fetchChadhavas({ limit: 12, page: 1, sortBy: "createdAt", order: "desc" });
    }
  }, [fetchChadhavas]);

  // ⭐ API data ko "recent photo" format mein convert karo
  const recentData = useMemo(() => {
    if (!Array.isArray(chadhavas)) return [];

    return chadhavas
      .filter((item) => item && item.image)
      .map((item) => ({
        id: item._id,
        location:
          item.location?.city ||
          item.templeLocation ||
          item.templeName?.split(",").pop()?.trim() ||
          "India",
        title: item.name || "Chadhava",
        date: formatRelativeDate(item.createdAt || item.updatedAt),
        image: item.image,
      }));
  }, [chadhavas]);

  // ✅ Show only top 6 items (2 rows of 3) for clean UI
  const displayCards = recentData.slice(0, 6);

  return (
    <section className="w-full py-10 md:py-14 px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER (Centered) ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12">
          
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] px-3 py-1.5 rounded-md text-[10px] md:text-[11px] font-bold text-white mb-4 shadow-sm uppercase tracking-wider">
            <BiStar className="text-sm" />
            Verified Temple Rituals
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#7b1e2b] mb-3">
            Recent Chadhava Photos
          </h2>
          
          <div className="w-20 h-1 bg-[#7b1e2b] rounded-full mb-4"></div>

          <p className="text-xs sm:text-sm text-black/70 max-w-2xl mx-auto leading-relaxed px-2">
            Every Puja follows Your (Yajman) Name and Gotra chant, Vedic
            mantra, bhog, Aarti as applicable. Real proofs straight from the
            sanctum.
          </p>
        </div>

        {/* ================= LOADING / ERROR / EMPTY ================= */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-semibold">
              Loading recent photos...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600 font-semibold">
            ⚠️ Error: {error}
          </div>
        ) : displayCards.length === 0 ? (
          <div className="text-center py-16 text-gray-500 font-semibold">
            No recent chadhava photos available
          </div>
        ) : (
          /* ================= CARDS GRID ================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {displayCards.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-500 group hover:-translate-y-1 relative"
              >
                <div className="relative h-[260px] sm:h-[280px] md:h-[320px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Chadhava in ${item.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Chadhawa";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Location Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm text-[#7b1e2b] px-2.5 md:px-3 py-1 md:py-1.5 rounded-md text-[10px] md:text-[11px] font-bold flex items-center gap-1 shadow-sm">
                    <BiMapPin className="text-[#7b1e2b] text-xs md:text-sm" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>

                  {/* Camera Icon */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#7b1e2b] flex items-center justify-center shadow-md">
                    <FaCamera className="text-white text-[10px] md:text-xs" />
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 text-white">
                    <span className="inline-block bg-[#7b1e2b] text-[9px] md:text-[10px] font-bold px-2 md:px-2.5 py-1 rounded-md text-white shadow-sm">
                      {item.date}
                    </span>
                    <h3 className="text-sm md:text-base lg:text-lg font-bold mt-1.5 md:mt-2 leading-snug drop-shadow-md line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentChadhavaPhotos;