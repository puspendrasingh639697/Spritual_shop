// import { create } from "zustand";

// const useCategoryStore = create((set) => ({
//   categories: [],
//   loading: false,
//   error: null,

//   fetchCategories: async () => {
//     set({ loading: true, error: null });
//     try {
//       const response = await fetch("http://localhost:5000/api/categories");
//       const data = await response.json();
      
//       if (data.success) {
//         set({ categories: data.categories, loading: false });
//       } else {
//         set({ error: "Failed to fetch categories", loading: false });
//       }
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },
// }));

// export default useCategoryStore;



import { create } from "zustand";
import axiosInstance from "../Utils/axiosInstance";
// import axiosInstance from "../Utils/axiosInstance";

const useCategoryStore = create((set) => ({
    categories: [],
    loading: false,
    error: null,

    // ✅ सभी कैटेगरी लाएँ
    fetchCategories: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get('/api/categories');
            
            if (response.data.success) {
                set({ 
                    categories: response.data.categories || response.data || [], 
                    loading: false 
                });
            } else {
                set({ error: "Failed to fetch categories", loading: false });
            }
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    // ✅ एक कैटेगरी लाएँ
    fetchCategoryById: async (id) => {
        try {
            const response = await axiosInstance.get(`/api/categories/${id}`);
            return response.data;
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
}));

export default useCategoryStore;