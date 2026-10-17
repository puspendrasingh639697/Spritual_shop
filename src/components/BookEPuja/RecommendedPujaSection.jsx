

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HiArrowRight } from "react-icons/hi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import usePujaStore from "../../store/usepujaStore";
// import headingBg from "../../assets/sidebaarhading.jpeg"; // 👈 heading side image

// function RecommendedPujaSection() {
//   const store = usePujaStore();

//   const recommendedPujaList = (
//     store.recommendedPujaList ||
//     store.poojas ||
//     store.pujaList ||
//     []
//   ).slice(0, 3);

//   const loading = store.loading || false;
//   const error = store.error || null;

//   useEffect(() => {
//     if (typeof store.fetchRecommendedPujas === "function") {
//       console.log("🔍 Calling fetchRecommendedPujas");
//       store.fetchRecommendedPujas();
//     } else if (typeof store.fetchPoojas === "function") {
//       console.log("🔍 Calling fetchPoojas");
//       store.fetchPoojas();
//     } else {
//       console.log("❌ No fetch function found in store");
//       console.log("Store keys:", Object.keys(store));
//     }
//   }, []);

//   return (
//     <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] md:px-10 py-12 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="relative flex flex-col sm:flex-row items-center justify-center mb-12 border-b border-white/10 pb-6">
//           <div className="text-center space-y-2 w-full">

//             {/* 👇 Heading with LEFT + RIGHT images */}
//             <div className="flex items-center justify-center gap-3 sm:gap-5">
//               {/* LEFT image */}
//              <img
//   src={headingBg}
//   alt=""
//   aria-hidden="true"
//   className="h-8 sm:h-10 md:h-12 w-auto object-contain select-none pointer-events-none"
//   style={{ mixBlendMode: "multiply" }}
// />

//               {/* Heading text */}
//               <h2 className="relative text-3xl sm:text-4xl md:text-5xl text-[#7a1c1c] tracking-tight font-extrabold font-serif inline-block pb-3 whitespace-nowrap">
//                 Recommended Puja
//                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
//               </h2>

//               {/* RIGHT image (mirrored) */}
//               <img
//                 src={headingBg}
//                 alt=""
//                 aria-hidden="true"
//                 className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-80 select-none pointer-events-none scale-x-[-1]"
//               />
//             </div>

//             <p className="text-black text-sm md:text-base tracking-wide">
//               Book sacred rituals performed by expert Vedic pandits for divine blessings.
//             </p>
//           </div>

//           <div className="sm:absolute sm:right-0 mt-4 sm:mt-0">
//             <Link
//               to="/pooja-booking"
//               className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-all duration-300 shadow-lg"
//             >
//               <span>View All Pujas</span>
//               <HiArrowRight className="text-base" />
//             </Link>
//           </div>
//         </div>

//         {/* Loading / Error / Content */}
//         {loading ? (
//           <div className="text-center py-10 text-amber-800 font-semibold text-lg">
//             Loading sacred pujas...
//           </div>
//         ) : error ? (
//           <div className="text-center py-10 text-red-600 font-semibold text-lg">
//             ⚠️ Error: {error}
//           </div>
//         ) : recommendedPujaList.length === 0 ? (
//           <div className="text-center py-10 text-gray-600 font-semibold text-lg">
//             No Pujas available at the moment.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recommendedPujaList.map((puja) => (
//               <Link
//                 key={puja._id}
//                 to={`/pooja/${puja._id}`}
//                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-yellow-400 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
//               >
//                 <div className="relative w-full h-56 overflow-hidden bg-black">
//                   <img
//                     src={
//                       puja.image && puja.image.trim() !== ""
//                         ? puja.image
//                         : "https://via.placeholder.com/400x300?text=Puja"
//                     }
//                     alt={puja.PujaName || "Puja"}
//                     className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://via.placeholder.com/400x300?text=Puja";
//                     }}
//                   />
//                   <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md uppercase">
//                     {puja.pujaType || "Virtual"}
//                   </span>
//                 </div>

//                 <div className="p-5 flex flex-col justify-between flex-grow">
//                   <div>
//                     <h3 className="font-bold text-black text-base sm:text-lg line-clamp-2 mb-2">
//                       {puja.PujaName}
//                     </h3>
//                     <p className="text-black text-xs sm:text-sm line-clamp-2 mb-4">
//                       {puja.description}
//                     </p>
//                   </div>

//                   <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
//                     <div className="flex items-center justify-between text-[11px] font-medium text-black">
//                       <div className="flex items-center gap-1.5">
//                         <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
//                         <span className="line-clamp-1">{puja.location}</span>
//                       </div>
//                       <span className="font-bold text-amber-900 text-sm">
//                         ₹{puja.pricing?.single || puja.price}
//                       </span>
//                     </div>

//                     <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] text-[#120704] py-2.5 rounded-md text-xs font-bold flex items-center justify-center gap-2">
//                       <span>Book Puja Now</span>
//                       <HiArrowRight className="text-sm" />
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

// export default RecommendedPujaSection;



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import usePujaStore from "../../store/usepujaStore";
import headingBg from "../../assets/sidebaarhading.jpeg"; // 👈 heading side image

function RecommendedPujaSection() {
  const store = usePujaStore();

  const recommendedPujaList = (
    store.recommendedPujaList ||
    store.poojas ||
    store.pujaList ||
    []
  ).slice(0, 3);

  const loading = store.loading || false;
  const error = store.error || null;

  useEffect(() => {
    if (typeof store.fetchRecommendedPujas === "function") {
      console.log("🔍 Calling fetchRecommendedPujas");
      store.fetchRecommendedPujas();
    } else if (typeof store.fetchPoojas === "function") {
      console.log("🔍 Calling fetchPoojas");
      store.fetchPoojas();
    } else {
      console.log("❌ No fetch function found in store");
      console.log("Store keys:", Object.keys(store));
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] px-3 xs:px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="relative flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 border-b border-white/10 pb-5 sm:pb-6">
          <div className="text-center space-y-2 w-full">

            {/* 👇 Heading with LEFT + RIGHT images */}
            <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {/* LEFT image */}
              <img
                src={headingBg}
                alt=""
                aria-hidden="true"
                className="h-6 xs:h-7 sm:h-9 md:h-11 lg:h-12 w-auto object-contain select-none pointer-events-none shrink-0"
                style={{ mixBlendMode: "multiply" }}
              />

              {/* Heading text */}
              <h2 className="relative text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#7b1e2b] tracking-tight font-extrabold font-serif inline-block pb-2 sm:pb-3 whitespace-nowrap">
                Recommended Puja
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 xs:w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#7b1e2b] rounded-full"></span>
              </h2>

              {/* RIGHT image (mirrored) */}
              <img
                src={headingBg}
                alt=""
                aria-hidden="true"
                className="h-6 xs:h-7 sm:h-9 md:h-11 lg:h-12 w-auto object-contain opacity-80 select-none pointer-events-none scale-x-[-1] shrink-0"
              />
            </div>

            <p className="text-black text-xs xs:text-sm md:text-base tracking-wide px-2">
              Book sacred rituals performed by expert Vedic pandits for divine blessings.
            </p>
          </div>

          <div className="mt-4 sm:mt-5 md:mt-4 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <Link
              to="/pooja-booking"
              className="group inline-flex items-center justify-center whitespace-nowrap gap-2 sm:gap-2.5 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] hover:from-[#5a1420] hover:to-[#7b1e2b] text-white font-bold px-5 xs:px-6 sm:px-7 py-2 sm:py-2.5 rounded-md text-xs xs:text-sm transition-all duration-300 shadow-lg"
            >
              <span>View All Pujas</span>
              <HiArrowRight className="text-sm sm:text-base" />
            </Link>
          </div>
        </div>

        {/* Loading / Error / Content */}
        {loading ? (
          <div className="text-center py-10 text-[#7b1e2b] font-semibold text-base sm:text-lg">
            Loading sacred pujas...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-600 font-semibold text-base sm:text-lg">
            ⚠️ Error: {error}
          </div>
        ) : recommendedPujaList.length === 0 ? (
          <div className="text-center py-10 text-gray-600 font-semibold text-base sm:text-lg">
            No Pujas available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {recommendedPujaList.map((puja) => (
              <Link
                key={puja._id}
                to={`/pooja/${puja._id}`}
                className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-[#7b1e2b] hover:border-[#7b1e2b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
              >
                <div className="relative w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden bg-black">
                  <img
                    src={
                      puja.image && puja.image.trim() !== ""
                        ? puja.image
                        : "https://via.placeholder.com/400x300?text=Puja"
                    }
                    alt={puja.PujaName || "Puja"}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Puja";
                    }}
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#7b1e2b] text-white text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-md uppercase">
                    {puja.pujaType || "Virtual"}
                  </span>
                </div>

                <div className="p-3 xs:p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-black text-sm xs:text-base sm:text-lg line-clamp-2 mb-1.5 sm:mb-2">
                      {puja.PujaName}
                    </h3>
                    <p className="text-black text-[11px] xs:text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                      {puja.description}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-black/10 flex flex-col gap-2.5 sm:gap-3">
                    <div className="flex items-center justify-between gap-2 text-[10px] xs:text-[11px] font-medium text-black">
                      <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                        <FaMapMarkerAlt className="text-[#7b1e2b] shrink-0 text-[10px] xs:text-xs" />
                        <span className="line-clamp-1">{puja.location}</span>
                      </div>
                      <span className="font-bold text-[#7b1e2b] text-xs sm:text-sm shrink-0">
                        ₹{puja.pricing?.single || puja.price}
                      </span>
                    </div>

                    <div className="w-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white py-2 sm:py-2.5 rounded-md text-[11px] xs:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2">
                      <span>Book Puja Now</span>
                      <HiArrowRight className="text-xs sm:text-sm" />
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

export default RecommendedPujaSection;