"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - go directly to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600"
          alt="Modern building"
        />
        <div className="absolute inset-0 bg-[#00a1e0]/40 mix-blend-multiply" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link href="/" className="flex items-center text-gray-500 hover:text-[#004b87] mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Ecobloan Logo" className="h-10 object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#00a1e0] hover:text-[#004b87]">
                Sign in instead
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" id="first-name" required className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00a1e0] focus:border-[#00a1e0] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" id="last-name" required className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00a1e0] focus:border-[#00a1e0] sm:text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input id="email" type="email" required className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00a1e0] focus:border-[#00a1e0] sm:text-sm" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" type="password" required className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00a1e0] focus:border-[#00a1e0] sm:text-sm" />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#004b87] hover:bg-[#003865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004b87]"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
