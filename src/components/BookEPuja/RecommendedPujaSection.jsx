// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HiArrowRight } from "react-icons/hi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { usePujaStore } from "../../store/usepujaStore";
// // import { usePujaStore } from "../store/pujaStore";

// function RecommendedPujaSection() {
//     const { recommendedPujaList, loading, fetchRecommendedPujas } = usePujaStore();

//     useEffect(() => {
//         fetchRecommendedPujas();
//     }, [fetchRecommendedPujas]);

//     return (
//         <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] md:px-10 py-12 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

//                 {/* Header Section */}
//                 <div className="relative flex flex-col sm:flex-row items-center justify-center mb-12 border-b border-white/10 pb-6">
//                     <div className="text-center space-y-2 w-full">
//                         <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#7a1c1c] tracking-tight font-extrabold font-serif relative inline-block pb-3">
//                             Recommended Puja
//                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
//                         </h2>
//                         <p className="text-black text-sm md:text-base tracking-wide">
//                             Book sacred rituals performed by expert Vedic pandits for divine blessings.
//                         </p>
//                     </div>

//                     <div className="sm:absolute sm:right-0 mt-4 sm:mt-0">
//                         <Link
//                             to="/pooja-booking"
//                             className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
//                         >
//                             <span>View All Pujas</span>
//                             <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Loading / Content State */}
//                 {loading ? (
//                     <div className="text-center py-10 text-amber-800 font-semibold text-lg">Loading sacred pujas...</div>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {recommendedPujaList.map((puja) => (
//                             <Link
//                                 key={puja._id}
//                                 to={`/pooja/${puja._id}`}
//                                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-yellow-400 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
//                             >
//                                 <div className="relative w-full h-56 overflow-hidden bg-black">
//                                     <img
//                                         src={puja.image || "https://via.placeholder.com/400"}
//                                         alt={puja.PujaName}
//                                         className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>
//                                     <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
//                                         {puja.pujaType || "Virtual"}
//                                     </span>
//                                 </div>

//                                 <div className="p-5 flex flex-col justify-between flex-grow">
//                                     <div>
//                                         <h3 className="font-bold text-black text-base sm:text-lg line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
//                                             {puja.PujaName}
//                                         </h3>
//                                         <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
//                                             {puja.description}
//                                         </p>
//                                     </div>

//                                     <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
//                                         <div className="flex items-center justify-between text-[11px] font-medium text-black">
//                                             <div className="flex items-center gap-1.5">
//                                                 <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
//                                                 <span className="line-clamp-1">{puja.location}</span>
//                                             </div>
//                                             <span className="font-bold text-amber-900 text-sm">₹{puja.price}</span>
//                                         </div>

//                                         <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-white group-hover:to-white text-[#120704] py-2.5 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
//                                             <span>Book Puja Now</span>
//                                             <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// }

// export default RecommendedPujaSection;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { usePujaStore } from "../../store/usepujaStore";

function RecommendedPujaSection() {
    // Store se error bhi nikal liya
    const { recommendedPujaList, loading, error, fetchRecommendedPujas } = usePujaStore();

    useEffect(() => {
        fetchRecommendedPujas();
    }, [fetchRecommendedPujas]);

    return (
        <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] md:px-10 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center mb-12 border-b border-white/10 pb-6">
                    <div className="text-center space-y-2 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#7a1c1c] tracking-tight font-extrabold font-serif relative inline-block pb-3">
                            Recommended Puja
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
                        </h2>
                        <p className="text-black text-sm md:text-base tracking-wide">
                            Book sacred rituals performed by expert Vedic pandits for divine blessings.
                        </p>
                    </div>

                    <div className="sm:absolute sm:right-0 mt-4 sm:mt-0">
                        <Link
                            to="/pooja-booking"
                            className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#df972b] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
                        >
                            <span>View All Pujas</span>
                            <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Loading / Error / Content State */}
                {loading ? (
                    <div className="text-center py-10 text-amber-800 font-semibold text-lg">
                        Loading sacred pujas...
                    </div>
                ) : error ? (
                    // Error aane par yeh dikhega
                    <div className="text-center py-10 text-red-600 font-semibold text-lg">
                        ⚠️ Error: {error}. Please check if backend is running.
                    </div>
                ) : recommendedPujaList.length === 0 ? (
                    // Agar data empty hai
                    <div className="text-center py-10 text-gray-600 font-semibold text-lg">
                        No Pujas available at the moment.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedPujaList.map((puja) => (
                            <Link
                                key={puja._id}
                                to={`/pooja/${puja._id}`}
                                className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-yellow-400 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
                            >
                                <div className="relative w-full h-56 overflow-hidden bg-black">
                                    <img
                                        // Safe Fallback: Agar image empty ya undefined ho
                                        src={puja.image && puja.image.trim() !== "" ? puja.image : "https://via.placeholder.com/400x300?text=Puja+Image"}
                                        alt={puja.PujaName || "Puja"}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                                        onError={(e) => {
                                            // Agar image URL toot jaye toh placeholder lagao
                                            e.target.src = "https://via.placeholder.com/400x300?text=Puja+Image";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>
                                    <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                                        {puja.pujaType || "Virtual"}
                                    </span>
                                </div>

                                <div className="p-5 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="font-bold text-black text-base sm:text-lg line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
                                            {puja.PujaName}
                                        </h3>
                                        <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                                            {puja.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
                                        <div className="flex items-center justify-between text-[11px] font-medium text-black">
                                            <div className="flex items-center gap-1.5">
                                                <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
                                                <span className="line-clamp-1">{puja.location}</span>
                                            </div>
                                            <span className="font-bold text-amber-900 text-sm">₹{puja.price}</span>
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
                )}

            </div>
        </section>
    );
}

export default RecommendedPujaSection;