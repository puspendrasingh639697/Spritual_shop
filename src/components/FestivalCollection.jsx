


// import React, { useEffect, useState } from 'react';
// import { Heart, ShoppingBag } from 'lucide-react';
// import useProductStore from '../store/useProductStore';
// import useWishlistStore from '../store/useWishlistStore';
// import useCartStore from '../store/useCartStore';
// import { useNavigate } from 'react-router-dom';

// const FestivalCollection = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts, getFestivalCollections } = useProductStore();
//   const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();
  
//   const [wishlistLoading, setWishlistLoading] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');
//   const [toastType, setToastType] = useState('info');

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
//     if (actualUserId) {
//       setUserId(actualUserId);
//     }
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const showToastMessage = (message, type = 'info') => {
//     setToastMessage(message);
//     setToastType(type);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   const handleWishlistToggle = async (productId) => {
//     setWishlistLoading(productId);
//     if (isInWishlist(productId)) {
//       await removeFromWishlist(productId);
//       showToastMessage('Removed from wishlist', 'success');
//     } else {
//       await addToWishlist(productId);
//       showToastMessage('Added to wishlist ❤️', 'success');
//     }
//     setWishlistLoading(null);
//   };

//   const handleAddToCart = async (productId) => {
//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

//     if (!token || !actualUserId) {
//       showToastMessage('Please login to add items to cart', 'error');
//       setTimeout(() => navigate('/login'), 2000);
//       return;
//     }
    
//     setUserId(actualUserId);
//     const result = await addToCart(productId, 1);
//     if (result.success) {
//       showToastMessage('Item added to cart! 🛒', 'success');
//     } else {
//       showToastMessage(result.error || 'Failed to add to cart', 'error');
//     }
//   };

//   const items = getFestivalCollections ? getFestivalCollections() : products.filter(p => p.category?.name === 'Festival Collections');

//   if (loading) return <div className="text-center py-12">Loading...</div>;
//   if (items.length === 0) return <div className="text-center py-12">No Festival Collections available</div>;

//   return (
//     <>
//       {showToast && (
//         <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
//           {toastMessage}
//         </div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {items.map((product) => (
//           <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <button
//               onClick={() => handleWishlistToggle(product._id)}
//               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10"
//             >
//               <Heart className={`w-5 h-5 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
//             </button>
//             <div className="aspect-square bg-[#faf6f0]">
//               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-4">
//               <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">{product.name}</h3>
//               <p className="text-lg font-bold text-[#6b2314] mt-2">₹{product.price}</p>
//               <button 
//                 onClick={() => handleAddToCart(product._id)}
//                 className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
//               >
//                 <ShoppingBag className="w-4 h-4" /> Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default FestivalCollection;


import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const FestivalCollection = () => {
  const navigate = useNavigate();
  const { products, loading, fetchProducts, getFestivalCollections } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();
  
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
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage('Removed from wishlist', 'success');
    } else {
      await addToWishlist(productId);
      showToastMessage('Added to wishlist ❤️', 'success');
    }
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

  // 🔴 SMART DYNAMIC DATA FILTERING
  let items = [];
  let sourceData = products || [];

  if (typeof getFestivalCollections === 'function') {
    const storeItems = getFestivalCollections();
    if (storeItems && storeItems.length > 0) {
      items = storeItems;
    }
  }

  // Agar store function se data nahi mila, toh manually filter karo
  if (items.length === 0 && sourceData.length > 0) {
    items = sourceData.filter(p => {
      const catName = (p.category?.name || "").toLowerCase().trim();
      return catName.includes("festival") || catName.includes("collection");
    });
  }

  // Fallback (Agar database me naam alag hai)
  if (items.length === 0 && sourceData.length > 0) {
    items = sourceData.slice(0, 8);
  }

  if (loading && sourceData.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
        <p className="mt-3 text-[#7b1e2b] font-bold">Loading Collections...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white/50 backdrop-blur-md rounded-xl border border-[#7b1e2b]/20">
        <p className="text-lg text-[#7b1e2b] font-serif font-bold">No Festival Collections available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] pb-16 pt-8">
      
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white font-semibold ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* 🔴 Products Grid (Compact Height + Glassmorphism UI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {items.slice(0, 8).map((product) => {
            const prodId = product._id || product.id;
            const isWishlisted = wishlist?.some(item => (item._id === prodId || item.id === prodId || item.productId?._id === prodId));
            const prodImage = product.image || product.images?.[0] || "https://via.placeholder.com/400?text=No+Image";
            const finalPrice = product.pricing?.single || product.price || 0;
            const oldPrice = product.originalPrice || product.oldPrice;
            const rating = product.rating || "4.8";
            const reviewsCount = product.reviews || product.reviewsCount || "24";
            const tag = product.tag || product.category?.name || "Festival";

            return (
              <div 
                key={prodId} 
                className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] backdrop-blur-md rounded-md shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden"
              >
                {/* 🔴 Image Container (Fixed Compact Height h-52) */}
                <div className="relative overflow-hidden bg-gray-100 h-52 w-full p-2">
                  <img 
                    src={prodImage} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

                  {/* Tag Badge */}
                  <span className="absolute top-3 left-3 bg-[#7b1e2b] text-white text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider z-10">
                    {tag}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleWishlistToggle(prodId); }}
                    className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md z-10 hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                </div>

                {/* Product Info (Compact Padding) */}
                <div className="p-4 flex flex-col flex-grow justify-between bg-white/50">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7b1e2b] font-bold mb-1">
                      {product.category?.name || "Collection"}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] text-[#7b1e2b] font-bold mb-1">
                      <span>⭐ {rating}</span>
                      <span className="text-gray-500 font-normal">({reviewsCount} reviews)</span>
                    </div>

                    <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                      {product.name || product.title}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 mt-1">
                      <p className="text-lg font-bold text-[#7b1e2b]">
                        ₹{finalPrice.toLocaleString()}
                      </p>
                      {oldPrice && (
                        <p className="text-xs text-gray-400 line-through">
                          ₹{oldPrice.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <button 
                      onClick={() => handleAddToCart(prodId)}
                      className="w-full py-2.5 bg-[#7b1e2b] text-white rounded-md hover:bg-[#5a1420] transition-colors flex items-center justify-center gap-2 text-xs font-semibold shadow"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FestivalCollection;