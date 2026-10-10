

// import { create } from 'zustand';
// import axios from 'axios';

// export const usePujaStore = create((set) => ({
//     recommendedPujaList: [],
//     singlePuja: null,
//     loading: false,
//     error: null,

//     fetchRecommendedPujas: async () => {
//         set({ loading: true, error: null });
//         try {
//             const response = await axios.get("http://localhost:5000/api/allpooja");
//             if (response.data && response.data.success) {
//                 set({ 
//                     recommendedPujaList: response.data.data.slice(0, 3), 
//                     loading: false 
//                 });
//             }
//         } catch (error) {
//             console.error("❌ Error:", error);
//             set({ error: error.message, loading: false });
//         }
//     },

//    fetchPujaById: async (id) => {
//     set({ loading: true, error: null });
//     try {
//         const response = await axios.get(`http://localhost:5000/api/pooja/${id}`);
//         console.log("API Full Response:", response.data);

//         // Data chahe response.data.data me ho ya direct response.data me, yahan handle ho jayega
//         const pujaData = response.data.data || response.data;

//         set({ 
//             singlePuja: pujaData, 
//             loading: false 
//         });
//     } catch (error) {
//         console.error("❌ Error fetching single puja:", error);
//         set({ error: error.message, loading: false });
//     }
// }
// }));


import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";
// Production ke liye:
// const API_BASE_URL = "https://shopbackendlive.onrender.com/api";

const usePoojaStore = create((set, get) => ({
  // ─── State ───
  poojas: [],
  singlePooja: null,
  loading: false,
  error: null,
  filters: {
    pujaType: "",
    search: "",
    minPrice: "",
    maxPrice: "",
    location: "",
    page: 1,
    limit: 20,
    sortBy: "createdAt",
    order: "desc",
  },

  // ─── Fetch All Poojas ───
  fetchPoojas: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams({
        ...get().filters,
        ...filters,
      }).toString();

      console.log("🔍 Fetching poojas with params:", params);

      const response = await axios.get(`${API_BASE_URL}/allpooja?${params}`);
      const data = response.data;

      set({
        poojas: data.data || [],
        loading: false,
        error: null,
      });

      console.log(`✅ Fetched ${data.count} poojas`);

      return { success: true, data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      console.error("❌ Fetch error:", errorMsg);
      return { success: false, error: errorMsg };
    }
  },

  // ─── Fetch Single Pooja ───
  fetchPoojaById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      set({ singlePooja: response.data.data, loading: false });
      return { success: true, data: response.data.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },

  // ─── Filter By Type ───
  filterByType: async (pujaType) => {
    set((state) => ({
      filters: { ...state.filters, pujaType, page: 1 },
    }));
    return get().fetchPoojas();
  },

  // ─── Search ───
  searchPoojas: async (search) => {
    set((state) => ({
      filters: { ...state.filters, search, page: 1 },
    }));
    return get().fetchPoojas();
  },

  // ─── Filter By Price ───
  filterByPrice: async (minPrice, maxPrice) => {
    set((state) => ({
      filters: { ...state.filters, minPrice, maxPrice, page: 1 },
    }));
    return get().fetchPoojas();
  },

  // ─── Clear Filters ───
  clearFilters: async () => {
    set({
      filters: {
        pujaType: "",
        search: "",
        minPrice: "",
        maxPrice: "",
        location: "",
        page: 1,
        limit: 20,
        sortBy: "createdAt",
        order: "desc",
      },
    });
    return get().fetchPoojas();
  },

  // ─── Set Page ───
  setPage: async (page) => {
    set((state) => ({ filters: { ...state.filters, page } }));
    return get().fetchPoojas();
  },
}));

export default usePoojaStore;