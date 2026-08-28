import React from "react";
// Image import (Apne path ke hisaab se import check kar lein)
import whyChooseImage from "../assets/Desktop_Why_choose_divine_hindu.webp";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full my-8 bg-[#fff3df]">
      {/* Container with theme background to fill any gaps */}
      <div className="w-full overflow-hidden bg-[#fff3df] flex items-center justify-center">
        <img 
          src={whyChooseImage} 
          alt="Why Choose Divine Hindu" 
          className="w-full h-auto object-cover block bg-[#fff3df]"
        />
      </div>
    </section>
  );
}