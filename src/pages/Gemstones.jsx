



import React, { useState, useEffect } from "react";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

// 🔴 Sirf Bottom Banner import rakha hai
import bottomBanner from "../assets/gemstones8.webp";

export default function Gemstones() {
  const navigate = useNavigate();
  
  // 🔴 Stores
  const { products, loading, fetchProducts } = useProductStore();
  const { wishlist, toggleWishlist, fetchWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  // 🔴 Fetch Data & User
  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) {
      setUserId(actualUserId);
    }
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // 🔴 Handle Cart
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart', 'error');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }
    
    setUserId(actualUserId);
    const result = await addToCart(productId, 1);
    if (result.success) {
      showToastMessage('Item added to cart! 🛒', 'success');
    } else {
      showToastMessage(result.error || 'Failed to add to cart', 'error');
    }
  };

  // 🔴 Handle Wishlist
  const handleWishlistToggle = async (productId) => {
    if (typeof toggleWishlist === 'function') {
      await toggleWishlist(productId);
    }
  };

  // 🔴 Filter Data (Smart Logic + Dynamic Data)
  let gemProducts = [];
  if (products && products.length > 0) {
    gemProducts = products.filter(p => {
      const catName = (p.category?.name || "").toLowerCase().trim();
      return catName.includes("gem") || catName.includes("stone") || catName.includes("sapphire") || catName.includes("ruby") || catName.includes("emerald") || catName.includes("coral") || catName.includes("hessonite") || catName.includes("eye");
    });
    
    // Fallback
    if (gemProducts.length === 0) gemProducts = products.slice(0, 8);
  }

  return (
    <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] min-h-screen pb-16">
      
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white font-semibold ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        
        {/* Loading State */}
        {loading && gemProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-bold">Loading Gemstones...</p>
          </div>
        ) : (
          /* Products Grid (Glassmorphism UI) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {gemProducts.map((product) => {
              const prodId = product._id || product.id;
              const isWishlisted = wishlist?.some(item => (item._id === prodId || item.id === prodId || item.productId?._id === prodId));
              const prodImage = product.image || product.images?.[0] || "https://via.placeholder.com/400?text=No+Image";
              const finalPrice = product.pricing?.single || product.price || 0;
              const oldPrice = product.originalPrice || product.oldPrice;
              const rating = product.rating || "4.8";
              const reviewsCount = product.reviews || product.reviewsCount || "24";
              const tag = product.tag || product.category?.name || "Premium";

              return (
                <div 
                  key={prodId}
                  className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] backdrop-blur-md rounded-md shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden"
                >
                  {/* Image Container with Gradient Filter */}
                  <div className="relative overflow-hidden bg-gray-100 h-52 w-full">
                    <img 
                      src={prodImage} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                    />
                    
                    {/* Dark Overlay & Blur Filter */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Tag Badge */}
                    <span className="absolute top-3 left-3 bg-[#7b1e2b] text-white text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider z-10">
                      {tag}
                    </span>

                    {/* Wishlist Button */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleWishlistToggle(prodId); }}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md text-lg hover:scale-110 transition-transform z-10"
                    >
                      <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-600"} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between bg-white/50">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#7b1e2b] font-bold mb-1">
                        {product.category?.name || "Gemstone"}
                      </p>
                      
                      <div className="flex items-center gap-1 text-[11px] text-[#7b1e2b] font-bold mb-1">
                        <span>⭐ {rating}</span>
                        <span className="text-gray-500 font-normal">({reviewsCount} reviews)</span>
                      </div>

                      <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                        {product.name || product.title || "Gemstone"}
                      </h3>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3 mt-1">
                        <span className="text-lg font-bold text-[#7b1e2b]">
                          ₹{finalPrice.toLocaleString()}
                        </span>
                        {oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(prodId)}
                        className="w-full bg-[#7b1e2b] hover:bg-[#5a1420] text-white py-2.5 rounded-md text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                      >
                        <BiShoppingBag className="text-sm" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State Check */}
        {!loading && gemProducts.length === 0 && (
          <div className="text-center py-16 bg-white/50 backdrop-blur-md rounded-xl border border-[#7b1e2b]/20">
            <p className="text-lg text-[#7b1e2b] font-serif font-bold mb-2">No gemstones found.</p>
          </div>
        )}

      </div>

      {/* Bottom Banner Section (Yeh rahega) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black">
          <img 
            src={bottomBanner} 
            alt="Gemstones Bottom Banner" 
            className="w-full h-[200px] md:h-[280px] object-cover opacity-90"
          />
        </div>
      </div>

    </div>
  );
}