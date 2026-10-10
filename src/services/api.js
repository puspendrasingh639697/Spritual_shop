

import axiosInstance from "../Utils/axiosInstance";
export const authAPI = {
    register: (data) => axiosInstance.post('/api/user/register', data),
    login: (data) => axiosInstance.post('/api/user/login', data),
    getProfile: () => axiosInstance.get('/api/user/profile'),
    updateProfile: (data) => axiosInstance.put('/api/user/profile', data),
    refreshToken: (refreshToken) => axiosInstance.post('/api/user/refresh', { refreshToken }),
    forgotPassword: (email) => axiosInstance.post('/api/user/forgot-password', { email }),
    resetPassword: (token, password) => axiosInstance.put(`/api/user/reset-password/${token}`, { password }),
};

// ==================== PRODUCT APIs ====================
export const productAPI = {
    getAll: () => axiosInstance.get('/api/products/all'),
    getById: (id) => axiosInstance.get(`/api/products/${id}`),
    addProduct: (data) => axiosInstance.post('/api/products/add', data),
    updateProduct: (id, data) => axiosInstance.put(`/api/products/${id}`, data),
    deleteProduct: (id) => axiosInstance.delete(`/api/products/${id}`),
};

// ==================== CART APIs ====================
export const cartAPI = {
    addToCart: (data) => axiosInstance.post('/api/cart/add', data),
    getCart: (userId) => axiosInstance.get(`/api/cart/${userId}`),
    updateQuantity: (data) => axiosInstance.put('/api/cart/update', data),
    removeFromCart: (userId, productId) => axiosInstance.delete(`/api/cart/remove/${userId}/${productId}`),
};

// ==================== ORDER APIs ====================
export const orderAPI = {
    placeOrder: (data) => axiosInstance.post('/api/orders/place', data),
    getMyOrders: () => axiosInstance.get('/api/orders/myorders'),
    getOrderById: (id) => axiosInstance.get(`/api/orders/${id}`),
    cancelOrder: (id) => axiosInstance.put(`/api/orders/${id}/cancel`),
    getAllOrders: () => axiosInstance.get('/api/orders/admin/all'),
    updateOrderStatus: (id, status) => axiosInstance.put(`/api/orders/${id}/status`, { status }),
    getAdminStats: () => axiosInstance.get('/api/orders/admin/stats'),
};

// ==================== PAYMENT APIs ====================
export const paymentAPI = {
    createCheckout: (data) => axiosInstance.post('/api/payment/checkout', data),
    verifyPayment: (data) => axiosInstance.post('/api/payment/verify', data),
};

// ==================== WISHLIST APIs ====================
export const wishlistAPI = {
    getWishlist: () => axiosInstance.get('/api/wishlist'),
    toggleWishlist: (productId) => axiosInstance.post('/api/wishlist/toggle', { productId }),
};

// ==================== CATEGORY APIs ====================
export const categoryAPI = {
    getAll: () => axiosInstance.get('/api/categories'),
};

// ==================== REVIEW APIs ====================
export const reviewAPI = {
    getReviews: (productId) => axiosInstance.get(`/api/reviews/${productId}`),
    addReview: (data) => axiosInstance.post('/api/reviews/add', data),
};