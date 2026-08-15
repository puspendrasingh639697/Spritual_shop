// // // import "./App.css";
// // // // import AnnouncementBar from "./components/AnnouncementBar";
// // // import Navbar from "./components/Navbar";
// // // // import CategoryStrip from "./components/CategoryStrip";
// // // import HeroSection from "./components/HeroSection";
// // // import ProductCarousel from "./components/ProductCarousel";
// // // import LabTestedSection from "./components/LabTestedSection";
// // // import CollectionCarousel from "./components/CollectionCarousel";
// // // import LatestTrending from "./components/LatestTrending";
// // // import PurposeSection from "./components/PurposeSection";
// // // import ExploreEnergyStones from "./components/ExploreEnergyStones";
// // // import LifestyleGallery from "./components/LifestyleGallery";
// // // import SaveCombos from "./components/SaveCombos";
// // // import SiddhDeliverySection from "./components/SiddhDeliverySection";
// // // import RudrakshaBeads from "./components/RudrakshaBeads";

// // // import { CartProvider } from "./context/CartContext";
// // // import ShopByCategory from "./components/ShopByCategory";
// // // import AstrologyRemedies from "./components/AstrologyRemedies";
// // // import Bestsellers from "./components/Bestsellers";
// // // import PujaKits from "./components/PujaKits";
// // // import YantraCollection from "./components/YantraCollection";

// // // import ShopByCollection from "./components/ShopByCollection";
// // // import PersonalizedRecommendations from "./components/PersonalizedRecommendations";
// // // import MediaInNews from "./components/MediaInNews";
// // // import CustomerReviews from "./components/CustomerReviews";
// // // import SpiritualBlog from "./components/SpiritualBlog";
// // // import DivineWisdomHub from "./components/DivineWisdomHub";
// // // import FAQSection from "./components/FAQSection";
// // // import Footer from "./components/Footer";

// // // function App() {
// // //   return (
// // //     <CartProvider>
// // //       {/* <AnnouncementBar /> */}
// // //       <Navbar />
// // //       {/* <CategoryStrip /> */}
// // //       <HeroSection />
// // //       <ShopByCategory/>
// // //       <AstrologyRemedies/>
// // //       <ShopByCollection/>
// // //       <PersonalizedRecommendations/>
// // //       <MediaInNews/>
// // //       <CustomerReviews/>
// // //       <SpiritualBlog/>
// // //       <LatestTrending/>
// // //       <DivineWisdomHub/>
// // //       <FAQSection/>
// // //       <Footer/>      
// // //     </CartProvider>
// // //   );
// // // }

// // // export default App;

// // import "./App.css";
// // import { Routes, Route } from "react-router-dom"; // Yahan sirf Routes aur Route import karein

// // // Context
// // import { CartProvider } from "./context/CartContext";

// // // Components & Sections
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import HeroSection from "./components/HeroSection";
// // import ShopByCategory from "./components/ShopByCategory";
// // import AstrologyRemedies from "./components/AstrologyRemedies";
// // import ShopByCollection from "./components/ShopByCollection";
// // import PersonalizedRecommendations from "./components/PersonalizedRecommendations";
// // import MediaInNews from "./components/MediaInNews";
// // import CustomerReviews from "./components/CustomerReviews";
// // import SpiritualBlog from "./components/SpiritualBlog";
// // import LatestTrending from "./components/LatestTrending";
// // import DivineWisdomHub from "./components/DivineWisdomHub";
// // import FAQSection from "./components/FAQSection";

// // function App() {
// //   return (
// //     <CartProvider>
// //       <Navbar />
      
// //       <Routes>
// //         {/* Home Page Route - Yahan saare components ek sath home page par dikhenge */}
// //         <Route 
// //           path="/" 
// //           element={
// //             <>
// //               <HeroSection />
// //               <ShopByCategory />
// //               <AstrologyRemedies />
// //               <ShopByCollection />
// //               <PersonalizedRecommendations />
// //               <MediaInNews />
// //               <CustomerReviews />
// //               <SpiritualBlog />
// //               <LatestTrending />
// //               <DivineWisdomHub />
// //               <FAQSection />
// //             </>
// //           } 
// //         />

// //         {/* Future pages ke liye routes yahan add kar sakte hain */}
// //         {/* <Route path="/puja-samagri" element={<PujaSamagriPage />} /> */}
// //         {/* <Route path="/blogs" element={<BlogsPage />} /> */}

// //         {/* Fallback route agar koi galat URL daale */}
// //         <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
// //       </Routes>

// //       <Footer />
// //     </CartProvider>
// //   );
// // }

// import "./App.css";
// import { Routes, Route } from "react-router-dom";

// // Context
// import { CartProvider } from "./context/CartContext";

// // Components & Sections
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import ShopByCategory from "./components/ShopByCategory";
// import AstrologyRemedies from "./components/AstrologyRemedies";
// import ShopByCollection from "./components/ShopByCollection";
// import PersonalizedRecommendations from "./components/PersonalizedRecommendations";
// import MediaInNews from "./components/MediaInNews";
// import CustomerReviews from "./components/CustomerReviews";
// import SpiritualBlog from "./components/SpiritualBlog";
// import LatestTrending from "./components/LatestTrending";
// import DivineWisdomHub from "./components/DivineWisdomHub";
// import FAQSection from "./components/FAQSection";

// function App() {
//   return (
//     <CartProvider>
//       <Navbar />
      
//       <Routes>
//         {/* Home Page Route - Saare sections yahan render honge */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               <HeroSection />
//               <ShopByCategory />
//               <AstrologyRemedies />
//               <ShopByCollection />
//               <PersonalizedRecommendations />
//               <MediaInNews />
//               <CustomerReviews />
//               <SpiritualBlog />
//               <LatestTrending />
//               <DivineWisdomHub />
//               <FAQSection />
//             </>
//           } 
//         />

//         {/* Navbar Navigation Links Routes */}
//         <Route path="/puja-samagri" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Puja Samagri Page Coming Soon...</div>} />
//         <Route path="/puja-kits" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Puja Kits Page Coming Soon...</div>} />
//         <Route path="/yantra" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Yantra Page Coming Soon...</div>} />
//         <Route path="/rudraksha" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Rudraksha Page Coming Soon...</div>} />
//         <Route path="/gemstones" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Gemstones Page Coming Soon...</div>} />
//         <Route path="/idols" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Idols Page Coming Soon...</div>} />
//         <Route path="/remedies" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Remedies Page Coming Soon...</div>} />
//         <Route path="/festivals" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Festivals Page Coming Soon...</div>} />
//         <Route path="/blogs" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Blogs Page Coming Soon...</div>} />

//         {/* Navbar Top/Right Links Routes (Jo Navbar mein add kiye thay) */}
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

// Context
import { CartProvider } from "./context/CartContext";

// Components
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

// Home Page import karein
 // ya jahan bhi aapne file banayi hai

function App() {
  return (
    <CartProvider>
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Navbar ke alag pages */}
        <Route path="/puja-samagri" element={<PujaSamagri/>} />
        <Route path="/puja-kits" element={<PujaKits />} />
        <Route path="/yantra" element={ <YantraCollection/>} />
        <Route path="/rudraksha" element={<RudrakshaMalas/>} />
        <Route path="/gemstones" element={<Gemstones/>} />
        <Route path="/idols" element={<Idols/>} />
        <Route path="/remedies" element={<AstrologyRemedies/>} />
        <Route path="/festivals" element={<FestivalCollection/>} />
        <Route path="/blogs" element={<SpiritualBlog/>} />

        {/* User Account / Wishlist / Cart Routes */}
        <Route path="/account" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Account Page Coming Soon...</div>} />
        <Route path="/wishlist" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Wishlist Page Coming Soon...</div>} />
        <Route path="/cart" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Cart Page Coming Soon...</div>} />

        {/* Fallback route */}
        <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;