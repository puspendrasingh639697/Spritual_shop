import React from "react";
import { ListTree, ArrowRight } from "lucide-react";

const BlogTOC = () => {
  const tableOfContents = [
    { id: "rules", title: "Key Rules for Wearing Rudraksha" },
    { id: "benefits", title: "Miraculous Benefits & Healing" },
    { id: "precautions", title: "Important Precautions" }
  ];

  return (
    <div className="bg-[#fff3df] border border-[#edd5b9] rounded-xl p-5 my-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <ListTree className="w-5 h-5 text-[#8b3a2b]" />
        <h4 className="font-serif font-bold text-[#4a2e18] text-sm uppercase tracking-wider">
          Table of Contents
        </h4>
      </div>
      <ul className="space-y-2">
        {tableOfContents.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.id}`}
              className="text-xs text-stone-700 hover:text-[#8b3a2b] font-medium flex items-center gap-2 transition-colors"
            >
              <ArrowRight className="w-3 h-3 text-[#8b3a2b]" />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTOC;