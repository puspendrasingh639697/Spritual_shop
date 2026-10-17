


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
// import {
//   FaCheckCircle,
//   FaChevronDown,
//   FaArrowLeft,
//   FaLock,
//   FaClock,
//   FaCheck,
//   FaUser,
//   FaPhone,
//   FaGift,
//   FaPlus,
// } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// /* ================= SEVA / BHET DATA ================= */
// const sevaList = [
//   {
//     id: 1,
//     title: "Nandi Seva",
//     subtitle: "Offer Nandi Seva for Good Health & Long Life",
//     price: 251,
//     oldPrice: null,
//     badge: null,
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013394/product_images/1789013393131-tample5.jpg",
//   },
//   {
//     id: 2,
//     title: "Shiva Ashtakam Path",
//     subtitle: "Panditji will be chanting the Shiva Ashtakam for Good Health & Family Prosperity",
//     price: 225,
//     oldPrice: null,
//     badge: "MOST OFFERED",
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013292/product_images/1789013286940-images%20%2810%29.jpg",
//   },
//   {
//     id: 3,
//     title: "Panchamrit Chadhawa",
//     subtitle: "Offer Panchamrit Chadhawa for Getting Rid off Ill Health",
//     price: 151,
//     oldPrice: 301,
//     badge: null,
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013190/product_images/1789013188391-download.jpg",
//   },
//   {
//     id: 4,
//     title: "Aparajita Pushpa Daan",
//     subtitle: "Offer Aparajita Pushpa for Good Health",
//     price: 101,
//     oldPrice: 175,
//     badge: null,
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013114/product_images/1789013110477-download%20%283%29.jpg",
//   },
//   {
//     id: 5,
//     title: "Bilwapatra Arpan",
//     subtitle: "Offer Bilwapatra for Family Prosperity",
//     price: 81,
//     oldPrice: null,
//     badge: null,
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013055/product_images/1789013052079-download%20%281%29.jpg",
//   },
//   {
//     id: 6,
//     title: "Akand Mala Arpan",
//     subtitle: "Offer Akand Mala for Financial Prosperity",
//     price: 75,
//     oldPrice: null,
//     badge: null,
//     image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789012984/product_images/1789012982064-images%20%281%29.jpg",
//   },
// ];

// /* ================= SEVA CARD ================= */
// function SevaCard({ item, isAdded, onAdd, onRemove }) {
//   return (
//     <div className="flex items-start gap-3 py-4 border-b border-amber-200/40 last:border-b-0">
//       <div className="flex-1 min-w-0">
//         <h4 className="text-sm font-bold text-black leading-snug">{item.title}</h4>
//         <p className="text-xs text-black mt-1 leading-relaxed line-clamp-2">
//           {item.subtitle}
//         </p>

//         {item.badge && (
//           <div className="flex items-center gap-2 mt-2">
//             <span className="bg-amber-400 text-[#7a1c1c] text-[9px] font-bold px-2 py-0.5 rounded-sm">
//               {item.badge}
//             </span>
//           </div>
//         )}

//         <div className="flex items-center gap-2 mt-1">
//           {item.oldPrice && (
//             <span className="text-xs text-red-500 line-through">
//               ₹{item.oldPrice}
//             </span>
//           )}
//           <span className="text-sm font-bold text-black">₹ {item.price}/-</span>
//         </div>
//       </div>

//       <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden shadow-md">
//         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//       </div>

//       <div className="shrink-0 self-center">
//         {isAdded ? (
//           <button
//             onClick={() => onRemove(item.id)}
//             className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-md shadow-md transition-all active:scale-95 whitespace-nowrap"
//           >
//             <FaCheck className="text-[10px]" /> Added
//           </button>
//         ) : (
//           <button
//             onClick={() => onAdd(item)}
//             className="flex items-center gap-1 bg-white hover:bg-[#df972b] text-[#c27803] hover:text-white border-2 border-[#df972b] text-xs font-bold px-3 py-2 rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap"
//           >
//             <FaPlus className="text-[10px]" /> Add
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ================= SUMMARY SEVA CARD ================= */
// function SummarySevaCard({ item, isAdded, onAdd, onRemove }) {
//   return (
//     <div className="flex items-center gap-3 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 p-3 shadow-sm">
//       <div className="shrink-0 w-14 h-14 rounded-md overflow-hidden border border-amber-200/60">
//         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//       </div>

//       <div className="flex-1 min-w-0">
//         <h5 className="text-xs font-bold text-black leading-snug line-clamp-2">
//           {item.title}
//         </h5>
//         <div className="flex items-center gap-1.5 mt-1">
//           {item.oldPrice && (
//             <span className="text-[10px] text-red-500 line-through">
//               ₹{item.oldPrice}
//             </span>
//           )}
//           <span className="text-xs font-bold text-black">₹{item.price}</span>
//         </div>
//       </div>

//       <div className="shrink-0">
//         {isAdded ? (
//           <button
//             onClick={() => onRemove(item.id)}
//             className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm active:scale-95 whitespace-nowrap"
//           >
//             <FaCheck className="text-[9px]" /> Added
//           </button>
//         ) : (
//           <button
//             onClick={() => onAdd(item)}
//             className="flex items-center gap-1 bg-white hover:bg-[#df972b] text-[#c27803] hover:text-white border-2 border-[#df972b] text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm active:scale-95 whitespace-nowrap"
//           >
//             <FaPlus className="text-[9px]" /> Add
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ================= MAIN PAGE ================= */
// function ChadhawaBookingForm() {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   // ⭐ Selected package URL se
//   const packageType = searchParams.get("package") || "single";

//   // ⭐ Store se data
//   const {
//     singleChadhava: chadhawa,
//     loading,
//     error,
//     fetchChadhavaById,
//     bookChadhava,
//   } = useChadhavaStore();

//   const [whatsappConfirmed, setWhatsappConfirmed] = useState(null);
//   const [devoteeName, setDevoteeName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gotra, setGotra] = useState("");
//   const [showGotraList, setShowGotraList] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [addedSevas, setAddedSevas] = useState([]);

//   const gotraRef = useRef(null);

//   const gotraList = [
//     "Kashyap",
//     "Bharadwaj",
//     "Gautam",
//     "Vashishtha",
//     "Vishvamitra",
//     "Atri",
//     "Jamadagni",
//     "Agastya",
//     "Bhrigu",
//     "Angiras",
//   ];

//   // ⭐ API se fetch karo
//   useEffect(() => {
//     if (id && typeof fetchChadhavaById === "function") {
//       fetchChadhavaById(id);
//     }
//   }, [id, fetchChadhavaById]);

//   // Close gotra dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (gotraRef.current && !gotraRef.current.contains(e.target)) {
//         setShowGotraList(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ⭐ Loading
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

//   // ⭐ Error
//   if (error || !chadhawa) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
//         <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             {error || "Chadhawa Not Found"}
//           </h1>
//           <Link
//             to="/chadhawa"
//             className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md"
//           >
//             Go Back
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ⭐ Selected package ka price
//   const pricing = chadhawa.pricing || {};
//   const selectedPrice = pricing[packageType] || chadhawa.price || 0;

//   const discountedPrice = selectedPrice;
//   const savings = 0;
//   const discountPercent = 0;

//   // Add / remove seva
//   const handleAddSeva = (seva) => {
//     setAddedSevas((prev) => [...prev, seva]);
//   };

//   const handleRemoveSeva = (sevaId) => {
//     setAddedSevas((prev) => prev.filter((s) => s.id !== sevaId));
//   };

//   const isSevaAdded = (sevaId) => addedSevas.some((s) => s.id === sevaId);

//   const sevaTotal = addedSevas.reduce((sum, s) => sum + s.price, 0);
//   const grandTotal = discountedPrice + sevaTotal;

//   // ⭐ Booking + Payment
//   const handlePayDakshina = async () => {
//     if (!whatsappConfirmed) {
//       alert("Please confirm WhatsApp number");
//       return;
//     }
//     if (!devoteeName.trim()) {
//       alert("Please enter devotee name");
//       return;
//     }
//     if (!phoneNumber.trim() || phoneNumber.length < 10) {
//       alert("Please enter valid 10-digit phone number");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login first");
//         navigate("/login");
//         return;
//       }

//       // ⭐ Booking date (15 din baad)
//       const bookingDate = new Date();
//       bookingDate.setDate(bookingDate.getDate() + 15);

//       const payload = {
//         chadhavaId: chadhawa._id,
//         names: [devoteeName],
//         phoneNumber: phoneNumber,
//         gotra: gotra || "Not Specified",
//         date: bookingDate.toISOString().split("T")[0],
//         slot: "morning",
//         address: "N/A (Temple)",
//         specialRequests: addedSevas.map((s) => s.title).join(", "),
//       };

//       console.log("📦 Chadhawa Booking payload:", payload);

//       // ⭐ Book via store
//       const bookingResult = await bookChadhava(payload);
//       console.log("✅ Booking response:", bookingResult);

//       if (!bookingResult.success) {
//         alert("❌ " + bookingResult.error);
//         return;
//       }

//       const bookingId = bookingResult.data._id;

//       // ⭐ Checkout
//       const checkoutResponse = await fetch(
//         "https://shopbackendlive.onrender.com/api/chadhava/create-checkout",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ bookingId }),
//         }
//       );

//       const checkoutData = await checkoutResponse.json();
//       console.log("✅ Checkout response:", checkoutData);

//       if (checkoutData.success) {
//         const { order, key } = checkoutData;

//         const options = {
//           key: key,
//           amount: order.amount,
//           currency: order.currency,
//           name: "Chadhawa Offering",
//           description: chadhawa.name,
//           order_id: order.id,
//           handler: async function (response) {
//             const verifyRes = await fetch(
//               "https://shopbackendlive.onrender.com/api/chadhava/verify-payment",
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                   Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                   razorpay_order_id: response.razorpay_order_id,
//                   razorpay_payment_id: response.razorpay_payment_id,
//                   razorpay_signature: response.razorpay_signature,
//                   bookingId: bookingId,
//                 }),
//               }
//             );

//             const verifyData = await verifyRes.json();
//             if (verifyData.success) {
//               alert("✅ Payment successful! Chadhawa booked.");
//               navigate("/my-chadhawa-bookings");
//             } else {
//               alert("❌ Payment verification failed");
//             }
//           },
//           prefill: {
//             name: devoteeName,
//             contact: phoneNumber,
//           },
//           theme: { color: "#df972b" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } else {
//         alert("❌ " + (checkoutData.message || "Checkout failed"));
//       }
//     } catch (err) {
//       console.error("❌ Error:", err);
//       alert("❌ " + err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
//       {/* BACK */}
//       <div className="px-4 md:px-12 py-3 max-w-7xl mx-auto">
//         <Link
//           to={`/chadhawa/${id}`}
//           className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#c27803] font-semibold group"
//         >
//           <FaArrowLeft className="text-xs text-black group-hover:-translate-x-1 transition-transform" />
//           Back to Chadhawa Details
//         </Link>
//       </div>

//       {/* MAIN */}
//       <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
//           {/* LEFT: FORM */}
//           <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md p-5 md:p-8">
//             {/* WhatsApp */}
//             <div className="pb-6 border-b border-amber-200/40">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
//                   <FaPhone className="text-white text-xs" />
//                 </div>
//                 <h3 className="text-base md:text-lg font-bold text-black">
//                   Confirm WhatsApp Number
//                 </h3>
//               </div>
//               <p className="text-sm text-black mb-5">
//                 Is{" "}
//                 <span className="font-bold text-black">+91 98708 87237</span>{" "}
//                 your WhatsApp number as well?
//               </p>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setWhatsappConfirmed(true)}
//                   className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
//                     whatsappConfirmed === true
//                       ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
//                       : "bg-white border-2 border-amber-200 text-gray-700"
//                   }`}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setWhatsappConfirmed(false)}
//                   className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
//                     whatsappConfirmed === false
//                       ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
//                       : "bg-white border-2 border-amber-200 text-gray-700"
//                   }`}
//                 >
//                   No
//                 </button>
//               </div>
//             </div>

//             {/* Devotee */}
//             <div className="pt-6">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
//                   <FaUser className="text-white text-xs" />
//                 </div>
//                 <h3 className="text-base md:text-lg font-bold text-black">
//                   Enter Devotee Details
//                 </h3>
//               </div>

//               <div className="space-y-5">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
//                     Devotee Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={devoteeName}
//                       onChange={(e) => setDevoteeName(e.target.value)}
//                       placeholder="Enter name"
//                       className="w-full border-2 border-amber-200 rounded-md px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
//                     />
//                     {devoteeName.trim() && (
//                       <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
//                     )}
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="10-digit mobile number"
//                     maxLength={10}
//                     className="w-full border-2 border-amber-200 rounded-md px-4 py-3.5 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
//                   />
//                 </div>

//                 {/* Gotra */}
//                 <div ref={gotraRef}>
//                   <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
//                     Gotra (if known)
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={gotra}
//                       onChange={(e) => setGotra(e.target.value)}
//                       onFocus={() => setShowGotraList(true)}
//                       placeholder="Enter gotra"
//                       className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
//                     />
//                     <button
//                       onClick={() => setShowGotraList(!showGotraList)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                       type="button"
//                     >
//                       <FaChevronDown
//                         className={`text-sm transition-transform ${
//                           showGotraList ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {showGotraList && (
//                     <div className="relative">
//                       <div className="absolute top-2 left-0 right-0 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-56 overflow-y-auto z-30">
//                         {gotraList
//                           .filter((g) =>
//                             g.toLowerCase().includes(gotra.toLowerCase())
//                           )
//                           .map((g) => (
//                             <div
//                               key={g}
//                               onClick={() => {
//                                 setGotra(g);
//                                 setShowGotraList(false);
//                               }}
//                               className={`px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-amber-50 ${
//                                 gotra === g
//                                   ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
//                                   : "text-gray-700"
//                               }`}
//                             >
//                               {g}
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Trust */}
//             <div className="mt-8 border border-amber-200/60 rounded-lg p-3 flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shrink-0">
//                 <FaCheckCircle className="text-white text-sm" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-black">
//                   100% Authentic Chadhawa
//                 </p>
//                 <p className="text-[11px] text-black">
//                   Offered by verified temple priests
//                 </p>
//               </div>
//             </div>

//             {/* SEVA SECTION */}
//             <div className="mt-8">
//               <h3 className="text-base md:text-lg font-bold text-black mb-1">
//                 Add Seva &amp; Bhet to your Chadhawa
//               </h3>
//               <p className="text-xs text-black mb-2">
//                 Enhance your offering with these additional temple sevas.
//               </p>

//               <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border border-amber-200/60 px-4 py-2">
//                 {sevaList.map((item) => (
//                   <SevaCard
//                     key={item.id}
//                     item={item}
//                     isAdded={isSevaAdded(item.id)}
//                     onAdd={handleAddSeva}
//                     onRemove={handleRemoveSeva}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: SUMMARY */}
//           <div className="lg:sticky lg:top-4 lg:self-start">
//             <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md overflow-hidden">
//               {/* Chadhawa Info */}
//               <div className="p-5 flex items-start gap-3 border-b border-amber-200/40">
//                 <img
//                   src={
//                     chadhawa.image && chadhawa.image.trim() !== ""
//                       ? chadhawa.image
//                       : "https://via.placeholder.com/64"
//                   }
//                   alt={chadhawa.name}
//                   className="w-16 h-16 rounded-lg object-cover shrink-0 shadow-md"
//                 />
//                 <div className="min-w-0 flex-1">
//                   <h4 className="text-sm font-bold text-[#7a1c1c] leading-snug line-clamp-2">
//                     {chadhawa.name}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-1 capitalize">
//                     {packageType} Package
//                   </p>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="p-5 border-b border-amber-200/40">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-bold text-[#7a1c1c]">
//                     Total Amount
//                   </span>
//                   <span className="text-xl font-bold text-[#7a1c1c]">
//                     ₹{discountedPrice}
//                   </span>
//                 </div>
//               </div>

//               {/* Seva Summary */}
//               <div className="p-5 border-b border-amber-200/40">
//                 <h3 className="text-sm font-bold text-[#7a1c1c] mb-1">
//                   Add Seva &amp; Bhet
//                 </h3>

//                 <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
//                   {sevaList.map((item) => (
//                     <SummarySevaCard
//                       key={item.id}
//                       item={item}
//                       isAdded={isSevaAdded(item.id)}
//                       onAdd={handleAddSeva}
//                       onRemove={handleRemoveSeva}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Grand Total */}
//               {addedSevas.length > 0 && (
//                 <div className="p-5 border-b border-amber-200/40">
//                   <p className="text-[11px] font-bold text-[#c27803] uppercase mb-2">
//                     Added Sevas ({addedSevas.length})
//                   </p>
//                   <div className="space-y-1.5">
//                     {addedSevas.map((s) => (
//                       <div
//                         key={s.id}
//                         className="flex items-center justify-between text-xs"
//                       >
//                         <span className="text-gray-700 truncate pr-2">
//                           {s.title}
//                         </span>
//                         <span className="font-semibold text-[#7a1c1c]">
//                           ₹{s.price}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-3 pt-3 border-t border-amber-200/40 flex items-center justify-between">
//                     <span className="text-sm font-bold text-[#7a1c1c]">
//                       Grand Total
//                     </span>
//                     <span className="text-lg font-bold text-[#7a1c1c]">
//                       ₹{grandTotal}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {/* Pay Button */}
//               <div className="p-5">
//                 <button
//                   onClick={handlePayDakshina}
//                   disabled={isLoading}
//                   className={`w-full py-3 rounded-md text-base font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
//                     isLoading
//                       ? "bg-gray-300 text-gray-600 cursor-wait"
//                       : "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white hover:scale-[1.02] cursor-pointer"
//                   }`}
//                 >
//                   {isLoading ? (
//                     "Processing..."
//                   ) : (
//                     <>
//                       <FaGift className="text-sm" />
//                       Pay ₹{grandTotal} & Offer
//                     </>
//                   )}
//                 </button>

//                 <div className="flex items-center justify-center gap-1.5 mt-4">
//                   <FaLock className="text-[10px] text-black" />
//                   <p className="text-[10px] text-black font-semibold">
//                     100% Secure Payment
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChadhawaBookingForm;


import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaChevronDown,
  FaArrowLeft,
  FaLock,
  FaClock,
  FaCheck,
  FaUser,
  FaPhone,
  FaGift,
  FaPlus,
} from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

/* ================= SEVA / BHET DATA ================= */
const sevaList = [
  {
    id: 1,
    title: "Nandi Seva",
    subtitle: "Offer Nandi Seva for Good Health & Long Life",
    price: 251,
    oldPrice: null,
    badge: null,
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013394/product_images/1789013393131-tample5.jpg",
  },
  {
    id: 2,
    title: "Shiva Ashtakam Path",
    subtitle: "Panditji will be chanting the Shiva Ashtakam for Good Health & Family Prosperity",
    price: 225,
    oldPrice: null,
    badge: "MOST OFFERED",
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013292/product_images/1789013286940-images%20%2810%29.jpg",
  },
  {
    id: 3,
    title: "Panchamrit Chadhawa",
    subtitle: "Offer Panchamrit Chadhawa for Getting Rid off Ill Health",
    price: 151,
    oldPrice: 301,
    badge: null,
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013190/product_images/1789013188391-download.jpg",
  },
  {
    id: 4,
    title: "Aparajita Pushpa Daan",
    subtitle: "Offer Aparajita Pushpa for Good Health",
    price: 101,
    oldPrice: 175,
    badge: null,
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013114/product_images/1789013110477-download%20%283%29.jpg",
  },
  {
    id: 5,
    title: "Bilwapatra Arpan",
    subtitle: "Offer Bilwapatra for Family Prosperity",
    price: 81,
    oldPrice: null,
    badge: null,
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789013055/product_images/1789013052079-download%20%281%29.jpg",
  },
  {
    id: 6,
    title: "Akand Mala Arpan",
    subtitle: "Offer Akand Mala for Financial Prosperity",
    price: 75,
    oldPrice: null,
    badge: null,
    image: "https://res.cloudinary.com/qcqig88l/image/upload/v1789012984/product_images/1789012982064-images%20%281%29.jpg",
  },
];

/* ================= SEVA CARD ================= */
function SevaCard({ item, isAdded, onAdd, onRemove }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-[#7b1e2b]/10 last:border-b-0">
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-black leading-snug">{item.title}</h4>
        <p className="text-xs text-black mt-1 leading-relaxed line-clamp-2">
          {item.subtitle}
        </p>

        {item.badge && (
          <div className="flex items-center gap-2 mt-2">
            {/* 🔴 Badge color changed to maroon */}
            <span className="bg-[#7b1e2b] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm">
              {item.badge}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 mt-1">
          {item.oldPrice && (
            <span className="text-xs text-red-500 line-through">
              ₹{item.oldPrice}
            </span>
          )}
          <span className="text-sm font-bold text-black">₹ {item.price}/-</span>
        </div>
      </div>

      <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden shadow-md">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      <div className="shrink-0 self-center">
        {isAdded ? (
          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-md shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <FaCheck className="text-[10px]" /> Added
          </button>
        ) : (
          <button
            onClick={() => onAdd(item)}
            // 🔴 Add button color changed to maroon
            className="flex items-center gap-1 bg-white hover:bg-[#7b1e2b] text-[#7b1e2b] hover:text-white border-2 border-[#7b1e2b] text-xs font-bold px-3 py-2 rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <FaPlus className="text-[10px]" /> Add
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= SUMMARY SEVA CARD ================= */
function SummarySevaCard({ item, isAdded, onAdd, onRemove }) {
  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-[#7b1e2b]/20 p-3 shadow-sm">
      <div className="shrink-0 w-14 h-14 rounded-md overflow-hidden border border-[#7b1e2b]/20">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h5 className="text-xs font-bold text-black leading-snug line-clamp-2">
          {item.title}
        </h5>
        <div className="flex items-center gap-1.5 mt-1">
          {item.oldPrice && (
            <span className="text-[10px] text-red-500 line-through">
              ₹{item.oldPrice}
            </span>
          )}
          <span className="text-xs font-bold text-black">₹{item.price}</span>
        </div>
      </div>

      <div className="shrink-0">
        {isAdded ? (
          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm active:scale-95 whitespace-nowrap"
          >
            <FaCheck className="text-[9px]" /> Added
          </button>
        ) : (
          <button
            onClick={() => onAdd(item)}
            // 🔴 Add button color changed to maroon
            className="flex items-center gap-1 bg-white hover:bg-[#7b1e2b] text-[#7b1e2b] hover:text-white border-2 border-[#7b1e2b] text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm active:scale-95 whitespace-nowrap"
          >
            <FaPlus className="text-[9px]" /> Add
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
function ChadhawaBookingForm() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const packageType = searchParams.get("package") || "single";

  const {
    singleChadhava: chadhawa,
    loading,
    error,
    fetchChadhavaById,
    bookChadhava,
  } = useChadhavaStore();

  const [whatsappConfirmed, setWhatsappConfirmed] = useState(null);
  const [devoteeName, setDevoteeName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gotra, setGotra] = useState("");
  const [showGotraList, setShowGotraList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addedSevas, setAddedSevas] = useState([]);

  const gotraRef = useRef(null);

  const gotraList = [
    "Kashyap", "Bharadwaj", "Gautam", "Vashishtha", "Vishvamitra",
    "Atri", "Jamadagni", "Agastya", "Bhrigu", "Angiras",
  ];

  // ⭐ API se fetch karo
  useEffect(() => {
    if (id && typeof fetchChadhavaById === "function") {
      fetchChadhavaById(id);
    }
  }, [id, fetchChadhavaById]);

  // Close gotra dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (gotraRef.current && !gotraRef.current.contains(e.target)) {
        setShowGotraList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⭐ Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6]">
        <div className="text-center">
          {/* 🔴 Loader color changed to maroon */}
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
          <p className="mt-3 text-[#7b1e2b] font-semibold">
            Loading Chadhawa...
          </p>
        </div>
      </div>
    );
  }

  // ⭐ Error
  if (error || !chadhawa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-[#7b1e2b]/20">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Chadhawa Not Found"}
          </h1>
          {/* 🔴 Go back button color changed to maroon */}
          <Link
            to="/chadhawa"
            className="inline-block bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  // ⭐ Selected package ka price
  const pricing = chadhawa.pricing || {};
  const selectedPrice = pricing[packageType] || chadhawa.price || 0;

  const discountedPrice = selectedPrice;
  const savings = 0;
  const discountPercent = 0;

  // Add / remove seva
  const handleAddSeva = (seva) => {
    setAddedSevas((prev) => [...prev, seva]);
  };

  const handleRemoveSeva = (sevaId) => {
    setAddedSevas((prev) => prev.filter((s) => s.id !== sevaId));
  };

  const isSevaAdded = (sevaId) => addedSevas.some((s) => s.id === sevaId);

  const sevaTotal = addedSevas.reduce((sum, s) => sum + s.price, 0);
  const grandTotal = discountedPrice + sevaTotal;

  // ⭐ Booking + Payment
  const handlePayDakshina = async () => {
    if (!whatsappConfirmed) {
      alert("Please confirm WhatsApp number");
      return;
    }
    if (!devoteeName.trim()) {
      alert("Please enter devotee name");
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      alert("Please enter valid 10-digit phone number");
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const bookingDate = new Date();
      bookingDate.setDate(bookingDate.getDate() + 15);

      const payload = {
        chadhavaId: chadhawa._id,
        names: [devoteeName],
        phoneNumber: phoneNumber,
        gotra: gotra || "Not Specified",
        date: bookingDate.toISOString().split("T")[0],
        slot: "morning",
        address: "N/A (Temple)",
        specialRequests: addedSevas.map((s) => s.title).join(", "),
      };

      const bookingResult = await bookChadhava(payload);

      if (!bookingResult.success) {
        alert("❌ " + bookingResult.error);
        return;
      }

      const bookingId = bookingResult.data._id;

      // ⭐ Checkout
      const checkoutResponse = await fetch(
        "https://shopbackendlive.onrender.com/api/chadhava/create-checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ bookingId }),
        }
      );

      const checkoutData = await checkoutResponse.json();

      if (checkoutData.success) {
        const { order, key } = checkoutData;

        const options = {
          key: key,
          amount: order.amount,
          currency: order.currency,
          name: "Chadhawa Offering",
          description: chadhawa.name,
          order_id: order.id,
          handler: async function (response) {
            const verifyRes = await fetch(
              "https://shopbackendlive.onrender.com/api/chadhava/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  bookingId: bookingId,
                }),
              }
            );

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("✅ Payment successful! Chadhawa booked.");
              navigate("/my-chadhawa-bookings");
            } else {
              alert("❌ Payment verification failed");
            }
          },
          prefill: {
            name: devoteeName,
            contact: phoneNumber,
          },
          // 🔴 Razorpay theme color changed to maroon
          theme: { color: "#7b1e2b" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("❌ " + (checkoutData.message || "Checkout failed"));
      }
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
      {/* BACK */}
      <div className="px-4 md:px-12 py-3 max-w-7xl mx-auto">
        <Link
          to={`/chadhawa/${id}`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#7b1e2b] font-semibold group"
        >
          <FaArrowLeft className="text-xs text-black group-hover:-translate-x-1 transition-transform" />
          Back to Chadhawa Details
        </Link>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
          {/* LEFT: FORM */}
          <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-[#7b1e2b]/20 shadow-md p-5 md:p-8">
            {/* WhatsApp */}
            <div className="pb-6 border-b border-[#7b1e2b]/20">
              <div className="flex items-center gap-3 mb-3">
                {/* 🔴 Icon bg changed to maroon */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] flex items-center justify-center shadow-md shrink-0">
                  <FaPhone className="text-white text-xs" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">
                  Confirm WhatsApp Number
                </h3>
              </div>
              <p className="text-sm text-black mb-5">
                Is{" "}
                <span className="font-bold text-black">+91 98708 87237</span>{" "}
                your WhatsApp number as well?
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWhatsappConfirmed(true)}
                  // 🔴 Active button changed to maroon
                  className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    whatsappConfirmed === true
                      ? "bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white shadow-md"
                      : "bg-white border-2 border-[#7b1e2b]/20 text-gray-700"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setWhatsappConfirmed(false)}
                  className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    whatsappConfirmed === false
                      ? "bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white shadow-md"
                      : "bg-white border-2 border-[#7b1e2b]/20 text-gray-700"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Devotee */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] flex items-center justify-center shadow-md shrink-0">
                  <FaUser className="text-white text-xs" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">
                  Enter Devotee Details
                </h3>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                    Devotee Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={devoteeName}
                      onChange={(e) => setDevoteeName(e.target.value)}
                      placeholder="Enter name"
                      className="w-full border-2 border-[#7b1e2b]/20 rounded-md px-4 py-3.5 pr-10 text-sm font-semibold text-[#7b1e2b] bg-white focus:outline-none focus:border-[#7b1e2b]"
                    />
                    {devoteeName.trim() && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7b1e2b] text-base" />
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#7b1e2b] uppercase tracking-wide mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full border-2 border-[#7b1e2b]/20 rounded-md px-4 py-3.5 text-sm font-semibold text-[#7b1e2b] bg-white focus:outline-none focus:border-[#7b1e2b]"
                  />
                </div>

                {/* Gotra */}
                <div ref={gotraRef}>
                  <label className="block text-xs font-bold text-[#7b1e2b] uppercase tracking-wide mb-2">
                    Gotra (if known)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={gotra}
                      onChange={(e) => setGotra(e.target.value)}
                      onFocus={() => setShowGotraList(true)}
                      placeholder="Enter gotra"
                      className="w-full border-2 border-[#7b1e2b]/20 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7b1e2b] bg-white focus:outline-none focus:border-[#7b1e2b]"
                    />
                    <button
                      onClick={() => setShowGotraList(!showGotraList)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      type="button"
                    >
                      <FaChevronDown
                        className={`text-sm transition-transform ${
                          showGotraList ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {showGotraList && (
                    <div className="relative">
                      <div className="absolute top-2 left-0 right-0 bg-white border-2 border-[#7b1e2b]/20 rounded-lg shadow-xl max-h-56 overflow-y-auto z-30">
                        {gotraList
                          .filter((g) =>
                            g.toLowerCase().includes(gotra.toLowerCase())
                          )
                          .map((g) => (
                            <div
                              key={g}
                              onClick={() => {
                                setGotra(g);
                                setShowGotraList(false);
                              }}
                              // 🔴 Selected color changed to maroon
                              className={`px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-[#7b1e2b]/10 ${
                                gotra === g
                                  ? "bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white"
                                  : "text-gray-700"
                              }`}
                            >
                              {g}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="mt-8 border border-[#7b1e2b]/20 rounded-lg p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] flex items-center justify-center shrink-0">
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs font-bold text-black">
                  100% Authentic Chadhawa
                </p>
                <p className="text-[11px] text-black">
                  Offered by verified temple priests
                </p>
              </div>
            </div>

            {/* SEVA SECTION */}
            <div className="mt-8">
              <h3 className="text-base md:text-lg font-bold text-black mb-1">
                Add Seva &amp; Bhet to your Chadhawa
              </h3>
              <p className="text-xs text-black mb-2">
                Enhance your offering with these additional temple sevas.
              </p>

              <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border border-[#7b1e2b]/20 px-4 py-2">
                {sevaList.map((item) => (
                  <SevaCard
                    key={item.id}
                    item={item}
                    isAdded={isSevaAdded(item.id)}
                    onAdd={handleAddSeva}
                    onRemove={handleRemoveSeva}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-[#7b1e2b]/20 shadow-md overflow-hidden">
              {/* Chadhawa Info */}
              <div className="p-5 flex items-start gap-3 border-b border-[#7b1e2b]/20">
                <img
                  src={
                    chadhawa.image && chadhawa.image.trim() !== ""
                      ? chadhawa.image
                      : "https://via.placeholder.com/64"
                  }
                  alt={chadhawa.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 shadow-md"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#7b1e2b] leading-snug line-clamp-2">
                    {chadhawa.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 capitalize">
                    {packageType} Package
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="p-5 border-b border-[#7b1e2b]/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7b1e2b]">
                    Total Amount
                  </span>
                  <span className="text-xl font-bold text-[#7b1e2b]">
                    ₹{discountedPrice}
                  </span>
                </div>
              </div>

              {/* Seva Summary */}
              <div className="p-5 border-b border-[#7b1e2b]/20">
                <h3 className="text-sm font-bold text-[#7b1e2b] mb-1">
                  Add Seva &amp; Bhet
                </h3>

                <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                  {sevaList.map((item) => (
                    <SummarySevaCard
                      key={item.id}
                      item={item}
                      isAdded={isSevaAdded(item.id)}
                      onAdd={handleAddSeva}
                      onRemove={handleRemoveSeva}
                    />
                  ))}
                </div>
              </div>

              {/* Grand Total */}
              {addedSevas.length > 0 && (
                <div className="p-5 border-b border-[#7b1e2b]/20">
                  <p className="text-[11px] font-bold text-[#7b1e2b] uppercase mb-2">
                    Added Sevas ({addedSevas.length})
                  </p>
                  <div className="space-y-1.5">
                    {addedSevas.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-gray-700 truncate pr-2">
                          {s.title}
                        </span>
                        <span className="font-semibold text-[#7b1e2b]">
                          ₹{s.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#7b1e2b]/20 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#7b1e2b]">
                      Grand Total
                    </span>
                    <span className="text-lg font-bold text-[#7b1e2b]">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>
              )}

              {/* Pay Button */}
              <div className="p-5">
                <button
                  onClick={handlePayDakshina}
                  disabled={isLoading}
                  // 🔴 Pay button changed to maroon
                  className={`w-full py-3 rounded-md text-base font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                    isLoading
                      ? "bg-gray-300 text-gray-600 cursor-wait"
                      : "bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white hover:scale-[1.02] cursor-pointer"
                  }`}
                >
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <FaGift className="text-sm" />
                      Pay ₹{grandTotal} & Offer
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <FaLock className="text-[10px] text-black" />
                  <p className="text-[10px] text-black font-semibold">
                    100% Secure Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChadhawaBookingForm;