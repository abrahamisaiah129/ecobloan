import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#0b2f52]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side text */}
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-12 lg:py-24 xl:px-16">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1d5e8e]/30 blur-3xl" />
          <div className="text-center lg:text-left max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c45c]">Simple finance. Real progress.</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
              <span className="block">Personal loans</span>
              <span className="block text-[#f2c45c]">that move you forward.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
              Achieve your dreams today with Ecobloan&apos;s flexible and affordable loan products. Whether it&apos;s a new car, home renovation, or unexpected expenses, we&apos;ve got you covered.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <div>
                <Link href="#products" className="flex w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[#0b2f52] transition-colors hover:bg-slate-100 sm:w-auto">
                  Explore Loans
                </Link>
              </div>
              <div>
                <Link href="#calculator" className="flex w-full items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto">
                  Calculate <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="relative h-72 sm:h-80 md:h-96 lg:h-auto lg:min-h-[560px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=1600"
            alt="African business professionals in a meeting"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2f52]/35 to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/20 bg-[#0b2f52]/75 p-5 text-white backdrop-blur-sm sm:left-10 sm:right-auto sm:max-w-xs">
            <p className="text-2xl font-bold">24 hrs</p>
            <p className="mt-1 text-sm text-slate-200">Typical approval time for eligible applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
