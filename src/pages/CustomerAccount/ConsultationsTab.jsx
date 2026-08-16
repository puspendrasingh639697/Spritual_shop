import React from "react";
import { BiCalendar, BiTime, BiPhoneCall } from "react-icons/bi";

export default function ConsultationsTab({ consultations }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">Astrologer Consultation History</h3>
      <div className="space-y-4">
        {consultations.map((item) => (
          <div key={item.id} className="border border-stone-200 bg-white p-4 rounded-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-sm text-[#4a2e18]">{item.astrologerName}</h4>
                <span className={`text-[10px] px-2 py-0.5 rounded-sm font-bold ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-stone-600">Topic: <strong className="text-stone-800">{item.topic}</strong></p>
              <div className="flex items-center gap-4 text-[11px] text-stone-400 pt-1">
                <span className="flex items-center gap-1"><BiCalendar /> {item.date}</span>
                <span className="flex items-center gap-1"><BiTime /> {item.duration}</span>
              </div>
            </div>
            <button 
              onClick={() => alert(`Connecting back regarding: ${item.topic}`)}
              className="border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-bold px-3 py-2 rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <BiPhoneCall /> Book Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}