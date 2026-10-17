// // // // import React from "react";
// // // // import { rudrakshaMalasProducts } from "../data/rudrakshaMalasData";

// // // // const RudrakshaMalas = () => {
// // // //   const handleAddToCart = (item, e) => {
// // // //     e.stopPropagation();
// // // //     console.log(`Added to cart: ${item.title}`);
// // // //   };

// // // //   const handleCardClick = (item) => {
// // // //     console.log(`Viewing item: ${item.title}`);
// // // //   };

// // // //   return (
// // // //     <section className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
// // // //       <div className="max-w-[1400px] mx-auto">

// // // //         {/* Section Header */}
// // // //         <div className="text-center mb-10">
// // // //           <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
// // // //             Rudraksha & <span className="italic font-normal">Malas</span>
// // // //           </h2>
// // // //           <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
// // // //         </div>

// // // //         {/* Products Grid (4 Columns) */}
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
// // // //           {rudrakshaMalasProducts.map((product) => (
// // // //             <div 
// // // //               key={product.id}
// // // //               onClick={() => handleCardClick(product)}
// // // //               className="bg-white rounded-xl shadow-sm border border-[#e6d0b3] flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
// // // //             >
// // // //               {/* Image & Badge Container */}
// // // //               <div className="relative w-full h-[280px] bg-[#fdf2f0] overflow-hidden flex items-center justify-center p-4 border-b border-[#f0e4d7]">
// // // //                 {product.badge && (
// // // //                   <span className="absolute top-3 left-3 bg-[#4a2e18] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
// // // //                     {product.badge}
// // // //                   </span>
// // // //                 )}
// // // //                 <img 
// // // //                   src={product.image} 
// // // //                   alt={product.title} 
// // // //                   loading="lazy"
// // // //                   className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
// // // //                 />
// // // //               </div>

// // // //               {/* Product Info */}
// // // //               <div className="p-5 flex flex-col items-center text-center flex-grow">
// // // //                 <span className="text-[11px] uppercase tracking-wider text-[#8b3a2b] font-medium mb-1">
// // // //                   Divine Hindu
// // // //                 </span>
// // // //                 <h3 className="text-xs sm:text-sm font-serif text-[#3d2314] font-medium leading-snug line-clamp-2 mb-3 group-hover:text-[#8b3a2b] transition-colors">
// // // //                   {product.title}
// // // //                 </h3>

// // // //                 {/* Rating */}
// // // //                 <div className="flex items-center gap-1 mb-3 text-amber-500 text-xs">
// // // //                   <span>★</span>
// // // //                   <span className="text-[#3d2314] font-semibold">{product.rating}</span>
// // // //                   <span className="text-gray-400">({product.reviews})</span>
// // // //                 </div>

// // // //                 {/* Price Section */}
// // // //                 <div className="flex items-center gap-2 mb-4 mt-auto">
// // // //                   <span className="text-sm sm:text-base font-semibold text-[#8b3a2b]">{product.price}</span>
// // // //                   <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Add to Cart Button */}
// // // //               <button 
// // // //                 onClick={(e) => handleAddToCart(product, e)}
// // // //                 className="w-full bg-[#4a2e18] hover:bg-[#8b3a2b] text-white text-xs font-semibold uppercase tracking-wider py-3.5 transition-colors duration-200"
// // // //               >
// // // //                 Add to Cart
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default RudrakshaMalas;

// // // import React, { useEffect } from 'react';
// // // import useProductStore from '../store/useProductStore';
// // // // import useProductStore from '../store/productStore';

// // // const RudrakshaMalas = () => {
// // //   const { products, loading, error, fetchProducts, getProductsByCategory } = useProductStore();
// // //   const rudrakshas = getProductsByCategory('Rudraksha & Malas');

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center py-12">
// // //         <div className="text-[#4a2e18]">Loading products...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="flex justify-center items-center py-12">
// // //         <div className="text-red-600">Error: {error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //       {rudrakshas.length > 0 ? (
// // //         rudrakshas.map((product) => (
// // //           <div
// // //             key={product._id}
// // //             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
// // //           >
// // //             <div className="aspect-square overflow-hidden">
// // //               <img
// // //                 src={product.image}
// // //                 alt={product.name}
// // //                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// // //               />
// // //             </div>
// // //             <div className="p-4">
// // //               <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2 min-h-[40px]">
// // //                 {product.name}
// // //               </h3>
// // //               <p className="text-[#8b3a2b] font-bold mt-2">
// // //                 ₹{product.price.toLocaleString()}
// // //               </p>
// // //               <button className="mt-3 w-full bg-[#6b2314] text-white py-2 rounded-md hover:bg-[#8b3a2b] transition-colors duration-300 text-sm">
// // //                 Add to Cart
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <div className="col-span-full text-center py-8 text-[#4a2e18]">
// // //           No Rudraksha & Malas available
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default RudrakshaMalas;

// // import React, { useEffect, useState } from 'react';
// // // import useProductStore from '../store/productStore';
// // // import useWishlistStore from '../store/wishlistStore';
// // import { Heart } from 'lucide-react';
// // import useProductStore from '../store/useProductStore';
// // import useWishlistStore from '../store/useWishlistStore';

// // const RudrakshaMalas = () => {
// //   const { products, loading, error, fetchProducts, getProductsByCategory } = useProductStore();
// //   const { 
// //     wishlist, 
// //     addToWishlist, 
// //     removeFromWishlist, 
// //     fetchWishlist,
// //     isInWishlist 
// //   } = useWishlistStore();
// //   const [wishlistLoading, setWishlistLoading] = useState(null);
// //   const [showLoginToast, setShowLoginToast] = useState(false);

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();
// //   }, []);

// //   const handleWishlistToggle = async (productId) => {
// //     setWishlistLoading(productId);
    
// //     if (isInWishlist(productId)) {
// //       const result = await removeFromWishlist(productId);
// //       if (!result.success && result.error?.includes('login')) {
// //         setShowLoginToast(true);
// //         setTimeout(() => setShowLoginToast(false), 3000);
// //       }
// //     } else {
// //       const result = await addToWishlist(productId);
// //       if (!result.success && result.error?.includes('login')) {
// //         setShowLoginToast(true);
// //         setTimeout(() => setShowLoginToast(false), 3000);
// //       }
// //     }
    
// //     setWishlistLoading(null);
// //   };

// //   const rudrakshas = getProductsByCategory('Rudraksha & Malas');

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-[#4a2e18]">Loading products...</div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-red-600">Error: {error}</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       {showLoginToast && (
// //         <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
// //           Please login to manage wishlist
// //         </div>
// //       )}

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {rudrakshas.map((product) => (
// //           <div
// //             key={product._id}
// //             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
// //           >
// //             {/* Wishlist Button */}
// //             <button
// //               onClick={() => handleWishlistToggle(product._id)}
// //               disabled={wishlistLoading === product._id}
// //               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
// //             >
// //               <Heart 
// //                 className={`w-5 h-5 transition-colors ${
// //                   isInWishlist(product._id) 
// //                     ? 'fill-red-500 text-red-500' 
// //                     : 'text-gray-400 hover:text-red-500'
// //                 } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// //               />
// //             </button>

// //             <div className="aspect-square overflow-hidden">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// //                 onError={(e) => {
// //                   e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
// //                 }}
// //               />
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2 min-h-[40px]">
// //                 {product.name}
// //               </h3>
// //               <p className="text-[#8b3a2b] font-bold mt-2">
// //                 ₹{product.price?.toLocaleString() || product.price}
// //               </p>
// //               <button className="mt-3 w-full bg-[#6b2314] text-white py-2 rounded-md hover:bg-[#8b3a2b] transition-colors duration-300 text-sm">
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default RudrakshaMalas;


// import React, { useEffect, useState } from 'react';
// import { Heart, ShoppingBag } from 'lucide-react';
// import useProductStore from '../store/useProductStore';
// import useWishlistStore from '../store/useWishlistStore';
// import useCartStore from '../store/useCartStore';
// import { useNavigate } from 'react-router-dom';

// const RudrakshaMalas = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts, getRudrakshaMalas } = useProductStore();
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

//   const items = getRudrakshaMalas ? getRudrakshaMalas() : products.filter(p => p.category?.name === 'Rudraksha & Malas');

//   if (loading) return <div className="text-center py-12">Loading...</div>;
//   if (items.length === 0) return <div className="text-center py-12">No Rudraksha & Malas available</div>;

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

// export default RudrakshaMalas;


import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const RudrakshaMalas = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts, getRudrakshaMalas } = useProductStore();
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

  // 🔴 SMART DATA FILTERING (Fix for empty items)
  let items = [];
  
  if (products && products.length > 0) {
    const rudrakshaProducts = products.filter(p => {
      const catName = (p.category?.name || "").toLowerCase().trim();
      return (
        catName.includes("rudraksha") || 
        catName.includes("mala") || 
        catName.includes("rudraksha & malas")
      );
    });

    if (rudrakshaProducts.length > 0) {
      items = rudrakshaProducts;
    } else if (typeof getRudrakshaMalas === 'function') {
      const storeItems = getRudrakshaMalas();
      items = storeItems && storeItems.length > 0 ? storeItems : [];
    } 
    
    // Fallback if still empty
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
    // 🔴 Glassmorphism Background
    <div className="w-full bg-gradient-to-br from-[#fffdfa] via-[#fff7ed] to-[#f5e6d3] min-h-screen pb-16">
      
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {items.map((product) => (
            <div 
              key={product._id} 
              className=" bg-gradient-to-br from-[#fffdfa] via-[#fff7ed] to-[#f5e6d3] backdrop-blur-md rounded-md shadow-sm hover:shadow-xl border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden"
            >
              
              {/* Image Container with Dark Blur Filter */}
              <div className="relative overflow-hidden bg-gray-100 h-52 w-full">
                <img 
                  src={product.image || "https://via.placeholder.com/400?text=No+Image"} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => e.target.src = "https://via.placeholder.com/400?text=No+Image"}
                />
                
                {/* Overlay */}
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
                  <p className="text-[10px] uppercase tracking-wider text-[#7b1e2b] font-bold mb-1">
                    {product.category?.name || "Rudraksha"}
                  </p>
                  <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div>
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

export default RudrakshaMalas;