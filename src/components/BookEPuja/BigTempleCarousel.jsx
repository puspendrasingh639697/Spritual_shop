


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const BigTempleCarousel = ({ data, onBookClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const defaultSlides = [
        {
            badge: "Navratri Katra Special",
            title: "Maa Chandraghanta Puja",
            subtitle: "10,000 Chandra Mool Mantra",
            imageurl:
                "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1200&auto=format&fit=crop",
        },
        {
            badge: "Mahashivratri Special",
            title: "Maha Rudrabhishek & Havan",
            subtitle: "Perform Vedic rituals at Kashi Vishwanath",
            imageurl:
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            badge: "Wealth & Prosperity",
            title: "Ganesh Lakshmi Maha Anushthan",
            subtitle: "Remove obstacles and invite abundance",
            imageurl:
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const slides = data && data.length > 0 ? data : defaultSlides;

    // ✅ Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-6">

            {/* ================= TOP HEADING ================= */}
            <div className="text-center mb-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4a2e18] leading-tight">
                    Perform Puja at Famous Hindu Temples
                </h2>
                <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-2"></div>
            </div>

            {/* ================= CAROUSEL ================= */}
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="relative overflow-hidden rounded-2xl h-[160px] md:h-[200px] lg:h-[220px] bg-stone-900 group cursor-pointer">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex-shrink-0 relative"
                            >
                                <img
                                    src={slide?.imageurl}
                                    alt={slide?.title || `Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-10 text-white max-w-lg">
                                    {slide.badge && (
                                        <span className="inline-flex items-center gap-1.5 bg-amber-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full w-max mb-2 tracking-widest uppercase">
                                            <Sparkles className="w-2.5 h-2.5" />
                                            {slide.badge}
                                        </span>
                                    )}
                                    <h3 className="text-base md:text-xl lg:text-2xl font-serif font-bold mb-1 text-white leading-tight">
                                        {slide.title}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-stone-200 mb-3 font-medium">
                                        {slide.subtitle}
                                    </p>

                                    {/* Book Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onBookClick
                                                ? onBookClick(slide)
                                                : alert(
                                                      `Booking: ${slide.title}`
                                                  );
                                        }}
                                        className="bg-[#0f766e] hover:bg-[#0d5e56] text-white px-4 py-1.5 rounded-lg font-bold text-[10px] md:text-[11px] transition-all flex items-center gap-1.5 w-max cursor-pointer"
                                    >
                                        <Sparkles className="w-3 h-3 text-amber-300" />
                                        BOOK PUJA
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevSlide();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full transition-colors cursor-pointer"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full transition-colors cursor-pointer"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                                className={`rounded-full transition-all cursor-pointer ${
                                    currentIndex === index
                                        ? "w-6 h-1.5 bg-amber-400"
                                        : "bg-white/50 hover:bg-white/80 w-1.5 h-1.5"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigTempleCarousel;