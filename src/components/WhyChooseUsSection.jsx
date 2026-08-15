import React from "react";
// Image import (Apne path ke hisaab se import check kar lein)
import whyChooseImage from "../assets/Desktop_Why_choose_divine_hindu.webp";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full my-8">
      {/* 100% Full Width Container bina kisi left-right padding ke */}
      <div className="w-full overflow-hidden">
        <img 
          src={whyChooseImage} 
          alt="Why Choose Divine Hindu" 
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
}