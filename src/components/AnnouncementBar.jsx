// import { useState, useEffect } from "react";

// function AnnouncementBar() {
//   const messages = [
//     "✨ 100% Cashback available upto ₹500",
//     "🕉️ Free delivery on orders over ₹299",
//     "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === messages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [messages.length]);

//   return (
//     <div className="w-full bg-[#5a1215] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
//       <span key={currentIndex} className="inline-block transition-opacity duration-500">
//         {messages[currentIndex]}
//       </span>
//     </div>
//   );
// }

// export default AnnouncementBar;