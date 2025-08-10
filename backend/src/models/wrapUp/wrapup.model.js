// src/models/wrapUp/wrapup.model.js
import mongoose from 'mongoose';

// ===== User Schema =====
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  // Add your actual user fields here
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);

// ===== Document Schema =====
const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: String,
  status: String,
  // other fields...
}, { timestamps: true });

export const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

// ===== ServiceCharge Schema =====
const serviceChargeSchema = new mongoose.Schema({
  category: String,
  serviceName: String,
  fee: Number,
  completionTime: String,
  requirements: [String],
  contactMethods: [String],
}, { timestamps: true });

export const ServiceCharge = mongoose.models.ServiceCharge || mongoose.model('ServiceCharge', serviceChargeSchema);

// ===== TaxCredit Schema =====
const taxCreditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  amount: Number,
  source: String,
}, { timestamps: true });

export const TaxCredit = mongoose.models.TaxCredit || mongoose.model('TaxCredit', taxCreditSchema);

// ===== Deduction Schemas =====
const bankTransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  amount: Number,
  description: String,
}, { timestamps: true });

export const BankTransaction = mongoose.models.BankTransaction || mongoose.model('BankTransaction', bankTransactionSchema);

const utilityDeductionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  amount: Number,
  utilityType: String,
}, { timestamps: true });

export const UtilityDeduction = mongoose.models.UtilityDeduction || mongoose.model('UtilityDeduction', utilityDeductionSchema);

const vehicleDeductionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  amount: Number,
  vehicleType: String,
}, { timestamps: true });

export const VehicleDeduction = mongoose.models.VehicleDeduction || mongoose.model('VehicleDeduction', vehicleDeductionSchema);

const otherDeductionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  amount: Number,
  reason: String,
}, { timestamps: true });

export const OtherDeduction = mongoose.models.OtherDeduction || mongoose.model('OtherDeduction', otherDeductionSchema);

// ===== Tax Filing Schema =====
const taxFilingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taxYear: String,
  cnicFiles: [String], // paths to uploaded files
  ntnCart: { type: Boolean, default: false },
}, { timestamps: true });

export const TaxFiling = mongoose.models.TaxFiling || mongoose.model('TaxFiling', taxFilingSchema);
