"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  calculateOldRegime,
  calculateNewRegime,
  formatINR,
  type TaxInput,
} from "@/data/tax-slabs";
import { RotateCcw, Calculator } from "lucide-react";

const initialInput: TaxInput = {
  grossSalary: 0,
  hraReceived: 0,
  rentPaidMonthly: 0,
  cityType: "metro",
  section80C: 0,
  section80DSelf: 0,
  section80DParents: 0,
  homeLoanInterest: 0,
  nps80CCD1B: 0,
  otherDeductions: 0,
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

export default function TaxRegimeCalculator() {
  const [input, setInput] = useState<TaxInput>(initialInput);
  const [calculated, setCalculated] = useState(false);

  const oldResult = calculateOldRegime(input);
  const newResult = calculateNewRegime(input);

  const savings = oldResult.totalTax - newResult.totalTax;
  const betterRegime = savings >= 0 ? "New" : "Old";
  const savingsAmount = Math.abs(savings);

  function updateField(field: keyof TaxInput, value: number | string) {
    setInput((prev) => ({
      ...prev,
      [field]: typeof value === "string" ? Number(value) || 0 : value,
    }));
  }

  function handleReset() {
    setInput(initialInput);
    setCalculated(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input Column */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="size-5 text-gold" />
            Income Details
          </CardTitle>
          <CardDescription>
            Enter your salary and investment details for FY 2025-26
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field label="Gross Annual Salary (₹)">
            <Input
              type="number"
              min={0}
              value={input.grossSalary || ""}
              onChange={(e) => updateField("grossSalary", e.target.value)}
              placeholder="e.g. 1200000"
            />
          </Field>

          <Field label="HRA Received (₹)">
            <Input
              type="number"
              min={0}
              value={input.hraReceived || ""}
              onChange={(e) => updateField("hraReceived", e.target.value)}
              placeholder="e.g. 200000"
            />
          </Field>

          <Field label="Rent Paid Monthly (₹)">
            <Input
              type="number"
              min={0}
              value={input.rentPaidMonthly || ""}
              onChange={(e) => updateField("rentPaidMonthly", e.target.value)}
              placeholder="e.g. 15000"
            />
          </Field>

          <Field label="City Type">
            <Select
              value={input.cityType}
              onValueChange={(v) =>
                updateField("cityType", v as "metro" | "non-metro")
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metro">Metro (40% of basic)</SelectItem>
                <SelectItem value="non-metro">
                  Non-metro (50% of basic)
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <div className="border-t pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Deductions (Old Regime)
            </p>
          </div>

          <Field label="80C Investments - PPF, ELSS, LIC (₹, max ₹1,50,000)">
            <Input
              type="number"
              min={0}
              value={input.section80C || ""}
              onChange={(e) => updateField("section80C", e.target.value)}
              placeholder="e.g. 150000"
            />
          </Field>

          <Field label="80D Health Insurance - Self (₹, max ₹25,000)">
            <Input
              type="number"
              min={0}
              value={input.section80DSelf || ""}
              onChange={(e) => updateField("section80DSelf", e.target.value)}
              placeholder="e.g. 25000"
            />
          </Field>

          <Field label="80D Health Insurance - Parents (₹, max ₹25,000)">
            <Input
              type="number"
              min={0}
              value={input.section80DParents || ""}
              onChange={(e) => updateField("section80DParents", e.target.value)}
              placeholder="e.g. 25000"
            />
          </Field>

          <Field label="Home Loan Interest - Self-occupied (₹, max ₹2,00,000)">
            <Input
              type="number"
              min={0}
              value={input.homeLoanInterest || ""}
              onChange={(e) => updateField("homeLoanInterest", e.target.value)}
              placeholder="e.g. 200000"
            />
          </Field>

          <Field label="NPS 80CCD(1B) (₹, max ₹50,000)">
            <Input
              type="number"
              min={0}
              value={input.nps80CCD1B || ""}
              onChange={(e) => updateField("nps80CCD1B", e.target.value)}
              placeholder="e.g. 50000"
            />
          </Field>

          <Field label="Other Deductions (₹)">
            <Input
              type="number"
              min={0}
              value={input.otherDeductions || ""}
              onChange={(e) => updateField("otherDeductions", e.target.value)}
              placeholder="e.g. 0"
            />
          </Field>

          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1 bg-navy hover:bg-navy-light"
              onClick={() => setCalculated(true)}
            >
              Calculate Tax
            </Button>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="size-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Column */}
      <Card>
        <CardHeader>
          <CardTitle>Tax Comparison</CardTitle>
          <CardDescription>
            Side-by-side Old vs New Regime (FY 2025-26)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!calculated ? (
            <div className="flex h-64 items-center justify-center text-muted-foreground">
              <p className="text-center">
                Enter your details and click &ldquo;Calculate Tax&rdquo; to see
                the comparison
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 text-left font-medium text-muted-foreground">
                        Particulars
                      </th>
                      <th className="px-4 py-2 text-right font-medium text-muted-foreground">
                        Old Regime
                      </th>
                      <th className="px-4 py-2 text-right font-medium text-muted-foreground">
                        New Regime
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <Row label="Gross Income" old={oldResult.grossIncome} new_={newResult.grossIncome} />
                    <Row label="Total Deductions" old={oldResult.totalDeductions} new_={newResult.totalDeductions} />
                    <Row label="Taxable Income" old={oldResult.taxableIncome} new_={newResult.taxableIncome} bold />
                    <Row label="Tax" old={oldResult.tax} new_={newResult.tax} />
                    <Row label="Cess (4%)" old={oldResult.cess} new_={newResult.cess} />
                    <Row label="Total Tax" old={oldResult.totalTax} new_={newResult.totalTax} bold />
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg bg-navy/5 p-4 text-center">
                <p className="text-sm text-muted-foreground">You save</p>
                <p className="text-2xl font-bold text-navy">
                  {formatINR(savingsAmount)}
                </p>
                <p className="text-sm text-muted-foreground">
                  under the{" "}
                  <span className="font-semibold text-gold-dark">
                    {betterRegime} Regime
                  </span>
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Row({
  label,
  old,
  new_,
  bold,
}: {
  label: string;
  old: number;
  new_: number;
  bold?: boolean;
}) {
  const cls = bold ? "font-semibold" : "";
  return (
    <tr className="border-b border-border/50">
      <td className={`py-2 pr-4 ${cls}`}>{label}</td>
      <td className={`px-4 py-2 text-right ${cls}`}>{formatINR(old)}</td>
      <td className={`px-4 py-2 text-right ${cls}`}>{formatINR(new_)}</td>
    </tr>
  );
}
