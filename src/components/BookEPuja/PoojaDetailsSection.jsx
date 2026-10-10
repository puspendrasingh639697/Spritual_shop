


// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//     FaCalendarAlt,
//     FaPhone,
//     FaWhatsapp,
//     FaStar,
//     FaChevronRight,
//     FaChevronLeft,
//     FaTimes,
//     FaCheck,
// } from "react-icons/fa";
// import  pujaList  from "./UpcomingPujasSection";

// /* ================= COUNTDOWN HOOK ================= */
// function useCountdown(targetDate) {
//     const getTimeLeft = (target) => {
//         const diff = new Date(target) - new Date();
//         if (diff <= 0)
//             return { hours: 0, minutes: 0, seconds: 0, expired: true };
//         return {
//             hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((diff / (1000 * 60)) % 60),
//             seconds: Math.floor((diff / 1000) % 60),
//             expired: false,
//         };
//     };
//     const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
//     useEffect(() => {
//         const timer = setInterval(
//             () => setTimeLeft(getTimeLeft(targetDate)),
//             1000
//         );
//         return () => clearInterval(timer);
//     }, [targetDate]);
//     return timeLeft;
// }

// /* ================= PACKAGE MODAL COMPONENT ================= */
// function PujaPackageModal({ isOpen, onClose, puja }) {
//     const [selectedPackage, setSelectedPackage] = useState(null);
//     const navigate = useNavigate();   // ✅ YEH LINE ADD KARO

//     if (!isOpen) return null;

//     const packages = [
//         {
//             id: "single",
//             title: "Single",
//             subtitle: "For 1 Person Sankalp",
//             price: puja?.price || 816,
//             originalPrice: Math.round((puja?.price || 816) * 1.4),
//             persons: 1,
//             features: [
//                 "Personalized Sankalp",
//                 "Puja Video Shared",
//                 "Live Updates on WhatsApp",
//                 "Prasad Delivery",
//             ],
//         },
//         {
//             id: "couple",
//             title: "Couple",
//             subtitle: "For Couple Sankalp",
//             price: Math.round((puja?.price || 816) * 1.8),
//             originalPrice: Math.round((puja?.price || 816) * 2.5),
//             persons: 2,
//             popular: true,
//             features: [
//                 "Personalized Sankalp for 2",
//                 "Puja Video Shared",
//                 "Live Updates on WhatsApp",
//                 "Prasad Delivery",
//                 "Priority Support",
//             ],
//         },
//         {
//             id: "family",
//             title: "Family",
//             subtitle: "For Whole Family",
//             price: Math.round((puja?.price || 816) * 3),
//             originalPrice: Math.round((puja?.price || 816) * 4.5),
//             persons: 6,
//             features: [
//                 "Personalized Sankalp for 6",
//                 "Puja Video Shared",
//                 "Live Updates on WhatsApp",
//                 "Prasad Delivery",
//                 "Priority Support",
//                 "Special Pandit Call",
//             ],
//         },
//     ];

//     // ✅ NAYA handleBookNow
//     const handleBookNow = () => {
//         if (!selectedPackage) {
//             alert("Please select a package first");
//             return;
//         }

//         // ✅ Booking form page par navigate karo
//         navigate(`/pooja-booking/${puja.id}/form`);
//         onClose();
//     };

//     return (
//         <div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
//             onClick={onClose}
//         >
//             <div
//                 className="bg-white w-full md:max-w-3xl md:rounded-md rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col animate-slide-up shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {/* HEADER */}
//                 <div className="flex items-center justify-between bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 border-b border-gray-100 shrink-0">
//                     <div className="min-w-0 flex-1">
//                         <h2 className="md:text-lg font-bold text-black">
//                             Select Puja Package
//                         </h2>
//                         <p className="text-xs text-black mt-0.5 truncate">
//                             {puja?.title}
//                         </p>
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="w-9 h-9 rounded-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] hover:bg-gray-200 flex items-center justify-center cursor-pointer transition shrink-0 ml-2"
//                     >
//                         <FaTimes className="text-black text-sm" />
//                     </button>
//                 </div>

//                 {/* PACKAGES */}
//                 <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
//                         {packages.map((pkg) => {
//                             const isSelected = selectedPackage?.id === pkg.id;
//                             return (
//                                 <div
//                                     key={pkg.id}
//                                     onClick={() => setSelectedPackage(pkg)}
//                                     className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
//                                         isSelected
//                                             ? "border-yellow-500 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] shadow-md"
//                                             : "border-yellow-500 hover:border-gray-300 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]"
//                                     }`}
//                                 >
//                                     {pkg.popular && (
//                                         <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
//                                             Popular
//                                         </span>
//                                     )}

//                                     {isSelected && (
//                                         <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#e65100] flex items-center justify-center">
//                                             <FaCheck className="text-white text-[10px]" />
//                                         </div>
//                                     )}

//                                     <h3 className="text-base font-bold text-black">
//                                         {pkg.title}
//                                     </h3>
//                                     <p className="text-xs text-black mb-3">
//                                         {pkg.subtitle}
//                                     </p>

//                                     <div className="flex items-baseline gap-2 mb-4">
//                                         <span className="text-2xl font-bold text-black">
//                                             ₹{pkg.price}
//                                         </span>
//                                         <span className="text-sm text-gray-black line-through">
//                                             ₹{pkg.originalPrice}
//                                         </span>
//                                     </div>

//                                     <ul className="space-y-2">
//                                         {pkg.features.map((feature, i) => (
//                                             <li
//                                                 key={i}
//                                                 className="flex items-start gap-2 text-xs text-black"
//                                             >
//                                                 <span className="w-4 h-4 rounded-full bg-yellow-600 flex items-center justify-center shrink-0 mt-0.5">
//                                                     <FaCheck className="text-white text-[8px]" />
//                                                 </span>
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* FOOTER */}
//                 <div className="border-t border-gray-100 bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 flex items-center justify-between gap-3 shrink-0">
//                     <div className="min-w-0">
//                         <p className="text-xs text-black">Total Amount</p>
//                         <p className="text-xl font-bold text-gray-900">
//                             ₹{selectedPackage?.price || 0}
//                         </p>
//                     </div>
//                     <button
//                         onClick={handleBookNow}
//                         disabled={!selectedPackage}
//                         className={`px-6 md:px-8 py-3 rounded-md font-bold text-sm transition-all whitespace-nowrap ${
//                             selectedPackage
//                                 ? "bg-white hover:from-[#c27803] hover:to-[#c27803] text-yellow-800 shadow-md cursor-pointer"
//                                 : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                         }`}
//                     >
//                         Book Now
//                     </button>
//                 </div>
//             </div>

//             <style>{`
//                 @keyframes slide-up {
//                     from { transform: translateY(30px); opacity: 0; }
//                     to { transform: translateY(0); opacity: 1; }
//                 }
//                 .animate-slide-up {
//                     animation: slide-up 0.3s ease-out;
//                 }
//             `}</style>
//         </div>
//     );
// }

// /* ================= MAIN PAGE ================= */
// function PoojaDetailPage() {
//     const { id } = useParams();
//     const puja = pujaList.find((p) => p.id === Number(id));
//     const { hours, minutes, seconds } = useCountdown(
//         puja?.pujaDate || new Date()
//     );
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     if (!puja) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold text-gray-800 mb-4">
//                         Puja Not Found
//                     </h1>
//                     <Link
//                         to="/pooja-booking"
//                         className="inline-block bg-[#e65100] text-white px-6 py-2 rounded-md"
//                     >
//                         Go Back
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const pujaDate = new Date(puja.pujaDate);
//     const formattedDate = pujaDate.toLocaleDateString("en-IN", {
//         weekday: "short",
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//     });

//     return (
//         <div className="w-full h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] flex flex-col overflow-hidden">
//             {/* BREADCRUMB */}
//             <div className="px-6 md:px-12 py-2 text-xs text-gray-500 flex items-center gap-2 shrink-0">
//                 <span className="text-black font-medium truncate max-w-[300px]">
//                     {puja.title}
//                 </span>
//             </div>

//             {/* MAIN CONTENT */}
//             <div className="h-[calc(100vh-120px)] flex items-center justify-center px-6 md:px-12 overflow-hidden">
//                 <div className="w-full max-w-[1200px] h-[80vh]">
//                     <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] h-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] overflow-hidden">
//                         {/* LEFT: IMAGE */}
//                         <div className="relative h-full p-2.5">
//                             <div className="relative w-full h-full rounded-md overflow-hidden group cursor-pointer shadow-lg border-[3px] border-amber-600/30">
//                                 <img
//                                     src={puja.image}
//                                     alt={puja.title}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
//                                     <div className="self-start">
//                                         <div className="bg-amber-100/90 backdrop-blur-md px-3 py-1 rounded-full shadow border border-amber-300 flex items-center gap-1.5">
//                                             <span className="text-[11px] font-bold text-amber-900">
//                                                 Why Choose Puspendra
//                                             </span>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-2">
//                                         <div className="flex justify-center items-center gap-1.5 pt-1">
//                                             <span className="w-2 h-2 rounded-full bg-white/50"></span>
//                                             <span className="w-2 h-2 rounded-full bg-white/50"></span>
//                                             <span className="w-6 h-2 rounded-full bg-[#df972b]"></span>
//                                             <span className="w-2 h-2 rounded-full bg-white/50"></span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition cursor-pointer opacity-0 group-hover:opacity-100">
//                                     <FaChevronLeft className="text-gray-700 text-[10px]" />
//                                 </button>

//                                 <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition cursor-pointer opacity-0 group-hover:opacity-100">
//                                     <FaChevronRight className="text-gray-700 text-[10px]" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* RIGHT: DETAILS */}
//                         <div className="p-5 md:p-7 flex flex-col justify-center h-full overflow-hidden">
//                             <h1 className="text-lg md:text-xl lg:text-[24px] font-bold leading-tight mb-2">
//                                 {puja.title}
//                             </h1>

//                             <p className="text-sm text-yellow-600 font-semibold">
//                                 13 Saturdays Daan Recommended
//                             </p>

//                             <div className="flex items-center gap-2 text-sm text-black mb-2">
//                                 <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
//                                     <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
//                                 </svg>
//                                 <span>{puja.temple}, {puja.location.split(",")[0]}</span>
//                             </div>

//                             <div className="flex items-center gap-2 text-sm text-black mb-4">
//                                 <FaCalendarAlt className="w-4 h-4 text-black shrink-0" />
//                                 <span>{formattedDate} - Shanivar Visesh</span>
//                             </div>

//                             <div className="flex items-center gap-3 mb-4 flex-wrap">
//                                 <span className="text-sm font-bold text-gray-800">
//                                     Puja starts in
//                                 </span>
//                                 <div className="flex items-center gap-1.5">
//                                     <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm md:text-base">
//                                         {String(hours).padStart(2, "0")} HR
//                                     </div>
//                                     <span className="text-[#e65100] font-bold">:</span>
//                                     <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm md:text-base">
//                                         {String(minutes).padStart(2, "0")} MIN
//                                     </div>
//                                     <span className="text-[#e65100] font-bold">:</span>
//                                     <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm md:text-base">
//                                         {String(seconds).padStart(2, "0")} SEC
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
//                                 <div className="flex items-center gap-2.5">
//                                     <div className="flex -space-x-2">
//                                         <img src="https://i.pravatar.cc/32?img=1" alt="d" className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
//                                         <img src="https://i.pravatar.cc/32?img=2" alt="d" className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
//                                         <img src="https://i.pravatar.cc/32?img=3" alt="d" className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
//                                         <img src="https://i.pravatar.cc/32?img=4" alt="d" className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
//                                     </div>
//                                     <div>
//                                         <p className="text-sm font-bold text-black leading-tight">
//                                             10 Lakh+
//                                         </p>
//                                         <p className="text-[11px] text-black leading-tight">
//                                             have offered Puja
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#df972b] to-[#c27803] border border-gray-200 px-2.5 py-1 rounded-md">
//                                     <span className="text-sm font-bold text-white">4.6</span>
//                                     <FaStar className="text-amber-800 text-[10px]" />
//                                     <span className="text-[10px] text-white border-l border-gray-300 pl-1.5 ml-0.5">
//                                         1k+
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* CTA BUTTONS */}
//                             <div className="flex items-center gap-2.5 mt-auto w-full">
//                                 <button
//                                     onClick={() => setIsModalOpen(true)}
//                                     className="flex-1 min-w-0 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-3 rounded-md text-sm md:text-base shadow-[0_4px_15px_-3px_rgba(230,81,0,0.4)] hover:shadow-[0_6px_20px_-3px_rgba(230,81,0,0.5)] transition-all duration-300 cursor-pointer active:scale-[0.98] whitespace-nowrap"
//                                 >
//                                     Select Puja
//                                 </button>
//                                 <a
//                                     href="tel:+919999999999"
//                                     className="w-11 h-11 rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-md hover:bg-[#1976d2] hover:scale-105 transition-all cursor-pointer shrink-0"
//                                 >
//                                     <FaPhone className="text-sm" />
//                                 </a>
//                                 <a
//                                     href="https://wa.me/919999999999"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-md hover:bg-[#1ebe57] hover:scale-105 transition-all cursor-pointer shrink-0"
//                                 >
//                                     <FaWhatsapp className="text-lg" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* MODAL */}
//             <PujaPackageModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 puja={puja}
//             />
//         </div>
//     );
// }

// export default PoojaDetailPage;


import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

/* ================= API URL ================= */
const API_BASE_URL = "https://shopbackendlive.onrender.com/api";
// Production: "https://shopbackendlive.onrender.com/api"

/* ================= PACKAGE MODAL ================= */
function PujaPackageModal({ isOpen, onClose, puja }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  if (!isOpen || !puja) return null;

  // ⭐ API se pricing lo
  const pricing = puja.pricing || {
    single: puja.price || 0,
    family: 0,
    group: 0,
    premium: 0,
  };

  // ⭐ Dynamic packages — API pricing se
  const packages = [
    {
      id: "single",
      title: "Single",
      subtitle: "For 1 Person Sankalp",
      price: pricing.single,
      originalPrice: Math.round(pricing.single * 1.4),
      persons: 1,
      features: [
        "Personalized Sankalp",
        "Puja Video Shared",
        "Live Updates on WhatsApp",
        "Prasad Delivery",
      ],
    },
    {
      id: "family",
      title: "Family",
      subtitle: "For Whole Family",
      price: pricing.family,
      originalPrice: Math.round(pricing.family * 1.3),
      persons: 6,
      popular: true,
      features: [
        "Personalized Sankalp for 6",
        "Puja Video Shared",
        "Live Updates on WhatsApp",
        "Prasad Delivery",
        "Priority Support",
      ],
    },
    {
      id: "group",
      title: "Group",
      subtitle: "For Group Sankalp",
      price: pricing.group,
      originalPrice: Math.round(pricing.group * 1.2),
      persons: 10,
      features: [
        "Personalized Sankalp for 10",
        "Puja Video Shared",
        "Live Updates on WhatsApp",
        "Prasad Delivery",
        "Priority Support",
        "Special Pandit Call",
      ],
    },
    {
      id: "premium",
      title: "Premium",
      subtitle: "VIP Puja Package",
      price: pricing.premium,
      originalPrice: Math.round(pricing.premium * 1.15),
      persons: 20,
      features: [
        "Personalized Sankalp for 20",
        "Puja Video Shared",
        "Live Updates on WhatsApp",
        "Prasad Delivery",
        "Priority Support",
        "Special Pandit Call",
        "VIP Darshan",
      ],
    },
  ];

  const handleBookNow = () => {
    if (!selectedPackage) {
      alert("Please select a package first");
      return;
    }

    // ⭐ Booking form pe navigate karo — package + pooja id ke saath
    navigate(
      `/pooja-booking/${puja._id}/form?package=${selectedPackage.id}`
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-3xl md:rounded-md rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col animate-slide-up shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 border-b border-gray-100 shrink-0">
          <div className="min-w-0 flex-1">
            <h2 className="md:text-lg font-bold text-black">
              Select Puja Package
            </h2>
            <p className="text-xs text-black mt-0.5 truncate">
              {puja.PujaName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] hover:bg-gray-200 flex items-center justify-center cursor-pointer transition shrink-0 ml-2"
          >
            <FaTimes className="text-black text-sm" />
          </button>
        </div>

        {/* PACKAGES */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {packages
              .filter((pkg) => pkg.price > 0) // ⭐ Sirf valid packages
              .map((pkg) => {
                const isSelected = selectedPackage?.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-yellow-500 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] shadow-md"
                        : "border-yellow-500 hover:border-gray-300 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]"
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Popular
                      </span>
                    )}

                    {isSelected && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#e65100] flex items-center justify-center">
                        <FaCheck className="text-white text-[10px]" />
                      </div>
                    )}

                    <h3 className="text-base font-bold text-black">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-black mb-3">
                      {pkg.subtitle}
                    </p>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-black">
                        ₹{pkg.price}
                      </span>
                      <span className="text-sm text-black line-through">
                        ₹{pkg.originalPrice}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-black"
                        >
                          <span className="w-4 h-4 rounded-full bg-yellow-600 flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheck className="text-white text-[8px]" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-100 bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 flex items-center justify-between gap-3 shrink-0">
          <div className="min-w-0">
            <p className="text-xs text-black">Total Amount</p>
            <p className="text-xl font-bold text-gray-900">
              ₹{selectedPackage?.price || 0}
            </p>
          </div>
          <button
            onClick={handleBookNow}
            disabled={!selectedPackage}
            className={`px-6 md:px-8 py-3 rounded-md font-bold text-sm transition-all whitespace-nowrap ${
              selectedPackage
                ? "bg-white hover:bg-gray-100 text-yellow-800 shadow-md cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
function PoojaDetailPage() {
  const { id } = useParams();
  const [puja, setPuja] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ⭐ API se pooja fetch karo
  useEffect(() => {
    const fetchPuja = async () => {
      try {
        setLoading(true);
        console.log("🔍 Fetching pooja:", id);
        const response = await fetch(`${API_BASE_URL}/${id}`);
        const data = await response.json();

        if (data.success && data.data) {
          setPuja(data.data);
          console.log("✅ Pooja loaded:", data.data.PujaName);
        } else {
          setError(data.message || "Pooja not found");
        }
      } catch (err) {
        setError(err.message);
        console.error("❌ Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPuja();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
          <p className="mt-3 text-[#7a1c1c] font-semibold">
            Loading puja details...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error || !puja) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Puja Not Found"}
          </h1>
          <Link
            to="/pooja-booking"
            className="inline-block bg-[#e65100] text-white px-6 py-2 rounded-md"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  // ⭐ Date — API se aayegi, warna today
  const pujaDate = new Date();
  pujaDate.setDate(pujaDate.getDate() + 7);
  const formattedDate = pujaDate.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] flex flex-col overflow-hidden">
      {/* BREADCRUMB */}
      <div className="px-6 md:px-12 py-2 text-xs text-gray-500 flex items-center gap-2 shrink-0">
        <span className="text-black font-medium truncate max-w-[300px]">
          {puja.PujaName}
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="h-[calc(100vh-120px)] flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="w-full max-w-[1200px] h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] h-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] overflow-hidden">
            {/* LEFT: IMAGE */}
            <div className="relative h-full p-2.5">
              <div className="relative w-full h-full rounded-md overflow-hidden group cursor-pointer shadow-lg border-[3px] border-amber-600/30">
                <img
                  src={
                    puja.image && puja.image.trim() !== ""
                      ? puja.image
                      : "https://via.placeholder.com/600x800?text=Puja"
                  }
                  alt={puja.PujaName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x800?text=Puja";
                  }}
                />
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="p-5 md:p-7 flex flex-col justify-center h-full overflow-hidden">
              <h1 className="text-lg md:text-xl lg:text-[24px] font-bold leading-tight mb-2">
                {puja.PujaName}
              </h1>

              <p className="text-sm text-yellow-600 font-semibold">
                {puja.pujaType} Puja - Book Now
              </p>

              <div className="flex items-center gap-2 text-sm text-black mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
                </svg>
                <span>
                  {puja.templeName}, {puja.location}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-black mb-4">
                <FaCalendarAlt className="w-4 h-4 text-black shrink-0" />
                <span>{formattedDate}</span>
              </div>

              {/* Starting Price */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-sm font-bold text-gray-800">
                  Starting from
                </span>
                <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-4 py-2 rounded-md text-lg">
                  ₹{puja.pricing?.single || puja.price}
                </div>
              </div>

              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/32?img=1"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                    />
                    <img
                      src="https://i.pravatar.cc/32?img=2"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                    />
                    <img
                      src="https://i.pravatar.cc/32?img=3"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black leading-tight">
                      10 Lakh+
                    </p>
                    <p className="text-[11px] text-black leading-tight">
                      have offered Puja
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#df972b] to-[#c27803] px-2.5 py-1 rounded-md">
                  <span className="text-sm font-bold text-white">4.6</span>
                  <FaStar className="text-amber-800 text-[10px]" />
                  <span className="text-[10px] text-white border-l border-gray-300 pl-1.5 ml-0.5">
                    1k+
                  </span>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex items-center gap-2.5 mt-auto w-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 min-w-0 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-3 rounded-md text-sm md:text-base shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Select Puja Package
                </button>
                <a
                  href="tel:+919999999999"
                  className="w-11 h-11 rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-md hover:bg-[#1976d2] hover:scale-105 transition-all cursor-pointer shrink-0"
                >
                  <FaPhone className="text-sm" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-md hover:bg-[#1ebe57] hover:scale-105 transition-all cursor-pointer shrink-0"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <PujaPackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        puja={puja}
      />
    </div>
  );
}

export default PoojaDetailPage;