import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Gift } from "lucide-react";

const ChadhawaCarousel = ({ data, onOfferClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const defaultSlides = [
    {
        id: 1,   // ✅ YEH ADD KARO
        badge: "Most Popular",
        title: "Baglamukhi Mirchi Havan Chadhawa",
        subtitle: "Complete freedom from crises and fear",
        imageurl: "https://images.unsplash.com/photo-1609137144850-42940bc18c92?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,   // ✅ YEH ADD KARO
        badge: "Special Offering",
        title: "Shiv-Parvati Prem Prapti Chadhawa",
        subtitle: "Attain love, prosperity, and marital bliss",
        imageurl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,   // ✅ YEH ADD KARO
        badge: "Divine Grace",
        title: "Shri Khatu Shyam Chadhawa",
        subtitle: "Success in business and career growth",
        imageurl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1200&auto=format&fit=crop",
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
                <div className="inline-flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-[#df972b]" />
                    <span className="text-xs font-bold tracking-[3px] text-[#c27803] uppercase">
                        Divine Offerings
                    </span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4a2e18] leading-tight">
                    Offer Chadhawa at Famous Hindu Temples
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
                                <div className="absolute inset-0 bg-black/50"></div>

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

                                    {/* Offer Chadhawa Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onOfferClick
                                                ? onOfferClick(slide)
                                                : alert(
                                                      `Offering: ${slide.title}`
                                                  );
                                        }}
                                        className="bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white px-4 py-1.5 rounded-lg font-bold text-[10px] md:text-[11px] transition-all flex items-center gap-1.5 w-max cursor-pointer shadow-md"
                                    >
                                        <Gift className="w-3 h-3 text-white" />
                                        OFFER CHADHAWA
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

export default ChadhawaCarousel;