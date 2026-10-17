import React from "react";
import { Link } from "react-router-dom";

/* ============================================================
   STATIC DATA
============================================================ */
const SHOP_BY_PURPOSE = [
  { label: "Karungali Mala For Protection", to: "/products/karungali" },
  { label: "Pyrite Stone For Money", to: "/products/pyrite" },
  { label: "7 Mukhi For Shani Dosh", to: "/products/7-mukhi" },
  { label: "5 Mukhi For Peace", to: "/products/5-mukhi" },
];

const COLLECTIONS = [
  { label: "Best Sellers", to: "/collections/best-sellers" },
  { label: "New Launches", to: "/collections/new-launches" },
  { label: "Rudraksha", to: "/collections/rudraksha" },
  { label: "Gemstones", to: "/collections/gemstones" },
  { label: "Idols & Murti", to: "/collections/idols" },
];

const JEWELLERY = [
  { label: "Bracelets", to: "/jewellery/bracelets" },
  { label: "Necklaces", to: "/jewellery/necklaces" },
  { label: "Rings", to: "/jewellery/rings" },
  { label: "Hallmarked Silver", to: "/jewellery/silver" },
];

const POLICIES = [
  { label: "Track Your Order", to: "/track-order" },
  { label: "Shipping Policy", to: "/shipping-policy" },
  { label: "Return Policy", to: "/return-policy" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Blogs", to: "/blogs" },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

/* ============================================================
   REUSABLE: Link Column
============================================================ */
const LinkColumn = ({ title, items }) => (
  <div className="flex flex-col">
    <h3 className="font-bold text-white text-[13px] tracking-[1.5px] uppercase mb-4">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            to={item.to}
            className="text-[13px] text-white/70 hover:text-white transition-colors duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ============================================================
   MAIN FOOTER
============================================================ */
const Footer = () => {
  return (
    <footer className="w-full bg-[#7b1e2b] text-white pt-12 pb-6 px-4 md:px-8 mt-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ============ TOP GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 mb-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">P</span>
              </div>
              <h2 className="font-serif text-xl font-bold tracking-wider">PUSPENDRA</h2>
            </div>
            <p className="text-[11px] tracking-[1.5px] text-white/50 uppercase mb-4">
              Healthy · Vedic · Lifestyle
            </p>
            <p className="text-white/70 text-[13px] leading-relaxed mb-6 max-w-sm">
              At Puspendra, our mission is to make authentic spiritual and
              cultural products accessible across the world. Rooted in faith
              and tradition.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-[#7b1e2b] text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <LinkColumn title="Shop By Purpose" items={SHOP_BY_PURPOSE} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title="Collections" items={COLLECTIONS} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title="Jewellery" items={JEWELLERY} />
          </div>
          <div className="lg:col-span-2">
            <LinkColumn title="Policies & Other" items={POLICIES} />
          </div>
        </div>

        {/* ============ CONTACT ROW ============ */}
        <div className="py-6 border-t border-b border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-white/80">
          <a href="mailto:support@puspendra.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="break-all">support@puspendra.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+91 98765 43210</span>
          </a>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="leading-relaxed">Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India</span>
          </div>
        </div>

        {/* ============ BOTTOM BAR (Single Line) ============ */}
        <div className="pt-6 text-[12px] text-white/50 text-center leading-relaxed">
          <p>
            Puspendra Lifestyle Private Limited · GST: 06AAKCD8130H1ZO · CIN: U47733HR2024PTC120933
            <span className="mx-2">|</span>
            © 2026 Puspendra. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;