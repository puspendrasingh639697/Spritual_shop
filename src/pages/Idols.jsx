// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiHeart, BiShoppingBag, BiFilter, BiCheckCircle } from "react-icons/bi";

// // Images import (Top Banner & Idols 1 to 5)
// import topBanner from "../assets/idolsbenner.webp";
// import idol1 from "../assets/Idols1.png";
// import idol2 from "../assets/Idols2.png";
// import idol3 from "../assets/Idols3.png";
// import idol4 from "../assets/Idols4.png";
// import idol5 from "../assets/Idols5.png";

// // Sample Idols Products Data using Idols1 to Idols5
// const idolsData = [
//   {
//     id: 1,
//     name: "Divine Brass Ganesha Idol for Prosperity",
//     category: "Ganesha",
//     price: 1499,
//     originalPrice: 2499,
//     rating: 4.9,
//     reviews: 142,
//     image: idol1,
//     tag: "Best Seller",
//   },
//   {
//     id: 2,
//     name: "Auspicious Laxmi Ganesh Murti for Home Temple",
//     category: "Laxmi Ganesha",
//     price: 2499,
//     originalPrice: 3500,
//     rating: 4.8,
//     reviews: 98,
//     image: idol2,
//     tag: "Blessed",
//   },
//   {
//     id: 3,
//     name: "Pure Brass Lord Krishna Playing Flute Idol",
//     category: "Krishna",
//     price: 1899,
//     originalPrice: 2999,
//     rating: 4.7,
//     reviews: 115,
//     image: idol3,
//     tag: "Popular",
//   },
//   {
//     id: 4,
//     name: "Handcrafted Hanuman Ji Murti for Strength & Protection",
//     category: "Hanuman",
//     price: 1299,
//     originalPrice: 1999,
//     rating: 4.9,
//     reviews: 87,
//     image: idol4,
//     tag: "Energized",
//   },
//   {
//     id: 5,
//     name: "Divine Shivling with Sheshnag Brass Idol",
//     category: "Shiva",
//     price: 2999,
//     originalPrice: 4200,
//     rating: 5.0,
//     reviews: 160,
//     image: idol5,
//     tag: "Divine Choice",
//   },
// ];

// const categories = ["All", "Ganesha", "Laxmi Ganesha", "Krishna", "Hanuman", "Shiva"];

// export default function Idols() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Filter products based on category
//   const filteredProducts = selectedCategory === "All" 
//     ? idolsData 
//     : idolsData.filter(item => item.category === selectedCategory);

//   const toggleWishlist = (id) => {
//     if (wishlist.includes(id)) {
//       setWishlist(wishlist.filter(item => item !== id));
//     } else {
//       setWishlist([...wishlist, id]);
//     }
//   };

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} added to cart successfully! 🛒`);
//   };

//   return (
//     <div className="w-full bg-[#fff3df]  min-h-screen font-sans pb-16">
      
//       {/* Top Banner Section (Using idolsbenner.webp) */}
//       <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
//         <div className="max-w-8xl mx-auto px-4">
//           <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
//             <img 
//               src={topBanner} 
//               alt="Divine Idols Banner" 
//               className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
//             />
            
//           </div>
//         </div>
//       </div>

//       {/* Trust Badges Strip */}
//       <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> Premium Quality Brass
//           </div>
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> Handcrafted by Expert Artisans
//           </div>
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> Energized for Puja
//           </div>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
//         {/* Category Filters Bar */}
//         <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
//           <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
//             <BiFilter className="text-2xl" /> Filter by Deity:
//           </div>
          
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
//                   selectedCategory === cat
//                     ? "bg-[#8c0a15] text-white shadow-md"
//                     : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-100"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {filteredProducts.map((product) => {
//             const isWishlisted = wishlist.includes(product.id);
//             return (
//               <div 
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group"
//               >
//                 {/* Image & Tags Container */}
//                 <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
//                   />
                  
//                   {/* Tag Badge */}
//                   <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
//                     {product.tag}
//                   </span>

//                   {/* Wishlist Button */}
//                   <button 
//                     onClick={() => toggleWishlist(product.id)}
//                     className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
//                   >
//                     <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-500"} />
//                   </button>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4 flex flex-col flex-grow justify-between">
//                   <div>
//                     {/* Rating */}
//                     <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
//                       <span>⭐ {product.rating}</span>
//                       <span className="text-gray-400 font-normal">({product.reviews})</span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="font-serif font-bold text-gray-800 text-sm line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
//                       {product.name}
//                     </h3>
//                   </div>

//                   <div>
//                     {/* Pricing */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <span className="text-base font-bold text-[#8c0a15]">₹{product.price.toLocaleString()}</span>
//                       <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
//                     </div>

//                     {/* Action Button */}
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
//                     >
//                       <BiShoppingBag className="text-base" /> Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty State Check */}
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-lg text-gray-600 font-serif">No idols found in this category.</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { BiHeart, BiShoppingBag, BiFilter } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Ganesha", "Laxmi Ganesha", "Krishna", "Hanuman", "Shiva"];

export default function Idols() {
  const navigate = useNavigate();
  
  // 🔴 Dynamic Stores
  const { products, loading, fetchProducts } = useProductStore();
  const { wishlist, toggleWishlist, fetchWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  // 🔴 API Call (Fetch Data)
  useEffect(() => {
    fetchProducts(); 
    fetchWishlist();
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) {
      setUserId(actualUserId);
    }
  }, [fetchProducts, fetchWishlist, setUserId]);

  // Toast Functions
  const showToastMessage = (message, type = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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

  const handleWishlistToggle = async (productId) => {
    if (typeof toggleWishlist === 'function') {
      await toggleWishlist(productId);
    }
  };

  // 🔴 SMART API FILTERING
  // Pehle check karega ki database me Idols/Murti hain ya nahi
  const sourceData = Array.isArray(products) ? products : [];
  
  let idolData = sourceData.filter(p => {
    const cat = (p.category?.name || "").toLowerCase();
    return cat.includes("idol") || cat.includes("murti");
  });

  // Agar category se nahi mila, toh product name se check karega
  if (idolData.length === 0) {
    idolData = sourceData.filter(p => {
      const name = (p.name || p.title || "").toLowerCase();
      return name.includes("idol") || name.includes("murti");
    });
  }

  // Agar API me category aur naam kuch bhi match nahi hua, toh Fallback (saara data dikha dega)
  if (idolData.length === 0) {
    idolData = sourceData;
  }

  // Category Filter Apply karega (Ganesha, Shiva etc.)
  let finalFilteredData = selectedCategory === "All" 
    ? idolData 
    : idolData.filter(item => {
        const cat = (item.category?.name || "").toLowerCase();
        return cat.includes(selectedCategory.toLowerCase());
      });

  // 🔴 Maximum 8 Cards
  const displayProducts = finalFilteredData.slice(0, 8);

  return (
    <div className="w-full bg-gradient-to-br from-[#fffdfa] via-[#fff7ed] to-[#f5e6d3] min-h-screen font-sans pb-16">
      
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white font-semibold ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        
        {/* Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 border-b border-[#7b1e2b]/20 pb-4">
          <div className="flex items-center gap-2 text-[#7b1e2b] font-bold text-lg">
            <BiFilter className="text-2xl" /> Filter by Deity:
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-sm cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#7b1e2b] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border border-[#7b1e2b]/20 hover:border-[#7b1e2b] hover:bg-[#7b1e2b]/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && sourceData.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-bold">Loading Idols...</p>
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 backdrop-blur-md rounded-xl border border-[#7b1e2b]/20">
            <p className="text-lg text-[#7b1e2b] font-serif font-bold">No idols available at the moment.</p>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {displayProducts.map((product) => {
              const prodId = product._id || product.id;
              const isWishlisted = wishlist?.some(item => (item._id === prodId || item.id === prodId || item.productId?._id === prodId));
              const prodImage = product.image || product.images?.[0] || "https://via.placeholder.com/400?text=No+Image";
              const finalPrice = product.pricing?.single || product.price || 0;
              const oldPrice = product.originalPrice || product.oldPrice;
              const rating = product.rating || "4.8";
              const reviewsCount = product.reviews || product.reviewsCount || "24";
              const tag = product.tag || product.category?.name || "Divine";

              return (
                <div 
                  key={prodId}
                  className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden"
                >
                  {/* 🔴 Image Fix (aspect-square + object-contain) */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-square w-full p-4">
                    <img 
                      src={prodImage} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                    />
                    
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>

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

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between bg-white/50">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#7b1e2b] font-bold mb-1">
                        {product.category?.name || "Idol"}
                      </p>
                      
                      <div className="flex items-center gap-1 text-[11px] text-[#7b1e2b] font-bold mb-1">
                        <span>⭐ {rating}</span>
                        <span className="text-gray-500 font-normal">({reviewsCount} reviews)</span>
                      </div>

                      <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                        {product.name || product.title || "Divine Idol"}
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
                        className="w-full bg-[#7b1e2b] hover:bg-[#5a1420] text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
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
      </div>
    </div>
  );
}