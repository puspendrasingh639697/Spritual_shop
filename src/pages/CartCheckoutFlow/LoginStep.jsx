import React from "react";
import { BiUser, BiMobile, BiLock } from "react-icons/bi";

const LoginStep = ({
  authData,
  setAuthData,
  showOtpField,
  handleSendOtp,
  handleVerifyOtp,
  setStep
}) => {
  return (
    <div className="max-w-md mx-auto bg-stone-50 p-8 border border-stone-200 rounded-sm space-y-6">
      <div className="text-center space-y-2">
        <BiUser className="text-4xl text-[#8b3a2b] mx-auto" />
        <h3 className="text-lg font-serif text-[#4a2e18]">Sign In / Register</h3>
        <p className="text-xs text-stone-500">Enter your mobile number or email to continue checkout securely.</p>
      </div>

      <div className="flex gap-2 border-b border-stone-300 pb-2 text-xs font-bold">
        <button 
          type="button" 
          onClick={() => setAuthData({...authData, loginType: "mobile"})}
          className={`pb-1 ${authData.loginType === "mobile" ? "text-[#8b3a2b] border-b-2 border-[#8b3a2b]" : "text-stone-400"}`}
        >
          Mobile Number
        </button>
        <button 
          type="button" 
          onClick={() => setAuthData({...authData, loginType: "email"})}
          className={`pb-1 ${authData.loginType === "email" ? "text-[#8b3a2b] border-b-2 border-[#8b3a2b]" : "text-stone-400"}`}
        >
          Email Address
        </button>
      </div>

      {!showOtpField ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
              {authData.loginType === "mobile" ? "Mobile Number" : "Email Address"}
            </label>
            <div className="flex items-center border border-stone-300 bg-white rounded-sm p-2.5">
              {authData.loginType === "mobile" ? <BiMobile className="text-stone-400 mr-2 text-base" /> : <BiUser className="text-stone-400 mr-2 text-base" />}
              <input 
                type={authData.loginType === "mobile" ? "tel" : "email"}
                placeholder={authData.loginType === "mobile" ? "Enter 10-digit mobile" : "name@example.com"}
                value={authData.identifier}
                onChange={(e) => setAuthData({...authData, identifier: e.target.value})}
                className="w-full text-xs outline-none bg-transparent"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Enter 4-Digit OTP (Hint: 1234)</label>
            <div className="flex items-center border border-stone-300 bg-white rounded-sm p-2.5">
              <BiLock className="text-stone-400 mr-2 text-base" />
              <input 
                type="text" 
                maxLength="4"
                placeholder="1234"
                value={authData.otp}
                onChange={(e) => setAuthData({...authData, otp: e.target.value})}
                className="w-full text-xs outline-none bg-transparent tracking-widest font-bold"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
            Verify & Proceed
          </button>
        </form>
      )}

      <button onClick={() => setStep(1)} className="w-full text-center text-xs text-stone-500 hover:underline pt-2 cursor-pointer">
        &larr; Back to Cart
      </button>
    </div>
  );
};

export default LoginStep;