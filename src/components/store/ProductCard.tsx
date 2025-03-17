import Link from "next/link";
import { Product } from "@/data/products";
import { getImageUrl } from "@/utils/imageLoader";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-64 bg-gray-200 flex items-center justify-center relative">
        {product.images && product.images.length > 0 ? (
          <img
            src={getImageUrl(product.images[0])}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-500">No image available</span>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
        <Link
          href={`/store/${product.id}`}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
} 