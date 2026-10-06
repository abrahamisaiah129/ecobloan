"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Ecobloan Logo" className="h-10 object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#products" className="text-gray-700 hover:text-[#F2A900] font-medium transition-colors">
              Loan Products
            </Link>
            <Link href="#calculator" className="text-gray-700 hover:text-[#F2A900] font-medium transition-colors">
              Calculator
            </Link>
            <Link href="#benefits" className="text-gray-700 hover:text-[#F2A900] font-medium transition-colors">
              Benefits
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-[#003366] font-semibold hover:text-[#F2A900] transition-colors">
              Log In
            </Link>
            <Link href="/signup" className="bg-[#003366] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#002244] transition-colors shadow-sm">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#003366] hover:text-[#F2A900] focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Loan Products
            </Link>
            <Link href="#calculator" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Calculator
            </Link>
            <Link href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Benefits
            </Link>
            <div className="pt-4 flex flex-col gap-2 px-3">
              <Link href="/login" className="w-full text-center border border-[#003366] text-[#003366] px-4 py-2 rounded-md font-semibold hover:bg-yellow-50 transition-colors">
                Log In
              </Link>
              <Link href="/signup" className="w-full text-center bg-[#003366] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#002244] transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
