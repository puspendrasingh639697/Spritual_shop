import React from "react";
import { BiShoppingBag, BiTrash, BiPlusCircle, BiTag } from "react-icons/bi";

const CartStep = ({
  cartItems,
  updateQuantity,
  removeItem,
  recommendedAddons,
  handleAddAddon,
  couponInput,
  setCouponInput,
  handleApplyCoupon,
  appliedCoupon,
  subtotal,
  discountAmount,
  shippingFee,
  grandTotal,
  setStep
}) => {
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Cart Items & Recommended Add-ons */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18]">Cart Items ({cartItems.length})</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-stone-50 border border-stone-200 rounded-sm items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white border border-stone-200 rounded-sm flex items-center justify-center shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#4a2e18] mb-0.5">{item.title}</h4>
                      <p className="text-[11px] text-stone-500 mb-1">Variant: {item.variant}</p>
                      <span className="text-xs font-bold text-[#8b3a2b]">Rs. {item.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-600 transition cursor-pointer">
                      <BiTrash className="text-base" />
                    </button>
                    <div className="flex items-center border border-stone-300 rounded-sm bg-white">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 px-2 text-stone-600 hover:bg-stone-100 cursor-pointer text-xs">-</button>
                      <span className="px-2 text-xs font-bold text-stone-800">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 px-2 text-stone-600 hover:bg-stone-100 cursor-pointer text-xs">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Add-ons Section */}
            <div className="bg-[#fff9f0] p-4 border border-amber-200 rounded-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8b3a2b] flex items-center gap-1.5">
                <BiPlusCircle /> Recommended Add-ons for Puja
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recommendedAddons.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between bg-white p-3 border border-amber-100 rounded-sm">
                    <div>
                      <p className="text-xs font-serif font-bold text-[#4a2e18]">{addon.title}</p>
                      <span className="text-[11px] text-[#8b3a2b] font-bold">Rs. {addon.price}</span>
                    </div>
                    <button 
                      onClick={() => handleAddAddon(addon)}
                      className="bg-[#4a2e18] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-sm hover:bg-[#321e10] cursor-pointer transition"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Summary, Coupons & Estimates */}
          <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm h-fit space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] pb-3 border-b border-stone-200">
              Order Summary
            </h3>

            {/* Coupon Input Box */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-stone-600 flex items-center gap-1">
                <BiTag /> Apply Coupon (Try: DIVINE10)
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter coupon" 
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="w-full p-2 text-xs border border-stone-300 bg-white uppercase rounded-sm focus:outline-none"
                />
                <button 
                  onClick={handleApplyCoupon}
                  className="bg-[#8b3a2b] text-white text-xs px-3 font-bold uppercase rounded-sm cursor-pointer hover:bg-[#722d21]"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && <p className="text-[10px] text-emerald-600 font-bold mt-1">✔ Coupon {appliedCoupon} applied!</p>}
            </div>

            <div className="space-y-2 text-xs text-stone-600 font-serif pt-2 border-t border-stone-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-stone-800">Rs. {subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount</span>
                  <span className="font-bold">-Rs. {discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Estimate</span>
                <span className="font-bold text-stone-800">Rs. {shippingFee}</span>
              </div>
              <div className="pt-3 border-t border-stone-200 flex justify-between text-sm font-bold text-[#4a2e18]">
                <span>Grand Total</span>
                <span className="text-[#8b3a2b]">Rs. {grandTotal}</span>
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              Proceed to Login & Checkout &rarr;
            </button>
          </div>

        </div>
      ) : (
        <div className="text-center py-12 space-y-3">
          <BiShoppingBag className="text-5xl text-stone-400 mx-auto" />
          <h3 className="text-lg font-serif text-[#4a2e18]">Your Cart is Empty</h3>
          <p className="text-xs text-stone-500">Explore our sacred collection and add items.</p>
        </div>
      )}
    </div>
  );
};

export default CartStep;