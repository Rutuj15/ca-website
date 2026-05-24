import type { ServicePageProps } from "@/components/ServicePage";

export const gstServices: ServicePageProps = {
  title: "GST Services: Compliance, Advisory, and Notice Representation",
  description:
    "Goods and Services Tax is a monthly obligation for most businesses in India. Missed deadlines attract interest and late fees. Mismatches in GSTR-2B reconciliation attract notices. Incorrect ITC claims are reversed with demand and penalty. For a business owner whose core competence is manufacturing, trading, or services rather than tax law, managing all of this accurately and on time is a genuine operational problem.\n\nThe firm handles GST compliance and advisory for businesses in CSN (Aurangabad), across Maharashtra, and for clients in other states and countries through remote engagement. Work covers registration through to notice resolution.",
  sections: [
    {
      heading: "GST Registration",
      content:
        "Threshold-based registration, voluntary registration, composition scheme registration, and registration for non-resident taxable persons, handled with correct classification of business activity, HSN/SAC mapping, and proper documentation from the start. Incorrect classification at registration creates problems that follow a business for years.",
    },
    {
      heading: "GST Returns: GSTR-1, GSTR-3B, GSTR-9, GSTR-9C",
      content:
        "Monthly and quarterly return preparation and filing across GSTR-1 (outward supplies), GSTR-3B (summary return and tax payment), GSTR-9 (annual return), and GSTR-9C (reconciliation statement). The central task is GSTR-2B reconciliation, which means matching your purchase register against what your vendors have filed. Unmatched ITC is the most common trigger for GST notices.",
    },
    {
      heading: "Input Tax Credit Management",
      content:
        "ITC eligibility under Section 17(5) is a frequent source of errors. Blocked credits on motor vehicles, employee-related expenses, and certain construction activities are routinely claimed in error. The firm reviews ITC claims for eligibility, reconciles GSTR-2B monthly, and keeps the credit register clean before returns are filed.",
    },
    {
      heading: "GST Notices and Assessments",
      content:
        "Show cause notices, demand orders, mismatched ITC notices, scrutiny notices, and DRC-01 demands are responded to with a written reply citing the correct legal provisions and factual position. Many notices that appear threatening are resolvable at the first stage with a proper response.",
    },
    {
      heading: "GST Audit under Section 35(5)",
      content:
        "For businesses with turnover above Rs. 2 crore in a financial year, GSTR-9C requires a reconciliation statement certified by a CA. The firm conducts GST audits and prepares GSTR-9C, along with support for departmental audits initiated by the GST department.",
    },
    {
      heading: "E-Invoicing and E-Way Bill Compliance",
      content:
        "Businesses above the applicable aggregate turnover threshold must generate e-invoices through the IRP. The firm assists with e-invoicing system setup, IRN generation troubleshooting, and e-way bill compliance for goods movement.",
    },
    {
      heading: "Sector-Specific GST Advisory",
      content:
        "GST rates and compliance requirements differ significantly across sectors. Manufacturing businesses in CSN (Aurangabad) dealing with job work, composite supply, and mixed supply have specific compliance requirements. Export-linked businesses need to manage LUT filing, refund claims, and zero-rated supply documentation.",
    },
  ],
  faqs: [
    {
      question: "What is the GST registration threshold?",
      answer:
        "For goods suppliers, the threshold is Rs. 40 lakh (Rs. 20 lakh for special category states). For service providers, the threshold is Rs. 20 lakh (Rs. 10 lakh for special category states). However, certain businesses like interstate suppliers, e-commerce operators, and casual taxable persons must register regardless of turnover.",
    },
    {
      question: "How is GSTR-2B reconciliation done?",
      answer:
        "GSTR-2B reconciliation involves matching your purchase register (the ITC you are claiming) against what your vendors have actually reported in their GSTR-1. Only ITC that appears in GSTR-2B can be claimed. The firm performs this reconciliation monthly to ensure no excess credits are claimed and no eligible credits are missed.",
    },
    {
      question: "What happens if a GST return is filed late?",
      answer:
        "Late filing of GSTR-3B attracts a late fee of Rs. 50 per day (Rs. 20 for nil returns) per return, capped at Rs. 5,000. Interest at 18% per annum is charged on the unpaid tax amount from the due date until the date of payment. Persistent non-filing can lead to the GST registration being suspended or cancelled.",
    },
  ],
};

export const incomeTax: ServicePageProps = {
  title: "Income Tax Filing and Planning: Individuals, Business Owners, and Companies",
  description:
    "Income tax compliance in India is not limited to filing a return once a year. For salaried individuals, the choice between the old and new tax regime can mean a difference of tens of thousands of rupees. For business owners and professionals, advance tax instalments, TDS obligations, and accurate income computation require ongoing attention. For companies, the tax audit threshold, MAT provisions, and transfer pricing documentation add further layers.\n\nThe firm handles income tax compliance and advisory across all these categories, from ITR filing to notice representation, for clients in CSN (Aurangabad), across Maharashtra, and remotely across India.",
  sections: [
    {
      heading: "ITR Filing for All Assessees",
      content:
        "Filing of ITR-1 through ITR-7 depending on income sources and entity type. The firm identifies the correct form, computes taxable income, claims applicable deductions and exemptions, and files within the due date. For salaried individuals, this includes HRA exemption calculation, standard deduction, and Section 80C/80D claims. For business owners, it includes income computation under Section 44AD, 44ADA, or regular audit provisions.",
    },
    {
      heading: "New vs Old Tax Regime",
      content:
        "The new tax regime (Section 115BAC) offers lower slab rates but removes most deductions and exemptions. The old regime retains deductions but has higher rates. The correct choice depends on the individual's specific deduction profile. The firm runs the comparison for each client annually, because changes in income, investments, or family situation can shift the optimal choice from one regime to the other. Use the free New vs Old Tax Regime Calculator on the Tax Tools page to run your own comparison.",
    },
    {
      heading: "Tax Planning for Business Owners and Professionals",
      content:
        "Tax planning for business owners goes beyond claiming deductions. It involves choosing the right business structure (sole proprietorship vs LLP vs company), deciding on salary vs profit extraction from a company, timing of expense recognition, and structuring investments for maximum Section 80C benefit. The firm provides year-round tax planning advice, not just at filing time.",
    },
    {
      heading: "Capital Gains Taxation",
      content:
        "Capital gains on sale of shares, mutual funds, property, and other assets are taxed at different rates depending on holding period and asset type. Short-term and long-term capital gains have different tax rates, exemption provisions (Sections 54, 54EC, 54F), and reporting requirements. The firm computes capital gains, advises on tax-saving reinvestment options, and ensures correct disclosure in the return.",
    },
    {
      heading: "TDS Compliance",
      content:
        "Businesses and professionals making specified payments (salary, contractor payments, rent, professional fees, commission) are required to deduct tax at source and deposit it with the government within prescribed timelines. The firm handles TDS computation, quarterly TDS return filing (Form 24Q, 26Q, 27Q), and issuance of Form 16/16A. Late deduction, late deposit, and non-filing of TDS returns attract disallowance under Section 40(a)(ia) and penalties.",
    },
    {
      heading: "Income Tax Notices",
      content:
        "Income tax notices can arrive for several reasons: mismatch between income reported in the return and information in the AIS (Annual Information Statement), non-filing of returns despite taxable income, high-value transactions reported by banks and registrars, or scrutiny selection. The firm handles responses to notices under Section 143(1), 143(2), 148, 156, and others, with a written reply supported by documentation.",
    },
    {
      heading: "Advance Tax and Self-Assessment Tax",
      content:
        "Taxpayers with estimated tax liability exceeding Rs. 10,000 in a financial year must pay advance tax in four instalments (June 15, September 15, December 15, March 15). Failure to pay advance tax attracts interest under Sections 234B and 234C. The firm computes estimated income, determines advance tax liability, and ensures timely payment to minimise interest cost.",
    },
  ],
  faqs: [
    {
      question: "Which ITR form should I file?",
      answer:
        "The correct ITR form depends on your income sources and entity type. ITR-1 (Sahaj) is for salaried individuals with income up to Rs. 50 lakh. ITR-2 is for individuals with capital gains or foreign assets. ITR-3 is for business owners and professionals. ITR-4 (Sugam) is for those opting for presumptive taxation. The firm identifies the correct form based on your specific situation.",
    },
    {
      question: "What is the difference between the old and new tax regime?",
      answer:
        "The old tax regime allows deductions under Chapter VI-A (80C, 80D, 80CCD, etc.) and exemptions like HRA and LTA, but has higher tax slab rates. The new tax regime (Section 115BAC) has lower slab rates but removes most deductions and exemptions. The optimal choice depends on your total eligible deductions. The firm runs a comparison for each client to determine the better option.",
    },
    {
      question: "What happens if I miss the ITR filing deadline?",
      answer:
        "Missing the due date (usually July 31 for individuals) means filing a belated return under Section 139(4), which attracts a late fee of up to Rs. 5,000 (Rs. 1,000 for income below Rs. 5 lakh). You also lose the ability to carry forward certain losses (other than house property loss) and cannot switch between tax regimes for that year.",
    },
  ],
};

export const internationalTaxation: ServicePageProps = {
  title: "International Taxation: NRI Advisory, FEMA, DTAA, and Cross-Border Structuring",
  description:
    "Cross-border tax obligations are one of the most compliance-intensive areas of Indian tax law. An NRI with rental income in India, a software professional working abroad with Indian investments, or an expatriate deployed to India on a project each face a different set of reporting requirements. Missing FEMA deadlines, failing to report foreign assets, or incorrectly applying DTAA rates can result in penalties that exceed the tax itself.\n\nThe firm advises on international taxation matters for NRIs, expatriates, and businesses with cross-border transactions.",
  sections: [
    {
      heading: "NRI Taxation",
      content:
        "NRI taxation in India is governed by the residential status rules under the Income Tax Act and the applicable DTAA. Common compliance areas include:",
      listItems: [
        "Taxation of rental income from Indian property",
        "Capital gains on sale of Indian assets (shares, property, mutual funds)",
        "TDS on payments to NRIs under Sections 195 and 195A",
        "Determining residential status for each financial year",
        "Filing ITR for NRIs with Indian-source income",
        "Claiming DTAA benefits to avoid double taxation",
      ],
    },
    {
      heading: "FEMA Compliance",
      content:
        "The Foreign Exchange Management Act governs all cross-border financial transactions for Indian residents and NRIs. The firm handles FEMA compliance for:",
      listItems: [
        "Opening and maintenance of NRO, NRE, and FCNR accounts",
        "Repatriation of funds from India to overseas",
        "Compliance for overseas direct investment (ODI) by Indian residents",
        "Reporting of foreign assets and foreign income in the ITR",
        "FEMA compliance for foreign inward and outward remittances",
      ],
    },
    {
      heading: "Double Taxation Avoidance Agreement Advisory",
      content:
        "India has DTAAs with over 90 countries. These treaties determine which country has the right to tax specific types of income and at what rate. The firm advises on DTAA application for salary income, dividends, interest, royalties, and capital gains, ensuring that treaty benefits are properly claimed and that foreign tax credits are available in the resident country.",
    },
    {
      heading: "Transfer Pricing",
      content:
        "Transfer pricing regulations under Sections 92 to 92F apply to international transactions between associated enterprises. The firm provides transfer pricing advisory for:",
      listItems: [
        "Benchmarking analysis and documentation for international transactions",
        "Compliance with transfer pricing reporting requirements (Form 3CEB)",
        "Advance pricing agreement (APA) and safe harbour provisions",
      ],
    },
    {
      heading: "Expatriate Taxation",
      content:
        "Expatriates working in India face complex tax situations involving split-year taxation, tax equalisation, and DTAA application. The firm advises expatriates on Indian tax obligations, assists with tax return filing, and coordinates with their home country tax advisors to ensure compliance in both jurisdictions. Services include structuring compensation packages to minimise overall tax burden, handling social security (PF) obligations, and managing repatriation of earnings.",
    },
  ],
  faqs: [
    {
      question: "Do NRIs need to file income tax returns in India?",
      answer:
        "An NRI must file an ITR in India if their total income from Indian sources (before claiming deductions under Chapter VI-A) exceeds the basic exemption limit of Rs. 2.5 lakh (or Rs. 3 lakh under the new tax regime). Even if income is below the threshold, filing is advisable to claim refunds of TDS deducted on rental income, interest, or capital gains.",
    },
    {
      question: "What is the TDS rate on payments to NRIs?",
      answer:
        "TDS under Section 195 on payments to NRIs depends on the nature of income and the applicable DTAA rate. The domestic rate can be 10%, 20%, or 30% plus surcharge and cess, depending on the income type. However, if the DTAA provides a lower rate, the NRI can benefit from the treaty rate by providing a Tax Residency Certificate (TRC) and Form 10F.",
    },
    {
      question: "What is FEMA and why does it matter for NRIs?",
      answer:
        "The Foreign Exchange Management Act (FEMA) regulates all foreign exchange transactions in India. For NRIs, FEMA compliance is important for maintaining NRO/NRE accounts, investing in Indian assets, repatriating funds, and acquiring or transferring immovable property in India. Non-compliance can attract penalties and affect the ability to remit funds.",
    },
  ],
};

export const startABusiness: ServicePageProps = {
  title: "Start a Business in India: Company, LLP, Partnership, and Proprietorship",
  description:
    "Choosing the right business structure at the start is one of the most consequential decisions an entrepreneur makes. It determines your tax liability, compliance burden, ability to raise capital, and personal liability exposure. Changing structures later is possible but involves costs, tax events, and administrative effort.\n\nThe firm assists entrepreneurs in CSN (Aurangabad), across Maharashtra, and throughout India with business registration and post-incorporation compliance for all four structures: sole proprietorship, partnership, LLP, and private limited company.",
  sections: [
    {
      heading: "Comparing the Four Structures",
      content:
        "Use the comparison table below to understand the key differences between the four main business structures in India. Each has distinct implications for liability, taxation, and compliance.",
    },
    {
      heading: "Which structure should you choose?",
      content:
        "A sole proprietorship is suitable for small traders, freelancers, and service providers who want minimal compliance and are comfortable with unlimited personal liability. A partnership works for small businesses with two or more founders who want shared ownership without the compliance burden of a company. A Limited Liability Partnership (LLP) is ideal for professional services firms, consultancies, and small businesses that want limited liability protection without the heavier compliance of a private limited company. A private limited company is the standard choice for startups seeking funding, businesses planning to scale, and any entity that may need to raise equity capital. It provides limited liability, a separate legal identity, and the ability to issue shares to investors.",
    },
    {
      heading: "Registration Process",
      content:
        "The registration process varies significantly by structure. For sole proprietorships, registration involves obtaining a GST registration or shop and establishment licence, and opening a current account in the business name. For partnerships, the process involves drafting and registering the partnership deed with the registrar, obtaining PAN and TAN, and completing GST registration. For LLPs, incorporation is done through the MCA portal with approval of the LLP agreement, designated partner identification numbers (DPINs), and digital signatures (DSCs). For private limited companies, the process involves obtaining DSCs and DINs for directors, reserving the company name (RUN form), filing the SPICe+ form for incorporation, and obtaining the certificate of incorporation from the Registrar of Companies.",
    },
    {
      heading: "Post-Incorporation: What most people miss",
      content:
        "After registration, several compliance tasks must be completed within specific timelines. Missing these can result in penalties:",
      listItems: [
        "Opening a business bank account and depositing the initial share capital (for companies)",
        "Obtaining GST registration within 30 days of crossing the threshold or from the date of business commencement",
        "Filing the initial ADT-1 form (auditor appointment) within 15 days of the first board meeting (for companies)",
        "Applying for professional tax registration and trade licence from the local municipal authority",
        "Registering for PF and ESIC if the employee count exceeds the threshold",
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to register a private limited company?",
      answer:
        "With all documents ready, a private limited company can be incorporated in 15-20 working days through the SPICe+ form on the MCA portal. This includes name reservation, DIN and DSC procurement for directors, and certificate of incorporation. Delays typically arise from incomplete documentation or name approval rejection.",
    },
    {
      question: "What is the minimum capital required to start a private limited company?",
      answer:
        "There is no minimum paid-up capital requirement for a private limited company since the Companies Amendment Act of 2015. You can incorporate a company with any amount of capital, including as low as Rs. 1,000. However, the capital should be sufficient to cover initial business expenses.",
    },
    {
      question: "Can a foreign national be a director in an Indian company?",
      answer:
        "Yes, a foreign national can be a director in an Indian company. They need to obtain a Director Identification Number (DIN) and a Digital Signature Certificate (DSC). At least one director must be an Indian resident (defined as having stayed in India for 182 days or more in the previous calendar year). Additional FEMA and RBI compliance requirements apply for foreign investment in the company.",
    },
    {
      question: "Should I start with a proprietorship and convert later?",
      answer:
        "It depends on your growth plans. If you are testing a business idea and do not expect significant revenue or liability exposure, a proprietorship keeps compliance costs minimal. However, if you plan to raise funding, sign contracts with large clients, or hire employees within the first year, starting as a private limited company or LLP from the beginning avoids conversion costs and establishes credibility from day one.",
    },
  ],
};

export const companyLlpCompliance: ServicePageProps = {
  title: "Company and LLP Compliance: ROC Filings, Secretarial, and Agreements",
  description:
    "A company or LLP does not stop complying after incorporation. Every year, there are mandatory filings with the Registrar of Companies (ROC), board meeting requirements, statutory register maintenance, and various forms that must be filed within prescribed timelines. Missing a deadline means penalties that accrue per day of delay, and persistent non-compliance can lead to the company being struck off the register.\n\nThe firm handles annual compliance for private limited companies and LLPs in CSN (Aurangabad) and across India, ensuring filings are accurate and on time.",
  sections: [
    {
      heading: "Annual ROC Compliance for Private Limited Companies",
      content:
        "Private limited companies must file annual returns and financial statements with the ROC every year. The firm handles the full scope of annual compliance:",
      listItems: [
        "Filing of Form AOC-4 (financial statements) within 30 days of the AGM",
        "Filing of Form MGT-7 (annual return) within 60 days of the AGM",
        "Conducting the Annual General Meeting (AGM) within 6 months of financial year end",
        "Filing of ADT-1 (auditor appointment) within 15 days of the AGM",
        "Maintenance of statutory registers and minutes books",
      ],
    },
    {
      heading: "Annual ROC Compliance for LLPs",
      content:
        "LLPs have a lighter compliance burden compared to companies, but annual filings are still mandatory. The firm handles:",
      listItems: [
        "Filing of Form 11 (annual return) within 60 days of financial year end",
        "Filing of Form 8 (statement of account and solvency) within 30 days of six months from financial year end",
        "Maintenance of the LLP agreement and any amendments",
      ],
    },
    {
      heading: "Board Meetings and Resolutions",
      content:
        "Private limited companies must hold a minimum of four board meetings per year, with no more than 120 days between consecutive meetings. The firm assists with preparing notices, agendas, and minutes for board meetings and shareholder meetings, drafting resolutions for routine matters like opening bank accounts, appointing directors, and approving financial statements.",
    },
    {
      heading: "Statutory Registers",
      content:
        "Companies are required to maintain statutory registers including the register of members, register of directors, register of charges, and register of transfers. The firm ensures these registers are maintained in compliance with the Companies Act and are updated with every change in shareholding, directorship, or charges.",
    },
    {
      heading: "Secretarial Compliance",
      content:
        "Beyond annual filings, companies have event-based compliance requirements. These include filing forms for appointment or resignation of directors (DIR-12), change of registered office (INC-22), allotment of shares (PAS-3), creation or modification of charges (CHG-1), and alteration of the memorandum or articles of association. The firm handles all secretarial filings as they arise.",
    },
    {
      heading: "Agreements and Commercial Documentation",
      content:
        "The firm drafts and reviews commercial agreements including shareholders' agreements, founders' agreements, non-disclosure agreements, employment contracts, vendor agreements, and lease agreements. Proper documentation at the outset prevents disputes and ensures that the rights and obligations of all parties are clearly defined.",
    },
  ],
};

export const accountingPayroll: ServicePageProps = {
  title: "Accounting, Bookkeeping, and Payroll",
  description:
    "Accurate bookkeeping is the foundation of every financial decision a business makes. Without reliable monthly numbers, tax filings are approximate, cash flow is a guess, and year-end financial statements are a scramble. Yet most small and medium businesses do not have the volume of work to justify a full-time accountant on payroll.\n\nThe firm provides outsourced accounting, bookkeeping, and payroll services for businesses in CSN (Aurangabad), across Maharashtra, and remotely across India.",
  sections: [
    {
      heading: "Monthly Bookkeeping",
      content:
        "Monthly bookkeeping includes recording all sales, purchase, expense, and bank transactions in the accounting system, reconciling bank statements, and maintaining the general ledger. The firm works with Tally, Zoho Books, QuickBooks, and other accounting software depending on the client's preference. Monthly books are closed by the 10th of the following month, ensuring that the business owner always has current financial data.",
    },
    {
      heading: "Financial Statements: P&L, Balance Sheet, Cash Flow",
      content:
        "At year-end, the firm prepares the Profit and Loss statement, Balance Sheet, and Cash Flow statement in compliance with applicable accounting standards. For companies, financial statements are prepared as per Schedule III of the Companies Act. For other entities, statements are prepared in a format suitable for income tax filing and bank submission.",
    },
    {
      heading: "MIS Reporting",
      content:
        "Monthly Management Information System (MIS) reports provide the business owner with a clear view of financial performance. Reports include revenue summary, expense breakdown, profitability by segment (if applicable), outstanding receivables and payables, and cash position. MIS reports are customised to the business owner's decision-making needs.",
    },
    {
      heading: "Payroll Processing",
      content:
        "Payroll processing includes computing gross salary, deducting TDS under Section 192, calculating PF and ESIC contributions, generating payslips, and processing the net salary transfer. The firm handles payroll for businesses with 5 to 200 employees, ensuring compliance with the Payment of Wages Act, Minimum Wages Act, and other labour law requirements.",
    },
    {
      heading: "PF, ESIC, and Professional Tax Compliance",
      content:
        "Businesses with 20 or more employees must register for PF (Provident Fund), and businesses with 10 or more employees must register for ESIC (Employee State Insurance Corporation). The firm handles PF and ESIC registration, monthly contribution calculations, challan generation, and quarterly and annual return filing. Professional tax registration and monthly or annual return filing is also handled.",
    },
    {
      heading: "Accounts Receivable and Payable Management",
      content:
        "Managing receivables and payables is critical for cash flow. The firm maintains the receivables and payables ageing report, follows up on overdue receivables, ensures timely payment to vendors to maintain credit terms, and reconciles supplier statements. This service is often combined with monthly bookkeeping for a complete accounting solution.",
    },
  ],
};

export const virtualCFO: ServicePageProps = {
  title: "Virtual CFO Services for Startups and Growing Businesses",
  description:
    "A Chief Financial Officer is not a luxury reserved for large companies. Every business that is growing, raising capital, or making significant financial decisions needs the kind of strategic financial oversight that a CFO provides. The problem is that a full-time CFO costs Rs. 25-50 lakh per year in compensation, which early-stage businesses cannot justify.\n\nA Virtual CFO engagement gives you access to senior-level financial expertise at a fraction of the cost of a full-time hire. The firm provides Virtual CFO services to startups and growing businesses across India.",
  sections: [
    {
      heading: "What a Virtual CFO engagement covers",
      content:
        "A Virtual CFO engagement is customised to the specific needs of the business. The firm provides support across the following areas:",
      listItems: [
        "Financial Reporting and MIS: Monthly financial reports with commentary on performance, variance analysis, and key metrics tracking.",
        "Budgeting and Forecasting: Annual budgets, quarterly reforecasts, and scenario analysis for key business decisions.",
        "Cash Flow Management: Weekly cash flow projections, working capital optimisation, and treasury management.",
        "Cost Structure and Profitability Analysis: Review of cost structure, identification of cost reduction opportunities, and profitability analysis by product, service, or customer segment.",
        "Investor Reporting and Fundraise Support: Preparation of investor decks, financial models for fundraising, due diligence support, and investor communication.",
        "Banking and Treasury: Relationship management with banks, working capital facility negotiations, and foreign exchange risk management for businesses with international exposure.",
        "Compliance Oversight: Ensuring that the business stays compliant with all tax, regulatory, and statutory requirements through coordination with the firm's other service lines.",
        "Entity and Tax Structure Review: Evaluating whether the current business structure is optimal for tax efficiency, liability protection, and future growth plans.",
      ],
    },
    {
      heading: "Who is the Virtual CFO service for?",
      content:
        "The Virtual CFO service is designed for businesses that need senior financial expertise but are not yet ready for a full-time CFO. Typical clients include:",
      listItems: [
        "Startups that have raised Seed or Series A funding and need to build financial systems",
        "Family-owned businesses transitioning to professional management",
        "Companies planning to raise capital or apply for bank financing",
        "Businesses with turnover between Rs. 1 crore and Rs. 50 crore that need better financial visibility",
        "Companies expanding into new markets or product lines and needing financial modelling support",
      ],
    },
    {
      heading: "How the engagement works",
      content:
        "The engagement typically starts with a diagnostic review of the current financial systems, processes, and reporting. Based on this review, a scope of work is defined covering the specific areas where the business needs CFO-level input. The engagement is delivered through a combination of weekly or bi-weekly review calls, monthly financial reports with commentary, and ad-hoc advisory on specific decisions. The firm works with the existing accounting team or provides end-to-end accounting support through its bookkeeping service. Pricing is a fixed monthly retainer, not an hourly rate, so the business owner knows the cost upfront.",
    },
  ],
  faqs: [
    {
      question: "How much does a Virtual CFO cost?",
      answer:
        "Virtual CFO services are priced as a monthly retainer based on the scope of work. For a typical startup or SME, the retainer ranges from Rs. 15,000 to Rs. 75,000 per month depending on the complexity of the business and the breadth of services required. This compares to Rs. 2-4 lakh per month for a full-time CFO's compensation.",
    },
    {
      question: "How is a Virtual CFO different from an accountant?",
      answer:
        "An accountant records transactions and prepares financial statements. A Virtual CFO uses that financial data to provide strategic advice: budgeting, forecasting, cash flow management, fundraising support, and decision-making guidance. A CFO looks forward; an accountant looks backward. Both are necessary, and the firm provides both services.",
    },
    {
      question: "Can a Virtual CFO help with fundraising?",
      answer:
        "Yes. Fundraising support is one of the most common reasons businesses engage a Virtual CFO. The firm prepares the financial model, builds the investor deck, supports due diligence, and helps the founder present the financial story to investors. This includes historical financial analysis, projections, unit economics, and key metrics that investors expect to see.",
    },
  ],
};

export const foreignAccounting: ServicePageProps = {
  title: "Outsourced Accounting and Bookkeeping Services from India",
  description:
    "Accounting firms and bookkeeping practices in the UK, US, and Australia face a persistent challenge: skilled bookkeepers and accountants are expensive and hard to find, especially during peak season. Outsourcing routine bookkeeping, VAT returns, payroll processing, and year-end preparation to a qualified CA in India provides access to trained talent at competitive rates, without compromising on quality or turnaround time.\n\nThe firm provides outsourced accounting and bookkeeping services to practices in the UK, US, and Australia, leveraging qualified CA expertise and experience with international accounting standards.",
  sections: [
    {
      heading: "How the engagement works",
      content:
        "The engagement begins with a trial period of 2-4 weeks on a small volume of work. This allows both parties to assess quality, turnaround time, and communication fit. After the trial, the engagement is formalised with a scope of work, service-level agreements on turnaround time, and a pricing structure. Communication happens through email, video calls, and secure file-sharing platforms. The firm works on the client's preferred software (Xero, QuickBooks, Sage, MYOB, or others) and follows the client's chart of accounts and documentation standards.",
    },
    {
      heading: "Why outsource to a CA rather than a bookkeeper",
      content:
        "A qualified Chartered Accountant brings a depth of understanding that goes beyond data entry. When a transaction does not fit neatly into a category, a CA can exercise professional judgement on the correct treatment. This reduces review time for the client firm and improves the quality of output. The firm's CA qualification, experience with IFRS and international accounting standards, and exposure to multiple industries makes the engagement more productive and reliable than a pure bookkeeping arrangement.",
    },
  ],
  faqs: [
    {
      question: "What software do you work with?",
      answer:
        "The firm works with Xero, QuickBooks Online, QuickBooks Desktop, Sage, MYOB, Wave, and Tally. If your practice uses a different platform, the firm can adapt. Training on a new software platform typically takes 1-2 weeks.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "The firm uses secure, encrypted file-sharing platforms for all document exchange. Access to client data is restricted to the assigned team members. A non-disclosure agreement (NDA) is signed at the start of every engagement. The firm does not use client data for any purpose other than the agreed scope of work.",
    },
    {
      question: "What are the typical turnaround times?",
      answer:
        "Routine bookkeeping (monthly bank reconciliation, transaction recording, and report preparation) is completed within 5-7 business days of receiving the source documents. VAT returns and BAS preparation are completed within 3-5 business days. Year-end working papers and adjustment entries are completed within 10-15 business days. Urgent requests are accommodated with prior notice.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing is based on the volume and complexity of work. For routine monthly bookkeeping, a fixed monthly fee per client is agreed upon. For project-based work like year-end preparation or catch-up bookkeeping, pricing is based on the estimated hours or a per-client fee. The firm provides a detailed quote after the initial assessment of the work involved.",
    },
  ],
};

export const auditAssurance: ServicePageProps = {
  title: "Audit and Assurance Services",
  description:
    "An audit is an independent examination of financial information that provides assurance to stakeholders, including shareholders, lenders, regulators, and management. For companies, statutory audits are mandatory. For other entities, audits may be required by banks, regulatory bodies, or as part of good governance practices.\n\nThe firm provides audit and assurance services in CSN (Aurangabad), across Maharashtra, and for clients in other locations through a combination of on-site and remote procedures.",
  sections: [
    {
      heading: "Statutory Audit under the Companies Act",
      content:
        "Every private limited company and public company registered in India is required to have its financial statements audited by a Chartered Accountant every year under Section 143 of the Companies Act. The firm conducts statutory audits in compliance with the Companies Act, applicable accounting standards (Ind AS or AS as applicable), and Standards on Auditing issued by ICAI. The audit report and financial statements are filed with the ROC as part of the annual compliance.",
    },
    {
      heading: "Tax Audit under Section 44AB",
      content:
        "Businesses and professionals with turnover or gross receipts exceeding the prescribed threshold (Rs. 1 crore for businesses, Rs. 50 lakh for professionals) must get their accounts audited under Section 44AB of the Income Tax Act. The firm conducts tax audits, prepares Form 3CA/3CB and Form 3CD, and ensures that all the reporting requirements under the form are addressed. The tax audit report must be filed by the specified due date, which is typically one month before the ITR filing deadline.",
    },
    {
      heading: "Internal Audit",
      content:
        "Internal audit is a voluntary but highly recommended engagement that evaluates the effectiveness of internal controls, risk management processes, and operational efficiency. The firm conducts internal audits for companies that want independent assurance on their processes. This includes review of purchase-to-pay processes, revenue recognition, inventory management, fixed asset management, and compliance with internal policies.",
    },
    {
      heading: "Bank Audit",
      content:
        "Banks require audit of borrower accounts for working capital facilities, term loans, and other credit facilities. The firm conducts stock audits, concurrent audits, and revenue audits for banks. The audit report is submitted in the format prescribed by the bank and covers the operational and financial health of the borrowing entity.",
    },
    {
      heading: "Stock Audit and Physical Verification",
      content:
        "Stock audit involves physical verification of inventory, fixed assets, and other tangible assets at the business premises. The firm conducts stock audits for banks (as part of lending compliance) and for companies (as part of internal audit or statutory audit requirements). The stock audit report reconciles the physical count with book records and identifies discrepancies.",
    },
    {
      heading: "RERA Audit",
      content:
        "Real estate projects registered under the Real Estate (Regulation and Development) Act, 2016 (RERA) are required to get their accounts audited by a Chartered Accountant. The firm conducts RERA audits, certifying that 70% of the amounts realised from allottees have been deposited in the designated RERA account and that the utilisation is in compliance with the provisions of the Act. The audit report is submitted to the RERA authority within the prescribed timeline.",
    },
  ],
};

export const taxLitigation: ServicePageProps = {
  title: "Tax Litigation and Notice Representation: Income Tax and GST",
  description:
    "Receiving a tax notice does not mean the tax department has concluded that you owe additional tax. Most notices are information-seeking or require a response to a proposed adjustment. The critical factor is the quality and timeliness of the response. A well-drafted reply at the first stage often resolves the matter without escalation. A poorly drafted reply or a missed deadline makes the problem worse.\n\nThe firm handles notice representation and litigation for both income tax and GST matters, from the assessment stage through to appellate proceedings.",
  sections: [
    {
      heading: "Income Tax Notices and Assessment",
      content:
        "Income tax notices are issued under various sections of the Income Tax Act, each requiring a different type of response. The firm handles responses to:",
      listItems: [
        "Section 143(1) intimation: Proposed adjustments to the returned income",
        "Section 143(2) scrutiny: Detailed examination of the return by the assessing officer",
        "Section 148 notice: Reassessment of income for a past year",
        "Section 156 notice: Demand notice for tax, interest, or penalty",
        "Section 131(1A) summons: Requirement to appear before the assessing officer",
        "Section 142(1) inquiry: Request for additional information or documents",
        "Section 270A penalty: Penalty proceedings for under-reporting or misreporting of income",
      ],
    },
    {
      heading: "CIT(A) Appeals",
      content:
        "If an assessee is aggrieved by an order of the assessing officer, an appeal can be filed before the Commissioner of Income Tax (Appeals) within 30 days of receiving the order. The firm prepares the appeal, drafts the grounds of appeal, compiles the paper book with supporting documents, and represents the case before the CIT(A). Most appeals are resolved at this stage with a favourable or partially favourable order.",
    },
    {
      heading: "ITAT: Income Tax Appellate Tribunal",
      content:
        "If the CIT(A) order is not satisfactory, a further appeal can be filed before the Income Tax Appellate Tribunal (ITAT) within 60 days. The firm handles ITAT appeals, prepares the appeal memorandum, and briefs the counsel representing the case. ITAT is the final fact-finding authority, and its orders are binding unless appealed to the High Court on a substantial question of law.",
    },
    {
      heading: "GST Litigation",
      content:
        "GST disputes arise from assessments, audits, and enforcement actions by the GST department. The firm handles GST litigation at multiple stages:",
      listItems: [
        "Response to show cause notices (SCNs) and demand orders",
        "Representation before the adjudicating authority",
        "Appeal before the Commissioner (Appeals)",
        "Representation before the Appellate Authority for Advance Ruling (AAAR)",
        "Filing and representation before the GST Appellate Tribunal (GSTAT)",
      ],
    },
    {
      heading: "Faceless Assessment and Appeal Scheme",
      content:
        "The income tax department has moved to faceless assessment and faceless appeal proceedings under the Faceless Assessment Scheme, 2019 and the Faceless Appeal Scheme, 2020. Under these schemes, the assessee does not appear in person before the assessing officer. All communication happens through the e-filing portal. The firm handles the entire process electronically, from drafting the response to submitting documents and attending video conferences where required. Faceless proceedings require a different approach to documentation and argument presentation, as there is no opportunity for oral submissions at the assessment stage.",
    },
  ],
};

// Metadata descriptions for each service page
export const serviceMetadata: Record<string, { title: string; description: string; path: string }> = {
  gstServices: {
    title: "GST Services in CSN (Aurangabad) | Registration, Returns and Advisory",
    description: "GST registration, monthly and quarterly returns, ITC management, notice response, and sector-specific advisory for businesses in CSN (Aurangabad) and across India.",
    path: "/gst-services",
  },
  incomeTax: {
    title: "Income Tax Services | ITR Filing and Tax Planning",
    description: "Income tax return filing, new vs old regime comparison, tax planning for business owners, TDS compliance, and notice representation.",
    path: "/income-tax",
  },
  internationalTaxation: {
    title: "International Taxation Advisory | NRI Tax, FEMA, DTAA",
    description: "NRI taxation advisory, FEMA compliance, DTAA application, transfer pricing documentation, and expatriate tax planning.",
    path: "/international-taxation",
  },
  startABusiness: {
    title: "Start a Business in India | Company, LLP, Partnership Registration",
    description: "Business registration services covering sole proprietorship, partnership, LLP, and private limited company with post-incorporation compliance support.",
    path: "/start-a-business",
  },
  companyLlpCompliance: {
    title: "Company and LLP Compliance in CSN (Aurangabad) | ROC Filings, Secretarial",
    description: "Annual ROC filings, board meeting compliance, statutory registers, secretarial filings, and commercial agreement drafting for companies and LLPs.",
    path: "/company-llp-compliance",
  },
  accountingPayroll: {
    title: "Accounting and Payroll Services | Bookkeeping, MIS, Payroll",
    description: "Monthly bookkeeping, financial statements, MIS reporting, payroll processing, and PF/ESIC compliance for businesses across India.",
    path: "/accounting-payroll",
  },
  virtualCFO: {
    title: "Virtual CFO Services in India | Fractional CFO for Startups and SMEs",
    description: "Fractional CFO services including financial reporting, budgeting, cash flow management, investor reporting, and compliance oversight for growing businesses.",
    path: "/virtual-cfo",
  },
  foreignAccounting: {
    title: "Outsourced Accounting Services to India | UK, US, Australia Bookkeeping",
    description: "Outsourced bookkeeping, VAT returns, BAS preparation, payroll, and year-end accounts for accounting firms in the UK, US, and Australia.",
    path: "/foreign-accounting",
  },
  auditAssurance: {
    title: "Audit Services in CSN (Aurangabad) | Statutory Audit, Tax Audit, Internal Audit",
    description: "Statutory audit, tax audit under Section 44AB, internal audit, bank audit, stock audit, and RERA audit services in CSN (Aurangabad) and across India.",
    path: "/audit-assurance",
  },
  taxLitigation: {
    title: "Tax Litigation | Income Tax and GST Notice Representation",
    description: "Income tax notice response, CIT(A) appeals, ITAT representation, GST litigation, and faceless assessment proceedings.",
    path: "/tax-litigation",
  },
};
