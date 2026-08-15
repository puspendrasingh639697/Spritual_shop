import { useState } from "react";
import { products } from "../data/products";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBag,
  FaHeart,
  FaEye
} from "react-icons/fa";
const ITEMS_PER_VIEW = 4;

const ProductCarousel = () => {
  const [imageIndexes, setImageIndexes] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const [wishlist, setWishlist] = useState({});

  const visibleProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  );

  const nextProducts = () => {
    if (startIndex < products.length - ITEMS_PER_VIEW) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevProducts = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const nextImage = (id, totalImages, e) => {
    e.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.min(
        (prev[id] || 0) + 1,
        totalImages - 1
      ),
    }));
  };

  const prevImage = (id, totalImages, e) => {
    e.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.max(
        (prev[id] || 0) - 1,
        0
      ),
    }));
  };

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (  
    <section className="bg-[#fff3df] pt-8 pb-12">
      <div className="max-w-[1400px] mx-auto px-7">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-[#5a1215] text-xs font-bold tracking-widest uppercase bg-[#5a1215]/10 px-3 py-1 rounded-full">
              Handpicked Specials
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1F2340] mt-1">
              Best Rakhi Ever
            </h2>
          </div>

          <button
            className="
              text-[16px]
              font-bold
              text-[#5a1215]
              border-b-2 border-[#5a1215]
              pb-[2px]
              hover:text-[#1F2340]
              hover:border-[#1F2340]
              transition-all duration-300
            "
          >
            View all
          </button>
        </div>

        <div className="relative">

          {/* Section Slider Arrows */}
          <div className="hidden lg:flex absolute right-[-24px] top-[170px] z-50 flex-col gap-3">

            <button
              onClick={nextProducts}
              disabled={
                startIndex + ITEMS_PER_VIEW >= products.length
              }
              className={`
                w-12 h-12 rounded-full
                flex items-center justify-center
                shadow-lg transition-transform active:scale-95
                ${
                  startIndex + ITEMS_PER_VIEW >= products.length
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#5a1215] text-white hover:bg-[#430d10]"
                }
              `}
            >
              <FaChevronRight />
            </button>

            <button
              onClick={prevProducts}
              disabled={startIndex === 0}
              className={`
                w-12 h-12 rounded-full
                flex items-center justify-center
                shadow-lg transition-transform active:scale-95
                ${
                  startIndex === 0
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#5a1215] text-white hover:bg-[#430d10]"
                }
              `}
            >
              <FaChevronLeft />
            </button>

          </div>

          {/* Products Grid with Modern Card UI Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {visibleProducts.map((item) => {
              const currentIndex =
                imageIndexes[item.id] || 0;

              const images = item.images;

              const isFirstImage =
                currentIndex === 0;

              const isLastImage =
                currentIndex === images.length - 1;

              const isWishlisted = wishlist[item.id];

              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-amber-200/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Card Container */}
                  <div className="relative overflow-hidden rounded-xl bg-gray-50">

                    <img
                      src={images[currentIndex]}
                      alt={item.title}
                      className="w-full h-[260px] sm:h-[280px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Discount Badge */}
                    <span
                      className="
                        absolute top-3 left-0
                        min-w-[70px] px-2.5
                        h-[28px]
                        bg-[#5a1215]
                        text-white
                        text-[11px]
                        font-bold
                        flex items-center justify-center
                        rounded-r-md shadow-md
                      "
                    >
                      {item.discount}
                    </span>

                    {/* Floating Action Buttons (Wishlist & Quick View) */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                      <button
                        onClick={(e) => toggleWishlist(item.id, e)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md backdrop-blur-md transition-all duration-300 ${
                          isWishlisted 
                            ? "bg-red-500 text-white" 
                            : "bg-white/80 text-gray-700 hover:bg-white hover:text-red-500"
                        }`}
                        title="Wishlist"
                      >
                        <FaHeart className="text-sm" />
                      </button>
                    </div>

                    {/* Prev Image Button */}
                    <button
                      onClick={(e) =>
                        prevImage(
                          item.id,
                          images.length,
                          e
                        )
                      }
                      disabled={isFirstImage}
                      className={`
                        absolute left-2 top-1/2 -translate-y-1/2
                        w-9 h-9 rounded-full
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300 shadow-md
                        ${
                          isFirstImage
                            ? "bg-white/80 text-gray-300 cursor-not-allowed"
                            : "bg-white text-[#1F2340] hover:bg-gray-100"
                        }
                      `}
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>

                    {/* Next Image Button */}
                    <button
                      onClick={(e) =>
                        nextImage(
                          item.id,
                          images.length,
                          e
                        )
                      }
                      disabled={isLastImage}
                      className={`
                        absolute right-2 top-1/2 -translate-y-1/2
                        w-9 h-9 rounded-full
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300 shadow-md
                        ${
                          isLastImage
                            ? "bg-white/80 text-gray-300 cursor-not-allowed"
                            : "bg-white text-[#1F2340] hover:bg-gray-100"
                        }
                      `}
                    >
                      <FaChevronRight className="text-xs" />
                    </button>

                    {/* Image Dots Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {images.map((_, imgIdx) => (
                        <span
                          key={imgIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentIndex === imgIdx 
                              ? "w-4 bg-[#5a1215]" 
                              : "w-1.5 bg-white/70"
                          }`}
                        />
                      ))}
                    </div>

                  </div>

                  {/* Content Details */}
                  <div className="pt-4 flex flex-col flex-1 justify-between">

                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1F2340] leading-snug line-clamp-2 min-h-[44px]">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex text-amber-500">
                          {[...Array(item.rating)].map(
                            (_, index) => (
                              <FaStar key={index} className="text-xs" />
                            )
                          )}
                        </div>

                        <span className="text-[12px] text-gray-500 font-medium">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-[18px] font-bold text-[#5a1215]">
                          ₹{item.price}
                        </span>

                        <span className="text-[14px] text-gray-400 line-through">
                          ₹{item.oldPrice}
                        </span>
                      </div>

                      {/* Add to Cart Modern Button */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your cart handler here
                        }}
                        className="bg-[#5a1215]/10 hover:bg-[#5a1215] text-[#5a1215] hover:text-white p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm"
                        title="Add to Cart"
                      >
                        <FaShoppingBag className="text-sm" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Line */}
        <div className="mt-10 h-[3px] bg-gray-200 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#5a1215] transition-all duration-300 rounded-full"
            style={{
              width: `${
                ((startIndex + ITEMS_PER_VIEW) /
                  products.length) *
                100
              }%`,
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ProductCarousel;