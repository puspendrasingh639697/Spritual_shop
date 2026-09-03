// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// // Static Data (Backend ke bina kaam chalega)
// const STATIC_PANDIT_DATA = {
//   _id: "pandit_123",
//   name: "Pandit Rajesh Sharma",
//   image: { imageurl: "https://via.placeholder.com/150" },
//   Skills: ["Vedic Astrology", "Havan", "Graha Shanti", "Muhurat"],
//   languages: ["Hindi", "Sanskrit", "English"],
//   description: "Experienced Vedic priest with 12+ years of expertise in performing various poojas, havans, and rituals. Specialized in Graha Shanti, Vastu Shanti, and personalized muhurat consultations.",
//   rating: 4.83,
//   totalReviews: 5
// };

// const STATIC_MATCHED_SLOTS = [
//   { _id: "slot_1", from: "06:00 AM", to: "08:00 AM", holdUntil: null },
//   { _id: "slot_2", from: "08:30 AM", to: "10:30 AM", holdUntil: null },
//   { _id: "slot_3", from: "11:00 AM", to: "01:00 PM", holdUntil: null },
// ];

// const STATIC_UNMATCHED_SLOTS = [
//   { _id: "slot_4", from: "02:00 PM", to: "04:00 PM", holdUntil: null },
//   { _id: "slot_5", from: "04:30 PM", to: "06:30 PM", holdUntil: null },
//   { _id: "slot_6", from: "07:00 PM", to: "09:00 PM", holdUntil: null },
// ];

// // Static Reviews Data
// const STATIC_REVIEWS = [
//   { name: "Dixon", rating: 5, comment: "Amazing advice and clear ritual guidance! Highly recommended." },
//   { name: "Maverick", rating: 4, comment: "Very knowledgeable and patient. Explained everything in detail." },
//   { name: "Veronica", rating: 5, comment: "The pooja was performed with great devotion. Felt very positive energy." },
//   { name: "Sneha", rating: 4, comment: "Good experience. Will definitely book again for future rituals." },
// ];

// const PanditProfile = () => {
//   const navigate = useNavigate();
//   const { slug } = useParams();

//   // State Management
//   const [loading, setLoading] = useState(false);
//   const [slotLoader, setSlotLoader] = useState(false);
//   const [panditData, setPanditData] = useState({});
//   const [matchedSlots, setMatchedSlots] = useState([]);
//   const [unmatchedSlots, setUnmatchedSlots] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [error, setError] = useState({ message: "", type: "" });

//   // Safe parsing of localStorage
//   const getPoojaDetails = () => {
//     try {
//       const data = localStorage.getItem("poojaDetails");
//       return data ? JSON.parse(data) : {};
//     } catch (e) {
//       return {};
//     }
//   };

//   const poojaDetails = getPoojaDetails();
//   const poojaid = poojaDetails?.poojaid;

//   // Load Static Data (Backend Call Simulate)
//   const fetchPanditData = async () => {
//     setLoading(true);
//     try {
//       // Simulating API delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       // Using Static Data
//       setPanditData(STATIC_PANDIT_DATA);
//       setMatchedSlots(STATIC_MATCHED_SLOTS);
//       setUnmatchedSlots(STATIC_UNMATCHED_SLOTS);
      
//       // Check if any slot is already held (for demo, we'll set first slot as held)
//       // You can modify this logic as needed
//     } catch (error) {
//       console.error("Error fetching pandit data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Simulate loading slots
//   async function loadSlots() {
//     setSlotLoader(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 300));
//       setMatchedSlots(STATIC_MATCHED_SLOTS);
//       setUnmatchedSlots(STATIC_UNMATCHED_SLOTS);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setSlotLoader(false);
//     }
//   }

//   // Simulate slot hold
//   async function slotHolder(slotId) {
//     setSlotLoader(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       // Simulate: Check if slot is already held by someone else
//       const isSlotHeld = slotId === "slot_2"; // For demo, slot_2 is already held
      
//       if (isSlotHeld) {
//         setError({
//           message: "This slot is already held by someone else, please select another slot",
//           type: "info",
//         });
//         return;
//       }
      
//       setError({ message: "", type: "" });
//       setSelectedSlotId(slotId);
      
//       // Update slots to show selected slot as held
//       const updateSlots = (slots) =>
//         slots.map((slot) =>
//           slot._id === slotId ? { ...slot, holdUntil: new Date().toISOString() } : slot
//         );
      
//       setMatchedSlots(updateSlots);
//       setUnmatchedSlots(updateSlots);
      
//     } catch (error) {
//       console.error("Error holding slot:", error);
//       setError({
//         message: "This slot is already held by someone else, please select another slot",
//         type: "info",
//       });
//     } finally {
//       setSlotLoader(false);
//     }
//   }

//   // Simulate slot unhold
//   async function handleSlotUnhold() {
//     if (selectedSlotId) {
//       try {
//         await new Promise(resolve => setTimeout(resolve, 300));
//         setSelectedSlotId(null);
//         loadSlots();
//       } catch (error) {
//         console.log("Error unholding slot:", error);
//       }
//     }
//   }

//   useEffect(() => {
//     fetchPanditData();
//   }, [slug]);

//   // Alert Card Component (Inlined)
//   const AlertCard = ({ message, type, onClose }) => {
//     const bgColor = type === "info" ? "bg-blue-50 border-blue-200" : "bg-red-50 border-red-200";
//     const textColor = type === "info" ? "text-blue-700" : "text-red-700";
    
//     if (!message) return null;
    
//     return (
//       <div className={`flex items-center justify-between p-3 rounded-xl border ${bgColor} ${textColor} text-sm`}>
//         <span>{message}</span>
//         {onClose && (
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-bold">
//             ✕
//           </button>
//         )}
//       </div>
//     );
//   };

//   // Review Star Component
//   const renderStars = (rating) => {
//     return "⭐".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "⭐" : "");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       <div className="container mx-auto px-4 py-8 pt-24 max-w-6xl">
        
//         {/* Loading State */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
//           </div>
//         ) : (
//           <>
//             {/* Profile Card Header */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
//               <img
//                 src={panditData?.image?.imageurl || "https://via.placeholder.com/150"}
//                 alt={panditData?.name || "Pandit"}
//                 className="w-40 h-40 object-cover rounded-xl shadow-md border-2 border-amber-100"
//               />
              
//               <div className="flex-1 text-center md:text-left">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <h1 className="text-3xl font-bold text-gray-900">{panditData?.name}</h1>
//                   <div className="inline-flex items-center justify-center bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-inner">
//                     ⭐ {panditData?.rating || 4.83} / 5.0 Rating
//                   </div>
//                 </div>

//                 <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
//                   <span className="font-semibold text-gray-900">Skills:</span>{" "}
//                   {panditData?.Skills?.join(", ") || "General Pooja, Vedic Rituals"}
//                 </p>
//                 <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
//                   <span className="font-semibold text-gray-900">Languages:</span>{" "}
//                   {panditData?.languages?.join(", ") || "Hindi, Sanskrit"}
//                 </p>

//                 <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 border-t border-gray-100">
//                   <div>
//                     <p className="text-2xl font-bold text-amber-600">12+</p>
//                     <p className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</p>
//                   </div>
//                   <button
//                     onClick={() => setShowModal(true)}
//                     className="ml-auto bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer"
//                   >
//                     Book Pooja Slot
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* About Section */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 About <span className="text-amber-500">{panditData?.name}</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
//                 {panditData?.description || "No description provided."}
//               </p>
//             </div>

//             {/* Reviews & Similar Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
//               {/* Ratings & Assistant Card */}
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-900 mb-6">Rating & Reviews Breakdown</h2>
//                   <div className="flex items-center gap-8 mb-6">
//                     <div className="text-center">
//                       <p className="text-4xl font-extrabold text-gray-900">{panditData?.rating || 4.83}</p>
//                       <span className="text-xs text-gray-400">based on {panditData?.totalReviews || 5} reviews</span>
//                     </div>
//                     <div className="flex-1 space-y-2">
//                       {[5, 4, 3, 2, 1].map((star) => (
//                         <div key={star} className="flex items-center gap-2 text-xs">
//                           <span className="w-3 font-medium">{star}</span>
//                           <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
//                             <div
//                               className="bg-amber-400 h-full rounded-full"
//                               style={{ width: `${star * 20}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition cursor-pointer mt-4">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xl">🤖</span>
//                     <span className="text-sm font-medium text-gray-800">Chat with Assistant?</span>
//                   </div>
//                   <span className="text-gray-400 font-bold">&gt;</span>
//                 </div>
//               </div>

//               {/* User Reviews List */}
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//                 <h2 className="text-lg font-bold text-gray-900 mb-4">Users Review</h2>
//                 <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
//                   {STATIC_REVIEWS.map((review, idx) => (
//                     <div key={idx} className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl">
//                       <div className="flex items-center gap-3">
//                         <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold border">
//                           {review.name.charAt(0)}
//                         </div>
//                         <div>
//                           <p className="font-semibold text-sm text-gray-900">{review.name}</p>
//                           <p className="text-xs text-amber-500 font-medium">{renderStars(review.rating)}</p>
//                         </div>
//                       </div>
//                       <p className="text-xs text-gray-600 mt-2">
//                         {review.comment}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </>
//         )}
//       </div>

//       {/* Modal for Slot Selection */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-3xl relative max-h-[90vh] flex flex-col">
//             <button
//               className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-600 transition"
//               onClick={() => {
//                 setShowModal(false);
//                 handleSlotUnhold();
//               }}
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
//               Select Pooja Slot
//             </h2>
//             <p className="text-center text-xs text-gray-500 mb-6">Choose your preferred muhurat or custom time slot</p>

//             <div className="mb-4">
//               {error.message && (
//                 <AlertCard
//                   message={error.message}
//                   type={error.type}
//                   onClose={() => setError({ message: "", type: "" })}
//                 />
//               )}
//             </div>

//             {slotLoader ? (
//               <div className="flex justify-center items-center w-full h-48">
//                 <div className="animate-spin rounded-full h-10 w-10 border-4 border-amber-500 border-t-transparent"></div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-1 flex-1">
                
//                 {/* Muhurat Slots */}
//                 <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
//                   <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">
//                     🌿 Muhurat Slots
//                   </h3>
//                   {matchedSlots.length > 0 ? (
//                     <div className="flex flex-wrap gap-2">
//                       {matchedSlots.map((slot) => (
//                         <button
//                           key={slot._id}
//                           disabled={slotLoader || slot?.holdUntil}
//                           className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
//                             selectedSlotId === slot._id
//                               ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
//                               : slot?.holdUntil
//                               ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
//                               : "bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100"
//                           }`}
//                           onClick={() => {
//                             if (slot?.holdUntil) return;
//                             slotHolder(slot._id);
//                           }}
//                         >
//                           {slot.from} - {slot.to}
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-xs text-gray-400 italic">No matched muhurat slots available.</p>
//                   )}
//                 </div>

//                 {/* Other Slots */}
//                 <div className="bg-rose-50/40 p-4 rounded-2xl border border-rose-100">
//                   <h3 className="text-sm font-bold text-rose-700 uppercase tracking-wider mb-3">
//                     ⏰ Other Available Slots
//                   </h3>
//                   {unmatchedSlots.length > 0 ? (
//                     <div className="flex flex-wrap gap-2">
//                       {unmatchedSlots.map((slot) => (
//                         <button
//                           key={slot._id}
//                           disabled={slotLoader || slot?.holdUntil}
//                           className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
//                             selectedSlotId === slot._id
//                               ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/20"
//                               : slot?.holdUntil
//                               ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
//                               : "bg-white text-rose-800 border-rose-300 hover:bg-rose-100"
//                           }`}
//                           onClick={() => {
//                             if (slot?.holdUntil) return;
//                             slotHolder(slot._id);
//                           }}
//                         >
//                           {slot.from} - {slot.to}
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-xs text-gray-400 italic">No alternative slots available.</p>
//                   )}
//                 </div>

//               </div>
//             )}

//             {selectedSlotId && (
//               <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
//                 <button
//                   disabled={slotLoader || !selectedSlotId}
//                   onClick={() => {
//                     setShowModal(false);
//                     navigate(`/packages/${poojaid || "default"}`);
//                   }}
//                   className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition cursor-pointer text-sm"
//                 >
//                   Proceed For Booking
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PanditProfile;



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Static Data with high-quality Unsplash preview images
const STATIC_PANDIT_DATA = {
  _id: "pandit_123",
  name: "Pandit Rajesh Sharma",
  image: { 
    imageurl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" 
  },
  Skills: ["Vedic Astrology", "Havan", "Graha Shanti", "Muhurat"],
  languages: ["Hindi", "Sanskrit", "English"],
  description: "Experienced Vedic priest with 12+ years of expertise in performing various poojas, havans, and rituals. Specialized in Graha Shanti, Vastu Shanti, and personalized muhurat consultations.",
  rating: 4.83,
  totalReviews: 5
};

const STATIC_MATCHED_SLOTS = [
  { _id: "slot_1", from: "06:00 AM", to: "08:00 AM", holdUntil: null },
  { _id: "slot_2", from: "08:30 AM", to: "10:30 AM", holdUntil: null },
  { _id: "slot_3", from: "11:00 AM", to: "01:00 PM", holdUntil: null },
];

const STATIC_UNMATCHED_SLOTS = [
  { _id: "slot_4", from: "02:00 PM", to: "04:00 PM", holdUntil: null },
  { _id: "slot_5", from: "04:30 PM", to: "06:30 PM", holdUntil: null },
  { _id: "slot_6", from: "07:00 PM", to: "09:00 PM", holdUntil: null },
];

// Static Reviews Data with real avatars
const STATIC_REVIEWS = [
  { 
    name: "Dixon", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rating: 5, 
    comment: "Amazing advice and clear ritual guidance! Highly recommended." 
  },
  { 
    name: "Maverick", 
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    rating: 4, 
    comment: "Very knowledgeable and patient. Explained everything in detail." 
  },
  { 
    name: "Veronica", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    rating: 5, 
    comment: "The pooja was performed with great devotion. Felt very positive energy." 
  },
  { 
    name: "Sneha", 
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    rating: 4, 
    comment: "Good experience. Will definitely book again for future rituals." 
  },
];

const PanditProfile = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // State Management
  const [loading, setLoading] = useState(false);
  const [slotLoader, setSlotLoader] = useState(false);
  const [panditData, setPanditData] = useState({});
  const [matchedSlots, setMatchedSlots] = useState([]);
  const [unmatchedSlots, setUnmatchedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [error, setError] = useState({ message: "", type: "" });

  // Safe parsing of localStorage
  const getPoojaDetails = () => {
    try {
      const data = localStorage.getItem("poojaDetails");
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  };

  const poojaDetails = getPoojaDetails();
  const poojaid = poojaDetails?.poojaid;

  // Load Static Data (Backend Call Simulate)
  const fetchPanditData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      setPanditData(STATIC_PANDIT_DATA);
      setMatchedSlots(STATIC_MATCHED_SLOTS);
      setUnmatchedSlots(STATIC_UNMATCHED_SLOTS);
    } catch (error) {
      console.error("Error fetching pandit data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Simulate loading slots
  async function loadSlots() {
    setSlotLoader(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setMatchedSlots(STATIC_MATCHED_SLOTS);
      setUnmatchedSlots(STATIC_UNMATCHED_SLOTS);
    } catch (error) {
      console.log(error);
    } finally {
      setSlotLoader(false);
    }
  }

  // Simulate slot hold
  async function slotHolder(slotId) {
    setSlotLoader(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      const isSlotHeld = slotId === "slot_2"; // Demo restriction check
      
      if (isSlotHeld) {
        setError({
          message: "This slot is already held by someone else, please select another slot",
          type: "info",
        });
        return;
      }
      
      setError({ message: "", type: "" });
      setSelectedSlotId(slotId);
      
      const updateSlots = (slots) =>
        slots.map((slot) =>
          slot._id === slotId ? { ...slot, holdUntil: new Date().toISOString() } : slot
        );
      
      setMatchedSlots(updateSlots);
      setUnmatchedSlots(updateSlots);
      
    } catch (error) {
      console.error("Error holding slot:", error);
      setError({
        message: "This slot is already held by someone else, please select another slot",
        type: "info",
      });
    } finally {
      setSlotLoader(false);
    }
  }

  // Simulate slot unhold
  async function handleSlotUnhold() {
    if (selectedSlotId) {
      try {
        await new Promise(resolve => setTimeout(resolve, 200));
        setSelectedSlotId(null);
        loadSlots();
      } catch (error) {
        console.log("Error unholding slot:", error);
      }
    }
  }

  useEffect(() => {
    fetchPanditData();
  }, [slug]);

  // Alert Card Component (Inlined)
  const AlertCard = ({ message, type, onClose }) => {
    const bgColor = type === "info" ? "bg-blue-50 border-blue-200" : "bg-red-50 border-red-200";
    const textColor = type === "info" ? "text-blue-700" : "text-red-700";
    
    if (!message) return null;
    
    return (
      <div className={`flex items-center justify-between p-3 rounded-xl border ${bgColor} ${textColor} text-sm`}>
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-bold">
            ✕
          </button>
        )}
      </div>
    );
  };

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8 pt-24 max-w-6xl">
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Profile Card Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={panditData?.image?.imageurl}
                alt={panditData?.name}
                className="w-40 h-40 object-cover rounded-2xl shadow-md border-2 border-amber-100"
              />
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h1 className="text-3xl font-bold text-gray-900">{panditData?.name}</h1>
                  <div className="inline-flex items-center justify-center bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-inner">
                    ⭐ {panditData?.rating} / 5.0 Rating
                  </div>
                </div>

                <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                  <span className="font-semibold text-gray-900">Skills:</span>{" "}
                  {panditData?.Skills?.join(", ")}
                </p>
                <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                  <span className="font-semibold text-gray-900">Languages:</span>{" "}
                  {panditData?.languages?.join(", ")}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-amber-600">12+</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="ml-auto bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer"
                  >
                    Book Pooja Slot
                  </button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About <span className="text-amber-500">{panditData?.name}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {panditData?.description}
              </p>
            </div>

            {/* Reviews & Assistant Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
              {/* Ratings Breakdown & Assistant */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-6">Rating & Reviews Breakdown</h2>
                  <div className="flex items-center gap-8 mb-6">
                    <div className="text-center">
                      <p className="text-4xl font-extrabold text-gray-900">{panditData?.rating}</p>
                      <span className="text-xs text-gray-400">based on {panditData?.totalReviews} reviews</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-3 font-medium">{star}</span>
                          <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-amber-400 h-full rounded-full"
                              style={{ width: `${star * 20}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition cursor-pointer mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800">Chat with Assistant?</span>
                  </div>
                  <span className="text-gray-400 font-bold">&gt;</span>
                </div>
              </div>

              {/* User Reviews List */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Users Review</h2>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {STATIC_REVIEWS.map((review, idx) => (
                    <div key={idx} className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-10 h-10 rounded-full object-cover border" 
                        />
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{review.name}</p>
                          <p className="text-xs text-amber-500 font-medium">{renderStars(review.rating)}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </>
        )}
      </div>

      {/* Modal for Slot Selection */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-3xl relative max-h-[90vh] flex flex-col">
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-600 transition"
              onClick={() => {
                setShowModal(false);
                handleSlotUnhold();
              }}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
              Select Pooja Slot
            </h2>
            <p className="text-center text-xs text-gray-500 mb-6">Choose your preferred muhurat or custom time slot</p>

            <div className="mb-4">
              {error.message && (
                <AlertCard
                  message={error.message}
                  type={error.type}
                  onClose={() => setError({ message: "", type: "" })}
                />
              )}
            </div>

            {slotLoader ? (
              <div className="flex justify-center items-center w-full h-48">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-amber-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-1 flex-1">
                
                {/* Muhurat Slots */}
                <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
                  <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">
                    🌿 Muhurat Slots
                  </h3>
                  {matchedSlots.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {matchedSlots.map((slot) => (
                        <button
                          key={slot._id}
                          disabled={slotLoader || slot?.holdUntil}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                            selectedSlotId === slot._id
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                              : slot?.holdUntil
                              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                              : "bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                          }`}
                          onClick={() => {
                            if (slot?.holdUntil) return;
                            slotHolder(slot._id);
                          }}
                        >
                          {slot.from} - {slot.to}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">No matched muhurat slots available.</p>
                  )}
                </div>

                {/* Other Slots */}
                <div className="bg-rose-50/40 p-4 rounded-2xl border border-rose-100">
                  <h3 className="text-sm font-bold text-rose-700 uppercase tracking-wider mb-3">
                    ⏰ Other Available Slots
                  </h3>
                  {unmatchedSlots.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {unmatchedSlots.map((slot) => (
                        <button
                          key={slot._id}
                          disabled={slotLoader || slot?.holdUntil}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                            selectedSlotId === slot._id
                              ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/20"
                              : slot?.holdUntil
                              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                              : "bg-white text-rose-800 border-rose-300 hover:bg-rose-100"
                          }`}
                          onClick={() => {
                            if (slot?.holdUntil) return;
                            slotHolder(slot._id);
                          }}
                        >
                          {slot.from} - {slot.to}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">No alternative slots available.</p>
                  )}
                </div>

              </div>
            )}

            {selectedSlotId && (
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                <button
                  disabled={slotLoader || !selectedSlotId}
                  onClick={() => {
                    setShowModal(false);
                    navigate(`/packages/${poojaid || "default"}`);
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition cursor-pointer text-sm"
                >
                  Proceed For Booking
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PanditProfile;