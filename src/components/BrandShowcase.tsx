const brands = [
  { name: "Clarks", category: "Footwear" },
  { name: "Timberland", category: "Footwear & Leather" },
  { name: "Hush Puppies", category: "Footwear" },
  { name: "Bata", category: "Footwear & Leather" },
  { name: "Vince Camuto", category: "Footwear" },
  { name: "Guess", category: "Accessories" },
  { name: "Aldo", category: "Accessories" },
  { name: "Casio", category: "Watches" },
  { name: "MAC", category: "Makeup" },
  { name: "Maybelline", category: "Makeup" },
  { name: "L'Oréal Paris", category: "Beauty" },
  { name: "Nivea", category: "Skincare" },
  { name: "The Body Shop", category: "Skincare" },
  { name: "Bio-Oil", category: "Skincare" },
  { name: "Garnier", category: "Skincare" },
  { name: "Dolce & Gabbana", category: "Fragrance" },
  { name: "Versace", category: "Fragrance" },
  { name: "Tom Ford", category: "Fragrance" },
  { name: "Calvin Klein", category: "Fragrance" },
  { name: "Lattafa", category: "Fragrance" },
];

export default function BrandShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Trusted Names
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Our Brands
          </h2>
          <p className="text-charcoal/50 text-sm max-w-md mx-auto">
            We partner with the world's most trusted brands to bring you authentic quality products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl p-5 text-center hover:shadow-lg hover:border-gold/30 border border-transparent transition-all duration-300 cursor-default"
            >
              <div className="font-heading text-base sm:text-lg font-semibold text-charcoal group-hover:text-tan transition-colors mb-1">
                {brand.name}
              </div>
              <div className="text-[10px] tracking-wider uppercase text-charcoal/30 group-hover:text-gold/60 transition-colors">
                {brand.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
