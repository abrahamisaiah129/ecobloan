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
              <div className="w-10 h-10 bg-[#004b87] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                F
              </div>
              <span className="font-extrabold text-2xl text-[#004b87] tracking-tight">
                Faivelon
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#products" className="text-gray-700 hover:text-[#00a1e0] font-medium transition-colors">
              Loan Products
            </Link>
            <Link href="#calculator" className="text-gray-700 hover:text-[#00a1e0] font-medium transition-colors">
              Calculator
            </Link>
            <Link href="#benefits" className="text-gray-700 hover:text-[#00a1e0] font-medium transition-colors">
              Benefits
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#004b87] font-semibold hover:text-[#00a1e0] transition-colors">
              Log In
            </button>
            <button className="bg-[#004b87] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#003865] transition-colors shadow-sm">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#004b87] hover:text-[#00a1e0] focus:outline-none"
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
            <Link href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00a1e0] hover:bg-gray-50 rounded-md">
              Loan Products
            </Link>
            <Link href="#calculator" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00a1e0] hover:bg-gray-50 rounded-md">
              Calculator
            </Link>
            <Link href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00a1e0] hover:bg-gray-50 rounded-md">
              Benefits
            </Link>
            <div className="pt-4 flex flex-col gap-2 px-3">
              <button className="w-full text-center border border-[#004b87] text-[#004b87] px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                Log In
              </button>
              <button className="w-full text-center bg-[#004b87] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#003865] transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
