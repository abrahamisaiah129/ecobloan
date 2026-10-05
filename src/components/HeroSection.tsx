import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[#004b87] overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block mb-2">Personal Loans</span>
              <span className="block text-[#00a1e0]">designed for you.</span>
            </h1>
            <p className="mt-6 text-base text-blue-100 sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              Achieve your dreams today with Faivelon's flexible and affordable loan products. Whether it's a new car, home renovation, or unexpected expenses, we've got you covered.
            </p>
            <div className="mt-10 sm:flex sm:justify-center md:justify-start gap-4">
              <div className="rounded-md shadow">
                <Link href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#004b87] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
                  Explore Loans
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="#calculator" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00a1e0] hover:bg-[#008bc2] md:py-4 md:text-lg md:px-10 transition-colors">
                  Calculate Repayment <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
