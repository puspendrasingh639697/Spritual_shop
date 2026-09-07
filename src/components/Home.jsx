import React from "react";
import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory";
import AstrologyRemedies from "../components/AstrologyRemedies";
import ShopByCollection from "../components/ShopByCollection";
import PersonalizedRecommendations from "../components/PersonalizedRecommendations";
import MediaInNews from "../components/MediaInNews";
import CustomerReviews from "../components/CustomerReviews";
import SpiritualBlog from "../components/SpiritualBlog";
import LatestTrending from "../components/LatestTrending";
import DivineWisdomHub from "../components/DivineWisdomHub";
import FAQSection from "../components/FAQSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import BlogsSection from "../pages/Blogpage/BlogsSection";
import ExplorePilgrimage from "./Tample/ExplorePilgrimage";
import SacredServicesSection from "../services/sacredServices";
import RecommendedPujaSection from "../components/BookEPuja/RecommendedPujaSection"
import ChadhawaSection from "./Chadhawa/ChadhawaSection";
import InsightsSection from "../pages/Blogpage/blogList";
import FeaturesGridSection from "./FeaturesGridSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExplorePilgrimage/>
      <SacredServicesSection/>
      {/* <ShopByCategory /> */}
      {/* <AstrologyRemedies /> */}
      
      <RecommendedPujaSection/>
      <ChadhawaSection/>
      <ShopByCollection />
      {/* <PersonalizedRecommendations /> */}
      {/* <MediaInNews /> */}
      <CustomerReviews />
      <InsightsSection/>
      <FeaturesGridSection/>
      {/* <SpiritualBlog /> */}
      {/* <BlogsSection /> */}
      {/* <LatestTrending /> */}
      <DivineWisdomHub />
      {/* <WhyChooseUsSection/> */}
      <FAQSection />
    </>
  );
};

export default Home;