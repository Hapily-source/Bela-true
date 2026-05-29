import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import CategorySection from "./components/CategorySection";
import FeaturedBanner from "./components/FeaturedBanner";
import BrandShowcase from "./components/BrandShowcase";
import HowToOrder from "./components/HowToOrder";
import QuickViewModal from "./components/QuickViewModal";
import Footer from "./components/Footer";
import { categories, getByCategory } from "./data/products";
import type { Product } from "./data/products";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <Hero />
      <BestSellers onQuickView={setSelectedProduct} />

      {/* Featured Banner after best sellers */}
      <FeaturedBanner />

      {/* Category Sections */}
      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          products={getByCategory(category.id)}
          onQuickView={setSelectedProduct}
          index={index}
        />
      ))}

      <BrandShowcase />
      <HowToOrder />
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
