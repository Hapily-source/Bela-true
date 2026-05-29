import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { categories } from "../data/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-md border-b border-gold/20">
      {/* Top bar */}
      <div className="bg-gold/10 py-1.5 px-4 text-center">
        <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold font-medium">
          ✦ Free Delivery in Nairobi for Orders Above KSh 5,000 ✦
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold to-tan flex items-center justify-center">
              <span className="font-heading text-white text-lg sm:text-xl font-bold">B</span>
            </div>
            <div>
              <h1 className="font-heading text-ivory text-lg sm:text-xl font-bold leading-none">
                Bela True
              </h1>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold/70">
                Catalogue 2025
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-ivory/70 hover:text-gold text-sm font-medium transition-colors duration-200 tracking-wide"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Social / Contact */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://instagram.com/belatrue"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              title="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="tel:+254700000000"
              className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
              title="Call Us"
            >
              <Phone size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-ivory p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-espresso border-t border-gold/20 animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-ivory/80 hover:text-gold py-2 transition-colors"
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-green-600 text-white text-center text-sm font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="tel:+254700000000"
                className="flex-1 py-2.5 bg-gold/20 text-gold text-center text-sm font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
