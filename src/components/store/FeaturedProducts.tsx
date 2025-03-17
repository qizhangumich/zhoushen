import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  // Filter products marked as featured
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Official Merchandise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Show your support with official Zhou Shen merchandise, from clothing to
            collectibles and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/store"
            className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 