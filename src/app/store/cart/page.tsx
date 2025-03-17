"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  return (
    <div className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">Your Cart</h1>
        
        {items.length > 0 ? (
          <>
            <div className="mb-8">
              {items.map(item => (
                <div key={item.id} className="flex flex-col md:flex-row items-center py-6 border-b">
                  <div className="w-24 h-24 bg-gray-100 flex items-center justify-center mr-6 mb-4 md:mb-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-500">No image</span>
                    )}
                  </div>
                  
                  <div className="flex-grow mb-4 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                      aria-label="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Subtotal:</span>
                <span className="text-xl font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Shipping:</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-xl font-bold">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="py-3 bg-black text-white font-bold rounded hover:bg-gray-800">
                  Proceed to Checkout
                </button>
                <Link
                  href="/store"
                  className="py-3 border border-black text-black text-center font-bold rounded hover:bg-gray-100"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              href="/store"
              className="px-6 py-3 bg-black text-white font-bold rounded hover:bg-gray-800 inline-block"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 