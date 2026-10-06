"use server";

import dbConnect from "@/lib/mongodb";
import { Loan, AdminConfig } from "@/models/Schema";
import { revalidatePath } from "next/cache";

export async function getAdminData() {
  try {
    await dbConnect();
    // Ensure admin config exists
    let admin = await AdminConfig.findOne({});
    if (!admin) {
      admin = await AdminConfig.create({ balance: 10000000 });
    }
    
    const loans = await Loan.find({}).sort({ createdAt: -1 });
    return {
      balance: admin.balance,
      loans: JSON.parse(JSON.stringify(loans)) // serialize for client
    };
  } catch (error) {
    console.error("DB Error:", error);
    return { balance: 0, loans: [], error: "Failed to connect to database" };
  }
}

export async function approveLoan(loanId: string) {
  await dbConnect();
  await Loan.findByIdAndUpdate(loanId, { status: "APPROVED" });
  revalidatePath("/admin");
}

export async function disburseLoan(loanId: string, amount: number) {
  await dbConnect();
  
  const admin = await AdminConfig.findOne({});
  if (!admin || admin.balance < amount) {
    throw new Error("Insufficient admin balance to disburse");
  }
  
  await AdminConfig.findByIdAndUpdate(admin._id, { $inc: { balance: -amount } });
  await Loan.findByIdAndUpdate(loanId, { status: "DISBURSED" });
  
  revalidatePath("/admin");
}

export async function seedMockLoan() {
  await dbConnect();
  await Loan.create({
    user: "John Doe",
    amount: 5000,
    status: "PENDING"
  });
  revalidatePath("/admin");
}
