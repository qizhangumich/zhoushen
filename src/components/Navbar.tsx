"use client";

import Link from "next/link";
import { useState } from "react";
import CartButton from "@/components/store/CartButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ZHOUSHEN
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <div className="mr-4">
            <CartButton />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/music" className="hover:text-gray-300 transition-colors">
            Music
          </Link>
          <Link href="/tour" className="hover:text-gray-300 transition-colors">
            Tour
          </Link>
          <Link href="/gallery" className="hover:text-gray-300 transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/store" className="hover:text-gray-300 transition-colors">
            Store
          </Link>
          <CartButton />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black md:hidden flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/music"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              href="/tour"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tour
            </Link>
            <Link
              href="/gallery"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/store"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 