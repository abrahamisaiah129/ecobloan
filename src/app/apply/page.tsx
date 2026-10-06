"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, UploadCloud } from "lucide-react";

export default function ApplyPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock application submission -> go to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="flex items-center text-gray-500 hover:text-[#004b87] mb-8 font-medium w-fit">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#004b87] p-8 text-white">
            <h1 className="text-3xl font-extrabold mb-2">Loan Application Form</h1>
            <p className="text-blue-100">Please complete all required fields. Your information is securely encrypted.</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1: Loan Details */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">1. Loan Facility Details</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Type of Facility</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent rounded-lg bg-gray-50">
                      <option value="">Select Facility</option>
                      <option>Personal Loan</option>
                      <option>Salary Advance</option>
                      <option>Auto Loan</option>
                      <option>Mortgage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Branch</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent rounded-lg bg-gray-50">
                      <option value="">Select Branch</option>
                      <option>Kampala Road Branch</option>
                      <option>Parliament Avenue</option>
                      <option>Lugogo Mall</option>
                      <option>Entebbe Branch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Requested Amount (USD)</label>
                    <input type="number" required placeholder="e.g. 15000" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tenure (Months)</label>
                    <input type="number" required placeholder="e.g. 24" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                </div>
              </section>

              {/* Section 2: Personal Information */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">2. Personal Information</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent">
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name (Surname)</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                    <input type="date" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent">
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Marital Status</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent">
                      <option value="">Select</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Identification Type</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent">
                      <option>National ID</option>
                      <option>Passport</option>
                      <option>Driving License</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">ID Number</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                </div>
              </section>

              {/* Section 3: Contact & Address */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">3. Contact Details</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                    <input type="tel" required placeholder="+256" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input type="email" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Physical Residential Address</label>
                    <textarea required rows={2} className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent"></textarea>
                  </div>
                </div>
              </section>

              {/* Section 4: Employment & Income */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">4. Employment & Income</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Employment Status</label>
                    <select required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent">
                      <option value="">Select</option>
                      <option>Salaried</option>
                      <option>Self-Employed / Business</option>
                      <option>Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Employer / Business Name</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Net Monthly Income (USD)</label>
                    <input type="number" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                </div>
              </section>

              {/* Section 5: KYC Documents */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">5. Supporting Documents</h3>
                <p className="text-sm text-gray-500 mb-4">Please upload clear copies of the following documents to process your application.</p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  
                  {/* ID Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-blue-50 transition-colors">
                    <UploadCloud className="w-8 h-8 text-[#00a1e0] mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Copy of Valid ID</p>
                    <p className="text-xs text-gray-500 mb-3">National ID or Passport</p>
                    <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#004b87] file:text-white hover:file:bg-[#003865] cursor-pointer w-full" />
                  </div>

                  {/* Payslips Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-blue-50 transition-colors">
                    <UploadCloud className="w-8 h-8 text-[#00a1e0] mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Latest Payslips</p>
                    <p className="text-xs text-gray-500 mb-3">Last 3 months</p>
                    <input type="file" multiple className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#004b87] file:text-white hover:file:bg-[#003865] cursor-pointer w-full" />
                  </div>
                  
                  {/* Employer Letter */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-blue-50 transition-colors sm:col-span-2">
                    <UploadCloud className="w-8 h-8 text-[#00a1e0] mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Letter of Undertaking from Employer</p>
                    <p className="text-xs text-gray-500 mb-3">Must be signed and stamped</p>
                    <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#004b87] file:text-white hover:file:bg-[#003865] cursor-pointer max-w-sm mx-auto" />
                  </div>

                </div>
              </section>

              {/* Section 6: Disbursement Account Details */}
              <section>
                <h3 className="text-xl font-bold text-[#004b87] border-b-2 border-gray-100 pb-2 mb-6">6. Disbursement Account Details</h3>
                <p className="text-sm text-gray-500 mb-4">Please provide the account details where the loan will be disbursed.</p>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Bank Name</label>
                    <input type="text" required placeholder="e.g. Standard Chartered Bank" className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Account Number</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Account Name</label>
                    <input type="text" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#00a1e0] focus:border-transparent" />
                  </div>
                </div>
              </section>

              {/* Declarations */}
              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <div className="flex items-start">
                  <input type="checkbox" required className="mt-1 w-5 h-5 text-[#004b87] border-gray-300 rounded focus:ring-[#00a1e0]" />
                  <div className="ml-3 text-sm text-gray-600">
                    <p className="font-semibold text-gray-800 mb-1">Declaration and Consent</p>
                    <p>
                      I hereby declare that the information provided in this application is true and correct. I authorize Faivelon to verify this information through Credit Reference Bureaus and my employer. I understand that false information may lead to the rejection of my application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Bank-Grade Encryption Enabled</span>
                </div>
                <button
                  type="submit"
                  className="bg-[#004b87] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#003865] hover:scale-105 transition-all duration-200 text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
