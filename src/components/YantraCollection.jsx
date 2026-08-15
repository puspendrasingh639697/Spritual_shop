import React, { useState, useEffect } from "react";
import { yantraCollectionData } from "../data/yantraCollectionData";
import promoBanner from "../assets/Upto_35_off_mobile_800x.png";

const YantraCollection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    console.log(`Added to cart: ${item.title}`);
  };

  const handleCardClick = (item) => {
    console.log(`Viewing product: ${item.title}`);
  };

  const handleBannerClick = () => {
    console.log("Banner clicked: Navigating to offers");
  };

  return (
    <section 
      className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]"
      aria-label="Yantra Collection"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* Section Header Centered */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
            Yantra Collection
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main Layout: Left Banner + Right Horizontal Card Slider */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">

          {/* Left Side: Single Promotional Banner */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex justify-center items-center">
            <div 
              onClick={handleBannerClick}
              className="w-full max-w-[320px] lg:max-w-none rounded-2xl overflow-hidden shadow-md border-2 border-[#e6d0b3] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl bg-white"
            >
              <img 
                src={promoBanner} 
                alt="Upto 35% Off Offer" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side: Horizontal Scrollable Product Cards Slider */}
          <div className="w-full lg:w-[calc(100%-340px)] overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-[#d4bc9d] scrollbar-track-transparent">
            {isLoading ? (
              <div className="flex gap-6 py-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-[260px] sm:w-[280px] h-[360px] bg-[#ebd7bd] rounded-lg animate-pulse flex-shrink-0"></div>
                ))}
              </div>
            ) : (
              <div className="flex gap-6 w-max py-2">
                {yantraCollectionData.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => handleCardClick(item)}
                    className="w-[260px] sm:w-[280px] bg-white rounded-lg shadow-sm border border-[#e6d0b3] flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-shrink-0"
                  >
                    {/* Top Image Container */}
                    <div className="relative w-full h-[220px] bg-[#f9f5f0] overflow-hidden flex items-center justify-center p-4 border-b border-[#f0e4d7]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="p-4 flex flex-col items-center text-center">
                      <span className="text-[10px] uppercase tracking-wider text-[#8b3a2b] font-medium mb-1">
                        Pooja Hetu
                      </span>
                      <h3 className="text-xs sm:text-sm font-serif text-[#3d2314] font-medium leading-snug line-clamp-1 mb-2 group-hover:text-[#8b3a2b] transition-colors">
                        {item.title}
                      </h3>
                      
                      {/* Price Section */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-[#8b3a2b]">Rs. 2,450.00</span>
                        <span className="text-xs text-gray-400 line-through">Rs. 3,500.00</span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                      onClick={(e) => handleAddToCart(item, e)}
                      className="w-full bg-[#4a2e18] hover:bg-[#8b3a2b] text-white text-xs font-semibold uppercase tracking-wider py-3 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default YantraCollection;