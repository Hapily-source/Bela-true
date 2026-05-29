import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-ivory-dark/50">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-ivory-dark">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-ivory-dark animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-tan/30 border-t-tan animate-spin" />
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-gold text-espresso text-[10px] font-bold tracking-wider uppercase rounded-full shadow-md">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-espresso text-gold text-[10px] font-bold tracking-wider uppercase rounded-full shadow-md">
              Best Seller
            </span>
          )}
          {product.badge && (
            <span className="px-3 py-1 bg-tan text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-md">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-2.5 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-white transition-colors"
          >
            <Eye size={14} /> Quick View
          </button>
          <a
            href={`https://wa.me/254700000000?text=Hi! I'm interested in the ${encodeURIComponent(product.name)} (${product.brand})${product.price ? ` - ${product.price}` : ''} from the Bela True catalogue.`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 bg-green-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-green-500 transition-colors"
          >
            <ShoppingBag size={14} /> Order
          </a>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-[10px] tracking-wider uppercase text-tan font-semibold">
            {product.brand}
          </span>
          <span className="text-[10px] tracking-wide text-charcoal/40 uppercase">
            {product.subcategory}
          </span>
        </div>
        <h3 className="font-heading text-charcoal text-sm sm:text-base font-semibold leading-tight mb-1.5 group-hover:text-tan transition-colors">
          {product.name}
        </h3>
        <p className="text-charcoal/50 text-xs leading-relaxed line-clamp-2 mb-3">
          {product.description}
        </p>
        {product.price && (
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold text-espresso">
              {product.price}
            </span>
            <a
              href={`https://wa.me/254700000000?text=Hi! I'd like to order the ${encodeURIComponent(product.name)} by ${product.brand}${product.price ? ` at ${product.price}` : ''}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold text-gold tracking-wider uppercase hover:text-tan transition-colors"
            >
              Order Now →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
