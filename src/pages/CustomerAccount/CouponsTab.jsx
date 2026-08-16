import React from "react";
import { BiGift, BiCopy } from "react-icons/bi";

const CouponsTab = () => {
  const coupons = [
    { code: "PUJA20", desc: "Get 20% OFF on all Yantras", expiry: "Ends in 2 days" },
    { code: "FIRSTORDER", desc: "Flat 10% OFF on your first purchase", expiry: "No expiry" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Available Coupons</h3>
      <div className="grid gap-4">
        {coupons.map((c, i) => (
          <div key={i} className="border border-amber-200 bg-amber-50 p-4 rounded-sm flex justify-between items-center">
            <div>
              <p className="font-bold text-[#8b3a2b]">{c.code}</p>
              <p className="text-xs text-stone-600">{c.desc}</p>
              <p className="text-[10px] text-stone-400 mt-1">{c.expiry}</p>
            </div>
            <button className="flex items-center gap-1 bg-white border border-amber-300 px-3 py-1 text-xs font-bold rounded-sm hover:bg-amber-100 cursor-pointer">
              <BiCopy /> Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsTab;