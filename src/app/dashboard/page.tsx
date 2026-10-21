import Link from "next/link";
import { redirect } from "next/navigation";
import { Clock, FileText, LogOut, User } from "lucide-react";
import { logout } from "./actions";
import { getCustomerProfile, requireSession } from "@/lib/auth";

export default async function DashboardPage() {
  if (!(await requireSession())) {
    redirect("/login");
  }

  const profile = getCustomerProfile();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center gap-2">
              <img src="/logo.png" alt="Ecobloan Logo" className="h-8 object-contain" />
            </Link>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5 text-[#004b87]" />
                <span className="font-medium">{profile.name}</span>
              </div>
              <form action={logout}>
                <button type="submit" className="text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors">
                  <LogOut className="w-4 h-4" /> <span className="text-sm font-medium">Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">My Dashboard</h1>
          <p className="text-gray-600 mt-1">{profile.company} · {profile.business}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
              <Clock className="w-6 h-6 text-[#00a1e0]" />
              <h2 className="text-xl font-bold text-gray-800">Loan Application</h2>
            </div>

            <div className="border border-orange-100 bg-orange-50 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded">
                    {profile.loanStatus}
                  </span>
                  <h3 className="font-bold text-gray-900">Business Loan</h3>
                </div>
                <p className="text-sm text-gray-600">Bank verification is required before processing can continue.</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-500 font-medium">Requested Amount</p>
                <p className="text-xl font-bold text-[#004b87]">
                  ${profile.loanAmount.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-4">
                <img
                  src="/profile/bonga-willy.jpg"
                  alt={`${profile.name} profile`}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Account holder</p>
                  <h2 className="font-bold text-gray-900 truncate">{profile.name}</h2>
                  <p className="text-sm text-gray-600 truncate">{profile.company}</p>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Verified contact</p>
                <p className="mt-1 text-sm text-gray-700">{profile.phone}</p>
              </div>
            </div>

            <div className="bg-[#004b87] rounded-xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Contact support if you need help completing mobile verification.
                </p>
                <button className="w-full bg-white text-[#004b87] font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Support
                </button>
              </div>
              <FileText className="absolute -bottom-4 -right-4 w-32 h-32 text-white opacity-10" />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4">Disbursement Bank</h3>
              <p className="text-sm text-gray-600">{profile.bank}</p>
              <p className="text-xs text-gray-500 mt-2">Account details are protected and not displayed here.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
