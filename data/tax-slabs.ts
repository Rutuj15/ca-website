export interface TaxInput {
  grossSalary: number;
  hraReceived: number;
  rentPaidMonthly: number;
  cityType: "metro" | "non-metro";
  section80C: number;
  section80DSelf: number;
  section80DParents: number;
  homeLoanInterest: number;
  nps80CCD1B: number;
  otherDeductions: number;
}

export interface TaxResult {
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  tax: number;
  cess: number;
  totalTax: number;
}

const INR = new Intl.NumberFormat("en-IN");

export function formatINR(amount: number): string {
  return `₹${INR.format(Math.round(amount))}`;
}

export function calculateOldRegime(input: TaxInput): TaxResult {
  const basic = input.grossSalary * 0.5;
  const annualRent = input.rentPaidMonthly * 12;
  const hraExemption = Math.min(
    input.hraReceived,
    (input.cityType === "metro" ? 0.5 : 0.4) * basic * 12,
    annualRent - 0.1 * basic * 12
  );
  const actualHraExemption = Math.max(0, hraExemption);

  const standardDeduction = 50000;
  const section80C = Math.min(input.section80C, 150000);
  const section80DSelf = Math.min(input.section80DSelf, 25000);
  const section80DParents = Math.min(input.section80DParents, 25000);
  const homeLoanInterest = Math.min(input.homeLoanInterest, 200000);
  const nps = Math.min(input.nps80CCD1B, 50000);

  const totalDeductions =
    actualHraExemption +
    standardDeduction +
    section80C +
    section80DSelf +
    section80DParents +
    homeLoanInterest +
    nps +
    input.otherDeductions;

  const taxableIncome = Math.max(0, input.grossSalary - totalDeductions);

  // Old regime slabs
  let tax = 0;
  if (taxableIncome <= 250000) {
    tax = 0;
  } else if (taxableIncome <= 500000) {
    tax = (taxableIncome - 250000) * 0.05;
  } else if (taxableIncome <= 1000000) {
    tax = 12500 + (taxableIncome - 500000) * 0.2;
  } else {
    tax = 112500 + (taxableIncome - 1000000) * 0.3;
  }

  // Rebate u/s 87A
  if (taxableIncome <= 500000) {
    tax = Math.max(0, tax - 12500);
  }

  const cess = tax * 0.04;
  const totalTax = tax + cess;

  return {
    grossIncome: input.grossSalary,
    totalDeductions,
    taxableIncome,
    tax,
    cess,
    totalTax,
  };
}

export function calculateNewRegime(input: TaxInput): TaxResult {
  const standardDeduction = 75000;
  const totalDeductions = standardDeduction;
  const taxableIncome = Math.max(0, input.grossSalary - totalDeductions);

  // New regime slabs FY 2025-26
  let tax = 0;
  if (taxableIncome <= 400000) {
    tax = 0;
  } else if (taxableIncome <= 800000) {
    tax = (taxableIncome - 400000) * 0.05;
  } else if (taxableIncome <= 1200000) {
    tax = 20000 + (taxableIncome - 800000) * 0.1;
  } else if (taxableIncome <= 1600000) {
    tax = 60000 + (taxableIncome - 1200000) * 0.15;
  } else if (taxableIncome <= 2000000) {
    tax = 120000 + (taxableIncome - 1600000) * 0.2;
  } else if (taxableIncome <= 2400000) {
    tax = 200000 + (taxableIncome - 2000000) * 0.25;
  } else {
    tax = 300000 + (taxableIncome - 2400000) * 0.3;
  }

  // Rebate u/s 87A
  if (taxableIncome <= 1200000) {
    tax = Math.max(0, tax - 60000);
  }

  const cess = tax * 0.04;
  const totalTax = tax + cess;

  return {
    grossIncome: input.grossSalary,
    totalDeductions,
    taxableIncome,
    tax,
    cess,
    totalTax,
  };
}
