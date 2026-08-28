// import React from "react";
// import { BiUser, BiDownload } from "react-icons/bi";

// export default function KundliTab({ kundliData }) {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Saved Kundli & Birth Chart</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {kundliData.map((item) => (
//           <div key={item.id} className="border border-stone-200 bg-stone-50 p-5 rounded-sm space-y-3">
//             <div className="flex justify-between items-center">
//               <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm">
//                 {item.manglik ? "Manglik Profile" : "Normal Profile"}
//               </span>
//               <span className="text-xs text-stone-500">{item.dateOfBirth}</span>
//             </div>
//             <div>
//               <h4 className="font-serif font-bold text-sm text-[#4a2e18]">{item.name}</h4>
//               <p className="text-xs text-stone-600 mt-1">Rashi: <span className="font-bold">{item.rashi}</span> | Nakshatra: <span className="font-bold">{item.nakshatra}</span></p>
//             </div>
//             <button 
//               onClick={() => alert(`Downloading Kundli for ${item.name}...`)}
//               className="w-full bg-white border border-[#8b3a2b] text-[#8b3a2b] hover:bg-[#8b3a2b] hover:text-white text-xs font-bold py-2 rounded-sm flex items-center justify-center gap-1.5 transition cursor-pointer"
//             >
//               <BiDownload /> Download PDF Kundli
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { BiTimeFive, BiStar } from "react-icons/bi";

export default function KundliTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h3 className="text-base font-serif font-bold text-[#4a2e18]">Saved Kundli & Birth Chart</h3>
          <p className="text-xs text-stone-500">Access your detailed astrological charts and reports.</p>
        </div>
      </div>

      {/* Coming Soon Banner Card */}
      <div className="bg-[#fff9f0] border border-amber-200 rounded-sm p-8 text-center space-y-4 max-w-lg mx-auto my-6 shadow-sm">
        <div className="w-12 h-12 bg-amber-100 text-[#8b3a2b] rounded-full flex items-center justify-center mx-auto text-xl shadow-inner">
          <BiTimeFive />
        </div>
        
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1 bg-[#8b3a2b] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
            <BiStar /> Coming Soon
          </span>
          <h4 className="font-serif font-bold text-lg text-[#4a2e18] mt-2">Kundli & Horoscope Generator</h4>
          <p className="text-xs text-stone-600 leading-relaxed px-4">
            We are crafting a powerful Vedic astrology engine for you. Soon you will be able to generate, save, and download detailed PDF Kundlis, matching reports, and planetary transits right here.
          </p>
        </div>

        <div className="pt-2">
          <div className="inline-block bg-white border border-stone-300 text-stone-500 text-xs font-serif px-4 py-2 rounded-sm shadow-2xs">
            Expected Launch: <span className="font-bold text-[#8b3a2b]">Very Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}