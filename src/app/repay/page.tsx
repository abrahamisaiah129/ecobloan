"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, Building, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function RepayPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing -> go back to dashboard
    alert("Payment submitted successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/dashboard" className="flex items-center text-gray-500 hover:text-[#004b87] mb-8 font-medium w-fit">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#004b87] p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold mb-2">Repay Loan</h1>
              <p className="text-blue-100">Make a secure payment towards your outstanding balance.</p>
            </div>
            <div className="mt-4 sm:mt-0 text-left sm:text-right">
              <p className="text-blue-200 text-sm font-medium">Outstanding Balance</p>
              <p className="text-3xl font-bold">$8,450.00</p>
            </div>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Payment Amount */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Amount</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Amount to Pay (USD)</label>
                  <input type="number" required defaultValue={8450} className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent text-lg font-semibold" />
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setPaymentMethod("card")}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-colors flex flex-col items-center justify-center text-center ${paymentMethod === "card" ? 'border-[#00a1e0] bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <CreditCard className={`w-8 h-8 mb-2 ${paymentMethod === "card" ? 'text-[#00a1e0]' : 'text-gray-400'}`} />
                    <span className={`font-semibold ${paymentMethod === "card" ? 'text-[#004b87]' : 'text-gray-600'}`}>Credit / Debit Card</span>
                  </div>
                  <div 
                    onClick={() => setPaymentMethod("bank")}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-colors flex flex-col items-center justify-center text-center ${paymentMethod === "bank" ? 'border-[#00a1e0] bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <Building className={`w-8 h-8 mb-2 ${paymentMethod === "bank" ? 'text-[#00a1e0]' : 'text-gray-400'}`} />
                    <span className={`font-semibold ${paymentMethod === "bank" ? 'text-[#004b87]' : 'text-gray-600'}`}>Bank Transfer</span>
                  </div>
                </div>
              </section>

              {/* Dynamic Payment Details */}
              {paymentMethod === "card" ? (
                <section className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Cardholder Name</label>
                    <input type="text" required placeholder="Name on card" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
                    <input type="text" required placeholder="0000 0000 0000 0000" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry Date</label>
                      <input type="text" required placeholder="MM/YY" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">CVC</label>
                      <input type="text" required placeholder="123" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                    </div>
                  </div>
                </section>
              ) : (
                <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Bank Transfer Instructions</h4>
                  <p className="text-sm text-gray-600 mb-4">Please transfer the specified amount to the following account. Use your loan reference number as the payment description.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">Bank Name</span>
                      <span className="font-semibold text-gray-800">Ecobloan Partner Bank</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">Account Number</span>
                      <span className="font-semibold text-gray-800">1002 4589 3321 0001</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-500">Account Name</span>
                      <span className="font-semibold text-gray-800">Ecobloan Loan Repayments</span>
                    </div>
                  </div>
                </section>
              )}

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 gap-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <ShieldCheck className="w-5 h-5 text-green-500 mr-2" />
                  Your payment is securely processed.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#004b87] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#003865] hover:scale-105 transition-all duration-200 text-lg"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
