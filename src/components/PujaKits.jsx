


import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const PujaKits = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts, getPujaKits } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();
  
  const [wishlistLoading, setWishlistLoading] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

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

  const handleWishlistToggle = async (productId) => {
    setWishlistLoading(productId);
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage('Removed from wishlist', 'success');
    } else {
      await addToWishlist(productId);
      showToastMessage('Added to wishlist ❤️', 'success');
    }
    setWishlistLoading(null);
  };

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

  // 🔴 Safe Data Filtering Logic
  let items = [];
  
  if (products && products.length > 0) {
    const kitProducts = products.filter(p => {
      const catName = (p.category?.name || "").toLowerCase().trim();
      return catName === "puja kits" || catName === "pooja kits" || catName.includes("kit");
    });

    if (kitProducts.length > 0) {
      items = kitProducts;
    } else if (typeof getPujaKits === 'function') {
      // Check karo ki function undefined return toh nahi kar raha
      const storeKits = getPujaKits();
      items = storeKits && storeKits.length > 0 ? storeKits : [];
    } 
    
    // Fallback
    if (items.length === 0) {
      items = products.slice(0, 8);
    }
  }

  if (loading) return <div className="text-center py-20 text-[#7b1e2b] font-bold">Loading...</div>;
  
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">No Products available at the moment.</p>
      </div>
    );
  }

  return (
    // 🔴 Background gradient theme (same as other sections)
    <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] min-h-screen pb-16">
      
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {items.map((product) => (
            <div 
              key={product._id} 
              // 🔴 Glassmorphism Dark Blur Card UI
              className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] backdrop-blur-md rounded-md shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden"
            >
              
              {/* Image Container with Gradient Overlay */}
              <div className="relative overflow-hidden bg-gray-100 h-52 w-full">
                <img 
                  src={product.image || "https://via.placeholder.com/400?text=No+Image"} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                />
                
                {/* Dark Overlay & Gradient Filter */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                {/* Wishlist Button */}
                <button
                  onClick={() => handleWishlistToggle(product._id)}
                  className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md z-10 hover:scale-110 transition-transform"
                >
                  <Heart className={`w-4 h-4 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow justify-between bg-white/50">
                <div>
                  {/* Category */}
                  <p className="text-[10px] uppercase tracking-wider text-[#7b1e2b] font-bold mb-1">
                    {product.category?.name || "Puja Kit"}
                  </p>
                  
                  {/* Title */}
                  <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div>
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3 mt-1">
                    <p className="text-lg font-bold text-[#7b1e2b]">
                      ₹{product.price?.toLocaleString() || 0}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice?.toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleAddToCart(product._id)}
                    className="w-full py-2.5 bg-[#7b1e2b] text-white rounded-md hover:bg-[#5a1420] transition-colors flex items-center justify-center gap-2 text-xs font-semibold shadow transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PujaKits;