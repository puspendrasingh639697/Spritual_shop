import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaUser, FaPhone, FaMapMarkerAlt, FaLandmark, FaCalendarAlt, FaClock, FaShieldAlt } from "react-icons/fa";

const PanditForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    Landmark: "",
    email: "",
    pujaDate: "",
    pujaTime: "",
    specialInstructions: "",
  });

  const [bookingMeta, setBookingMeta] = useState({
    panditId: null,
    packageDetails: null,
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const savedPackage = localStorage.getItem("selectedPackage");
      const storedPanditId = localStorage.getItem("PanditId") || "";

      setBookingMeta({
        panditId: storedPanditId,
        packageDetails: savedPackage ? JSON.parse(savedPackage) : null,
      });
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.mobile || !formData.address || !formData.pujaDate || !formData.pujaTime) {
      alert("Please fill in all mandatory fields including date and time.");
      return;
    }

    const finalBookingPayload = {
      ...formData,
      panditId: bookingMeta.panditId,
      package: bookingMeta.packageDetails,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1200));

      localStorage.setItem("finalBooking", JSON.stringify(finalBookingPayload));
      setShowModal(true);
    } catch (error) {
      console.error("Booking Failed:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById("booking-details-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-[#fff3df] to-amber-50 min-h-screen relative overflow-hidden">
      
      {/* Background Decorative Vedic SVGs */}
      <div className="absolute top-20 left-10 text-amber-900/5 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.02-.42 1.95-1.07 2.75z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 text-amber-900/5 pointer-events-none">
        <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/>
        </svg>
      </div>

      {/* Hero Banner Section */}
      <div className="relative h-[75vh] w-full bg-black flex items-center justify-center overflow-hidden">
        
        {/* SVG Wave Pattern Overlay at bottom of Hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="relative block w-full h-12 text-[#fff3df]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>

        <img
          src="https://images.unsplash.com/photo-1609137144813-7524672e1407?auto=format&fit=crop&q=80&w=1600"
          alt="Sacred Rituals"
          className="absolute top-0 left-0 z-10 object-cover w-full h-full opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>

        <div className="relative z-20 text-white text-center px-4 max-w-3xl">
          <span className="bg-[#8c0a15] text-amber-300 border border-amber-400/30 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4 shadow-lg backdrop-blur-md flex items-center justify-center gap-2 mx-auto w-fit">
            {/* Swastik / Sacred Icon SVG */}
            
            Sacred Rituals Booking Portal
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="text-white">  Book Expert Pandit Ji</span>
          </h1>
          <p className="font-medium text-lg sm:text-xl mt-4 text-gray-200 leading-relaxed">
            Invite divine energy, peace, and prosperity directly to your home with authentic Vedic procedures.
          </p>
          <button
            onClick={handleScrollToForm}
            className="mt-8 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black text-base font-bold py-3.5 px-9 rounded-full shadow-xl shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 mx-auto"
          >
            {/* Sparkle/Flame SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.603 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654a1 1 0 00-1.788-.614 5.97 5.97 0 00-1.282 3.864c0 2.455 1.458 4.56 3.548 5.51a1 1 0 00.916-1.79c-1.472-.667-2.464-2.12-2.464-3.72 0-.614.072-1.125.215-1.551.488 1.01 1.349 1.84 2.44 2.308a1 1 0 001.272-1.344 6.945 6.945 0 01-1.353-3.23c.216-.838.46-1.683.743-2.362.22-.53.461-1.036.735-1.503a1 1 0 00-.385-1.45z" clipRule="evenodd" />
            </svg>
            Proceed to Booking
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div id="booking-details-form" className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Info & Summary Box */}
          <div className="lg:w-5/12 relative min-h-[350px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-red-950 via-red-900 to-amber-950 text-white overflow-hidden">
            {/* Subtle decorative background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Order Summary
              </span>
              
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {bookingMeta.packageDetails?.title || "Custom Vedic Package"}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {bookingMeta.packageDetails?.CustomDescription || "Experienced Vedic Pandit will guide all rituals with accurate mantras and complete traditional procedures at your location."}
              </p>

              {bookingMeta.packageDetails?.price && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-medium">Total Payable Amount:</span>
                  <span className="text-2xl font-extrabold text-amber-400">₹{bookingMeta.packageDetails.price}</span>
                </div>
              )}

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-amber-400 text-sm flex-shrink-0" />
                  <span>Verified & Experienced Vedic Scholars</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
                  <span>Includes all standard ceremonial steps & guidance</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <p className="text-xs text-amber-200/80 italic">
                "Perform your rituals with complete faith and absolute purity."
              </p>
            </div>
          </div>

          {/* Right Active Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-7/12 flex flex-col justify-center p-8 sm:p-12 space-y-5 bg-white"
          >
            <div className="border-b border-gray-100 pb-3">
              <h2 className="text-2xl font-extrabold text-gray-800">Devotee & Location Details</h2>
              <p className="text-xs text-gray-500 mt-0.5">Please provide accurate contact details and preferred slot for coordination.</p>
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Number & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    required
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit Mobile Number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                />
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Puja Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    required
                    type="date"
                    name="pujaDate"
                    value={formData.pujaDate}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <select
                    required
                    name="pujaTime"
                    value={formData.pujaTime}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="Morning (6 AM - 10 AM)">Morning (6:00 AM - 10:00 AM)</option>
                    <option value="Mid-Day (10 AM - 2 PM)">Mid-Day (10:00 AM - 2:00 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Complete Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House No, Street Name, Area/Society"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                />
              </div>
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Landmark <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaLandmark className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  required
                  type="text"
                  name="Landmark"
                  value={formData.Landmark}
                  onChange={handleChange}
                  placeholder="Nearby Famous Landmark / Temple / Park"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-800"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-red-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-600/25 transition-all duration-300 cursor-pointer text-base mt-2 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Confirming Booking..." : "Confirm & Book Pandit Ji"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center border border-gray-100 transform transition-all animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner">
              <FaCheckCircle />
            </div>
            <h2 className="text-2xl font-extrabold mb-2 text-gray-800">
              Booking Confirmed Successfully!
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Your ritual has been scheduled for <span className="font-semibold text-gray-800">{formData.pujaDate}</span>. <br />
              We will contact you shortly on your mobile number:{" "}
              <span className="font-bold text-gray-800">{formData.mobile}</span>.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/");
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md cursor-pointer transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PanditForm;