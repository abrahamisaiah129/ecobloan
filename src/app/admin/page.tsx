"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminData, approveLoan, disburseLoan, seedMockLoan } from "./actions";
import { DollarSign, Check, Send, AlertCircle, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<{balance: number, loans: any[], error?: string} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check mock auth
    if (localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login");
      return;
    }
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const result = await getAdminData();
    setData(result);
    setLoading(false);
  };

  const handleApprove = async (id: string) => {
    await approveLoan(id);
    await loadData();
  };

  const handleDisburse = async (id: string, amount: number) => {
    try {
      await disburseLoan(id, amount);
      await loadData();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleSeed = async () => {
    await seedMockLoan();
    await loadData();
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-[#002244]">Loading Admin Portal...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#002244] text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShieldIcon className="w-6 h-6 text-[#F2A900]" /> Ecobloan Admin Portal
          </h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-300 hover:text-white">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 mt-8">
        {data?.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Database Error: </strong>
            <span className="block sm:inline">{data.error}. Check your MongoDB connection string.</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#F2A900]">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Total Admin Balance</p>
            <h2 className="text-4xl font-extrabold text-[#002244] flex items-center">
              <DollarSign className="w-8 h-8 mr-1 text-[#F2A900]" />
              {(data?.balance || 0).toLocaleString()}
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-start">
             <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Actions</p>
             <button onClick={handleSeed} className="bg-gray-100 text-[#002244] px-4 py-2 rounded font-semibold hover:bg-gray-200">
               + Create Mock Loan Request
             </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#002244] mb-6">Loan Applications</h2>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.loans?.length === 0 && (
                <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">No loans found.</td></tr>
              )}
              {data?.loans?.map((loan) => (
                <tr key={loan._id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{loan.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-[#002244]">${loan.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${loan.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${loan.status === 'APPROVED' ? 'bg-blue-100 text-blue-800' : ''}
                      ${loan.status === 'DISBURSED' ? 'bg-green-100 text-green-800' : ''}
                    `}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {loan.status === "PENDING" && (
                      <button onClick={() => handleApprove(loan._id)} className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Approve
                      </button>
                    )}
                    {loan.status === "APPROVED" && (
                      <button onClick={() => handleDisburse(loan._id, loan.amount)} className="text-green-600 hover:text-green-900 flex items-center gap-1">
                        <Send className="w-4 h-4" /> Disburse
                      </button>
                    )}
                    {loan.status === "DISBURSED" && (
                      <span className="text-gray-400">Completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
