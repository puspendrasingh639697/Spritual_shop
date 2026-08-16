import React from "react";
import { BiCart } from "react-icons/bi";

const RecentlyViewedTab = ({ recentlyViewed, onNavigateCart }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Recently Viewed Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recentlyViewed.map((item) => (
          <div key={item.id} className="border border-stone-200 p-4 rounded-sm bg-white flex gap-4 items-center">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-sm border border-stone-200" />
            <div className="space-y-1 flex-1">
              <h4 className="font-serif font-bold text-xs text-[#4a2e18]">{item.title}</h4>
              <p className="text-xs font-bold text-[#8b3a2b]">₹{item.price}</p>
              <button 
                onClick={onNavigateCart}
                className="text-[10px] bg-[#4a2e18] text-white px-2.5 py-1 rounded-sm flex items-center gap-1 hover:bg-[#321e10] cursor-pointer"
              >
                <BiCart /> Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedTab;