import React from "react";

export default function OrdersTab({ orders, onNavigateTracking }) {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18]">Order History</h3>
        <p className="text-xs text-stone-500">Track and view details of all your previous orders.</p>
      </div>

      <div className="space-y-4">
        {orders.map((ord) => (
          <div key={ord.id} className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs">
            <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
              <div>
                <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
                <strong className="text-[#8b3a2b] font-serif text-sm">{ord.id}</strong>
              </div>
              <div>
                <span className="text-stone-400 block uppercase font-bold text-[10px]">Placed On</span>
                <span className="font-bold text-stone-700">{ord.date}</span>
              </div>
              <div>
                <span className="text-stone-400 block uppercase font-bold text-[10px]">Status</span>
                <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${ord.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {ord.status}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center font-serif">
              <div>
                <p className="font-bold text-[#4a2e18]">{ord.items}</p>
                <p className="text-[11px] text-stone-500">Total Amount: <strong className="text-[#8b3a2b]">Rs. {ord.total}</strong></p>
              </div>
              {onNavigateTracking && (
                <button 
                  onClick={onNavigateTracking}
                  className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
                >
                  Track Order &rarr;
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}