// import React from "react";
// import { Link } from "react-router-dom";
// import { BiCalendar, BiMapPin } from "react-icons/bi";
// import { FaGift, FaStar } from "react-icons/fa";

// /* ================= IMAGE IMPORTS ================= */
// import coins from "../../assets/TampleImage/coines.webp";
// import tample18 from "../../assets/TampleImage/tample18.png";
// import pojaKit2 from "../../assets/pojakit_2.jpg";

// /* ================= CHADHAWA DATA — 6 Cards ================= */
// const popularChadhavas = [
//     {
//         id: 1,
//         title: "Baglamukhi Sankat-Naashak Mirchi Havan",
//         subtitle: "Complete freedom from crises, fear, and opponents",
//         temple: "Maa Baglamukhi Dham, Ujjain",
//         date: "Thu, 3 Sep 2026",
//         price: 501,
//         rating: "4.8",
//         image: coins,
//         link: "/chadhawa/1",
//     },
//     {
//         id: 2,
//         title: "Shiv-Parvati Prem Prapti Chadhava",
//         subtitle: "An opportunity to attain love, prosperity, and marital bliss",
//         temple: "Triyugi Narayan Teerth, Rudraprayag",
//         date: "Fri, 4 Sep 2026",
//         price: 751,
//         rating: "4.9",
//         image: tample18,
//         link: "/chadhawa/2",
//     },
//     {
//         id: 3,
//         title: "Shri Khatu Shyam Chadhava",
//         subtitle: "Success in Business and Career",
//         temple: "Khatu Shyam Temple, Sikar",
//         date: "Sun, 6 Sep 2026",
//         price: 1100,
//         rating: "4.7",
//         image: pojaKit2,
//         link: "/chadhawa/3",
//     },
//     {
//         id: 4,
//         title: "Maha Rudrabhishek Chadhava",
//         subtitle: "Remove obstacles and invite abundance",
//         temple: "Kashi Vishwanath Temple, Varanasi",
//         date: "Mon, 7 Sep 2026",
//         price: 851,
//         rating: "4.9",
//         image: coins,
//         link: "/chadhawa/4",
//     },
//     {
//         id: 5,
//         title: "Ganesh Lakshmi Maha Anushthan",
//         subtitle: "Wealth, prosperity, and divine blessings",
//         temple: "Siddhivinayak Temple, Mumbai",
//         date: "Tue, 8 Sep 2026",
//         price: 651,
//         rating: "4.8",
//         image: tample18,
//         link: "/chadhawa/5",
//     },
//     {
//         id: 6,
//         title: "Kaal Sarp Dosh Nivaran Chadhava",
//         subtitle: "Pacify planetary afflictions and bring peace",
//         temple: "Trimbakeshwar Temple, Nashik",
//         date: "Wed, 9 Sep 2026",
//         price: 1501,
//         rating: "4.7",
//         image: pojaKit2,
//         link: "/chadhawa/6",
//     },
// ];

// function PopularChadhavaSection() {
//     return (
//         <section className="w-full py-6 md:py-6 px-2 md:px-8 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  relative overflow-hidden">
//             {/* Ambient Glow */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* ================= SECTION HEADER ================= */}
//                 <div className="text-center mb-10">
                    
//                     <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
//                         Most Popular Chadhava
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto mb-3"></div>
                    
//                 </div>

//                 {/* ================= 6 CARDS GRID ================= */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {popularChadhavas.map((item) => (
//                         <div
//                             key={item.id}
//                             className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
//                         >
//                             <div>
//                                 {/* Card Image */}
//                                 <div className="relative h-56 w-full overflow-hidden">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                                     />
//                                     {/* Gradient Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

//                                     {/* Rating Badge */}
//                                     <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                                         <span className="text-xs font-bold text-[#7a1c1c]">
//                                             {item.rating}
//                                         </span>
//                                         <FaStar className="text-[#df972b] text-[10px]" />
//                                     </div>

//                                     {/* Price Badge */}
//                                     <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
//                                         ₹{item.price}
//                                     </div>

//                                     {/* Title Overlay */}
//                                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                                         <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow-md">
//                                             {item.title}
//                                         </h3>
//                                     </div>
//                                 </div>

//                                 {/* Card Body */}
//                                 <div className="p-4 space-y-3">
//                                     {/* Subtitle */}
//                                     <p className="text-xs text-black line-clamp-2 leading-relaxed">
//                                         {item.subtitle}
//                                     </p>

//                                     {/* Date + Temple */}
//                                     <div className="flex items-center gap-2 text-[11px] text-black font-medium flex-wrap">
//                                         <div className="flex items-center gap-1">
//                                             <BiCalendar className="text-black text-xs" />
//                                             <span>{item.date}</span>
//                                         </div>
//                                         <span className="text-black">•</span>
//                                         <div className="flex items-center gap-1 min-w-0">
//                                             <BiMapPin className="text-[#c27803] text-xs shrink-0" />
//                                             <span className="truncate max-w-[140px]">
//                                                 {item.temple}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Action Button */}
//                             <div className="p-4 pt-0">
//                                 <Link
//                                     to={item.link}
//                                     className="block w-full bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-2 px-3 rounded-md text-center text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
//                                 >
//                                     Offer Chadhawa
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

               
//             </div>
//         </section>
//     );
// }

// export default PopularChadhavaSection;


import React from "react";
import { Link } from "react-router-dom";
import { BiCalendar, BiMapPin } from "react-icons/bi";
import { FaGift, FaStar } from "react-icons/fa";

/* ================= IMAGE IMPORTS ================= */
import coins from "../../assets/TampleImage/coines.webp";
import tample18 from "../../assets/TampleImage/tample18.png";
import pojaKit2 from "../../assets/pojakit_2.jpg";

/* ================= CHADHAWA DATA — EXPORTED ================= */
export const chadhawaList = [
    {
        id: 1,
        title: "Baglamukhi Sankat-Naashak Mirchi Havan",
        subtitle: "Complete freedom from crises, fear, and opponents",
        temple: "Maa Baglamukhi Dham, Ujjain",
        date: "Thu, 3 Sep 2026",
        chadhawaDate: "2026-09-20T10:00:00",
        price: 501,
        rating: "4.8",
        image: coins,
        link: "/chadhawa/1",
    },
    {
        id: 2,
        title: "Shiv-Parvati Prem Prapti Chadhava",
        subtitle: "An opportunity to attain love, prosperity, and marital bliss",
        temple: "Triyugi Narayan Teerth, Rudraprayag",
        date: "Fri, 4 Sep 2026",
        chadhawaDate: "2026-09-18T08:00:00",
        price: 751,
        rating: "4.9",
        image: tample18,
        link: "/chadhawa/2",
    },
    {
        id: 3,
        title: "Shri Khatu Shyam Chadhava",
        subtitle: "Success in Business and Career",
        temple: "Khatu Shyam Temple, Sikar",
        date: "Sun, 6 Sep 2026",
        chadhawaDate: "2026-09-15T06:00:00",
        price: 1100,
        rating: "4.7",
        image: pojaKit2,
        link: "/chadhawa/3",
    },
    {
        id: 4,
        title: "Maha Rudrabhishek Chadhava",
        subtitle: "Remove obstacles and invite abundance",
        temple: "Kashi Vishwanath Temple, Varanasi",
        date: "Mon, 7 Sep 2026",
        chadhawaDate: "2026-09-22T05:00:00",
        price: 851,
        rating: "4.9",
        image: coins,
        link: "/chadhawa/4",
    },
    {
        id: 5,
        title: "Ganesh Lakshmi Maha Anushthan",
        subtitle: "Wealth, prosperity, and divine blessings",
        temple: "Siddhivinayak Temple, Mumbai",
        date: "Tue, 8 Sep 2026",
        chadhawaDate: "2026-09-25T07:00:00",
        price: 651,
        rating: "4.8",
        image: tample18,
        link: "/chadhawa/5",
    },
    {
        id: 6,
        title: "Kaal Sarp Dosh Nivaran Chadhava",
        subtitle: "Pacify planetary afflictions and bring peace",
        temple: "Trimbakeshwar Temple, Nashik",
        date: "Wed, 9 Sep 2026",
        chadhawaDate: "2026-09-28T09:00:00",
        price: 1501,
        rating: "4.7",
        image: pojaKit2,
        link: "/chadhawa/6",
    },
];

function PopularChadhavaSection() {
    return (
        <section className="w-full py-6 md:py-6 px-2 md:px-8 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#7a1c1c] mb-2">
                        Most Popular Chadhava
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto mb-3"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chadhawaList.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
                        >
                            <div>
                                <div className="relative h-56 w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                                        <span className="text-xs font-bold text-[#7a1c1c]">
                                            {item.rating}
                                        </span>
                                        <FaStar className="text-[#df972b] text-[10px]" />
                                    </div>

                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                                        ₹{item.price}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 drop-shadow-md">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-4 space-y-3">
                                    <p className="text-xs text-black line-clamp-2 leading-relaxed">
                                        {item.subtitle}
                                    </p>

                                    <div className="flex items-center gap-2 text-[11px] text-black font-medium flex-wrap">
                                        <div className="flex items-center gap-1">
                                            <BiCalendar className="text-black text-xs" />
                                            <span>{item.date}</span>
                                        </div>
                                        <span className="text-black">•</span>
                                        <div className="flex items-center gap-1 min-w-0">
                                            <BiMapPin className="text-[#c27803] text-xs shrink-0" />
                                            <span className="truncate max-w-[140px]">
                                                {item.temple}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 pt-0">
                                <Link
                                    to={item.link}
                                    className="block w-full bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-2 px-3 rounded-md text-center text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                                >
                                    Offer Chadhawa
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularChadhavaSection;