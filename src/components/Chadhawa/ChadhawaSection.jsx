



// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HiArrowRight } from "react-icons/hi";
// import { FaMapMarkerAlt, FaGift } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// function ChadhawaSection() {
//   // ⭐ Store se data
//   const {
//     chadhavas = [],
//     loading = false,
//     error = null,
//     fetchChadhavas,
//   } = useChadhavaStore();

//   // ⭐ Fetch — sirf 3 cards
//   useEffect(() => {
//     if (typeof fetchChadhavas === "function") {
//       fetchChadhavas({ limit: 3 });
//     }
//   }, [fetchChadhavas]);

//   return (
//     <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-8 px-4 md:px-10 relative overflow-hidden">
//       {/* Ambient Glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#df972b]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#8b3a2b]/20 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-end justify-center mb-12 gap-4 border-b border-white/10 pb-6">
//           <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#7a1c1c] tracking-tight font-extrabold relative inline-block pb-3">
//               Divine Chadhawa
//               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
//             </h2>
//             <p className="text-black text-sm md:text-base tracking-wide">
//               Offer sacred items directly at holy shrines for divine grace and prosperity.
//             </p>
//           </div>

//           <Link
//             to="/chadhawa"
//             className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/20 hover:scale-105"
//           >
//             <span>View All</span>
//             <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
//           </Link>
//         </div>

//         {/* Content States */}
//         {loading ? (
//           <div className="text-center py-10 text-amber-800 font-semibold text-lg">
//             Loading chadhawas...
//           </div>
//         ) : error ? (
//           <div className="text-center py-10 text-red-600 font-semibold text-lg">
//             ⚠️ Error: {error}
//           </div>
//         ) : chadhavas.length === 0 ? (
//           <div className="text-center py-10 text-gray-600 font-semibold text-lg">
//             No Chadhawa available at the moment.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {chadhavas.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/chadhawa/${item._id}`}
//                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-white/10 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
//               >
//                 {/* Image */}
//                 <div className="relative w-full h-56 overflow-hidden bg-black">
//                   <img
//                     src={
//                       item.image && item.image.trim() !== ""
//                         ? item.image
//                         : "https://via.placeholder.com/400x300?text=Chadhawa"
//                     }
//                     alt={item.name || "Chadhawa"}
//                     className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://via.placeholder.com/400x300?text=Chadhawa";
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>

//                   {/* Type Badge */}
//                   <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
//                     {item.chadhavaType?.replace("_", " ") || "Chadhawa"}
//                   </span>

//                   {/* Deity Badge */}
//                   {item.deity && (
//                     <span className="absolute top-3 right-3 bg-white/95 text-[#7a1c1c] text-[10px] font-bold px-2 py-1 rounded-md shadow-md capitalize">
//                       {item.deity}
//                     </span>
//                   )}
//                 </div>

//                 {/* Body */}
//                 <div className="p-5 flex flex-col justify-between flex-grow">
//                   <div>
//                     <h3 className="text-black text-base sm:text-lg font-bold line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
//                       {item.name}
//                     </h3>
//                     <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
//                       {item.description || item.shortDescription}
//                     </p>
//                   </div>

//                   {/* Location + Price + CTA */}
//                   <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1.5 text-black text-[11px] font-medium">
//                         <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
//                         <span className="line-clamp-1">
//                           {item.templeName}
//                           {item.location?.city && `, ${item.location.city}`}
//                         </span>
//                       </div>
//                       <span className="font-bold text-[#7a1c1c] text-sm">
//                         ₹{item.pricing?.single || item.price}
//                       </span>
//                     </div>

//                     <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-white group-hover:to-white text-[#120704] py-2.5 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
//                       <span>Offer Chadhawa</span>
//                       <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default ChadhawaSection;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaGift } from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

function ChadhawaSection() {
  // ⭐ Store se data
  const {
    chadhavas = [],
    loading = false,
    error = null,
    fetchChadhavas,
  } = useChadhavaStore();

  // ⭐ Fetch — sirf 3 cards
  useEffect(() => {
    if (typeof fetchChadhavas === "function") {
      fetchChadhavas({ limit: 3 });
    }
  }, [fetchChadhavas]);

  return (
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-8 px-4 md:px-10 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7b1e2b]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#7b1e2b]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-center mb-12 gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#7b1e2b] tracking-tight font-extrabold relative inline-block pb-3">
              Divine Chadhawa
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#7b1e2b] rounded-full"></span>
            </h2>
            <p className="text-black text-sm md:text-base tracking-wide">
              Offer sacred items directly at holy shrines for divine grace and prosperity.
            </p>
          </div>

          <Link
            to="/chadhawa"
            className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] hover:from-[#5a1420] hover:to-[#7b1e2b] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-[#7b1e2b]/20 hover:scale-105"
          >
            <span>View All</span>
            <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Content States */}
        {loading ? (
          <div className="text-center py-10 text-[#7b1e2b] font-semibold text-lg">
            Loading chadhawas...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-600 font-semibold text-lg">
            ⚠️ Error: {error}
          </div>
        ) : chadhavas.length === 0 ? (
          <div className="text-center py-10 text-gray-600 font-semibold text-lg">
            No Chadhawa available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chadhavas.map((item) => (
              <Link
                key={item._id}
                to={`/chadhawa/${item._id}`}
                className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-white/10 hover:border-[#7b1e2b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden bg-black">
                  <img
                    src={
                      item.image && item.image.trim() !== ""
                        ? item.image
                        : "https://via.placeholder.com/400x300?text=Chadhawa"
                    }
                    alt={item.name || "Chadhawa"}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Chadhawa";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>

                  {/* Type Badge */}
                  <span className="absolute top-3 left-3 bg-[#7b1e2b] text-white text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                    {item.chadhavaType?.replace("_", " ") || "Chadhawa"}
                  </span>

                  {/* Deity Badge */}
                  {item.deity && (
                    <span className="absolute top-3 right-3 bg-white/95 text-[#7b1e2b] text-[10px] font-bold px-2 py-1 rounded-md shadow-md capitalize">
                      {item.deity}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-black text-base sm:text-lg font-bold line-clamp-2 leading-snug group-hover:text-[#7b1e2b] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {item.description || item.shortDescription}
                    </p>
                  </div>

                  {/* Location + Price + CTA */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-black text-[11px] font-medium">
                        <FaMapMarkerAlt className="text-[#7b1e2b] shrink-0 text-xs" />
                        <span className="line-clamp-1">
                          {item.templeName}
                          {item.location?.city && `, ${item.location.city}`}
                        </span>
                      </div>
                      <span className="font-bold text-[#7b1e2b] text-sm">
                        ₹{item.pricing?.single || item.price}
                      </span>
                    </div>

                    <div className="w-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] group-hover:from-white group-hover:to-white text-white group-hover:text-[#7b1e2b] py-2.5 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                      <span>Offer Chadhawa</span>
                      <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ChadhawaSection;