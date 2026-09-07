import React from "react";
import { Link, useLocation } from "react-router-dom";

import idolsBenner from "../../assets/idolsbenner.webp";
import blogImg1 from "../../assets/Idols1.png";
import blogImg2 from "../../assets/Idols5.png";

const blogList = [
  {
    id: 1,
    date: "09 APR 2026",
    title: "Kundali Milan (Horoscope)",
    desc: "Discover the core principles of matching charts and understanding planetary alignments for a harmonious life path.",
    image: blogImg1,
    tag: "KUNDALI MATCHING"
  },
  {
    id: 2,
    date: "30 MAR 2026",
    title: "The Hidden Vibrations: How Alphabets and Numbers Shape Your Destiny",
    desc: "Uncover how numbers and letters govern hidden vibrations and influence your day-to-day destiny and professional success.",
    image: blogImg2,
    tag: "ENGLISH ALPHABETS"
  },
  {
    id: 3,
    date: "15 MAY 2026",
    title: "Sacred Rituals & Spiritual Healing Tools for Everyday Life",
    desc: "Learn how authentic items and calibrated Vedic practices cleanse negative energies and elevate spatial positivity.",
    image: blogImg1,
    tag: "VEDIC REMEDIES"
  }
];

function InsightsSection() {
  const location = useLocation();

  return (
    <section className="w-full bg-[#fdfbf7] py-4 overflow-hidden relative font-sans">
      
     

      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#df972b] mb-2">
          LATEST BLOGS
        </p>
        
        
        
        {/* Navigation Link */}
        <div className="mt-6">
          <Link 
            to="/blogs" 
            className={`inline-block text-sm sm:text-base font-bold transition-colors hover:text-[#c27803] ${
              location.pathname === "/blogs" ? "text-[#c27803] font-semibold" : "text-[#df972b]"
            }`}
          >
            Blogs
          </Link>
        </div>
      </div>

      {/* Clean 3-Column Card Grid with Balanced Image vs Content Height (~60% Content & Spacing Fix) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {blogList.map((blog) => (
            <Link 
              key={blog.id}
              to="/blogs" 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0e6d2] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] group block"
            >
              {/* Image Container with Controlled Aspect Ratio & Padding */}
              <div className="w-full h-[210px] bg-[#fcf8f2] relative p-4 flex items-center justify-center overflow-hidden border-b border-[#f5efe6]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1a0d00] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-gray-100 uppercase tracking-wider">
                  {blog.tag}
                </span>
              </div>

              {/* Content Section with Balanced Spacing */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-gray-400 mb-2">
                    {blog.date}
                  </p>
                  
                  <h3 className="font-serif font-bold text-[#1a0d00] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#df972b] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#df972b] group-hover:text-[#c27803] transition-colors">
                    READ MORE
                  </span>
                  <span className="text-gray-400 font-bold text-xs">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

export default InsightsSection;