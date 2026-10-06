"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      // Mock auth using localStorage
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      setError("Invalid admin password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <ShieldCheck className="w-16 h-16 text-[#002244] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#002244]">Admin Access</h2>
          <p className="text-gray-500 mt-2">Enter your credentials to access the portal</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Admin Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#F2A900] focus:border-[#F2A900]" 
              placeholder="Hint: admin123"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-[#002244] text-white py-3 rounded-lg font-bold hover:bg-[#001122]">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
