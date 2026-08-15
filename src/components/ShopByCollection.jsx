import React, { useState } from "react";
import Bestsellers from "./Bestsellers";
import PujaKits from "./PujaKits";
import YantraCollection from "./YantraCollection";
import RudrakshaMalas from "./RudrakshaMalas";
import FestivalCollection from "./FestivalCollection";
// import RudrakshaMalas from "./RudrakshaMalas"; // Agar ye component hai toh import karein
// import FestivalCollection from "./FestivalCollection"; // Agar ye component hai toh import karein

const collectionCategories = [
  "Best Sellers",
  "Puja Kits",
  "Yantra Collection",
  "Rudraksha & Malas",
  "Festival Collection"
];

const ShopByCollection = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  // Function to render the correct component based on the active tab click
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Best Sellers":
        return <Bestsellers />;
      case "Puja Kits":
        return <PujaKits />;
      case "Yantra Collection":
        return <YantraCollection />;
      case "Rudraksha & Malas":
        return <RudrakshaMalas />;
      case "Festival Collection":
        return <FestivalCollection />;
      default:
        return <Bestsellers />;
    }
  };

  return (
    <div className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
            {activeTab === "Best Sellers" ? (
              <>Bestsellers of <span className="italic font-normal">the Month</span></>
            ) : (
              <>Shop by <span className="italic font-normal">Collection</span></>
            )}
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category Filter Tabs (Clickable Pills) */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {collectionCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                activeTab === category
                  ? "bg-[#6b2314] text-white shadow-md scale-105"
                  : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamically Rendered Component Based on Tab Click */}
        <div className="transition-all duration-500">
          {renderActiveComponent()}
        </div>

      </div>
    </div>
  );
};

export default ShopByCollection;