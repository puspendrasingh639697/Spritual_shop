// import { create } from 'zustand';
// import axios from 'axios';

// const useAddressStore = create((set, get) => ({
//   addresses: [],
//   loading: false,
//   error: null,

//  fetchAddresses: async () => {
//     set({ loading: true, error: null });
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/user/address', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = Array.isArray(response.data) ? response.data : (response.data.addresses || []);
//       set({ addresses: data, loading: false });
//     } catch (err) {
//       // Yahan error.response.data print karayenge
//       console.error("Failed to fetch addresses - Full Error:", err.response?.data || err.message);
//       set({ error: err.response?.data?.message || "Failed to load saved addresses.", loading: false });
//     }
//   },

//   // Add new address
//   addAddress: async (addressData) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         'http://localhost:5000/api/user/address', 
//         addressData, 
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );
      
//       // Dobara fresh list fetch kar lenge taaki state sync rahe
//       await get().fetchAddresses();
//       return { success: true };
//     } catch (err) {
//       console.error("Failed to save address:", err);
//       return { 
//         success: false, 
//         error: err.response?.data?.message || "Failed to save address." 
//       };
//     }
//   },

//   // Delete address
//   deleteAddress: async (addrId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/user/address/${addrId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       // State se turant filter karke hata do
//       set((state) => ({
//         addresses: state.addresses.filter(a => (a._id || a.id) !== addrId)
//       }));
//       return { success: true };
//     } catch (err) {
//       console.error("Failed to delete address:", err);
//       return { 
//         success: false, 
//         error: err.response?.data?.message || "Failed to delete address." 
//       };
//     }
//   }
// }));

// export default useAddressStore;
import { create } from 'zustand';
import axios from 'axios';

const useAddressStore = create((set, get) => ({
  addresses: [],
  loading: false,
  error: null,

  // Fetch all addresses - endpoint: /api/user/address
  fetchAddresses: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        set({ error: "Authentication token missing. Please login again.", loading: false });
        return;
      }

      const response = await axios.get('http://localhost:5000/api/user/address', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const data = Array.isArray(response.data) ? response.data : (response.data.addresses || []);
      set({ addresses: data, loading: false });
    } catch (err) {
      console.error("Failed to fetch addresses:", err.response?.data || err.message);
      set({ 
        error: err.response?.data?.message || err.message || "Failed to load saved addresses.", 
        loading: false 
      });
    }
  },

  // Add new address - endpoint: /api/user/address
  addAddress: async (addressData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return { success: false, error: "Please login first." };

      const response = await axios.post(
        'http://localhost:5000/api/user/address', 
        addressData, 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      
      await get().fetchAddresses();
      return { success: true };
    } catch (err) {
      console.error("Failed to save address:", err.response?.data || err.message);
      return { 
        success: false, 
        error: err.response?.data?.message || "Failed to save address." 
      };
    }
  },

  // Delete address - endpoint: /api/user/address/:id
  deleteAddress: async (addrId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return { success: false, error: "Please login first." };

      await axios.delete(`http://localhost:5000/api/user/address/${addrId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      set((state) => ({
        addresses: state.addresses.filter(a => (a._id || a.id) !== addrId)
      }));
      return { success: true };
    } catch (err) {
      console.error("Failed to delete address:", err.response?.data || err.message);
      return { 
        success: false, 
        error: err.response?.data?.message || "Failed to delete address." 
      };
    }
  }
}));

export default useAddressStore;