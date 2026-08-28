import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useProductStore from "../store/useProductStore";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || "/placeholder.jpg"];

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const prodId = product._id || product.id;

  return (
    <div 
      onClick={() => {
        if (prodId) {
          navigate(`/product/${prodId}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className="group/card cursor-pointer flex flex-col justify-between bg-white p-4 rounded-xl border border-[#edd5b9] shadow-sm hover:shadow-xl hover:border-[#8b3a2b] transition-all duration-300 transform hover:-translate-y-1"
    >
      <div>
        {/* IMAGE CARD CONTAINER */}
        <div className="relative group overflow-hidden rounded-lg bg-stone-50 border border-stone-100 w-full aspect-square flex items-center justify-center p-2 mb-3">

          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 left-2 z-25 bg-[#d9534f] text-white px-2.5 py-1 text-xs font-semibold rounded shadow-sm">
              {product.discount}
            </div>
          )}

          {/* Left Arrow */}
          {productImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#16233d] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
          )}

          {/* Right Arrow */}
          {productImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#16233d] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          )}

          {/* Product Image (Using object-contain so image won't cut) */}
          <img
            src={productImages[imageIndex]}
            alt={product.title || product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
            }}
          />

          {/* Image Pagination Dots */}
          {productImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/20 backdrop-blur-xs px-2 py-1 rounded-full">
              {productImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    imageIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Category / Tag */}
        <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
          {product.category?.name || "TRENDING"}
        </p>

        {/* Product Title */}
        <h3 className="text-sm sm:text-base font-serif font-semibold text-[#4a2e18] line-clamp-2 group-hover/card:text-[#8b3a2b] transition-colors mb-2 leading-snug">
          {product.title || product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
          <span>★★★★★</span>
          <span className="text-stone-500 ml-1 font-medium">({product.reviewsCount || 1})</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
        <div>
          <span className="text-base font-bold text-[#8b3a2b]">
            ₹ {product.price?.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="block text-xs text-stone-400 line-through font-medium">
              ₹ {product.oldPrice?.toLocaleString()}
            </span>
          )}
        </div>
        <button 
          className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 rounded text-xs font-medium transition-all shadow-sm"
        >
          View
        </button>
      </div>
    </div>
  );
};

const LatestTrending = () => {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="bg-[#fff3df] py-16 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#8b3a2b] font-semibold">
            Handpicked For You
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4a2e18] mt-1">
            Latest & <span className="italic font-normal">Trending</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Loading State */}
        {loading && (!products || products.length === 0) ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products && products.length > 0 ? (
              products.slice(0, 8).map((product, index) => (
                <ProductCard
                  key={product._id || product.id || index}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-stone-600 font-serif">
                No trending products available right now.
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default LatestTrending;