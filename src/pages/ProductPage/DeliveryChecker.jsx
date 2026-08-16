import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";

const DeliveryChecker = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.length !== 6) {
      setDeliveryStatus({
        available: false,
        message: "Please enter a valid 6-digit postal/pincode."
      });
      return;
    }

    setDeliveryStatus({
      available: true,
      message: "Delivery available within 3-5 business days. Cash on Delivery (COD) is available."
    });
  };

  return (
    <div className="mb-5 p-3.5 bg-stone-50 border border-stone-200 rounded-sm">
      <div className="flex items-center gap-1.5 text-xs font-bold text-[#4a2e18] mb-2 uppercase tracking-wide">
        <BiMap className="text-base text-[#8b3a2b]" /> Check Delivery & COD Availability
      </div>
      <form onSubmit={handleCheckPincode} className="flex gap-2">
        <input 
          type="text" 
          maxLength="6"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
          placeholder="Enter 6-digit Pincode" 
          className="flex-1 p-2 text-xs border border-stone-300 bg-white rounded-sm focus:outline-none focus:border-[#8b3a2b]"
        />
        <button 
          type="submit"
          className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
        >
          Check
        </button>
      </form>

      {deliveryStatus && (
        <div className={`mt-2.5 text-xs p-2 rounded-sm border ${
          deliveryStatus.available ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-red-50 text-red-800 border-red-200"
        }`}>
          <p className="font-medium">{deliveryStatus.message}</p>
          {deliveryStatus.available && (
            <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-900">
              <MdSecurity className="text-sm" /> COD Available | Free Delivery on Prepaid Orders
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeliveryChecker;