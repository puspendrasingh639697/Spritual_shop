import React from "react";
import { ShieldCheck, Headphones, RefreshCw, Truck } from "lucide-react";

const TrustSupportSection = () => {
  const trustItems = [
    {
      id: 1,
      icon: <ShieldCheck className="w-8 h-8 text-[#d35400]" />,
      title: "100% Secure Checkout",
      description: "Protected by industry-standard encryption for safe transactions."
    },
    {
      id: 2,
      icon: <Truck className="w-8 h-8 text-[#d35400]" />,
      title: "Pan-India & Global Delivery",
      description: "Reliable and swift shipping across India and international destinations."
    },
    {
      id: 3,
      icon: <RefreshCw className="w-8 h-8 text-[#d35400]" />,
      title: "Easy Returns & Replacement",
      description: "Hassle-free return policy if you receive damaged or defective items."
    },
    {
      id: 4,
      icon: <Headphones className="w-8 h-8 text-[#d35400]" />,
      title: "Dedicated Spiritual Support",
      description: "Expert guidance available to help you choose and place your products."
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#fdfaf6] border-y border-[#edd5b9]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-start space-x-4 p-6 bg-white border border-[#edd5b9] rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[#fff3df] rounded-lg shrink-0 border border-[#edd5b9]">
                {item.icon}
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#4a2e18] text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSupportSection;