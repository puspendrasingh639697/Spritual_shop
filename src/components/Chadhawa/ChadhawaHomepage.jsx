


// // import React, { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { BiCalendar, BiMapPin } from "react-icons/bi";
// // import { FaStar } from "react-icons/fa";
// // import useChadhavaStore from "../../store/useChadhavaStore";

// // function PopularChadhavaSection() {
// //   // ⭐ Store se data
// //   const {
// //     chadhavas = [],
// //     loading = false,
// //     error = null,
// //     fetchChadhavas,
// //   } = useChadhavaStore();

// //   // ⭐ Fetch — 6 popular chadhawas
// //   useEffect(() => {
// //     if (typeof fetchChadhavas === "function") {
// //       fetchChadhavas({ limit: 6, sortBy: "bookingCount", order: "desc" });
// //     }
// //   }, [fetchChadhavas]);

// //   return (
// //     <section className="w-full py-6 md:py-6 px-2 md:px-8 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
// //       {/* Ambient glows */}
// //       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* HEADER */}
// //         <div className="text-center mb-10">
// //           <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
// //             Most Popular Chadhava
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto mb-3"></div>
// //         </div>

// //         {/* CONTENT */}
// //         {loading ? (
// //           <div className="text-center py-10">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
// //             <p className="mt-3 text-[#7a1c1c] font-semibold">
// //               Loading chadhawas...
// //             </p>
// //           </div>
// //         ) : error ? (
// //           <div className="text-center py-10 text-red-600 font-semibold">
// //             ⚠️ Error: {error}
// //           </div>
// //         ) : chadhavas.length === 0 ? (
// //           <div className="text-center py-10 text-gray-500 font-semibold">
// //             No Chadhawa available
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {chadhavas.map((item) => (
// //               <div
// //                 key={item._id}
// //                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
// //               >
// //                 <div>
// //                   {/* IMAGE */}
// //                   <div className="relative h-56 w-full overflow-hidden">
// //                     <img
// //                       src={
// //                         item.image && item.image.trim() !== ""
// //                           ? item.image
// //                           : "https://via.placeholder.com/400x300?text=Chadhawa"
// //                       }
// //                       alt={item.name}
// //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                       onError={(e) => {
// //                         e.target.src =
// //                           "https://via.placeholder.com/400x300?text=Chadhawa";
// //                       }}
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

// //                     {/* Rating */}
// //                     <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
// //                       <span className="text-xs font-bold text-[#7a1c1c]">
// //                         {item.rating || "4.8"}
// //                       </span>
// //                       <FaStar className="text-[#df972b] text-[10px]" />
// //                     </div>

// //                     {/* Price */}
// //                     <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
// //                       ₹{item.pricing?.single || item.price}
// //                     </div>

// //                     {/* Title */}
// //                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
// //                       <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow-md">
// //                         {item.name}
// //                       </h3>
// //                     </div>
// //                   </div>

// //                   {/* CONTENT */}
// //                   <div className="p-4 space-y-3">
// //                     <p className="text-xs text-black line-clamp-2 leading-relaxed">
// //                       {item.description || item.shortDescription}
// //                     </p>

// //                     <div className="flex items-center gap-2 text-[11px] text-black font-medium flex-wrap">
// //                       {/* Date */}
// //                       <div className="flex items-center gap-1">
// //                         <BiCalendar className="text-black text-xs" />
// //                         <span>
// //                           {new Date().toLocaleDateString("en-IN", {
// //                             weekday: "short",
// //                             day: "numeric",
// //                             month: "short",
// //                             year: "numeric",
// //                           })}
// //                         </span>
// //                       </div>

// //                       <span className="text-black">•</span>

// //                       {/* Temple */}
// //                       <div className="flex items-center gap-1 min-w-0">
// //                         <BiMapPin className="text-[#c27803] text-xs shrink-0" />
// //                         <span className="truncate max-w-[140px]">
// //                           {item.templeName}
// //                           {item.location?.city && `, ${item.location.city}`}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* BUTTON */}
// //                 <div className="p-4 pt-0">
// //                   <Link
// //                     to={`/chadhawa/${item._id}`}
// //                     className="block w-full bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-2 px-3 rounded-md text-center text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
// //                   >
// //                     Offer Chadhawa
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // export default PopularChadhavaSection;


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BiCalendar, BiMapPin } from "react-icons/bi";
// import { FaStar } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// function PopularChadhavaSection() {
//   // ⭐ Store se data
//   const {
//     chadhavas = [],
//     loading = false,
//     error = null,
//     fetchChadhavas,
//   } = useChadhavaStore();

//   // ⭐ Fetch — sirf 6 popular chadhawas
//   useEffect(() => {
//     if (typeof fetchChadhavas === "function") {
//       fetchChadhavas({ limit: 6, sortBy: "bookingCount", order: "desc" });
//     }
//   }, [fetchChadhavas]);

//   // ⭐ Safety: sirf 6 hi dikhao, chahe API zyada bheje
//   const topSix = Array.isArray(chadhavas) ? chadhavas.slice(0, 6) : [];

//   return (
//     <section className="w-full py-6 md:py-6 px-2 md:px-8 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
//       {/* Ambient glows */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
//             Most Popular Chadhava
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto mb-3"></div>
//         </div>

//         {/* CONTENT */}
//         {loading ? (
//           <div className="text-center py-10">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
//             <p className="mt-3 text-[#7a1c1c] font-semibold">
//               Loading chadhawas...
//             </p>
//           </div>
//         ) : error ? (
//           <div className="text-center py-10 text-red-600 font-semibold">
//             ⚠️ Error: {error}
//           </div>
//         ) : topSix.length === 0 ? (
//           <div className="text-center py-10 text-gray-500 font-semibold">
//             No Chadhawa available
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {topSix.map((item) => (
//               <div
//                 key={item._id}
//                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
//               >
//                 <div>
//                   {/* IMAGE */}
//                   <div className="relative h-56 w-full overflow-hidden">
//                     <img
//                       src={
//                         item.image && item.image.trim() !== ""
//                           ? item.image
//                           : "https://via.placeholder.com/400x300?text=Chadhawa"
//                       }
//                       alt={item.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x300?text=Chadhawa";
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

//                     {/* Rating */}
//                     <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                       <span className="text-xs font-bold text-[#7a1c1c]">
//                         {item.rating || "4.8"}
//                       </span>
//                       <FaStar className="text-[#df972b] text-[10px]" />
//                     </div>

//                     {/* Price */}
//                     <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
//                       ₹{item.pricing?.single || item.price}
//                     </div>

//                     {/* Title */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                       <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow-md">
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-4 space-y-3">
//                     <p className="text-xs text-black line-clamp-2 leading-relaxed">
//                       {item.description || item.shortDescription}
//                     </p>

//                     <div className="flex items-center gap-2 text-[11px] text-black font-medium flex-wrap">
//                       {/* Date */}
//                       <div className="flex items-center gap-1">
//                         <BiCalendar className="text-black text-xs" />
//                         <span>
//                           {new Date().toLocaleDateString("en-IN", {
//                             weekday: "short",
//                             day: "numeric",
//                             month: "short",
//                             year: "numeric",
//                           })}
//                         </span>
//                       </div>

//                       <span className="text-black">•</span>

//                       {/* Temple */}
//                       <div className="flex items-center gap-1 min-w-0">
//                         <BiMapPin className="text-[#c27803] text-xs shrink-0" />
//                         <span className="truncate max-w-[140px]">
//                           {item.templeName}
//                           {item.location?.city && `, ${item.location.city}`}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BUTTON */}
//                 <div className="p-4 pt-0">
//                   <Link
//                     to={`/chadhawa/${item._id}`}
//                     className="block w-full bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-2 px-3 rounded-md text-center text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
//                   >
//                     Offer Chadhawa
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default PopularChadhavaSection;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCalendar, BiMapPin } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

function PopularChadhavaSection() {
  // ⭐ Store se data
  const {
    chadhavas = [],
    loading = false,
    error = null,
    fetchChadhavas,
  } = useChadhavaStore();

  // ⭐ Fetch — sirf 6 popular chadhawas
  useEffect(() => {
    if (typeof fetchChadhavas === "function") {
      fetchChadhavas({ limit: 6, sortBy: "bookingCount", order: "desc" });
    }
  }, [fetchChadhavas]);

  // ⭐ Safety: sirf 6 hi dikhao, chahe API zyada bheje
  const topSix = Array.isArray(chadhavas) ? chadhavas.slice(0, 6) : [];

  return (
    <section className="w-full py-6 md:py-6 px-2 md:px-8 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
      {/* Ambient glows 🔴 Changed to Maroon */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10">
          {/* 🔴 Changed heading text to maroon */}
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7b1e2b] mb-2">
            Most Popular Chadhava
          </h2>
          {/* 🔴 Changed underline gradient to maroon */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] rounded-full mx-auto mb-3"></div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="text-center py-10">
            {/* 🔴 Changed loader to maroon */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-semibold">
              Loading chadhawas...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-600 font-semibold">
            ⚠️ Error: {error}
          </div>
        ) : topSix.length === 0 ? (
          <div className="text-center py-10 text-gray-500 font-semibold">
            No Chadhawa available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSix.map((item) => (
              <div
                key={item._id}
                // 🔴 Changed card border to maroon tint
                className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-[#7b1e2b]/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  {/* IMAGE */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={
                        item.image && item.image.trim() !== ""
                          ? item.image
                          : "https://via.placeholder.com/400x300?text=Chadhawa"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Chadhawa";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                      {/* 🔴 Changed rating text to maroon */}
                      <span className="text-xs font-bold text-[#7b1e2b]">
                        {item.rating || "4.8"}
                      </span>
                      {/* 🔴 Changed star to maroon */}
                      <FaStar className="text-[#7b1e2b] text-[10px]" />
                    </div>

                    {/* Price 🔴 Changed gradient to maroon */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                      ₹{item.pricing?.single || item.price}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow-md">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-black line-clamp-2 leading-relaxed">
                      {item.description || item.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-black font-medium flex-wrap">
                      {/* Date */}
                      <div className="flex items-center gap-1">
                        <BiCalendar className="text-black text-xs" />
                        <span>
                          {new Date().toLocaleDateString("en-IN", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <span className="text-black">•</span>

                      {/* Temple */}
                      <div className="flex items-center gap-1 min-w-0">
                        {/* 🔴 Changed MapPin to maroon */}
                        <BiMapPin className="text-[#7b1e2b] text-xs shrink-0" />
                        <span className="truncate max-w-[140px]">
                          {item.templeName}
                          {item.location?.city && `, ${item.location.city}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BUTTON 🔴 Changed to maroon gradient */}
                <div className="p-4 pt-0">
                  <Link
                    to={`/chadhawa/${item._id}`}
                    className="block w-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] hover:from-[#5a1420] hover:to-[#7b1e2b] text-white font-bold py-2 px-3 rounded-md text-center text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                  >
                    Offer Chadhawa
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularChadhavaSection;