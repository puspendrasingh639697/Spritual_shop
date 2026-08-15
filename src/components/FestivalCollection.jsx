import React from "react";
import { festivalCollectionProducts } from "../data/festivalCollectionData";

const FestivalCollection = () => {
  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    console.log(`Added to cart: ${item.title}`);
  };

  const handleCardClick = (item) => {
    console.log(`Viewing item: ${item.title}`);
  };

  return (
    <section className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
            Festival <span className="italic font-normal">Collection</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Products Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {festivalCollectionProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleCardClick(product)}
              className="bg-white rounded-xl shadow-sm border border-[#e6d0b3] flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image & Badge Container */}
              <div className="relative w-full h-[280px] bg-[#fdf2f0] overflow-hidden flex items-center justify-center p-4 border-b border-[#f0e4d7]">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#4a2e18] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col items-center text-center flex-grow">
                <span className="text-[11px] uppercase tracking-wider text-[#8b3a2b] font-medium mb-1">
                  Divine Hindu
                </span>
                <h3 className="text-xs sm:text-sm font-serif text-[#3d2314] font-medium leading-snug line-clamp-2 mb-3 group-hover:text-[#8b3a2b] transition-colors">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500 text-xs">
                  <span>★</span>
                  <span className="text-[#3d2314] font-semibold">{product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <span className="text-sm sm:text-base font-semibold text-[#8b3a2b]">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={(e) => handleAddToCart(product, e)}
                className="w-full bg-[#4a2e18] hover:bg-[#8b3a2b] text-white text-xs font-semibold uppercase tracking-wider py-3.5 transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FestivalCollection;