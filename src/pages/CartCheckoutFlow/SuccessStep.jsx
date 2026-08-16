import React from "react";
import { 
  BiCheckCircle, 
  BiTimeFive, 
  BiPackage, 
  BiMap, 
  BiPrinter 
} from "react-icons/bi";

const SuccessStep = ({
  orderId,
  orderDate,
  shippingDetails,
  cartItems,
  subtotal,
  discountAmount,
  shippingFee,
  grandTotal,
  setStep,
  setCartItems
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Top Success Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-6 text-center space-y-2">
        <BiCheckCircle className="text-5xl text-emerald-600 mx-auto" />
        <h3 className="text-xl font-serif text-[#4a2e18]">Blessings! Your Order is Confirmed</h3>
        <p className="text-xs text-stone-600">
          We have received your sacred order and are getting it energized & packed for dispatch.
        </p>
      </div>

      {/* Order Meta Header */}
      <div className="bg-stone-50 border border-stone-200 rounded-sm p-4 flex flex-wrap justify-between items-center text-xs">
        <div>
          <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
          <strong className="text-[#8b3a2b] text-sm font-serif">{orderId}</strong>
        </div>
        <div>
          <span className="text-stone-400 block uppercase font-bold text-[10px]">Order Date</span>
          <span className="font-bold text-stone-700 flex items-center gap-1"><BiTimeFive /> {orderDate}</span>
        </div>
        <div>
          <span className="text-stone-400 block uppercase font-bold text-[10px]">Payment Type</span>
          <span className="font-bold text-stone-700">{shippingDetails.paymentMethod}</span>
        </div>
      </div>

      {/* Itemized Receipt Section */}
      <div className="bg-white border border-stone-200 rounded-sm p-6 space-y-4 text-xs font-serif">
        <h4 className="font-bold uppercase tracking-wider text-[#4a2e18] pb-2 border-b border-stone-200 flex items-center gap-2">
          <BiPackage className="text-base text-[#8b3a2b]" /> Ordered Items Breakdown
        </h4>

        <div className="space-y-3">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-1.5 border-b border-stone-100">
              <div>
                <p className="font-bold text-[#4a2e18]">{item.title}</p>
                <p className="text-[10px] text-stone-400">Variant: {item.variant} | Qty: {item.quantity}</p>
              </div>
              <span className="font-bold text-stone-800">Rs. {item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="space-y-1.5 pt-2 text-stone-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-emerald-700">
              <span>Discount Applied</span>
              <span>-Rs. {discountAmount}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Shipping Fee ({shippingDetails.shippingMethod})</span>
            <span>Rs. {shippingFee}</span>
          </div>
          <div className="pt-3 border-t border-stone-200 flex justify-between font-bold text-sm text-[#4a2e18]">
            <span>Total Amount Paid</span>
            <span className="text-[#8b3a2b]">Rs. {grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Shipping & Delivery Address Info */}
      <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 space-y-2 text-xs font-serif">
        <h4 className="font-bold uppercase tracking-wider text-[#4a2e18] pb-2 border-b border-stone-200 flex items-center gap-2">
          <BiMap className="text-base text-[#8b3a2b]" /> Delivery Address Details
        </h4>
        <p><strong className="text-stone-700">Receiver Name:</strong> {shippingDetails.fullName}</p>
        <p><strong className="text-stone-700">Address:</strong> {shippingDetails.address}, {shippingDetails.city}, {shippingDetails.state} - <span className="text-[#8b3a2b] font-bold">{shippingDetails.pincode}</span></p>
        <p><strong className="text-stone-700">Contact Phone:</strong> {shippingDetails.phone || "N/A"}</p>
        <p><strong className="text-stone-700">Email:</strong> {shippingDetails.email || "N/A"}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button 
          onClick={() => alert("Downloading invoice PDF...")}
          className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-700 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <BiPrinter /> Download Invoice
        </button>
        <button 
          onClick={() => {
            setStep(1);
            setCartItems([]);
          }}
          className="flex-1 bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>

    </div>
  );
};

export default SuccessStep;