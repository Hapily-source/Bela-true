import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6648416/pexels-photo-6648416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/70 to-espresso/90" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-tan/10 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Pre-heading */}
        <div className="animate-fadeIn">
          <span className="inline-block px-5 py-2 border border-gold/40 rounded-full text-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8">
            Product Catalogue 2025
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fadeInUp">
          Elegance in Every
          <span className="block text-gold italic mt-2">Detail</span>
        </h1>

        {/* Subtitle */}
        <p className="text-ivory/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4 animate-fadeInUp animation-delay-200">
          Discover our curated collection of premium leather goods, luxury beauty
          products, and designer fragrances — all available for you in Kenya.
        </p>

        {/* Brand tagline */}
        <p className="text-gold/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-10 animate-fadeInUp animation-delay-300">
          Beauty • Leather • Luxury
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-400">
          <a
            href="#leather-footwear"
            className="px-8 py-3.5 bg-gold text-espresso font-semibold text-sm tracking-wide rounded-full hover:bg-gold-light transition-colors duration-300 shadow-lg"
          >
            Browse Catalogue
          </a>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-ivory/30 text-ivory font-medium text-sm tracking-wide rounded-full hover:bg-ivory/10 transition-colors duration-300"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-16 animate-fadeInUp animation-delay-500">
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl text-gold font-bold">50+</div>
            <div className="text-ivory/50 text-[10px] sm:text-xs tracking-wider uppercase mt-1">Products</div>
          </div>
          <div className="w-px h-10 bg-ivory/20" />
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl text-gold font-bold">15+</div>
            <div className="text-ivory/50 text-[10px] sm:text-xs tracking-wider uppercase mt-1">Brands</div>
          </div>
          <div className="w-px h-10 bg-ivory/20" />
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl text-gold font-bold">5</div>
            <div className="text-ivory/50 text-[10px] sm:text-xs tracking-wider uppercase mt-1">Categories</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gold/50" size={28} />
        </div>
      </div>
    </section>
  );
}
