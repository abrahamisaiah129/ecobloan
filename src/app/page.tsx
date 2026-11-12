import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import LoanCalculator from "@/components/LoanCalculator";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wallet, Car, Home, CreditCard, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fc]">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            {[
              ["01", "Choose a product", "Find a loan option that fits what you need today."],
              ["02", "Check your estimate", "Use the calculator to understand your expected repayments."],
              ["03", "Apply with confidence", "Send your details securely and follow the review process."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4 py-6 md:px-7 first:pl-0 last:pr-0">
                <span className="text-sm font-bold text-[#d48f00]">{number}</span>
                <div>
                  <h2 className="font-semibold text-[#10233f]">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loan Products Section */}
        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#d48f00]">Loan options for every stage</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#10233f] sm:text-4xl">Find the right way forward</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Tailored financial solutions designed to meet your specific needs with competitive rates and flexible terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ProductCard 
              title="Personal Loan" 
              description="Unsecured loan for your diverse personal needs."
              Icon={Wallet}
              features={["No tangible collateral needed", "Flexible repayment terms", "Quick approval process"]}
            />
            <ProductCard 
              title="Salary Advance" 
              description="Get cash up front based on your monthly salary."
              Icon={CreditCard}
              features={["Instant access to funds", "Short-term relief", "Direct deduction from salary"]}
            />
            <ProductCard 
              title="Auto Loan" 
              description="Drive your dream car with our asset financing."
              Icon={Car}
              features={["Up to 90% financing", "Competitive interest rates", "Partnerships with major dealers"]}
            />
            <ProductCard 
              title="Mortgage" 
              description="Build or buy your dream home with ease."
              Icon={Home}
              features={["Long-term financing", "Flexible equity contributions", "Expert property advice"]}
            />
          </div>
        </section>

        <section className="bg-[#eef4f8] py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#d48f00]">Ready to take the next step?</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#10233f]">Start your application in a few simple steps.</h2>
              <p className="mt-3 leading-7 text-slate-600">Have your basic details ready. You can review your information before sending it to our team.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/apply" className="rounded-lg bg-[#003366] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0b4b82]">
                Start an application
              </Link>
              <Link href="#calculator" className="rounded-lg border border-[#b8cddd] bg-white px-6 py-3 text-center text-sm font-semibold text-[#003366] transition-colors hover:border-[#003366]">
                Check repayments
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#10233f]">
                  Why Choose <span className="text-[#003366]">Ecobloan</span>?
                </h2>
                <p className="mb-8 text-base leading-7 text-slate-500">
                  We believe in banking that works for you. Our products are designed with transparency, speed, and your financial well-being in mind.
                </p>
                <ul className="space-y-6">
                  {[
                    "Transparent Pricing: No hidden fees or surprise charges.",
                    "Fast Approvals: Get decisions in as little as 24 hours.",
                    "Digital First: Apply, track, and manage loans entirely online.",
                    "Dedicated Support: 24/7 customer service via phone or chat."
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex">
                      <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-[#F2A900] mr-4" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
                  alt="Happy family in front of new home"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#003366]/70 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-md">Empowering your future</h3>
                    <p className="text-yellow-50 font-medium text-lg drop-shadow">Join thousands of customers who have achieved their goals with our reliable financial support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900">Plan Your Repayment</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Use our loan calculator to estimate your monthly payments and find a plan that fits your budget.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <LoanCalculator />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
