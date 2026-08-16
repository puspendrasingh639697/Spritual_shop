import React, { useState } from "react";
import { BiX, BiUser, BiPhone, BiCalendar, BiTime, BiCheckCircle } from "react-icons/bi";

const AstrologerConsultationModal = ({ isOpen, onClose, userName, userConcern }) => {
  const [formData, setFormData] = useState({
    name: userName || "",
    phone: "",
    date: "",
    timeSlot: "Morning (10 AM - 1 PM)",
    mode: "Video Call (Zoom/WhatsApp)"
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.date) {
      alert("Please provide your phone number and preferred date.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white rounded-sm shadow-2xl max-w-md w-full p-6 relative border border-stone-200 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition cursor-pointer text-xl"
        >
          <BiX />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#8b3a2b] font-bold bg-[#8b3a2b]/10 px-2.5 py-0.5 rounded-full">
                ✨ Expert Guidance
              </span>
              <h3 className="text-xl font-serif text-[#4a2e18] mt-2 mb-1">
                Book Astrologer Consultation
              </h3>
              <p className="text-xs text-stone-600 font-serif">
                Speak directly with our Vedic experts regarding your <strong className="capitalize text-[#8b3a2b]">{userConcern || "life path"}</strong> remedies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                  <BiUser className="text-sm" /> Full Name
                </label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name" 
                  className="w-full p-2.5 border border-stone-300 rounded-sm bg-stone-50 focus:outline-none focus:border-[#8b3a2b]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                  <BiPhone className="text-sm" /> Phone Number (WhatsApp Enabled)
                </label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210" 
                  className="w-full p-2.5 border border-stone-300 rounded-sm bg-stone-50 focus:outline-none focus:border-[#8b3a2b]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                    <BiCalendar className="text-sm" /> Preferred Date
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full p-2.5 border border-stone-300 rounded-sm bg-stone-50 focus:outline-none focus:border-[#8b3a2b]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                    <BiTime className="text-sm" /> Time Slot
                  </label>
                  <select 
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                    className="w-full p-2.5 border border-stone-300 rounded-sm bg-stone-50 focus:outline-none focus:border-[#8b3a2b]"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-stone-600 mb-1">Consultation Mode</label>
                <select 
                  value={formData.mode}
                  onChange={(e) => setFormData({...formData, mode: e.target.value})}
                  className="w-full p-2.5 border border-stone-300 rounded-sm bg-stone-50 focus:outline-none focus:border-[#8b3a2b]"
                >
                  <option value="Video Call (Zoom/WhatsApp)">Video Call (Zoom / WhatsApp)</option>
                  <option value="Audio Call">Audio Call</option>
                  <option value="Chat Consultation">Chat Consultation</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 font-bold uppercase tracking-widest transition shadow-sm cursor-pointer mt-2"
              >
                Confirm Consultation Booking
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <BiCheckCircle className="text-5xl text-emerald-600 mx-auto" />
            <h3 className="text-xl font-serif text-[#4a2e18]">Consultation Booked Successfully!</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-serif">
              Thank you, <strong>{formData.name}</strong>. Our senior Vedic astrologer will connect with you on <strong className="text-[#8b3a2b]">{formData.phone}</strong> for your selected slot on <strong className="text-[#8b3a2b]">{formData.date}</strong>.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-[#4a2e18] hover:bg-[#321e10] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AstrologerConsultationModal;