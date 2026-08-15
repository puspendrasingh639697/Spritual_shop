import React, { useState } from "react";
import { remediesData } from "../data/remedies";

const AstrologyRemedies = () => {
  // Left side ke liye bada banner item
  const largeBannerItem = remediesData.find((item) => item.isLargeBanner) || remediesData[0];
  // Right side ke grid/slider ke liye baki items
  const gridItems = remediesData.filter((item) => !item.isLargeBanner);

  // Slider ke liye state
  const [startIndex, setStartIndex] = useState(0);

  // Ek screen par kitne items dikhenge (jaise desktop par 3 items)
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < gridItems.length) {
      setStartIndex((prev) => prev + 1);
    } else {
      setStartIndex(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    } else {
      setStartIndex(gridItems.length - itemsPerPage); // Loop to end
    }
  };

  const visibleItems = gridItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18]">
              Astrology Remedies
            </h2>
          </div>
          <a href="#view-all" className="text-xs font-semibold text-[#8b3a2b] hover:underline uppercase tracking-wider">
            VIEW ALL
          </a>
        </div>

        {/* Main Layout: Left Banner + Right Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch relative">
          
          {/* Left Side Large Banner */}
          <div className="lg:col-span-1 bg-[#8c0a15] text-white flex flex-col justify-between overflow-hidden shadow-md rounded-sm">
            <div className="relative w-full h-80 sm:h-96 lg:h-[420px]">
              <img 
                src={largeBannerItem.image} 
                alt={largeBannerItem.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 bg-[#8c0a15] flex flex-col justify-end">
              <h3 className="text-lg font-serif font-normal tracking-wide uppercase">
                {largeBannerItem.title}
              </h3>
              <p className="text-xs text-stone-200 mt-2 font-light">
                {largeBannerItem.subTitle}
              </p>
            </div>
          </div>

          {/* Right Side Slider Container */}
          <div className="lg:col-span-3 relative flex items-center">
            
            {/* Left Slider Arrow Button */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 z-20 bg-white border border-stone-300 w-9 h-9 rounded-full flex items-center justify-center shadow-md text-stone-700 hover:bg-stone-100 transition-all"
            >
              ❮
            </button>

            {/* Products Grid / Slider View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {visibleItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col justify-between bg-white border border-stone-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="relative w-full h-64 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
                      {item.tag && (
                        <span className="absolute top-3 left-3 z-10 bg-[#8c0a15] text-white text-[10px] font-bold tracking-wider px-2 py-1 uppercase shadow-sm">
                          {item.tag}
                        </span>
                      )}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 bg-[#fff3df]">
                      <h4 className="text-xs sm:text-sm font-medium text-stone-800 line-clamp-2 min-h-[40px] leading-snug">
                        {item.title}
                      </h4>

                      <div className="flex items-center gap-1 text-amber-500 text-xs mt-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        <span className="text-stone-400 text-[10px] ml-1">(120)</span>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="font-bold text-stone-900">
                          ₹ {item.price}
                        </span>
                        {item.oldPrice && (
                          <span className="text-stone-400 line-through text-xs font-normal">
                            ₹ {item.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Right Slider Arrow Button */}
            <button 
              onClick={handleNext}
              className="absolute -right-4 z-20 bg-white border border-stone-300 w-9 h-9 rounded-full flex items-center justify-center shadow-md text-stone-700 hover:bg-stone-100 transition-all"
            >
              ❯
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AstrologyRemedies;