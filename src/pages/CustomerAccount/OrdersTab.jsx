


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function OrdersTab({ onNavigateTracking }) {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         // ✅ Sahi API endpoint yahan set kar diya hai
//         const response = await axios.get('http://localhost:5000/api/orders/myorders', {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         // Backend ke response ke anusaar 'orders' array extract kar rahe hain
//         const fetchedOrders = response.data.orders || [];
//         setOrders(fetchedOrders);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//         setErrorMsg("Failed to load your order history. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div className="text-xs text-stone-500 py-6 text-center">Loading your orders...</div>;
//   }

//   if (errorMsg) {
//     return <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="pb-4 border-b border-stone-200">
//         <h3 className="text-base font-serif font-bold text-[#4a2e18]">Order History</h3>
//         <p className="text-xs text-stone-500">Track and view details of all your previous orders.</p>
//       </div>

//       {orders.length === 0 ? (
//         <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500 font-serif">
//           You haven't placed any orders yet.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((ord) => {
//             const orderId = ord._id;
//             const orderDate = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() : "N/A";
//             const orderStatus = ord.status || "Processing";
//             const orderTotal = ord.totalPrice || 0;
            
//             // Order items se product ka naam extract karna
//             const itemsText = ord.orderItems && ord.orderItems.length > 0
//               ? ord.orderItems.map(item => `${item.name} (x${item.qty})`).join(", ") 
//               : "Jpam Product";

//             return (
//               <div key={orderId} className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs">
//                 <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
//                     <strong className="text-[#8b3a2b] font-serif text-sm">{orderId}</strong>
//                   </div>
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Placed On</span>
//                     <span className="font-bold text-stone-700">{orderDate}</span>
//                   </div>
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Status</span>
//                     <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${orderStatus === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
//                       {orderStatus}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center font-serif">
//                   <div>
//                     <p className="font-bold text-[#4a2e18]">{itemsText}</p>
//                     <p className="text-[11px] text-stone-500">Total Amount: <strong className="text-[#8b3a2b]">Rs. {orderTotal}</strong></p>
//                   </div>
//                   {onNavigateTracking && (
//                     <button 
//                       onClick={() => onNavigateTracking(orderId)}
//                       className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
//                     >
//                       Track Order &rarr;
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axiosInstance from "../../Utils/axiosInstance";
import { BiPackage, BiX } from "react-icons/bi";

export default function OrdersTab({ orders: propOrders = [], loading: propLoading, onNavigateTracking }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [cancellingId, setCancellingId] = useState(null);

  // ✅ अगर props से orders आ रहे हैं, तो उन्हें इस्तेमाल करें
  useEffect(() => {
    if (propOrders && propOrders.length > 0) {
      setOrders(propOrders);
      setLoading(false);
      return;
    }

    // वरना खुद API से fetch करें
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        
        if (!token) {
          setErrorMsg("Please login to view your orders.");
          setLoading(false);
          return;
        }

        // ✅ axiosInstance इस्तेमाल किया (token अपने आप जुड़ेगा)
        const response = await axiosInstance.get("/api/orders/myorders");
        const fetchedOrders = response.data.orders || [];
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setErrorMsg(
          err.response?.data?.message || 
          "Failed to load your order history. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [propOrders]);

  // ✅ Cancel Order
  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    setCancellingId(orderId);
    try {
      const response = await axiosInstance.put(`/api/orders/${orderId}/cancel`);

      if (response.data.success) {
        // ✅ Local state में स्टेटस अपडेट करें
        setOrders(prevOrders =>
          prevOrders.map(ord =>
            ord._id === orderId
              ? { ...ord, status: "Cancelled", isCancelled: true }
              : ord
          )
        );
        alert("Order cancelled successfully! ❌");
      } else {
        alert(response.data.message || "Failed to cancel order");
      }
    } catch (err) {
      console.error("Cancel order error:", err);
      alert(err.response?.data?.message || "Failed to cancel order");
    } finally {
      setCancellingId(null);
    }
  };

  // ✅ Status के हिसाब से रंग
  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-800";
      case "Cancelled":
        return "bg-rose-100 text-rose-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
      default:
        return "bg-amber-100 text-amber-800";
    }
  };

  if (loading) {
    return (
      <div className="text-xs text-stone-500 py-6 text-center animate-pulse">
        Loading your orders...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">
        {errorMsg}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18] flex items-center gap-2">
          <BiPackage /> Order History
        </h3>
        <p className="text-xs text-stone-500">
          Track and view details of all your previous orders.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500 font-serif">
          You haven't placed any orders yet.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((ord) => {
            const orderId = ord._id;
            const shortId = orderId ? orderId.slice(-8) : "N/A";
            const orderDate = ord.createdAt
              ? new Date(ord.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "N/A";
            const orderStatus = ord.status || "Processing";
            const orderTotal = ord.totalPrice || 0;
            const canCancel =
              orderStatus === "Processing" || orderStatus === "Pending";

            // Order items का text
            const itemsText =
              ord.orderItems && ord.orderItems.length > 0
                ? ord.orderItems
                    .map((item) => `${item.name} (x${item.qty})`)
                    .join(", ")
                : "Product";

            return (
              <div
                key={orderId}
                className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs"
              >
                {/* Header: Order ID, Date, Status */}
                <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Order ID
                    </span>
                    <strong className="text-[#8b3a2b] font-serif text-sm">
                      #{shortId}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Placed On
                    </span>
                    <span className="font-bold text-stone-700">{orderDate}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Status
                    </span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[10px] ${getStatusBadge(
                        orderStatus
                      )}`}
                    >
                      {orderStatus}
                    </span>
                  </div>
                </div>

                {/* Items & Total */}
                <div className="flex flex-wrap justify-between items-center gap-3 font-serif">
                  <div className="flex-1 min-w-[200px]">
                    <p className="font-bold text-[#4a2e18]">{itemsText}</p>
                    <p className="text-[11px] text-stone-500">
                      Total Amount:{" "}
                      <strong className="text-[#8b3a2b]">
                        Rs. {orderTotal}
                      </strong>
                    </p>
                  </div>

                  {/* ✅ Buttons: Track & Cancel */}
                  <div className="flex gap-2">
                    {canCancel && (
                      <button
                        onClick={() => handleCancelOrder(orderId)}
                        disabled={cancellingId === orderId}
                        className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px] disabled:opacity-50 flex items-center gap-1"
                      >
                        <BiX />
                        {cancellingId === orderId ? "Cancelling..." : "Cancel"}
                      </button>
                    )}

                    {onNavigateTracking && (
                      <button
                        onClick={() => onNavigateTracking(orderId)}
                        className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
                      >
                        Track Order →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}