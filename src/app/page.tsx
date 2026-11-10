import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import LoanCalculator from "@/components/LoanCalculator";
import Footer from "@/components/Footer";
import { Wallet, Car, Home, CreditCard, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fc]">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Loan Products Section */}
        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#d48f00]">Built around your needs</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#10233f] sm:text-4xl">Choose the right way forward</h2>
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
