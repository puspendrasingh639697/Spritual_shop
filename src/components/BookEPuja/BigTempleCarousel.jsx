import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const BigTempleCarousel = ({ data, onBookClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reference design ke hisaab se shandar temple slides aur content
  const defaultSlides = [
    {
      badge: "Navratri Katra Special",
      title: "Maa Chandraghanta Puja",
      subtitle: "10,000 Chandra Mool Mantra",
      imageurl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1200&auto=format&fit=crop"
    },
    {
      badge: "Mahashivratri Special",
      title: "Maha Rudrabhishek & Havan",
      subtitle: "Perform Vedic rituals at Kashi Vishwanath",
      imageurl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      badge: "Wealth & Prosperity",
      title: "Ganesh Lakshmi Maha Anushthan",
      subtitle: "Remove obstacles and invite abundance",
      imageurl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const slides = (data && data.length > 0) ? data : defaultSlides;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full my-6">
      {/* Main Heading Jaise Reference Site Mein Hai */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2e18]">
          Perform Puja as per Vedic rituals at Famous Hindu Temples in India
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl shadow-xl h-[380px] md:h-[420px] bg-stone-900">
        
        {/* Slides Wrapper */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Background Image with Dark Gradient Overlay */}
              <img
                src={slide?.imageurl}
                alt={slide?.title || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content Box Inside Banner */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white max-w-xl">
                {slide.badge && (
                  <span className="inline-block bg-amber-900/80 border border-amber-500/50 text-amber-200 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 tracking-wider uppercase">
                    {slide.badge}
                  </span>
                )}
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-amber-100">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base text-stone-200 mb-6 font-medium">
                  {slide.subtitle}
                </p>
                <div>
                  <button 
                    onClick={onBookClick}
                    className="bg-[#0f766e] hover:bg-[#0d5e56] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition shadow-lg flex items-center gap-2 w-max"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" /> BOOK PUJA
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left & Right Arrow Buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === index ? "bg-amber-400 w-8" : "bg-white/50 w-2.5"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default BigTempleCarousel;