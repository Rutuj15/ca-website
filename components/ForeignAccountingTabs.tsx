"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

interface TabSection {
  heading: string;
  content: string;
  listItems?: string[];
}

interface CountryTab {
  label: string;
  value: string;
  sections: TabSection[];
}

const tabs: CountryTab[] = [
  {
    label: "United Kingdom",
    value: "uk",
    sections: [
      {
        heading: "Bookkeeping",
        content:
          "Monthly bookkeeping for UK-based sole traders, partnerships, and limited companies using Xero, QuickBooks, Sage, or FreeAgent. All transactions are categorised, bank reconciliations completed, and the books closed within the agreed turnaround time.",
      },
      {
        heading: "VAT Returns",
        content:
          "Preparation and filing of quarterly or monthly VAT returns under the standard, flat rate, or cash accounting scheme. Making Tax Digital (MTD) compliance is ensured for all VAT-registered businesses. The firm works with the client's VAT scheme and ensures that all input and output VAT is correctly accounted for.",
      },
      {
        heading: "Payroll (RTI)",
        content:
          "Processing of monthly payroll under the Real Time Information (RTI) system, including computation of PAYE and National Insurance contributions, generation of payslips, and submission of FPS (Full Payment Submission) to HMRC. Year-end processing includes P60 generation and P11D preparation where applicable.",
      },
      {
        heading: "Year-End Accounts",
        content:
          "Preparation of year-end working papers, adjustment entries, and final accounts for limited companies (micro-entity, small company, or full accounts as applicable). The working papers are delivered in a format ready for the client's reviewing accountant or auditor, reducing their review time and the client's overall cost.",
      },
    ],
  },
  {
    label: "United States",
    value: "us",
    sections: [
      {
        heading: "Bookkeeping",
        content:
          "Monthly bookkeeping using QuickBooks Online, QuickBooks Desktop, Xero, or Wave. Transaction categorisation follows US chart of accounts conventions, and bank and credit card reconciliations are completed monthly. Clean books ensure that the CPA's year-end work is limited to tax adjustments rather than clean-up.",
      },
      {
        heading: "Accounts Payable and Receivable",
        content:
          "Management of the accounts payable and receivable cycles, including invoice creation, bill entry, payment processing, and collections follow-up. Ageing reports are generated weekly or monthly as required by the client.",
      },
      {
        heading: "Payroll Support",
        content:
          "Support with payroll processing using Gusto, ADP, QuickBooks Payroll, or other payroll platforms. This includes entering employee hours, verifying payroll calculations, and reconciling payroll registers with the general ledger. The firm does not provide US tax advice but ensures that the bookkeeping accurately reflects payroll transactions.",
      },
      {
        heading: "Financial Reporting",
        content:
          "Monthly or quarterly financial reporting including the Income Statement (P&L), Balance Sheet, and Cash Flow statement. Reports can be customised to match the client's reporting requirements, including department-wise or class-wise reporting as used in US accounting practice.",
      },
    ],
  },
  {
    label: "Australia",
    value: "au",
    sections: [
      {
        heading: "Bookkeeping (Xero / MYOB)",
        content:
          "Monthly bookkeeping using Xero or MYOB, following Australian chart of accounts conventions. Transaction categorisation, bank reconciliation, and superannuation tracking are completed monthly. The firm is experienced with Australian GST (10%) treatment and BAS-related coding requirements.",
      },
      {
        heading: "BAS Preparation",
        content:
          "Preparation of Business Activity Statements (BAS) for quarterly or monthly reporting. This includes computing GST on sales and purchases, PAYG withholding, and PAYG instalments. The BAS data is delivered to the client's tax agent for review and lodgement, or lodged directly if the firm is authorised through the tax agent.",
      },
      {
        heading: "Payroll and STP",
        content:
          "Processing of fortnightly or monthly payroll, including PAYG withholding, superannuation guarantee contributions, and Single Touch Payroll (STP) reporting. Payslips are generated and the payroll register is reconciled with the general ledger.",
      },
      {
        heading: "Year-End Workpapers",
        content:
          "Preparation of year-end working papers, adjustment journals, and financial reports for the client's tax agent. This includes reconciliation of all balance sheet accounts, review of tax-coded transactions, and preparation of the trial balance with proposed adjustments. The tax agent's review time is significantly reduced, lowering the overall compliance cost for the client.",
      },
    ],
  },
];

export default function ForeignAccountingTabs() {
  return (
    <Tabs defaultValue="uk" className="w-full">
      <TabsList className="w-full max-w-md">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="space-y-10">
            {tab.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="font-serif text-xl font-bold text-navy md:text-2xl">
                  {section.heading}
                </h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
                  {section.content}
                </p>
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="mt-3 max-w-3xl space-y-2">
                    {section.listItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
