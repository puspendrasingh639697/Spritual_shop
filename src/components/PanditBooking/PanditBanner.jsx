import React, { useState } from "react";
import Select from "react-select";

const PanditBanner = ({ panditsRef, setAvailPandits }) => {
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [pincode, setPincode] = useState("");
  const [date, setDate] = useState("");

  const poojaOptions = [
    { value: "griha-pravesh", label: "Griha Pravesh Puja" },
    { value: "satyanarayan", label: "Satyanarayan Katha" },
    { value: "maha-mrityunjaya", label: "Maha Mrityunjaya Jaap" },
    { value: "rudrabhishek", label: "Rudrabhishek Puja" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy pandits data for filtering or passing
    const dummyPandits = [
      { name: "Acharya Sharma", specialization: "Griha Pravesh & Vedic Rituals", rating: 4.9, experience: "15 Years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
      { name: "Pandit Dinesh Shastri", specialization: "Satyanarayan & Hawan", rating: 4.8, experience: "12 Years", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150" },
    ];
    setAvailPandits(dummyPandits);

    // Scroll down smoothly to available pandits section
    if (panditsRef && panditsRef.current) {
      panditsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#fff3df] text-white py-16 px-4 md:px-8">
      

      <div className="relative max-w-4xl mx-auto text-center z-10">
       
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 drop-shadow-md leading-tight">
          Book A Verified Pandit For Your Sacred Rituals
        </h1>
      

        {/* Search Form Card */}
        <div className="bg-white text-black rounded-xl shadow-2xl p-6 md:p-8 text-left border border-amber-100">
          <form onSubmit={handleSearch} className="space-y-5">
            <div>
              <label className="block text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                Select Pooja / Ritual
              </label>
              <Select
                options={poojaOptions}
                value={selectedPooja}
                onChange={setSelectedPooja}
                placeholder="Choose a puja..."
                className="text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                  Location Pincode
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit pincode"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#8c0a15] hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-base tracking-wide"
            >
              Find Available Pandits
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PanditBanner;