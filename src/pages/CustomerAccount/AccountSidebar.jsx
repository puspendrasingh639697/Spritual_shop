import React from "react";
import { 
  BiGridAlt,        // Dashboard Icon
  BiUser, 
  BiPackage, 
  BiHeart, 
  BiMap, 
  BiGift, 
  BiStar, 
  BiHistory, 
  BiBell, 
  BiSupport, 
  BiBookOpen, 
  BiSun, 
  BiPhoneCall, 
  BiLogOut, 
  BiChevronRight 
} from "react-icons/bi";

export default function AccountSidebar({ profile, activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <BiGridAlt className="text-base" /> }, // 👈 Added Overview Dashboard
    { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
    { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
    { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
    { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
    { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
    { id: "kundli", label: "Saved Kundli", icon: <BiBookOpen className="text-base" /> },
    { id: "remedies", label: "Personalized Remedies", icon: <BiSun className="text-base" /> },
    { id: "consultations", label: "Consultation History", icon: <BiPhoneCall className="text-base" /> },
    { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
    { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
    { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
    { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
  ];

  return (
    <div className="bg-[#fff3df] border border-stone-200 rounded-xl p-4 space-y-4 shadow-sm h-fit">
      {/* User Header Profile Card */}
      <div className="flex items-center gap-3 p-3 bg-[#8c0a15] rounded-lg border border-stone-100">
        <div className="w-10 h-10 rounded-full bg-[#8b3a2b] text-white flex items-center justify-center font-bold font-serif text-lg">
          {profile.fullName.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs font-bold text-white truncate">{profile.fullName}</h4>
          <p className="text-[14px] text-white truncate">{profile.phone}</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between p-2.5 text-xs font-semibold rounded-lg cursor-pointer transition ${
              activeTab === item.id 
                ? ' bg-[#8b3a2b] text-white shadow-sm' 
                : 'text-stone-600 hover:bg-[#8b3a2b] hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">{item.icon} {item.label}</span>
            <BiChevronRight className={activeTab === item.id ? "text-white" : "text-stone-400"} />
          </button>
        ))}
      </div>

      <div className="pt-3 border-t border-stone-100">
        <button 
          onClick={() => alert("Logged out successfully!")}
          className="w-full flex items-center gap-2.5 p-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
        >
          <BiLogOut className="text-base" /> Sign Out
        </button>
      </div>
    </div>
  );
}