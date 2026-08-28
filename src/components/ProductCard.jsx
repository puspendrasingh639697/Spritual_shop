


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Cart = () => {
  const { items, totalAmount, loading, fetchCart, updateQuantity, removeFromCart } = useCartStore();

  // 1. LocalStorage se MongoDB User ID extract karein
  const getUserId = () => {
    const userStr = localStorage.getItem("user");
    let userId = null;

    if (userStr) {
      try {
        const parsedUser = JSON.parse(userStr);
        userId = parsedUser._id || parsedUser.id;
      } catch (e) {
        userId = userStr;
      }
    }

    if (!userId) {
      userId = localStorage.getItem("userId") || localStorage.getItem("cartUserId");
    }

    return userId;
  };

  const userId = getUserId();

  // 2. Component mount hone par Cart Data Fetch karein
  useEffect(() => {
    console.log("🛒 [Cart.jsx Loaded]");
    console.log("👤 [Detected UserId]:", userId);

    if (userId) {
      fetchCart(userId);
    } else {
      console.warn("⚠️ [Cart Warning]: User ID missing in LocalStorage. Unable to fetch backend cart.");
    }
  }, [userId, fetchCart]);

  // State Updates Debugger Log
  useEffect(() => {
    console.log("📦 [Populated Cart Items]:", items);
    console.log("💰 [Total Amount]:", totalAmount);
  }, [items, totalAmount]);

  // 3. Quantity Increment/Decrement Handler
  const handleQuantityChange = async (productId, currentQty, delta) => {
    const newQty = currentQty + delta;
    console.log(`🔄 Updating Quantity -> ProductId: ${productId} | New Qty: ${newQty}`);

    if (newQty <= 0) {
      await removeFromCart(userId, productId);
    } else {
      await updateQuantity(userId, productId, newQty);
    }
  };

  // 4. Remove Item Handler
  const handleRemove = async (productId) => {
    console.log(`🗑️ Removing Item -> ProductId: ${productId}`);
    if (window.confirm("Are you sure you want to remove this item from your cart?")) {
      await removeFromCart(userId, productId);
    }
  };

  if (loading && (!items || items.length === 0)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff3df]">
        <h2 className="text-xl font-semibold text-amber-900">Loading your sacred cart...</h2>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif text-center font-bold text-amber-950 mb-6">
          Your Sacred Cart
        </h1>

        {/* Stepper Steps */}
        <div className="flex justify-center items-center gap-4 text-xs sm:text-sm font-semibold text-amber-900/60 uppercase tracking-widest mb-10">
          <span className="text-amber-900 font-bold border-b-2 border-amber-900 pb-1">1. Cart</span>
          <span>&gt;</span>
          <span>2. Login</span>
          <span>&gt;</span>
          <span>3. Checkout</span>
          <span>&gt;</span>
          <span>4. Success</span>
        </div>

        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Section: Dynamic Product List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => {
                // MongoDB Populated Product Document
                const product = item.productId || {};
                const productId = product._id || item._id;
                const title = product.name || product.title || "Spiritual Product";
                const price = product.price || 0;
                const image = product.image || (product.images && product.images[0]) || "https://via.placeholder.com/150";

                console.log(`🔹 [Rendering Product ${index + 1}]:`, { productId, title, price, quantity: item.quantity });

                return (
                  <div
                    key={item._id || index}
                    className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-md shadow-sm border border-amber-100 gap-4"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img
                        src={image}
                        alt={title}
                        className="w-20 h-20 object-cover rounded-md border border-amber-100"
                      />
                      <div>
                        <h3 className="font-semibold text-stone-800 text-base sm:text-lg">
                          {title}
                        </h3>
                        <p className="text-amber-800 font-bold mt-1">₹{price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls & Remove Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-amber-50">
                      <div className="flex items-center border border-stone-300 rounded-sm overflow-hidden">
                        <button
                          onClick={() => handleQuantityChange(productId, item.quantity, -1)}
                          className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 font-semibold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(productId, item.quantity, 1)}
                          className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-[70px]">
                        <p className="font-bold text-stone-800">₹{price * item.quantity}</p>
                      </div>

                      <button
                        onClick={() => handleRemove(productId)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold px-2 py-1"
                        title="Remove Item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Section: Total Summary */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-amber-100 h-fit">
              <h2 className="text-xl font-bold text-amber-950 border-b border-amber-100 pb-3 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-stone-700 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-amber-100 pt-3 flex justify-between text-base font-bold text-stone-900">
                  <span>Total</span>
                  <span className="text-amber-900">₹{totalAmount}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block text-center mt-6 w-full bg-amber-900 hover:bg-amber-950 text-white font-bold py-3 rounded-sm shadow hover:shadow-md transition-all uppercase tracking-wider text-sm"
              >
                Proceed to Checkout
              </Link>
            </div>

          </div>
        ) : (
          /* Empty Cart UI */
          <div className="bg-white rounded-md shadow-md p-10 text-center max-w-xl mx-auto border border-amber-100 my-8">
            <div className="w-20 h-20 mx-auto mb-4 opacity-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-amber-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-amber-950 mb-2">
              Your cart is empty
            </h2>
            <p className="text-stone-500 text-sm mb-6">
              Start shopping for spiritual items to fill your cart.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-amber-900 hover:bg-amber-950 text-white font-semibold px-6 py-3 rounded-sm shadow transition-all"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;