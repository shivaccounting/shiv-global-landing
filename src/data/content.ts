import {
  Briefcase,
  Calculator,
  CreditCard,
  Shield,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const HOME_SERVICES: ServiceItem[] = [
  {
    icon: Calculator,
    title: "Bookkeeping & Reporting",
    description:
      "Accurate monthly reconciliations, financial statements, and cash flow reports.",
    features: [
      "Monthly reconciliations",
      "Financial statements",
      "Cash flow reports",
      "Tax-ready books",
    ],
  },
  {
    icon: Users,
    title: "Payroll Management",
    description:
      "Payroll setup, employee management, W-2, 1099 filing, and payroll taxes.",
    features: [
      "Payroll processing",
      "Employee management",
      "Tax filing",
      "Compliance",
    ],
  },
  {
    icon: CreditCard,
    title: "Accounts Payable & Receivable",
    description:
      "Bill.com, Dext, Clio, invoicing, vendor payments, and collections.",
    features: [
      "Bill.com, Dext and Clio integration",
      "Vendor payments",
      "Invoicing",
      "Collections",
    ],
  },
  {
    icon: Shield,
    title: "Law Firm Accounting & Trust Accounts",
    description:
      "Trust compliance, IOLTA management, and Clio bookkeeping support.",
    features: [
      "Trust compliance",
      "IOLTA management",
      "Clio integration",
      "Legal accounting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Accounting",
    description:
      "Shopify, Amazon, and WooCommerce integration and reconciliation.",
    features: [
      "Shopify integration",
      "Amazon reconciliation",
      "WooCommerce",
      "Multi-platform",
    ],
  },
  {
    icon: Briefcase,
    title: "White-Label Outsourcing",
    description: "Dedicated offshore staff for CPAs and accounting firms.",
    features: [
      "Dedicated staff",
      "Scalable solutions",
      "CPA support",
      "Firm expansion",
    ],
  },
];

export const HERO_TRUST_INDICATORS = [
  "Trusted by 500+ US Businesses",
  "Since 2019",
  "100% Accuracy Rate",
] as const;

export const HOME_PROCESS_STEPS = [
  {
    step: "1",
    title: "Consultation",
    desc: "We understand your business needs.",
  },
  {
    step: "2",
    title: "Onboarding",
    desc: "Secure setup with your preferred platforms.",
  },
  {
    step: "3",
    title: "Delivery",
    desc: "Accurate, on-time reporting and compliance.",
  },
] as const;

export const ABOUT_STATS = [
  { label: "Happy Clients", value: "500+" },
  { label: "US States Served", value: "45+" },
  { label: "Monthly Transactions", value: "$2M+" },
  { label: "Years of Experience", value: "5+" },
] as const;

export const GOOGLE_FORM = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLScQ2CKaTjoA1tRITMSZBgsda7tLSsJZxvwUaO3s5gK9N6tDZQ/formResponse",
  fields: {
    name: "entry.593570370",
    email: "entry.1953693080",
    phone: "entry.1192863462",
    message: "entry.1857754470",
  },
} as const;
