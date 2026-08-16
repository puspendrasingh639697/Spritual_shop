// import React, { useState } from "react";
// import { 
//   BiTimeFive, 
//   BiCheckCircle, 
//   BiPackage, 
//   BiTruck, 
//   BiMapPin, 
//   BiStore, 
//   BiSearch,
//   BiArrowBack,
//   BiNavigation,
//   BiPhoneCall
// } from "react-icons/bi";

// const OrderTracking = ({ orderId = "ORD-482910", onBack }) => {
//   const steps = [
//     { id: 1, title: "Pending", desc: "Order placed successfully", icon: <BiTimeFive /> },
//     { id: 2, title: "Confirmed", desc: "Order verified & accepted", icon: <BiCheckCircle /> },
//     { id: 3, title: "Packed", desc: "Energized & securely packed", icon: <BiPackage /> },
//     { id: 4, title: "Shipped", desc: "Dispatched with courier partner", icon: <BiStore /> },
//     { id: 5, title: "Out for Delivery", desc: "Arriving to your address today", icon: <BiTruck /> },
//     { id: 6, title: "Delivered", desc: "Successfully delivered", icon: <BiMapPin /> }
//   ];

//   const [currentStep, setCurrentStep] = useState(4); // Default to 'Out for Delivery' (Index 4) to showcase map
//   const [searchQuery, setSearchQuery] = useState(orderId);
//   const [trackedOrderId, setTrackedOrderId] = useState(orderId);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setTrackedOrderId(searchQuery.toUpperCase());
//     }
//   };

//   // Calculate truck position percentage for the map simulation
//   const getProgressPercentage = () => {
//     if (currentStep <= 2) return 10;
//     if (currentStep === 3) return 35;
//     if (currentStep === 4) return 65;
//     if (currentStep === 5) return 88;
//     return 100;
//   };

//   return (
//     <div className="max-w-3xl mx-auto space-y-8 font-sans">
      
//       {/* Top Search Bar */}
//       <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-sm font-bold uppercase tracking-wider text-[#4a2e18]">Track Your Sacred Order</h3>
//           {onBack && (
//             <button onClick={onBack} className="text-xs text-[#8b3a2b] hover:underline flex items-center gap-1 cursor-pointer">
//               <BiArrowBack /> Back
//             </button>
//           )}
//         </div>
//         <form onSubmit={handleSearch} className="flex gap-2">
//           <div className="flex items-center border border-stone-300 bg-white rounded-sm p-2.5 w-full">
//             <BiSearch className="text-stone-400 mr-2 text-base" />
//             <input 
//               type="text" 
//               placeholder="Enter Order ID (e.g. ORD-123456)" 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full text-xs outline-none bg-transparent font-bold uppercase"
//               required
//             />
//           </div>
//           <button type="submit" className="bg-[#4a2e18] hover:bg-[#321e10] text-white text-xs font-bold uppercase px-5 rounded-sm cursor-pointer transition">
//             Track
//           </button>
//         </form>
//       </div>

//       {/* Tracking Info Card */}
//       <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
        
//         {/* Order Meta Header */}
//         <div className="flex flex-wrap justify-between items-center pb-4 border-b border-stone-200 gap-4 text-xs">
//           <div>
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Tracking Order ID</span>
//             <strong className="text-[#8b3a2b] text-base font-serif">{trackedOrderId}</strong>
//           </div>
//           <div>
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Estimated Delivery</span>
//             <span className="font-bold text-stone-700">19 August 2026, By 7:00 PM</span>
//           </div>
//           <div>
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Courier Partner</span>
//             <span className="font-bold text-stone-700">BlueDart Express</span>
//           </div>
//         </div>

//         {/* Test Status Controller */}
//         <div className="bg-[#fff9f0] border border-amber-200 p-3 rounded-sm flex items-center justify-between text-xs flex-wrap gap-2">
//           <span className="font-bold text-[#8b3a2b]">🛠️ Test Status Flow:</span>
//           <div className="flex gap-1.5 flex-wrap">
//             {steps.map((st, idx) => (
//               <button
//                 key={st.id}
//                 onClick={() => setCurrentStep(idx)}
//                 className={`px-2.5 py-1 text-[10px] font-bold rounded-sm transition cursor-pointer ${currentStep === idx ? 'bg-[#4a2e18] text-white' : 'bg-white border border-amber-300 text-stone-700 hover:bg-amber-100'}`}
//               >
//                 {idx + 1}. {st.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* 🗺️ LIVE MAP SIMULATION SECTION */}
//         {currentStep >= 3 && (
//           <div className="bg-stone-900 border border-stone-800 rounded-sm p-5 space-y-4 text-white">
//             <div className="flex justify-between items-center">
//               <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
//                 <BiNavigation className="animate-pulse text-sm" /> Live Delivery Map Simulation
//               </span>
//               <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
//                 {currentStep === 5 ? "🔴 Out for Delivery" : currentStep === 4 ? "🚚 In Transit" : "📦 Packed & Ready"}
//               </span>
//             </div>

//             {/* Simulated Map Visualizer Box */}
//             <div className="relative h-36 bg-[#1a1c23] rounded-sm border border-stone-800 overflow-hidden flex items-center px-6">
//               {/* Grid Background Lines for Map feel */}
//               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

//               {/* Route Line */}
//               <div className="absolute left-10 right-10 h-1 bg-stone-700 rounded-full">
//                 <div 
//                   className="h-full bg-amber-500 transition-all duration-700 rounded-full"
//                   style={{ width: `${getProgressPercentage()}%` }}
//                 ></div>
//               </div>

//               {/* Source Node (Warehouse) */}
//               <div className="absolute left-8 flex flex-col items-center">
//                 <div className="w-8 h-8 rounded-full bg-stone-800 border border-amber-500 text-amber-400 flex items-center justify-center text-xs shadow-lg">
//                   <BiStore />
//                 </div>
//                 <span className="text-[10px] text-stone-400 mt-1">Hub (Delhi)</span>
//               </div>

//               {/* Moving Vehicle / Delivery Icon */}
//               <div 
//                 className="absolute transition-all duration-700 -translate-x-1/2 flex flex-col items-center z-10"
//                 style={{ left: `${getProgressPercentage()}%` }}
//               >
//                 <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-900 flex items-center justify-center text-lg shadow-xl animate-bounce">
//                   <BiTruck />
//                 </div>
//                 <span className="text-[10px] font-bold bg-amber-500 text-stone-900 px-1.5 rounded mt-0.5">Driver En Route</span>
//               </div>

//               {/* Destination Node (Customer) */}
//               <div className="absolute right-8 flex flex-col items-center">
//                 <div className="w-8 h-8 rounded-full bg-stone-800 border border-emerald-500 text-emerald-400 flex items-center justify-center text-xs shadow-lg">
//                   <BiMapPin />
//                 </div>
//                 <span className="text-[10px] text-stone-400 mt-1">Destination</span>
//               </div>
//             </div>

//             {/* Delivery Partner / Driver Info */}
//             {currentStep >= 4 && (
//               <div className="flex justify-between items-center bg-stone-800/80 p-3 rounded-sm text-xs">
//                 <div>
//                   <p className="text-stone-300">Delivery Executive: <strong className="text-white">Ramesh Kumar</strong></p>
//                   <p className="text-[10px] text-stone-400">Vehicle No: DL-10-XY-9482</p>
//                 </div>
//                 <a href="tel:+919876543210" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-3 py-1.5 rounded-sm flex items-center gap-1 transition">
//                   <BiPhoneCall /> Call Driver
//                 </a>
//               </div>
//             )}
//           </div>
//         )}

//         {/* TIMELINE PROGRESS */}
//         <div className="space-y-6 pt-4">
//           <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18]">Shipment Timeline</h4>

//           <div className="relative border-l-2 border-stone-200 ml-3 space-y-8 pl-6 sm:pl-8">
//             {steps.map((stepItem, index) => {
//               const isCompleted = index <= currentStep;
//               const isCurrent = index === currentStep;

//               return (
//                 <div key={stepItem.id} className="relative group">
//                   <div className={`absolute -left-[35px] sm:-left-[41px] w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
//                     isCurrent 
//                       ? 'bg-[#8b3a2b] text-white ring-4 ring-[#8b3a2b]/20 shadow-md scale-110' 
//                       : isCompleted 
//                         ? 'bg-emerald-700 text-white' 
//                         : 'bg-stone-200 text-stone-400'
//                   }`}>
//                     {isCompleted ? stepItem.icon : <span className="text-xs font-bold">{stepItem.id}</span>}
//                   </div>

//                   <div className={`p-4 rounded-sm border transition ${
//                     isCurrent 
//                       ? 'bg-[#fff9f0] border-amber-300 shadow-sm' 
//                       : isCompleted 
//                         ? 'bg-stone-50 border-stone-200' 
//                         : 'bg-white border-stone-100 opacity-60'
//                   }`}>
//                     <div className="flex justify-between items-center">
//                       <h5 className={`text-xs font-bold font-serif ${isCurrent ? 'text-[#8b3a2b] text-sm' : isCompleted ? 'text-[#4a2e18]' : 'text-stone-400'}`}>
//                         {stepItem.title}
//                       </h5>
//                       <span className="text-[10px] text-stone-400">
//                         {index < currentStep ? "Completed" : index === currentStep ? "In Progress" : "Pending"}
//                       </span>
//                     </div>
//                     <p className="text-[11px] text-stone-500 mt-0.5">{stepItem.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Delivery Address Summary */}
//         <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 text-xs space-y-1 font-serif">
//           <h5 className="font-bold uppercase tracking-wider text-[#4a2e18] mb-2">Delivery Destination</h5>
//           <p className="text-stone-700"><strong>Rahul Sharma</strong> (+91 98765 43210)</p>
//           <p className="text-stone-500">House No. 42, Temple Road, Connaught Place, New Delhi - 110001</p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default OrderTracking;


import React, { useState } from "react";
import { 
  BiTimeFive, 
  BiCheckCircle, 
  BiPackage, 
  BiCar, 
  BiMapPin, 
  BiStore, 
  BiSearch,
  BiArrowBack,
  BiNavigation,
  BiPhoneCall
} from "react-icons/bi";

const OrderTracking = ({ orderId = "ORD-482910", onBack }) => {
  const steps = [
    { id: 1, title: "Pending", desc: "Order placed successfully", icon: <BiTimeFive /> },
    { id: 2, title: "Confirmed", desc: "Order verified & accepted", icon: <BiCheckCircle /> },
    { id: 3, title: "Packed", desc: "Energized & securely packed", icon: <BiPackage /> },
    { id: 4, title: "Shipped", desc: "Dispatched with courier partner", icon: <BiStore /> },
    { id: 5, title: "Out for Delivery", desc: "Arriving to your address today", icon: <BiCar /> },
    { id: 6, title: "Delivered", desc: "Successfully delivered", icon: <BiMapPin /> }
  ];

  const [currentStep, setCurrentStep] = useState(4); // Default to 'Out for Delivery' (Index 4) to showcase map
  const [searchQuery, setSearchQuery] = useState(orderId);
  const [trackedOrderId, setTrackedOrderId] = useState(orderId);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setTrackedOrderId(searchQuery.toUpperCase());
    }
  };

  // Calculate truck position percentage for the map simulation
  const getProgressPercentage = () => {
    if (currentStep <= 2) return 10;
    if (currentStep === 3) return 35;
    if (currentStep === 4) return 65;
    if (currentStep === 5) return 88;
    return 100;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      
      {/* Top Search Bar */}
      <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#4a2e18]">Track Your Sacred Order</h3>
          {onBack && (
            <button onClick={onBack} className="text-xs text-[#8b3a2b] hover:underline flex items-center gap-1 cursor-pointer">
              <BiArrowBack /> Back
            </button>
          )}
        </div>
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex items-center border border-stone-300 bg-white rounded-sm p-2.5 w-full">
            <BiSearch className="text-stone-400 mr-2 text-base" />
            <input 
              type="text" 
              placeholder="Enter Order ID (e.g. ORD-123456)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs outline-none bg-transparent font-bold uppercase"
              required
            />
          </div>
          <button type="submit" className="bg-[#4a2e18] hover:bg-[#321e10] text-white text-xs font-bold uppercase px-5 rounded-sm cursor-pointer transition">
            Track
          </button>
        </form>
      </div>

      {/* Tracking Info Card */}
      <div className="bg-white border border-stone-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
        
        {/* Order Meta Header */}
        <div className="flex flex-wrap justify-between items-center pb-4 border-b border-stone-200 gap-4 text-xs">
          <div>
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Tracking Order ID</span>
            <strong className="text-[#8b3a2b] text-base font-serif">{trackedOrderId}</strong>
          </div>
          <div>
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Estimated Delivery</span>
            <span className="font-bold text-stone-700">19 August 2026, By 7:00 PM</span>
          </div>
          <div>
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Courier Partner</span>
            <span className="font-bold text-stone-700">BlueDart Express</span>
          </div>
        </div>

        {/* Test Status Controller */}
        <div className="bg-[#fff9f0] border border-amber-200 p-3 rounded-sm flex items-center justify-between text-xs flex-wrap gap-2">
          <span className="font-bold text-[#8b3a2b]">🛠️ Test Status Flow:</span>
          <div className="flex gap-1.5 flex-wrap">
            {steps.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setCurrentStep(idx)}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-sm transition cursor-pointer ${currentStep === idx ? 'bg-[#4a2e18] text-white' : 'bg-white border border-amber-300 text-stone-700 hover:bg-amber-100'}`}
              >
                {idx + 1}. {st.title}
              </button>
            ))}
          </div>
        </div>

        {/* 🗺️ LIVE MAP SIMULATION SECTION */}
        {currentStep >= 3 && (
          <div className="bg-stone-900 border border-stone-800 rounded-sm p-5 space-y-4 text-white">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <BiNavigation className="animate-pulse text-sm" /> Live Delivery Map Simulation
              </span>
              <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                {currentStep === 5 ? "🔴 Out for Delivery" : currentStep === 4 ? "🚚 In Transit" : "📦 Packed & Ready"}
              </span>
            </div>

            {/* Simulated Map Visualizer Box */}
            <div className="relative h-36 bg-[#1a1c23] rounded-sm border border-stone-800 overflow-hidden flex items-center px-6">
              {/* Grid Background Lines for Map feel */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Route Line */}
              <div className="absolute left-10 right-10 h-1 bg-stone-700 rounded-full">
                <div 
                  className="h-full bg-amber-500 transition-all duration-700 rounded-full"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>

              {/* Source Node (Warehouse) */}
              <div className="absolute left-8 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-stone-800 border border-amber-500 text-amber-400 flex items-center justify-center text-xs shadow-lg">
                  <BiStore />
                </div>
                <span className="text-[10px] text-stone-400 mt-1">Hub (Delhi)</span>
              </div>

              {/* Moving Vehicle / Delivery Icon */}
              <div 
                className="absolute transition-all duration-700 -translate-x-1/2 flex flex-col items-center z-10"
                style={{ left: `${getProgressPercentage()}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-900 flex items-center justify-center text-lg shadow-xl animate-bounce">
                  <BiCar />
                </div>
                <span className="text-[10px] font-bold bg-amber-500 text-stone-900 px-1.5 rounded mt-0.5">Driver En Route</span>
              </div>

              {/* Destination Node (Customer) */}
              <div className="absolute right-8 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-stone-800 border border-emerald-500 text-emerald-400 flex items-center justify-center text-xs shadow-lg">
                  <BiMapPin />
                </div>
                <span className="text-[10px] text-stone-400 mt-1">Destination</span>
              </div>
            </div>

            {/* Delivery Partner / Driver Info */}
            {currentStep >= 4 && (
              <div className="flex justify-between items-center bg-stone-800/80 p-3 rounded-sm text-xs">
                <div>
                  <p className="text-stone-300">Delivery Executive: <strong className="text-white">Ramesh Kumar</strong></p>
                  <p className="text-[10px] text-stone-400">Vehicle No: DL-10-XY-9482</p>
                </div>
                <a href="tel:+919876543210" className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold px-3 py-1.5 rounded-sm flex items-center gap-1 transition">
                  <BiPhoneCall /> Call Driver
                </a>
              </div>
            )}
          </div>
        )}

        {/* TIMELINE PROGRESS */}
        <div className="space-y-6 pt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18]">Shipment Timeline</h4>

          <div className="relative border-l-2 border-stone-200 ml-3 space-y-8 pl-6 sm:pl-8">
            {steps.map((stepItem, index) => {
              const isCompleted = index <= currentStep;
              const isCurrent = index === currentStep;

              return (
                <div key={stepItem.id} className="relative group">
                  <div className={`absolute -left-[35px] sm:-left-[41px] w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-[#8b3a2b] text-white ring-4 ring-[#8b3a2b]/20 shadow-md scale-110' 
                      : isCompleted 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-stone-200 text-stone-400'
                  }`}>
                    {isCompleted ? stepItem.icon : <span className="text-xs font-bold">{stepItem.id}</span>}
                  </div>

                  <div className={`p-4 rounded-sm border transition ${
                    isCurrent 
                      ? 'bg-[#fff9f0] border-amber-300 shadow-sm' 
                      : isCompleted 
                        ? 'bg-stone-50 border-stone-200' 
                        : 'bg-white border-stone-100 opacity-60'
                  }`}>
                    <div className="flex justify-between items-center">
                      <h5 className={`text-xs font-bold font-serif ${isCurrent ? 'text-[#8b3a2b] text-sm' : isCompleted ? 'text-[#4a2e18]' : 'text-stone-400'}`}>
                        {stepItem.title}
                      </h5>
                      <span className="text-[10px] text-stone-400">
                        {index < currentStep ? "Completed" : index === currentStep ? "In Progress" : "Pending"}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">{stepItem.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Address Summary */}
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 text-xs space-y-1 font-serif">
          <h5 className="font-bold uppercase tracking-wider text-[#4a2e18] mb-2">Delivery Destination</h5>
          <p className="text-stone-700"><strong>Rahul Sharma</strong> (+91 98765 43210)</p>
          <p className="text-stone-500">House No. 42, Temple Road, Connaught Place, New Delhi - 110001</p>
        </div>

      </div>

    </div>
  );
};

export default OrderTracking;