export default function FeaturedBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/34279970/pexels-photo-34279970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/80 to-espresso/70" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-tan/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block px-5 py-2 border border-gold/30 rounded-full text-gold text-[10px] tracking-[0.3em] uppercase mb-6">
          Why Choose Bela True
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-8">
          Quality You Can Trust,<br />
          <span className="text-gold italic">Prices You'll Love</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto mb-10">
          <div className="text-center">
            <div className="text-3xl mb-2">🏷️</div>
            <h3 className="font-heading text-ivory text-sm font-semibold mb-1">Authentic Brands</h3>
            <p className="text-ivory/40 text-[10px] sm:text-xs">100% genuine products</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-heading text-ivory text-sm font-semibold mb-1">Fast Delivery</h3>
            <p className="text-ivory/40 text-[10px] sm:text-xs">Countrywide shipping</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-heading text-ivory text-sm font-semibold mb-1">Best Prices</h3>
            <p className="text-ivory/40 text-[10px] sm:text-xs">Wholesale & retail</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="font-heading text-ivory text-sm font-semibold mb-1">Trust & Support</h3>
            <p className="text-ivory/40 text-[10px] sm:text-xs">Easy returns policy</p>
          </div>
        </div>

        <a
          href="https://wa.me/254700000000?text=Hi Bela True! I've been browsing your catalogue and I'd like to place an order."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-espresso font-bold text-sm tracking-wide rounded-full hover:bg-gold-light transition-colors duration-300 shadow-xl"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Start Shopping on WhatsApp
        </a>
      </div>
    </section>
  );
}
