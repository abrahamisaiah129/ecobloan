import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003865] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#004b87] font-bold text-2xl">
                F
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Faivelon
              </span>
            </Link>
            <p className="text-blue-200 text-sm mb-6 leading-relaxed">
              Empowering you to achieve your financial goals with flexible, accessible, and transparent loan products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Personal Loan</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Salary Advance</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Auto Loan</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Mortgage Facility</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00a1e0] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li>Call: +256 800 123 456</li>
              <li>Email: assist@faivelon.com</li>
              <li>Address: Faivelon Tower, Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Faivelon. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
