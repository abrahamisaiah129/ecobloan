import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "ecobloan_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export type CustomerProfile = {
  name: string;
  company: string;
  business: string;
  phone: string;
  loanAmount: number;
  loanStatus: string;
  bank: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function signSession(value: string) {
  return createHmac("sha256", getRequiredEnv("ECOBLOAN_SESSION_SECRET"))
    .update(value)
    .digest("hex");
}

function createSessionToken(username: string) {
  const payload = Buffer.from(
    JSON.stringify({ username, expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000 }),
  ).toString("base64url");
  return `${payload}.${signSession(payload)}`;
}

function isValidSessionToken(token: string | undefined) {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expectedSignature = signSession(payload);
  const provided = Buffer.from(signature, "hex");
  const expected = Buffer.from(expectedSignature, "hex");

  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return false;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      username?: string;
      expiresAt?: number;
    };
    return (
      session.username === getRequiredEnv("ECOBLOAN_USERNAME") &&
      typeof session.expiresAt === "number" &&
      session.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}

export function getCustomerProfile(): CustomerProfile {
  return {
    name: getRequiredEnv("ECOBLOAN_CUSTOMER_NAME"),
    company: getRequiredEnv("ECOBLOAN_CUSTOMER_COMPANY"),
    business: getRequiredEnv("ECOBLOAN_CUSTOMER_BUSINESS"),
    phone: getRequiredEnv("ECOBLOAN_CUSTOMER_PHONE"),
    loanAmount: Number(getRequiredEnv("ECOBLOAN_LOAN_AMOUNT")),
    loanStatus: getRequiredEnv("ECOBLOAN_LOAN_STATUS"),
    bank: getRequiredEnv("ECOBLOAN_BANK_NAME"),
  };
}

export function validateCredentials(username: string, password: string) {
  return (
    username === getRequiredEnv("ECOBLOAN_USERNAME") &&
    password === getRequiredEnv("ECOBLOAN_PASSWORD")
  );
}

export async function createSession(username: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION_SECONDS,
    path: "/",
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function requireSession() {
  const cookieStore = await cookies();
  if (!isValidSessionToken(cookieStore.get(SESSION_COOKIE)?.value)) {
    return false;
  }
  return true;
}
