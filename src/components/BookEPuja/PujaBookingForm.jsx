
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//     FaCheckCircle,
//     FaChevronDown,
//     FaArrowLeft,
//     FaLock,
//     FaClock,
//     FaCheck,
//     FaUser,
//     FaPhone,
// } from "react-icons/fa";
// import  pujaList from "./UpcomingPujasSection";

// /* ================= STEPS BAR ================= */
// function StepsBar({ currentStep }) {
//     const steps = ["Login", "Book Pooja", "Puja Details", "Payment", "Puja Wish"];

//     return (
//         <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-b border-amber-200/40 py-4 md:py-5">
//             <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
//                 {steps.map((step, index) => {
//                     const stepNumber = index + 1;
//                     const isCompleted = stepNumber < currentStep;
//                     const isActive = stepNumber === currentStep;

//                     return (
//                         <React.Fragment key={step}>
//                             <div className="flex flex-col items-center gap-1.5 shrink-0">
//                                 <div
//                                     className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
//                                         isCompleted || isActive
//                                             ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
//                                             : "bg-white border-2 border-amber-200 text-gray-400"
//                                     } ${isActive ? "ring-4 ring-amber-200/50 scale-110" : ""}`}
//                                 >
//                                     {isCompleted ? (
//                                         <FaCheck className="text-xs md:text-sm" />
//                                     ) : (
//                                         stepNumber
//                                     )}
//                                 </div>
//                                 <span
//                                     className={`text-[10px] md:text-xs font-bold whitespace-nowrap ${
//                                         isActive
//                                             ? "text-[#c27803]"
//                                             : isCompleted
//                                             ? "text-[#df972b]"
//                                             : "text-gray-400"
//                                     }`}
//                                 >
//                                     {step}
//                                 </span>
//                             </div>

//                             {index < steps.length - 1 && (
//                                 <div className="flex-1 h-0.5 mx-1 md:mx-2 bg-amber-200 relative overflow-hidden">
//                                     <div
//                                         className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#df972b] to-[#c27803] transition-all duration-500 ${
//                                             stepNumber < currentStep ? "w-full" : "w-0"
//                                         }`}
//                                     ></div>
//                                 </div>
//                             )}
//                         </React.Fragment>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// /* ================= MAIN PAGE ================= */
// function PujaBookingForm() {
//     const { id } = useParams();
//     const puja = pujaList.find((p) => p.id === Number(id));

//     const [whatsappConfirmed, setWhatsappConfirmed] = useState(null);
//     const [devoteeName, setDevoteeName] = useState("");
//     const [gotra, setGotra] = useState("");
//     const [showGotraList, setShowGotraList] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const gotraRef = useRef(null);

//     const gotraList = [
//         "Kashyap",
//         "Bharadwaj",
//         "Gautam",
//         "Vashishtha",
//         "Vishvamitra",
//         "Atri",
//         "Jamadagni",
//         "Agastya",
//         "Bhrigu",
//         "Angiras",
//     ];

//     // ✅ Close dropdown on outside click
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (gotraRef.current && !gotraRef.current.contains(e.target)) {
//                 setShowGotraList(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     if (!puja) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
//                 <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
//                     <h1 className="text-2xl font-bold text-gray-800 mb-4">
//                         Puja Not Found
//                     </h1>
//                     <Link
//                         to="/pooja-booking"
//                         className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
//                     >
//                         Go Back
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const price = puja.price || 2100;
//     const discountedPrice = 61;
//     const savings = price - discountedPrice;
//     const discountPercent = Math.round((savings / price) * 100);

//     const handlePayDakshina = () => {
//         if (!whatsappConfirmed) {
//             alert("Please confirm WhatsApp number");
//             return;
//         }
//         if (!devoteeName.trim() || !gotra.trim()) {
//             alert("Please fill devotee details");
//             return;
//         }

//         setIsLoading(true);
//         setTimeout(() => {
//             alert(
//                 `✅ Proceeding to Payment\n\nPuja: ${puja.title}\nDevotee: ${devoteeName}\nGotra: ${gotra}\nAmount: ₹${discountedPrice}`
//             );
//             setIsLoading(false);
//         }, 800);
//     };

//     return (
//         <div className="w-full min-h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
//             {/* ================= BACK BUTTON ================= */}
//             <div className="px-4 md:px-12 py-3 max-w-7xl mx-auto">
//                 <Link
//                     to={`/pooja/${id}`}
//                     className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#c27803] transition-all font-semibold group"
//                 >
//                     <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
//                     Back to Puja Details
//                 </Link>
//             </div>

//             {/* ================= STEPS BAR ================= */}
//             <StepsBar currentStep={3} />

//             {/* ================= MAIN CONTENT ================= */}
//             <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">

//                     {/* ================= LEFT: FORM CARD ================= */}
//                     <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md p-5 md:p-8">

//                         {/* ===== WhatsApp Confirm Section ===== */}
//                         <div className="pb-6 border-b border-amber-200/40">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
//                                     <FaPhone className="text-white text-xs" />
//                                 </div>
//                                 <h3 className="text-base md:text-lg font-bold text-[#7a1c1c]">
//                                     Confirm WhatsApp Number
//                                 </h3>
//                             </div>
//                             <p className="text-sm text-gray-600 mb-5">
//                                 Is{" "}
//                                 <span className="font-bold text-[#7a1c1c]">
//                                     +91 98708 87237
//                                 </span>{" "}
//                                 your WhatsApp number as well?
//                             </p>

//                             <div className="flex items-center gap-3">
//                                 <button
//                                     onClick={() => setWhatsappConfirmed(true)}
//                                     className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 active:scale-95 ${
//                                         whatsappConfirmed === true
//                                             ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
//                                             : "bg-white border-2 border-amber-200 text-gray-700 hover:border-[#df972b] hover:text-[#c27803]"
//                                     }`}
//                                 >
//                                     Yes
//                                 </button>
//                                 <button
//                                     onClick={() => setWhatsappConfirmed(false)}
//                                     className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 active:scale-95 ${
//                                         whatsappConfirmed === false
//                                             ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
//                                             : "bg-white border-2 border-amber-200 text-gray-700 hover:border-[#df972b] hover:text-[#c27803]"
//                                     }`}
//                                 >
//                                     No
//                                 </button>
//                             </div>
//                         </div>

//                         {/* ===== Devotee Details Section ===== */}
//                         <div className="pt-6">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
//                                     <FaUser className="text-white text-xs" />
//                                 </div>
//                                 <h3 className="text-base md:text-lg font-bold text-[#7a1c1c]">
//                                     Enter Devotee Details
//                                 </h3>
//                             </div>
//                             <p className="text-sm text-black mb-6">
//                                 Puja will be done by these names &amp; gotra.
//                                 <br />
//                                 <span className="text-xs text-black">
//                                     Add upto 1 members
//                                 </span>
//                             </p>

//                             <div className="space-y-5">
//                                 {/* Devotee Name */}
//                                 <div>
//                                     <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
//                                         Devotee Name
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="text"
//                                             value={devoteeName}
//                                             onChange={(e) =>
//                                                 setDevoteeName(e.target.value)
//                                             }
//                                             placeholder="Enter name"
//                                             className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b] focus:shadow-md transition-all placeholder:text-gray-400 placeholder:font-normal"
//                                         />
//                                         {devoteeName.trim() && (
//                                             <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Gotra */}
//                                 <div ref={gotraRef}>
//                                     <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
//                                         Gotra (if known)
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="text"
//                                             value={gotra}
//                                             onChange={(e) =>
//                                                 setGotra(e.target.value)
//                                             }
//                                             onFocus={() =>
//                                                 setShowGotraList(true)
//                                             }
//                                             placeholder="Enter gotra"
//                                             className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b] focus:shadow-md transition-all placeholder:text-gray-400 placeholder:font-normal"
//                                         />
//                                         {gotra.trim() ? (
//                                             <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
//                                         ) : (
//                                             <button
//                                                 onClick={() =>
//                                                     setShowGotraList(
//                                                         !showGotraList
//                                                     )
//                                                 }
//                                                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c27803] transition-colors"
//                                                 type="button"
//                                             >
//                                                 <FaChevronDown
//                                                     className={`text-sm transition-transform ${
//                                                         showGotraList
//                                                             ? "rotate-180"
//                                                             : ""
//                                                     }`}
//                                                 />
//                                             </button>
//                                         )}
//                                     </div>

//                                     {/* Gotra Dropdown */}
//                                     {showGotraList && (
//                                         <div className="relative">
//                                             <div className="absolute top-2 left-0 right-0 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-56 overflow-y-auto z-30">
//                                                 {gotraList
//                                                     .filter((g) =>
//                                                         g.toLowerCase().includes(
//                                                             gotra.toLowerCase()
//                                                         )
//                                                     )
//                                                     .map((g) => (
//                                                         <div
//                                                             key={g}
//                                                             onClick={() => {
//                                                                 setGotra(g);
//                                                                 setShowGotraList(
//                                                                     false
//                                                                 );
//                                                             }}
//                                                             className={`px-4 py-3 text-sm font-semibold cursor-pointer transition-all flex items-center justify-between ${
//                                                                 gotra === g
//                                                                     ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
//                                                                     : "text-gray-700 hover:bg-amber-50 hover:text-[#c27803]"
//                                                             }`}
//                                                         >
//                                                             {g}
//                                                             {gotra === g && (
//                                                                 <FaCheck className="text-xs" />
//                                                             )}
//                                                         </div>
//                                                     ))}
//                                                 {gotraList.filter((g) =>
//                                                     g.toLowerCase().includes(
//                                                         gotra.toLowerCase()
//                                                     )
//                                                 ).length === 0 && (
//                                                     <div className="px-4 py-3 text-sm text-gray-400 text-center">
//                                                         No matching gotra
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Trust Badge */}
//                         <div className="mt-8 border border-amber-200/60 rounded-lg p-3 flex items-center gap-3">
//                             <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shrink-0">
//                                 <FaCheckCircle className="text-white text-sm" />
//                             </div>
//                             <div>
//                                 <p className="text-xs font-bold text-black">
//                                     100% Authentic Puja
//                                 </p>
//                                 <p className="text-[11px] text-black">
//                                     Performed by verified Vedic pandits
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ================= RIGHT: ORDER SUMMARY ================= */}
//                     <div className="lg:sticky lg:top-4 lg:self-start">
//                         <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md overflow-hidden">

//                             {/* Puja Info */}
//                             <div className="p-5 flex items-start gap-3 border-b border-amber-200/40">
//                                 <img
//                                     src={puja.image}
//                                     alt={puja.title}
//                                     className="w-16 h-16 rounded-lg object-cover shrink-0 shadow-md"
//                                 />
//                                 <div className="min-w-0 flex-1">
//                                     <h4 className="text-sm font-bold text-[#7a1c1c] leading-snug line-clamp-2">
//                                         {puja.title}
//                                     </h4>
//                                     <p className="text-xs text-gray-500 mt-1">
//                                         Arghya Daan
//                                     </p>
//                                     <div className="inline-flex items-center gap-1 mt-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
//                                         <FaClock className="text-[9px]" />
//                                         Only 25 slots available
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Dakshina Details */}
//                             <div className="p-5 border-b border-amber-200/40">
//                                 <div className="flex items-center justify-between mb-3">
//                                     <div className="flex items-center gap-2">
//                                         <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center">
//                                             <span className="text-white text-xs font-bold">
//                                                 ₹
//                                             </span>
//                                         </div>
//                                         <div>
//                                             <span className="text-sm font-bold text-[#7a1c1c] block">
//                                                 Total Dakshina
//                                             </span>
//                                             <span className="text-[10px] text-gray-400 line-through">
//                                                 ₹{price}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <span className="text-xl font-bold text-[#7a1c1c]">
//                                         ₹{discountedPrice}
//                                     </span>
//                                 </div>

//                                 <div className="bg-white border border-green-200 rounded-lg px-3 py-2 flex items-center gap-2">
//                                     <FaCheckCircle className="text-green-600 text-xs shrink-0" />
//                                     <span className="text-xs text-green-700 font-bold">
//                                         ₹{savings} saved ({discountPercent}%
//                                         OFF)
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Pay Dakshina Button */}
//                             <div className="p-5">
//                                 <button
//                                     onClick={handlePayDakshina}
//                                     disabled={isLoading}
//                                     className={`w-full py-2 rounded-md text-base font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
//                                         isLoading
//                                             ? "bg-gray-300 text-gray-600 cursor-wait"
//                                             : "bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
//                                     }`}
//                                 >
//                                     {isLoading ? (
//                                         <>
//                                             <div className="w-3 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                             Processing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             Pay Poja
//                                         </>
//                                     )}
//                                 </button>

//                                 <div className="flex items-center justify-center gap-1.5 mt-4">
//                                     <FaLock className="text-[10px] text-black" />
//                                     <p className="text-[10px] text-black font-semibold">
//                                         100% Secure Payment
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PujaBookingForm;


import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaChevronDown,
  FaArrowLeft,
  FaLock,
  FaClock,
  FaCheck,
  FaUser,
  FaPhone,
} from "react-icons/fa";

/* ================= API URL ================= */
const API_BASE_URL = "https://shopbackendlive.onrender.com/api";
// Production: "https://shopbackendlive.onrender.com/api"

/* ================= STEPS BAR ================= */
function StepsBar({ currentStep }) {
  const steps = ["Login", "Book Pooja", "Puja Details", "Payment", "Puja Wish"];

  return (
    <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-b border-amber-200/40 py-4 md:py-5">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                    isCompleted || isActive
                      ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
                      : "bg-white border-2 border-amber-200 text-gray-400"
                  } ${isActive ? "ring-4 ring-amber-200/50 scale-110" : ""}`}
                >
                  {isCompleted ? <FaCheck className="text-xs md:text-sm" /> : stepNumber}
                </div>
                <span
                  className={`text-[10px] md:text-xs font-bold whitespace-nowrap ${
                    isActive
                      ? "text-[#c27803]"
                      : isCompleted
                      ? "text-[#df972b]"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-1 md:mx-2 bg-amber-200 relative overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#df972b] to-[#c27803] transition-all duration-500 ${
                      stepNumber < currentStep ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
function PujaBookingForm() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // ⭐ Selected package URL se
  const packageType = searchParams.get("package") || "single";

  const [puja, setPuja] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [whatsappConfirmed, setWhatsappConfirmed] = useState(null);
  const [devoteeName, setDevoteeName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gotra, setGotra] = useState("");
  const [showGotraList, setShowGotraList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const gotraRef = useRef(null);

  const gotraList = [
    "Kashyap",
    "Bharadwaj",
    "Gautam",
    "Vashishtha",
    "Vishvamitra",
    "Atri",
    "Jamadagni",
    "Agastya",
    "Bhrigu",
    "Angiras",
  ];

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

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
          <p className="mt-3 text-[#7a1c1c] font-semibold">Loading puja...</p>
        </div>
      </div>
    );
  }

  // Error
  if (error || !puja) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Puja Not Found"}
          </h1>
          <Link
            to="/pooja-booking"
            className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  // ⭐ Selected package ka price
  const pricing = puja.pricing || {};
  const selectedPrice = pricing[packageType] || puja.price || 0;

  // ⭐ Booking submit karo
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
      // ⭐ Token lo
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      // ⭐ Booking API call
      const bookingDate = new Date();
      bookingDate.setDate(bookingDate.getDate() + 15); // 15 din baad

      const payload = {
        poojaId: puja._id,
        packageType: packageType,
        names: [devoteeName],
        phoneNumber: phoneNumber,
        gotra: gotra || "Not Specified",
        pujaType: puja.pujaType === "Physical" ? "Physical" : "live_virtual_puja",
        dateOfPooja: bookingDate.toISOString().split("T")[0],
        slot: "morning",
      };

      console.log("📦 Booking payload:", payload);

      const response = await fetch(`${API_BASE_URL}/bookpooja`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("✅ Booking response:", data);

      if (data.success) {
        // ⭐ Booking created — checkout pe jao
        const bookingId = data.data._id;

        // ⭐ Checkout API call
        const checkoutResponse = await fetch(
          `${API_BASE_URL}/create-checkout`,
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
        console.log("✅ Checkout response:", checkoutData);

        if (checkoutData.success) {
          // ⭐ Razorpay popup kholo
          const { order, key } = checkoutData;

          const options = {
            key: key,
            amount: order.amount,
            currency: order.currency,
            name: "Pooja Booking",
            description: puja.PujaName,
            order_id: order.id,
            handler: async function (response) {
              // ⭐ Verify payment
              const verifyRes = await fetch(
                `${API_BASE_URL}/verify-payment`,
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
              console.log("✅ Verify response:", verifyData);

              if (verifyData.success) {
                alert("✅ Payment successful! Booking confirmed.");
                navigate("/my-bookings");
              } else {
                alert("❌ Payment verification failed");
              }
            },
            prefill: {
              name: devoteeName,
              contact: phoneNumber,
            },
            theme: { color: "#df972b" },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          alert("❌ " + (checkoutData.message || "Checkout failed"));
        }
      } else {
        alert("❌ " + (data.message || "Booking failed"));
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
      {/* BACK BUTTON */}
      <div className="px-4 md:px-12 py-3 max-w-7xl mx-auto">
        <Link
          to={`/pooja/${id}`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#c27803] transition-all font-semibold group"
        >
          <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
          Back to Puja Details
        </Link>
      </div>

      <StepsBar currentStep={3} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
          {/* LEFT: FORM */}
          <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md p-5 md:p-8">
            {/* WhatsApp Confirm */}
            <div className="pb-6 border-b border-amber-200/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
                  <FaPhone className="text-white text-xs" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#7a1c1c]">
                  Confirm WhatsApp Number
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-5">
                Is <span className="font-bold text-[#7a1c1c]">+91 98708 87237</span>{" "}
                your WhatsApp number as well?
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWhatsappConfirmed(true)}
                  className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    whatsappConfirmed === true
                      ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
                      : "bg-white border-2 border-amber-200 text-gray-700"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setWhatsappConfirmed(false)}
                  className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    whatsappConfirmed === false
                      ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
                      : "bg-white border-2 border-amber-200 text-gray-700"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Devotee Details */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
                  <FaUser className="text-white text-xs" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#7a1c1c]">
                  Enter Devotee Details
                </h3>
              </div>

              <div className="space-y-5">
                {/* Devotee Name */}
                <div>
                  <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
                    Devotee Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={devoteeName}
                      onChange={(e) => setDevoteeName(e.target.value)}
                      placeholder="Enter name"
                      className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
                    />
                    {devoteeName.trim() && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
                  />
                </div>

                {/* Gotra */}
                <div ref={gotraRef}>
                  <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
                    Gotra (if known)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={gotra}
                      onChange={(e) => setGotra(e.target.value)}
                      onFocus={() => setShowGotraList(true)}
                      placeholder="Enter gotra"
                      className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b]"
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
                      <div className="absolute top-2 left-0 right-0 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-56 overflow-y-auto z-30">
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
                              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-amber-50"
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
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md overflow-hidden">
              {/* Puja Info */}
              <div className="p-5 flex items-start gap-3 border-b border-amber-200/40">
                <img
                  src={puja.image || "https://via.placeholder.com/64"}
                  alt={puja.PujaName}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#7a1c1c] leading-snug line-clamp-2">
                    {puja.PujaName}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {packageType.charAt(0).toUpperCase() + packageType.slice(1)} Package
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="p-5 border-b border-amber-200/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7a1c1c]">
                    Total Amount
                  </span>
                  <span className="text-xl font-bold text-[#7a1c1c]">
                    ₹{selectedPrice}
                  </span>
                </div>
              </div>

              {/* Pay Button */}
              <div className="p-5">
                <button
                  onClick={handlePayDakshina}
                  disabled={isLoading}
                  className={`w-full py-3 rounded-md text-base font-bold shadow-md transition-all ${
                    isLoading
                      ? "bg-gray-300 text-gray-600 cursor-wait"
                      : "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white hover:scale-[1.02] cursor-pointer"
                  }`}
                >
                  {isLoading ? "Processing..." : `Pay ₹${selectedPrice}`}
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

export default PujaBookingForm;