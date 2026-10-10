


// import "./App.css";
// import React from "react";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import PujaKits from "./components/PujaKits";
// import YantraCollection from "./components/YantraCollection";
// import RudrakshaMalas from "./components/RudrakshaMalas";
// import Gemstones from "./pages/Gemstones";
// import Idols from "./pages/Idols";
// import AstrologyRemedies from "./components/AstrologyRemedies";
// import FestivalCollection from "./components/FestivalCollection";
// import SpiritualBlog from "./components/SpiritualBlog";
// import PujaSamagri from "./pages/PujaSamagri";
// import ProductDetails from "./pages/ProductDetails";
// import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";
// import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
// import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";

// import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
// import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";
// import Login from "./Utils/Login";
// import Register from "./Utils/Register";
// import AstrologerDashboard from "./pages/AstrologerDashboard";
// import AstrologerLogin from "./Utils/AstrologerLogin";
// import AstrologerRegister from "./Utils/AstrologerRegister";
// import ForgotPassword from "./Utils/ForgotPassword";
// import OtpVerification from "./Utils/OtpVerification";
// import SendOtp from "./Utils/SendOtp";
// import WishlistTab from "./pages/CustomerAccount/WishlistTab";
// import CategoryProducts from "./components/CategoryProducts";
// import Checkout from "./pages/CartCheckoutFlow/Checkout";
// import BlogDetail from "./pages/Blogpage/BlogPostDetail";
// import BigTempleCarousel from "./components/BookEPuja/BigTempleCarousel";
// import BookPuja from "./components/BookEPuja/BookPuja";
// import PanditBookingPage from "./components/PanditBooking/PanditBookingPage";
// import PanditPackage from "./components/PanditBooking/PanditPackage";
// import PanditForm from "./components/PanditBooking/PanditForm";
// import PopularChadhavaSection from "./components/Chadhawa/ChadhawaHomepage";
// import Chadhawa from "./components/Chadhawa/Chadhawa";
// import PoojaDetailPage from "./components/BookEPuja/PoojaDetailsSection";
// import EPoojaBookingpage from "./components/BookEPuja/EPoojaBookingpage";
// import PujaBookingForm from "./components/BookEPuja/PujaBookingForm";
// import ChadhawaDetailPage from "./components/Chadhawa/ChadhawaDetailPage";
// import ChadhawaBookingForm from "./components/Chadhawa/ChadhawaBookingForm";
// import ExplorePilgrimage from "./components/Tample/ExplorePilgrimage";

// // ✅ YEH NAYA COMPONENT ADD KIYA HAI (Already Logged In User ko Login page se redirect karega)
// const RedirectIfLoggedIn = ({ children }) => {
//   const token = localStorage.getItem('token');
  
//   // Agar token hai, toh seedha Home par bhejo
//   if (token) {
//     return <Navigate to="/" replace />;
//   }
  
//   // Agar token nahi hai, toh Login page dikhao
//   return children;
// };

// function MainLayout() {
//   const location = useLocation();
//   const isAccountPage = location.pathname === "/account";

//   return (
//     <div className="min-h-screen flex flex-col bg-stone-50">
//       {/* Agar user /account par nahi hai, tabhi Navbar dikhega */}
//       {!isAccountPage && <Navbar />}

//       <div className="flex-1">
//         <Routes>
//           {/* Home Page Route - Sabke liye khula */}
//           <Route path="/" element={<Home />} />

//           {/* Auth Routes (Login & Register) */}
//           <Route 
//             path="/login" 
//             element={
//               <RedirectIfLoggedIn>
//                 <Login />
//               </RedirectIfLoggedIn>
//             } 
//           />
//           <Route path="/register" element={<Register />} />
//           <Route path="/astrologer/login" element={<AstrologerLogin />} />
//           <Route path="/astrologer/register" element={<AstrologerRegister />} />

//           {/* Astrologer Dashboard */}
//           <Route path="/astrologer/dashboard" element={<AstrologerDashboard/>} />
//           <Route path="/send-otp" element={<SendOtp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/verify-otp" element={<OtpVerification />} />
//           <Route path="/category/:categoryName" element={<CategoryProducts />} />
          
//           {/* Navbar ke alag pages */}
//           <Route path="/puja-samagri" element={<PujaSamagri />} />
//           <Route path="/puja-kits" element={<PujaKits />} />
//           <Route path="/yantra" element={<YantraCollection />} />
//           <Route path="/rudraksha" element={<RudrakshaMalas />} />
//           <Route path="/gemstones" element={<Gemstones />} />
//           <Route path="/idols" element={<Idols />} />
//           <Route path="/remedies" element={<AstrologyRemedies />} />
//           <Route path="/festivals" element={<FestivalCollection />} />
//           <Route path="/blogs" element={<SpiritualBlog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//           <Route path="/pooja-booking" element={<BookPuja />} />
//           <Route path="/pooja/:id" element={<PoojaDetailPage />} />
//           <Route path="/pooja-booking/:id" element={<EPoojaBookingpage />} />
//           <Route path="/pooja-booking/:id/form" element={<PujaBookingForm />} />
//           <Route path="/temples" element={<ExplorePilgrimage />} />

//           <Route path="/pandit-booking" element={<PanditBookingPage />} />
//           <Route path="/pandit-package/:id" element={<PanditPackage />} />

//           <Route path="/panditform" element={<PanditForm />} />
//           <Route path="/Chadhawa" element={<Chadhawa />} />
//           <Route path="/chadhawa/:id" element={<ChadhawaDetailPage />} />
//           <Route path="/chadhawa/:id/form" element={<ChadhawaBookingForm />} />
          
//           {/* Product Details - Sabke liye khula (Bina Login ke bhi) */}
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="/checkout" element={<Checkout />} />

//           <Route path="/remedie" element={<AstrologyRemedyFlow />} /> 
          
//           {/* Cart & Checkout Route */}
//           <Route path="/cart" element={<CartCheckoutFlow />} />
          
//           {/* Other Routes */}
//           <Route path="/puja-booking" element={<OnlinePujaBooking />} />

//           {/* User Account & Order Tracking Routes */}
//           <Route path="/account" element={<CustomerAccount />} />
//           <Route path="/tracking" element={<OrderTracking />} />
          
//           <Route path="/wishlist" element={<WishlistTab/>} />

//           {/* Fallback route */}
//           <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
//         </Routes>
//       </div>

//       {/* Agar user /account par nahi hai, tabhi Footer dikhega */}
//       {!isAccountPage && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <CartProvider>
//       <MainLayout />
//     </CartProvider>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ पेजेस (सिर्फ काम के)
import Home from "./components/Home";
import Login from "./Utils/Login";
import Register from "./Utils/Register";
import ForgotPassword from "./Utils/ForgotPassword";
import OtpVerification from "./Utils/OtpVerification";
import SendOtp from "./Utils/SendOtp";

// ✅ E-Shop Pages
import PujaSamagri from "./pages/PujaSamagri";
import PujaKits from "./components/PujaKits";
import YantraCollection from "./components/YantraCollection";
import RudrakshaMalas from "./components/RudrakshaMalas";
import Gemstones from "./pages/Gemstones";
import Idols from "./pages/Idols";
import AstrologyRemedies from "./components/AstrologyRemedies";
import FestivalCollection from "./components/FestivalCollection";
import CategoryProducts from "./components/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";

// ✅ Cart & Checkout
import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
import Checkout from "./pages/CartCheckoutFlow/Checkout";
import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";

// ✅ Account & Wishlist
import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
import WishlistTab from "./pages/CustomerAccount/WishlistTab";

// ✅ Booking Pages
import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";
import BookPuja from "./components/BookEPuja/BookPuja";
import PoojaDetailPage from "./components/BookEPuja/PoojaDetailsSection";
import EPoojaBookingpage from "./components/BookEPuja/EPoojaBookingpage";
import PujaBookingForm from "./components/BookEPuja/PujaBookingForm";

import PanditBookingPage from "./components/PanditBooking/PanditBookingPage";
import PanditPackage from "./components/PanditBooking/PanditPackage";
import PanditForm from "./components/PanditBooking/PanditForm";

import Chadhawa from "./components/Chadhawa/Chadhawa";
import ChadhawaDetailPage from "./components/Chadhawa/ChadhawaDetailPage";
import ChadhawaBookingForm from "./components/Chadhawa/ChadhawaBookingForm";
import PopularChadhavaSection from "./components/Chadhawa/ChadhawaHomepage";

import ExplorePilgrimage from "./components/Tample/ExplorePilgrimage";

// ✅ Blog
import SpiritualBlog from "./components/SpiritualBlog";
import BlogDetail from "./pages/Blogpage/BlogPostDetail";

// ✅ Remedy Flow
import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";

// ✅ Astrologer
import AstrologerDashboard from "./pages/AstrologerDashboard";
import AstrologerLogin from "./Utils/AstrologerLogin";
import AstrologerRegister from "./Utils/AstrologerRegister";
import ChadhawaList from "./components/Chadhawa/ChadhawaPackageModal";

// ✅ Auth Guard
const RedirectIfLoggedIn = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" replace />;
  return children;
};

function MainLayout() {
  const location = useLocation();
  const isAccountPage = location.pathname === "/account";

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {!isAccountPage && <Navbar />}

      <div className="flex-1">
        <Routes>
          {/* 🏠 Home */}
          <Route path="/" element={<Home />} />

          {/* 🔐 Auth */}
          <Route path="/login" element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/send-otp" element={<SendOtp />} />

          {/* 🧑‍🔮 Astrologer */}
          <Route path="/astrologer/login" element={<AstrologerLogin />} />
          <Route path="/astrologer/register" element={<AstrologerRegister />} />
          <Route path="/astrologer/dashboard" element={<AstrologerDashboard />} />

          {/* 🛒 E-Shop */}
          <Route path="/puja-samagri" element={<PujaSamagri />} />
          <Route path="/puja-kits" element={<PujaKits />} />
          <Route path="/yantra" element={<YantraCollection />} />
          <Route path="/rudraksha" element={<RudrakshaMalas />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/remedies" element={<AstrologyRemedies />} />
          <Route path="/festivals" element={<FestivalCollection />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* 📝 Blogs */}
          <Route path="/blogs" element={<SpiritualBlog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* 🙏 Puja Booking */}
          <Route path="/pooja-booking" element={<BookPuja />} />
          <Route path="/pooja/:id" element={<PoojaDetailPage />} />
          <Route path="/pooja-booking/:id" element={<EPoojaBookingpage />} />
          <Route path="/pooja-booking/:id/form" element={<PujaBookingForm />} />
          <Route path="/puja-booking" element={<OnlinePujaBooking />} />

          {/* 🛕 Temples */}
          <Route path="/temples" element={<ExplorePilgrimage />} />

          {/* 🧑‍🏫 Pandit Booking */}
          <Route path="/pandit-booking" element={<PanditBookingPage />} />
          <Route path="/pandit-package/:id" element={<PanditPackage />} />
          <Route path="/panditform" element={<PanditForm />} />

          {/* 🪔 Chadhawa */}
          <Route path="/chadhawa" element={<Chadhawa />} />
          <Route path="/chadhawa/:id" element={<ChadhawaDetailPage />} />
          <Route path="/chadhawa" element={<ChadhawaList />} />
          <Route path="/chadhawa/:id/form" element={<ChadhawaBookingForm />} />

          {/* 🛒 Cart & Checkout */}
          <Route path="/cart" element={<CartCheckoutFlow />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tracking" element={<OrderTracking />} />

          {/* 👤 Account & Wishlist */}
          <Route path="/account" element={<CustomerAccount />} />
          <Route path="/wishlist" element={<WishlistTab />} />

          {/* 🔮 Remedy Flow */}
          <Route path="/remedie" element={<AstrologyRemedyFlow />} />

          {/* ❌ 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">
                Page Not Found
              </div>
            }
          />
        </Routes>
      </div>

      {!isAccountPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}

export default App;


