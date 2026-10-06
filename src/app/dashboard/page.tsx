"use client";

import Link from "next/link";
import { LogOut, Plus, Clock, CheckCircle, FileText, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#004b87] rounded-md flex items-center justify-center text-white font-bold text-xl">F</div>
              <span className="font-bold text-xl text-[#004b87] tracking-tight">Faivelon</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5 text-[#004b87]" />
                <span className="font-medium">Welcome, User</span>
              </div>
              <Link href="/" className="text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors">
                <LogOut className="w-4 h-4" /> <span className="text-sm font-medium">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">My Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your loans and applications.</p>
          </div>
          <Link href="/apply" className="bg-[#00a1e0] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-[#008bc2] transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> New Loan
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Pending Applications */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
                <Clock className="w-6 h-6 text-[#00a1e0]" />
                <h2 className="text-xl font-bold text-gray-800">Pending Applications</h2>
              </div>
              
              <div className="border border-orange-100 bg-orange-50 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded">IN REVIEW</span>
                    <h3 className="font-bold text-gray-900">Personal Loan</h3>
                  </div>
                  <p className="text-sm text-gray-600">Applied on Oct 3, 2026 • Ref: #APP-84920</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-gray-500 font-medium">Requested Amount</p>
                  <p className="text-xl font-bold text-[#004b87]">$15,000</p>
                </div>
              </div>
            </section>

            {/* Active Loans */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h2 className="text-xl font-bold text-gray-800">Active Loans</h2>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:border-[#00a1e0] transition-colors cursor-pointer">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">ACTIVE</span>
                    <h3 className="font-bold text-gray-900">Auto Loan</h3>
                  </div>
                  <p className="text-sm text-gray-600">Next payment: Nov 1, 2026</p>
                </div>
                <div className="text-left sm:text-right flex flex-col sm:items-end justify-center">
                  <p className="text-sm text-gray-500 font-medium">Outstanding Balance</p>
                  <p className="text-xl font-bold text-[#004b87] mb-2">$8,450</p>
                  <Link href="/repay" className="inline-block bg-[#00a1e0] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#008bc2] transition-colors">
                    Repay Loan
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#004b87] rounded-xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-blue-100 text-sm mb-6">Our financial advisors are available 24/7 to help you with your applications.</p>
                <button className="w-full bg-white text-[#004b87] font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Support
                </button>
              </div>
              <FileText className="absolute -bottom-4 -right-4 w-32 h-32 text-white opacity-10" />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4">Recent Activity</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00a1e0] rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Application Submitted</p>
                    <p className="text-xs text-gray-500">Oct 3, 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Payment Received</p>
                    <p className="text-xs text-gray-500">Oct 1, 2026</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
