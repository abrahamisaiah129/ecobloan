"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="relative flex w-full items-center justify-center rounded-lg bg-[#003366] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#0b4b82] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending && <span className="absolute inset-0 animate-pulse rounded-lg bg-white/10" />}
      {pending ? "Loading your profile..." : "Continue securely"}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#003366]">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2f8] text-[#003366]">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d48f00]">Secure access</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#10233f]">View your details</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">Sign in to view your protected demo profile and application status.</p>
          <form action={formAction} className="mt-8 space-y-5">
            <div>
              <label htmlFor="username" className="mb-1.5 block text-sm font-semibold text-slate-700">Username</label>
              <input id="username" name="username" required autoComplete="username" className="block w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#0b4b82] focus:ring-2 focus:ring-[#0b4b82]/20" />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-[#0b4b82] focus:ring-2 focus:ring-[#0b4b82]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 transition-colors hover:text-[#003366]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {state.error && <p role="alert" className="text-sm font-medium text-red-600">{state.error}</p>}
            <SubmitButton />
          </form>
        </div>
      </div>
    </main>
  );
}
