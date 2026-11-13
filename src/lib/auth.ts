import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { maskSensitiveValue } from "@/lib/maskSensitive";

// import { timingSafeEqual } from "crypto";
const SESSION_COOKIE = "ecobloan_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export type CustomerProfile = {
  kind: "loan_applicant" | "inheritance_transfer";
  name: string;
  organization: string;
  description: string;
  address: string;
  phone: string;
  amount: string;
  status: string;
  bank: string;
  accountNumber: string;
  swift: string;
  bankAddress: string;
  secondaryAmount?: string;
  sourceOfFunds?: string;
  beneficiaries?: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getOptionalEnv(name: string, fallback: string) {
  return process.env[name] ?? fallback;
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
      [getRequiredEnv("ECOBLOAN_USERNAME"), getOptionalEnv("ECOBLOAN_OLGA_USERNAME", "")].includes(session.username ?? "") &&
      typeof session.expiresAt === "number" &&
      session.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}

export function getCustomerProfile(username: string): CustomerProfile {
  const isInheritanceProfile =
    username === getOptionalEnv("ECOBLOAN_OLGA_USERNAME", "demo-olga");

  if (isInheritanceProfile) {
    return {
      kind: "inheritance_transfer",
      name: "Olga Luik",
      // image:"olga.png",
      organization: "Inheritance beneficiary",
      description: "Inheritance transfer",
      address: "Tartu mnt 2,1015  Tallinn, Estonia",
      phone: "+37253475191",
      amount: "EUR 3,000,400",
      status: "TRANSFER PENDING",
      bank: "LHV Bank, Estonia",
      accountNumber: "EE647700771006314391",
      swift: "LHVBEE22",
      bankAddress: "Tartu mnt 2,1015 tallinn",
      secondaryAmount: "EUR 8,400,000",
      sourceOfFunds: "United Nations",
      beneficiaries: "Rein Luik · Olga Luik",
    };
  }

  return {
    kind: "loan_applicant",
    // image:"bonga.png",
    name: getRequiredEnv("ECOBLOAN_CUSTOMER_NAME"),
    organization: getRequiredEnv("ECOBLOAN_CUSTOMER_COMPANY"),
    description: getRequiredEnv("ECOBLOAN_CUSTOMER_BUSINESS"),
    address: "Room 4, 16/F 2 Fa Yuen Street, Hong Kong",
    phone: maskSensitiveValue(getRequiredEnv("ECOBLOAN_CUSTOMER_PHONE")),
    amount: `USD ${Number(getRequiredEnv("ECOBLOAN_LOAN_AMOUNT")).toLocaleString("en-US")}`,
    status: "PENDING FOR MOBILE VERIFICATION",
    bank: getRequiredEnv("ECOBLOAN_BANK_NAME"),
    accountNumber: " 720 524495 833",
    swift: "HSBCHKHHHKH",
    bankAddress: "Queens Road Central, Hong Kong",
  };
}


function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    return false;
  }
  // return timingSafeEqual(bufA, bufB);
  return 
}

export function validateCredentials(username: string, password: string): boolean {
  const primaryUser = getRequiredEnv("ECOBLOAN_USERNAME");
  const primaryPass = getRequiredEnv("ECOBLOAN_PASSWORD");

  const isPrimaryValid =
    (username==primaryUser) &&
    ((password== primaryPass));

  const olgaUser = getOptionalEnv("ECOBLOAN_OLGA_USERNAME", "");
  const olgaPass = getOptionalEnv("ECOBLOAN_OLGA_PASSWORD", "");

  const isOlgaValid = 
     (username==olgaUser) &&
    ((password== olgaPass));

  return isPrimaryValid || isOlgaValid;
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
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!isValidSessionToken(token)) {
    return null;
  }
  return JSON.parse(Buffer.from(token!.split(".")[0], "base64url").toString("utf8")).username as string;
}
