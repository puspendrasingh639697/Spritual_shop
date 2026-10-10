// import { create } from 'zustand';
// import useProductStore from './useProductStore';

// const useWishlistStore = create((set, get) => ({
//   wishlist: [],
//   loading: false,
//   error: null,
//   isAuthenticated: false,

//   // Fetch wishlist
//   fetchWishlist: async () => {
//     const token = localStorage.getItem('token');
    
//     // ✅ Agar token nahi hai toh bina API hit kiye yahin se return kar do (401 error fix)
//     if (!token) {
//       console.log('🔑 User not authenticated for wishlist');
//       set({ 
//         wishlist: [], 
//         loading: false, 
//         isAuthenticated: false,
//         error: null 
//       });
//       return;
//     }

//     set({ loading: true, error: null });
//     try {
//       const response = await fetch('http://localhost:5000/api/wishlist', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         credentials: 'include',
//       });

//       if (response.status === 401) {
//         console.log('🔑 User session expired for wishlist');
//         set({ 
//           wishlist: [], 
//           loading: false, 
//           isAuthenticated: false,
//           error: null 
//         });
//         return;
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('📦 Wishlist API Response:', data);
      
//       const wishlistItems = data.products || [];
//       console.log('📦 Raw wishlist items:', wishlistItems);
      
//       // Extract product IDs from wishlist items
//       const productIds = wishlistItems
//         .map(item => {
//           if (item.productId && item.productId._id) {
//             return item.productId._id;
//           }
//           if (item.productId && typeof item.productId === 'object') {
//             return item.productId._id || null;
//           }
//           if (item._id) {
//             return item._id;
//           }
//           return null;
//         })
//         .filter(id => id !== null);
      
//       console.log('📦 Product IDs in wishlist:', productIds);
      
//       // Product store se complete products fetch karo
//       const productState = useProductStore.getState();
      
//       if (productState.products.length === 0) {
//         console.log('📦 Product store empty, fetching products...');
//         await productState.fetchProducts();
//       }
      
//       const allProducts = useProductStore.getState().products;
//       console.log('📦 All products in store:', allProducts.length);
      
//       // Product IDs ko full product details se map karo
//       const products = productIds
//         .map(id => {
//           const product = allProducts.find(p => p._id === id);
//           if (!product) {
//             console.warn(`⚠️ Product with ID ${id} not found in store`);
//             const fallbackItem = wishlistItems.find(item => 
//               item.productId?._id === id || item._id === id
//             );
//             if (fallbackItem) {
//               const productData = fallbackItem.productId || fallbackItem;
//               return {
//                 ...productData,
//                 _id: id,
//                 image: productData.image || null,
//                 stock: productData.stock || 0,
//                 price: productData.price || 0,
//                 category: productData.category || { name: 'General' }
//               };
//             }
//             return null;
//           }
//           return product;
//         })
//         .filter(product => product !== null);
      
//       console.log('📦 Final products with complete data:', products);
      
//       set({ 
//         wishlist: products, 
//         loading: false,
//         isAuthenticated: true,
//         error: null
//       });
      
//     } catch (error) {
//       console.error('❌ Error fetching wishlist:', error);
//       if (error.message?.includes('401')) {
//         set({ 
//           wishlist: [], 
//           loading: false, 
//           isAuthenticated: false,
//           error: null 
//         });
//       } else {
//         set({ error: error.message, loading: false });
//       }
//     }
//   },

//  // Add to wishlist
//   addToWishlist: async (product) => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       set({ 
//         error: 'Please login to add items to wishlist', 
//         loading: false 
//       });
//       return { 
//         success: false, 
//         error: 'Please login to add items to wishlist' 
//       };
//     }
    
//     // Yahan ensure karo ki agar product object hai toh _id nikle, warna direct ID use ho
//     const productId = typeof product === 'object' ? (product._id || product.id) : product;
    
//     set({ loading: true, error: null });
//     try {
//       const response = await fetch('http://localhost:5000/api/wishlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId }),
//         credentials: 'include',
//       });

//       if (response.status === 401) {
//         set({ 
//           error: 'Session expired. Please login again.', 
//           loading: false,
//           isAuthenticated: false 
//         });
//         return { 
//           success: false, 
//           error: 'Session expired. Please login again.' 
//         };
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('✅ Added to wishlist:', data);
      
//       await get().fetchWishlist();
      
//       return { success: true, data };
//     } catch (error) {
//       console.error('❌ Error adding to wishlist:', error);
//       set({ error: error.message, loading: false });
//       return { success: false, error: error.message };
//     }
//   },
//   // Remove from wishlist
//   removeFromWishlist: async (productId) => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       set({ 
//         error: 'Please login to manage wishlist', 
//         loading: false 
//       });
//       return { 
//         success: false, 
//         error: 'Please login to manage wishlist' 
//       };
//     }
    
//     set({ loading: true, error: null });
//     try {
//       const response = await fetch(`http://localhost:5000/api/wishlist/${productId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         credentials: 'include',
//       });

//       if (response.status === 401) {
//         set({ 
//           error: 'Session expired. Please login again.', 
//           loading: false,
//           isAuthenticated: false 
//         });
//         return { 
//           success: false, 
//           error: 'Session expired. Please login again.' 
//         };
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('❌ Removed from wishlist:', data);
      
//       await get().fetchWishlist();
      
//       return { success: true, data };
//     } catch (error) {
//       console.error('❌ Error removing from wishlist:', error);
//       set({ error: error.message, loading: false });
//       return { success: false, error: error.message };
//     }
//   },

//   // Check if product is in wishlist (by ID)
//   isInWishlist: (productId) => {
//     const state = get();
//     return state.wishlist.some(item => item._id === productId);
//   },

//   // Get wishlist count
//   getWishlistCount: () => {
//     const state = get();
//     return state.wishlist.length;
//   },

//   // Get wishlist products with full details
//   getWishlistProducts: () => {
//     const state = get();
//     return state.wishlist;
//   },

//   // Clear wishlist
//   clearWishlist: async () => {
//     set({ loading: true, error: null });
//     try {
//       const state = get();
//       let successCount = 0;
      
//       for (const item of state.wishlist) {
//         const result = await get().removeFromWishlist(item._id);
//         if (result.success) successCount++;
//       }
      
//       set({ wishlist: [], loading: false });
//       return { success: true, count: successCount };
//     } catch (error) {
//       console.error('❌ Error clearing wishlist:', error);
//       set({ error: error.message, loading: false });
//       return { success: false, error: error.message };
//     }
//   },

//   // Reset wishlist store
//   resetWishlist: () => {
//     set({ 
//       wishlist: [], 
//       loading: false, 
//       error: null,
//       isAuthenticated: false 
//     });
//   },
// }));

// export default useWishlistStore;


import { create } from 'zustand';
import axiosInstance from '../Utils/axiosInstance';
import useProductStore from './useProductStore';

const useWishlistStore = create((set, get) => ({
    wishlist: [],
    loading: false,
    error: null,
    isAuthenticated: false,

    // ✅ Fetch Wishlist
    fetchWishlist: async () => {
        const token = localStorage.getItem('token');
        
        // Agar token nahi hai toh API hit na karo
        if (!token) {
            console.log('🔑 User not authenticated for wishlist');
            set({ 
                wishlist: [], 
                loading: false, 
                isAuthenticated: false,
                error: null 
            });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get('/api/wishlist');
            const data = response.data;
            
            console.log('📦 Wishlist API Response:', data);
            
            const wishlistItems = data.products || data.wishlist || [];
            
            // Extract product IDs
            const productIds = wishlistItems
                .map(item => {
                    if (item.productId && item.productId._id) return item.productId._id;
                    if (item.productId && typeof item.productId === 'object') return item.productId._id || null;
                    if (item._id) return item._id;
                    return null;
                })
                .filter(id => id !== null);
            
            // Product store se complete products fetch karo
            const productState = useProductStore.getState();
            if (productState.products.length === 0) {
                await productState.fetchProducts();
            }
            
            const allProducts = useProductStore.getState().products;
            
            // Product IDs ko full product details se map karo
            const products = productIds
                .map(id => {
                    const product = allProducts.find(p => p._id === id);
                    if (product) return product;
                    
                    // Fallback
                    const fallbackItem = wishlistItems.find(item => 
                        item.productId?._id === id || item._id === id
                    );
                    if (fallbackItem) {
                        const productData = fallbackItem.productId || fallbackItem;
                        return {
                            ...productData,
                            _id: id,
                            image: productData.image || null,
                            stock: productData.stock || 0,
                            price: productData.price || 0,
                            category: productData.category || { name: 'General' }
                        };
                    }
                    return null;
                })
                .filter(product => product !== null);
            
            set({ 
                wishlist: products, 
                loading: false,
                isAuthenticated: true,
                error: null
            });
            
        } catch (error) {
            console.error('❌ Error fetching wishlist:', error);
            if (error.response?.status === 401) {
                set({ 
                    wishlist: [], 
                    loading: false, 
                    isAuthenticated: false,
                    error: null 
                });
            } else {
                set({ 
                    error: error.response?.data?.message || error.message, 
                    loading: false 
                });
            }
        }
    },

    // ✅ Add to Wishlist
    addToWishlist: async (productOrId) => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            return { 
                success: false, 
                error: 'Please login to add items to wishlist' 
            };
        }
        
        const productId = typeof productOrId === 'object' 
            ? (productOrId._id || productOrId.id) 
            : productOrId;
        
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.post('/api/wishlist', { productId });
            
            console.log('✅ Added to wishlist:', response.data);
            await get().fetchWishlist();
            
            return { success: true, data: response.data };
        } catch (error) {
            console.error('❌ Error adding to wishlist:', error);
            const errorMsg = error.response?.data?.message || error.message;
            set({ error: errorMsg, loading: false });
            return { success: false, error: errorMsg };
        }
    },

    // ✅ Remove from Wishlist
    removeFromWishlist: async (productId) => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            return { 
                success: false, 
                error: 'Please login to manage wishlist' 
            };
        }
        
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.delete(`/api/wishlist/${productId}`);
            
            console.log('❌ Removed from wishlist:', response.data);
            await get().fetchWishlist();
            
            return { success: true, data: response.data };
        } catch (error) {
            console.error('❌ Error removing from wishlist:', error);
            const errorMsg = error.response?.data?.message || error.message;
            set({ error: errorMsg, loading: false });
            return { success: false, error: errorMsg };
        }
    },

    // ✅ Toggle Wishlist (Add or Remove)
    toggleWishlist: async (productOrId) => {
        const state = get();
        const productId = typeof productOrId === 'object' 
            ? (productOrId._id || productOrId.id) 
            : productOrId;

        const isAlreadyInWishlist = state.wishlist.some(
            item => item._id === productId || item.id === productId
        );

        if (isAlreadyInWishlist) {
            return await state.removeFromWishlist(productId);
        } else {
            return await state.addToWishlist(productOrId);
        }
    },

    // ✅ Check if product is in wishlist
    isInWishlist: (productId) => {
        const state = get();
        return state.wishlist.some(item => item._id === productId);
    },

    // ✅ Get wishlist count
    getWishlistCount: () => {
        const state = get();
        return state.wishlist.length;
    },

    // ✅ Get wishlist products
    getWishlistProducts: () => {
        const state = get();
        return state.wishlist;
    },

    // ✅ Clear wishlist (Local Only)
    clearWishlist: () => {
        set({ wishlist: [], loading: false, error: null });
    },

    // ✅ Reset wishlist store
    resetWishlist: () => {
        set({ 
            wishlist: [], 
            loading: false, 
            error: null,
            isAuthenticated: false 
        });
    },
}));

export default useWishlistStore;