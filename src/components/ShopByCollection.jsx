



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiStar, BiShoppingBag, BiHeart } from "react-icons/bi";
// import useProductStore from "../store/useProductStore";
// // import useProductStore from "../../store/useProductStore";

// const collectionCategories = [
//   "Best Sellers",
//   "Puja Kits",
//   "Yantra",
//   "Rudraksha & Malas",
//   "Festival Collections"
// ];

// const CategoryProductGrid = ({ activeTab }) => {
//   const navigate = useNavigate();
//   const { fetchProducts, getBestSellers, products } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   let displayProducts = [];

//   if (activeTab === "Best Sellers") {
//     displayProducts = getBestSellers();
//   } else {
//     // 🔍 SMART FILTERING: Partial & Case-insensitive matching
//     const searchKey = activeTab.toLowerCase().trim();
    
//     displayProducts = products.filter((product) => {
//       const catName = product.category?.name?.toLowerCase().trim() || "";
//       const prodName = product.name?.toLowerCase().trim() || "";
//       const prodDesc = product.description?.toLowerCase().trim() || "";

//       // Agar category match kare ya product ke naam/description mein wo word ho
//       return (
//         catName.includes(searchKey) ||
//         searchKey.split(" ").some((word) => word.length > 2 && (catName.includes(word) || prodName.includes(word) || prodDesc.includes(word)))
//       );
//     });
//   }

//   // Fallback agar filter hone ke baad bhi 0 products milte hain
//   if (!displayProducts || displayProducts.length === 0) {
//     displayProducts = products.slice(0, 4);
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {displayProducts.map((product) => {
//         const prodId = product._id || product.id;
//         const prodImage = product.image;

//         return (
//           <div
//             key={prodId}
//             onClick={() => {
//               navigate(`/product/${prodId}`);
//               window.scrollTo({ top: 0, behavior: 'smooth' });
//             }}
//             className="bg-white border border-[#edd5b9] rounded-sm p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group relative"
//           >
//             <div>
//               {/* Product Image Box */}
//               <div className="w-full h-56 bg-stone-50 border border-stone-200 rounded-sm mb-3 overflow-hidden flex items-center justify-center relative">
//                 {prodImage && prodImage !== '/placeholder.jpg' ? (
//                   <img
//                     src={prodImage}
//                     alt={product.name || product.title}
//                     className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
//                   />
//                 ) : (
//                   <div className="text-stone-300 text-xs">No Image</div>
//                 )}

//                 <button 
//                   onClick={(e) => { e.stopPropagation(); }}
//                   className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white text-stone-600 hover:text-red-500 transition shadow-sm"
//                 >
//                   <BiHeart className="text-lg" />
//                 </button>
//               </div>

//               {/* Vendor / Category Label */}
//               <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
//                 {product.category?.name || activeTab}
//               </p>

//               {/* Product Title */}
//               <h4 className="text-xs sm:text-sm font-serif text-[#4a2e18] mb-2 line-clamp-2 leading-snug">
//                 {product.name || product.title}
//               </h4>

//               {/* Rating */}
//               <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
//                 <BiStar className="fill-amber-500" />
//                 <span className="font-bold text-stone-700">{product.rating || 4.8}</span>
//                 <span className="text-stone-400 text-[11px]">(24)</span>
//               </div>
//             </div>

//             {/* Price & Action Button */}
//             <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
//               <div>
//                 <span className="text-sm font-bold text-[#8b3a2b]">
//                   Rs. {product.price}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="block text-[11px] text-stone-400 line-through">
//                     Rs. {product.oldPrice}
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate(`/product/${prodId}`);
//                   window.scrollTo({ top: 0, behavior: 'smooth' });
//                 }}
//                 className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 rounded-sm text-xs transition flex items-center gap-1"
//               >
//                 <BiShoppingBag className="text-base" /> View
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const ShopByCollection = () => {
//   const [activeTab, setActiveTab] = useState("Best Sellers");

//   return (
//     <div className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
//             {activeTab === "Best Sellers" ? (
//               <>Bestsellers of <span className="italic font-normal">the Month</span></>
//             ) : (
//               <>Shop by <span className="italic font-normal">{activeTab}</span></>
//             )}
//           </h2>
//           <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
//         </div>

//         {/* Category Navigation Tabs */}
//         <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
//           {collectionCategories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(category)}
//               className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
//                 activeTab === category
//                   ? "bg-[#6b2314] text-white shadow-md scale-105"
//                   : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Grid Container */}
//         <div className="transition-all duration-500">
//           <CategoryProductGrid activeTab={activeTab} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCollection;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiStar, BiShoppingBag, BiHeart } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
// import useWishlistStore from "../../store/use/useWishlistStore"; // Apne path ke hisab se check kar lena

const collectionCategories = [
  "Best Sellers",
  "Puja Kits",
  "Yantra",
  "Rudraksha & Malas",
  "Festival Collections"
];

const CategoryProductGrid = ({ activeTab }) => {
  const navigate = useNavigate();
  const { fetchProducts, getBestSellers, products } = useProductStore();
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore();
  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let displayProducts = [];

  if (activeTab === "Best Sellers") {
    displayProducts = typeof getBestSellers === 'function' ? getBestSellers() : products.slice(0, 4);
  } else {
    const searchKey = activeTab.toLowerCase().trim();
    
    displayProducts = products.filter((product) => {
      const catName = product.category?.name?.toLowerCase().trim() || "";
      const prodName = product.name?.toLowerCase().trim() || "";
      const prodDesc = product.description?.toLowerCase().trim() || "";

      return (
        catName.includes(searchKey) ||
        searchKey.split(" ").some((word) => word.length > 2 && (catName.includes(word) || prodName.includes(word) || prodDesc.includes(word)))
      );
    });
  }

  if (!displayProducts || displayProducts.length === 0) {
    displayProducts = products.slice(0, 4);
  }

  // Wishlist Toggle Handler
  const handleWishlistToggle = async (e, product) => {
    e.stopPropagation();
    const prodId = product._id || product.id;
    const isAlreadyInWishlist = wishlist?.some(item => (item._id === prodId || item.id === prodId || item.productId?._id === prodId));

    if (isAlreadyInWishlist) {
      await removeFromWishlist(prodId);
      setToastMsg("Removed from wishlist");
    } else {
      await addToWishlist(product);
      setToastMsg("Added to wishlist ❤️");
    }
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-4 right-4 bg-[#6b23] text-white px-4 py-2 rounded shadow-lg z-50 text-xs font-medium">
          {toastMsg}
        </div>
      )}

      {displayProducts.map((product) => {
        const prodId = product._id || product.id;
        const prodImage = product.image;
        const isWishlisted = wishlist?.some(item => (item._id === prodId || item.id === prodId || item.productId?._id === prodId));

        return (
          <div
            key={prodId}
            onClick={() => {
              navigate(`/product/${prodId}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-yellow-600 border border-[#edd5b9] rounded-sm p-4 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group relative"
          >
            <div>
              {/* Product Image Box */}
              <div className="w-full h-56 bg-stone-50 border border-stone-200 rounded-sm mb-3 overflow-hidden flex items-center justify-center relative">
                {prodImage && prodImage !== '/placeholder.jpg' ? (
                  <img
                    src={prodImage}
                    alt={product.name || product.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-stone-300 text-xs">No Image</div>
                )}

                <button 
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full hover:bg-white text-stone-600 hover:text-red-500 transition shadow-sm"
                >
                  <BiHeart className={`text-lg ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} />
                </button>
              </div>

              {/* Vendor / Category Label */}
              <p className="text-[11px] uppercase tracking-wider text-black font-semibold mb-1">
                {product.category?.name || activeTab}
              </p>

              {/* Product Title */}
              <h4 className="text-xs sm:text-sm font-serif text-[#4a2e18] mb-2 line-clamp-2 leading-snug">
                {product.name || product.title}
              </h4>

              {/* Rating */}
              <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                <BiStar className="fill-amber-800" />
                <span className="font-bold text-stone-700">{product.rating || 4.8}</span>
                <span className="text-black text-[11px]">(24)</span>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-[#8b3a2b]">
                  Rs. {product.price}
                </span>
                {product.oldPrice && (
                  <span className="block text-[11px] text-stone-400 line-through">
                    Rs. {product.oldPrice}
                  </span>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${prodId}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-yellow-800 hover:bg-[#321e10] text-white px-3 py-1.5 rounded-sm text-xs transition flex items-center gap-1"
              >
                <BiShoppingBag className="text-base" /> View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ShopByCollection = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  return (
    <div className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl  text-[#4a2e18] tracking-wide inline-block font-semibold">
            {activeTab === "Best Sellers" ? (
              <>E-Shop <span className="">the Month</span></>
            ) : (
              <>Shop by <span className="italic font-normal">{activeTab}</span></>
            )}
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {collectionCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                activeTab === category
                  ? "bg-yellow-600 text-white shadow-md scale-105"
                  : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Container */}
        <div className="transition-all duration-500">
          <CategoryProductGrid activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;