"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ClipboardList,
  Download,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Category =
  | "all"
  | "salaried"
  | "business"
  | "capital-gains"
  | "house-property"
  | "nri";

interface ChecklistItem {
  id: number;
  name: string;
  categories: Category[];
}

const ITEMS: ChecklistItem[] = [
  { id: 1, name: "PAN Card", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 2, name: "Aadhaar Card", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 3, name: "Form 16 (from employer)", categories: ["salaried"] },
  { id: 4, name: "Form 26AS / AIS / TIS", categories: ["salaried", "business", "capital-gains", "nri"] },
  { id: 5, name: "Bank Statements (all accounts)", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 6, name: "Interest Certificates (FD, Savings)", categories: ["salaried", "capital-gains", "nri"] },
  { id: 7, name: "Capital Gains Statements (from broker)", categories: ["capital-gains"] },
  { id: 8, name: "Property Registration Documents", categories: ["house-property"] },
  { id: 9, name: "80C Investment Proofs (PPF, ELSS, LIC)", categories: ["salaried", "business"] },
  { id: 10, name: "80D Health Insurance Premium Receipts", categories: ["salaried", "business", "nri"] },
  { id: 11, name: "Rent Receipts + Landlord PAN", categories: ["salaried"] },
  { id: 12, name: "Home Loan Interest Certificate", categories: ["salaried", "house-property"] },
  { id: 13, name: "Business Financial Statements (P&L, Balance Sheet)", categories: ["business"] },
  { id: 14, name: "GST Returns (if applicable)", categories: ["business"] },
  { id: 15, name: "TDS Certificates (Form 16A)", categories: ["salaried", "business"] },
  { id: 16, name: "Foreign Income Details / DTAA Documents", categories: ["nri"] },
  { id: 17, name: "Form 10F and Tax Residency Certificate", categories: ["nri"] },
  { id: 18, name: "Dividend Statements", categories: ["salaried", "capital-gains", "nri"] },
];

const FILTER_CHIPS: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "salaried", label: "Salaried" },
  { value: "business", label: "Business" },
  { value: "capital-gains", label: "Capital Gains" },
  { value: "house-property", label: "House Property" },
  { value: "nri", label: "NRI" },
];

export default function ITRChecklist() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const listRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeFilter === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.categories.includes(activeFilter));

  const checkedCount = filteredItems.filter((item) => checked.has(item.id)).length;
  const totalCount = filteredItems.length;
  const progressPct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  function toggleItem(id: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  async function downloadPDF() {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = listRef.current;
    if (!element) return;

    html2pdf()
      .set({
        margin: 10,
        filename: "ITR-Document-Checklist.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="size-5 text-gold" />
          ITR Document Checklist
        </CardTitle>
        <CardDescription>
          Select your category and track required documents
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {FILTER_CHIPS.map((chip) => (
            <Badge
              key={chip.value}
              variant={activeFilter === chip.value ? "default" : "outline"}
              className={cn(
                "cursor-pointer select-none transition-colors",
                activeFilter === chip.value && "bg-navy text-white hover:bg-navy-light"
              )}
              onClick={() => setActiveFilter(chip.value)}
            >
              {chip.label}
            </Badge>
          ))}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-sm font-medium">
              {checkedCount} of {totalCount} documents ready
            </span>
            <span className="ml-auto text-sm tabular-nums text-muted-foreground">
              {progressPct}%
            </span>
          </div>
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gold transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div ref={listRef} className="space-y-1">
          {filteredItems.map((item) => {
            const isChecked = checked.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted/60",
                  isChecked && "bg-muted/40"
                )}
              >
                {isChecked ? (
                  <CheckCircle2 className="size-5 shrink-0 text-green-600" />
                ) : (
                  <Circle className="size-5 shrink-0 text-muted-foreground" />
                )}
                <span
                  className={cn(
                    "flex-1",
                    isChecked && "text-muted-foreground line-through"
                  )}
                >
                  {item.name}
                </span>
                <div className="hidden gap-1 sm:flex">
                  {item.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block rounded bg-navy-50 px-1.5 py-0.5 text-[10px] font-medium text-navy"
                    >
                      {cat === "capital-gains"
                        ? "Cap. Gains"
                        : cat === "house-property"
                          ? "House Prop."
                          : cat === "nri"
                            ? "NRI"
                            : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Download */}
        <Button
          variant="outline"
          className="w-full"
          onClick={downloadPDF}
        >
          <Download className="size-4" />
          Download as PDF
        </Button>
      </CardContent>
    </Card>
  );
}
