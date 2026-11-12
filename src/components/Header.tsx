"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Ecobloan Logo" className="h-9 object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#products" className="text-sm font-semibold text-[#003366] transition-colors hover:text-[#d48f00]">
              Personal
            </Link>
            <Link href="#products" className="text-sm font-medium text-slate-500 transition-colors hover:text-[#d48f00]">
              Commercial
            </Link>
            <Link href="#products" className="text-sm font-medium text-slate-500 transition-colors hover:text-[#d48f00]">
              Corporate
            </Link>
            <Link href="#products" className="text-sm font-medium text-slate-500 transition-colors hover:text-[#d48f00]">
              Loans
            </Link>
            <Link href="#calculator" className="text-sm font-medium text-slate-500 transition-colors hover:text-[#d48f00]">
              Calculator
            </Link>
          </nav>

          {/* Account actions */}
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/login" className="rounded-lg bg-[#003366] px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#0b4b82]">
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-[#003366] hover:bg-slate-100 hover:text-[#d48f00] focus:outline-none"
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
            <Link href="#" className="block px-3 py-2 text-base font-bold text-[#003366] hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Personal
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Commercial
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Corporate
            </Link>
            <Link href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Loans
            </Link>
            <Link href="#calculator" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F2A900] hover:bg-gray-50 rounded-md">
              Calculator
            </Link>
            <div className="pt-4 flex flex-col gap-2 px-3">
              <Link href="/login" className="w-full rounded-md bg-[#003366] px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#002244]">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
