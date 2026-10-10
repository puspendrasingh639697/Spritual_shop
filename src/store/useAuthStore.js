


// // // // // import { create } from 'zustand';
// // // // // import API from '../services/api';
// // // // // import useCartStore from './useCartStore';
// // // // // import useWishlistStore from './useWishlistStore';


// // // // // const useAuthStore = create((set, get) => ({
// // // // //     user: JSON.parse(localStorage.getItem('user')) || null,
// // // // //     token: localStorage.getItem('token') || null,
// // // // //     refreshTokenValue: localStorage.getItem('refreshToken') || null,
// // // // //     role: localStorage.getItem('role') || 'user',

// // // // //     register: async (name, email, password, role) => {
// // // // //         try {
// // // // //             const { data } = await API.post('/auth/register', { name, email, password, role });
// // // // //             return { 
// // // // //                 success: true, 
// // // // //                 message: data.message || "Registered Successfully!" 
// // // // //             };
// // // // //         } catch (error) {
// // // // //             return { 
// // // // //                 success: false, 
// // // // //                 message: error.response?.data?.message || 'Registration failed' 
// // // // //             };
// // // // //         }
// // // // //     },
// // // // // login: async (email, password) => {
// // // // //     try {
// // // // //         console.log('🔐 ===== LOGIN STARTED =====');
// // // // //         const { data } = await API.post('/auth/login', { email, password });
        
// // // // //         console.log('📦 Login Response:', data);
        
// // // // //         const userToken = data.token;
// // // // //         const refreshToken = data.refreshToken;

// // // // //         // ✅ Backend user object nahi de raha, isliye Token se decode karo
// // // // //         let userData = data.user;
        
// // // // //         if (!userData && userToken) {
// // // // //             try {
// // // // //                 const payload = JSON.parse(atob(userToken.split('.')[1]));
// // // // //                 userData = {
// // // // //                     id: payload.id || payload._id,
// // // // //                     email: payload.email,
// // // // //                     role: payload.role || 'user',
// // // // //                     name: payload.name || ''
// // // // //                 };
// // // // //                 console.log('📦 User from Token:', userData);
// // // // //             } catch (decodeError) {
// // // // //                 console.error('❌ Failed to decode token:', decodeError);
// // // // //             }
// // // // //         }

// // // // //         const userRole = userData?.role || 'user';
// // // // //         const userId = userData?.id || userData?._id;

// // // // //         // Save to localStorage
// // // // //         localStorage.setItem('token', userToken);
// // // // //         if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
// // // // //         localStorage.setItem('role', userRole);
// // // // //         localStorage.setItem('user', JSON.stringify(userData));
// // // // //         localStorage.setItem('cartUserId', userId); // ✅ Save cartUserId

// // // // //         // Set auth state
// // // // //         set({ 
// // // // //             user: userData, 
// // // // //             token: userToken, 
// // // // //             refreshTokenValue: refreshToken, 
// // // // //             role: userRole 
// // // // //         });

// // // // //         // ✅ IMPORTANT: Set user ID in cart store
// // // // //         if (userId) {
// // // // //             console.log('🛒 Setting user ID in cart store:', userId);
// // // // //             const { setUserId, fetchCart } = useCartStore.getState();
// // // // //             setUserId(userId);
            
// // // // //             await fetchCart(userId);
            
// // // // //             const { fetchWishlist } = useWishlistStore.getState();
// // // // //             await fetchWishlist();
            
// // // // //             console.log('✅ Cart and Wishlist initialized!');
// // // // //         }

// // // // //         return { success: true, user: userData };
// // // // //     } catch (error) {
// // // // //         console.error('❌ Login error:', error);
// // // // //         return { 
// // // // //             success: false, 
// // // // //             message: error.response?.data?.message || 'Login failed' 
// // // // //         };
// // // // //     }
// // // // // },

// // // // //     refreshToken: async (refreshTokenStr) => {
// // // // //         try {
// // // // //             const { data } = await API.post('/auth/refresh-token', { refreshToken: refreshTokenStr });
            
// // // // //             const newToken = data.token; 
// // // // //             if (newToken) {
// // // // //                 localStorage.setItem('token', newToken);
// // // // //                 set({ token: newToken });
// // // // //             }

// // // // //             return { 
// // // // //                 success: true, 
// // // // //                 token: newToken, 
// // // // //                 message: data.message || 'Token refreshed successfully!' 
// // // // //             };
// // // // //         } catch (error) {
// // // // //             return { 
// // // // //                 success: false, 
// // // // //                 message: error.response?.data?.message || 'Invalid or expired Refresh Token!' 
// // // // //             };
// // // // //         }
// // // // //     },

// // // // //     logout: () => {
// // // // //         console.log('🔐 ===== LOGOUT STARTED =====');
        
// // // // //         localStorage.removeItem('token');
// // // // //         localStorage.removeItem('refreshToken');
// // // // //         localStorage.removeItem('role');
// // // // //         localStorage.removeItem('user');
// // // // //         localStorage.removeItem('cartUserId');
        
// // // // //         set({ user: null, token: null, refreshTokenValue: null, role: 'user' });
        
// // // // //         const { resetCart } = useCartStore.getState();
// // // // //         const { resetWishlist } = useWishlistStore.getState();
// // // // //         resetCart();
// // // // //         resetWishlist();
        
// // // // //         console.log('✅ Logged out successfully!');
// // // // //     },

// // // // //     getUserId: () => {
// // // // //         const state = get();
// // // // //         return state.user?.id || state.user?._id || localStorage.getItem('cartUserId') || null;
// // // // //     },

// // // // //     isAuthenticated: () => {
// // // // //         const state = get();
// // // // //         return !!state.token && !!state.user;
// // // // //     },
// // // // // }));

// // // // // export default useAuthStore;


// // // // import { create } from 'zustand';
// // // // // import axiosInstance from '../utils/axiosInstance';  // ✅ सही इम्पोर्ट
// // // // import useCartStore from './useCartStore';
// // // // import useWishlistStore from './useWishlistStore';
// // // // import axiosInstance from '../Utils/axiosInstance';

// // // // const useAuthStore = create((set, get) => ({
// // // //     user: JSON.parse(localStorage.getItem('user')) || null,
// // // //     token: localStorage.getItem('token') || null,
// // // //     refreshTokenValue: localStorage.getItem('refreshToken') || null,
// // // //     role: localStorage.getItem('role') || 'user',

  
// // // // register: async (name, email, password, role, phone) => {
// // // //     try {
// // // //         const { data } = await axiosInstance.post('/api/user/register', { 
// // // //             name, email, password, role, phone 
// // // //         });

// // // //         console.log('📦 Register Response:', data);  // ✅ Debug के लिए

// // // //         // ✅ Token और User सेव करें
// // // //         if (data.token) {
// // // //             localStorage.setItem('token', data.token);
// // // //             localStorage.setItem('user', JSON.stringify({
// // // //                 _id: data._id,
// // // //                 name: data.name,
// // // //                 email: data.email,
// // // //                 role: data.role
// // // //             }));
// // // //             localStorage.setItem('cartUserId', data._id);
// // // //             localStorage.setItem('role', data.role);
            
// // // //             set({ 
// // // //                 user: { _id: data._id, name: data.name, email: data.email, role: data.role },
// // // //                 token: data.token,
// // // //                 role: data.role 
// // // //             });
// // // //         }

// // // //         return { 
// // // //             success: true, 
// // // //             message: "Registration Successful!",
// // // //             user: data 
// // // //         };
// // // //     } catch (error) {
// // // //         console.error('❌ Register Error:', error.response?.data || error.message);
// // // //         return { 
// // // //             success: false, 
// // // //             message: error.response?.data?.message || error.response?.data?.errors?.[0] || 'Registration failed' 
// // // //         };
// // // //     }
// // // // },
// // // //     // ✅ LOGIN
// // // //     login: async (email, password) => {
// // // //         try {
// // // //             console.log('🔐 ===== LOGIN STARTED =====');
// // // //             const { data } = await axiosInstance.post('/api/user/login', { email, password });
            
// // // //             console.log('📦 Login Response:', data);
            
// // // //             const userToken = data.token || data.accessToken;  // ✅ दोनों चेक करें
// // // //             const refreshToken = data.refreshToken;

// // // //             let userData = data.user;
            
// // // //             if (!userData && userToken) {
// // // //                 try {
// // // //                     const payload = JSON.parse(atob(userToken.split('.')[1]));
// // // //                     userData = {
// // // //                         _id: payload.id || payload._id,   // ✅ _id भी रखें
// // // //                         id: payload.id || payload._id,
// // // //                         email: payload.email,
// // // //                         role: payload.role || 'user',
// // // //                         name: payload.name || ''
// // // //                     };
// // // //                     console.log('📦 User from Token:', userData);
// // // //                 } catch (decodeError) {
// // // //                     console.error('❌ Failed to decode token:', decodeError);
// // // //                 }
// // // //             }

// // // //             const userRole = userData?.role || 'user';
// // // //             const userId = userData?._id || userData?.id;

// // // //             // Save to localStorage
// // // //             localStorage.setItem('token', userToken);
// // // //             if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
// // // //             localStorage.setItem('role', userRole);
// // // //             localStorage.setItem('user', JSON.stringify(userData));
// // // //             localStorage.setItem('cartUserId', userId);

// // // //             set({ 
// // // //                 user: userData, 
// // // //                 token: userToken, 
// // // //                 refreshTokenValue: refreshToken, 
// // // //                 role: userRole 
// // // //             });

// // // //             if (userId) {
// // // //                 const { setUserId, fetchCart } = useCartStore.getState();
// // // //                 setUserId(userId);
// // // //                 await fetchCart(userId);
                
// // // //                 const { fetchWishlist } = useWishlistStore.getState();
// // // //                 await fetchWishlist();
// // // //             }

// // // //             return { success: true, user: userData };
// // // //         } catch (error) {
// // // //             console.error('❌ Login error:', error);
// // // //             return { 
// // // //                 success: false, 
// // // //                 message: error.response?.data?.message || 'Login failed' 
// // // //             };
// // // //         }
// // // //     },

// // // //     // ✅ REFRESH TOKEN
// // // //     refreshToken: async (refreshTokenStr) => {
// // // //         try {
// // // //             const { data } = await axiosInstance.post('/api/user/refresh', { 
// // // //                 refreshToken: refreshTokenStr 
// // // //             });
            
// // // //             const newToken = data.token; 
// // // //             if (newToken) {
// // // //                 localStorage.setItem('token', newToken);
// // // //                 set({ token: newToken });
// // // //             }

// // // //             return { 
// // // //                 success: true, 
// // // //                 token: newToken, 
// // // //                 message: data.message || 'Token refreshed successfully!' 
// // // //             };
// // // //         } catch (error) {
// // // //             return { 
// // // //                 success: false, 
// // // //                 message: error.response?.data?.message || 'Invalid or expired Refresh Token!' 
// // // //             };
// // // //         }
// // // //     },

// // // //     // ✅ LOGOUT
// // // //     logout: () => {
// // // //         console.log('🔐 ===== LOGOUT STARTED =====');
        
// // // //         localStorage.removeItem('token');
// // // //         localStorage.removeItem('refreshToken');
// // // //         localStorage.removeItem('role');
// // // //         localStorage.removeItem('user');
// // // //         localStorage.removeItem('cartUserId');
        
// // // //         set({ user: null, token: null, refreshTokenValue: null, role: 'user' });
        
// // // //         const { resetCart } = useCartStore.getState();
// // // //         const { resetWishlist } = useWishlistStore.getState();
// // // //         resetCart();
// // // //         resetWishlist();
        
// // // //         console.log('✅ Logged out successfully!');
// // // //     },

// // // //     // ✅ GET USER ID
// // // //     getUserId: () => {
// // // //         const state = get();
// // // //         return state.user?._id || state.user?.id || localStorage.getItem('cartUserId') || null;
// // // //     },

// // // //     // ✅ IS AUTHENTICATED
// // // //     isAuthenticated: () => {
// // // //         const state = get();
// // // //         return !!state.token && !!state.user;
// // // //     },
// // // // }));

// // // // export default useAuthStore;



// // const getUserFromStorage = () => {
// //     try {
// //         const userStr = localStorage.getItem('user');
// //         if (!userStr || userStr === 'undefined' || userStr === 'null') {
// //             return null;
// //         }
// //         return JSON.parse(userStr);
// //     } catch (error) {
// //         console.error('Error parsing user from localStorage:', error);
// //         localStorage.removeItem('user');  // ✅ खराब डेटा हटा दें
// //         return null;
// //     }
// // };



// import { create } from 'zustand';
// import useCartStore from './useCartStore';
// import useWishlistStore from './useWishlistStore';
// import axiosInstance from '../Utils/axiosInstance';

// // ✅ सुरक्षित तरीका - JSON.parse को try/catch में लपेटें
// const getUserFromStorage = () => {
//     try {
//         const userStr = localStorage.getItem('user');
//         if (!userStr || userStr === 'undefined' || userStr === 'null') {
//             return null;
//         }
//         return JSON.parse(userStr);
//     } catch (error) {
//         console.error('Error parsing user from localStorage:', error);
//         localStorage.removeItem('user');  // ✅ खराब डेटा हटा दें
//         return null;
//     }
// };


import { create } from 'zustand';
import useCartStore from './useCartStore';
import useWishlistStore from './useWishlistStore';
import axiosInstance from '../Utils/axiosInstance';

// ✅ सुरक्षित तरीका - JSON.parse को try/catch में लपेटें
const getUserFromStorage = () => {
    try {
        const userStr = localStorage.getItem('user');
        if (!userStr || userStr === 'undefined' || userStr === 'null') {
            return null;
        }
        return JSON.parse(userStr);
    } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem('user');
        return null;
    }
};

const useAuthStore = create((set, get) => ({
    user: getUserFromStorage(),
    token: localStorage.getItem('token') || null,
    refreshTokenValue: localStorage.getItem('refreshToken') || null,
    role: localStorage.getItem('role') || 'user',

    // ✅ REGISTER
    register: async (name, email, password, role, phone) => {
        try {
            const { data } = await axiosInstance.post('/api/user/register', { 
                name, email, password, role, phone 
            });

            console.log('📦 Register Response:', data);

            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    role: data.role
                }));
                localStorage.setItem('cartUserId', data._id);
                localStorage.setItem('role', data.role);
                
                set({ 
                    user: { _id: data._id, name: data.name, email: data.email, role: data.role },
                    token: data.token,
                    role: data.role 
                });
            }

            return { 
                success: true, 
                message: "Registration Successful!",
                user: data 
            };
        } catch (error) {
            console.error('❌ Register Error:', error.response?.data || error.message);
            return { 
                success: false, 
                message: error.response?.data?.message || error.response?.data?.errors?.[0] || 'Registration failed' 
            };
        }
    },

    // ✅ LOGIN
    login: async (email, password) => {
        try {
            console.log('🔐 ===== LOGIN STARTED =====');
            const { data } = await axiosInstance.post('/api/user/login', { email, password });
            
            console.log('📦 Login Response:', data);
            
            const userToken = data.token || data.accessToken;
            const refreshToken = data.refreshToken;

            let userData = data.user;
            
            if (!userData && userToken) {
                try {
                    const payload = JSON.parse(atob(userToken.split('.')[1]));
                    userData = {
                        _id: payload.id || payload._id,
                        id: payload.id || payload._id,
                        email: payload.email,
                        role: payload.role || 'user',
                        name: payload.name || ''
                    };
                    console.log('📦 User from Token:', userData);
                } catch (decodeError) {
                    console.error('❌ Failed to decode token:', decodeError);
                }
            }

            const userRole = userData?.role || 'user';
            const userId = userData?._id || userData?.id;

            // Save to localStorage
            localStorage.setItem('token', userToken);
            if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('role', userRole);
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('cartUserId', userId);

            set({ 
                user: userData, 
                token: userToken, 
                refreshTokenValue: refreshToken, 
                role: userRole 
            });

            if (userId) {
                const { setUserId, fetchCart } = useCartStore.getState();
                setUserId(userId);
                await fetchCart(userId);
                
                const { fetchWishlist } = useWishlistStore.getState();
                await fetchWishlist();
            }

            return { success: true, user: userData };
        } catch (error) {
            console.error('❌ Login error:', error);
            return { 
                success: false, 
                message: error.response?.data?.message || 'Login failed' 
            };
        }
    },

    // ✅ REFRESH TOKEN
    refreshToken: async (refreshTokenStr) => {
        try {
            const { data } = await axiosInstance.post('/api/user/refresh', { 
                refreshToken: refreshTokenStr 
            });
            
            const newToken = data.token; 
            if (newToken) {
                localStorage.setItem('token', newToken);
                set({ token: newToken });
            }

            return { 
                success: true, 
                token: newToken, 
                message: data.message || 'Token refreshed successfully!' 
            };
        } catch (error) {
            return { 
                success: false, 
                message: error.response?.data?.message || 'Invalid or expired Refresh Token!' 
            };
        }
    },

    // ✅ LOGOUT
    logout: () => {
        console.log('🔐 ===== LOGOUT STARTED =====');
        
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        localStorage.removeItem('cartUserId');
        
        set({ user: null, token: null, refreshTokenValue: null, role: 'user' });
        
        // ✅ useCartStore और useWishlistStore से reset functions
        const cartStore = useCartStore.getState();
        const wishlistStore = useWishlistStore.getState();
        
        // ⚠️ अगर इन स्टोर्स में clearCart / resetWishlist नाम के फंक्शन हैं तो उन्हें कॉल करें
        if (cartStore.clearCart) cartStore.clearCart();
        if (cartStore.resetCart) cartStore.resetCart();
        if (wishlistStore.resetWishlist) wishlistStore.resetWishlist();
        if (wishlistStore.clearWishlist) wishlistStore.clearWishlist();
        
        console.log('✅ Logged out successfully!');
    },

    // ✅ GET USER ID
    getUserId: () => {
        const state = get();
        return state.user?._id || state.user?.id || localStorage.getItem('cartUserId') || null;
    },

    // ✅ IS AUTHENTICATED
    isAuthenticated: () => {
        const state = get();
        return !!state.token && !!state.user;
    },
}));

export default useAuthStore;