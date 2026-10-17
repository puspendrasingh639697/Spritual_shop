


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BiHeart, BiShoppingBag } from "react-icons/bi";
// import useProductStore from "../store/useProductStore"; // 👈 Apna store path check kar lena
// import useWishlistStore from "../store/useWishlistStore"; // 👈 Wishlist store

// export default function PujaSamagri({ products: propProducts }) {
//   const { fetchProducts, products: storeProducts, loading } = useProductStore();
//   const { toggleWishlist, wishlist } = useWishlistStore();
  
//   const [localProducts, setLocalProducts] = useState([]);

//   // ⭐ Agar parent se data nahi aaya, to API se fetch karo
//   useEffect(() => {
//     if (!propProducts || propProducts.length === 0) {
//       if (typeof fetchProducts === "function") {
//         fetchProducts(); // Store se data fetch karega
//       }
//     }
//   }, [propProducts, fetchProducts]);

//   // ⭐ Data set karo (Parent se aaye to wahi, warna store se, warna empty)
//   useEffect(() => {
//     if (propProducts && propProducts.length > 0) {
//       setLocalProducts(propProducts);
//     } else if (storeProducts && storeProducts.length > 0) {
//       setLocalProducts(storeProducts);
//     }
//   }, [propProducts, storeProducts]);

//   // Display ke liye max 8 products (UI clean rakhne ke liye)
//   const displayProducts = localProducts.slice(0, 8);

//   // ✅ Wishlist Toggle
//   const handleWishlistToggle = async (e, product) => {
//     e.stopPropagation(); // Card click roko
//     const prodId = product._id || product.id;
//     if (typeof toggleWishlist === "function") {
//       await toggleWishlist(prodId);
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  min-h-screen font-sans pb-16">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
//                {/* ================= HEADER ================= */}
//         <div className="mb-8 border-b border-[#7b1e2b]/20 pb-4 flex flex-col items-center justify-center text-center">
//           <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#7b1e2b] mb-2">
//             All Puja Samagri & Kits
//           </h2>
//           {/* Center Underline */}
//           <div className="w-16 h-1 bg-[#7b1e2b] rounded-full"></div>
//         </div>

//         {/* ================= LOADING STATE ================= */}
//         {loading && localProducts.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
//             <p className="mt-3 text-[#7b1e2b] font-semibold">Loading Products...</p>
//           </div>
//         ) : displayProducts.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 font-semibold">
//             No Products available at the moment.
//           </div>
//         ) : (
//           /* ================= PRODUCTS GRID ================= */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {displayProducts.map((product) => {
//               const prodId = product._id || product.id;
              
//               // Wishlist check
//               const isWishlisted = wishlist?.some(item => 
//                 (item._id === prodId || item.id === prodId || item.productId?._id === prodId)
//               );

//               // Image fallback
//               const prodImage = product.image || product.images?.[0] || "https://via.placeholder.com/400x300?text=Product";
              
//               // Price & Ratings
//               const finalPrice = product.pricing?.single || product.price || 0;
//               const oldPrice = product.originalPrice || product.oldPrice;
//               const rating = product.rating || "4.8";
//               const reviewsCount = product.reviews || product.reviewsCount || "24";
              
//               // Tag fallback (Agar API me tag nahi hai to "Best Seller" dikhega)
//               const tag = product.tag || product.category?.name || "Popular";

//               return (
//                 <div 
//                   key={prodId}
//                   className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7b1e2b]/20 hover:shadow-xl hover:border-[#7b1e2b]/50 transition-all flex flex-col justify-between group relative cursor-pointer"
//                 >
//                   {/* Image & Tags Container */}
//                   <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
//                     <img 
//                       src={prodImage} 
//                       alt={product.name || "Product"}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/400x300?text=Product";
//                       }}
//                     />
                    
//                     {/* Tag Badge (Maroon) */}
//                     <span className="absolute top-3 left-3 bg-[#7b1e2b] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow uppercase tracking-wider">
//                       {tag}
//                     </span>

//                     {/* Wishlist Button */}
//                     <button 
//                       onClick={(e) => handleWishlistToggle(e, product)}
//                       className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform z-10"
//                     >
//                       <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-400"} />
//                     </button>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-4 flex flex-col flex-grow justify-between">
//                     <div>
//                       {/* Rating */}
//                       <div className="flex items-center gap-1 text-xs text-[#7b1e2b] font-bold mb-1">
//                         <span>⭐ {rating}</span>
//                         <span className="text-gray-400 font-normal">({reviewsCount} reviews)</span>
//                       </div>

//                       {/* Title */}
//                       <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors">
//                         {product.name || product.title || "Puja Product"}
//                       </h3>
//                     </div>

//                     <div>
//                       {/* Pricing */}
//                       <div className="flex items-center gap-2 mb-4">
//                         <span className="text-lg font-bold text-[#7b1e2b]">
//                           ₹{finalPrice.toLocaleString()}
//                         </span>
//                         {oldPrice && (
//                           <span className="text-sm text-gray-400 line-through">
//                             ₹{oldPrice.toLocaleString()}
//                           </span>
//                         )}
//                       </div>

//                       {/* Action Button (Link to Product Page) */}
//                       <Link
//                         to={`/product/${prodId}`}
//                         className="w-full bg-[#7b1e2b] hover:bg-[#5a1420] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
//                       >
//                         <BiShoppingBag className="text-lg" /> View Product
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";

export default function PujaSamagri({ products: propProducts }) {
  const { fetchProducts, products: storeProducts, loading } = useProductStore();
  const { toggleWishlist, wishlist } = useWishlistStore();
  
  const [localProducts, setLocalProducts] = useState([]);

  // ⭐ Fetch data
  useEffect(() => {
    if (!propProducts || propProducts.length === 0) {
      if (typeof fetchProducts === "function") {
        fetchProducts();
      }
    }
  }, [propProducts, fetchProducts]);

  useEffect(() => {
    if (propProducts && propProducts.length > 0) {
      setLocalProducts(propProducts);
    } else if (storeProducts && storeProducts.length > 0) {
      setLocalProducts(storeProducts);
    }
  }, [propProducts, storeProducts]);

  const displayProducts = localProducts.slice(0, 8);

  // ✅ Wishlist Toggle
  const handleWishlistToggle = async (e, product) => {
    e.stopPropagation();
    const prodId = product._id || product.id;
    if (typeof toggleWishlist === "function") {
      await toggleWishlist(prodId);
    }
  };

  return (
    <div className="w-full  bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  min-h-screen font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
        {/* ================= HEADER ================= */}
        <div className="mb-8 border-b border-[#7b1e2b]/20 pb-4 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#7b1e2b] mb-2">
            All Puja Samagri & Kits
          </h2>
          <div className="w-16 h-1 bg-[#7b1e2b] rounded-full"></div>
        </div>

        {/* ================= LOADING STATE ================= */}
        {loading && localProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-semibold">Loading Products...</p>
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-semibold">
            No Products available at the moment.
          </div>
        ) : (
          /* ================= PRODUCTS GRID ================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {displayProducts.map((product) => {
              const prodId = product._id || product.id;
              
              const isWishlisted = wishlist?.some(item => 
                (item._id === prodId || item.id === prodId || item.productId?._id === prodId)
              );

              const prodImage = product.image || product.images?.[0] || "https://via.placeholder.com/400x300?text=Product";
              
              const finalPrice = product.pricing?.single || product.price || 0;
              const oldPrice = product.originalPrice || product.oldPrice;
              const rating = product.rating || "4.8";
              const reviewsCount = product.reviews || product.reviewsCount || "24";
              const tag = product.tag || product.category?.name || "Popular";

              return (
                <div 
                  key={prodId}
                  className=" bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] backdrop-blur-xl rounded-md shadow-sm hover:shadow-xl overflow-hidden border border-[#7b1e2b]/10 hover:border-[#7b1e2b]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
                >
                  {/* Image Container - Full Width & Height Cover */}
                  <div className="relative overflow-hidden bg-gray-100 h-52 w-full">
                    <img 
                      src={prodImage} 
                      alt={product.name || "Product"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Product";
                      }}
                    />
                    
                    {/* 🔴 Dark Blur & Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Tag Badge */}
                    <span className="absolute top-3 left-3 bg-[#7b1e2b] text-white text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider z-10">
                      {tag}
                    </span>

                    {/* Wishlist Button */}
                    <button 
                      onClick={(e) => handleWishlistToggle(e, product)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md text-lg hover:scale-110 transition-transform z-10"
                    >
                      <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-600"} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between bg-white/50">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-[11px] text-[#7b1e2b] font-bold mb-1">
                        <span>⭐ {rating}</span>
                        <span className="text-gray-500 font-normal">({reviewsCount} reviews)</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#7b1e2b] transition-colors leading-snug">
                        {product.name || product.title || "Puja Product"}
                      </h3>
                    </div>

                    <div>
                      {/* Pricing */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-[#7b1e2b]">
                          ₹{finalPrice.toLocaleString()}
                        </span>
                        {oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <Link
                        to={`/product/${prodId}`}
                        className="w-full bg-[#7b1e2b] hover:bg-[#5a1420] text-white py-2.5 rounded-md text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                      >
                        <BiShoppingBag className="text-sm" /> View Product
                      </Link>
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