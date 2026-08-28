import React, { useState } from "react";
import { 
  Sparkles, 
  Gem, 
  Home, 
  Flame, 
  BookOpen, 
  Search, 
  ArrowRight, 
  UserCheck 
} from "lucide-react";

const allBlogArticles = [
  {
    id: 1,
    category: "Rudraksha",
    title: "Rules and Miraculous Benefits of Wearing Rudraksha",
    excerpt: "According to Shiva Purana, wearing Rudraksha brings physical and mental peace. Learn the correct method to wear it...",
    author: "Gautam Sharma",
    readTime: "4 min read",
    date: "12 Aug 2026",
    icon: <Sparkles className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#fff3df] to-[#fce4c8]"
  },
  {
    id: 2,
    category: "Gemstones",
    title: "Who Should Wear a Blue Sapphire (Neelam)?",
    excerpt: "This powerful gemstone of Saturn can change fortunes overnight, but wearing it without proper guidance can cause harm...",
    author: "Akshita Singh",
    readTime: "6 min read",
    date: "10 Aug 2026",
    icon: <Gem className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#eef5ff] to-[#d6e4fc]"
  },
  {
    id: 3,
    category: "Vastu Shastra",
    title: "Simple Vastu Tips to Bring Peace and Harmony at Home",
    excerpt: "Infallible Vastu tips and rules to ward off negative energy and increase the flow of positive energy...",
    author: "Puspendra Singh",
    readTime: "5 min read",
    date: "05 Aug 2026",
    icon: <Home className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#f3f9f1] to-[#dcefd7]"
  },
  {
    id: 4,
    category: "Karungali",
    title: "Ancient Secrets of Karungali (Black Ebony) Mala",
    excerpt: "Highly revered in South India, how Karungali wood helps in balancing the body's chakras and energy...",
    author: "Gautam Sharma",
    readTime: "3 min read",
    date: "01 Aug 2026",
    icon: <Flame className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#faede3] to-[#ecccb5]"
  },
  {
    id: 5,
    category: "Rudraksha",
    title: "5 Mukhi Rudraksha: Benefits & How to Wear It Daily",
    excerpt: "The panchmukhi rudraksha is governed by Jupiter and helps in expanding awareness, peace, and mental stability...",
    author: "Dr. R. Shastri",
    readTime: "5 min read",
    date: "28 Jul 2026",
    icon: <Sparkles className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#fff3df] to-[#fce4c8]"
  },
  {
    id: 6,
    category: "Hindu Rituals",
    title: "Daily Pooja for Beginners: How to Start & What You Need",
    excerpt: "A step-by-step guide on setting up your home temple, lighting the lamp, and offering sincere prayers daily...",
    author: "Akshita Singh",
    readTime: "7 min read",
    date: "25 Jul 2026",
    icon: <BookOpen className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#fbf0ff] to-[#edd0fc]"
  },
  {
    id: 7,
    category: "Gemstones",
    title: "The Astrological Significance of Wearing Ruby (Manik)",
    excerpt: "Representing the Sun, Ruby bestows leadership qualities, confidence, and vitality upon the wearer...",
    author: "Gautam Sharma",
    readTime: "5 min read",
    date: "20 Jul 2026",
    icon: <Gem className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#eef5ff] to-[#d6e4fc]"
  },
  {
    id: 8,
    category: "Vastu Shastra",
    title: "Mandir Placement: Ideal Vastu Directions for Pooja Room",
    excerpt: "Discover the most auspicious direction for placing your home temple to maximize divine vibrations...",
    author: "Puspendra Singh",
    readTime: "4 min read",
    date: "15 Jul 2026",
    icon: <Home className="w-10 h-10 text-[#d35400]" />,
    bgGradient: "from-[#f3f9f1] to-[#dcefd7]"
  }
];

const SpiritualBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Rudraksha", "Gemstones", "Vastu Shastra", "Karungali", "Hindu Rituals"];

  const filteredArticles = allBlogArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff3df] border-b border-[#edd5b9] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#8b3a2b] tracking-widest text-xs font-semibold uppercase bg-white px-4 py-1.5 rounded-full border border-[#edd5b9] inline-block mb-3 shadow-sm">
            Knowledge Centre & Blogs
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#4a2e18] mb-3">
            Spiritual Blog & Knowledge Hub
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
            Explore deep secrets, sacred rituals, and spiritual wisdom derived from ancient Vedic traditions.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs (e.g. Rudraksha, Vastu, Pooja)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-full border border-[#edd5b9] bg-white text-sm text-[#4a2e18] focus:outline-none focus:border-[#8b3a2b] shadow-sm transition-all"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#6b2314] text-white shadow-md scale-105"
                    : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid (Updated to 4 columns on large screens) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white border border-[#edd5b9] rounded-sm p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer group relative hover:-translate-y-1"
              >
                <div>
                  {/* Icon Banner Container */}
                  <div className={`relative w-full h-48 bg-gradient-to-br ${article.bgGradient} border border-stone-200 rounded-sm mb-4 overflow-hidden flex items-center justify-center`}>
                    <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                      {article.icon}
                    </div>
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[#8b3a2b] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm border border-[#edd5b9]">
                      {article.category}
                    </span>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2 font-sans">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-[#4a2e18] text-sm sm:text-base mb-2 leading-snug group-hover:text-[#8b3a2b] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mb-4 font-sans leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author & Read More Footer */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-stone-500">
                    By <strong className="text-[#4a2e18]">{article.author}</strong>
                  </span>
                  <span className="text-xs font-bold text-[#8b3a2b] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-base text-stone-600 font-serif">No articles found. Please try searching with a different keyword.</p>
          </div>
        )}

        {/* Bottom Call to Action Section */}
        <div className="mt-16 bg-white border border-[#edd5b9] rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between shadow-sm">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#4a2e18] mb-2">
              Have questions regarding rituals or astrology?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Get direct consultation from our senior priests and spiritual experts.
            </p>
          </div>
          <button className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer">
            <UserCheck className="w-4 h-4" /> Consult Expert Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default SpiritualBlog;