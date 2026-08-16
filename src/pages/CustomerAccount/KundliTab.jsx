import React from "react";
import { BiUser, BiDownload } from "react-icons/bi";

export default function KundliTab({ kundliData }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Saved Kundli & Birth Chart</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {kundliData.map((item) => (
          <div key={item.id} className="border border-stone-200 bg-stone-50 p-5 rounded-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm">
                {item.manglik ? "Manglik Profile" : "Normal Profile"}
              </span>
              <span className="text-xs text-stone-500">{item.dateOfBirth}</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#4a2e18]">{item.name}</h4>
              <p className="text-xs text-stone-600 mt-1">Rashi: <span className="font-bold">{item.rashi}</span> | Nakshatra: <span className="font-bold">{item.nakshatra}</span></p>
            </div>
            <button 
              onClick={() => alert(`Downloading Kundli for ${item.name}...`)}
              className="w-full bg-white border border-[#8b3a2b] text-[#8b3a2b] hover:bg-[#8b3a2b] hover:text-white text-xs font-bold py-2 rounded-sm flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <BiDownload /> Download PDF Kundli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}