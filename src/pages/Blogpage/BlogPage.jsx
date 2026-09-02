// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { 
//   Sparkles, 
//   Gem, 
//   Home, 
//   Flame, 
//   BookOpen, 
//   Search, 
//   ArrowRight, 
//   UserCheck 
// } from "lucide-react";

// const API_BASE_URL = "http://localhost:5000";

// const getCategoryDetails = (categoryName) => {
//   switch (categoryName?.toLowerCase()) {
//     case "rudraksha":
//       return { icon: <Sparkles className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#fff3df] to-[#fce4c8]" };
//     case "gemstones":
//       return { icon: <Gem className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#eef5ff] to-[#d6e4fc]" };
//     case "vastu shastra":
//       return { icon: <Home className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#f3f9f1] to-[#dcefd7]" };
//     case "karungali":
//       return { icon: <Flame className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#faede3] to-[#ecccb5]" };
//     case "hindu rituals":
//       return { icon: <BookOpen className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#fbf0ff] to-[#edd0fc]" };
//     default:
//       return { icon: <Sparkles className="w-10 h-10 text-[#d35400]" />, bgGradient: "from-[#fff3df] to-[#fce4c8]" };
//   }
// };

// const getImageUrl = (imagePath) => {
//   if (!imagePath) return "";
//   if (imagePath.startsWith("http")) return imagePath;
//   return `${API_BASE_URL}${imagePath}`;
// };

// const BlogPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [allBlogs, setAllBlogs] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const POSTS_PER_PAGE = 8;

//   // 1. Fetch Categories & All Posts together
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [catRes, postsRes] = await Promise.all([
//           axios.get(`${API_BASE_URL}/api/categories`),
//           axios.get(`${API_BASE_URL}/api/posts`) // Assuming this returns all posts array
//         ]);

//         setCategories([{ name: "All", _id: "all" }, ...(Array.isArray(catRes.data) ? catRes.data : [])]);
//         setAllBlogs(Array.isArray(postsRes.data) ? postsRes.data : (postsRes.data.posts || []));
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // 2. Filter by Category and Search Query
//   const filteredBlogs = allBlogs.filter((blog) => {
//     const blogCatId = blog.category?._id || blog.category;
//     const matchesCategory = selectedCategory === "all" || blogCatId === selectedCategory;
//     const matchesSearch = 
//       blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // 3. Frontend Pagination Logic
//   const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE) || 1;
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const currentBlogs = filteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

//   const handleCategoryChange = (catId) => {
//     setSelectedCategory(catId);
//     setCurrentPage(1); // Reset page on filter change
//   };

//   return (
//     <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff3df] border-b border-[#edd5b9] min-h-screen font-sans text-gray-800">
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* Header & Search */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="text-[#8b3a2b] tracking-widest text-xs font-semibold uppercase bg-white px-4 py-1.5 rounded-full border border-[#edd5b9] inline-block mb-3 shadow-sm">
//             Knowledge Centre & Blogs
//           </span>
//           <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#4a2e18] mb-3">
//             Spiritual Blog & Knowledge Hub
//           </h1>
          
//           <div className="mt-6 max-w-lg mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search blogs..."
//                 value={searchQuery}
//                 onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
//                 className="w-full px-5 py-3.5 pl-12 rounded-full border border-[#edd5b9] bg-white text-sm text-[#4a2e18] focus:outline-none focus:border-[#8b3a2b] shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
//             {categories.map((cat, idx) => {
//               const catId = cat._id || "all";
//               const isSelected = selectedCategory === catId;
//               return (
//                 <button
//                   key={catId + idx}
//                   onClick={() => handleCategoryChange(catId)}
//                   className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer ${
//                     isSelected ? "bg-[#6b2314] text-white shadow-md scale-105" : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0]"
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Blogs Grid */}
//         {loading ? (
//           <div className="text-center py-16"><p className="text-stone-600 font-serif">Loading...</p></div>
//         ) : currentBlogs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
//             {currentBlogs.map((article, idx) => {
//               const categoryName = article?.category?.name || "General";
//               const { icon, bgGradient } = getCategoryDetails(categoryName);
//               return (
//                 <div key={article._id || idx} className="bg-white border border-[#edd5b9] rounded-sm p-4 flex flex-col justify-between hover:shadow-xl transition-all group">
//                   <div>
//                     <div className={`relative w-full h-48 bg-gradient-to-br ${bgGradient} border border-stone-200 rounded-sm mb-4 overflow-hidden flex items-center justify-center`}>
//                       {article?.featuredImage ? (
//                         <img src={getImageUrl(article.featuredImage)} alt={article.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                       ) : (
//                         <div className="p-3 bg-white/90 rounded-xl shadow-md">{icon}</div>
//                       )}
//                       <span className="absolute top-2 left-2 bg-white/90 text-[#8b3a2b] text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-[#edd5b9]">{categoryName}</span>
//                     </div>
//                     <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
//                       <span>{article?.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}</span>
//                       <span>{article?.readTime || "4 min read"}</span>
//                     </div>
//                     <h3 className="text-[#4a2e18] text-sm sm:text-base mb-2 group-hover:text-[#8b3a2b] line-clamp-2 font-serif font-bold">{article.title}</h3>
//                     <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mb-4">{article.excerpt || article.metaDesc}</p>
//                   </div>
//                   <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
//                     <span className="text-[11px] font-medium text-stone-500">By <strong className="text-[#4a2e18]">{article.author || "Puspendra Singh"}</strong></span>
//                     <a href={`/blog/${article?.slug || article._id}`} className="text-xs font-bold text-[#8b3a2b] uppercase flex items-center gap-1">Read More <ArrowRight className="w-3.5 h-3.5" /></a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="text-center py-16"><p className="text-base text-stone-600 font-serif">No articles found.</p></div>
//         )}

//         {/* Pagination */}
//         {!loading && totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-12">
//             <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} className={`px-5 py-2 rounded-full border border-[#edd5b9] text-xs font-semibold ${currentPage === 1 ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'bg-white text-[#4a2e18]'}`}>Previous</button>
//             <span className="text-stone-700 font-medium text-sm">Page {currentPage} of {totalPages}</span>
//             <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} className={`px-5 py-2 rounded-full border border-[#edd5b9] text-xs font-semibold ${currentPage === totalPages ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'bg-white text-[#4a2e18]'}`}>Next</button>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default BlogPage;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  Eye,
  Star,
  Sparkles
} from "lucide-react";

// Card entrance animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const API_BASE_URL = import.meta.env.VITE_API_BACKEND_URL;
const CATEGORIES_URL = `${API_BASE_URL}/api/categories`;
const POSTS_URL = `${API_BASE_URL}/api/posts/pagination`;

const getImageUrl = (imagePath) => {
  if (!imagePath) return "https://placehold.co/600x400/E5E7EB/4B5563?text=No+Image";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "Recent";
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  }).toUpperCase();
};

const Blogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  const POSTS_PER_PAGE = 3;

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await axios.get(CATEGORIES_URL);
        const fetchedCategories = response.data || [];
        setCategories([{ name: "All", _id: "all" }, ...fetchedCategories]);

        if (fetchedCategories.length > 0) {
          setSelectedCategory("all");
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      if (!selectedCategory) return;
      try {
        setLoadingPosts(true);
        const response = await axios.get(
          `${POSTS_URL}?page=${currentPage}&limit=${POSTS_PER_PAGE}&category=${selectedCategory}`
        );
        setBlogs(response.data.posts);
        setTotalPages(response.data.totalPages || 1);
        
        // Set featured posts (first 5 for slider)
        const allPosts = response.data.posts || [];
        setFeaturedPosts(allPosts.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [selectedCategory, currentPage]);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-5 my-6 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* ========================================== */}
        {/* SECTION TITLE */}
        {/* ========================================== */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#3870A6]">
            Our Blog
          </h1>
        </div>

        {/* ========================================== */}
        {/* FEATURED + LATEST SLIDER - GOOGLE STYLE */}
        {/* ========================================== */}
        {!loadingPosts && featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 mb-12">
            
            {/* LEFT: Featured Slider */}
            <div>
              <h2 className="text-[22px] font-normal mb-4 text-[#202124] flex items-center gap-2">
                <Star size={20} className="text-[#3870A6]" />
                Featured articles
              </h2>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredPosts.map((post) => (
                      <div 
                        key={post._id} 
                        className="w-full flex-shrink-0 cursor-pointer"
                      >
                        <Link to={`/blog/${post?.slug}`}>
                          <div className="relative">
                            <img
                              src={getImageUrl(post.featuredImage)}
                              alt={post.title}
                              className="w-full h-64 object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/720x320/E5E7EB/4B5563?text=Featured";
                              }}
                            />
                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                              {post.tags?.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-[10px] px-2 py-0.5 bg-[#3870A6]/90 text-white rounded uppercase tracking-wider">
                                  {tag.name || tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="px-5 pt-4 pb-5">
                            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-[#3870A6] font-medium">
                              {post.category?.name && <span>{post.category.name}</span>}
                              {post.tags?.slice(0, 2).map((tag, i) => (
                                <span key={i} className="text-gray-400">• {tag.name || tag}</span>
                              ))}
                            </div>
                            <h3 className="text-[19px] font-medium my-1.5 text-[#202124] hover:text-[#3870A6] transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                              {post?.excerpt}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                              <span>{formatDate(post.createdAt)}</span>
                              <span>•</span>
                              <span>{post.author?.name || "Admin"}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  {featuredPosts.length > 1 && (
                    <>
                      <button 
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>
                
                {featuredPosts.length > 1 && (
                  <div className="flex justify-center gap-1.5 pb-4">
                    {featuredPosts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-1.5 h-1.5 rounded-full transition ${
                          i === currentSlide ? "bg-[#3870A6] w-4" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Latest Blogs */}
            <div>
              <h2 className="text-[22px] font-normal mb-4 text-[#202124]">
                Latest blogs
              </h2>
              <ul className="list-none m-0 p-0">
                {blogs.slice(0, 3).map((post) => (
                  <li 
                    key={post._id} 
                    className="py-3.5 border-b border-gray-200 last:border-none cursor-pointer group"
                  >
                    <Link to={`/blog/${post?.slug}`}>
                      <time className="block text-xs font-medium text-[#c5221f] mb-1">
                        {formatDate(post.createdAt)}
                      </time>
                      <h3 className="text-base font-medium my-1.5 text-[#202124] group-hover:text-[#3870A6] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[13px] text-gray-600 leading-relaxed m-0 line-clamp-2">
                        {post?.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        <span>{post.author?.name || "Admin"}</span>
                        <span>•</span>
                        <span>{post.readTime || "4 min read"}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* MOBILE CATEGORIES */}
        {/* ========================================== */}
        <div className="block sm:hidden">
          <p className="text-lg font-bold text-center mb-5">Trending Categories</p>
          <div className="flex flex-wrap justify-center gap-3">
            {loadingCategories ? (
              <p className="text-gray-500">Loading categories...</p>
            ) : (
              categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleCategoryChange(category._id)}
                  className={`
                    px-5 py-2 rounded-full border-2 transition-all duration-300 ease-in-out
                    font-medium text-sm sm:text-base whitespace-nowrap
                    ${selectedCategory === category._id
                      ? "bg-[#3870A6] border-[#3870A6] text-white shadow-lg scale-105"
                      : "border-gray-300 text-gray-600 hover:bg-gray-200 hover:border-gray-400"
                    }
                  `}
                >
                  {category.name}
                </button>
              ))
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* BLOG CARDS GRID */}
        {/* ========================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadingPosts ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-[#3870A6] border-t-transparent"></div>
              <p className="text-gray-500 text-xl mt-4">Loading blogs...</p>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map((blog, idx) => (
              <motion.div
                key={blog._id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link to={`/blog/${blog?.slug}`}>
                  <div className="w-full h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                    <img
                      src={getImageUrl(blog?.featuredImage)}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/400x300/E5E7EB/4B5563?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#3870A6] font-semibold text-sm mb-2">
                      {(blog?.category?.name || "GENERAL").toUpperCase()}
                    </p>
                    <p className="text-gray-500 font-semibold text-xs mb-2">
                      {blog?.tags?.map((tag) => `#${tag.name}`).join(" ")}
                    </p>
                    <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#3870A6]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {blog?.excerpt}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Published on {new Date(blog?.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-xl">
                No blogs found for this category.
              </p>
            </div>
          )}
        </div>

        {/* ========================================== */}
        {/* DESKTOP CATEGORIES */}
        {/* ========================================== */}
        <div className="">
          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-semibold hidden sm:block">Some Trending Topics</p>
            <p className="text-[#3870A6] font-medium">
              <Link to="/community/blog" className="hover:underline">
                view all blogs
              </Link>
            </p>
          </div>
          <div className="hidden sm:flex flex-wrap gap-3 mt-4">
            <div className="flex flex-wrap justify-center gap-3">
              {loadingCategories ? (
                <p className="text-gray-500">Loading categories...</p>
              ) : (
                categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => handleCategoryChange(category._id)}
                    className={`
                      px-5 py-2 rounded-full border-2 transition-all duration-300 ease-in-out
                      font-medium text-sm sm:text-base whitespace-nowrap
                      ${selectedCategory === category._id
                        ? "bg-[#3870A6] border-[#3870A6] text-white shadow-lg scale-105"
                        : "border-gray-300 text-gray-600 hover:bg-gray-200 hover:border-gray-400"
                      }
                    `}
                  >
                    {category.name}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;