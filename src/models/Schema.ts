import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
  user: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["PENDING", "APPROVED", "DISBURSED", "REJECTED"], default: "PENDING" },
  createdAt: { type: Date, default: Date.now }
});

export const Loan = mongoose.models.Loan || mongoose.model("Loan", LoanSchema);

const AdminSchema = new mongoose.Schema({
  balance: { type: Number, default: 5000000 } // Default admin balance for disbursements
});

export const AdminConfig = mongoose.models.AdminConfig || mongoose.model("AdminConfig", AdminSchema);
