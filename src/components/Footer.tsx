import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold/20 via-tan/20 to-gold/20 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory mb-4">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-ivory/60 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Get in touch to place your order or ask about any product in our catalogue.
            We're always happy to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254700000000?text=Hi Bela True! I'd like to place an order from your catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 text-white font-semibold text-sm rounded-full flex items-center gap-2 hover:bg-green-500 transition-colors shadow-lg"
            >
              <MessageCircle size={18} /> WhatsApp Us Now
            </a>
            <a
              href="tel:+254700000000"
              className="px-8 py-3.5 border border-gold/40 text-gold font-semibold text-sm rounded-full flex items-center gap-2 hover:bg-gold/10 transition-colors"
            >
              <Phone size={18} /> Call to Order
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-tan flex items-center justify-center">
                <span className="font-heading text-white text-xl font-bold">B</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Bela True</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60">
                  Beauty & Leather
                </span>
              </div>
            </div>
            <p className="text-ivory/40 text-sm leading-relaxed mb-4">
              Your trusted source for premium leather goods, beauty products, and luxury
              fragrances in Kenya.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/belatrue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory/50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://tiktok.com/@belatrue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory/50 hover:bg-charcoal hover:text-white transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.35V9.39a8.16 8.16 0 0 0 4.77 1.53V7.38a4.85 4.85 0 0 1-.92-.69z"/></svg>
              </a>
              <a
                href="https://facebook.com/belatrue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ivory/50 hover:bg-blue-600 hover:text-white transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-gold mb-4">
              Catalogue
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#leather-footwear" className="text-ivory/40 hover:text-gold text-sm transition-colors">
                  Leather Footwear
                </a>
              </li>
              <li>
                <a href="#leather-accessories" className="text-ivory/40 hover:text-gold text-sm transition-colors">
                  Leather Accessories
                </a>
              </li>
              <li>
                <a href="#beauty-skincare" className="text-ivory/40 hover:text-gold text-sm transition-colors">
                  Beauty & Skincare
                </a>
              </li>
              <li>
                <a href="#fragrances" className="text-ivory/40 hover:text-gold text-sm transition-colors">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#makeup" className="text-ivory/40 hover:text-gold text-sm transition-colors">
                  Makeup
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading text-base font-semibold text-gold mb-4">
              Information
            </h4>
            <ul className="space-y-2.5">
              <li className="text-ivory/40 text-sm">Free delivery over KSh 5,000</li>
              <li className="text-ivory/40 text-sm">Cash on delivery available</li>
              <li className="text-ivory/40 text-sm">7-day return policy</li>
              <li className="text-ivory/40 text-sm">100% authentic products</li>
              <li className="text-ivory/40 text-sm">Wholesale prices available</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/60 text-sm">+254 700 000 000</p>
                  <p className="text-ivory/30 text-xs">Mon-Sat, 8am-8pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-ivory/60 text-sm">hello@belatrue.co.ke</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-ivory/60 text-sm">Nairobi, Kenya</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Accepted payments */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-ivory/30 text-xs">Accepted Payments:</span>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-green-600/20 text-green-400 text-xs font-semibold rounded-md">
                  M-Pesa
                </span>
                <span className="px-3 py-1.5 bg-white/5 text-ivory/50 text-xs font-medium rounded-md">
                  Bank Transfer
                </span>
                <span className="px-3 py-1.5 bg-white/5 text-ivory/50 text-xs font-medium rounded-md">
                  Cash
                </span>
              </div>
            </div>
            <p className="text-ivory/20 text-xs">
              © 2025 Bela True. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/254700000000?text=Hi Bela True! I'd like to place an order."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-400 transition-colors hover:scale-110 transform duration-200"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </footer>
  );
}
