"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000000);
  const [tenureMonths, setTenureMonths] = useState(24);
  const interestRate = 18; // 18% annual interest rate

  // Basic EMI Calculation
  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = tenureMonths;
    const p = amount;
    
    if (r === 0) return p / n;
    
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-[#004b87] p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Loan Calculator</h3>
        <p className="text-blue-100 text-sm">Estimate your monthly repayments quickly.</p>
      </div>
      
      <div className="p-8">
        {/* Amount Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
            <span className="text-2xl font-bold text-[#004b87]">{formatCurrency(amount)}</span>
          </div>
          <input
            type="range"
            min="1000000"
            max="100000000"
            step="500000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a1e0]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>UGX 1M</span>
            <span>UGX 100M</span>
          </div>
        </div>

        {/* Tenure Slider */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <label className="text-sm font-semibold text-gray-700">Repayment Period</label>
            <span className="text-2xl font-bold text-[#004b87]">{tenureMonths} Months</span>
          </div>
          <input
            type="range"
            min="6"
            max="60"
            step="6"
            value={tenureMonths}
            onChange={(e) => setTenureMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a1e0]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>6 Months</span>
            <span>60 Months</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-blue-50 p-6 rounded-xl mb-6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Estimated Monthly Repayment</p>
            <p className="text-3xl font-extrabold text-[#004b87]">{formatCurrency(calculateEMI())}</p>
          </div>
          <div className="text-right mt-4 sm:mt-0 hidden sm:block">
            <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
            <p className="text-lg font-bold text-gray-700">{interestRate}% p.a.</p>
          </div>
        </div>

        <button className="w-full bg-[#004b87] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#003865] transition-colors shadow-md">
          Apply for this Loan
        </button>
        <p className="text-xs text-gray-400 text-center mt-4">
          * This is an estimate. Actual interest rates and monthly payments may vary based on your credit profile and final loan terms.
        </p>
      </div>
    </div>
  );
}
