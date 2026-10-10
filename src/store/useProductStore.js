


import { create } from 'zustand';

// API Base URL Configuration (Environment Variable ready with Localhost Fallback)
const API_BASE_URL = 
  (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) ||
  (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  'https://shopbackendlive.onrender.com';

/**
 * Helper: Normalizes image field to guarantee a valid image URL string.
 */
const parseImage = (img) => {
  if (!img) return '/placeholder.jpg';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && img.url) return img.url;
  if (Array.isArray(img) && img.length > 0) {
    return typeof img[0] === 'string' ? img[0] : img[0]?.url || '/placeholder.jpg';
  }
  return '/placeholder.jpg';
};

/**
 * Fallback Category Mapper:
 * Runs ONLY if backend product does NOT have a valid populated category object/name.
 */
const getCategoryFromProduct = (product) => {
  const name = product?.name?.toLowerCase() || '';
  const desc = product?.description?.toLowerCase() || '';
  const combined = `${name} ${desc}`;

  // 🟢 Yantra
  if (combined.includes('yantra')) {
    return 'Yantra';
  }

  // 🟢 Puja Kits
  if (
    combined.includes('puja kit') || combined.includes('ritual kit') ||
    combined.includes('vrat') || combined.includes('havan') ||
    combined.includes('satyanarayan') || combined.includes('griha pravesh') ||
    combined.includes('navratri') || combined.includes('durga') ||
    combined.includes('ganesh puja') || combined.includes('diwali') ||
    combined.includes('laxmi ganesha puja')
  ) {
    return 'Puja Kits';
  }

  // 🟢 Rudraksha & Malas
  if (
    combined.includes('rudraksha') || combined.includes('mala') ||
    combined.includes('tulsi') || combined.includes('sphatik') ||
    combined.includes('hakik') || combined.includes('gemstone') ||
    combined.includes('lotus') || combined.includes('kamal gatta') ||
    combined.includes('spiritual healing') || combined.includes('bracelet')
  ) {
    return 'Rudraksha & Malas';
  }

  // 🟢 Festival Collections
  if (
    combined.includes('janmashtami') || combined.includes('karwa chauth') ||
    combined.includes('holi') || combined.includes('gulal') ||
    combined.includes('diwali') || combined.includes('laxmi ganesha') ||
    combined.includes('akhand jyoti') || combined.includes('terracotta diya') ||
    combined.includes('coin') || combined.includes('deepawali')
  ) {
    return 'Festival Collections';
  }

  // 🟢 Idols & Murtis
  if (
    combined.includes('idol') || combined.includes('murti') ||
    combined.includes('statue') || combined.includes('shivling') ||
    combined.includes('ganesha') || combined.includes('hanuman') ||
    combined.includes('saraswati') || combined.includes('krishna') ||
    combined.includes('laddu gopal') || (combined.includes('brass') && combined.includes('god'))
  ) {
    return 'Idols & Murtis';
  }

  // 🟢 Astrology Remedies
  if (
    combined.includes('nazar') || combined.includes('battu') ||
    combined.includes('tortoise') || combined.includes('kachhua') ||
    combined.includes('gomti chakra') || combined.includes('haldi') ||
    combined.includes('parad') || combined.includes('mercury') ||
    combined.includes('horseshoe') || combined.includes('ghode ki naal') ||
    combined.includes('black haldi') || combined.includes('kali haldi')
  ) {
    return 'Astrology Remedies';
  }

  // 🟢 Gemstones
  if (
    combined.includes('ruby') || combined.includes('manik') ||
    combined.includes('emerald') || combined.includes('panna') ||
    combined.includes('sapphire') || combined.includes('neelam') ||
    combined.includes('pearl') || combined.includes('moti') ||
    combined.includes('pukhraj') || combined.includes('yellow sapphire') ||
    combined.includes('gomed') || combined.includes('hessonite')
  ) {
    return 'Gemstones';
  }

  // 🟢 Puja Samagri
  if (
    combined.includes('roli') || combined.includes('chawal') ||
    combined.includes('ghee') || combined.includes('agarbatti') ||
    combined.includes('incense') || combined.includes('camphor') ||
    combined.includes('kapoor') || combined.includes('chandan') ||
    combined.includes('sandalwood') || combined.includes('gangajal') ||
    combined.includes('diya batti') || combined.includes('batti')
  ) {
    return 'Puja Samagri';
  }

  // 🔵 Default Category
  return 'Spiritual Accessories';
};

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  hasFetched: false, // 🛡️ NEW: Stops infinite re-fetches and 429 rate-limit errors

  // 🔄 Fetch all products from API & normalize data
  fetchProducts: async () => {
    const currentState = get();
    
    // 🛑 AGAR PEHLE SE FETCH HO CHUKA HAI YA LOADING CHAL RAHI HAI, TOH DOBARA API HIT MAT KARO
    if (currentState.hasFetched || currentState.loading) {
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await fetch(`${API_BASE_URL}/api/products/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle 401 Unauthorized Response safely
      if (response.status === 401) {
        console.warn('🔑 Products API returned 401 Unauthorized.');
        set({
          products: [],
          loading: false,
          hasFetched: true,
          error: 'Authentication required for products access',
        });
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP Error Status: ${response.status}`);
      }

      const data = await response.json();

      // Flexible extraction: handles array at root OR inside data.products
      const rawProducts = Array.isArray(data)
        ? data
        : Array.isArray(data?.products)
        ? data.products
        : [];

      if (rawProducts.length > 0) {
        // Safe mapping & fallback category resolution
        const normalizedProducts = rawProducts.map((product) => {
          let categoryObj = null;

          // Check if API populated a valid Category object with a name
          if (product.category && typeof product.category === 'object' && product.category.name) {
            categoryObj = {
              _id: product.category._id || `cat_${product.category.name}`,
              name: product.category.name,
              slug: product.category.slug || product.category.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'),
            };
          } else {
            // Priority Fallback via string match
            const fallbackCatName = getCategoryFromProduct(product);
            categoryObj = {
              _id: typeof product.category === 'string' ? product.category : `manual_${fallbackCatName}`,
              name: fallbackCatName,
              slug: fallbackCatName.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'),
            };
          }

          return {
            ...product,
            image: parseImage(product.image),
            category: categoryObj,
            price: Number(product.price) || 0,
            stock: Number(product.stock) || 0,
            rating: Number(product.rating) || 0,
          };
        });

        console.log(`📦 Store loaded ${normalizedProducts.length} normalized products successfully.`);

        set({
          products: normalizedProducts,
          loading: false,
          hasFetched: true, // 🟢 Mark as successfully fetched
          error: null,
        });
      } else {
        set({
          products: [],
          loading: false,
          hasFetched: true, // Mark fetched even if empty to prevent loops
          error: 'No products returned from API',
        });
      }
    } catch (error) {
      console.error('❌ Products Fetch Error:', error);
      set({
        error: error.message || 'Failed to load products from API',
        loading: false,
        hasFetched: true, // Mark fetched on error to stop infinite spamming
      });
    }
  },

  // 🔍 Get product by ID
  getProductById: (productId) => {
    if (!productId) return null;
    const { products } = get();
    return products.find((product) => String(product._id) === String(productId)) || null;
  },

  // 📂 Get products by category name
  getProductsByCategory: (categoryName) => {
    const { products } = get();
    if (!categoryName || categoryName.trim() === '' || categoryName === 'All') {
      return products;
    }

    const targetCategory = categoryName.toLowerCase().trim();
    return products.filter(
      (product) => product.category?.name?.toLowerCase().trim() === targetCategory
    );
  },

  // 🌟 Get best sellers (top 4 items)
  getBestSellers: () => {
    const { products } = get();
    return products.slice(0, 4);
  },

  // ✨ Get featured products (rating >= 4 or top 6 items)
  getFeaturedProducts: () => {
    const { products } = get();
    const featured = products.filter((p) => (p.rating || 0) >= 4);
    return featured.length > 0 ? featured.slice(0, 6) : products.slice(0, 6);
  },

  // 🔗 Get related products in the same category (excluding current item)
  getRelatedProducts: (productId, limit = 4) => {
    const { products, getProductById } = get();
    const currentProduct = getProductById(productId);

    if (!currentProduct || !currentProduct.category?.name) return [];

    const categoryName = currentProduct.category.name.toLowerCase();

    return products
      .filter(
        (p) =>
          String(p._id) !== String(productId) &&
          p.category?.name?.toLowerCase() === categoryName
      )
      .slice(0, limit);
  },

  // 🔎 Search products by Name, Description, or Category
  searchProducts: (searchTerm) => {
    const { products } = get();
    if (!searchTerm || !searchTerm.trim()) {
      return products;
    }

    const term = searchTerm.toLowerCase().trim();
    return products.filter((product) => {
      const nameMatch = product.name?.toLowerCase().includes(term);
      const descMatch = product.description?.toLowerCase().includes(term);
      const catMatch = product.category?.name?.toLowerCase().includes(term);

      return nameMatch || descMatch || catMatch;
    });
  },

  // 💰 Get products by Price Range
  getProductsByPrice: (minPrice = 0, maxPrice = Infinity) => {
    const { products } = get();
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  },

  // 📊 Get all categories with product count (Useful for Sidebar counts)
  getCategoriesWithCount: () => {
    const { products } = get();
    const categoryCount = {};

    products.forEach((product) => {
      const catName = product.category?.name || 'Uncategorized';
      categoryCount[catName] = (categoryCount[catName] || 0) + 1;
    });

    return categoryCount;
  },

  // 🔢 Get total count of loaded products
  getTotalProducts: () => {
    const { products } = get();
    return products.length;
  },

  // 🔄 Reset state
  resetStore: () => {
    set({
      products: [],
      loading: false,
      error: null,
      hasFetched: false, // Reset flag on store reset
    });
  },
}));

export default useProductStore;