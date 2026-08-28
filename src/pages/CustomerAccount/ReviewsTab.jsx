// import React from "react";
// import { BiStar } from "react-icons/bi";

// const ReviewsTab = ({ reviews }) => {
//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-serif font-bold text-[#4a2e18]">My Reviews & Ratings</h3>
//       <div className="space-y-4">
//         {reviews.map((item) => (
//           <div key={item.id} className="border border-stone-200 p-4 rounded-sm bg-stone-50 space-y-2">
//             <div className="flex justify-between items-center">
//               <h4 className="font-bold text-sm text-[#4a2e18]">{item.productName}</h4>
//               <div className="flex text-amber-500">
//                 {[...Array(item.rating)].map((_, i) => (
//                   <BiStar key={i} className="fill-current text-sm" />
//                 ))}
//               </div>
//             </div>
//             <p className="text-xs text-stone-600">"{item.comment}"</p>
//             <span className="text-[10px] text-stone-400 block">Reviewed on {item.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsTab;



import React, { useState, useEffect } from "react";
import { BiStar, BiPlusCircle } from "react-icons/bi";
import useReviewStore from "../../store/useReviewStore";
// import useReviewStore from "../store/useReviewStore";

export default function ReviewsTab() {
  const { reviews, loading, fetchReviews, addReview } = useReviewStore();

  const [showAddBox, setShowAddBox] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [targetId, setTargetId] = useState(""); // Product ID jiske liye review dena hai
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || !targetId) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const payload = {
      targetId: targetId.trim(),
      targetModel: "Product",
      rating: Number(rating),
      comment: comment.trim()
    };

    const result = await addReview(payload);

    if (result.success) {
      setComment("");
      setTargetId("");
      setRating(5);
      setShowAddBox(false);
      setSuccessMsg("Review added successfully!");
      setErrorMsg("");
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
      setErrorMsg(result.error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h3 className="text-base font-serif font-bold text-[#4a2e18]">My Reviews & Ratings</h3>
          <p className="text-xs text-stone-500">Manage your product feedback and ratings.</p>
        </div>
        <button 
          onClick={() => { setShowAddBox(!showAddBox); setSuccessMsg(""); setErrorMsg(""); }}
          className="bg-[#8c0a15] hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
        >
          <BiPlusCircle /> Add Review
        </button>
      </div>

      {successMsg && <div className="bg-emerald-100 text-emerald-800 p-3 rounded text-xs">{successMsg}</div>}
      {errorMsg && <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>}

      {/* Add Review Form Box */}
      {showAddBox && (
        <form onSubmit={handleSubmit} className="bg-[#fff9f0] border border-amber-200 p-4 rounded-sm space-y-3 text-xs">
          <h4 className="font-bold text-[#8b3a2b] uppercase">Write a New Review</h4>
          
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Product ID (Target ID)</label>
            <input 
              type="text" 
              placeholder="e.g. 6a854fca4ce5e88b1c65a99d"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Rating (1 to 5)</label>
              <select 
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              >
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Good</option>
                <option value="3">3 Stars - Average</option>
                <option value="2">2 Stars - Poor</option>
                <option value="1">1 Star - Terrible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Comment</label>
            <textarea 
              rows="2"
              placeholder="Ekdum mast product hai, bohot aaram mila!"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              required
            ></textarea>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="bg-[#4a2e18] text-white px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Submit Review</button>
            <button type="button" onClick={() => setShowAddBox(false)} className="bg-stone-200 text-stone-700 px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Cancel</button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-xs text-stone-500 py-6 text-center">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500">
            No reviews found. Share your feedback on products!
          </div>
        ) : (
          reviews.map((item) => {
            const reviewId = item._id || item.id;
            const itemRating = Number(item.rating) || 5;
            const reviewDate = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recent";

            return (
              <div key={reviewId} className="border border-stone-200 p-4 rounded-sm bg-stone-50 space-y-2 font-serif">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-[#4a2e18]">Product: {item.targetId}</h4>
                  <div className="flex text-amber-500">
                    {[...Array(itemRating)].map((_, i) => (
                      <BiStar key={i} className="fill-current text-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-600">"{item.comment}"</p>
                <span className="text-[10px] text-stone-400 block">Reviewed on {reviewDate}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}