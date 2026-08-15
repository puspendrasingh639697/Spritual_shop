import React, { useState, useEffect } from "react";
import { pujaKitsData } from "../data/pujaKitsData";

const PujaKits = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartMessage, setCartMessage] = useState("");

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
    <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header Centered */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] tracking-wide inline-block">
            Puja Kits & Samagri
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3"></div>
        </div>

        {/* Success Popup Message */}
        {cartMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-[#3d2314] text-white px-5 py-3 rounded shadow-lg text-xs tracking-wider transition-all animate-bounce">
            {cartMessage}
          </div>
        )}

        {/* Loading Skeleton State */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="bg-stone-50 border border-stone-200 rounded-xl p-4 h-72 animate-pulse flex flex-col items-center justify-between">
                <div className="w-28 h-28 bg-stone-200 rounded-full mb-4"></div>
                <div className="w-3/4 h-4 bg-stone-200 rounded"></div>
                <div className="w-full h-8 bg-stone-300 rounded mt-2"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Fully Responsive Puja Kits Grid Cards */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {pujaKitsData.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col items-center justify-between bg-white border border-stone-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-full flex flex-col items-center">
                  
                  {/* Circular Image Container */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-stone-100 shadow-inner border border-stone-200 mb-4 flex items-center justify-center">
                    {item.tag && (
                      <span className="absolute top-1 z-10 bg-[#8b3a2b] text-white text-[8px] font-bold tracking-wider px-1.5 py-0.5 uppercase shadow-sm">
                        {item.tag}
                      </span>
                    )}
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
                  <div className="flex items-center gap-2 text-xs mb-3">
                    <span className="font-bold text-[#8b3a2b]">
                      Rs. {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-stone-400 line-through text-[10px]">
                        Rs. {item.oldPrice}
                      </span>
                    )}
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

export default PujaKits;