import ProductCard from "./ProductCard";
import type { Product, Category } from "../data/products";

interface CategorySectionProps {
  category: Category;
  products: Product[];
  onQuickView: (product: Product) => void;
  index: number;
}

export default function CategorySection({
  category,
  products,
  onQuickView,
  index,
}: CategorySectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      className={`py-16 sm:py-20 lg:py-24 ${isEven ? "bg-ivory" : "bg-cream"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-4xl sm:text-5xl mb-4 block">{category.icon}</span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Collection
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            {category.name}
          </h2>
          <p className="text-charcoal/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Category CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href={`https://wa.me/254700000000?text=Hi! I'm browsing the ${encodeURIComponent(category.name)} section in the Bela True catalogue. I'd like to know more about available products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-tan text-tan font-semibold text-sm tracking-wide rounded-full hover:bg-tan hover:text-white transition-all duration-300"
          >
            Ask About More {category.name}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
