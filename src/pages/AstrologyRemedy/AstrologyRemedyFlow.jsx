import React, { useState } from "react";
import { BiShieldQuarter, BiTrendingUp, BiHeart, BiHome, BiPlanet, BiShoppingBag, BiCheckCircle, BiCalendar, BiTime, BiMapPin, BiUser, BiSupport } from "react-icons/bi";
import AstrologerConsultationModal from "./AstrologerConsultationModal";

const AstrologyRemedyFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedConcern, setSelectedConcern] = useState("wealth");
  const [birthData, setBirthData] = useState({ name: "", dob: "", time: "", place: "" });
  const [loadingKundli, setLoadingKundli] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const concerns = [
    { id: "wealth", title: "Wealth & Prosperity", icon: <BiTrendingUp className="text-2xl text-[#b8860b]" />, desc: "Attract abundance & financial growth." },
    { id: "career", title: "Career & Business", icon: <BiShieldQuarter className="text-2xl text-[#8b3a2b]" />, desc: "Remove obstacles & boost success." },
    { id: "marriage", title: "Love & Marriage", icon: <BiHeart className="text-2xl text-rose-600" />, desc: "Harmony and relationship remedies." },
    { id: "vastu", title: "Vastu & Protection", icon: <BiHome className="text-2xl text-emerald-700" />, desc: "Shield against negative energies." },
    { id: "planetary", title: "Navgraha / Shani", icon: <BiPlanet className="text-2xl text-indigo-700" />, desc: "Pacify malefic planetary effects." }
  ];

  const handleKundliSubmit = (e) => {
    e.preventDefault();
    if (!birthData.name || !birthData.dob || !birthData.time || !birthData.place) {
      alert("Please fill in all birth details for Kundli integration.");
      return;
    }
    setLoadingKundli(true);
    setTimeout(() => {
      setLoadingKundli(false);
      setStep(3);
    }, 1500);
  };

  const remedyProducts = [
    {
      id: 1,
      title: "Shri Kuber Yantra (Energized)",
      category: "wealth",
      price: 1199,
      purpose: "Attracts wealth, opens new avenues for income, and bestows financial stability based on your planetary chart.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      title: "5 Mukhi Rudraksha Mala",
      category: "career",
      price: 799,
      purpose: "Enhances concentration, Jupiter alignment, and supports professional leadership.",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      title: "Gauri Shankar Rudraksha",
      category: "marriage",
      price: 2499,
      purpose: "Fosters harmony, Venus alignment, and resolves marital discord.",
      image: "https://via.placeholder.com/200"
    }
  ];

  const filteredProducts = remedyProducts.filter(item => item.category === selectedConcern);

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1000px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10 border border-stone-200">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#8b3a2b] font-bold bg-[#8b3a2b]/10 px-3 py-1 rounded-full">
            ✨ Vedic Astrology & Personalized Remedies
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mt-3 mb-2">
            Astrological Remedy & Consultation Flow
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif">
            {step === 1 && "Step 1: Select your primary life concern."}
            {step === 2 && "Step 2: Enter birth details for precise Kundli planetary mapping."}
            {step === 3 && `Step 3: Personalized Recommendations & Expert Consultation for ${birthData.name || "You"}.`}
          </p>
        </div>

        {/* STEP 1: Concern Selection */}
        {step === 1 && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
              {concerns.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedConcern(item.id)}
                  className={`p-4 border rounded-sm cursor-pointer transition-all flex flex-col justify-between ${
                    selectedConcern === item.id
                      ? "border-[#8b3a2b] bg-[#8b3a2b]/10 shadow-sm"
                      : "border-stone-200 bg-stone-50 hover:border-stone-300"
                  }`}
                >
                  <div>
                    <div className="mb-2">{item.icon}</div>
                    <h4 className="text-xs font-bold text-[#4a2e18] mb-1">{item.title}</h4>
                    <p className="text-[11px] text-stone-600 leading-snug">{item.desc}</p>
                  </div>
                  {selectedConcern === item.id && (
                    <span className="mt-3 text-[10px] font-bold text-[#8b3a2b] uppercase tracking-wider flex items-center gap-1">
                      <BiCheckCircle className="text-sm" /> Selected
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(2)}
                className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition shadow-sm cursor-pointer"
              >
                Proceed to Birth Details & Kundli &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Birth Details & Kundli Integration Form */}
        {step === 2 && (
          <form onSubmit={handleKundliSubmit} className="max-w-xl mx-auto bg-stone-50 p-6 border border-stone-200 rounded-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] mb-4 flex items-center gap-2">
              <BiPlanet className="text-lg text-[#8b3a2b]" /> Enter Birth Details for Kundli Analysis
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                  <BiUser className="text-sm" /> Full Name
                </label>
                <input 
                  type="text" 
                  value={birthData.name}
                  onChange={(e) => setBirthData({...birthData, name: e.target.value})}
                  placeholder="Enter your full name" 
                  className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                    <BiCalendar className="text-sm" /> Date of Birth
                  </label>
                  <input 
                    type="date" 
                    value={birthData.dob}
                    onChange={(e) => setBirthData({...birthData, dob: e.target.value})}
                    className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                    <BiTime className="text-sm" /> Time of Birth
                  </label>
                  <input 
                    type="time" 
                    value={birthData.time}
                    onChange={(e) => setBirthData({...birthData, time: e.target.value})}
                    className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-stone-600 mb-1 flex items-center gap-1">
                  <BiMapPin className="text-sm" /> Place of Birth (City, Country)
                </label>
                <input 
                  type="text" 
                  value={birthData.place}
                  onChange={(e) => setBirthData({...birthData, place: e.target.value})}
                  placeholder="e.g. New Delhi, India" 
                  className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-stone-200 hover:bg-stone-300 text-stone-700 py-3 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
              >
                &larr; Back
              </button>
              <button 
                type="submit"
                disabled={loadingKundli}
                className="w-2/3 bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                {loadingKundli ? "Analyzing Kundli & Planets..." : "Generate Personalized Flow"}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Recommended Products, Purpose & Astrologer Consultation */}
        {step === 3 && (
          <div>
            <div className="bg-[#fffbf2] p-4 border border-[#e8dcc4] rounded-sm mb-6 flex justify-between items-center flex-wrap gap-3">
              <div>
                <p className="text-xs text-stone-600 font-serif">Kundli Chart Mapped for: <strong className="text-[#4a2e18]">{birthData.name}</strong> ({birthData.place})</p>
                <p className="text-[11px] text-amber-700 font-semibold mt-0.5">Focus Concern: <span className="uppercase">{selectedConcern}</span></p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#8b3a2b] hover:bg-[#6e2d21] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <BiSupport className="text-base" /> Book Astrologer Consultation
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Change Concern
                </button>
              </div>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">
              Personalized Recommendations Based on Your Chart
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="bg-stone-50 border border-stone-200 p-4 rounded-sm flex flex-col justify-between">
                  <div>
                    <div className="w-full h-40 bg-white border border-stone-200 rounded-sm mb-3 flex items-center justify-center">
                      <span className="text-xs text-stone-400">[Energized Vedic Product]</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#4a2e18] mb-2">{prod.title}</h4>
                    <div className="bg-white p-2.5 border border-stone-200 rounded-sm mb-4">
                      <p className="text-[11px] text-stone-700 font-serif leading-relaxed">
                        <span className="font-bold text-[#b8860b]">Kundli Purpose: </span> {prod.purpose}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                    <span className="text-sm font-bold text-[#8b3a2b]">Rs. {prod.price}</span>
                    <button 
                      onClick={() => alert(`Redirecting to secure purchase for ${prod.title}`)}
                      className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition flex items-center gap-1 cursor-pointer"
                    >
                      <BiShoppingBag /> Purchase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Astrologer Consultation Modal */}
      <AstrologerConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={birthData.name}
        userConcern={selectedConcern}
      />
    </div>
  );
};

export default AstrologyRemedyFlow;