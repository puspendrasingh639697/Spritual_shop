import React, { useState } from "react";
import { BiPlusCircle, BiTrash } from "react-icons/bi";

export default function AddressesTab({ addresses, setAddresses }) {
  const [showAddBox, setShowAddBox] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: "Home", text: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAddress.text) return;
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({ type: "Home", text: "", phone: "" });
    setShowAddBox(false);
    alert("New address added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h3 className="text-base font-serif font-bold text-[#4a2e18]">Saved Addresses</h3>
          <p className="text-xs text-stone-500">Manage your delivery locations.</p>
        </div>
        <button 
          onClick={() => setShowAddBox(!showAddBox)}
          className="bg-[#8b3a2b] hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
        >
          <BiPlusCircle /> Add Address
        </button>
      </div>

      {showAddBox && (
        <form onSubmit={handleSubmit} className="bg-[#fff9f0] border border-amber-200 p-4 rounded-sm space-y-3 text-xs">
          <h4 className="font-bold text-[#8b3a2b] uppercase">Add New Delivery Address</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Address Label</label>
              <select 
                value={newAddress.type}
                onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Phone Number</label>
              <input 
                type="text" 
                placeholder="+91 98765 43210"
                value={newAddress.phone}
                onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Full Address Details</label>
            <textarea 
              rows="2"
              placeholder="House/Flat No., Street, City, Pincode"
              value={newAddress.text}
              onChange={(e) => setNewAddress({...newAddress, text: e.target.value})}
              className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              required
            ></textarea>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="bg-[#4a2e18] text-white px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Save Address</button>
            <button type="button" onClick={() => setShowAddBox(false)} className="bg-stone-200 text-stone-700 px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 gap-4 font-serif">
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-stone-50 border border-stone-200 rounded-sm p-4 flex justify-between items-start text-xs">
            <div className="space-y-1">
              <span className="bg-[#8b3a2b]/10 text-[#8b3a2b] font-bold px-2 py-0.5 rounded text-[10px] uppercase">{addr.type}</span>
              <p className="font-bold text-stone-800 mt-1">{addr.text}</p>
              <p className="text-stone-500 text-[11px]">Phone: {addr.phone}</p>
            </div>
            <button 
              onClick={() => setAddresses(addresses.filter(a => a.id !== addr.id))}
              className="text-stone-400 hover:text-red-600 cursor-pointer"
            >
              <BiTrash className="text-base" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}