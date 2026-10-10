import axios from 'axios';

// ✅ Base URL - Local और Live दोनों के लिए
// const BASE_URL = 'http://localhost:5000';  // लोकल के लिए
const BASE_URL = 'https://shopbackendlive.onrender.com';  // लाइव के लिए (बाद में बदलें)

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000, // 15 सेकंड का टाइमआउट
});

// ✅ Request Interceptor - हर request में token अपने आप जोड़ें
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // या AsyncStorage (React Native के लिए)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Response Interceptor - 401 आने पर लॉगआउट करें
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log('⚠️ Unauthorized! Token expired or invalid.');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // यहाँ आप navigation.navigate('Login') कर सकते हैं
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;