import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const staticBlogs = [
  {
    _id: "1",
    category: { name: "Rudraksha" },
    title: "Rules and Miraculous Benefits of Wearing Rudraksha",
    excerpt: "According to Shiva Purana, wearing Rudraksha brings physical and mental peace...",
    readTime: "4 min read",
    createdAt: "2026-08-12",
    slug: "benefits-of-rudraksha",
    featuredImage: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop"
  },
  {
    _id: "2",
    category: { name: "Gemstones" },
    title: "Who Should Wear a Blue Sapphire (Neelam)?",
    excerpt: "This powerful gemstone of Saturn can change fortunes overnight...",
    readTime: "6 min read",
    createdAt: "2026-08-10",
    slug: "blue-sapphire-guide",
    featuredImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    _id: "3",
    category: { name: "Vastu Shastra" },
    title: "Simple Vastu Tips to Bring Peace and Harmony at Home",
    excerpt: "Infallible Vastu tips and rules to ward off negative energy...",
    readTime: "5 min read",
    createdAt: "2026-08-05",
    slug: "vastu-tips-home",
    featuredImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop"
  }
];

const RelatedBlogs = ({ currentSlug }) => {
  const relatedPosts = staticBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, 2);

  return (
    <div className="mt-16 pt-8 border-t border-stone-200">
      <h3 className="text-2xl font-serif font-bold text-[#4a2e18] mb-6">
        You May Also Like
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {relatedPosts.map((blog) => (
          <div
            key={blog._id}
            className="group bg-white border border-[#edd5b9] rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            <Link to={`/blogs/${blog.slug}`} className="flex flex-col h-full justify-between">
              <div>
                <div className="relative w-full h-40 overflow-hidden bg-stone-100">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 text-[#8b3a2b] text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-[#edd5b9]">
                    {blog.category.name}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                    <span>{blog.createdAt}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h4 className="font-serif font-bold text-[#4a2e18] text-sm group-hover:text-[#8b3a2b] transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                </div>
              </div>
              <div className="px-4 pb-4 pt-0 flex items-center justify-end">
                <span className="text-xs font-bold text-[#8b3a2b] uppercase flex items-center gap-1">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;