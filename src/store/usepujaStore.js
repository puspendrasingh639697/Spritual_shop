

import { create } from 'zustand';
import axios from 'axios';

export const usePujaStore = create((set) => ({
    recommendedPujaList: [],
    singlePuja: null,
    loading: false,
    error: null,

    fetchRecommendedPujas: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("http://localhost:5000/api/allpooja");
            if (response.data && response.data.success) {
                set({ 
                    recommendedPujaList: response.data.data.slice(0, 3), 
                    loading: false 
                });
            }
        } catch (error) {
            console.error("❌ Error:", error);
            set({ error: error.message, loading: false });
        }
    },

   fetchPujaById: async (id) => {
    set({ loading: true, error: null });
    try {
        const response = await axios.get(`http://localhost:5000/api/pooja/${id}`);
        console.log("API Full Response:", response.data);

        // Data chahe response.data.data me ho ya direct response.data me, yahan handle ho jayega
        const pujaData = response.data.data || response.data;

        set({ 
            singlePuja: pujaData, 
            loading: false 
        });
    } catch (error) {
        console.error("❌ Error fetching single puja:", error);
        set({ error: error.message, loading: false });
    }
}
}));