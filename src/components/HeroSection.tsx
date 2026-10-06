import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[#003366] overflow-hidden lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-1/2 lg:py-32 py-16">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block mb-2">Personal Loans</span>
            <span className="block text-[#F2A900]">designed for you.</span>
          </h1>
          <p className="mt-6 text-base text-gray-200 sm:text-lg md:text-xl">
            Achieve your dreams today with Ecobloan's flexible and affordable loan products. Whether it's a new car, home renovation, or unexpected expenses, we've got you covered.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4 flex-col sm:flex-row">
            <div className="rounded-md shadow">
              <Link href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#003366] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
                Explore Loans
              </Link>
            </div>
            <div className="mt-3 sm:mt-0">
              <Link href="#calculator" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#002244] bg-[#F2A900] hover:bg-[#D99700] md:py-4 md:text-lg md:px-10 transition-colors">
                Calculate <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side image */}
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=1600"
          alt="Happy customers banking on phone"
        />
        {/* Gradient overlay to blend image nicely with the dark blue background on large screens */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#003366] to-transparent w-32"></div>
      </div>
    </div>
  );
}
