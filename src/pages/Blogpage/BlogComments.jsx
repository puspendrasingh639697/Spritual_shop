import React, { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";

const BlogComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      comment: "This article gave me absolute clarity on wearing rules. Very insightful!",
      date: "August 13, 2026"
    },
    {
      id: 2,
      name: "Priya Verma",
      comment: "Namaste! Thank you for sharing such authentic spiritual guidance.",
      date: "August 14, 2026"
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const commentObj = {
      id: Date.now(),
      name: newName,
      comment: newComment,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    };

    setComments([commentObj, ...comments]);
    setNewName("");
    setNewComment("");
  };

  return (
    <div className="mt-16 pt-8 border-t border-stone-200">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-[#8b3a2b]" />
        <h3 className="text-2xl font-serif font-bold text-[#4a2e18]">
          Reader Thoughts ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-[#edd5b9] shadow-sm mb-8 space-y-4">
        <h4 className="text-sm font-semibold text-[#4a2e18]">Leave a Comment</h4>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-4 py-2 bg-stone-50 border border-[#edd5b9] rounded-lg text-xs text-[#4a2e18] focus:outline-none focus:ring-2 focus:ring-[#8b3a2b]"
          />
        </div>
        <div>
          <textarea
            rows="3"
            placeholder="Share your thoughts or ask a question..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 bg-stone-50 border border-[#edd5b9] rounded-lg text-xs text-[#4a2e18] focus:outline-none focus:ring-2 focus:ring-[#8b3a2b]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#6b2314] hover:bg-[#8b3a2b] text-white px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Send className="w-3.5 h-3.5" /> Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl border border-[#edd5b9] shadow-sm flex items-start gap-3">
            <div className="p-2 bg-[#fff3df] rounded-full text-[#8b3a2b] border border-[#edd5b9]">
              <User className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-xs font-bold text-[#4a2e18]">{item.name}</h5>
                <span className="text-[10px] text-stone-400">{item.date}</span>
              </div>
              <p className="text-xs text-stone-600 font-serif leading-relaxed">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComments;