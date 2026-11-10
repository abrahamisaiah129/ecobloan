import Link from "next/link";
import { CheckCircle2, Clock, FileText } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Ecobloan Logo" className="h-8 object-contain" />
            </Link>
            <Link href="/apply" className="text-sm font-semibold text-[#004b87] hover:text-[#d48f00]">
              Start another application
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Application overview</h1>
          <p className="mt-1 text-gray-600">Track the progress of your loan application here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
              <Clock className="w-6 h-6 text-[#00a1e0]" />
              <h2 className="text-xl font-bold text-gray-800">Loan Application</h2>
            </div>

            <div className="rounded-lg border border-orange-100 bg-orange-50 p-5">
              <div>
                <div className="flex items-center gap-3 mb-1">
                <span className="rounded bg-orange-200 px-2 py-1 text-xs font-bold text-orange-800">Under review</span>
                <h3 className="font-bold text-gray-900">Loan application</h3>
                </div>
              <p className="text-sm text-gray-600">Your information has been received and is being reviewed by our team.</p>
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h2 className="font-bold text-gray-900">What happens next?</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We&apos;ll contact you if we need anything else. You can safely close this page and return later.
                </p>
              </div>
              </div>
            </div>

            <div className="bg-[#004b87] rounded-xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Contact support if you need help with your application.
                </p>
                <button className="w-full bg-white text-[#004b87] font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Support
                </button>
              </div>
              <FileText className="absolute -bottom-4 -right-4 w-32 h-32 text-white opacity-10" />
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-bold text-gray-800">Need to update something?</h3>
              <p className="text-sm text-gray-600">Contact support and reference your application details for assistance.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
