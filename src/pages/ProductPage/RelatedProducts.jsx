import React from "react";
import { useNavigate } from "react-router-dom";
import { BiStar, BiShoppingBag } from "react-icons/bi";
import { shopCategories } from "../../data/categories";

const RelatedProducts = ({ currentProductId, currentCategory }) => {
  const navigate = useNavigate();

  // Filter products from the same category, excluding the current product
  const relatedList = shopCategories.filter(
    (item) => item.id.toString() !== currentProductId.toString()
  ).slice(0, 4); // Max 4 products show karenge

  if (relatedList.length === 0) return null;

  return (
    <div className="border-t border-stone-200 p-6 sm:p-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-serif text-[#4a2e18] mb-2">
            You May Also Like
          </h3>
          <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">
            Handpicked Sacred & Authentic Items For You
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedList.map((product) => (
            <div 
              key={product.id}
              onClick={() => {
                navigate(`/product/${product.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-stone-50/50 border border-stone-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                <div className="w-full h-48 bg-white border border-stone-200 rounded-sm mb-3 overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.oldPrice && (
                    <span className="absolute top-2 left-2 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                      Sale
                    </span>
                  )}
                </div>

                <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                  {product.vendor || "Sacred Collection"}
                </p>

                <h4 className="text-xs sm:text-sm font-serif text-[#4a2e18] mb-2 line-clamp-2 leading-snug">
                  {product.title}
                </h4>

                <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                  <BiStar className="fill-amber-500" />
                  <span className="font-bold text-stone-700">4.8</span>
                  <span className="text-stone-400 text-[11px]">(24)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-[#8b3a2b]">
                    Rs. {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="block text-[11px] text-stone-400 line-through">
                      Rs. {product.oldPrice}
                    </span>
                  )}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#4a2e18] hover:bg-[#321e10] text-white p-2 rounded-sm text-xs transition flex items-center gap-1"
                >
                  <BiShoppingBag className="text-base" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;