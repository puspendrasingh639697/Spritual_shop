// import React, { useState } from "react";
// import AccountSidebar from "./AccountSidebar";
// import ProfileTab from "./ProfileTab";
// import OrdersTab from "./OrdersTab";
// import WishlistTab from "./WishlistTab";
// import AddressesTab from "./AddressesTab";
// import NotificationsTab from "./NotificationsTab";
// import CouponsTab from "./CouponsTab";
// // import CouponsTab from "./CouponsTab";


// export default function CustomerAccount({ onNavigateTracking, onNavigateCart }) {
//   const [activeTab, setActiveTab] = useState("profile");

//   const [profile, setProfile] = useState({
//     fullName: "Rahul Sharma",
//     phone: "+91 98765 43210",
//     email: "rahul.sharma@example.com",
//     gender: "Male",
//     dob: "1994-06-15"
//   });

//   const [orders, setOrders] = useState([
//     {
//       id: "ORD-482910",
//       date: "16 August 2026",
//       status: "Out for Delivery",
//       items: "Shri Kuber Yantra (x1), Rudraksha Mala (x1)",
//       total: 1998
//     },
//     {
//       id: "ORD-391024",
//       date: "02 July 2026",
//       status: "Delivered",
//       items: "Gangajal Bottle (x2)",
//       total: 397
//     }
//   ]);

//   const [wishlist, setWishlist] = useState([
//     { id: 201, title: "Parad Shivling (Energized)", price: 2199, image: "https://via.placeholder.com/150" },
//     { id: 202, title: "Brass Akhand Jyoti Diya", price: 599, image: "https://via.placeholder.com/150" }
//   ]);

//   const [addresses, setAddresses] = useState([
//     { id: 1, type: "Home", text: "House No. 42, Temple Road, Connaught Place, New Delhi - 110001", phone: "+91 98765 43210" },
//     { id: 2, type: "Office", text: "Tower B, Cyber City, DLF Phase 2, Gurugram, Haryana - 122002", phone: "+91 98765 43210" }
//   ]);

//   const [notifications, setNotifications] = useState({
//     whatsappUpdates: true,
//     orderAlerts: true,
//     pujaReminders: false,
//     promotionalEmails: true
//   });

//   return (
//     <div className="max-w-5xl mx-auto font-sans grid grid-cols-1 lg:grid-cols-4 gap-8">
//       <AccountSidebar 
//         profile={profile} 
//         activeTab={activeTab} 
//         setActiveTab={setActiveTab} 
//       />

//       <div className="lg:col-span-3 bg-white border border-stone-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
//         {activeTab === "profile" && <ProfileTab profile={profile} setProfile={setProfile} />}
//         {activeTab === "orders" && <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />}
//         {activeTab === "wishlist" && <WishlistTab wishlist={wishlist} setWishlist={setWishlist} onNavigateCart={onNavigateCart} />}
//         {activeTab === "addresses" && <AddressesTab addresses={addresses} setAddresses={setAddresses} />}
//         {activeTab === "coupons" && <CouponsTab />}
//         {activeTab === "notifications" && <NotificationsTab notifications={notifications} setNotifications={setNotifications} />}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import WishlistTab from "./WishlistTab";
import AddressesTab from "./AddressesTab";
import NotificationsTab from "./NotificationsTab";
import CouponsTab from "./CouponsTab";
import ReviewsTab from "./ReviewsTab";               // 👈 Added
import RecentlyViewedTab from "./RecentlyViewedTab"; // 👈 Added

export default function CustomerAccount({ onNavigateTracking, onNavigateCart }) {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    fullName: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    gender: "Male",
    dob: "1994-06-15"
  });

  const [orders, setOrders] = useState([
    {
      id: "ORD-482910",
      date: "16 August 2026",
      status: "Out for Delivery",
      items: "Shri Kuber Yantra (x1), Rudraksha Mala (x1)",
      total: 1998
    },
    {
      id: "ORD-391024",
      date: "02 July 2026",
      status: "Delivered",
      items: "Gangajal Bottle (x2)",
      total: 397
    }
  ]);

  const [wishlist, setWishlist] = useState([
    { id: 201, title: "Parad Shivling (Energized)", price: 2199, image: "https://via.placeholder.com/150" },
    { id: 202, title: "Brass Akhand Jyoti Diya", price: 599, image: "https://via.placeholder.com/150" }
  ]);

  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", text: "House No. 42, Temple Road, Connaught Place, New Delhi - 110001", phone: "+91 98765 43210" },
    { id: 2, type: "Office", text: "Tower B, Cyber City, DLF Phase 2, Gurugram, Haryana - 122002", phone: "+91 98765 43210" }
  ]);

  const [notifications, setNotifications] = useState({
    whatsappUpdates: true,
    orderAlerts: true,
    pujaReminders: false,
    promotionalEmails: true
  });

  // 1. Reviews State Added
  const [reviews, setReviews] = useState([
    { id: 1, productName: "Shri Kuber Yantra", rating: 5, comment: "Bohot hi divya aur shuddh yantra hai. Positive energy feel hoti hai.", date: "10 August 2026" },
    { id: 2, productName: "Rudraksha Mala", rating: 4, comment: "Good quality beads. Original product.", date: "20 July 2026" }
  ]);

  // 2. Recently Viewed State Added
  const [recentlyViewed, setRecentlyViewed] = useState([
    { id: 301, title: "Sphatik Mala (Crystal)", price: 799, image: "https://via.placeholder.com/150" },
    { id: 302, title: "Brass Deepak for Puja", price: 349, image: "https://via.placeholder.com/150" }
  ]);

  return (
    <div className="max-w-5xl mx-auto font-sans grid grid-cols-1 lg:grid-cols-4 gap-8">
      <AccountSidebar 
        profile={profile} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <div className="lg:col-span-3 bg-white border border-stone-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
        {activeTab === "profile" && <ProfileTab profile={profile} setProfile={setProfile} />}
        {activeTab === "orders" && <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />}
        {activeTab === "wishlist" && <WishlistTab wishlist={wishlist} setWishlist={setWishlist} onNavigateCart={onNavigateCart} />}
        {activeTab === "addresses" && <AddressesTab addresses={addresses} setAddresses={setAddresses} />}
        {activeTab === "coupons" && <CouponsTab />}
        {activeTab === "reviews" && <ReviewsTab reviews={reviews} />} {/* 👈 Added */}
        {activeTab === "recently-viewed" && <RecentlyViewedTab recentlyViewed={recentlyViewed} onNavigateCart={onNavigateCart} />} {/* 👈 Added */}
        {activeTab === "notifications" && <NotificationsTab notifications={notifications} setNotifications={setNotifications} />}
      </div>
    </div>
  );
}