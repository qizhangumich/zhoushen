"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products"; // Assuming you have a Product type
import { getImageUrl } from "@/utils/imageLoader";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/store" className="text-gray-600 hover:text-black">
            ← Back to Store
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img
                src={getImageUrl(product.images[0])}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="aspect-square flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                product.inStock 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            
            {product.inStock && (
              <>
                <div className="mb-6">
                  <label htmlFor="quantity" className="block mb-2">
                    Quantity:
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 border border-gray-300 rounded-l"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-y border-gray-300 py-1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border border-gray-300 rounded-r"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`w-full py-3 rounded font-bold ${
                    isAdded
                      ? "bg-green-500 text-white"
                      : "bg-black text-white hover:bg-gray-800"
                  } transition-colors`}
                >
                  {isAdded ? "Added to Cart!" : "Add to Cart"}
                </button>
              </>
            )}
            
            {!product.inStock && (
              <button
                disabled
                className="w-full py-3 bg-gray-300 text-gray-600 rounded font-bold cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 