import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, Calendar, User, Clock, Eye, Heart, Bookmark, Share2,
  ChevronRight, Home, Tag, Award, MapPin, Copy, Check, ThumbsUp, Send
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000";

// ============================================
// SEO HELPER - Dynamic Meta Tags
// ============================================
const updateMetaTags = (post) => {
  if (!post) return;

  document.title = `${post.title} | AstroPulse - Spiritual Astrology Blog`;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', post.excerpt || post.title);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', `astrology, spiritual, zodiac, ${post.tags?.join(', ') || ''}`);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', post.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', post.excerpt || post.title);

  let ogImage = document.querySelector('meta[property="og:image"]');
  if (!ogImage) {
    ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    document.head.appendChild(ogImage);
  }
  ogImage.setAttribute('content', post.featuredImage || 'https://placehold.co/1200x630/8B3A2B/ffffff?text=AstroPulse');

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', window.location.href);

  let ogType = document.querySelector('meta[property="og:type"]');
  if (!ogType) {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    document.head.appendChild(ogType);
  }
  ogType.setAttribute('content', 'article');

  let twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (!twitterCard) {
    twitterCard = document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    document.head.appendChild(twitterCard);
  }
  twitterCard.setAttribute('content', 'summary_large_image');

  let existingScript = document.querySelector('#blog-schema');
  if (existingScript) existingScript.remove();

  const schemaScript = document.createElement('script');
  schemaScript.id = 'blog-schema';
  schemaScript.type = 'application/ld+json';
  schemaScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": post.featuredImage || 'https://placehold.co/1200x630/8B3A2B/ffffff?text=AstroPulse',
    "datePublished": post.createdAt,
    "dateModified": post.updatedAt || post.createdAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "AstroPulse Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AstroPulse",
      "logo": {
        "@type": "ImageObject",
        "url": "https://placehold.co/logo"
      }
    }
  });
  document.head.appendChild(schemaScript);
};

// ============================================
// ASTROLOGY BLOG DATA
// ============================================
const STATIC_BLOGS = [
  {
    _id: "1",
    title: "The 12 Zodiac Signs: A Complete Astrological Guide",
    slug: "12-zodiac-signs-complete-astrological-guide",
    excerpt: "Discover the complete guide to all 12 zodiac signs - their personalities, strengths, weaknesses, and compatibility with others.",
    content: `
      <p>Astrology has been a guiding force for humanity for thousands of years. The 12 zodiac signs represent fundamental archetypes that shape our personalities, relationships, and life paths.</p>
      
      <h2>🔥 Aries (March 21 - April 19)</h2>
      <p><strong>Element:</strong> Fire | <strong>Ruling Planet:</strong> Mars | <strong>Quality:</strong> Cardinal</p>
      <p>Aries are natural-born leaders with boundless energy and enthusiasm. They are courageous, determined, and confident. However, they can also be impatient and impulsive. Aries thrives on challenges and loves to be first in everything.</p>
      
      <div class="highlight-box">
        <h4>🌟 Aries Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Courageous, determined, confident</li>
          <li><strong>Weaknesses:</strong> Impatient, impulsive, short-tempered</li>
          <li><strong>Likes:</strong> Challenges, leadership, adventure</li>
          <li><strong>Dislikes:</strong> Inactivity, waiting, following others</li>
        </ul>
      </div>

      <h2>🌿 Taurus (April 20 - May 20)</h2>
      <p><strong>Element:</strong> Earth | <strong>Ruling Planet:</strong> Venus | <strong>Quality:</strong> Fixed</p>
      <p>Taurus individuals are practical, reliable, and patient. They have a deep appreciation for beauty, comfort, and the finer things in life. They are strong-willed and persistent, but can also be stubborn and possessive.</p>
      
      <div class="highlight-box">
        <h4>🌟 Taurus Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Reliable, patient, practical</li>
          <li><strong>Weaknesses:</strong> Stubborn, possessive, lazy</li>
          <li><strong>Likes:</strong> Nature, luxury, stability</li>
          <li><strong>Dislikes:</strong> Change, rushing, uncertainty</li>
        </ul>
      </div>

      <h2>💨 Gemini (May 21 - June 20)</h2>
      <p><strong>Element:</strong> Air | <strong>Ruling Planet:</strong> Mercury | <strong>Quality:</strong> Mutable</p>
      <p>Gemini are curious, adaptable, and highly intellectual. They love to communicate, learn, and socialize. Their dual nature makes them versatile but can also lead to inconsistency and superficiality.</p>
      
      <div class="highlight-box">
        <h4>🌟 Gemini Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Curious, adaptable, intelligent</li>
          <li><strong>Weaknesses:</strong> Inconsistent, superficial, restless</li>
          <li><strong>Likes:</strong> Conversation, variety, learning</li>
          <li><strong>Dislikes:</strong> Boredom, routine, being alone</li>
        </ul>
      </div>

      <h2>🌊 Cancer (June 21 - July 22)</h2>
      <p><strong>Element:</strong> Water | <strong>Ruling Planet:</strong> Moon | <strong>Quality:</strong> Cardinal</p>
      <p>Cancer is deeply emotional, intuitive, and nurturing. They are protective of their loved ones and highly sensitive to their environment. Their mood swings can be challenging, but their compassion is unmatched.</p>
      
      <div class="highlight-box">
        <h4>🌟 Cancer Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Emotional, intuitive, caring</li>
          <li><strong>Weaknesses:</strong> Moody, overly sensitive, clingy</li>
          <li><strong>Likes:</strong> Home, family, emotional security</li>
          <li><strong>Dislikes:</strong> Criticism, rejection, instability</li>
        </ul>
      </div>

      <h2>🔥 Leo (July 23 - August 22)</h2>
      <p><strong>Element:</strong> Fire | <strong>Ruling Planet:</strong> Sun | <strong>Quality:</strong> Fixed</p>
      <p>Leo is charismatic, creative, and generous. They love being in the spotlight and have natural leadership abilities. Their confidence can sometimes come across as arrogance, but their warmth and loyalty are undeniable.</p>
      
      <div class="highlight-box">
        <h4>🌟 Leo Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Creative, confident, loyal</li>
          <li><strong>Weaknesses:</strong> Arrogant, stubborn, dramatic</li>
          <li><strong>Likes:</strong> Recognition, luxury, adventure</li>
          <li><strong>Dislikes:</strong> Being ignored, criticism, routine</li>
        </ul>
      </div>

      <h2>🌿 Virgo (August 23 - September 22)</h2>
      <p><strong>Element:</strong> Earth | <strong>Ruling Planet:</strong> Mercury | <strong>Quality:</strong> Mutable</p>
      <p>Virgo is analytical, practical, and detail-oriented. They have a strong sense of duty and strive for perfection in everything they do. Their high standards can lead to self-criticism and worry.</p>
      
      <div class="highlight-box">
        <h4>🌟 Virgo Traits:</h4>
        <ul>
          <li><strong>Strengths:</strong> Analytical, practical, hardworking</li>
          <li><strong>Weaknesses:</strong> Overcritical, perfectionistic, worrying</li>
          <li><strong>Likes:</strong> Order, cleanliness, helping others</li>
          <li><strong>Dislikes:</strong> Mess, inefficiency, laziness</li>
        </ul>
      </div>
    `,
    category: { name: "Zodiac Signs", _id: "cat1", slug: "zodiac-signs" },
    tags: ["Zodiac", "Astrology", "Horoscope", "Signs"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/1a1a2e/ffffff?text=12+Zodiac+Signs",
    createdAt: "2026-09-01T10:00:00Z",
    updatedAt: "2026-09-01T10:00:00Z",
    author: { 
      name: "Maya Sharma", 
      bio: "Vedic Astrologer with 15+ years of experience. Specializes in birth chart analysis and spiritual counseling.",
      avatar: "https://ui-avatars.com/api/?name=Maya+Sharma&background=8B3A2B&color=fff&size=128",
      role: "Senior Astrologer",
      location: "Jaipur, India",
      website: "https://mayasharma.com",
      social: {
        twitter: "https://twitter.com/mayasharma",
        linkedin: "https://linkedin.com/in/mayasharma"
      }
    },
    readTime: "12 min read",
    views: 4567,
    likes: 345,
    comments: 89
  },
  {
    _id: "2",
    title: "The Astrological Houses: Understanding Your Life's Blueprint",
    slug: "astrological-houses-understanding-life-blueprint",
    excerpt: "Learn about the 12 astrological houses and how they reveal different aspects of your life journey.",
    content: `
      <p>The 12 astrological houses are the cosmic map of your life. Each house represents a different area of your existence, from your personality to your career, relationships, and spiritual growth.</p>
      
      <h2>🏠 1st House - The House of Self</h2>
      <p><strong>Also known as:</strong> Ascendant | <strong>Ruling Sign:</strong> Aries</p>
      <p>The 1st house represents your identity, appearance, and how you present yourself to the world. It's the mask you wear and the first impression you make on others.</p>
      
      <div class="highlight-box">
        <h4>🔮 1st House Rules:</h4>
        <ul>
          <li>Physical appearance and health</li>
          <li>Personality and temperament</li>
          <li>How others perceive you</li>
          <li>Your approach to new beginnings</li>
        </ul>
      </div>

      <h2>💰 2nd House - The House of Values</h2>
      <p><strong>Ruling Sign:</strong> Taurus</p>
      <p>This house governs your personal finances, values, and what you hold dear. It represents your relationship with money, possessions, and self-worth.</p>
      
      <div class="highlight-box">
        <h4>🔮 2nd House Rules:</h4>
        <ul>
          <li>Financial security and wealth</li>
          <li>Personal values and priorities</li>
          <li>Material possessions</li>
          <li>Self-esteem and self-worth</li>
        </ul>
      </div>

      <h2>💬 3rd House - The House of Communication</h2>
      <p><strong>Ruling Sign:</strong> Gemini</p>
      <p>The 3rd house covers communication, siblings, short-distance travel, and the way you think and express yourself. It's your intellectual playground.</p>
      
      <div class="highlight-box">
        <h4>🔮 3rd House Rules:</h4>
        <ul>
          <li>Communication style</li>
          <li>Siblings and neighbors</li>
          <li>Short journeys</li>
          <li>Learning and education</li>
        </ul>
      </div>

      <h2>🏡 4th House - The House of Home</h2>
      <p><strong>Ruling Sign:</strong> Cancer</p>
      <p>This house represents your home, family, roots, and emotional foundation. It's where you find comfort and security in life.</p>
      
      <div class="highlight-box">
        <h4>🔮 4th House Rules:</h4>
        <ul>
          <li>Home and domestic life</li>
          <li>Family and ancestral roots</li>
          <li>Emotional security</li>
          <li>Property and real estate</li>
        </ul>
      </div>

      <h2>❤️ 5th House - The House of Creativity</h2>
      <p><strong>Ruling Sign:</strong> Leo</p>
      <p>The 5th house is all about creativity, romance, children, and the things that bring you joy. It's your inner child and your capacity for love.</p>
      
      <div class="highlight-box">
        <h4>🔮 5th House Rules:</h4>
        <ul>
          <li>Creative expression</li>
          <li>Romance and pleasure</li>
          <li>Children and parenthood</li>
          <li>Hobbies and entertainment</li>
        </ul>
      </div>

      <h2>🧘 6th House - The House of Health</h2>
      <p><strong>Ruling Sign:</strong> Virgo</p>
      <p>This house governs health, daily routines, work, and service to others. It's about how you maintain your physical and mental well-being.</p>
      
      <div class="highlight-box">
        <h4>🔮 6th House Rules:</h4>
        <ul>
          <li>Health and wellness</li>
          <li>Daily routines and habits</li>
          <li>Work and service</li>
          <li>Animals and pets</li>
        </ul>
      </div>
    `,
    category: { name: "Astrological Houses", _id: "cat2", slug: "astrological-houses" },
    tags: ["Houses", "Astrology", "Life", "Blueprint"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/16213e/ffffff?text=Astrological+Houses",
    createdAt: "2026-08-30T10:00:00Z",
    updatedAt: "2026-08-30T10:00:00Z",
    author: { 
      name: "Rahul Patel", 
      bio: "Vedic Astrology Expert specializing in house interpretation and life path analysis.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Patel&background=0A66C2&color=fff&size=128",
      role: "Astrology Consultant",
      location: "Delhi, India",
      website: "https://rahulpatel.com",
      social: {
        twitter: "https://twitter.com/rahulpatel",
        linkedin: "https://linkedin.com/in/rahulpatel"
      }
    },
    readTime: "10 min read",
    views: 3456,
    likes: 267,
    comments: 56
  },
  {
    _id: "3",
    title: "What is an Astrological Birth Chart and How to Read It?",
    slug: "what-is-astrological-birth-chart-how-to-read",
    excerpt: "A complete guide to understanding your birth chart - the cosmic map of your soul's journey.",
    content: `
      <p>Your birth chart is like a cosmic fingerprint - unique to you and your journey. It reveals your strengths, challenges, and life purpose.</p>
      
      <h2>🔮 What is a Birth Chart?</h2>
      <p>A birth chart (also called a natal chart) is a snapshot of the sky at the exact moment and place of your birth. It shows the positions of the sun, moon, and planets through the zodiac signs and astrological houses.</p>
      
      <div class="highlight-box">
        <h4>✨ Key Components:</h4>
        <ul>
          <li><strong>Sun Sign:</strong> Your core identity</li>
          <li><strong>Moon Sign:</strong> Your emotions</li>
          <li><strong>Rising Sign:</strong> Your outer personality</li>
          <li><strong>Planets:</strong> Different aspects of life</li>
        </ul>
      </div>

      <h2>🌞 How to Read Your Birth Chart</h2>
      <p>Reading a birth chart requires understanding three key elements - the planets, the signs, and the houses.</p>
      
      <div class="highlight-box">
        <h4>📖 Reading Steps:</h4>
        <ul>
          <li><strong>Step 1:</strong> Find your Sun sign (your basic personality)</li>
          <li><strong>Step 2:</strong> Find your Moon sign (your emotions)</li>
          <li><strong>Step 3:</strong> Find your Rising sign (your outward expression)</li>
          <li><strong>Step 4:</strong> Look at planet placements in different houses</li>
          <li><strong>Step 5:</strong> Check aspects between planets</li>
        </ul>
      </div>
    `,
    category: { name: "Birth Chart", _id: "cat3", slug: "birth-chart" },
    tags: ["Birth Chart", "Astrology", "Reading", "Guide"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/0f3460/ffffff?text=Birth+Chart",
    createdAt: "2026-08-28T10:00:00Z",
    updatedAt: "2026-08-28T10:00:00Z",
    author: { 
      name: "Dr. Ananya Gupta", 
      bio: "Ph.D. in Vedic Astrology from Banaras Hindu University. Specializes in birth chart interpretation.",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Gupta&background=34A853&color=fff&size=128",
      role: "Vedic Astrologer",
      location: "Varanasi, India",
      website: "https://ananyagupta.com",
      social: {
        twitter: "https://twitter.com/ananyagupta",
        linkedin: "https://linkedin.com/in/ananyagupta"
      }
    },
    readTime: "9 min read",
    views: 2891,
    likes: 198,
    comments: 67
  },
  {
    _id: "4",
    title: "Mercury Retrograde: What It Means and How to Handle It",
    slug: "mercury-retrograde-what-means-how-handle",
    excerpt: "Everything you need to know about Mercury retrograde periods and how to navigate them smoothly.",
    content: `
      <p>Mercury retrograde is one of the most talked-about astrological events. But what does it really mean, and how can you make the most of it?</p>
      
      <h2>🔮 What is Mercury Retrograde?</h2>
      <p>Mercury retrograde happens when the planet Mercury appears to move backward in the sky. This optical illusion occurs 3-4 times a year and lasts for about three weeks.</p>
      
      <div class="highlight-box">
        <h4>⚠️ Mercury Retrograde Effects:</h4>
        <ul>
          <li><strong>Communication:</strong> Misunderstandings and delays</li>
          <li><strong>Technology:</strong> Glitches and breakdowns</li>
          <li><strong>Travel:</strong> Delays and cancellations</li>
          <li><strong>Relationships:</strong> Miscommunications</li>
        </ul>
      </div>

      <h2>✨ How to Handle Mercury Retrograde</h2>
      
      <div class="highlight-box">
        <h4>✅ Do's:</h4>
        <ul>
          <li>Double-check all communications</li>
          <li>Back up your important data</li>
          <li>Reflect and review past decisions</li>
          <li>Be patient with others</li>
        </ul>
        <h4>❌ Don'ts:</h4>
        <ul>
          <li>Sign important contracts</li>
          <li>Make major purchases</li>
          <li>Start new projects</li>
          <li>Make impulsive decisions</li>
        </ul>
      </div>
    `,
    category: { name: "Planetary Transits", _id: "cat4", slug: "planetary-transits" },
    tags: ["Mercury", "Retrograde", "Astrology", "Planets"],
    featured: false,
    featuredImage: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Mercury+Retrograde",
    createdAt: "2026-08-25T10:00:00Z",
    updatedAt: "2026-08-25T10:00:00Z",
    author: { 
      name: "Sujata Reddy", 
      bio: "Planetary Astrologer specializing in transit predictions and life guidance.",
      avatar: "https://ui-avatars.com/api/?name=Sujata+Reddy&background=EA4335&color=fff&size=128",
      role: "Planetary Astrologer",
      location: "Hyderabad, India",
      website: "https://sujatareddy.com",
      social: {
        twitter: "https://twitter.com/sujatareddy",
        linkedin: "https://linkedin.com/in/sujatareddy"
      }
    },
    readTime: "6 min read",
    views: 5678,
    likes: 456,
    comments: 123
  },
  {
    _id: "5",
    title: "Rudraksha Malas: Spiritual Power of Divine Beads",
    slug: "rudraksha-malas-spiritual-power-divine-beads",
    excerpt: "Discover the spiritual significance of Rudraksha beads and how to use them for meditation and healing.",
    content: `
      <p>Rudraksha beads are sacred seeds from the Rudraksha tree. They are worn by spiritual seekers for protection, peace, and spiritual growth.</p>
      
      <h2>🔱 What is Rudraksha?</h2>
      <p>Rudraksha means "tear of Lord Shiva" in Sanskrit. These beads are known for their powerful spiritual and healing properties.</p>
      
      <div class="highlight-box">
        <h4>🕉️ Types of Rudraksha:</h4>
        <ul>
          <li><strong>5 Mukhi:</strong> Most common, for peace and prosperity</li>
          <li><strong>6 Mukhi:</strong> For mental clarity and wisdom</li>
          <li><strong>7 Mukhi:</strong> For spiritual awakening</li>
          <li><strong>8 Mukhi:</strong> For protection from negative energies</li>
          <li><strong>9 Mukhi:</strong> For strength and vitality</li>
        </ul>
      </div>

      <h2>✨ How to Use Rudraksha</h2>
      
      <div class="highlight-box">
        <h4>🙏 Benefits:</h4>
        <ul>
          <li>Calms the mind and reduces stress</li>
          <li>Enhances meditation practice</li>
          <li>Protects from negative energies</li>
          <li>Improves focus and concentration</li>
          <li>Promotes spiritual growth</li>
        </ul>
      </div>
    `,
    category: { name: "Spiritual Tools", _id: "cat5", slug: "spiritual-tools" },
    tags: ["Rudraksha", "Beads", "Meditation", "Spiritual"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/0b0b12/ffffff?text=Rudraksha",
    createdAt: "2026-08-22T10:00:00Z",
    updatedAt: "2026-08-22T10:00:00Z",
    author: { 
      name: "Swami Vivekananda", 
      bio: "Spiritual teacher and meditation expert with 20+ years of experience.",
      avatar: "https://ui-avatars.com/api/?name=Swami+Vivekananda&background=FBBC05&color=000&size=128",
      role: "Spiritual Guide",
      location: "Rishikesh, India",
      website: "https://swamivivekananda.com",
      social: {
        twitter: "https://twitter.com/swamivivekananda",
        linkedin: "https://linkedin.com/in/swamivivekananda"
      }
    },
    readTime: "7 min read",
    views: 4321,
    likes: 345,
    comments: 89
  },
  {
    _id: "6",
    title: "Ganesha Mantra: Powerful Chant for Removing Obstacles",
    slug: "ganesha-mantra-powerful-chant-removing-obstacles",
    excerpt: "Learn the powerful Ganesha mantra to remove obstacles and bring success in your life.",
    content: `
      <p>Lord Ganesha is the remover of obstacles and the god of new beginnings. His mantras are powerful tools for overcoming challenges.</p>
      
      <h2>🕉️ Ganesha Mantra</h2>
      <p><strong>Om Gam Ganapataye Namaha</strong></p>
      <p>This is the most powerful Ganesha mantra for removing obstacles and bringing success.</p>
      
      <div class="highlight-box">
        <h4>🔱 Benefits of Chanting:</h4>
        <ul>
          <li>Removes obstacles from your path</li>
          <li>Brings success in new ventures</li>
          <li>Enhances wisdom and intelligence</li>
          <li>Protects from negative energies</li>
          <li>Brings peace and prosperity</li>
        </ul>
      </div>

      <h2>✨ How to Chant</h2>
      <p>For best results, chant this mantra 108 times daily, especially during early morning hours. You can chant it with a Rudraksha mala for maximum benefit.</p>
    `,
    category: { name: "Mantras", _id: "cat6", slug: "mantras" },
    tags: ["Ganesha", "Mantra", "Chanting", "Spiritual"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Ganesha+Mantra",
    createdAt: "2026-08-19T10:00:00Z",
    updatedAt: "2026-08-19T10:00:00Z",
    author: { 
      name: "Priya Singh", 
      bio: "Mantra meditation expert and spiritual counselor.",
      avatar: "https://ui-avatars.com/api/?name=Priya+Singh&background=4285F4&color=fff&size=128",
      role: "Mantra Teacher",
      location: "Mumbai, India",
      website: "https://priyasingh.com",
      social: {
        twitter: "https://twitter.com/priyasingh",
        linkedin: "https://linkedin.com/in/priyasingh"
      }
    },
    readTime: "5 min read",
    views: 7890,
    likes: 678,
    comments: 234
  },
  {
    _id: "7",
    title: "What is Astrology? Ancient Wisdom for Modern Times",
    slug: "what-is-astrology-ancient-wisdom-modern-times",
    excerpt: "Understanding the ancient science of astrology and how it can guide your life today.",
    content: `
      <p>Astrology is the ancient study of the movements and positions of celestial bodies and their influence on human affairs.</p>
      
      <h2>🔮 The Origins of Astrology</h2>
      <p>Astrology dates back to ancient civilizations including the Babylonians, Egyptians, and Indians. It has been used for thousands of years to understand human behavior and predict events.</p>
      
      <div class="highlight-box">
        <h4>📜 History:</h4>
        <ul>
          <li><strong>Babylonian:</strong> First astrological system (1800 BCE)</li>
          <li><strong>Vedic:</strong> Ancient Indian astrology (1500 BCE)</li>
          <li><strong>Greek:</strong> Western astrology (400 BCE)</li>
          <li><strong>Medieval:</strong> Islamic and European astrology</li>
        </ul>
      </div>

      <h2>✨ Modern Astrology</h2>
      <p>Today, astrology is used for self-discovery, relationship guidance, career planning, and spiritual growth. It's a powerful tool for understanding yourself and your life journey.</p>
    `,
    category: { name: "Basics", _id: "cat7", slug: "basics" },
    tags: ["Astrology", "History", "Wisdom", "Guide"],
    featured: false,
    featuredImage: "https://placehold.co/1200x630/16213e/ffffff?text=Astrology+Basics",
    createdAt: "2026-08-16T10:00:00Z",
    updatedAt: "2026-08-16T10:00:00Z",
    author: { 
      name: "Dr. Meera Nair", 
      bio: "Historian and astrologer specializing in ancient astrological traditions.",
      avatar: "https://ui-avatars.com/api/?name=Meera+Nair&background=34A853&color=fff&size=128",
      role: "Astrology Historian",
      location: "Chennai, India",
      website: "https://meeranair.com",
      social: {
        twitter: "https://twitter.com/meeranair",
        linkedin: "https://linkedin.com/in/meeranair"
      }
    },
    readTime: "8 min read",
    views: 3456,
    likes: 234,
    comments: 67
  },
  {
    _id: "8",
    title: "Gemstones in Astrology: Healing Power of Crystals",
    slug: "gemstones-astrology-healing-power-crystals",
    excerpt: "Discover how gemstones and crystals can heal and balance your energy based on your astrological chart.",
    content: `
      <p>Gemstones have been used for centuries for their healing and protective properties. In astrology, specific stones are associated with different planets and signs.</p>
      
      <h2>💎 Planetary Gemstones</h2>
      
      <div class="highlight-box">
        <h4>🌟 Gemstones by Planet:</h4>
        <ul>
          <li><strong>Ruby (Sun):</strong> Boosts vitality and confidence</li>
          <li><strong>Pearl (Moon):</strong> Enhances intuition and emotional balance</li>
          <li><strong>Red Coral (Mars):</strong> Increases courage and energy</li>
          <li><strong>Emerald (Mercury):</strong> Improves communication and intellect</li>
          <li><strong>Yellow Sapphire (Jupiter):</strong> Brings wisdom and prosperity</li>
          <li><strong>Diamond (Venus):</strong> Enhances love and beauty</li>
          <li><strong>Blue Sapphire (Saturn):</strong> Provides protection and discipline</li>
        </ul>
      </div>

      <h2>✨ How to Use Gemstones</h2>
      <p>For best results, wear gemstones as rings or pendants after proper energization and astrological consultation. Each stone should be set in a specific metal for maximum benefit.</p>
    `,
    category: { name: "Gemstones", _id: "cat8", slug: "gemstones" },
    tags: ["Gemstones", "Crystals", "Healing", "Astrology"],
    featured: false,
    featuredImage: "https://placehold.co/1200x630/0f3460/ffffff?text=Gemstones",
    createdAt: "2026-08-14T10:00:00Z",
    updatedAt: "2026-08-14T10:00:00Z",
    author: { 
      name: "Arjun Mehta", 
      bio: "Gemstone therapist and astrological consultant with 10+ years of experience.",
      avatar: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=EA4335&color=fff&size=128",
      role: "Gemstone Therapist",
      location: "Mumbai, India",
      website: "https://arjunmehta.com",
      social: {
        twitter: "https://twitter.com/arjunmehta",
        linkedin: "https://linkedin.com/in/arjunmehta"
      }
    },
    readTime: "6 min read",
    views: 4567,
    likes: 345,
    comments: 89
  },
  {
    _id: "9",
    title: "Full Moon Spiritual Practices for Transformation",
    slug: "full-moon-spiritual-practices-transformation",
    excerpt: "Harness the powerful energy of the full moon for spiritual growth and personal transformation.",
    content: `
      <p>The full moon is a powerful time for spiritual practice. It's a period of heightened energy, intuition, and emotional release.</p>
      
      <h2>🌕 Full Moon Rituals</h2>
      
      <div class="highlight-box">
        <h4>🕯️ Practices:</h4>
        <ul>
          <li><strong>Release:</strong> Write what you want to let go of and burn it</li>
          <li><strong>Meditation:</strong> Under moonlight for deeper connection</li>
          <li><strong>Gratitude:</strong> List things you're grateful for</li>
          <li><strong>Cleanse:</strong> Use salt water to cleanse your space</li>
          <li><strong>Journal:</strong> Write your intentions and dreams</li>
        </ul>
      </div>

      <h2>✨ Full Moon Stones</h2>
      <p>Use Moonstone, Selenite, or Amethyst during full moon practices for enhanced energy.</p>
    `,
    category: { name: "Moon Phases", _id: "cat9", slug: "moon-phases" },
    tags: ["Full Moon", "Spiritual", "Transformation", "Rituals"],
    featured: false,
    featuredImage: "https://placehold.co/1200x630/0b0b12/ffffff?text=Full+Moon",
    createdAt: "2026-08-12T10:00:00Z",
    updatedAt: "2026-08-12T10:00:00Z",
    author: { 
      name: "Lakshmi Devi", 
      bio: "Spiritual guide and moon phase expert specializing in lunar rituals.",
      avatar: "https://ui-avatars.com/api/?name=Lakshmi+Devi&background=FBBC05&color=000&size=128",
      role: "Spiritual Guide",
      location: "Rishikesh, India",
      website: "https://lakshmidevi.com",
      social: {
        twitter: "https://twitter.com/lakshmidevi",
        linkedin: "https://linkedin.com/in/lakshmidevi"
      }
    },
    readTime: "5 min read",
    views: 5432,
    likes: 456,
    comments: 123
  },
  {
    _id: "10",
    title: "Understanding Your Sun, Moon, and Rising Signs",
    slug: "understanding-sun-moon-rising-signs",
    excerpt: "Learn how your Sun, Moon, and Rising signs shape your personality and life journey.",
    content: `
      <p>Your Sun, Moon, and Rising signs are the three most important placements in your birth chart. Together, they paint a complete picture of who you are.</p>
      
      <h2>☀️ Sun Sign - Your Core Identity</h2>
      <p>Your Sun sign represents your essential self - your ego, identity, and life purpose. It's the personality you show the world.</p>
      
      <div class="highlight-box">
        <h4>✨ Sun Sign Meanings:</h4>
        <ul>
          <li>Your basic personality</li>
          <li>Your life purpose</li>
          <li>Your strengths and weaknesses</li>
          <li>How you express yourself</li>
        </ul>
      </div>

      <h2>🌙 Moon Sign - Your Emotions</h2>
      <p>Your Moon sign reveals your inner world - your emotions, intuition, and what you need to feel secure.</p>
      
      <div class="highlight-box">
        <h4>✨ Moon Sign Meanings:</h4>
        <ul>
          <li>Your emotional nature</li>
          <li>How you nurture others</li>
          <li>Your subconscious mind</li>
          <li>What you need to feel safe</li>
        </ul>
      </div>

      <h2>⬆️ Rising Sign - Your Outer Expression</h2>
      <p>Your Rising sign (Ascendant) is how you present yourself to others - your social mask and first impressions.</p>
      
      <div class="highlight-box">
        <h4>✨ Rising Sign Meanings:</h4>
        <ul>
          <li>Your appearance and style</li>
          <li>How others perceive you</li>
          <li>Your approach to life</li>
          <li>Your first impressions</li>
        </ul>
      </div>
    `,
    category: { name: "Birth Chart", _id: "cat3", slug: "birth-chart" },
    tags: ["Sun Sign", "Moon Sign", "Rising Sign", "Astrology"],
    featured: true,
    featuredImage: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Sun+Moon+Rising",
    createdAt: "2026-08-10T10:00:00Z",
    updatedAt: "2026-08-10T10:00:00Z",
    author: { 
      name: "Dr. Ananya Gupta", 
      bio: "Ph.D. in Vedic Astrology from Banaras Hindu University. Specializes in birth chart interpretation.",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Gupta&background=34A853&color=fff&size=128",
      role: "Vedic Astrologer",
      location: "Varanasi, India",
      website: "https://ananyagupta.com",
      social: {
        twitter: "https://twitter.com/ananyagupta",
        linkedin: "https://linkedin.com/in/ananyagupta"
      }
    },
    readTime: "8 min read",
    views: 6543,
    likes: 567,
    comments: 145
  }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
const formatDate = (dateStr) => {
  if (!dateStr) return "Recent";
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric'
  });
};

const formatTimeAgo = (dateStr) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMins = Math.floor((now - date) / 60000);
  const diffHours = Math.floor((now - date) / 3600000);
  const diffDays = Math.floor((now - date) / 86400000);
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateStr);
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return "https://placehold.co/1200x630/E5E7EB/4B5563?text=No+Image";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
};

// ============================================
// MAIN COMPONENT
// ============================================
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const relatedPosts = post ? STATIC_BLOGS
    .filter(p => p._id !== post._id && p.category?._id === post.category?._id)
    .slice(0, 3) : [];

  const popularPosts = STATIC_BLOGS
    .filter(p => p._id !== post?._id)
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const foundPost = STATIC_BLOGS.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      updateMetaTags(foundPost);
      setComments([
        { id: 1, author: "Ravi Kumar", avatar: "https://ui-avatars.com/api/?name=Ravi+Kumar&background=random&size=32", text: "This is so insightful! Thank you for sharing.", date: "2026-08-28T10:00:00Z", likes: 12 },
        { id: 2, author: "Priya Sharma", avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random&size=32", text: "I've been looking for this information. Very helpful!", date: "2026-08-27T10:00:00Z", likes: 8 },
        { id: 3, author: "Amit Patel", avatar: "https://ui-avatars.com/api/?name=Amit+Patel&background=random&size=32", text: "Beautifully explained. Looking forward to more astrology content.", date: "2026-08-26T10:00:00Z", likes: 5 }
      ]);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    showToastMessage("✅ Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = post?.title || "";
    let shareUrl = "";
    switch(platform) {
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`; break;
      case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`; break;
      case 'email': shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`; break;
      default: return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
    showToastMessage(`🔗 Shared on ${platform}!`);
  };

  const addComment = () => {
    if (!commentText.trim()) return;
    const newComment = {
      id: comments.length + 1,
      author: "You",
      avatar: "https://ui-avatars.com/api/?name=You&background=random&size=32",
      text: commentText.trim(),
      date: new Date().toISOString(),
      likes: 0
    };
    setComments([newComment, ...comments]);
    setCommentText("");
    showToastMessage("💬 Comment added!");
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-5 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#8B3A2B] border-t-transparent"></div>
        <p className="text-gray-500 mt-4">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-5 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-700">Post not found</h1>
        <Link to="/blog" className="text-[#8B3A2B] hover:underline mt-4 inline-block">← Back to blogs</Link>
      </div>
    );
  }

  return (
    <>
      {showToast && (
        <div className="fixed top-20 right-4 z-50 bg-[#202124] text-white px-6 py-3 rounded-lg shadow-xl max-w-sm">
          {toastMessage}
        </div>
      )}

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-[#8B3A2B] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <article className="max-w-6xl mx-auto py-8 px-5">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-[#8B3A2B] flex items-center gap-1">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-[#8B3A2B]">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-[#202124] font-medium truncate max-w-[200px]">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <figure className="w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <img
                src={getImageUrl(post.featuredImage)}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/1200x600/E5E7EB/4B5563?text=Image+Not+Found";
                }}
              />
              <figcaption className="sr-only">{post.title}</figcaption>
            </figure>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm font-medium text-[#8B3A2B] bg-[#8B3A2B]/10 px-3 py-1 rounded-full">
                {post.category?.name || "General"}
              </span>
              {post.tags?.map((tag, i) => (
                <span key={i} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202124] mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={post.author?.avatar} alt={post.author?.name} className="w-12 h-12 rounded-full" loading="lazy" />
                <div>
                  <p className="font-medium text-[#202124]">{post.author?.name || "Admin"}</p>
                  <p className="text-xs text-gray-500">{post.author?.role || "Author"}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 ml-auto">
                <time dateTime={post.createdAt} className="flex items-center gap-1">
                  <Calendar size={16} /> {formatDate(post.createdAt)}
                </time>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1"><Eye size={16} /> {post.views} views</span>
              </div>
            </div>

            <div 
              className="prose max-w-none prose-headings:text-[#8B3A2B] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#8B3A2B]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                  <Tag size={16} /> Tags:
                </span>
                {post.tags?.map((tag, i) => (
                  <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => { setLiked(!liked); showToastMessage(liked ? "🤍 Unliked!" : "❤️ Liked!"); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  liked ? 'text-red-500 border-red-500 bg-red-50' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                {liked ? '❤️' : '🤍'} Like <span className="text-xs bg-gray-100 px-2 rounded-full">{post.likes + (liked ? 1 : 0)}</span>
              </button>
              <button 
                onClick={() => { setBookmarked(!bookmarked); showToastMessage(bookmarked ? "📌 Removed!" : "📌 Bookmarked!"); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  bookmarked ? 'text-[#8B3A2B] border-[#8B3A2B] bg-[#8B3A2B]/5' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                {bookmarked ? '📌' : '📍'} Bookmark
              </button>

              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition">
                  <Share2 size={18} /> Share
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl p-2 hidden group-hover:block z-10 min-w-[180px]">
                  <button onClick={() => shareOnSocial('facebook')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 rounded transition text-sm">
                    <span>📘</span> Facebook
                  </button>
                  <button onClick={() => shareOnSocial('twitter')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 rounded transition text-sm">
                    <span>🐦</span> Twitter
                  </button>
                  <button onClick={() => shareOnSocial('linkedin')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 rounded transition text-sm">
                    <span>💼</span> LinkedIn
                  </button>
                  <button onClick={() => shareOnSocial('email')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 rounded transition text-sm">
                    <span>✉️</span> Email
                  </button>
                  <button onClick={copyLink} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 rounded transition text-sm">
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />} Copy Link
                  </button>
                </div>
              </div>
            </div>

            <section className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <img src={post.author?.avatar} alt={post.author?.name} className="w-20 h-20 rounded-full mx-auto sm:mx-0" />
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-bold text-[#202124]">{post.author?.name}</h4>
                  <p className="text-sm text-gray-500">{post.author?.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{post.author?.bio}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3 justify-center sm:justify-start">
                    {post.author?.location && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin size={12} /> {post.author.location}
                      </span>
                    )}
                    {post.author?.social?.twitter && (
                      <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-600">🐦</a>
                    )}
                    {post.author?.social?.linkedin && (
                      <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-700">💼</a>
                    )}
                    {post.author?.website && (
                      <a href={post.author.website} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B3A2B] hover:underline">🌐 Website</a>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-[#202124] flex items-center gap-2 mb-4">
                💬 Comments <span className="text-sm font-normal text-gray-500">({comments.length})</span>
              </h3>

              <div className="flex gap-3 mb-6">
                <img src="https://ui-avatars.com/api/?name=You&background=random&size=32" alt="You" className="w-10 h-10 rounded-full hidden sm:block" />
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addComment()}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B3A2B] text-sm"
                  />
                  <button onClick={addComment} className="px-4 py-2 bg-[#8B3A2B] text-white rounded-lg hover:bg-[#6B2314] transition text-sm whitespace-nowrap">
                    <Send size={16} className="inline mr-1" /> Post
                  </button>
                </div>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-[#202124]">{comment.author}</span>
                        <span className="text-xs text-gray-400">{formatTimeAgo(comment.date)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{comment.text}</p>
                      <button className="text-xs text-gray-400 hover:text-[#8B3A2B] transition mt-1 flex items-center gap-1">
                        <ThumbsUp size={12} /> {comment.likes} Like
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#8B3A2B]/10 to-[#8B3A2B]/5 rounded-2xl border border-[#8B3A2B]/20 text-center">
              <h4 className="text-lg font-semibold text-[#202124]">📬 Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-500 mt-1">Get the latest spiritual and astrological insights</p>
              <div className="flex max-w-md mx-auto mt-4 gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B3A2B] text-sm" />
                <button className="px-4 py-2 bg-[#8B3A2B] text-white rounded-lg hover:bg-[#6B2314] transition text-sm">Subscribe</button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <img src={post.author?.avatar} alt={post.author?.name} className="w-20 h-20 rounded-full mx-auto mb-3" />
              <h4 className="font-bold text-[#202124]">{post.author?.name}</h4>
              <p className="text-sm text-gray-500">{post.author?.role}</p>
              <p className="text-xs text-gray-600 mt-2 line-clamp-3">{post.author?.bio}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-semibold text-[#202124] flex items-center gap-2 mb-4">
                <Award size={18} className="text-[#8B3A2B]" /> Popular Posts
              </h4>
              <div className="space-y-4">
                {popularPosts.map((p) => (
                  <Link key={p._id} to={`/blog/${p.slug}`} className="flex gap-3 group">
                    <img src={p.featuredImage} alt={p.title} className="w-20 h-16 object-cover rounded-lg" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-[#202124] group-hover:text-[#8B3A2B] transition line-clamp-2">
                        {p.title}
                      </h5>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <Calendar size={12} /> {formatDate(p.createdAt)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-semibold text-[#202124] flex items-center gap-2 mb-3">
                <Tag size={18} className="text-[#8B3A2B]" /> Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {[...new Set(STATIC_BLOGS.map(p => p.category?.name))].filter(Boolean).map((cat, i) => (
                  <Link key={i} to={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#202124] mb-4">📚 You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map(related => (
                <Link key={related._id} to={`/blog/${related.slug}`} className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                  <div className="h-40 overflow-hidden">
                    <img src={related.featuredImage} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#8B3A2B] font-medium">{related.category?.name}</p>
                    <h4 className="font-medium text-[#202124] group-hover:text-[#8B3A2B] transition line-clamp-1 mt-1">
                      {related.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(related.createdAt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default BlogDetail;