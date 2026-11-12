import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { maskSensitiveValue } from "@/lib/maskSensitive";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const get = (name: string) => String(formData.get(name) ?? "").trim();

    const fields = {
      facility: get("facility"),
      country: get("country"),
      region: get("region"),
      branch: get("branch"),
      amount: get("amount"),
      tenure: get("tenure"),
      title: get("title"),
      firstName: get("firstName"),
      lastName: get("lastName"),
      dateOfBirth: get("dateOfBirth"),
      gender: get("gender"),
      maritalStatus: get("maritalStatus"),
      identificationType: get("identificationType"),
      identificationNumber: get("identificationNumber"),
      //       creditIdentifier: maskSensitiveValue(get("credit-identifier")) || "Not provided",
      creditIdentifier: (get("credit-identifier")),
      mobile: get("mobile"),
      email: get("email"),
      address: get("address"),
      employmentStatus: get("employmentStatus"),
      employer: get("employer"),
      jobTitle: get("jobTitle"),
      income: get("income"),
      bankName: get("bankName"),
      accountNumber: get("accountNumber"),
      accountName: get("accountName"),
    };

    const attachments = ["idDocument", "payslips", "employerLetter"]
      .flatMap((name) => {
        const values = formData.getAll(name);
        return values
          .filter((value): value is File => value instanceof File && value.size > 0)
          .map((file) => `${name}: ${file.name}`);
      });

    const text = [
      "New Ecobloan loan application",
      "",
      ...Object.entries(fields).map(([name, value]) => `${name}: ${value || "Not provided"}`),
      "",
      `Uploaded documents: ${attachments.length ? attachments.join(", ") : "None"}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: requiredEnv("SMTP_HOST"),
      port: Number(requiredEnv("SMTP_PORT")),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: requiredEnv("SMTP_USER"),
        pass: requiredEnv("SMTP_PASSWORD"),
      },
    });

    await transporter.sendMail({
      from: requiredEnv("ECOBLOAN_EMAIL_FROM"),
      to: requiredEnv("ECOBLOAN_APPLICATION_EMAIL"),
      subject: `New loan application from ${fields.firstName} ${fields.lastName}`.trim(),
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Loan application email error:", error);
    return NextResponse.json(
      { error: "We could not submit your application. Please try again or contact support." },
      { status: 500 },
    );
  }
}
