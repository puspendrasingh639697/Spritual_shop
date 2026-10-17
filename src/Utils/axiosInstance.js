import axios from 'axios';

const BASE_URL = 'https://shopbackendlive.onrender.com'; 


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


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