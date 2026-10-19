"use server";

import { redirect } from "next/navigation";
import { createSession, validateCredentials } from "@/lib/auth";

export type LoginState = {
  error?: string;
};

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { error: "Enter your username and password." };
  }

  try {
    if (!validateCredentials(username, password)) {
      return { error: "Invalid username or password." };
    }
    await createSession(username);
  } catch (error) {
    console.error("Login configuration error:", error);
    return { error: "Sign-in is temporarily unavailable. Please contact support." };
  }

  redirect("/dashboard");
}
