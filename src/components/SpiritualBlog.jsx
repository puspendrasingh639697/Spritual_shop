// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Star,
//   Eye,
//   Plus,
//   X
// } from "lucide-react";

// // Card entrance animation
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const API_BASE_URL = "http://localhost:5000";
// const CATEGORIES_URL = `${API_BASE_URL}/api/categories`;
// const CATEGORIES_ADD_URL = `${API_BASE_URL}/api/categories/add`;

// // ============================================
// // STATIC BLOG DATA (Kyunki /api/posts nahi hai)
// // ============================================
// const STATIC_BLOGS = [
//   {
//     _id: "1",
//     title: "Decoding cosmic signals with deep learning and Keras",
//     slug: "decoding-cosmic-signals-deep-learning-keras",
//     excerpt: "Astroparticle physics sits at the exciting intersection of astrophysics and particle physics, where deep learning is revolutionizing our understanding of the cosmos.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Astrology", _id: "cat1" },
//     tags: ["AI", "Deep Learning", "Cosmic"],
//     featured: true,
//     featuredImage: "https://placehold.co/720x320/0b0b12/ffffff?text=Cosmic+Signals",
//     createdAt: "2026-08-27T10:00:00Z",
//     author: "Dr. Sarah Chen",
//     readTime: "8 min read",
//     views: 1247
//   },
//   {
//     _id: "2",
//     title: "Enterprise-Grade Precision for Long-Context Multimodal Embedding Inference",
//     slug: "enterprise-precision-long-context-embedding",
//     excerpt: "Google Cloud has natively integrated TPU support into the vLLM serving engine, allowing developers to elastically scale high-demand embedding pipelines.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Technology", _id: "cat2" },
//     tags: ["AI", "Cloud", "TPU"],
//     featured: true,
//     featuredImage: "https://placehold.co/720x320/16213e/ffffff?text=Enterprise+AI",
//     createdAt: "2026-08-26T10:00:00Z",
//     author: "Anthony Su",
//     readTime: "10 min read",
//     views: 2341
//   },
//   {
//     _id: "3",
//     title: "How to Evaluate Live & Voice Agents in ADK",
//     slug: "evaluate-live-voice-agents-adk",
//     excerpt: "Moving live voice agents from demo to production requires rigorous, automated testing to handle the unpredictability of real multi-turn conversations.",
//     content: "<p>Full content here...</p>",
//     category: { name: "AI", _id: "cat3" },
//     tags: ["Voice", "Testing", "ADK"],
//     featured: true,
//     featuredImage: "https://placehold.co/720x320/0f3460/ffffff?text=Voice+Agents",
//     createdAt: "2026-08-24T10:00:00Z",
//     author: "Emily Watson",
//     readTime: "6 min read",
//     views: 1892
//   },
//   {
//     _id: "4",
//     title: "Jupiter's Great Red Spot: New Discoveries from JWST",
//     slug: "jupiter-great-red-spot-jwst",
//     excerpt: "The James Webb Space Telescope has revealed unprecedented details about Jupiter's Great Red Spot, challenging our understanding of the solar system's largest storm.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Space", _id: "cat4" },
//     tags: ["Astronomy", "JWST", "Jupiter"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/1a1a2e/ffffff?text=Jupiter",
//     createdAt: "2026-08-23T10:00:00Z",
//     author: "Dr. Michael Torres",
//     readTime: "7 min read",
//     views: 3456
//   },
//   {
//     _id: "5",
//     title: "Agent Plugins: Package Your Skills, Tools, and More",
//     slug: "agent-plugins-package-skills-tools",
//     excerpt: "Agent Plugins 1.0.0 is a new, vendor-neutral directory specification for packaging Agent Skills and MCP servers into a single portable unit.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Technology", _id: "cat2" },
//     tags: ["Plugins", "Tools", "MCP"],
//     featured: true,
//     featuredImage: "https://placehold.co/720x320/1a1a2e/ffffff?text=Agent+Plugins",
//     createdAt: "2026-08-20T10:00:00Z",
//     author: "David Kim",
//     readTime: "5 min read",
//     views: 4567
//   },
//   {
//     _id: "6",
//     title: "What is an Embedding Model and What is it Used For?",
//     slug: "embedding-model-what-is-used-for",
//     excerpt: "In modern AI architectures, embedding models serve as the foundational translators bridging raw unstructured data and downstream intelligent reasoning.",
//     content: "<p>Full content here...</p>",
//     category: { name: "AI", _id: "cat3" },
//     tags: ["AI", "Embedding", "ML"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/16213e/ffffff?text=Embedding",
//     createdAt: "2026-08-18T10:00:00Z",
//     author: "Emma Thompson",
//     readTime: "8 min read",
//     views: 2891
//   },
//   {
//     _id: "7",
//     title: "Dark Matter: New Evidence from Gravitational Lensing",
//     slug: "dark-matter-gravitational-lensing",
//     excerpt: "Recent gravitational lensing observations provide the strongest evidence yet for the existence of dark matter, confirming Einstein's predictions.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Astrology", _id: "cat1" },
//     tags: ["Dark Matter", "Einstein"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/0b0b12/ffffff?text=Dark+Matter",
//     createdAt: "2026-08-17T10:00:00Z",
//     author: "Prof. Lisa Park",
//     readTime: "9 min read",
//     views: 4321
//   },
//   {
//     _id: "8",
//     title: "Exoplanet Discovery: Earth-like Planet in Habitable Zone",
//     slug: "exoplanet-earth-like-habitable-zone",
//     excerpt: "Astronomers have discovered a new Earth-like planet orbiting in the habitable zone of a nearby star, raising hopes for finding life beyond our solar system.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Space", _id: "cat4" },
//     tags: ["Exoplanets", "Habitable"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/0f3460/ffffff?text=Exoplanet",
//     createdAt: "2026-08-16T10:00:00Z",
//     author: "Dr. James Wilson",
//     readTime: "6 min read",
//     views: 5678
//   },
//   {
//     _id: "9",
//     title: "Asteroid Mining: The Future of Space Resources",
//     slug: "asteroid-mining-future-space",
//     excerpt: "Companies are developing technologies to mine asteroids for valuable minerals and metals, potentially revolutionizing space exploration.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Space", _id: "cat4" },
//     tags: ["Mining", "Resources"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/16213e/ffffff?text=Asteroid+Mining",
//     createdAt: "2026-08-15T10:00:00Z",
//     author: "Alex Rivera",
//     readTime: "8 min read",
//     views: 3210
//   },
//   {
//     _id: "10",
//     title: "Mars Missions: Next Generation Rocket Technology",
//     slug: "mars-missions-next-generation-rockets",
//     excerpt: "NASA and private companies are developing next-generation rockets that will make Mars missions more feasible and cost-effective than ever before.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Space", _id: "cat4" },
//     tags: ["Mars", "Rockets", "NASA"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/0b0b12/ffffff?text=Mars+Rocket",
//     createdAt: "2026-08-14T10:00:00Z",
//     author: "Emma Thompson",
//     readTime: "7 min read",
//     views: 6543
//   },
//   {
//     _id: "11",
//     title: "Saturn's Rings: New Insights from Cassini Data",
//     slug: "saturn-rings-cassini-data",
//     excerpt: "New analysis of Cassini spacecraft data reveals previously unknown details about Saturn's rings, including their age, composition, and formation.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Space", _id: "cat4" },
//     tags: ["Saturn", "Cassini"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/1a1a2e/ffffff?text=Saturn",
//     createdAt: "2026-08-13T10:00:00Z",
//     author: "Dr. Maria Rodriguez",
//     readTime: "6 min read",
//     views: 2345
//   },
//   {
//     _id: "12",
//     title: "Quantum Computing in Astrophysics",
//     slug: "quantum-computing-astrophysics",
//     excerpt: "Quantum computers are beginning to solve problems in astrophysics that are impossible for classical computers, opening new frontiers.",
//     content: "<p>Full content here...</p>",
//     category: { name: "Technology", _id: "cat2" },
//     tags: ["Quantum", "Astrophysics"],
//     featured: false,
//     featuredImage: "https://placehold.co/720x320/16213e/ffffff?text=Quantum",
//     createdAt: "2026-08-12T10:00:00Z",
//     author: "Dr. Robert Chang",
//     readTime: "9 min read",
//     views: 1987
//   }
// ];

// const formatDate = (dateStr) => {
//   if (!dateStr) return "Recent";
//   const date = new Date(dateStr);
//   return date.toLocaleDateString('en-US', { 
//     month: 'short', 
//     day: 'numeric', 
//     year: 'numeric'
//   }).toUpperCase();
// };

// const getImageUrl = (imagePath) => {
//   if (!imagePath) return "https://placehold.co/600x400/E5E7EB/4B5563?text=No+Image";
//   if (imagePath.startsWith("http")) return imagePath;
//   return `${API_BASE_URL}${imagePath}`;
// };

// const Blogs = () => {
//   // ============================================
//   // STATE
//   // ============================================
//   const [categories, setCategories] = useState([]);
//   const [blogs, setBlogs] = useState(STATIC_BLOGS);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Add Category State
//   const [showAddCategory, setShowAddCategory] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [newCategorySlug, setNewCategorySlug] = useState("");
//   const [newCategoryDesc, setNewCategoryDesc] = useState("");
//   const [addingCategory, setAddingCategory] = useState(false);
//   const [categoryMessage, setCategoryMessage] = useState("");

//   const POSTS_PER_PAGE = 3;

//   // ============================================
//   // FETCH CATEGORIES - GET (DYNAMIC)
//   // ============================================
//   const fetchCategories = async () => {
//     try {
//       setLoadingCategories(true);
//       const response = await axios.get(CATEGORIES_URL);
      
//       // Check if response.data is an array
//       let fetchedCategories = [];
//       if (Array.isArray(response.data)) {
//         fetchedCategories = response.data;
//       } else if (response.data && typeof response.data === 'object') {
//         // If response is an object, try to find array
//         fetchedCategories = response.data.categories || response.data.data || [];
//       }
      
//       const allCategories = [{ name: "All", _id: "all" }, ...fetchedCategories];
//       setCategories(allCategories);
//     } catch (error) {
//       console.error("Failed to fetch categories:", error);
//       // Fallback static categories
//       setCategories([
//         { name: "All", _id: "all" },
//         { name: "Astrology", _id: "cat1" },
//         { name: "Technology", _id: "cat2" },
//         { name: "AI", _id: "cat3" },
//         { name: "Space", _id: "cat4" }
//       ]);
//     } finally {
//       setLoadingCategories(false);
//     }
//   };

//   // ============================================
//   // INITIAL FETCH
//   // ============================================
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // ============================================
//   // FILTER & PAGINATION
//   // ============================================
//   const filteredPosts = blogs.filter((post) => {
//     if (selectedCategory === "all") return true;
//     const postCategoryId = post.category?._id || post.category;
//     return postCategoryId === selectedCategory;
//   });

//   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

//   // Featured posts (first 5 from all posts)
//   const featuredPosts = blogs.filter(p => p.featured).slice(0, 5);
//   const latestPosts = filteredPosts.slice(0, 3);

//   // ============================================
//   // SLIDER NAVIGATION
//   // ============================================
//   const nextSlide = () => {
//     if (featuredPosts.length === 0) return;
//     setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
//   };

//   const prevSlide = () => {
//     if (featuredPosts.length === 0) return;
//     setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
//   };

//   // ============================================
//   // CATEGORY HANDLERS
//   // ============================================
//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setCurrentPage(1);
//   };

//   // ============================================
//   // ADD CATEGORY - POST (DYNAMIC)
//   // ============================================
//   const handleAddCategory = async (e) => {
//     e.preventDefault();
    
//     if (!newCategoryName.trim()) {
//       setCategoryMessage("❌ Category name is required");
//       return;
//     }

//     try {
//       setAddingCategory(true);
//       setCategoryMessage("");

//       const categoryData = {
//         name: newCategoryName.trim(),
//         slug: newCategorySlug.trim() || newCategoryName.trim().toLowerCase().replace(/\s+/g, '-'),
//         description: newCategoryDesc.trim()
//       };

//       await axios.post(CATEGORIES_ADD_URL, categoryData);
      
//       setCategoryMessage("✅ Category added successfully!");
//       setNewCategoryName("");
//       setNewCategorySlug("");
//       setNewCategoryDesc("");
//       setShowAddCategory(false);
//       fetchCategories(); // Refresh categories
//     } catch (error) {
//       console.error("Failed to add category:", error);
//       setCategoryMessage("❌ Failed to add category. Please try again.");
//     } finally {
//       setAddingCategory(false);
//     }
//   };

//   // ============================================
//   // RENDER
//   // ============================================
//   return (
//     <div className="max-w-7xl mx-auto py-8 px-5 my-6 rounded-2xl">
//       <div className="max-w-7xl mx-auto space-y-10">
        
//         {/* SECTION TITLE */}
//         <div className="text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#3870A6]">
//             Our Blog
//           </h1>
//         </div>

//         {/* ========================================== */}
//         {/* FEATURED + LATEST SLIDER - GOOGLE STYLE */}
//         {/* ========================================== */}
//         {featuredPosts.length > 0 && (
//           <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 mb-12">
            
//             {/* LEFT: Featured Slider */}
//             <div>
//               <h2 className="text-[22px] font-normal mb-4 text-[#202124] flex items-center gap-2">
//                 <Star size={20} className="text-[#3870A6]" />
//                 Featured articles
//               </h2>
              
//               <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
//                 <div className="relative">
//                   <div 
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                   >
//                     {featuredPosts.map((post) => (
//                       <div 
//                         key={post._id} 
//                         className="w-full flex-shrink-0 cursor-pointer"
//                       >
//                         <Link to={`/blog/${post?.slug}`}>
//                           <div className="relative">
//                             <img
//                               src={post.featuredImage}
//                               alt={post.title}
//                               className="w-full h-64 object-cover"
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "https://placehold.co/720x320/E5E7EB/4B5563?text=Featured";
//                               }}
//                             />
//                             <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
//                               {post.tags?.slice(0, 3).map((tag, i) => (
//                                 <span key={i} className="text-[10px] px-2 py-0.5 bg-[#3870A6]/90 text-white rounded uppercase tracking-wider">
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                           <div className="px-5 pt-4 pb-5">
//                             <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-[#3870A6] font-medium">
//                               {post.category?.name && <span>{post.category.name}</span>}
//                               {post.tags?.slice(0, 2).map((tag, i) => (
//                                 <span key={i} className="text-gray-400">• {tag}</span>
//                               ))}
//                             </div>
//                             <h3 className="text-[19px] font-medium my-1.5 text-[#202124] hover:text-[#3870A6] transition-colors line-clamp-2">
//                               {post.title}
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
//                               {post?.excerpt}
//                             </p>
//                             <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
//                               <span>{formatDate(post.createdAt)}</span>
//                               <span>•</span>
//                               <span>{post.author || "Admin"}</span>
//                               <span>•</span>
//                               <span><Eye size={12} /> {post.views}</span>
//                             </div>
//                           </div>
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {featuredPosts.length > 1 && (
//                     <>
//                       <button 
//                         onClick={prevSlide}
//                         className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
//                       >
//                         <ChevronLeft size={20} />
//                       </button>
//                       <button 
//                         onClick={nextSlide}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition z-10"
//                       >
//                         <ChevronRight size={20} />
//                       </button>
//                     </>
//                   )}
//                 </div>
                
//                 {featuredPosts.length > 1 && (
//                   <div className="flex justify-center gap-1.5 pb-4">
//                     {featuredPosts.map((post, i) => (
//                       <button
//                         key={post._id}
//                         onClick={() => setCurrentSlide(i)}
//                         className={`w-1.5 h-1.5 rounded-full transition ${
//                           i === currentSlide ? "bg-[#3870A6] w-4" : "bg-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* RIGHT: Latest Blogs */}
//             <div>
//               <h2 className="text-[22px] font-normal mb-4 text-[#202124]">
//                 Latest blogs
//               </h2>
//               <ul className="list-none m-0 p-0">
//                 {latestPosts.length > 0 ? (
//                   latestPosts.map((post) => (
//                     <li 
//                       key={post._id} 
//                       className="py-3.5 border-b border-gray-200 last:border-none cursor-pointer group"
//                     >
//                       <Link to={`/blog/${post?.slug}`}>
//                         <time className="block text-xs font-medium text-[#c5221f] mb-1">
//                           {formatDate(post.createdAt)}
//                         </time>
//                         <h3 className="text-base font-medium my-1.5 text-[#202124] group-hover:text-[#3870A6] transition-colors line-clamp-2">
//                           {post.title}
//                         </h3>
//                         <p className="text-[13px] text-gray-600 leading-relaxed m-0 line-clamp-2">
//                           {post?.excerpt}
//                         </p>
//                         <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
//                           <span>{post.author || "Admin"}</span>
//                           <span>•</span>
//                           <span>{post.readTime || "4 min read"}</span>
//                           <span>•</span>
//                           <span><Eye size={12} /> {post.views}</span>
//                         </div>
//                       </Link>
//                     </li>
//                   ))
//                 ) : (
//                   <li className="py-3.5 text-gray-500 text-sm">No latest posts</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         )}

//         {/* ========================================== */}
//         {/* CATEGORIES SECTION */}
//         {/* ========================================== */}
//         <div>
//           <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
//             <p className="text-lg font-semibold">Trending Categories</p>
//             <button
//               onClick={() => setShowAddCategory(!showAddCategory)}
//               className="flex items-center gap-2 px-4 py-2 bg-[#3870A6] text-white rounded-full text-sm hover:bg-[#2a5a80] transition"
//             >
//               <Plus size={16} /> Add Category
//             </button>
//           </div>

//           {/* Add Category Form */}
//           {showAddCategory && (
//             <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-[#202124]">Add New Category</h3>
//                 <button 
//                   onClick={() => setShowAddCategory(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
              
//               <form onSubmit={handleAddCategory} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Category Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={newCategoryName}
//                     onChange={(e) => {
//                       setNewCategoryName(e.target.value);
//                       if (!newCategorySlug) {
//                         setNewCategorySlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
//                       }
//                     }}
//                     placeholder="e.g., Astrology"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Slug (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     value={newCategorySlug}
//                     onChange={(e) => setNewCategorySlug(e.target.value)}
//                     placeholder="e.g., astrology"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
//                   />
//                   <p className="text-xs text-gray-400 mt-1">Auto-generated from name if left empty</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Description (Optional)
//                   </label>
//                   <textarea
//                     value={newCategoryDesc}
//                     onChange={(e) => setNewCategoryDesc(e.target.value)}
//                     placeholder="Brief description of the category"
//                     rows="2"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
//                   />
//                 </div>

//                 {categoryMessage && (
//                   <div className={`p-3 rounded-lg ${categoryMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
//                     {categoryMessage}
//                   </div>
//                 )}

//                 <div className="flex gap-3">
//                   <button
//                     type="submit"
//                     disabled={addingCategory}
//                     className={`px-6 py-2 bg-[#3870A6] text-white rounded-lg hover:bg-[#2a5a80] transition ${
//                       addingCategory ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                   >
//                     {addingCategory ? 'Adding...' : 'Add Category'}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowAddCategory(false);
//                       setNewCategoryName("");
//                       setNewCategorySlug("");
//                       setNewCategoryDesc("");
//                       setCategoryMessage("");
//                     }}
//                     className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Category Buttons - DYNAMIC */}
//           <div className="flex flex-wrap gap-3">
//             {loadingCategories ? (
//               <p className="text-gray-500">Loading categories...</p>
//             ) : (
//               categories.map((category) => (
//                 <button
//                   key={category._id}
//                   onClick={() => handleCategoryChange(category._id)}
//                   className={`
//                     px-5 py-2 rounded-full border-2 transition-all duration-300 ease-in-out
//                     font-medium text-sm sm:text-base whitespace-nowrap
//                     ${selectedCategory === category._id
//                       ? "bg-[#3870A6] border-[#3870A6] text-white shadow-lg scale-105"
//                       : "border-gray-300 text-gray-600 hover:bg-gray-200 hover:border-gray-400"
//                     }
//                   `}
//                 >
//                   {category.name}
//                 </button>
//               ))
//             )}
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* BLOG CARDS GRID - STATIC */}
//         {/* ========================================== */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {currentPosts.length > 0 ? (
//             currentPosts.map((blog, idx) => (
//               <motion.div
//                 key={blog._id}
//                 className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
//                 custom={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <Link to={`/blog/${blog?.slug}`}>
//                   <div className="w-full h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
//                     <img
//                       src={blog?.featuredImage}
//                       alt={blog.title}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src =
//                           "https://placehold.co/400x300/E5E7EB/4B5563?text=Image+Not+Found";
//                       }}
//                     />
//                   </div>
//                   <div className="p-6">
//                     <p className="text-[#3870A6] font-semibold text-sm mb-2">
//                       {(blog?.category?.name || "GENERAL").toUpperCase()}
//                     </p>
//                     <p className="text-gray-500 font-semibold text-xs mb-2">
//                       {blog?.tags?.map((tag) => `#${tag}`).join(" ")}
//                     </p>
//                     <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#3870A6]">
//                       {blog.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//                       {blog?.excerpt}
//                     </p>
//                     <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
//                       <span>{formatDate(blog.createdAt)}</span>
//                       <span>•</span>
//                       <span><Eye size={12} /> {blog.views}</span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <p className="text-gray-500 text-xl">
//                 No blogs found for this category.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* ========================================== */}
//         {/* PAGINATION */}
//         {/* ========================================== */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-8">
//             <button 
//               disabled={currentPage === 1} 
//               onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} 
//               className={`px-5 py-2 rounded-full border text-sm font-medium ${
//                 currentPage === 1 
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//                   : 'border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               Previous
//             </button>
//             <span className="text-sm text-gray-600">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button 
//               disabled={currentPage === totalPages} 
//               onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} 
//               className={`px-5 py-2 rounded-full border text-sm font-medium ${
//                 currentPage === totalPages 
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
//                   : 'border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* ========================================== */}
//         {/* VIEW ALL BLOGS LINK */}
//         {/* ========================================== */}
//         <div className="text-center">
//           <Link to="/community/blog" className="text-[#3870A6] font-medium hover:underline">
//             view all blogs →
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Eye,
  Plus,
  X,
  Calendar,
  User,
  Clock
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

const API_BASE_URL = "http://localhost:5000";
const CATEGORIES_URL = `${API_BASE_URL}/api/categories`;
const CATEGORIES_ADD_URL = `${API_BASE_URL}/api/categories/add`;

// ============================================
// STATIC BLOG DATA
// ============================================
const STATIC_BLOGS = [
  {
    _id: "1",
    title: "Decoding cosmic signals with deep learning and Keras",
    slug: "decoding-cosmic-signals-deep-learning-keras",
    excerpt: "Astroparticle physics sits at the exciting intersection of astrophysics and particle physics, where deep learning is revolutionizing our understanding of the cosmos.",
    content: `
      <p>Astroparticle physics sits at the exciting intersection of astrophysics and particle physics, where deep learning is revolutionizing our understanding of the cosmos.</p>
      <h2>The Challenge of Cosmic Data</h2>
      <p>Astroparticle physics generates massive amounts of data from telescopes and particle detectors around the world. Traditional analysis methods often fail to capture the subtle patterns hidden within this data.</p>
      <h2>Deep Learning Solution</h2>
      <p>Using Keras with TensorFlow backend, researchers built a convolutional neural network that processes time-series data from cosmic ray detectors. The model achieved 99.7% accuracy.</p>
      <div class="highlight-box">
        <h4>Key Results:</h4>
        <ul>
          <li>99.7% accuracy in particle identification</li>
          <li>3 previously unknown cosmic patterns discovered</li>
          <li>Real-time processing capability</li>
        </ul>
      </div>
    `,
    category: { name: "Astrology", _id: "cat1" },
    tags: ["AI", "Deep Learning", "Cosmic"],
    featured: true,
    featuredImage: "https://placehold.co/720x400/0b0b12/ffffff?text=Cosmic+Signals",
    createdAt: "2026-08-27T10:00:00Z",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    views: 1247
  },
  {
    _id: "2",
    title: "Enterprise-Grade Precision for Long-Context Multimodal Embedding Inference",
    slug: "enterprise-precision-long-context-embedding",
    excerpt: "Google Cloud has natively integrated TPU support into the vLLM serving engine, allowing developers to elastically scale high-demand embedding pipelines.",
    content: `
      <p>Google Cloud has natively integrated TPU support into the vLLM serving engine, allowing developers to elastically scale high-demand embedding pipelines.</p>
      <h2>What is an Embedding Model?</h2>
      <p>In modern AI architectures, embedding models serve as the foundational translators bridging raw unstructured data and downstream intelligent reasoning.</p>
      <h2>Performance Results</h2>
      <p>Serving qwen-3-embedding-8b on TPU Ironwood achieved 83,996 total token/s and 5.13 req/s.</p>
    `,
    category: { name: "Technology", _id: "cat2" },
    tags: ["AI", "Cloud", "TPU"],
    featured: true,
    featuredImage: "https://placehold.co/720x400/16213e/ffffff?text=Enterprise+AI",
    createdAt: "2026-08-26T10:00:00Z",
    author: "Anthony Su",
    readTime: "10 min read",
    views: 2341
  },
  {
    _id: "3",
    title: "How to Evaluate Live & Voice Agents in ADK",
    slug: "evaluate-live-voice-agents-adk",
    excerpt: "Moving live voice agents from demo to production requires rigorous, automated testing to handle the unpredictability of real multi-turn conversations.",
    content: `
      <p>Moving live voice agents from demo to production requires rigorous, automated testing to handle the unpredictability of real multi-turn conversations.</p>
      <h2>Evaluation Challenges</h2>
      <p>Voice agents must handle diverse user inputs, including variations in accent, background noise, and different interaction patterns.</p>
      <h2>Production Best Practices</h2>
      <p>Successful deployment requires automated testing, real-user monitoring, and gradual rollout strategies.</p>
    `,
    category: { name: "AI", _id: "cat3" },
    tags: ["Voice", "Testing", "ADK"],
    featured: true,
    featuredImage: "https://placehold.co/720x400/0f3460/ffffff?text=Voice+Agents",
    createdAt: "2026-08-24T10:00:00Z",
    author: "Emily Watson",
    readTime: "6 min read",
    views: 1892
  },
  {
    _id: "4",
    title: "Jupiter's Great Red Spot: New Discoveries from JWST",
    slug: "jupiter-great-red-spot-jwst",
    excerpt: "The James Webb Space Telescope has revealed unprecedented details about Jupiter's Great Red Spot, challenging our understanding of the solar system's largest storm.",
    content: `
      <p>The James Webb Space Telescope has revealed unprecedented details about Jupiter's Great Red Spot, challenging our understanding of the solar system's largest storm.</p>
      <h2>JWST Observations</h2>
      <p>Using its powerful infrared instruments, JWST peered through Jupiter's upper atmosphere to reveal the internal structure of the Great Red Spot.</p>
      <h2>Implications</h2>
      <p>These findings will help scientists better understand the dynamics of Jupiter's atmosphere.</p>
    `,
    category: { name: "Space", _id: "cat4" },
    tags: ["Astronomy", "JWST", "Jupiter"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/1a1a2e/ffffff?text=Jupiter",
    createdAt: "2026-08-23T10:00:00Z",
    author: "Dr. Michael Torres",
    readTime: "7 min read",
    views: 3456
  },
  {
    _id: "5",
    title: "Agent Plugins: Package Your Skills, Tools, and More",
    slug: "agent-plugins-package-skills-tools",
    excerpt: "Agent Plugins 1.0.0 is a new, vendor-neutral directory specification for packaging Agent Skills and MCP servers into a single portable unit.",
    content: `
      <p>Agent Plugins 1.0.0 is a new, vendor-neutral directory specification backed by Google, Amazon, and Microsoft.</p>
      <h2>Why Agent Plugins?</h2>
      <p>By standardizing the manifest and utilizing a fixed directory layout, it eliminates the need for separate wrappers.</p>
      <h2>Getting Started</h2>
      <p>Google has joined as a Core Maintainer with support in Agents CLI and Data Agent Kit.</p>
    `,
    category: { name: "Technology", _id: "cat2" },
    tags: ["Plugins", "Tools", "MCP"],
    featured: true,
    featuredImage: "https://placehold.co/720x400/1a1a2e/ffffff?text=Agent+Plugins",
    createdAt: "2026-08-20T10:00:00Z",
    author: "David Kim",
    readTime: "5 min read",
    views: 4567
  },
  {
    _id: "6",
    title: "What is an Embedding Model and What is it Used For?",
    slug: "embedding-model-what-is-used-for",
    excerpt: "In modern AI architectures, embedding models serve as the foundational translators bridging raw unstructured data and downstream intelligent reasoning.",
    content: `
      <p>In modern AI architectures, embedding models serve as the foundational translators bridging raw unstructured data and downstream intelligent reasoning.</p>
      <h2>What is an Embedding Model?</h2>
      <p>Embedding models translate inputs including text, images, and audio into dense vector math.</p>
      <h2>Key Applications</h2>
      <ul>
        <li>Semantic Search</li>
        <li>Recommender Systems</li>
        <li>Intent Classification</li>
        <li>Personalized Content Discovery</li>
      </ul>
    `,
    category: { name: "AI", _id: "cat3" },
    tags: ["AI", "Embedding", "ML"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/16213e/ffffff?text=Embedding",
    createdAt: "2026-08-18T10:00:00Z",
    author: "Emma Thompson",
    readTime: "8 min read",
    views: 2891
  },
  {
    _id: "7",
    title: "Dark Matter: New Evidence from Gravitational Lensing",
    slug: "dark-matter-gravitational-lensing",
    excerpt: "Recent gravitational lensing observations provide the strongest evidence yet for the existence of dark matter, confirming Einstein's predictions.",
    content: `
      <p>Recent gravitational lensing observations provide the strongest evidence yet for the existence of dark matter.</p>
      <h2>What is Gravitational Lensing?</h2>
      <p>Gravitational lensing occurs when massive objects bend light from distant sources.</p>
      <h2>New Observations</h2>
      <p>Scientists have created a detailed map of dark matter distribution across a large region of the sky.</p>
    `,
    category: { name: "Astrology", _id: "cat1" },
    tags: ["Dark Matter", "Einstein"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/0b0b12/ffffff?text=Dark+Matter",
    createdAt: "2026-08-17T10:00:00Z",
    author: "Prof. Lisa Park",
    readTime: "9 min read",
    views: 4321
  },
  {
    _id: "8",
    title: "Exoplanet Discovery: Earth-like Planet in Habitable Zone",
    slug: "exoplanet-earth-like-habitable-zone",
    excerpt: "Astronomers have discovered a new Earth-like planet orbiting in the habitable zone of a nearby star, raising hopes for finding life beyond our solar system.",
    content: `
      <p>Astronomers have discovered a new Earth-like planet orbiting in the habitable zone of a nearby star.</p>
      <h2>Planet Characteristics</h2>
      <p>The planet is 1.5 times the mass of Earth and orbits at a distance that could allow liquid water.</p>
    `,
    category: { name: "Space", _id: "cat4" },
    tags: ["Exoplanets", "Habitable"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/0f3460/ffffff?text=Exoplanet",
    createdAt: "2026-08-16T10:00:00Z",
    author: "Dr. James Wilson",
    readTime: "6 min read",
    views: 5678
  },
  {
    _id: "9",
    title: "Asteroid Mining: The Future of Space Resources",
    slug: "asteroid-mining-future-space",
    excerpt: "Companies are developing technologies to mine asteroids for valuable minerals and metals, potentially revolutionizing space exploration.",
    content: `
      <p>Companies are developing technologies to mine asteroids for valuable minerals and metals.</p>
      <h2>Why Asteroids?</h2>
      <p>Near-Earth asteroids contain vast quantities of valuable resources including platinum group metals.</p>
    `,
    category: { name: "Space", _id: "cat4" },
    tags: ["Mining", "Resources"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/16213e/ffffff?text=Asteroid+Mining",
    createdAt: "2026-08-15T10:00:00Z",
    author: "Alex Rivera",
    readTime: "8 min read",
    views: 3210
  },
  {
    _id: "10",
    title: "Mars Missions: Next Generation Rocket Technology",
    slug: "mars-missions-next-generation-rockets",
    excerpt: "NASA and private companies are developing next-generation rockets that will make Mars missions more feasible and cost-effective than ever before.",
    content: `
      <p>NASA and private companies are developing next-generation rockets for Mars missions.</p>
      <h2>Next-Generation Rockets</h2>
      <p>Starship, SLS, and other super-heavy lift rockets are being developed.</p>
    `,
    category: { name: "Space", _id: "cat4" },
    tags: ["Mars", "Rockets", "NASA"],
    featured: false,
    featuredImage: "https://placehold.co/720x400/0b0b12/ffffff?text=Mars+Rocket",
    createdAt: "2026-08-14T10:00:00Z",
    author: "Emma Thompson",
    readTime: "7 min read",
    views: 6543
  }
];

const formatDate = (dateStr) => {
  if (!dateStr) return "Recent";
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  }).toUpperCase();
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return "https://placehold.co/600x400/E5E7EB/4B5563?text=No+Image";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
};

const Blogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState(STATIC_BLOGS);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategorySlug, setNewCategorySlug] = useState("");
  const [newCategoryDesc, setNewCategoryDesc] = useState("");
  const [addingCategory, setAddingCategory] = useState(false);
  const [categoryMessage, setCategoryMessage] = useState("");

  const POSTS_PER_PAGE = 3;

  // FETCH CATEGORIES - DYNAMIC
  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await axios.get(CATEGORIES_URL);
      
      let fetchedCategories = [];
      if (Array.isArray(response.data)) {
        fetchedCategories = response.data;
      } else if (response.data && typeof response.data === 'object') {
        fetchedCategories = response.data.categories || response.data.data || [];
      }
      
      const allCategories = [{ name: "All", _id: "all" }, ...fetchedCategories];
      setCategories(allCategories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([
        { name: "All", _id: "all" },
        { name: "Astrology", _id: "cat1" },
        { name: "Technology", _id: "cat2" },
        { name: "AI", _id: "cat3" },
        { name: "Space", _id: "cat4" }
      ]);
    } finally {
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Filter blogs
  const filteredPosts = blogs.filter((post) => {
    if (selectedCategory === "all") return true;
    const postCategoryId = post.category?._id || post.category;
    return postCategoryId === selectedCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const featuredPosts = blogs.filter(p => p.featured).slice(0, 5);
  const latestPosts = filteredPosts.slice(0, 3);

  const nextSlide = () => {
    if (featuredPosts.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    if (featuredPosts.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // ADD CATEGORY - POST
  const handleAddCategory = async (e) => {
    e.preventDefault();
    
    if (!newCategoryName.trim()) {
      setCategoryMessage("❌ Category name is required");
      return;
    }

    try {
      setAddingCategory(true);
      setCategoryMessage("");

      const categoryData = {
        name: newCategoryName.trim(),
        slug: newCategorySlug.trim() || newCategoryName.trim().toLowerCase().replace(/\s+/g, '-'),
        description: newCategoryDesc.trim()
      };

      await axios.post(CATEGORIES_ADD_URL, categoryData);
      
      setCategoryMessage("✅ Category added successfully!");
      setNewCategoryName("");
      setNewCategorySlug("");
      setNewCategoryDesc("");
      setShowAddCategory(false);
      fetchCategories();
    } catch (error) {
      console.error("Failed to add category:", error);
      setCategoryMessage("❌ Failed to add category. Please try again.");
    } finally {
      setAddingCategory(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-5 my-6 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION TITLE */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#3870A6]">
            Our Blog
          </h1>
        </div>

        {/* FEATURED + LATEST SLIDER */}
        {featuredPosts.length > 0 && (
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
                              src={post.featuredImage}
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
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="px-5 pt-4 pb-5">
                            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-[#3870A6] font-medium">
                              {post.category?.name && <span>{post.category.name}</span>}
                              {post.tags?.slice(0, 2).map((tag, i) => (
                                <span key={i} className="text-gray-400">• {tag}</span>
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
                              <span>{post.author || "Admin"}</span>
                              <span>•</span>
                              <span><Eye size={12} /> {post.views}</span>
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
                    {featuredPosts.map((post, i) => (
                      <button
                        key={post._id}
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
                {latestPosts.length > 0 ? (
                  latestPosts.map((post) => (
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
                          <span>{post.author || "Admin"}</span>
                          <span>•</span>
                          <span>{post.readTime || "4 min read"}</span>
                          <span>•</span>
                          <span><Eye size={12} /> {post.views}</span>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="py-3.5 text-gray-500 text-sm">No latest posts</li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* CATEGORIES SECTION */}
        <div>
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <p className="text-lg font-semibold">Trending Categories</p>
            <button
              onClick={() => setShowAddCategory(!showAddCategory)}
              className="flex items-center gap-2 px-4 py-2 bg-[#3870A6] text-white rounded-full text-sm hover:bg-[#2a5a80] transition"
            >
              <Plus size={16} /> Add Category
            </button>
          </div>

          {/* Add Category Form */}
          {showAddCategory && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#202124]">Add New Category</h3>
                <button 
                  onClick={() => setShowAddCategory(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={handleAddCategory} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => {
                      setNewCategoryName(e.target.value);
                      if (!newCategorySlug) {
                        setNewCategorySlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                      }
                    }}
                    placeholder="e.g., Astrology"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug (Optional)
                  </label>
                  <input
                    type="text"
                    value={newCategorySlug}
                    onChange={(e) => setNewCategorySlug(e.target.value)}
                    placeholder="e.g., astrology"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
                  />
                  <p className="text-xs text-gray-400 mt-1">Auto-generated from name if left empty</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    value={newCategoryDesc}
                    onChange={(e) => setNewCategoryDesc(e.target.value)}
                    placeholder="Brief description of the category"
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3870A6]"
                  />
                </div>

                {categoryMessage && (
                  <div className={`p-3 rounded-lg ${categoryMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {categoryMessage}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={addingCategory}
                    className={`px-6 py-2 bg-[#3870A6] text-white rounded-lg hover:bg-[#2a5a80] transition ${
                      addingCategory ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {addingCategory ? 'Adding...' : 'Add Category'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddCategory(false);
                      setNewCategoryName("");
                      setNewCategorySlug("");
                      setNewCategoryDesc("");
                      setCategoryMessage("");
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3">
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

        {/* BLOG CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((blog, idx) => (
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
                      src={blog?.featuredImage}
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
                      {blog?.tags?.map((tag) => `#${tag}`).join(" ")}
                    </p>
                    <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#3870A6]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {blog?.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span>{formatDate(blog.createdAt)}</span>
                      <span>•</span>
                      <span><Eye size={12} /> {blog.views}</span>
                    </div>
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

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} 
              className={`px-5 py-2 rounded-full border text-sm font-medium ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} 
              className={`px-5 py-2 rounded-full border text-sm font-medium ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              Next
            </button>
          </div>
        )}

        <div className="text-center">
          <Link to="/community/blog" className="text-[#3870A6] font-medium hover:underline">
            view all blogs →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;