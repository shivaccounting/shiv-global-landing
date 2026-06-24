import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CircleCheck,
  Factory,
  Globe,
  Scale,
  ShoppingCart,
  Stethoscope,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { cn } from "@/lib/utils";

const IndustriesPage = () => {
  const industries = [
    {
      id: "restaurants",
      title: "Restaurants & Cafes",
      icon: UtensilsCrossed,
      description: "Streamlined accounting for food service businesses",
      challenges: [
        "Tracking food costs, inventory, and vendor payments",
        "Managing hourly employee payroll and tips",
        "Timely P&L and cash flow reporting",
      ],
      services: [
        "Daily/weekly bookkeeping and bank reconciliations",
        "POS integration and sales reconciliation",
        "Payroll for hourly and salaried staff (ADP, Gusto, QuickBooks Payroll)",
        "Tax-ready reports for CPA review",
      ],
    },
    {
      id: "retail",
      title: "Retail & Inventory Management",
      icon: ShoppingCart,
      description: "Accurate retail bookkeeping and inventory solutions",
      challenges: [
        "Multi-store bookkeeping",
        "Inventory tracking and cost of goods sold (COGS)",
        "Vendor payments and accounts receivable management",
      ],
      services: [
        "Monthly reconciliations and financial statements",
        "Inventory and POS system integration",
        "Accounts payable/receivable automation (Bill.com, Dext)",
        "Tax-ready reporting",
      ],
    },
    {
      id: "law-firms",
      title: "Law Firms & Service Providers",
      icon: Scale,
      description: "Trust account & law firm bookkeeping expertise",
      challenges: [
        "Managing client trust accounts (IOLTA/IOTA compliance)",
        "Tracking billable hours and retainers",
        "Integration with Clio or other practice management software",
      ],
      services: [
        "Trust account reconciliation & reporting",
        "Client matter mapping and billing",
        "Clio bookkeeping & AP/AR management",
        "Tax-ready packs and reports for CPA review",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce & Online Sellers",
      icon: Globe,
      description: "E-commerce accounting that keeps your business profitable",
      challenges: [
        "Reconciling sales across multiple marketplaces",
        "Mapping fees, shipping, and refunds",
        "Tracking inventory and COGS",
      ],
      services: [
        "Shopify, Amazon, WooCommerce reconciliation",
        "Stripe, Greenlight Payments, Sezzle integration",
        "Monthly financial reporting and tax-ready packages",
        "Expense categorization and vendor reconciliation",
      ],
    },
    {
      id: "transportation",
      title: "Transportation & Logistics",
      icon: Truck,
      description: "Accounting solutions for transportation companies",
      challenges: [
        "Driver payroll management",
        "Fuel, maintenance, and fleet cost tracking",
        "Complex invoicing and AR collections",
      ],
      services: [
        "Payroll for drivers and staff",
        "AP/AR management",
        "Fleet and expense tracking",
        "Month-end financial statements",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare & Pharmacy",
      icon: Stethoscope,
      description: "Healthcare accounting with compliance & accuracy",
      challenges: [
        "Payroll for medical staff",
        "Insurance and billing reconciliations",
        "Tax compliance for small practices and pharmacies",
      ],
      services: [
        "Payroll processing and reconciliations",
        "Revenue and expense tracking",
        "Tax-ready financial statements",
        "Insurance and pharmacy billing reconciliation",
      ],
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Production",
      icon: Factory,
      description: "Manufacturing accounting & cost management",
      challenges: [
        "Tracking raw material costs and production expenses",
        "Inventory valuation and COGS calculation",
        "Vendor and subcontractor payments",
      ],
      services: [
        "Inventory management and reconciliations",
        "Cost of goods sold tracking",
        "Monthly P&L, Balance Sheet, Cash Flow statements",
        "Vendor payment automation",
      ],
    },
  ];

  const iconAccents = [
    "from-primary/15 to-secondary/10",
    "from-secondary/15 to-primary/10",
    "from-primary/15 to-accent/10",
    "from-accent/15 to-secondary/10",
    "from-secondary/15 to-primary/10",
    "from-primary/15 to-secondary/10",
    "from-accent/15 to-primary/10",
  ];

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
        eyebrow={<Badge variant="secondary">Industry Expertise</Badge>}
        title="Accounting & Bookkeeping Services for Every Industry"
        description={
          <>
            <p>
              Customized solutions for US CPAs, law firms, small businesses, and
              online sellers. Accuracy, compliance, and efficiency — handled by
              our trained team.
            </p>
            <p className="text-sm mt-4">
              Serving US businesses since 2019 — QuickBooks, Xero, Clio, ADP,
              and industry-specific expertise.
            </p>
          </>
        }
      />

        {/* Industries Grid */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
              <SectionLabel>Industries</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized accounting solutions tailored to the unique needs of
                your industry
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <article
                    key={industry.id}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className={cn(
                      "group relative flex flex-col rounded-2xl p-6 md:p-7 overflow-hidden",
                      "gradient-border bg-card/80 backdrop-blur-sm border border-border/50",
                      "transition-all duration-300 hover:-translate-y-1",
                      "hover:shadow-xl hover:shadow-primary/8 hover:border-primary/20",
                      "animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:both]",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        "bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.04]",
                      )}
                    />

                    <span className="absolute top-5 right-5 font-mono text-4xl font-bold leading-none text-primary/[0.06] group-hover:text-primary/10 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                            "bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
                            iconAccents[index],
                          )}
                        >
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0 pr-8">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {industry.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 flex-1">
                        <div className="rounded-xl border border-accent/20 border-l-[3px] border-l-accent bg-accent/[0.05] p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15">
                              <AlertCircle className="h-3.5 w-3.5 text-accent" />
                            </span>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                              Common Challenges
                            </h4>
                          </div>
                          <ul className="space-y-2.5">
                            {industry.challenges.map((challenge) => (
                              <li
                                key={challenge}
                                className="text-sm text-foreground/75 flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent/70 shrink-0" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl border border-success/25 border-l-[3px] border-l-success bg-success/[0.06] p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-success/15">
                              <CircleCheck className="h-3.5 w-3.5 text-success" />
                            </span>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-success">
                              Our Solutions
                            </h4>
                          </div>
                          <ul className="space-y-2.5">
                            {industry.services.map((service) => (
                              <li
                                key={service}
                                className="text-sm text-foreground/85 flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15 mt-0.5">
                                  <Check className="h-2.5 w-2.5 text-success" strokeWidth={3} />
                                </span>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link
                        href="/contact?scrollTo=form"
                        className="group/link mt-6 pt-5 border-t border-border/50 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        <span>Get industry-specific quote</span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted/80 transition-all duration-300 group-hover/link:bg-primary group-hover/link:text-primary-foreground group-hover/link:translate-x-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Industry-Specific Accounting?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a customized accounting solution designed for your industry's
              unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?scrollTo=form">
                <Button size="lg" className="hover-scale">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="hover-scale">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </>
  );
};

export default IndustriesPage;
