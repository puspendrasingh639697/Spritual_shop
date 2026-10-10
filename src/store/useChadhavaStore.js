import { create } from "zustand";
import axios from "axios";

/* ================= API URL ================= */
const API_BASE_URL = "http://localhost:5000/api";
// Production: "https://shopbackendlive.onrender.com/api"

const useChadhavaStore = create((set, get) => ({
  // ─── State ───
  chadhavas: [],
  singleChadhava: null,
  myBookings: [],
  loading: false,
  error: null,
  filters: {
    chadhavaType: "",
    templeName: "",
    deity: "",
    minPrice: "",
    maxPrice: "",
    search: "",
    page: 1,
    limit: 10,
    sortBy: "createdAt",
    order: "desc",
  },

  // ═══════════════════════════════════════
  //   FETCH ALL CHADHAVA (Public)
  // ═══════════════════════════════════════
  fetchChadhavas: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams({
        ...get().filters,
        ...filters,
      }).toString();

      console.log("🔍 Fetching chadhavas:", params);

      const response = await axios.get(`${API_BASE_URL}/chadhava?${params}`);
      const data = response.data;

      set({
        chadhavas: data.data || [],
        loading: false,
        error: null,
      });

      console.log(`✅ Fetched ${data.count} chadhavas`);
      return { success: true, data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      console.error("❌ Fetch error:", errorMsg);
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   FETCH SINGLE CHADHAVA (Public)
  // ═══════════════════════════════════════
  fetchChadhavaById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/chadhava/${id}`);
      set({ singleChadhava: response.data.data, loading: false });
      return { success: true, data: response.data.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   FILTERS
  // ═══════════════════════════════════════
  filterByType: async (chadhavaType) => {
    set((state) => ({
      filters: { ...state.filters, chadhavaType, page: 1 },
    }));
    return get().fetchChadhavas();
  },

  filterByTemple: async (templeName) => {
    set((state) => ({
      filters: { ...state.filters, templeName, page: 1 },
    }));
    return get().fetchChadhavas();
  },

  filterByDeity: async (deity) => {
    set((state) => ({
      filters: { ...state.filters, deity, page: 1 },
    }));
    return get().fetchChadhavas();
  },

  filterByPrice: async (minPrice, maxPrice) => {
    set((state) => ({
      filters: { ...state.filters, minPrice, maxPrice, page: 1 },
    }));
    return get().fetchChadhavas();
  },

  searchChadhavas: async (search) => {
    set((state) => ({
      filters: { ...state.filters, search, page: 1 },
    }));
    return get().fetchChadhavas();
  },

  clearFilters: async () => {
    set({
      filters: {
        chadhavaType: "",
        templeName: "",
        deity: "",
        minPrice: "",
        maxPrice: "",
        search: "",
        page: 1,
        limit: 10,
        sortBy: "createdAt",
        order: "desc",
      },
    });
    return get().fetchChadhavas();
  },

  setPage: async (page) => {
    set((state) => ({ filters: { ...state.filters, page } }));
    return get().fetchChadhavas();
  },

  // ═══════════════════════════════════════
  //   BOOK CHADHAVA (Protected)
  // ═══════════════════════════════════════
  bookChadhava: async (bookingData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        set({ loading: false });
        return { success: false, error: "Please login first" };
      }

      const response = await axios.post(
        `${API_BASE_URL}/chadhava/book`,
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set({ loading: false });
      console.log("✅ Booking created:", response.data.data._id);
      return { success: true, data: response.data.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      console.error("❌ Booking error:", errorMsg);
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   MY BOOKINGS (Protected)
  // ═══════════════════════════════════════
  fetchMyBookings: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ loading: false });
        return { success: false, error: "Please login first" };
      }

      const response = await axios.get(
        `${API_BASE_URL}/chadhava/mybookings`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      set({ myBookings: response.data.data || [], loading: false });
      return { success: true, data: response.data.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   CANCEL BOOKING (Protected)
  // ═══════════════════════════════════════
  cancelBooking: async (bookingId, reason = "User cancelled") => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ loading: false });
        return { success: false, error: "Please login first" };
      }

      const response = await axios.put(
        `${API_BASE_URL}/chadhava/booking/${bookingId}/cancel`,
        { reason },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Local state update
      set((state) => ({
        myBookings: state.myBookings.map((b) =>
          b._id === bookingId ? response.data.data : b
        ),
        loading: false,
      }));

      return { success: true, data: response.data.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   CREATE CHECKOUT (Protected)
  // ═══════════════════════════════════════
  createCheckout: async (bookingId) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ loading: false });
        return { success: false, error: "Please login first" };
      }

      const response = await axios.post(
        `${API_BASE_URL}/chadhava/create-checkout`,
        { bookingId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set({ loading: false });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },

  // ═══════════════════════════════════════
  //   VERIFY PAYMENT (Protected)
  // ═══════════════════════════════════════
  verifyPayment: async (verifyData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ loading: false });
        return { success: false, error: "Please login first" };
      }

      const response = await axios.post(
        `${API_BASE_URL}/chadhava/verify-payment`,
        verifyData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set({ loading: false });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      set({ error: errorMsg, loading: false });
      return { success: false, error: errorMsg };
    }
  },
}));

export default useChadhavaStore;