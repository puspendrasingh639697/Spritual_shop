import React, { useState } from "react";
import { 
  BiSun, 
  BiCalendar, 
  BiTime, 
  BiUser, 
  BiPhone, 
  BiEnvelope, 
  BiCheckCircle, 
  BiShield 
} from "react-icons/bi";

const OnlinePujaBooking = () => {
  // Selected Puja Package State
  const [selectedPuja, setSelectedPuja] = useState({
    title: "Maha Mrityunjaya Jaap & Hhavan",
    price: 2100,
    duration: "1 Day / 11 Priests"
  });

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    gotra: "",
    phone: "",
    email: "",
    pujaDate: "",
    specialSankalp: ""
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Puja packages list
  const pujaList = [
    { title: "Maha Mrityunjaya Jaap & Hhavan", price: 2100, duration: "1 Day / 11 Priests" },
    { title: "Ganesha & Lakshmi Prosperity Puja", price: 1500, duration: "1 Day / 5 Priests" },
    { title: "Kaal Sarp Dosh Nivaran Puja", price: 3100, duration: "1 Day / Vedic Scholars" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.pujaDate) {
      alert("Please fill in all mandatory fields (Name, Phone, Date).");
      return;
    }
    const genId = "PUJA-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(genId);
    setOrderPlaced(true);
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1000px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10 border border-stone-200">
        
        {/* Header */}
        <div className="text-center mb-8 border-b border-stone-200 pb-6">
          <span className="text-xs uppercase tracking-widest text-[#8b3a2b] font-bold bg-[#8b3a2b]/10 px-3 py-1 rounded-full inline-flex items-center gap-1">
            <BiShield className="text-sm" /> Certified Vedic Rituals
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mt-3 mb-2">
            Online Puja & Anushthan Booking
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-serif">
            Book sacred rituals performed by expert pandits at authentic temples with live sankalp.
          </p>
        </div>

        {!orderPlaced ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Form Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Select Puja Package */}
              <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
                  <BiSun className="text-base text-[#8b3a2b]" /> Select Puja Offering
                </h3>
                <div className="space-y-2">
                  {pujaList.map((puja, idx) => (
                    <label 
                      key={idx} 
                      onClick={() => setSelectedPuja(puja)}
                      className={`flex items-center justify-between p-3 border rounded-sm cursor-pointer transition ${selectedPuja.title === puja.title ? 'bg-[#8b3a2b]/5 border-[#8b3a2b]' : 'bg-white border-stone-200'}`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="pujaPackage" 
                          checked={selectedPuja.title === puja.title} 
                          onChange={() => setSelectedPuja(puja)}
                        />
                        <div>
                          <span className="text-xs font-bold font-serif text-[#4a2e18]">{puja.title}</span>
                          <p className="text-[10px] text-stone-500">{puja.duration}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#8b3a2b]">Rs. {puja.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Devotee Details */}
              <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
                <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
                  <BiUser className="text-base text-[#8b3a2b]" /> Devotee Details (Sankalp Info)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase text-stone-600 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter full name" 
                      className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase text-stone-600 mb-1">Gotra (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.gotra}
                      onChange={(e) => setFormData({...formData, gotra: e.target.value})}
                      placeholder="e.g. Kashyap Gotra" 
                      className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase text-stone-600 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210" 
                      className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase text-stone-600 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      value={formData.pujaDate}
                      onChange={(e) => setFormData({...formData, pujaDate: e.target.value})}
                      className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase text-stone-600 mb-1">Special Sankalp / Wish / Prayer</label>
                  <textarea 
                    rows="3"
                    value={formData.specialSankalp}
                    onChange={(e) => setFormData({...formData, specialSankalp: e.target.value})}
                    placeholder="Mention any specific family member names or wishes for sankalp..."
                    className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  ></textarea>
                </div>
              </div>

            </div>

            {/* Right Column: Summary Card */}
            <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm h-fit space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] pb-3 border-b border-stone-200">
                Booking Summary
              </h3>

              <div className="space-y-2 text-xs text-stone-600 font-serif">
                <p><strong className="text-[#8b3a2b]">Puja:</strong> {selectedPuja.title}</p>
                <p><strong className="text-[#8b3a2b]">Duration:</strong> {selectedPuja.duration}</p>
                <div className="pt-3 border-t border-stone-200 flex justify-between text-sm font-bold text-[#4a2e18]">
                  <span>Total Dakshina</span>
                  <span className="text-[#8b3a2b]">Rs. {selectedPuja.price}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest transition shadow-sm cursor-pointer"
              >
                Proceed & Book Puja
              </button>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="max-w-lg mx-auto text-center py-8 bg-stone-50 border border-stone-200 rounded-sm p-6 space-y-4">
            <BiCheckCircle className="text-6xl text-emerald-600 mx-auto" />
            <h3 className="text-xl font-serif text-[#4a2e18]">Puja Booked Successfully!</h3>
            
            <div className="bg-white p-4 border border-stone-200 rounded-sm text-left text-xs space-y-2 font-serif">
              <p><strong className="text-[#8b3a2b]">Booking ID:</strong> {bookingId}</p>
              <p><strong className="text-[#8b3a2b]">Devotee Name:</strong> {formData.fullName}</p>
              {formData.gotra && <p><strong className="text-[#8b3a2b]">Gotra:</strong> {formData.gotra}</p>}
              <p><strong className="text-[#8b3a2b]">Puja Date:</strong> {formData.pujaDate}</p>
              <p><strong className="text-[#8b3a2b]">Selected Puja:</strong> {selectedPuja.title}</p>
              <p><strong className="text-[#8b3a2b]">Dakshina Paid:</strong> Rs. {selectedPuja.price}</p>
            </div>

            <p className="text-xs text-stone-600 font-serif leading-relaxed">
              Our chief pandit will perform the ritual on your chosen date with live video updates sent to <strong className="text-[#8b3a2b]">{formData.phone}</strong>.
            </p>

            <button 
              onClick={() => setOrderPlaced(false)}
              className="mt-4 bg-[#4a2e18] hover:bg-[#321e10] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition cursor-pointer"
            >
              Book Another Puja
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default OnlinePujaBooking;