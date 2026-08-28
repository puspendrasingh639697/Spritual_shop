import { create } from 'zustand';
import axios from 'axios';

const useReviewStore = create((set, get) => ({
  reviews: [],
  loading: false,
  error: null,

  // Fetch reviews (Agar backend par get route hai)
  fetchReviews: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/user/reviews', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = Array.isArray(response.data) ? response.data : (response.data.reviews || []);
      set({ reviews: data, loading: false });
    } catch (err) {
      console.error("Failed to fetch reviews:", err.response?.data || err.message);
      // Agar GET route nahi banaya hai backend pe toh error handle karne ke liye silent ya empty rakh sakte hain
      set({ loading: false });
    }
  },

  // Add new review using your exact API structure
  addReview: async (reviewData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return { success: false, error: "Please login first." };

      const response = await axios.post(
        'http://localhost:5000/api/reviews/add',
        reviewData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // Naya review state mein turant jodh lo
      if (response.data.success && response.data.review) {
        set((state) => ({
          reviews: [response.data.review, ...state.reviews]
        }));
      }

      return { success: true };
    } catch (err) {
      console.error("Failed to add review:", err.response?.data || err.message);
      return { 
        success: false, 
        error: err.response?.data?.message || "Failed to add review." 
      };
    }
  }
}));

export default useReviewStore;