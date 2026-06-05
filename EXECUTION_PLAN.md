# CA Sakshi Khedkar Website — In-Depth Execution Plan

> **Status**: Pre-implementation
> **Last updated**: 2026-05-24
> **Estimated total effort**: ~80-100 hours

---

## Table of Contents

1. [Pre-Requisites](#1-pre-requisites)
2. [Phase 1: Project Initialization](#2-phase-1-project-initialization)
3. [Phase 2: Design System & Shared Infrastructure](#3-phase-2-design-system--shared-infrastructure)
4. [Phase 3: Home Page](#4-phase-3-home-page)
5. [Phase 4: About Page](#5-phase-4-about-page)
6. [Phase 5: Service Pages (10 pages)](#6-phase-5-service-pages-10-pages)
7. [Phase 6: Tax Tools Page](#7-phase-6-tax-tools-page)
8. [Phase 7: Contact Page](#8-phase-7-contact-page)
9. [Phase 8: SEO & Schema Markup](#9-phase-8-seo--schema-markup)
10. [Phase 9: Polish & Responsive QA](#10-phase-9-polish--responsive-qa)
11. [Phase 10: Deployment](#11-phase-10-deployment)
12. [Complete File Manifest](#12-complete-file-manifest)
13. [Verification Checklist](#13-verification-checklist)

---

## 1. Pre-Requisites

### Tools & Accounts Needed

| Item | Purpose | Action |
|------|---------|--------|
| Node.js 18+ | Runtime | Ensure installed (`node -v`) |
| npm or pnpm | Package manager | Comes with Node.js |
| Git | Version control | `git init` in project |
| GitHub account | Repo hosting | Create repo `ca-website` |
| Vercel account | Deployment | Sign up with GitHub |
| Formspree account | Contact form backend | Free tier, create form endpoint |
| Cal.com account | Meeting scheduling | Free tier, set up event type |
| Google Fonts | Playfair Display + Inter | No account needed, loaded via `next/font` |
| Domain name | Production URL | Purchase `casakshikhedkar.com` via Vercel or registrar |

### Contact Info Placeholders

Until real details are provided, use these in `lib/constants.ts`:

```
PHONE="+91 9XXXXX XXXX"
EMAIL="contact@example.com"
WHATSAPP_URL="https://wa.me/919XXXXXXXXX"
OFFICE_ADDRESS="CSN (Chhatrapati Sambhajinagar), Maharashtra"
ICAI_NO="618819"
```

---

## 2. Phase 1: Project Initialization

**Goal**: Scaffold the Next.js project with all dependencies installed.

### Step 1.1 — Create Next.js project

```bash
cd /home/rutuj/projects/ca-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

This generates:
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- `tailwind.config.ts`, `tsconfig.json`, `next.config.ts`
- `package.json` with Next.js 14, React 18, TypeScript, Tailwind CSS, ESLint

### Step 1.2 — Install additional dependencies

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority
npm install @calcom/embed-react
npm install html2pdf.js
npm install -D @types/html2pdf.js
```

| Package | Purpose |
|---------|---------|
| `lucide-react` | Icons for services grid, navigation, UI |
| `clsx` + `tailwind-merge` | Utility for conditional Tailwind classes |
| `class-variance-authority` | Variant-based component styling (used by shadcn) |
| `@calcom/embed-react` | Cal.com inline scheduling widget |
| `html2pdf.js` | PDF export for ITR Checklist tool |

### Step 1.3 — Initialize shadcn/ui

```bash
npx shadcn-ui@latest init
```

Configure:
- Style: Default
- Base color: Slate
- CSS variables: Yes
- Components path: `@/components/ui`

Then add components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add label
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add sheet  # for mobile nav
npx shadcn-ui@latest add dropdown-menu
```

### Step 1.4 — Initialize Git

```bash
git init
git add .
git commit -m "Initial Next.js project scaffold"
```

### Step 1.5 — Create directory structure

```bash
mkdir -p components/tools
mkdir -p components/ui   # already created by shadcn
mkdir -p lib
mkdir -p data
mkdir -p public/images
```

---

## 3. Phase 2: Design System & Shared Infrastructure

**Goal**: Build the reusable layout shell that every page inherits.

### Step 2.1 — Configure Tailwind theme (`tailwind.config.ts`)

```typescript
// Key additions to the generated config:
theme: {
  extend: {
    colors: {
      navy: {
        DEFAULT: '#1B2A4A',
        light: '#2D4A7A',
        dark: '#0F1A2E',
        50: '#E8EBF0',
        100: '#C5CCD9',
      },
      gold: {
        DEFAULT: '#C9A84C',
        light: '#D4BC73',
        dark: '#A88B33',
      },
      whatsapp: '#25D366',
    },
    fontFamily: {
      serif: ['Playfair Display', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    maxWidth: {
      'content': '1280px',
    },
  },
}
```

### Step 2.2 — Global CSS (`app/globals.css`)

Add Tailwind directives + custom utilities:
- Smooth scroll behavior (`html { scroll-behavior: smooth }`)
- Custom selection color (navy → gold)
- Body defaults: `font-sans text-gray-700 bg-white`
- Prose-like styling for long-form content sections

### Step 2.3 — Utility function (`lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 2.4 — Constants (`lib/constants.ts`)

Centralize all placeholder contact info and site-wide values:
- Phone, email, WhatsApp URL
- Office address, hours, ICAI number
- Navigation links array (label + href)
- Service list (for dropdown in contact form)

### Step 2.5 — Metadata helper (`lib/metadata.ts`)

```typescript
// Generates consistent Metadata objects for each page
export function generatePageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: `${title} | CA Sakshi Khedkar`,
    description,
    openGraph: { title, description, url: `https://casakshikhedkar.com${path}` },
    alternates: { canonical: `https://casakshikhedkar.com${path}` },
  };
}
```

### Step 2.6 — Schema helpers (`lib/schema.ts`)

Functions that return JSON-LD script content:
- `generateLocalBusinessSchema()` — name, address, phone, hours, areaServed
- `generatePersonSchema()` — name, jobTitle, alumniOf, award, sameAs
- `generateServiceSchema(name, serviceType, areaServed)` — for each service page
- `generateFAQSchema(faqs: {question, answer}[])` — for pages with FAQ schema
- `generateWebApplicationSchema(name, description)` — for tax tools

### Step 2.7 — Header component (`components/Header.tsx`)

**Desktop layout:**
```
[Logo/Name]    [Home] [About] [Services ▼] [Tax Tools] [Contact]    [CTA Button]
```

- **Services dropdown**: Lists all 10 service pages with icons
- **CTA button**: "Get in Touch" → links to `/contact`, styled with gold accent
- **Sticky**: `position: sticky; top: 0` with subtle shadow on scroll
- **Background**: White with navy text, gold accent on hover/active

**Mobile layout (< 768px):**
- Hamburger icon (three bars) → opens a Sheet (slide-in from right)
- Sheet contains: nav links, service links, CTA button
- Close on link click or X button

**States:**
- Current page link: gold underline or gold text
- Hover: subtle background or underline transition

### Step 2.8 — Footer component (`components/Footer.tsx`)

**4-column layout (desktop):**

| Column 1 | Column 2 | Column 3 | Column 4 |
|-----------|-----------|-----------|-----------|
| CA Sakshi Khedkar | Services | Resources | Contact |
| ICAI No. 618819 | - GST Services | - Tax Tools | Phone (placeholder) |
| CSN (Aurangabad) | - Income Tax | - About | Email (placeholder) |
| | - International Tax | - Start a Business | Office address |
| | - Virtual CFO | | Hours |
| | - ... (all 10) | | |

**Bottom bar:**
- Copyright: `© 2026 CA Sakshi Khedkar. All rights reserved.`
- Disclaimer: "This website is for informational purposes only and does not constitute professional advice."
- ICAI membership number

**Mobile**: Stack to single column.

### Step 2.9 — WhatsApp floating button (`components/WhatsAppButton.tsx`)

- Fixed position: `bottom-6 right-6`
- Circular button: 56px diameter, WhatsApp green `#25D366`
- WhatsApp SVG icon (white)
- `href="https://wa.me/91[phone]?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20[service]."`
- Subtle bounce animation on load
- `z-index: 50` to stay above all content
- Hidden on contact page's contact form area (per doc note: "should not obscure the contact form on the contact page")
- Visible on both mobile and desktop

### Step 2.10 — Root layout (`app/layout.tsx`)

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
```

Metadata defaults:
- `title.default`: "CA Sakshi Khedkar"
- `title.template`: "%s | CA Sakshi Khedkar"
- Default description, OG image
- Google Fonts loaded via `next/font/google` (Playfair Display + Inter)

---

## 4. Phase 3: Home Page

**File**: `app/page.tsx`
**Estimated effort**: 4-5 hours

### Step 3.1 — Hero Section

Layout:
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [Full-width navy background with subtle gradient] │
│                                                     │
│   H1: A Chartered Accountant in CSN (Aurangabad),  │
│       with the range of a Big Four and the          │
│       attention of a sole practitioner.             │
│                                                     │
│   Intro paragraph (from doc paragraph 5)            │
│                                                     │
│   [Contact Us]  [Tax Tools →]                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- H1: `font-serif text-3xl md:text-5xl text-white`
- Subtitle: `text-navy-100` (light navy for readability on dark bg)
- CTA buttons: Primary (gold, filled) + Secondary (gold outline)
- Background: Navy gradient with subtle geometric pattern or abstract shapes

### Step 3.2 — Services Section

**Title**: "Services at a Glance"

**9-card grid** (3 columns desktop, 2 tablet, 1 mobile):

| Icon | Label | Link |
|------|-------|------|
| Building2 | Start a Business | /start-a-business |
| Receipt | GST Services | /gst-services |
| Calculator | Income Tax | /income-tax |
| Globe | International Taxation | /international-taxation |
| Briefcase | Virtual CFO | /virtual-cfo |
| BookOpen | Foreign Accounting | /foreign-accounting |
| FileSpreadsheet | Accounting & Payroll | /accounting-payroll |
| Shield | Audit & Assurance | /audit-assurance |
| Scale | Tax Litigation | /tax-litigation |

Each card:
- White background, subtle shadow, rounded corners
- Icon in navy, label below
- Short 1-line description from doc
- Hover: gold border, slight lift
- Click: navigates to service page

### Step 3.3 — "Who Uses This Practice" Section

- Background: Light gray `#F8F9FA`
- Bold paragraph listing the audience segments from doc
- Left-aligned, max-width text block

### Step 3.4 — "Why Financial Advice Has Been Inaccessible" Section

- White background
- H2 heading
- Full paragraph from doc
- CTA link: "Learn more about the practice →" linking to /about

### Step 3.5 — Free Resources Callout

- Gold accent bar/border
- Icon + text: "The Tax Tools section has a live New vs Old Tax Regime Calculator, an ITR filing document checklist, and a GST rate finder. No sign-up required."
- Button: "Explore Tax Tools →"

### Step 3.6 — JSON-LD Schema

Inject LocalBusiness + AccountingService schema in a `<script type="application/ld+json">` tag:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AccountingService"],
  "name": "CA Sakshi Khedkar",
  "address": { "@type": "PostalAddress", "addressLocality": "Chhatrapati Sambhajinagar", "addressRegion": "Maharashtra" },
  "telephone": "[placeholder]",
  "openingHours": "Mo-Sa 10:00-18:00",
  "priceRange": "$$",
  "areaServed": "India"
}
```

---

## 5. Phase 4: About Page

**File**: `app/about/page.tsx`
**Estimated effort**: 3-4 hours

### Step 4.1 — Page Layout

```
┌──────────────────────────────────────┐
│ Hero: H1 + opening paragraph         │
├──────────────────────────────────────┤
│ Qualifications                        │
│ - ICAI details, distinctions          │
├──────────────────────────────────────┤
│ Professional Career (Timeline)        │
│                                       │
│ ● Transaction Square LLP, Pune       │
│   M&A Advisory — description          │
│                                       │
│ ● Vialto Partners, Mumbai            │
│   International Taxation              │
│                                       │
│ ● Guild Capital, Mumbai              │
│   Investor Relations & PE            │
│                                       │
│ ● Khandelwal Jain & Co., CSN         │
│   Articleship                         │
├──────────────────────────────────────┤
│ Leadership Record                     │
├──────────────────────────────────────┤
│ Beyond Accounting                     │
├──────────────────────────────────────┤
│ Now Practising Independently + CTA   │
└──────────────────────────────────────┘
```

### Step 4.2 — Career Timeline Component (`components/TimelineItem.tsx`)

A vertical timeline with:
- Left side: Dot + vertical line (navy color)
- Right side: Company name (bold), role (subtitle), description paragraph
- Responsive: on mobile, timeline line is on the left edge

Content for each role (from doc):

**Transaction Square LLP, Pune**
- Role: M&A Advisory
- Description: Worked on buy-side/sell-side mandates, financial due diligence, valuation models, transaction structuring.

**Vialto Partners, Mumbai**
- Role: International Taxation
- Description: International tax engagements involving DTAA, FEMA, cross-border compensation structuring, tax equalisation.

**Guild Capital, Mumbai**
- Role: Investor Relations and Private Equity
- Description: Investor relations, fund-level financial analysis, engagement with institutional investors.

**Khandelwal Jain and Co., CSN (Aurangabad)**
- Role: Articleship
- Description: Statutory audit, income tax, GST, routine compliance across manufacturing, trading, professional services.

### Step 4.3 — JSON-LD Schema

Person schema:
```json
{
  "@type": "Person",
  "name": "CA Sakshi Khedkar",
  "jobTitle": "Chartered Accountant",
  "alumniOf": "ICAI",
  "award": "WICASA Treasurer, CA Finals distinctions"
}
```

---

## 6. Phase 5: Service Pages (10 pages)

**Estimated effort**: 12-15 hours (all 10 pages)

### Step 5.1 — Build Reusable ServicePage Component

**File**: `components/ServicePage.tsx`

Props:
```typescript
interface ServicePageProps {
  title: string;
  description: string;        // 1-2 intro paragraphs
  sections: ServiceSection[];
  ctaText?: string;           // defaults to "Contact the firm"
  schemaType?: string;        // for JSON-LD
  faqs?: { question: string; answer: string }[];
}

interface ServiceSection {
  heading: string;
  content: string | ReactNode;
  subsections?: { heading: string; content: string }[];
  listItems?: string[];
}
```

Layout:
```
┌──────────────────────────────────────────┐
│ Hero: Navy background                    │
│ H1 + 1-2 intro paragraphs                │
├──────────────────────────────────────────┤
│ Section 1 (H2 + content)                 │
├──────────────────────────────────────────┤
│ Section 2 (H2 + content)                 │
│   └ Subsection 2a (H3 + content)         │
│   └ Subsection 2b (H3 + content)         │
├──────────────────────────────────────────┤
│ ... more sections ...                     │
├──────────────────────────────────────────┤
│ CTA Banner: "Contact the firm"            │
│ [Phone] [Email] [Contact Form →]          │
├──────────────────────────────────────────┤
│ FAQ Accordion (if faqs provided)          │
└──────────────────────────────────────────┘
```

### Step 5.2 — Content Data Files (`data/services.ts`)

Create a structured data file containing all service page content extracted from the doc. Each page's data is a typed object:

```typescript
export const gstServices: ServicePageProps = {
  title: "GST Services: Compliance, Advisory, and Notice Representation",
  description: "Goods and Services Tax is a monthly obligation...",
  sections: [
    {
      heading: "GST Registration",
      content: "Threshold-based registration...",
    },
    {
      heading: "GST Returns: GSTR-1, GSTR-3B, GSTR-9, GSTR-9C",
      content: "Monthly and quarterly return preparation...",
    },
    // ... 6 more sections
  ],
  faqs: [
    { question: "What is the GST registration threshold?", answer: "..." },
    { question: "How is GSTR-2B reconciliation done?", answer: "..." },
    { question: "What happens if a GST return is filed late?", answer: "..." },
  ],
};
```

This pattern repeats for all 10 services. Each page file is minimal:

```typescript
// app/gst-services/page.tsx
import { ServicePage } from "@/components/ServicePage";
import { gstServices } from "@/data/services";

export const metadata = generatePageMetadata({
  title: "GST Services in CSN (Aurangabad) | Registration, Returns and Advisory | CA Sakshi Khedkar",
  description: "GST registration, monthly and quarterly returns...",
  path: "/gst-services",
});

export default function GSTServicesPage() {
  return <ServicePage {...gstServices} />;
}
```

### Step 5.3 — Page-by-Page Content Mapping

#### Page 3: GST Services (`app/gst-services/page.tsx`)

| Section | Heading | Content Source |
|---------|---------|---------------|
| 1 | GST Registration | Doc paragraph 58 |
| 2 | GST Returns: GSTR-1, GSTR-3B, GSTR-9, GSTR-9C | Doc paragraph 60 |
| 3 | Input Tax Credit Management | Doc paragraph 62 |
| 4 | GST Notices and Assessments | Doc paragraph 64 |
| 5 | GST Audit under Section 35(5) | Doc paragraph 66 |
| 6 | E-Invoicing and E-Way Bill Compliance | Doc paragraph 68 |
| 7 | Sector-Specific GST Advisory | Doc paragraph 70 |

FAQs: 3 questions from doc schema note.

#### Page 4: Income Tax (`app/income-tax/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | ITR Filing for All Assessees |
| 2 | New vs Old Tax Regime |
| 3 | Tax Planning for Business Owners and Professionals |
| 4 | Capital Gains Taxation |
| 5 | TDS Compliance |
| 6 | Income Tax Notices |
| 7 | Advance Tax and Self-Assessment Tax |

FAQs: 3 questions.

#### Page 5: International Taxation (`app/international-taxation/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | NRI Taxation (with bullet list of 6 items) |
| 2 | FEMA Compliance (with bullet list of 5 items) |
| 3 | Double Taxation Avoidance Agreement Advisory |
| 4 | Transfer Pricing (with bullet list of 3 items) |
| 5 | Expatriate Taxation |

#### Page 6: Start a Business (`app/start-a-business/page.tsx`)

**Special layout**: Comparison table + individual sections.

| Section | Heading |
|---------|---------|
| 1 | Comparing the Four Structures → **ComparisonTable component** |
| 2 | Which structure should you choose? |
| 3 | Registration Process (4 subsections) |
| 4 | Post-Incorporation: What most people miss (5 bullet points) |

**ComparisonTable component** (`components/ComparisonTable.tsx`):

| Feature | Sole Proprietorship | Partnership | LLP | Pvt Ltd Company |
|---------|--------------------|----|-----|-----|
| Separate legal entity | No | No | Yes | Yes |
| Limited liability | No | No | Yes | Yes |
| Tax rate | Individual slabs | 30% | 30% | 25.17% |
| Can raise equity | No | No | No | Yes |
| Compliance burden | Minimal | Low | Moderate | High |
| Setup time | 1-2 days | 5-7 days | 10-15 days | 15-20 days |

FAQs: 4 questions.

#### Page 7: Company & LLP Compliance (`app/company-llp-compliance/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | Annual ROC Compliance for Pvt Ltd (5 bullet items) |
| 2 | Annual ROC Compliance for LLPs (3 bullet items) |
| 3 | Board Meetings and Resolutions |
| 4 | Statutory Registers |
| 5 | Secretarial Compliance |
| 6 | Agreements and Commercial Documentation |

#### Page 8: Accounting & Payroll (`app/accounting-payroll/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | Monthly Bookkeeping |
| 2 | Financial Statements: P&L, Balance Sheet, Cash Flow |
| 3 | MIS Reporting |
| 4 | Payroll Processing |
| 5 | PF, ESIC, and Professional Tax Compliance |
| 6 | Accounts Receivable and Payable Management |

#### Page 9: Virtual CFO (`app/virtual-cfo/page.tsx`)

**Special layout**: Expandable/collapsible sections for each engagement area.

| Section | Heading |
|---------|---------|
| 1 | What a Virtual CFO engagement covers (7 subsections as H3s) |
| 2 | Who is the Virtual CFO service for? (5 bullet items) |
| 3 | How the engagement works |

Subsections under "What a Virtual CFO covers":
1. Financial Reporting and MIS
2. Budgeting and Forecasting
3. Cash Flow Management
4. Cost Structure and Profitability Analysis
5. Investor Reporting and Fund Raise Support
6. Banking and Treasury
7. Compliance Oversight
8. Entity and Tax Structure Review

FAQs: 3 questions.

#### Page 10: Foreign Accounting (`app/foreign-accounting/page.tsx`)

**Special layout**: Tabbed interface for UK / US / Australia.

| Tab | Sections |
|-----|----------|
| UK | Bookkeeping, VAT Returns, Payroll, Year-End Accounts |
| US | Bookkeeping, AP/AR, Payroll Support, Financial Reporting |
| Australia | Bookkeeping (Xero/MYOB), BAS Preparation, Payroll/STP, Year-End Workpapers |

Additional sections (shared):
- How the engagement works
- Why outsource to a CA rather than a bookkeeper?

FAQs: 4 questions.

**Tabs component**: Use shadcn/ui `<Tabs>` component.

#### Page 11: Audit & Assurance (`app/audit-assurance/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | Statutory Audit under the Companies Act |
| 2 | Tax Audit under Section 44AB |
| 3 | Internal Audit |
| 4 | Bank Audit |
| 5 | Stock Audit and Physical Verification |
| 6 | RERA Audit |

#### Page 12: Tax Litigation (`app/tax-litigation/page.tsx`)

| Section | Heading |
|---------|---------|
| 1 | Income Tax Notices and Assessment (7 bullet items for specific sections) |
| 2 | CIT(A) Appeals |
| 3 | ITAT: Income Tax Appellate Tribunal |
| 4 | GST Litigation (4 bullet items) |
| 5 | Faceless Assessment and Appeal Scheme |

---

## 7. Phase 6: Tax Tools Page

**File**: `app/tax-tools/page.tsx`
**Estimated effort**: 10-12 hours (most complex phase)

### Step 7.1 — Page Layout

```
┌──────────────────────────────────────────────────┐
│ Hero: H1 "Tax Tools: Run Your Own Numbers"       │
│ Intro paragraph                                   │
├──────────────────────────────────────────────────┤
│ Tool Navigation: [Calculator] [Checklist] [GST]  │
├──────────────────────────────────────────────────┤
│ Active Tool Component (rendered below)            │
├──────────────────────────────────────────────────┤
│ Closing CTA: "If a tool raises a question..."     │
└──────────────────────────────────────────────────┘
```

Use shadcn/ui `<Tabs>` to switch between tools, or anchor links to three stacked sections.

### Step 7.2 — Tool 1: New vs Old Tax Regime Calculator

**File**: `components/tools/TaxRegimeCalculator.tsx`

**State management**: React `useState` hooks (no external state library needed).

**Input fields** (left column):

| Field | Type | Default |
|-------|------|---------|
| Gross Annual Salary | number | 0 |
| HRA Received | number | 0 |
| Rent Paid Monthly | number | 0 |
| City Type | select (Metro / Non-metro) | Metro |
| 80C Investments (LIC, PPF, ELSS) | number | 0 |
| 80D Health Insurance - Self | number | 0 |
| 80D Health Insurance - Parents | number | 0 |
| Home Loan Interest (Self-occupied) | number | 0 |
| NPS 80CCD(1B) | number | 0 |
| Other Deductions | number | 0 |

**Calculation logic** (in `data/tax-slabs.ts`):

```
OLD REGIME:
1. Gross Salary
2. Less: HRA Exemption (min of: actual HRA, 50%/40% of basic × 12, rent - 10% of basic × 12)
3. Less: Standard Deduction ₹50,000
4. Less: 80C (max ₹1,50,000)
5. Less: 80D Self (max ₹25,000 / ₹50,000 if senior)
6. Less: 80D Parents (max ₹25,000 / ₹50,000 if senior)
7. Less: Home Loan Interest (max ₹2,00,000)
8. Less: NPS 80CCD(1B) (max ₹50,000)
9. = Taxable Income
10. Apply old slab rates:
    0 - 2,50,000: 0%
    2,50,001 - 5,00,000: 5%
    5,00,001 - 10,00,000: 20%
    Above 10,00,000: 30%
11. Add: Health & Education Cess @ 4%
12. Less: Rebate u/s 87A (if taxable ≤ ₹5,00,000 → rebate up to ₹12,500)

NEW REGIME (FY 2025-26):
1. Gross Salary
2. Less: Standard Deduction ₹75,000
3. Less: 80CCD(2) employer NPS contribution (if applicable)
4. = Taxable Income
5. Apply new slab rates:
    0 - 4,00,000: 0%
    4,00,001 - 8,00,000: 5%
    8,00,001 - 12,00,000: 10%
    12,00,001 - 16,00,000: 15%
    16,00,001 - 20,00,000: 20%
    20,00,001 - 24,00,000: 25%
    Above 24,00,000: 30%
6. Less: Rebate u/s 87A (if taxable ≤ ₹12,00,000 → rebate up to ₹60,000)
7. Add: Health & Education Cess @ 4%
8. Add: Surcharge if applicable (income > ₹50L / ₹1Cr)
```

**Output display** (right column / below on mobile):

| | Old Regime | New Regime |
|--|-----------|------------|
| Gross Income | ₹X | ₹X |
| Total Deductions | ₹X | ₹X |
| Taxable Income | ₹X | ₹X |
| Tax | ₹X | ₹X |
| Cess | ₹X | ₹X |
| **Total Tax** | **₹X** | **₹X** |

- **Difference**: "You save ₹X under the [Old/New] Regime"
- **Recommendation banner**: Green if saving, red if paying more
- **"Reset" button** to clear all fields
- All formatting in Indian numbering system (₹12,34,567)

### Step 7.3 — Tool 2: ITR Filing Document Checklist

**File**: `components/tools/ITRChecklist.tsx`

**Filter buttons** (multi-select, styled as toggle chips):
- Salaried
- Business
- Capital Gains
- House Property
- NRI

**Checklist items** (each tagged with applicable categories):

```typescript
const checklistItems = [
  { id: 1, label: "PAN Card", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 2, label: "Aadhaar Card", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 3, label: "Form 16 (from employer)", categories: ["salaried"] },
  { id: 4, label: "Form 26AS / AIS / TIS", categories: ["salaried", "business", "capital-gains", "nri"] },
  { id: 5, label: "Bank Statements (all accounts)", categories: ["salaried", "business", "capital-gains", "house-property", "nri"] },
  { id: 6, label: "Interest Certificates (FD, Savings)", categories: ["salaried", "capital-gains", "nri"] },
  { id: 7, label: "Capital Gains Statements (from broker)", categories: ["capital-gains"] },
  { id: 8, label: "Property Registration Documents", categories: ["house-property"] },
  { id: 9, label: "80C Investment Proofs (PPF, ELSS, LIC)", categories: ["salaried", "business"] },
  { id: 10, label: "80D Health Insurance Premium Receipts", categories: ["salaried", "business", "nri"] },
  { id: 11, label: "Rent Receipts + Landlord PAN", categories: ["salaried"] },
  { id: 12, label: "Home Loan Interest Certificate", categories: ["salaried", "house-property"] },
  // ... more items
];
```

**Features**:
- Filter by selecting category chips (show only matching items)
- Check/uncheck items (persisted in `useState`)
- Progress indicator: "X of Y documents ready"
- **"Download as PDF"** button using `html2pdf.js`
- Progress bar showing completion percentage

### Step 7.4 — Tool 3: GST Rate Finder

**File**: `components/tools/GSTRateFinder.tsx`

**Data file**: `data/gst-rates.json`

Curated list of ~200+ common items with:
```json
[
  {
    "hsn_sac": "01",
    "description": "Live animals",
    "cgst_rate": 0,
    "sgst_rate": 0,
    "igst_rate": 0,
    "total_gst": "0%",
    "notification": "Notification No. 2/2017",
    "exemptions": "Exempt"
  },
  {
    "hsn_sac": "0201",
    "description": "Meat of bovine animals, fresh or chilled",
    "cgst_rate": 2.5,
    "sgst_rate": 2.5,
    "igst_rate": 5,
    "total_gst": "5%",
    "notification": "Notification No. 1/2017",
    "exemptions": ""
  }
]
```

**UI**:
- Search input with debounce (300ms)
- Results displayed in a table: HSN/SAC | Description | CGST | SGST | Total GST | Notification
- Empty state: "Search by item name or HSN/SAC code"
- No results state: "No matching items found. Verify from official GSTN/CBIC notifications."
- Disclaimer text below the table

### Step 7.5 — JSON-LD Schemas

WebApplication schema for each tool:
```json
{
  "@type": "WebApplication",
  "name": "New vs Old Tax Regime Calculator",
  "applicationCategory": "FinanceApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "provider": { "@type": "Person", "name": "CA Sakshi Khedkar" }
}
```

---

## 8. Phase 7: Contact Page

**File**: `app/contact/page.tsx`
**Estimated effort**: 3-4 hours

### Step 8.1 — Page Layout

```
┌────────────────────────────────────────────┐
│ Hero: H1 "Contact the Firm"                │
│ Intro paragraph                             │
├────────────────────────────────────────────┤
│ Two-column layout:                          │
│  ┌──────────────┐  ┌──────────────────┐    │
│  │ Reach the     │  │ Contact Form     │    │
│  │ Firm          │  │                  │    │
│  │ • Phone       │  │ [Name]           │    │
│  │ • Email       │  │ [Mobile]         │    │
│  │ • Office      │  │ [Email]          │    │
│  │ • Hours       │  │ [Service ▼]      │    │
│  │ • ICAI No.    │  │ [Description]    │    │
│  │               │  │ [Send Message]   │    │
│  └──────────────┘  └──────────────────┘    │
├────────────────────────────────────────────┤
│ WhatsApp Section                            │
├────────────────────────────────────────────┤
│ Schedule a Call (Cal.com embed, 600px)     │
├────────────────────────────────────────────┤
│ What to Include When You Write or Call      │
├────────────────────────────────────────────┤
│ Engagement Process (3 steps)                │
├────────────────────────────────────────────┤
│ A Note on Fees                              │
├────────────────────────────────────────────┤
│ For Professional Enquiries                  │
└────────────────────────────────────────────┘
```

### Step 8.2 — Contact Form Component (`components/ContactForm.tsx`)

**Fields**:

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| Full name | text | min 2 chars | Yes |
| Mobile number | tel | 10 digits | Yes |
| Email address | email | valid email | Yes |
| Service needed | select dropdown | one of 12 options | Yes |
| Brief description | textarea (4 rows) | none | No |

**Service dropdown options** (from doc):
1. GST Services
2. Income Tax
3. International Taxation
4. Start a Business
5. Company / LLP Compliance
6. Accounting and Payroll
7. Virtual CFO
8. Foreign Accounting
9. Audit
10. Tax Litigation
11. Other

**Submission**:
- POST to Formspree endpoint (`https://formspree.io/f/[form-id]`)
- On success: show inline message "Thank you. You will hear from us within one business day."
- On error: show error message
- Loading state: disable button, show spinner
- No redirect (stays on same page)
- No CAPTCHA (per doc)

### Step 8.3 — Cal.com Embed

```tsx
import { Cal } from "@calcom/embed-react";

<Cal
  calLink="sakshikhedkar/initial-enquiry-call"
  style={{ width: "100%", height: "600px" }}
/>
```

Configuration (in Cal.com dashboard):
- Event type: "Initial enquiry call"
- Duration: 20 minutes
- Availability: Mon-Sat, 10:00 AM - 6:00 PM IST
- Buffer: 15 min between meetings

### Step 8.4 — Engagement Process (3 steps)

Visual 3-step process:
```
[1. First Conversation] → [2. Proposal] → [3. Execution]
```
- Step 1: Understanding requirement, timeline, documents
- Step 2: Scope of work, timelines, fees communicated before engagement
- Step 3: Work delivered with periodic updates

### Step 8.5 — JSON-LD Schema

LocalBusiness schema (same as home page but with contact-specific details).

---

## 9. Phase 8: SEO & Schema Markup

**Estimated effort**: 3-4 hours

### Step 9.1 — Per-Page Metadata

Every page has its `metadata` export using the exact title tags and descriptions from the doc.

| Page | Title Tag |
|------|-----------|
| Home | CA Sakshi Khedkar \| Chartered Accountant in CSN (Aurangabad) \| GST, Tax and Advisory |
| About | About CA Sakshi Khedkar \| Chartered Accountant \| CSN (Aurangabad), Maharashtra |
| GST Services | GST Services in CSN (Aurangabad) \| Registration, Returns and Advisory \| CA Sakshi Khedkar |
| Income Tax | Income Tax Services \| ITR Filing and Tax Planning \| CA Sakshi Khedkar |
| International Tax | International Taxation Advisory \| NRI Tax, FEMA, DTAA \| CA Sakshi Khedkar |
| Start a Business | Start a Business in India \| Company, LLP, Partnership Registration \| CA Sakshi Khedkar |
| Company Compliance | Company and LLP Compliance in CSN (Aurangabad) \| ROC Filings, Secretarial \| CA Sakshi Khedkar |
| Accounting | Accounting and Payroll Services \| Bookkeeping, MIS, Payroll \| CA Sakshi Khedkar |
| Virtual CFO | Virtual CFO Services in India \| Fractional CFO for Startups and SMEs \| CA Sakshi Khedkar |
| Foreign Accounting | Outsourced Accounting Services to India \| UK, US, Australia Bookkeeping \| CA Sakshi Khedkar |
| Audit | Audit Services in CSN (Aurangabad) \| Statutory Audit, Tax Audit, Internal Audit \| CA Sakshi Khedkar |
| Tax Litigation | Tax Litigation \| Income Tax and GST Notice Representation \| CA Sakshi Khedkar |
| Tax Tools | Tax Tools \| New vs Old Regime Calculator, GST Rates, ITR Checklist \| CA Sakshi Khedkar |
| Contact | Contact CA Sakshi Khedkar \| Chartered Accountant \| India-Wide Practice \| ICAI 618819 |

### Step 9.2 — Sitemap (`app/sitemap.ts`)

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '', '/about', '/gst-services', '/income-tax',
    '/international-taxation', '/start-a-business',
    '/company-llp-compliance', '/accounting-payroll',
    '/virtual-cfo', '/foreign-accounting',
    '/audit-assurance', '/tax-litigation',
    '/tax-tools', '/contact',
  ];
  return pages.map(path => ({
    url: `https://casakshikhedkar.com${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
```

### Step 9.3 — Robots (`app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://casakshikhedkar.com/sitemap.xml',
  };
}
```

### Step 9.4 — Open Graph Image

Create a branded OG image (1200x630px) with:
- Navy background
- "CA Sakshi Khedkar" in gold serif text
- "Chartered Accountant | CSN (Aurangabad)"
- ICAI No. 618819

Save as `public/images/og-default.png` and reference in metadata.

---

## 10. Phase 9: Polish & Responsive QA

**Estimated effort**: 4-5 hours

### Step 9.1 — Responsive Breakpoints to Test

| Breakpoint | Target |
|-----------|--------|
| 320px | Small phones (iPhone SE) |
| 375px | Standard phones |
| 768px | Tablets |
| 1024px | Small laptops |
| 1280px | Desktop |
| 1440px+ | Large screens |

### Step 9.2 — Key Responsive Patterns

1. **Header**: Hamburger menu below 768px, full nav above
2. **Hero sections**: Stack vertically, reduce font sizes on mobile
3. **Service grid**: 1 col → 2 col → 3 col
4. **Comparison table**: Horizontal scroll on mobile
5. **Tax calculator**: Stack input/output columns on mobile
6. **Contact page**: Single column on mobile (form below info)
7. **Footer**: Single column on mobile
8. **WhatsApp button**: Smaller on mobile (48px vs 56px)

### Step 9.3 — Accessibility Checklist

- [ ] All images have alt text
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Focus indicators visible on all interactive elements
- [ ] Form fields have associated `<label>` elements
- [ ] Heading hierarchy is correct (H1 → H2 → H3, no skipping)
- [ ] ARIA labels on icon-only buttons (WhatsApp, hamburger)
- [ ] Skip-to-content link at top of page
- [ ] Tab order follows visual order

### Step 9.4 — Performance Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 95 |

---

## 11. Phase 10: Deployment

**Estimated effort**: 1-2 hours

### Step 10.1 — Push to GitHub

```bash
git remote add origin https://github.com/[username]/ca-website.git
git branch -M main
git push -u origin main
```

### Step 10.2 — Deploy to Vercel

1. Go to vercel.com → "New Project" → Import GitHub repo
2. Framework: Next.js (auto-detected)
3. Environment variables (if needed): `NEXT_PUBLIC_FORMSPREE_ID`, `NEXT_PUBLIC_CAL_LINK`
4. Deploy

### Step 10.3 — Domain Setup

1. Purchase `casakshikhedkar.com` (via Vercel or external registrar)
2. In Vercel: Settings → Domains → Add domain
3. Update DNS records as instructed by Vercel
4. SSL is automatic (Vercel provides free SSL)

### Step 10.4 — Post-Deployment

1. Submit sitemap to Google Search Console
2. Verify all pages are indexed
3. Test contact form on production
4. Test Cal.com embed on production
5. Test WhatsApp button on production
6. Run Lighthouse on production URL
7. Test on real mobile device

---

## 12. Complete File Manifest

### Application Pages (14 files)
| File | Content |
|------|---------|
| `app/layout.tsx` | Root layout with fonts, metadata, Header/Footer/WhatsApp |
| `app/page.tsx` | Home page |
| `app/about/page.tsx` | About page |
| `app/gst-services/page.tsx` | GST Services |
| `app/income-tax/page.tsx` | Income Tax |
| `app/international-taxation/page.tsx` | International Taxation |
| `app/start-a-business/page.tsx` | Start a Business |
| `app/company-llp-compliance/page.tsx` | Company & LLP Compliance |
| `app/accounting-payroll/page.tsx` | Accounting & Payroll |
| `app/virtual-cfo/page.tsx` | Virtual CFO |
| `app/foreign-accounting/page.tsx` | Foreign Accounting |
| `app/audit-assurance/page.tsx` | Audit & Assurance |
| `app/tax-litigation/page.tsx` | Tax Litigation |
| `app/tax-tools/page.tsx` | Tax Tools |
| `app/contact/page.tsx` | Contact page |
| `app/sitemap.ts` | Auto-generated sitemap |
| `app/robots.ts` | Robots.txt |
| `app/globals.css` | Global styles |

### Components (12 files)
| File | Purpose |
|------|---------|
| `components/Header.tsx` | Responsive navbar |
| `components/Footer.tsx` | 4-column footer |
| `components/WhatsAppButton.tsx` | Floating WhatsApp CTA |
| `components/ServicePage.tsx` | Reusable service page layout |
| `components/ServiceCard.tsx` | Card for home services grid |
| `components/TimelineItem.tsx` | About page career timeline |
| `components/ComparisonTable.tsx` | Start a Business comparison |
| `components/ContactForm.tsx` | Formspree contact form |
| `components/tools/TaxRegimeCalculator.tsx` | Tax regime calculator |
| `components/tools/ITRChecklist.tsx` | ITR document checklist |
| `components/tools/GSTRateFinder.tsx` | GST rate search |
| `components/ui/*` | shadcn/ui primitives (12+ files) |

### Data & Lib (6 files)
| File | Purpose |
|------|---------|
| `lib/utils.ts` | `cn()` class merge utility |
| `lib/constants.ts` | Contact info, nav links, service list |
| `lib/metadata.ts` | `generatePageMetadata()` helper |
| `lib/schema.ts` | JSON-LD schema generators |
| `data/services.ts` | All service page content data |
| `data/tax-slabs.ts` | FY 2025-26 tax slab rates + calculation logic |
| `data/gst-rates.json` | GST rate schedule (~200+ items) |

### Config (4 files)
| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Custom theme (navy, gold, fonts) |
| `next.config.ts` | Next.js config |
| `tsconfig.json` | TypeScript config |
| `package.json` | Dependencies |

### Public Assets
| File | Purpose |
|------|---------|
| `public/images/og-default.png` | Default OG image (1200x630) |
| `public/favicon.ico` | Favicon |

---

## 13. Verification Checklist

### Build & Runtime
- [ ] `npm run build` completes with zero errors
- [ ] `npm run dev` starts and all 14 pages load without console errors
- [ ] No TypeScript errors (`npm run type-check` if configured)

### Content
- [ ] All page titles and meta descriptions match the doc exactly
- [ ] All body content matches the doc (no missing paragraphs)
- [ ] All links between pages work correctly
- [ ] ICAI No. 618819 appears in Header/Footer/Contact

### Tax Tools
- [ ] Calculator produces correct results for test cases:
  - Salary ₹8L, no deductions → compare old vs new
  - Salary ₹15L with full 80C, HRA, home loan → compare
  - Salary ₹25L with all deductions → compare
- [ ] Checklist filters work, items check/uncheck, PDF downloads
- [ ] GST finder returns results for "cement", "consultancy", HSN "0201"

### Contact
- [ ] Form validates required fields
- [ ] Form submits to Formspree successfully
- [ ] Success message appears inline after submit
- [ ] Cal.com embed loads and shows available slots

### SEO
- [ ] Each page has unique `<title>` and `<meta name="description">`
- [ ] JSON-LD schemas validate at schema.org validator
- [ ] Sitemap.xml is accessible and lists all 14 pages
- [ ] Robots.txt is accessible

### Responsive
- [ ] All pages usable at 375px width
- [ ] Header hamburger menu works on mobile
- [ ] No horizontal overflow on any page
- [ ] WhatsApp button visible but not blocking content

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse SEO ≥ 95
- [ ] Lighthouse Best Practices ≥ 90
