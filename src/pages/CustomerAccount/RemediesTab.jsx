import React from "react";
import { BiSun, BiCart } from "react-icons/bi";

export default function RemediesTab({ remedies, onNavigateCart }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Personalized Remedies (Astrological Suggestions)</h3>
      <p className="text-xs text-stone-600">Aapki kundli aur grah sthiti ke anusaar vishesh sujhav:</p>
      
      <div className="space-y-4">
        {remedies.map((item) => (
          <div key={item.id} className="border border-amber-200 bg-amber-50/40 p-4 rounded-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BiSun className="text-amber-600 text-base" />
                <h4 className="font-serif font-bold text-sm text-[#4a2e18]">{item.title}</h4>
              </div>
              <p className="text-xs text-stone-600">{item.description}</p>
              <span className="text-[10px] text-stone-400 block">Suggested gemstone/yantra: <strong className="text-[#8b3a2b]">{item.recommendedItem}</strong></span>
            </div>
            <button 
              onClick={onNavigateCart}
              className="bg-[#4a2e18] hover:bg-[#321e10] text-white text-xs font-bold px-4 py-2 rounded-sm flex items-center gap-1 shrink-0 cursor-pointer transition"
            >
              <BiCart /> Get Remedy Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}