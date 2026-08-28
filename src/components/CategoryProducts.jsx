



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';

const CategoryProducts = () => {
  const { categoryName } = useParams(); // Yeh URL se slug ya id kuch bhi ho sakta hai
  const navigate = useNavigate();
  
  const { products, loading, fetchProducts } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
const handleAddToCart = async (product) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }
    
    setUserId(actualUserId);
    
    // Yahan hum strictly product ka _id nikal kar bhej rahe hain
    const realProductId = product._id || product.id;

    const result = await addToCart(realProductId, 1);
    
    if (result.success) {
      showToastMessage('Item added to cart! 🛒');
    } else {
      showToastMessage(result.error || 'Failed to add');
    }
  };


// const handleAddToCart = async (product) => {
//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

//     if (!token || !actualUserId) {
//       showToastMessage('Please login to add items to cart');
//       setTimeout(() => navigate('/login'), 2000);
//       return;
//     }
    
//     setUserId(actualUserId);
    
//     // Yahan hum ensure kar rahe hain ki product ke sath uska _id ya id zaroor jaye
//     const productPayload = {
//       ...product,
//       id: product._id || product.id
//     };

//     const result = await addToCart(productPayload, 1);
    
//     if (result.success) {
//       showToastMessage('Item added to cart! 🛒');
//     } else {
//       showToastMessage(result.error || 'Failed to add');
//     }
//   };
  // const handleAddToCart = async (productId) => {
  //   const token = localStorage.getItem('token');
  //   const user = JSON.parse(localStorage.getItem('user') || '{}');
  //   const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

  //   if (!token || !actualUserId) {
  //     showToastMessage('Please login to add items to cart');
  //     setTimeout(() => navigate('/login'), 2000);
  //     return;
  //   }
    
  //   setUserId(actualUserId);
  //   const result = await addToCart(productId, 1);
  //   if (result.success) {
  //     showToastMessage('Item added to cart! 🛒');
  //   } else {
  //     showToastMessage(result.error || 'Failed to add');
  //   }
  // };

  const handleWishlistToggle = async (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      showToastMessage('Please login to manage wishlist');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    const productId = product._id || product.id;
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage('Removed from wishlist');
    } else {
      await addToWishlist(product);
      showToastMessage('Added to wishlist ❤️');
    }
  };

  console.log("Current URL Category Param:", categoryName);
  console.log("All Products Data:", products);

  // 🔍 Filtering Logic for Populated Objects and IDs
  const filteredProducts = products.filter(p => {
    if (!p.category) return false;

    const prodCatId = typeof p.category === 'object' 
      ? (p.category._id || p.category.id) 
      : p.category;

    const prodCatSlug = typeof p.category === 'object' ? p.category.slug : '';
    const param = categoryName?.trim() || '';

    return (
      prodCatId?.toString() === param?.toString() ||
      prodCatSlug?.toLowerCase() === param?.toLowerCase()
    );
  });

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fff3df]">
        <p className="text-sm font-serif text-[#4a2e18] animate-pulse">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4 sm:px-6 lg:px-12 bg-[#fff3df] min-h-screen">
      {showToast && (
        <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50 text-xs font-bold uppercase tracking-wider">
          {toastMessage}
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4a2e18] capitalize mb-8 border-b border-[#4a2e18]/20 pb-4">
        {categoryName?.replace(/-/g, ' ')}
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white border border-stone-200 rounded-sm shadow-sm max-w-2xl mx-auto my-10">
          {/* Puja Kit Banner / Placeholder Image */}
          <div className="w-full h-56 sm:h-64 bg-stone-100 rounded-md overflow-hidden mb-6 flex items-center justify-center p-4">
            <img 
              src="https://images.unsplash.com/photo-1609372214698-0e7f8976d1e4?auto=format&fit=crop&w=800&q=80" 
              alt="Puja Kit Special" 
              className="w-full h-full object-cover rounded-sm shadow-inner opacity-90"
            />
          </div>

          <h3 className="text-xl font-serif text-[#4a2e18] font-medium mb-2">
            Divine Puja Kits Coming Soon!
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
            We are curating the finest spiritual and daily puja essentials for this category. Stay tuned or explore our other sacred collections.
          </p>

          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-[#6b2314] hover:bg-[#8b3a2b] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition shadow-md cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const productId = product._id || product.id;
            const isWishlisted = isInWishlist(productId);

            return (
              <div 
                key={productId} 
                className="bg-white border border-stone-200/80 rounded-sm shadow-sm overflow-hidden relative group flex flex-col justify-between"
              >
                <button
                  onClick={() => handleWishlistToggle(product)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-xs rounded-full shadow-md text-stone-600 hover:text-rose-600 transition cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-600 text-rose-600" : ""}`} />
                </button>

                <div 
                  onClick={() => navigate(`/product/${productId}`)}
                  className="aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-4 cursor-pointer relative"
                >
                  <img 
                    src={product.image || product.images?.[0]} 
                    alt={product.name} 
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div onClick={() => navigate(`/product/${productId}`)} className="cursor-pointer">
                    <h3 className="text-xs sm:text-sm font-bold text-[#4a2e18] uppercase line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-[#6b2314] mt-1">₹{product.price}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                   <button 
  onClick={() => handleAddToCart(product)}
  className="w-full py-2.5 bg-[#6b2314] hover:bg-[#8b3a2b] text-white rounded-xs transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
>
  <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
</button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;