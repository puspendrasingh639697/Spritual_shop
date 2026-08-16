import React from "react";
import { 
  BiUser, 
  BiPackage, 
  BiHeart, 
  BiMap, 
  BiGift, 
  BiStar, 
  BiHistory, 
  BiBell, 
  BiSupport, 
  BiBookOpen,      // 👈 Kundli ke liye icon
  BiSun,           // 👈 Remedies ke liye icon
  BiPhoneCall,     // 👈 Consultations ke liye icon
  BiLogOut, 
  BiChevronRight 
} from "react-icons/bi";

export default function AccountSidebar({ profile, activeTab, setActiveTab }) {
  const menuItems = [
    { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
    { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
    { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
    { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
    { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
    { id: "kundli", label: "Saved Kundli", icon: <BiBookOpen className="text-base" /> },                 // 👈 Added
    { id: "remedies", label: "Personalized Remedies", icon: <BiSun className="text-base" /> },         // 👈 Added
    { id: "consultations", label: "Consultation History", icon: <BiPhoneCall className="text-base" /> }, // 👈 Added
    { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
    { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
    { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
    { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
  ];

  return (
    <div className="lg:col-span-1 bg-stone-50 border border-stone-200 rounded-sm p-4 h-fit space-y-2">
      <div className="flex items-center gap-3 p-3 border-b border-stone-200 pb-4 mb-2">
        <div className="w-10 h-10 rounded-full bg-[#8b3a2b] text-white flex items-center justify-center font-bold font-serif text-lg">
          {profile.fullName.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs font-bold font-serif text-[#4a2e18] truncate">{profile.fullName}</h4>
          <p className="text-[10px] text-stone-500 truncate">{profile.phone}</p>
        </div>
      </div>

      {menuItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center justify-between p-2.5 text-xs font-bold rounded-sm cursor-pointer transition ${activeTab === item.id ? 'bg-[#8b3a2b] text-white' : 'text-stone-700 hover:bg-stone-200'}`}
        >
          <span className="flex items-center gap-2">{item.icon} {item.label}</span>
          <BiChevronRight />
        </button>
      ))}

      <div className="pt-4 border-t border-stone-200 mt-2">
        <button 
          onClick={() => alert("Logged out successfully!")}
          className="w-full flex items-center gap-2 p-2.5 text-xs font-bold text-red-700 hover:bg-red-50 rounded-sm cursor-pointer transition"
        >
          <BiLogOut className="text-base" /> Sign Out
        </button>
      </div>
    </div>
  );
}