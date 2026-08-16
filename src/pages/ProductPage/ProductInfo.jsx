import React from "react";
import { BiStar, BiCheckCircle } from "react-icons/bi";

const ProductInfo = ({ product, selectedVariant, setSelectedVariant, currentPrice, currentOldPrice, currentSku, discountPercent, reviewsCount }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          {product.vendor}
        </p>
        <span className="text-[11px] font-mono bg-stone-100 text-stone-600 px-2 py-0.5 border border-stone-200">
          SKU: {currentSku}
        </span>
      </div>
      
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#4a2e18] mb-3 leading-snug font-normal">
        {product.title}
      </h1>

      <div className="flex items-center gap-2 mb-4 text-xs">
        <div className="flex items-center text-amber-500 font-bold gap-1">
          <BiStar className="fill-amber-500 text-base" /> 4.8
        </div>
        <span className="text-stone-300">|</span>
        <span className="text-stone-500 underline cursor-pointer">{reviewsCount} Reviews</span>
      </div>

      {/* Price, MRP and Discount */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-stone-100">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-2xl sm:text-3xl font-bold text-[#8b3a2b]">
            Rs. {currentPrice}
          </span>
          {currentOldPrice && (
            <span className="text-stone-400 line-through text-base">
              Rs. {currentOldPrice}
            </span>
          )}
          {discountPercent && (
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>
        <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 font-semibold border border-emerald-200 flex items-center gap-1">
          <BiCheckCircle /> {product.stockStatus || "In Stock"}
        </span>
      </div>

      {/* Description Preview */}
      {product.description && (
        <p className="text-xs text-stone-600 leading-relaxed mb-4">
          {product.description}
        </p>
      )}

      {/* What's Included Section */}
      {product.whatsIncluded && product.whatsIncluded.length > 0 && (
        <div className="mb-5 p-3.5 bg-stone-50 border border-stone-200 rounded-sm">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] mb-2">📦 What's Included:</h4>
          <ul className="list-disc list-inside space-y-1 text-xs text-stone-700">
            {product.whatsIncluded.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Variants Selector */}
      {product.variants && product.variants.length > 0 && (
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
            Select Pack / Size:
          </label>
          <div className="flex flex-wrap gap-2.5">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 text-xs font-semibold border transition-all cursor-pointer ${
                  selectedVariant?.id === variant.id
                    ? "border-[#8b3a2b] bg-[#8b3a2b]/10 text-[#8b3a2b]"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;