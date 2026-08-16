import React from "react";
import { BiStar } from "react-icons/bi";

const ReviewsTab = ({ reviews }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-bold text-[#4a2e18]">My Reviews & Ratings</h3>
      <div className="space-y-4">
        {reviews.map((item) => (
          <div key={item.id} className="border border-stone-200 p-4 rounded-sm bg-stone-50 space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-[#4a2e18]">{item.productName}</h4>
              <div className="flex text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <BiStar key={i} className="fill-current text-sm" />
                ))}
              </div>
            </div>
            <p className="text-xs text-stone-600">"{item.comment}"</p>
            <span className="text-[10px] text-stone-400 block">Reviewed on {item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;