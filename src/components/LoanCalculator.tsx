"use client";

import { useState } from "react";

const CURRENCIES = {
  NGN: { symbol: "₦", rate: 1600, locale: "en-NG" },
  USD: { symbol: "$", rate: 1, locale: "en-US" },
};

type CurrencyCode = keyof typeof CURRENCIES;

export default function LoanCalculator() {
  const [amountUSD, setAmountUSD] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(24);
  const [currency, setCurrency] = useState<CurrencyCode>("NGN");
  const interestRate = 12; // 12% annual interest rate

  const currentCurrency = CURRENCIES[currency];
  
  // Calculate display amount based on selected currency
  const displayAmount = amountUSD * currentCurrency.rate;

  // Basic EMI Calculation on the display amount
  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = tenureMonths;
    const p = displayAmount;
    
    if (r === 0) return p / n;
    
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyRepayment = calculateEMI();
  const totalRepayment = monthlyRepayment * tenureMonths;
  const totalInterest = Math.max(0, totalRepayment - displayAmount);
  const maximumDisplayAmount = 100000 * currentCurrency.rate;
  const sliderStepUSD = currency === "NGN" ? 100 : 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(currentCurrency.locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-[#004b87] p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">Loan Calculator</h3>
          <p className="text-blue-100 text-sm">Estimate your monthly repayments quickly.</p>
        </div>
        
        {/* Currency Dropdown */}
        <div className="flex items-center space-x-2 bg-[#003865] p-2 rounded-lg">
          <label htmlFor="currency" className="text-sm font-medium text-blue-100">Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="bg-transparent text-white font-bold outline-none cursor-pointer"
          >
            {Object.keys(CURRENCIES).map((code) => (
              <option key={code} value={code} className="text-gray-900">{code}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="p-8">
        {/* Amount Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
            <span className="text-3xl font-bold text-[#004b87]">{formatCurrency(displayAmount)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100000"
            step={sliderStepUSD}
            value={amountUSD}
            onChange={(e) => setAmountUSD(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a1e0]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
            <span>{formatCurrency(0)}</span>
            <span>{formatCurrency(maximumDisplayAmount)}</span>
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
          <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
            <span>6 Months</span>
            <span>60 Months</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl mb-6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Estimated Monthly Repayment</p>
            <p className="text-4xl font-extrabold text-[#00a1e0]">{formatCurrency(monthlyRepayment)}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-right mt-4 sm:mt-0">
            <div>
              <p className="text-sm text-gray-500 mb-1">Estimated Interest</p>
              <p className="text-lg font-bold text-[#004b87]">{formatCurrency(totalInterest)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Repayment</p>
              <p className="text-lg font-bold text-[#004b87]">{formatCurrency(totalRepayment)}</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center mb-6">
          Fixed estimated rate: <span className="font-semibold text-[#004b87]">{interestRate}% p.a.</span>
        </p>

        <a href="/apply" className="block text-center w-full bg-[#004b87] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#003865] hover:shadow-lg transition-all duration-200 shadow-md">
          Apply for this Loan
        </a>
        <p className="text-xs text-gray-400 text-center mt-4">
          * This is an estimate. Actual interest rates and monthly payments may vary based on your credit profile and final loan terms.
        </p>
      </div>
    </div>
  );
}
