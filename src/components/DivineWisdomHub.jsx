import React from "react";

// Importing your specific asset images for the badges and bottom banner
import featureImg1 from "../assets/pop_1.avif";
import featureImg2 from "../assets/pop_3.avif";
import featureImg3 from "../assets/pop_6.avif";
import featureImg4 from "../assets/popo_5.avif";
import bannerImage from "../assets/pop_4.webp";

const CleanFeatureSection = () => {
  const featuresData = [
    {
      id: 0,
      title: "Certified by Authorized Labs",
      description: "Every product is tested for quality and safety, so what touches your body honours it.",
      image: featureImg1,
    },
    {
      id: 1,
      title: "Sacredly Sourced",
      description: "Every product begins at its rightful origin, sourced through traditional channels that honour ritual, lineage, and purpose.",
      image: featureImg2,
    },
    {
      id: 2,
      title: "Traceable for Life",
      description: "Your product’s authenticity stays accessible to you always. Simply check, verify, and download your certificate whenever you need it.",
      image: featureImg3,
    },
    {
      id: 3,
      title: "Blessed through Sacred Rituals",
      description: "Elevate your daily journey with authentic tools for spiritual awakening.",
      image: featureImg4,
    }
  ];

  return (
    <section className="w-full py-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] ">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Items Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {featuresData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4 border-2 border-[#edd589] bg-white">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className=" text-[#4a2e18] text-base sm:text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-x">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

     
    </section>
  );
};

export default CleanFeatureSection;