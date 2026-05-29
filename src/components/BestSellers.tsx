import { getBestSellers } from "../data/products";
import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

interface BestSellersProps {
  onQuickView: (product: Product) => void;
}

export default function BestSellers({ onQuickView }: BestSellersProps) {
  const bestSellers = getBestSellers().slice(0, 8);

  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Customer Favourites
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Best Sellers
          </h2>
          <p className="text-charcoal/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Our most loved products — tried, tested, and approved by hundreds of happy customers across Kenya.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
