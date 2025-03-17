"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/store/ProductCard";

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
    { id: "music", name: "Music" },
    { id: "posters", name: "Posters" }
  ];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Official Merchandise</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse the official Zhou Shen merchandise collection. From concert tees to limited
            edition vinyl, find the perfect item to show your support.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedCategory === category.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No products found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 