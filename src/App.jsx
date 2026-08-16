
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
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

// // Home Page import karein
//  // ya jahan bhi aapne file banayi hai

// function App() {
//   return (
//     <CartProvider>
//       <Navbar />
      
//       <Routes>
//         {/* Home Page Route */}
//         <Route path="/" element={<Home />} />

//         {/* Navbar ke alag pages */}
//         <Route path="/puja-samagri" element={<PujaSamagri/>} />
//         <Route path="/puja-kits" element={<PujaKits />} />
//         <Route path="/yantra" element={ <YantraCollection/>} />
//         <Route path="/rudraksha" element={<RudrakshaMalas/>} />
//         <Route path="/gemstones" element={<Gemstones/>} />
//         <Route path="/idols" element={<Idols/>} />
//         <Route path="/remedies" element={<AstrologyRemedies/>} />
//         <Route path="/festivals" element={<FestivalCollection/>} />
//         <Route path="/blogs" element={<SpiritualBlog/>} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/remedie" element={<AstrologyRemedyFlow />} />
//         <Route path="/cart" element={<CartCheckoutFlow />} />
        
//         {/* Other Routes */}
//         <Route path="/puja-booking" element={<OnlinePujaBooking />} />


//         {/* User Account / Wishlist / Cart Routes */}
//         <Route path="/account" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Account Page Coming Soon...</div>} />
//         <Route path="/wishlist" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Wishlist Page Coming Soon...</div>} />
//         <Route path="/cart" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Cart Page Coming Soon...</div>} />

//         {/* Fallback route */}
//         <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
//       </Routes>

//       <Footer />
//     </CartProvider>
//   );
// }

// export default App;


import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PujaKits from "./components/PujaKits";
import YantraCollection from "./components/YantraCollection";
import RudrakshaMalas from "./components/RudrakshaMalas";
import Gemstones from "./pages/Gemstones";
import Idols from "./pages/Idols";
import AstrologyRemedies from "./components/AstrologyRemedies";
import FestivalCollection from "./components/FestivalCollection";
import SpiritualBlog from "./components/SpiritualBlog";
import PujaSamagri from "./pages/PujaSamagri";
import ProductDetails from "./pages/ProductDetails";
import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";
import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";

// Naye Account aur Tracking components import karein
// import CustomerAccount from "./CustomerAccount";
// import OrderTracking from "./OrderTracking";
import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";

function App() {
  return (
    <CartProvider>
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Navbar ke alag pages */}
        <Route path="/puja-samagri" element={<PujaSamagri />} />
        <Route path="/puja-kits" element={<PujaKits />} />
        <Route path="/yantra" element={<YantraCollection />} />
        <Route path="/rudraksha" element={<RudrakshaMalas />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/idols" element={<Idols />} />
        <Route path="/remedies" element={<AstrologyRemedies />} />
        <Route path="/festivals" element={<FestivalCollection />} />
        <Route path="/blogs" element={<SpiritualBlog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/remedie" element={<AstrologyRemedyFlow />} />
        
        {/* Cart & Checkout Route */}
        <Route path="/cart" element={<CartCheckoutFlow />} />
        
        {/* Other Routes */}
        <Route path="/puja-booking" element={<OnlinePujaBooking />} />

        {/* User Account & Order Tracking Routes */}
        <Route path="/account" element={<CustomerAccount />} />
        <Route path="/tracking" element={<OrderTracking />} />
        
        <Route path="/wishlist" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Wishlist Page Coming Soon...</div>} />

        {/* Fallback route */}
        <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;