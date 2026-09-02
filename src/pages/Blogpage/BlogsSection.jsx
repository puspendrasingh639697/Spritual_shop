import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Gem, Home, BookOpen, ArrowRight } from "lucide-react";

const staticCategories = [
  { _id: "all", name: "All" },
  { _id: "rudraksha", name: "Rudraksha" },
  { _id: "gemstones", name: "Gemstones" },
  { _id: "vastu", name: "Vastu Shastra" },
  { _id: "karungali", name: "Karungali" }
];

const staticBlogs = [
  {
    _id: "1",
    category: { name: "Rudraksha" },
    title: "Rules and Miraculous Benefits of Wearing Rudraksha",
    excerpt: "According to Shiva Purana, wearing Rudraksha brings physical and mental peace. Learn the correct method...",
    author: "Team Japam",
    readTime: "4 min read",
    createdAt: "2026-08-12",
    slug: "benefits-of-rudraksha",
    featuredImage: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop"
  },
  {
    _id: "2",
    category: { name: "Gemstones" },
    title: "Who Should Wear a Blue Sapphire (Neelam)?",
    excerpt: "This powerful gemstone of Saturn can change fortunes overnight, but wearing it without guidance can cause harm...",
    author: "Team Japam",
    readTime: "6 min read",
    createdAt: "2026-08-10",
    slug: "blue-sapphire-guide",
    featuredImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    _id: "3",
    category: { name: "Vastu Shastra" },
    title: "Simple Vastu Tips to Bring Peace and Harmony at Home",
    excerpt: "Infallible Vastu tips and rules to ward off negative energy and increase the flow of positive energy...",
    author: "Team Japam",
    readTime: "5 min read",
    createdAt: "2026-08-05",
    slug: "vastu-tips-home",
    featuredImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop"
  }
];

const getCategoryDetails = (categoryName) => {
  switch (categoryName?.toLowerCase()) {
    case "rudraksha":
      return { icon: <Sparkles className="w-6 h-6 text-[#d35400]" />, bgGradient: "from-[#fff3df] to-[#fce4c8]" };
    case "gemstones":
      return { icon: <Gem className="w-6 h-6 text-[#d35400]" />, bgGradient: "from-[#eef5ff] to-[#d6e4fc]" };
    case "vastu shastra":
    case "vastu":
      return { icon: <Home className="w-6 h-6 text-[#d35400]" />, bgGradient: "from-[#f3f9f1] to-[#dcefd7]" };
    default:
      return { icon: <BookOpen className="w-6 h-6 text-[#d35400]" />, bgGradient: "from-[#fbf0ff] to-[#edd0fc]" };
  }
};

const BlogsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBlogs = selectedCategory === "all" 
    ? staticBlogs 
    : staticBlogs.filter(blog => blog.category.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-[#fff3df] rounded-2xl my-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <span className="text-[#8b3a2b] tracking-widest text-xs font-semibold uppercase bg-white px-3 py-1 rounded-full border border-[#edd5b9] inline-block mb-2 shadow-sm">
              Knowledge Centre
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2e18]">
              Spiritual Wisdom & Blogs
            </h2>
          </div>
          <Link
            to="/community/blogs"
            className="bg-[#6b2314] hover:bg-[#8b3a2b] text-white px-6 py-2.5 rounded-full mt-4 md:mt-0 font-medium transition-all duration-200 text-sm shadow-sm flex items-center gap-1.5"
          >
            View All Blogs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {staticCategories.map((category) => {
            const isSelected = selectedCategory === category._id;
            return (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer ${
                  isSelected
                    ? "bg-[#6b2314] text-white shadow-md"
                    : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => {
              const categoryName = blog?.category?.name || "General";
              const { icon, bgGradient } = getCategoryDetails(categoryName);
              return (
                <div
                  key={blog._id}
                  className="group bg-white border border-[#edd5b9] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <Link to={`/blogs/${blog.slug}`} className="flex flex-col h-full justify-between">
                    <div>
                      <div className={`relative w-full h-48 bg-gradient-to-br ${bgGradient} border-b border-stone-100 overflow-hidden flex items-center justify-center`}>
                        {blog?.featuredImage ? (
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="p-3 bg-white/90 rounded-xl shadow-md">{icon}</div>
                        )}
                        <span className="absolute top-2 left-2 bg-white/90 text-[#8b3a2b] text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-[#edd5b9]">
                          {categoryName}
                        </span>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                          <span>{blog.createdAt}</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h3 className="text-base font-serif font-bold text-[#4a2e18] leading-snug group-hover:text-[#8b3a2b] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-500">
                        By <strong className="text-[#4a2e18]">{blog.author}</strong>
                      </span>
                      <span className="text-xs font-bold text-[#8b3a2b] uppercase flex items-center gap-1">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-600 font-serif text-base">No blogs found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;