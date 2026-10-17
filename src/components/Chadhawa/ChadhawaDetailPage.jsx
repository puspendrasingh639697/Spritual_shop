


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   FaCalendarAlt,
//   FaPhone,
//   FaWhatsapp,
//   FaStar,
// } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// /* ================= COUNTDOWN HOOK ================= */
// function useCountdown(targetDate) {
//   const getTimeLeft = (target) => {
//     const diff = new Date(target) - new Date();
//     if (diff <= 0)
//       return { hours: 0, minutes: 0, seconds: 0, expired: true };
//     return {
//       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((diff / (1000 * 60)) % 60),
//       seconds: Math.floor((diff / 1000) % 60),
//       expired: false,
//     };
//   };
//   const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
//   useEffect(() => {
//     const timer = setInterval(
//       () => setTimeLeft(getTimeLeft(targetDate)),
//       1000
//     );
//     return () => clearInterval(timer);
//   }, [targetDate]);
//   return timeLeft;
// }

// /* ================= MAIN PAGE ================= */
// function ChadhawaDetailPage() {
//   const { id } = useParams();

//   const {
//     singleChadhava: chadhawa,
//     loading,
//     error,
//     fetchChadhavaById,
//   } = useChadhavaStore();

//   // ⭐ API se fetch karo
//   useEffect(() => {
//     if (id && typeof fetchChadhavaById === "function") {
//       fetchChadhavaById(id);
//     }
//   }, [id, fetchChadhavaById]);

//   // Countdown — dummy date (7 din baad)
//   const dummyDate = new Date();
//   dummyDate.setDate(dummyDate.getDate() + 7);
//   const { hours, minutes, seconds } = useCountdown(dummyDate);

//   // ═══════ Loading ═══════
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
//           <p className="mt-3 text-[#7a1c1c] font-semibold">
//             Loading Chadhawa...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ═══════ Error ═══════
//   if (error || !chadhawa) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             {error || "Chadhawa Not Found"}
//           </h1>
//           <Link
//             to="/chadhawa"
//             className="inline-block bg-[#e65100] text-white px-6 py-2 rounded-md hover:bg-[#c27803] transition-all"
//           >
//             Go Back
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ═══════ Date ═══════
//   const chadhawaDate = new Date();
//   chadhawaDate.setDate(chadhawaDate.getDate() + 7);
//   const formattedDate = chadhawaDate.toLocaleDateString("en-IN", {
//     weekday: "short",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <div className="w-full h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] flex flex-col overflow-hidden">
//       {/* ═══════ BREADCRUMB ═══════ */}
//       <div className="px-6 md:px-12 py-2 text-xs text-gray-500 flex items-center gap-2 shrink-0">
//         <Link to="/" className="hover:text-[#c27803]">
//           Home
//         </Link>
//         <span>›</span>
//         <Link to="/chadhawa" className="hover:text-[#c27803]">
//           Chadhawa
//         </Link>
//         <span>›</span>
//         <span className="text-black font-medium truncate max-w-[300px]">
//           {chadhawa.name}
//         </span>
//       </div>

//       {/* ═══════ MAIN CONTENT ═══════ */}
//       <div className="h-[calc(110vh-130px)] flex items-center justify-center px-6 md:px-12 overflow-hidden">
//         <div className="w-full max-w-[1100px] h-[90vh]">
//           <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] h-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] overflow-hidden">
//             {/* ═══════ LEFT: IMAGE ═══════ */}
//             <div className="relative h-full p-2.5">
//               <div className="relative w-full h-full rounded-md overflow-hidden group cursor-pointer border-[1px] border-amber-600/30">
//                 <img
//                   src={
//                     chadhawa.image && chadhawa.image.trim() !== ""
//                       ? chadhawa.image
//                       : "https://via.placeholder.com/600x800?text=Chadhawa"
//                   }
//                   alt={chadhawa.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   onError={(e) => {
//                     e.target.src =
//                       "https://via.placeholder.com/600x800?text=Chadhawa";
//                   }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
//                   <div className="self-start">
//                     <div className="bg-amber-100/90 backdrop-blur-md px-3 py-1 rounded-md shadow border border-amber-300 flex items-center gap-1.5">
//                       <span className="text-[11px] font-bold text-amber-900">
//                         Why Choose Puspendra
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ═══════ RIGHT: DETAILS ═══════ */}
//             <div className="p-5 md:p-7 flex flex-col justify-center h-full overflow-hidden">
//               <h1 className="text-lg md:text-xl lg:text-[24px] font-bold leading-tight mb-2 text-black">
//                 {chadhawa.name}
//               </h1>

//               <p className="text-sm text-yellow-600 font-semibold capitalize">
//                 {chadhawa.chadhavaType?.replace("_", " ")} Chadhawa —{" "}
//                 {chadhawa.deity}
//               </p>

//               {/* ─── Temple ─── */}
//               <div className="flex items-center gap-2 text-sm text-black mb-2">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="w-4 h-4 text-gray-500 shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 >
//                   <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
//                 </svg>
//                 <span>
//                   {chadhawa.templeName}
//                   {chadhawa.location?.city && `, ${chadhawa.location.city}`}
//                 </span>
//               </div>

//               {/* ─── Date ─── */}
//               <div className="flex items-center gap-2 text-sm text-black mb-4">
//                 <FaCalendarAlt className="w-4 h-4 text-black shrink-0" />
//                 <span>{formattedDate} - Auspicious Muhurat</span>
//               </div>

//               {/* ─── Countdown ─── */}
//               <div className="flex items-center gap-3 mb-4 flex-wrap">
//                 <span className="text-sm font-bold text-gray-800">
//                   Chadhawa in
//                 </span>
//                 <div className="flex items-center gap-1.5">
//                   <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm">
//                     {String(hours).padStart(2, "0")} HR
//                   </div>
//                   <span className="text-[#e65100] font-bold">:</span>
//                   <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm">
//                     {String(minutes).padStart(2, "0")} MIN
//                   </div>
//                   <span className="text-[#e65100] font-bold">:</span>
//                   <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] text-white font-bold px-3 py-1 rounded-md text-sm">
//                     {String(seconds).padStart(2, "0")} SEC
//                   </div>
//                 </div>
//               </div>

//               {/* ─── Rating ─── */}
//               <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
//                 <div className="flex items-center gap-2.5">
//                   <div className="flex -space-x-2">
//                     <img
//                       src="https://i.pravatar.cc/32?img=1"
//                       alt="d"
//                       className="w-7 h-7 rounded-full border-2 border-white"
//                     />
//                     <img
//                       src="https://i.pravatar.cc/32?img=2"
//                       alt="d"
//                       className="w-7 h-7 rounded-full border-2 border-white"
//                     />
//                     <img
//                       src="https://i.pravatar.cc/32?img=3"
//                       alt="d"
//                       className="w-7 h-7 rounded-full border-2 border-white"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-black">5 Lakh+</p>
//                     <p className="text-[11px] text-black">
//                       have offered Chadhawa
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#df972b] to-[#c27803] px-2.5 py-1 rounded-md">
//                   <span className="text-sm font-bold text-white">4.8</span>
//                   <FaStar className="text-amber-800 text-[10px]" />
//                   <span className="text-[10px] text-white border-l border-gray-300 pl-1.5 ml-0.5">
//                     1k+
//                   </span>
//                 </div>
//               </div>

//               {/* ─── Price ─── */}
//               <div className="mb-5">
//                 <p className="text-[12px] text-black font-medium uppercase tracking-wider">
//                   Starting from
//                 </p>
//                 <p className="text-3xl font-bold text-[#7a1c1c]">
//                   ₹{chadhawa.pricing?.single || chadhawa.price}
//                 </p>
//               </div>

//               {/* ═══════ CTA — Link Tag ═══════ */}
//               <div className="flex items-center gap-2.5 mt-auto w-full">
//                 {/* ⭐ LINK TAG — Booking form ke liye */}
//                 <Link
//                   to={`/chadhawa/${chadhawa._id}/form`}
//                   className="flex-1 min-w-0 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold py-3 rounded-md text-sm text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.98]"
//                 >
//                   Offer Chadhawa
//                 </Link>

//                 {/* Phone */}
//                 <a
//                   href="tel:+919999999999"
//                   className="w-11 h-11 rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-md hover:bg-[#1976d2] hover:scale-105 transition-all cursor-pointer shrink-0"
//                 >
//                   <FaPhone className="text-sm" />
//                 </a>

//                 {/* WhatsApp */}
//                 <a
//                   href="https://wa.me/919999999999"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-md hover:bg-[#1ebe57] hover:scale-105 transition-all cursor-pointer shrink-0"
//                 >
//                   <FaWhatsapp className="text-lg" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChadhawaDetailPage;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

/* ================= COUNTDOWN HOOK ================= */
function useCountdown(targetDate) {
  const getTimeLeft = (target) => {
    const diff = new Date(target) - new Date();
    if (diff <= 0)
      return { hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(getTimeLeft(targetDate)),
      1000
    );
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

/* ================= MAIN PAGE ================= */
function ChadhawaDetailPage() {
  const { id } = useParams();

  const {
    singleChadhava: chadhawa,
    loading,
    error,
    fetchChadhavaById,
  } = useChadhavaStore();

  // ⭐ API se fetch karo
  useEffect(() => {
    if (id && typeof fetchChadhavaById === "function") {
      fetchChadhavaById(id);
    }
  }, [id, fetchChadhavaById]);

  // Countdown — dummy date (7 din baad)
  const dummyDate = new Date();
  dummyDate.setDate(dummyDate.getDate() + 7);
  const { hours, minutes, seconds } = useCountdown(dummyDate);

  // ═══════ Loading ═══════
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
        <div className="text-center">
          {/* 🔴 Loader changed to maroon */}
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
          <p className="mt-3 text-[#7b1e2b] font-semibold">
            Loading Chadhawa...
          </p>
        </div>
      </div>
    );
  }

  // ═══════ Error ═══════
  if (error || !chadhawa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Chadhawa Not Found"}
          </h1>
          {/* 🔴 Go Back button changed to maroon */}
          <Link
            to="/chadhawa"
            className="inline-block bg-[#7b1e2b] text-white px-6 py-2 rounded-md hover:bg-[#5a1420] transition-all"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  // ═══════ Date ═══════
  const chadhawaDate = new Date();
  chadhawaDate.setDate(chadhawaDate.getDate() + 7);
  const formattedDate = chadhawaDate.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] flex flex-col overflow-hidden">
      {/* ═══════ BREADCRUMB 🔴 Hover changed to maroon ═══════ */}
      <div className="px-6 md:px-12 py-2 text-xs text-gray-500 flex items-center gap-2 shrink-0">
        <Link to="/" className="hover:text-[#7b1e2b]">
          Home
        </Link>
        <span>›</span>
        <Link to="/chadhawa" className="hover:text-[#7b1e2b]">
          Chadhawa
        </Link>
        <span>›</span>
        <span className="text-black font-medium truncate max-w-[300px]">
          {chadhawa.name}
        </span>
      </div>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="h-[calc(110vh-130px)] flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="w-full max-w-[1100px] h-[90vh]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] h-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] overflow-hidden">
            
            {/* ═══════ LEFT: IMAGE ═══════ */}
            <div className="relative h-full p-2.5">
              {/* 🔴 Border changed to maroon */}
              <div className="relative w-full h-full rounded-md overflow-hidden group cursor-pointer border-[1px] border-[#7b1e2b]/30">
                <img
                  src={
                    chadhawa.image && chadhawa.image.trim() !== ""
                      ? chadhawa.image
                      : "https://via.placeholder.com/600x800?text=Chadhawa"
                  }
                  alt={chadhawa.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x800?text=Chadhawa";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                  <div className="self-start">
                    {/* 🔴 Badge changed to maroon */}
                    <div className="bg-[#7b1e2b]/90 backdrop-blur-md px-3 py-1 rounded-md shadow border border-[#5a1420] flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-white">
                        Why Choose Puspendra
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════ RIGHT: DETAILS ═══════ */}
            <div className="p-5 md:p-7 flex flex-col justify-center h-full overflow-hidden">
              <h1 className="text-lg md:text-xl lg:text-[24px] font-bold leading-tight mb-2 text-black">
                {chadhawa.name}
              </h1>

              {/* 🔴 Text changed to maroon */}
              <p className="text-sm text-[#7b1e2b] font-semibold capitalize">
                {chadhawa.chadhavaType?.replace("_", " ")} Chadhawa —{" "}
                {chadhawa.deity}
              </p>

              {/* ─── Temple ─── */}
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
                  {chadhawa.templeName}
                  {chadhawa.location?.city && `, ${chadhawa.location.city}`}
                </span>
              </div>

              {/* ─── Date ─── */}
              <div className="flex items-center gap-2 text-sm text-black mb-4">
                <FaCalendarAlt className="w-4 h-4 text-black shrink-0" />
                <span>{formattedDate} - Auspicious Muhurat</span>
              </div>

              {/* ─── Countdown 🔴 Maroon Boxes ─── */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-sm font-bold text-gray-800">
                  Chadhawa in
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white font-bold px-3 py-1 rounded-md text-sm">
                    {String(hours).padStart(2, "0")} HR
                  </div>
                  <span className="text-[#7b1e2b] font-bold">:</span>
                  <div className="bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white font-bold px-3 py-1 rounded-md text-sm">
                    {String(minutes).padStart(2, "0")} MIN
                  </div>
                  <span className="text-[#7b1e2b] font-bold">:</span>
                  <div className="bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white font-bold px-3 py-1 rounded-md text-sm">
                    {String(seconds).padStart(2, "0")} SEC
                  </div>
                </div>
              </div>

              {/* ─── Rating ─── */}
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/32?img=1"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/32?img=2"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/32?img=3"
                      alt="d"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">5 Lakh+</p>
                    <p className="text-[11px] text-black">
                      have offered Chadhawa
                    </p>
                  </div>
                </div>
                {/* 🔴 Rating Box changed to maroon */}
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] px-2.5 py-1 rounded-md">
                  <span className="text-sm font-bold text-white">4.8</span>
                  <FaStar className="text-yellow-400 text-[10px]" />
                  <span className="text-[10px] text-white border-l border-white/30 pl-1.5 ml-0.5">
                    1k+
                  </span>
                </div>
              </div>

              {/* ─── Price 🔴 Maroon Text ─── */}
              <div className="mb-5">
                <p className="text-[12px] text-black font-medium uppercase tracking-wider">
                  Starting from
                </p>
                <p className="text-3xl font-bold text-[#7b1e2b]">
                  ₹{chadhawa.pricing?.single || chadhawa.price}
                </p>
              </div>

              {/* ═══════ CTA — Link Tag ═══════ */}
              <div className="flex items-center gap-2.5 mt-auto w-full">
                {/* 🔴 Link Tag changed to maroon */}
                <Link
                  to={`/chadhawa/${chadhawa._id}/form`}
                  className="flex-1 min-w-0 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] hover:from-[#5a1420] hover:to-[#7b1e2b] text-white font-bold py-3 rounded-md text-sm text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  Offer Chadhawa
                </Link>

                {/* Phone */}
                <a
                  href="tel:+919999999999"
                  className="w-11 h-11 rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-md hover:bg-[#1976d2] hover:scale-105 transition-all cursor-pointer shrink-0"
                >
                  <FaPhone className="text-sm" />
                </a>

                {/* WhatsApp */}
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
    </div>
  );
}

export default ChadhawaDetailPage;