import "./App.css";
// import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
// import CategoryStrip from "./components/CategoryStrip";
import HeroSection from "./components/HeroSection";
import ProductCarousel from "./components/ProductCarousel";
import LabTestedSection from "./components/LabTestedSection";
import CollectionCarousel from "./components/CollectionCarousel";
import LatestTrending from "./components/LatestTrending";
import PurposeSection from "./components/PurposeSection";
import ExploreEnergyStones from "./components/ExploreEnergyStones";
import LifestyleGallery from "./components/LifestyleGallery";
import SaveCombos from "./components/SaveCombos";
import SiddhDeliverySection from "./components/SiddhDeliverySection";
import RudrakshaBeads from "./components/RudrakshaBeads";

import { CartProvider } from "./context/CartContext";
import ShopByCategory from "./components/ShopByCategory";
import AstrologyRemedies from "./components/AstrologyRemedies";
import Bestsellers from "./components/Bestsellers";
import PujaKits from "./components/PujaKits";
import YantraCollection from "./components/YantraCollection";

import ShopByCollection from "./components/ShopByCollection";
import PersonalizedRecommendations from "./components/PersonalizedRecommendations";
import MediaInNews from "./components/MediaInNews";
import CustomerReviews from "./components/CustomerReviews";
import SpiritualBlog from "./components/SpiritualBlog";
import DivineWisdomHub from "./components/DivineWisdomHub";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      {/* <AnnouncementBar /> */}
      <Navbar />
      {/* <CategoryStrip /> */}
      <HeroSection />
      <ShopByCategory/>
      <AstrologyRemedies/>
      <ShopByCollection/>
      <PersonalizedRecommendations/>
      <MediaInNews/>
      <CustomerReviews/>
      <SpiritualBlog/>
      <DivineWisdomHub/>
      <FAQSection/>
      <Footer/>      
    </CartProvider>
  );
}

export default App;