import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Images import
import reviewBgImage from "../assets/reviweimages.webp";
import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";
import userImg4 from "../assets/pop_1.avif";
import userImg5 from "../assets/pop_4.webp";

const allReviews = [
  { id: 1, name: "Neelima", rating: 5, comment: "इसे पहनने के बाद नकारात्मक ऊर्जा कम हो गई, अद्भुत अनुभव!", productName: "OM Shiva Trishool Karungali Mala", price: "₹991", avatar: userImg1 },
  { id: 2, name: "Govind", rating: 5, comment: "महा शिवरात्रि के पावन अवसर पर तीन और पांच मुखी रुद्राक्ष धारण करने का मौका मिला। हर हर महादेव", productName: "3 Mukhi Lab Certified Rudraksha", price: "₹751", avatar: userImg2 },
  { id: 3, name: "Girish Gudadari", rating: 5, comment: "I'm fully satisfied with the product and would definitely recommend it to others.", productName: "1 - 14 Mukhi Rudraksha Mala", price: "₹8,491", avatar: userImg3 },
  { id: 4, name: "Rahul Sharma", rating: 5, comment: "Very authentic and energized product. Packing was also very secure.", productName: "Original Karungali Bracelet", price: "₹499", avatar: userImg4 },
  { id: 5, name: "Pooja Verma", rating: 5, comment: "Divine fragrance and peace after placing this in my temple.", productName: "Pure Guggal Loban Dhoop", price: "₹350", avatar: userImg5 },
  { id: 6, name: "Amitabh Roy", rating: 5, comment: "Genuine gemstone with lab certificate. Highly impressed by the service.", productName: "Natural Blue Sapphire (Neelam)", price: "₹12,500", avatar: userImg1 },
  { id: 7, name: "Sneha Iyer", rating: 5, comment: "The quality of the mala beads is exceptional. Very peaceful to chant on.", productName: "Panchmukhi Rudraksha Mala", price: "₹650", avatar: userImg2 },
  { id: 8, name: "Vikramaditya", rating: 5, comment: "Brings immense positivity to the house. Authentic Vedic item.", productName: "Vastu Tortoise Plate", price: "₹1,299", avatar: userImg3 },
  { id: 9, name: "Sunita Menon", rating: 5, comment: "Fast delivery and great customer support. Will shop again.", productName: "Spheric Crystal Shivalingam", price: "₹1,899", avatar: userImg4 },
  { id: 10, name: "Manoj Kumar", rating: 5, comment: "Original wood texture and heavy quality. Truly blessed.", productName: "Original Karungali Wood Stick", price: "₹899", avatar: userImg5 },
  { id: 11, name: "Ananya Deshmukh", rating: 5, comment: "Wonderful packaging, received original energized beads with certificate.", productName: "7 Mukhi Rudraksha", price: "₹1,450", avatar: userImg1 },
  { id: 12, name: "Rajeshwar Rao", rating: 5, comment: "Excellent spiritual items available here. Very trustworthy store.", productName: "Kuber Akshat Jar", price: "₹299", avatar: userImg2 },
  { id: 13, name: "Divya Nambiar", rating: 5, comment: "Subah se sham tak positive vibe feel hoti hai ise pehnne ke baad.", productName: "Karungali Silver Cap Mala", price: "₹1,699", avatar: userImg3 },
  { id: 14, name: "Sanjay Mishra", rating: 5, comment: "Real product, verified through lab test. Satisfied 100%.", productName: "10 Mukhi Lab Certified Rudraksha", price: "₹3,200", avatar: userImg4 },
  { id: 15, name: "Kavita Joshi", rating: 5, comment: "Beautiful design and great spiritual energy. Loved it!", productName: "Sphrystal Shri Yantra", price: "₹2,100", avatar: userImg5 }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite Auto Slide Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allReviews.length);
  };

  const getVisibleReviews = () => {
    let visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % allReviews.length;
      visible.push(allReviews[index]);
    }
    return visible;
  };

  return (
    <section className="relative w-full py-16 px-4 bg-[#fff3df]  border-b border-[#edd5b9] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#d35400] leading-tight mb-2">
                Customer  <br /> Reviews
              </h2>
              
              {/* Lottie Animation Display */}
              <div className="w-28 h-28 my-1">
                <DotLottieReact
                  src="https://lottie.host/embed/your-animation-link-here.json"
                  loop
                  autoplay
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-[#d35400] flex items-center justify-center text-[#d35400] hover:bg-[#d35400] hover:text-white transition-all">‹</button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-[#d35400] flex items-center justify-center text-[#d35400] hover:bg-[#d35400] hover:text-white transition-all">›</button>
            </div>
          </div>

          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
            <img src={reviewBgImage} alt="Bharatiyon ka Bharosa" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            <div className="relative z-10 text-center sm:text-left px-6 sm:px-12 w-full">
              <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-semibold text-[#4a2e18] mb-3">Puspendra Singh</div>
              <h3 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">10 LAKH+</h3>
              <p className="text-xl sm:text-3xl font-serif text-[#f3d0a5] font-semibold">Bharatiyon ka Bharosa</p>
            </div>
          </div>

        </div>

        {/* Cards Grid with Hover Zoom & Active Transition Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 transition-all duration-500">
          {getVisibleReviews().map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              className="bg-white rounded-2xl p-6 shadow-xl border border-[#e6d0b3] flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-[#d35400] cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#edd5b9] bg-[#fff3df] flex-shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#4a2e18] text-base">{review.name}</h4>
                    <div className="flex text-amber-500 text-sm">
                      {[...Array(review.rating)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#fffdfa] p-3 rounded-lg border-l-4 border-[#d35400] mb-6">
                  <p className="text-gray-700 text-sm italic">"{review.comment}"</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f3e5d8] flex items-center justify-between text-xs sm:text-sm">
                <span className="font-serif font-semibold text-[#4a2e18] truncate max-w-[70%]">{review.productName}</span>
                <span className="font-bold text-[#8b3a2b] text-base">{review.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;