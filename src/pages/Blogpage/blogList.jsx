// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import blogImg1 from "../../assets/Idols1.png";
// import blogImg2 from "../../assets/Idols5.png";

// const blogList = [
//   {
//     id: 1,
//     date: "09 APR 2026",
//     title: "Kundali Milan (Horoscope)",
//     desc: "Discover the core principles of matching charts and understanding planetary alignments for a harmonious life path.",
//     image: blogImg1,
//     tag: "KUNDALI MATCHING"
//   },
//   {
//     id: 2,
//     date: "30 MAR 2026",
//     title: "The Hidden Vibrations: How Alphabets and Numbers Shape Your Destiny",
//     desc: "Uncover how numbers and letters govern hidden vibrations and influence your day-to-day destiny and professional success.",
//     image: blogImg2,
//     tag: "ENGLISH ALPHABETS"
//   },
//   {
//     id: 3,
//     date: "15 MAY 2026",
//     title: "Sacred Rituals & Spiritual Healing Tools for Everyday Life",
//     desc: "Learn how authentic items and calibrated Vedic practices cleanse negative energies and elevate spatial positivity.",
//     image: blogImg1,
//     tag: "VEDIC REMEDIES"
//   }
// ];

// function InsightsSection() {
//   const location = useLocation();

//   return (
//     <section className="w-full bg-[#fff3df] py-4 overflow-hidden relative font-sans">
      
     

//       {/* Section Header */}
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center mb-14">
//         <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#df972b] mb-2">
//           LATEST BLOGS
//         </p>
        
        
        
//         {/* Navigation Link */}
//         <div className="mt-6">
//           <Link 
//             to="/blogs" 
//             className={`inline-block text-sm sm:text-base font-bold transition-colors hover:text-[#c27803] ${
//               location.pathname === "/blogs" ? "text-[#c27803] font-semibold" : "text-[#df972b]"
//             }`}
//           >
//             Blogs
//           </Link>
//         </div>
//       </div>

//       {/* Clean 3-Column Card Grid with Balanced Image vs Content Height (~60% Content & Spacing Fix) */}
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
//           {blogList.map((blog) => (
//             <Link 
//               key={blog.id}
//               to="/blogs" 
//               className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0e6d2] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] group block"
//             >
//               {/* Image Container with Controlled Aspect Ratio & Padding */}
//               <div className="w-full h-[210px] bg-[#fcf8f2] relative p-4 flex items-center justify-center overflow-hidden border-b border-[#f5efe6]">
//                 <img 
//                   src={blog.image} 
//                   alt={blog.title} 
//                   className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1a0d00] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-gray-100 uppercase tracking-wider">
//                   {blog.tag}
//                 </span>
//               </div>

//               {/* Content Section with Balanced Spacing */}
//               <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
//                 <div>
//                   <p className="text-[11px] font-bold tracking-wider text-gray-400 mb-2">
//                     {blog.date}
//                   </p>
                  
//                   <h3 className="font-serif font-bold text-[#1a0d00] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#df972b] transition-colors line-clamp-2">
//                     {blog.title}
//                   </h3>
                  
//                   <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal line-clamp-3">
//                     {blog.desc}
//                   </p>
//                 </div>

//                 {/* Read More Footer */}
//                 <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
//                   <span className="text-xs font-extrabold uppercase tracking-widest text-[#df972b] group-hover:text-[#c27803] transition-colors">
//                     READ MORE
//                   </span>
//                   <span className="text-gray-400 font-bold text-xs">&rarr;</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

// export default InsightsSection;


import React from "react";
import { Link, useLocation } from "react-router-dom";
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
    <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-2 overflow-hidden relative font-sans">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#df972b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fff7ed] rounded-full blur-3xl"></div>
      
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center mb-16 relative z-10">
        <div className="inline-block">
          
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#4a2e18] mt-2">
          Insights & <span className="text-[#df972b] relative">
            Articles
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#df972b]/30 rounded-full"></span>
          </span>
        </h2>
        
       
        
        {/* Navigation Link */}
        <div className="mt-6">
          <Link 
            to="/blogs" 
            className={`inline-flex items-center gap-2 text-sm sm:text-base font-bold transition-all duration-300 hover:gap-3 ${
              location.pathname === "/blogs" ? "text-[#c27803]" : "text-[#df972b]"
            }`}
          >
            View All Blogs 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Premium 3-Column Card Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map((blog, index) => (
            <Link 
              key={blog.id}
              to="/blogs" 
              className="group relative bg-white rounded-xl overflow-hidden shadow-xl shadow-[#d4c5b2]/20 border border-[#f0e6d2] flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#d4c5b2]/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium Image Container */}
              <div className="relative w-full h-[240px]  overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Premium Tag */}
                
                
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/50">
                  <p className="text-[10px] font-bold tracking-wider text-gray-500">
                    {blog.date}
                  </p>
                </div>
              </div>

              {/* Premium Content Section */}
              <div className="p-7 flex flex-col flex-grow bg-[#fff3df] backdrop-blur-sm">
                <div className="flex-grow">
                  <h3 className=" text-[#1a0d00] text-xl leading-snug mb-3 group-hover:text-[#df972b] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                {/* Premium Read More Footer */}
                <div className="pt-4 border-t-2 border-[#f5efe6] flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#df972b] group-hover:text-[#c27803] transition-colors duration-300">
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="text-[#df972b]/20 font-bold text-lg">✦</span>
                </div>
              </div>

              {/* Premium Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#df972b]/5 via-transparent to-[#df972b]/5 rounded-3xl"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#df972b]/20 to-transparent"></div>
    </section>
  );
}

export default InsightsSection;