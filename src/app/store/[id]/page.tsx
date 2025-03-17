import Link from "next/link";
import { products } from "@/data/products";
import ProductClient from "./ProductClient";

// This function tells Next.js which paths to pre-render for static export
export async function generateStaticParams() {
  // Return paths for all product IDs
  return products.map(product => ({
    id: product.id.toString()
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="py-20 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link
            href="/store"
            className="px-6 py-3 bg-black text-white font-bold rounded hover:bg-gray-800"
          >
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  return <ProductClient product={product} />;
} 