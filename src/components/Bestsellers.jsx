import React, { useState, useEffect } from "react";
import { bestsellersData } from "../data/bestsellersData";

const Bestsellers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartMessage, setCartMessage] = useState("");

  // Smooth loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (productTitle) => {
    setCartMessage(`Successfully added "${productTitle}" to cart!`);
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

  return (
    <section className="bg-[#fff3df]  py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-3xl text-[#4a2e18] tracking-wide inline-block">
            Bestsellers of the Month
          </h2>
          <div className="w-16 h-[2px] bg-[#8c0a15] mx-auto mt-3"></div>
        </div>

        {/* Success Popup Message */}
        {cartMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-[#8c0a15] text-white px-5 py-3 rounded shadow-lg text-xs tracking-wider transition-all animate-bounce">
            {cartMessage}
          </div>
        )}

        {/* Loading Skeleton State */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-stone-50 border border-stone-200 rounded-xl p-4 h-72 animate-pulse flex flex-col items-center justify-between">
                <div className="w-28 h-28 bg-stone-200 rounded-full mb-4"></div>
                <div className="w-3/4 h-4 bg-stone-200 rounded"></div>
                <div className="w-full h-8 bg-stone-300 rounded mt-2"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Actual Circular Category / Product Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellersData.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col items-center justify-between bg-white border border-stone-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-full flex flex-col items-center">
                  
                  {/* Circular Image Container */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-stone-100 shadow-inner border border-stone-200 mb-4 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-medium text-stone-800 text-center line-clamp-2 min-h-[36px] font-serif mb-2">
                    {item.title}
                  </h3>

                  {/* Price */}
                  <div className="text-xs font-bold text-[#8b3a2b] mb-3">
                    Rs. {item.price}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(item.title)}
                  disabled={item.isSoldOut}
                  className={`w-full py-2 text-[10px] font-bold tracking-wider uppercase transition-colors rounded shadow-sm ${
                    item.isSoldOut 
                      ? "bg-stone-400 text-white cursor-not-allowed" 
                      : "bg-[#4a2e18] text-white hover:bg-[#633e24]"
                  }`}
                >
                  {item.isSoldOut ? "SOLD OUT" : "ADD TO CART"}
                </button>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Bestsellers;