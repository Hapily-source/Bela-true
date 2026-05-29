import { X, MessageCircle, ShoppingBag, Star } from "lucide-react";
import type { Product } from "../data/products";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-ivory rounded-full flex items-center justify-center text-charcoal hover:bg-ivory-dark transition-colors"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-ivory-dark">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-3 py-1 bg-gold text-espresso text-[10px] font-bold tracking-wider uppercase rounded-full">
                  New Arrival
                </span>
              )}
              {product.isBestSeller && (
                <span className="px-3 py-1 bg-espresso text-gold text-[10px] font-bold tracking-wider uppercase rounded-full">
                  Best Seller
                </span>
              )}
              {product.badge && (
                <span className="px-3 py-1 bg-tan text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-tan font-semibold mb-2">
              {product.brand} · {product.subcategory}
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-3 leading-tight">
              {product.name}
            </h2>

            {/* Rating placeholder */}
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="text-gold fill-gold" />
              ))}
              <span className="text-xs text-charcoal/40 ml-1">Premium Quality</span>
            </div>

            <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {product.price && (
              <div className="mb-6">
                <span className="font-heading text-3xl font-bold text-espresso">
                  {product.price}
                </span>
              </div>
            )}

            <div className="space-y-3">
              <a
                href={`https://wa.me/254700000000?text=Hi! I'd like to order the ${encodeURIComponent(product.name)} by ${product.brand}${product.price ? ` at ${product.price}` : ''}. Please confirm availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-green-600 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-green-500 transition-colors"
              >
                <MessageCircle size={18} /> Order via WhatsApp
              </a>
              <a
                href={`https://wa.me/254700000000?text=Hi, I'd like to enquire about the ${encodeURIComponent(product.name)} by ${product.brand}. Is it still available?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border-2 border-gold text-gold font-semibold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-gold hover:text-espresso transition-colors"
              >
                <ShoppingBag size={18} /> Enquire Now
              </a>
            </div>

            <p className="text-[10px] text-charcoal/30 text-center mt-4 tracking-wide">
              Delivery available across Kenya • Cash on delivery in Nairobi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
