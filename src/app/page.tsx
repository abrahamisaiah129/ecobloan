import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import LoanCalculator from "@/components/LoanCalculator";
import Footer from "@/components/Footer";
import { Wallet, Car, Home, CreditCard, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Loan Products Section */}
        <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Loan Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored financial solutions designed to meet your specific needs with competitive rates and flexible terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Why Choose <span className="text-[#004b87]">Faivelon</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
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
                      <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-[#00a1e0] mr-4" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#004b87] aspect-w-4 aspect-h-3 h-[400px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-white text-2xl font-bold mb-4">Empowering your future</h3>
                    <p className="text-blue-100">Join thousands of customers who have achieved their goals with our reliable financial support.</p>
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
