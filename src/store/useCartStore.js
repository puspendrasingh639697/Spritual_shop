



import { create } from 'zustand';
import axios from 'axios';

const useCartStore = create((set, get) => ({
    cart: null,
    items: [],
    totalItems: 0,
    totalAmount: 0,
    loading: false,
    error: null,
    userId: null,

    setUserId: (userId) => {
        set({ userId });
        if (userId) {
            localStorage.setItem('cartUserId', userId);
        }
    },

    // 🛒 FETCH CART (Guest ke liye LocalStorage, Login ke liye Backend)
    fetchCart: async (userId) => {
        const token = localStorage.getItem('token');
        const currentUserId = userId || get().userId || JSON.parse(localStorage.getItem('user') || '{}')?.id || JSON.parse(localStorage.getItem('user') || '{}')?._id || localStorage.getItem('cartUserId');

        if (!token || !currentUserId) {
            console.log('📦 Guest Cart - Fetching from LocalStorage');
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            
            const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            set({
                items: guestCart,
                totalItems: totalItems,
                totalAmount: totalAmount,
                loading: false,
                error: null,
                userId: null
            });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.get(`http://localhost:5000/api/cart/${currentUserId}`, {
                headers: { ...(token && { Authorization: `Bearer ${token}` }) }
            });
            const cartData = response.data.cart || response.data;
            
            set({ 
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0,
                loading: false,
                userId: currentUserId
            });
        } catch (error) {
            set({ 
                error: error.response?.data?.message || error.message, 
                loading: false,
                items: [] 
            });
        }
    },

    // ➕ ADD TO CART (Bulletproof Parameter Mapping)
    addToCart: async (productOrId, quantityOrId = 1, thirdParam = 1) => {
        let productId, quantity, specificUserId;

        // Agar pehla parameter seedha ID string hai
        if (typeof productOrId === 'string') {
            productId = productOrId;
            quantity = Number(quantityOrId) || 1;
        } 
        // Agar object pass hua hai
        else if (productOrId && typeof productOrId === 'object') {
            productId = productOrId._id || productOrId.id;
            quantity = Number(quantityOrId) || 1;
        }

        // Safety Check: Agar ID abhi bhi undefined ya invalid hai
        if (!productId || productId === 1 || productId === "1" || productId === "undefined") {
            console.error("❌ Invalid Product ID detected:", productId, "from input:", productOrId);
            return { success: false, error: "Invalid Product ID required!" };
        }

        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const userId = specificUserId || user.id || user._id || localStorage.getItem('cartUserId');

        if (!token || !userId) {
            console.log('🛒 Guest User - Saving to LocalStorage');
            
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            const cartItem = {
                id: productId,
                title: productOrId?.title || productOrId?.name || 'Product',
                price: productOrId?.price || 500,
                image: productOrId?.image || '',
                quantity: quantity
            };

            const existingIndex = guestCart.findIndex((item) => item.id === cartItem.id);
            if (existingIndex !== -1) {
                guestCart[existingIndex].quantity += quantity;
            } else {
                guestCart.push(cartItem);
            }

            localStorage.setItem('guestCart', JSON.stringify(guestCart));
            
            set({
                items: guestCart,
                totalItems: guestCart.reduce((sum, item) => sum + item.quantity, 0),
                totalAmount: guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                loading: false,
                error: null
            });

            return { success: true, data: cartItem };
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post('http://localhost:5000/api/cart/add', {
                userId: userId,
                productId: productId,
                quantity: quantity
            }, {
                headers: { 
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }) 
                }
            });
            
            const cartData = response.data.cart;
            set({ 
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0,
                loading: false,
                userId: userId
            });
            
            return { success: true, message: response.data.message };
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Error adding to cart";
            set({ 
                error: errorMsg, 
                loading: false 
            });
            return { success: false, error: errorMsg };
        }
    },

    // 🔄 UPDATE QUANTITY
    updateQuantity: async (arg1, arg2, arg3) => {
        let userId, productId, quantity;

        if (arg3 !== undefined) {
            userId = arg1;
            productId = arg2;
            quantity = arg3;
        } else {
            productId = arg1;
            quantity = arg2;
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            userId = user.id || user._id || localStorage.getItem('cartUserId');
        }

        const token = localStorage.getItem('token');

        if (!token || !userId) {
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            const itemIndex = guestCart.findIndex((item) => item.id === productId);
            
            if (itemIndex !== -1) {
                if (quantity <= 0) {
                    guestCart.splice(itemIndex, 1);
                } else {
                    guestCart[itemIndex].quantity = quantity;
                }
            }
            
            localStorage.setItem('guestCart', JSON.stringify(guestCart));
            
            const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            set({
                items: guestCart,
                totalItems: totalItems,
                totalAmount: totalAmount,
                loading: false,
                error: null
            });
            
            return { success: true };
        }

        if (quantity <= 0) {
            return await get().removeFromCart(userId, productId);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/cart/add', {
                userId: userId,
                productId,
                quantity
            }, {
                headers: { ...(token && { Authorization: `Bearer ${token}` }) }
            });
            
            const cartData = response.data.cart;
            set({ 
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0
            });
            return { success: true };
        } catch (error) {
            console.error("Error updating quantity:", error);
            return { success: false };
        }
    },

    // 🗑️ REMOVE FROM CART
    removeFromCart: async (arg1, arg2) => {
        let userId, productId;

        if (arg2 !== undefined) {
            userId = arg1;
            productId = arg2;
        } else {
            productId = arg1;
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            userId = user.id || user._id || localStorage.getItem('cartUserId');
        }

        const token = localStorage.getItem('token');

        if (!token || !userId) {
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            const updatedCart = guestCart.filter((item) => item.id !== productId);
            
            localStorage.setItem('guestCart', JSON.stringify(updatedCart));

            const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            set({
                items: updatedCart,
                totalItems: totalItems,
                totalAmount: totalAmount,
                loading: false,
                error: null
            });

            return { success: true };
        }

        try {
            const response = await axios.delete(`http://localhost:5000/api/cart/remove/${userId}/${productId}`, {
                headers: { ...(token && { Authorization: `Bearer ${token}` }) }
            });
            
            const cartData = response.data.cart;
            set({ 
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0
            });

            return { success: true, message: response.data.message };
        } catch (error) {
            console.error("Error removing from cart:", error.response?.data || error.message);
            return { success: false, error: error.response?.data?.message || "Failed to remove" };
        }
    },

    // 🗑️ CLEAR CART
    clearCart: async () => {
        localStorage.removeItem('guestCart');
        set({ items: [], totalItems: 0, totalAmount: 0, cart: null, userId: null });
    }
}));

export default useCartStore;