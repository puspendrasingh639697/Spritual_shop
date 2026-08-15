import React from "react";
import { shopCategories } from "../data/categories";

const ShopByCategory = () => {
  return (
    <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#4a2e18] tracking-wide">
            Shop by Category
          </h2>
          <div className="w-24 h-[1px] bg-[#4a2e18]/30 mx-auto mt-3"></div>
        </div>

        {/* Categories Grid - 4 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shopCategories.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col justify-between bg-white border border-stone-200/80 rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image & Top Tag Container */}
                <div className="relative w-full h-72 sm:h-80 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Top Badge Tag */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#4a2e18] text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 uppercase shadow-md">
                      {item.tag}
                    </span>
                  )}

                  {/* Sold Out Overlay */}
                  {item.isSoldOut && (
                    <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="bg-white/95 text-[#4a2e18] font-bold text-xs tracking-widest px-5 py-2 uppercase shadow-lg">
                        Sold Out
                      </span>
                    </div>
                  )}

                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Details Container with Clean & Sharp Font Styling */}
                <div className="p-5 text-center bg-white">
                  <p className="text-[11px] text-stone-500 tracking-wider uppercase mb-1.5 font-medium">
                    {item.vendor}
                  </p>
                  
                  {/* Improved Clean Title Font Styling */}
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#4a2e18] tracking-normal uppercase line-clamp-2 min-h-[44px] leading-relaxed">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-center gap-2.5 text-sm">
                    <span className="font-bold text-[#8b3a2b] text-[16px]">
                      Rs. {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-stone-400 line-through text-xs font-normal">
                        Rs. {item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 bg-white">
                <button 
                  disabled={item.isSoldOut}
                  className={`w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none shadow-sm ${
                    item.isSoldOut 
                      ? "bg-[#8b3a2b]/50 text-white cursor-not-allowed" 
                      : "bg-[#4a2e18] hover:bg-[#321e10] text-white active:scale-[0.98]"
                  }`}
                >
                  {item.isSoldOut ? "Sold Out" : "Add to Cart"}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;