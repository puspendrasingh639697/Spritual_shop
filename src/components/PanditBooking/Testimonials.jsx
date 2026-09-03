// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Ramesh K.",
//       role: "Engineer",
//       review:
//         "You won't regret it. I would like to personally thank you for your outstanding service. Absolutely wonderful!",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
//     },
//     {
//       name: "Megen W.",
//       role: "Designer",
//       review:
//         "Just what I was looking for. Your service managed to exceed my expectations at all times.",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
//     },
//     {
//       name: "Anita P.",
//       role: "Teacher",
//       review:
//         "Amazing! I can't imagine a better experience. The level of detail is remarkable.",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
//     },
//   ];

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-screen-lg mx-auto text-center px-4">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
//           This Is What Our Customers Say
//         </h2>
//         <p className="text-gray-600 mb-10 max-w-lg mx-auto text-sm md:text-base">
//           Hear genuine feedback from our satisfied users who experienced our ritual services.
//         </p>
//         <div className="mx-2">
//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="py-8 px-6 my-2 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-amber-300 transition-all duration-300 outline-none"
//               >
//                 <div className="relative w-24 h-24 mx-auto mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover rounded-full shadow-md border-2 border-amber-200"
//                   />
//                   <div className="absolute bottom-0 right-0 bg-amber-500 text-white rounded-full p-1 shadow">
//                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic mb-6 max-w-xl mx-auto text-sm md:text-base">
//                   &ldquo;{testimonial.review}&rdquo;
//                 </p>
//                 <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
//                 <p className="text-amber-600 font-medium text-xs uppercase tracking-wider mt-0.5">{testimonial.role}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React-slick object error ko handle karne ke liye safe fix
const Slider = SlickSlider.default || SlickSlider;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ramesh K.",
      role: "Engineer",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding service. Absolutely wonderful!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Megen W.",
      role: "Designer",
      review:
        "Just what I was looking for. Your service managed to exceed my expectations at all times.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Anita P.",
      role: "Teacher",
      review:
        "Amazing! I can't imagine a better experience. The level of detail is remarkable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          This Is What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto text-sm md:text-base">
          Hear genuine feedback from our satisfied users who experienced our ritual services.
        </p>
        <div className="mx-2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="py-8 px-6 my-2 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-amber-300 transition-all duration-300 outline-none"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full shadow-md border-2 border-amber-200"
                  />
                  <div className="absolute bottom-0 right-0 bg-amber-500 text-white rounded-full p-1 shadow">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 max-w-xl mx-auto text-sm md:text-base">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-amber-600 font-medium text-xs uppercase tracking-wider mt-0.5">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;