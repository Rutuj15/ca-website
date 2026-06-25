export const SITE_NAME = "CA Sakshi Khedkar";

export const CONTACT = {
  phone: "+91 8275853032",
  email: "sakshikhedkarassociates@gmail.com",
  whatsappUrl: "https://wa.me/918275853032",
  address: "CSN (Chhatrapati Sambhajinagar), Maharashtra",
  icaiNo: "618819",
  hours: "Mon–Sat, 10:00 AM – 6:00 PM IST",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "GST Services", href: "/gst-services", icon: "Receipt" },
      { label: "Income Tax", href: "/income-tax", icon: "Calculator" },
      { label: "International Taxation", href: "/international-taxation", icon: "Globe" },
      { label: "Start a Business", href: "/start-a-business", icon: "Building2" },
      { label: "Company & LLP Compliance", href: "/company-llp-compliance", icon: "FileText" },
      { label: "Accounting & Payroll", href: "/accounting-payroll", icon: "FileSpreadsheet" },
      { label: "Virtual CFO", href: "/virtual-cfo", icon: "Briefcase" },
      { label: "Foreign Accounting", href: "/foreign-accounting", icon: "BookOpen" },
      { label: "Audit & Assurance", href: "/audit-assurance", icon: "Shield" },
      { label: "Tax Litigation", href: "/tax-litigation", icon: "Scale" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Tax Tools", href: "/tax-tools" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_OPTIONS = [
  "GST Services",
  "Income Tax",
  "International Taxation",
  "Start a Business",
  "Company / LLP Compliance",
  "Accounting and Payroll",
  "Virtual CFO",
  "Foreign Accounting",
  "Audit",
  "Tax Litigation",
  "Other",
] as const;
