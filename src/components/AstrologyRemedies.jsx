// import React, { useState } from "react";
// import { remediesData } from "../data/remedies";

// const AstrologyRemedies = () => {
//   // Left side ke liye bada banner item
//   const largeBannerItem = remediesData.find((item) => item.isLargeBanner) || remediesData[0];
//   // Right side ke grid/slider ke liye baki items
//   const gridItems = remediesData.filter((item) => !item.isLargeBanner);

//   // Slider ke liye state
//   const [startIndex, setStartIndex] = useState(0);

//   // Ek screen par kitne items dikhenge (jaise desktop par 3 items)
//   const itemsPerPage = 3;

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < gridItems.length) {
//       setStartIndex((prev) => prev + 1);
//     } else {
//       setStartIndex(0); // Loop back to start
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex((prev) => prev - 1);
//     } else {
//       setStartIndex(gridItems.length - itemsPerPage); // Loop to end
//     }
//   };

//   const visibleItems = gridItems.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-[1400px] mx-auto">

//         {/* Section Header */}
//         <div className="flex justify-between items-end mb-8">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18]">
//               Astrology Remedies
//             </h2>
//           </div>
//           <a href="#view-all" className="text-xs font-semibold text-[#8b3a2b] hover:underline uppercase tracking-wider">
//             VIEW ALL
//           </a>
//         </div>

//         {/* Main Layout: Left Banner + Right Slider Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch relative">
          
//           {/* Left Side Large Banner */}
//           <div className="lg:col-span-1 bg-[#8c0a15] text-white flex flex-col justify-between overflow-hidden shadow-md rounded-sm">
//             <div className="relative w-full h-80 sm:h-96 lg:h-[420px]">
//               <img 
//                 src={largeBannerItem.image} 
//                 alt={largeBannerItem.title} 
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>
//             <div className="p-6 bg-[#8c0a15] flex flex-col justify-end">
//               <h3 className="text-lg font-serif font-normal tracking-wide uppercase">
//                 {largeBannerItem.title}
//               </h3>
//               <p className="text-xs text-stone-200 mt-2 font-light">
//                 {largeBannerItem.subTitle}
//               </p>
//             </div>
//           </div>

//           {/* Right Side Slider Container */}
//           <div className="lg:col-span-3 relative flex items-center">
            
//             {/* Left Slider Arrow Button */}
//             <button 
//               onClick={handlePrev}
//               className="absolute -left-4 z-20 bg-white border border-stone-300 w-9 h-9 rounded-full flex items-center justify-center shadow-md text-stone-700 hover:bg-stone-100 transition-all"
//             >
//               ❮
//             </button>

//             {/* Products Grid / Slider View */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
//               {visibleItems.map((item) => (
//                 <div 
//                   key={item.id} 
//                   className="group flex flex-col justify-between bg-white border border-stone-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
//                 >
//                   <div>
//                     <div className="relative w-full h-64 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
//                       {item.tag && (
//                         <span className="absolute top-3 left-3 z-10 bg-[#8c0a15] text-white text-[10px] font-bold tracking-wider px-2 py-1 uppercase shadow-sm">
//                           {item.tag}
//                         </span>
//                       )}
//                       <img 
//                         src={item.image} 
//                         alt={item.title} 
//                         className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>

//                     <div className="p-4 bg-[#fff3df]">
//                       <h4 className="text-xs sm:text-sm font-medium text-stone-800 line-clamp-2 min-h-[40px] leading-snug">
//                         {item.title}
//                       </h4>

//                       <div className="flex items-center gap-1 text-amber-500 text-xs mt-2">
//                         <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
//                         <span className="text-stone-400 text-[10px] ml-1">(120)</span>
//                       </div>

//                       <div className="mt-3 flex items-center gap-2 text-sm">
//                         <span className="font-bold text-stone-900">
//                           ₹ {item.price}
//                         </span>
//                         {item.oldPrice && (
//                           <span className="text-stone-400 line-through text-xs font-normal">
//                             ₹ {item.oldPrice}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               ))}
//             </div>

//             {/* Right Slider Arrow Button */}
//             <button 
//               onClick={handleNext}
//               className="absolute -right-4 z-20 bg-white border border-stone-300 w-9 h-9 rounded-full flex items-center justify-center shadow-md text-stone-700 hover:bg-stone-100 transition-all"
//             >
//               ❯
//             </button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AstrologyRemedies;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiDove, GiBriefcase, GiHeartPlus, GiGoldBar } from "react-icons/gi"; // Icons
import useProductStore from "../store/useProductStore"; // API Store (adjust path if needed)

const AstrologyRemedies = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  const [remedies, setRemedies] = useState([]);

  // 🔴 Default Fallback Data (Agar API me data na ho toh yeh dikhega)
  const defaultRemedies = [
    {
      id: "love",
      title: "Love & Marriage",
      icon: <GiDove className="w-8 h-8 text-[#7b1e2b]" />,
      link: "/remedies/love-marriage"
    },
    {
      id: "career",
      title: "Career & Business",
      icon: <GiBriefcase className="w-8 h-8 text-[#7b1e2b]" />,
      link: "/remedies/career-business"
    },
    {
      id: "health",
      title: "Health & Wellbeing",
      icon: <GiHeartPlus className="w-8 h-8 text-[#7b1e2b]" />,
      link: "/remedies/health-wellbeing"
    },
    {
      id: "wealth",
      title: "Wealth & Prosperity",
      icon: <GiGoldBar className="w-8 h-8 text-[#7b1e2b]" />,
      link: "/remedies/wealth-prosperity"
    }
  ];

  // 🔴 Fetch Data (Dynamic)
  useEffect(() => {
    if (typeof fetchProducts === "function") {
      fetchProducts(); // API call
    }
  }, [fetchProducts]);

  // 🔴 API Data processing (Agar API me 'remedies' category ke products hain toh)
  useEffect(() => {
    if (products && products.length > 0) {
      // Filter karo agar API me remedies hain
      const apiRemedies = products.filter(p => 
        (p.category?.name || "").toLowerCase().includes("remedy") || 
        (p.category?.name || "").toLowerCase().includes("remedies")
      );

      if (apiRemedies.length > 0) {
        // Agar API me mil gaya toh map karo (yahan icons fix rahenge, title dynamic hoga)
        const mappedData = apiRemedies.slice(0, 4).map((item, index) => ({
          id: item._id,
          title: item.name || "Astrology Remedy",
          icon: defaultRemedies[index % 4].icon, // Icons rotate honge
          link: `/product/${item._id}`
        }));
        setRemedies(mappedData);
      } else {
        // Fallback
        setRemedies(defaultRemedies);
      }
    } else {
      // API khali hai toh fallback
      setRemedies(defaultRemedies);
    }
  }, [products]);

  return (
    <section className="w-full bg-[#fff9f0] py-12 md:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[1px] bg-[#7b1e2b]/30"></div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2e18] tracking-wide">
              Astrology Remedies
            </h2>
            <div className="w-12 h-[1px] bg-[#7b1e2b]/30"></div>
          </div>
          <p className="text-sm md:text-base text-[#4a2e18]/70">
            Balance your energies. Attract positivity
          </p>
        </div>

        {/* ================= LOADING / ERROR ================= */}
        {loading && remedies.length === 0 && (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7b1e2b] mx-auto"></div>
          </div>
        )}

        {/* ================= GRID (Screenshot Style) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {remedies.map((item) => (
            <Link
              key={item.id}
              to={item.link || "#"}
              className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#5a1420] to-[#7b1e2b] rounded-md p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[180px]"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-base md:text-lg font-medium text-center">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AstrologyRemedies;