import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiShoppingBag, BiStar, BiHeart } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const PersonalizedRecommendations = () => {
  const navigate = useNavigate();
  const { products, fetchProducts } = useProductStore();
  const { addToCart, setUserId } = useCartStore();

  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    const init = async () => {
      await fetchProducts();
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
      if (actualUserId) setUserId(actualUserId);
    };
    init();
  }, [fetchProducts, setUserId]);

  const recommendedProducts = products.slice(0, 4);

  const handleAddToCart = async (product, e) => {
    e.stopPropagation();
    const prodId = product._id || product.id;
    const result = await addToCart(prodId, 1);

    if (result && result.success) {
      setToastMsg(`${product.name || product.title} added to cart! 🛒`);
    } else {
      setToastMsg(result?.error || "Failed to add to cart");
    }
    setTimeout(() => setToastMsg(null), 3000);
  };

  if (!products || products.length === 0) {
    return (
      <div className="bg-[#fff3df] py-16 text-center text-[#4a2e18]">
        <div className="w-8 h-8 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-sm">Loading divine recommendations...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#fff3df] py-16 px-4 overflow-hidden relative">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-4 right-4 bg-[#4a2e18] text-white px-5 py-2.5 rounded-lg shadow-xl z-50 text-xs font-medium">
          {toastMsg}
        </div>
      )}

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest text-[#8b3a2b] font-semibold">
            Tailored For Your Spiritual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide mt-1 font-semibold">
            Personalized <span className="italic font-normal">Recommendations</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => {
            const prodId = product._id || product.id;
            const prodImage = product.image;

            return (
              <div 
                key={prodId}
                onClick={() => {
                  navigate(`/product/${prodId}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-[#edd5b9] rounded-sm p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group relative"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="w-full h-56 bg-stone-50 border border-stone-200 rounded-sm mb-3 overflow-hidden flex items-center justify-center relative">
                    {prodImage && prodImage !== '/placeholder.jpg' ? (
                      <img
                        src={prodImage}
                        alt={product.name || product.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
                        }}
                      />
                    ) : (
                      <div className="text-stone-300 text-xs">No Image</div>
                    )}

                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setToastMsg("Added to wishlist ❤️");
                        setTimeout(() => setToastMsg(null), 2000);
                      }}
                      className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white text-stone-600 hover:text-red-500 transition shadow-sm"
                    >
                      <BiHeart className="text-lg" />
                    </button>
                  </div>

                  {/* Vendor / Category Label */}
                  <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    {product.category?.name || "IDOLS"}
                  </p>

                  {/* Product Title */}
                  <h4 className="text-xs sm:text-sm font-serif text-[#4a2e18] mb-2 line-clamp-2 leading-snug">
                    {product.name || product.title}
                  </h4>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                    <BiStar className="fill-amber-500" />
                    <span className="font-bold text-stone-700">{product.rating || 4.8}</span>
                    <span className="text-stone-400 text-[11px]">({product.reviewsCount || 24})</span>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#8b3a2b]">
                      Rs. {product.price?.toLocaleString()}
                    </span>
                    {product.oldPrice && (
                      <span className="block text-[11px] text-stone-400 line-through">
                        Rs. {product.oldPrice?.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 rounded-sm text-xs transition flex items-center gap-1"
                  >
                    <BiShoppingBag className="text-base" /> View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;