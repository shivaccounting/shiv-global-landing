import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Briefcase,
  Calculator,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import servicesHeroBg from "@/assets/services-team.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Accounting Services | Shiv Accounting & Business Services",
  description:
    "Comprehensive outsourced accounting, bookkeeping, payroll, and trust accounting services for US businesses, CPAs, and law firms. Starting from $500/month.",
};

const ServicesPage = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping & Financial Reporting",
      shortDesc:
        "Clean, compliant bookkeeping — monthly reconciliations, chart of accounts cleanups, and financial statements delivered on schedule.",
      deliverables: [
        "Monthly bank & credit card reconciliations",
        "P&L, Balance Sheet, Cash Flow statements",
        "Adjusting journal entries",
        "Tax-ready pack preparation",
        "Chart of accounts cleanup",
      ],
      ctaText: "Schedule a Free Bookkeeping Setup",
      pricing: "Starting from $500/month",
    },
    {
      icon: Users,
      title: "Payroll Management",
      shortDesc:
        "Complete payroll support — employee setup, payroll runs, W-2 & 1099 prep, and payroll ledger reconciliations.",
      deliverables: [
        "Payroll setup and processing",
        "Employee management systems",
        "W-2 & 1099 preparation",
        "PTO/benefits tracking",
        "Payroll tax support",
        "Journal entries and reconciliation",
      ],
      ctaText: "Start Payroll Setup",
      pricing: "Custom pricing based on headcount",
    },
    {
      icon: CreditCard,
      title: "Accounts Payable & Receivable",
      shortDesc:
        "Streamline invoice processing, vendor payments, and receivable collections for better cash flow management.",
      deliverables: [
        "Bill.com integration and management",
        "Vendor payment processing",
        "Invoice generation and tracking",
        "Collections management",
        "Aging reports and analysis",
      ],
      ctaText: "Optimize Your Cash Flow",
      pricing: "Add-on service from $200/month",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Accounting",
      shortDesc:
        "Reconcile marketplace settlements, map fees, and calculate COGS for online sellers across multiple platforms.",
      deliverables: [
        "Shopify, Amazon, WooCommerce reconciliation",
        "Marketplace fees mapping",
        "COGS calculation and tracking",
        "Multi-platform inventory management",
        "Sales tax compliance support",
      ],
      ctaText: "Clean Up My E-commerce Books",
      pricing: "Starting from $800/month",
    },
    {
      icon: Shield,
      title: "Law Firm Accounting & Trust Accounts",
      shortDesc:
        "Specialized bookkeeping for law firms: trust account reconciliation, client matter mapping, and Clio bookkeeping support.",
      deliverables: [
        "IOLTA/IOTA compliance management",
        "Clio integration and support",
        "Trust account reconciliation",
        "Client matter mapping",
        "Retainer accounting",
        "Partner reporting",
      ],
      ctaText: "Book Clio & Trust Accounting Consultation",
      pricing: "Starting from $1,200/month",
    },
    {
      icon: Briefcase,
      title: "White-Label & CPA Outsourcing",
      shortDesc:
        "Deliver client work under your brand — dedicated resources, SLAs, and secure processes for CPA firms.",
      deliverables: [
        "Dedicated offshore team members",
        "White-label service delivery",
        "Custom SLA agreements",
        "Secure process management",
        "Scalable team expansion",
        "Quality assurance protocols",
      ],
      ctaText: "Become a White-Label Partner",
      pricing: "Enterprise pricing available",
    },
    {
      icon: Globe,
      title: "Integrations & Automation",
      shortDesc:
        "Set up connectors, automated feeds, and reconciliation rules to streamline bookkeeping and reduce errors.",
      deliverables: [
        "Software integration setup",
        "Automated data feeds",
        "Reconciliation rule creation",
        "Workflow automation",
        "Error reduction protocols",
        "Monthly automation reports",
      ],
      ctaText: "Automate My Accounting Stack",
      pricing: "Setup fee + monthly maintenance",
    },
  ];

  const industries = [
    {
      name: "Restaurants & Hospitality",
      description:
        "Food cost tracking, payroll for hourly staff, POS integration, vendor payments, and tax-ready reporting.",
    },
    {
      name: "Retail",
      description:
        "Multi-store bookkeeping, inventory tracking, POS reconciliation, AP/AR, and monthly reporting.",
    },
    {
      name: "Law Firms & Service Providers",
      description:
        "Trust account (IOLTA/IOTA) management, Clio integration, retainer accounting, and partner reporting.",
    },
    {
      name: "E-commerce & Online Stores",
      description:
        "Shopify, Amazon, WooCommerce reconciliations, marketplace fees mapping, inventory, and COGS.",
    },
    {
      name: "Transportation & Logistics",
      description:
        "Fleet management bookkeeping, driver payroll, fuel cost tracking, and monthly financial reporting.",
    },
    {
      name: "Healthcare & Pharmacy",
      description:
        "Payroll for staff, insurance billing reconciliation, and accurate bookkeeping for compliance.",
    },
    {
      name: "Manufacturing & Production",
      description:
        "Inventory management, raw materials costing, production cost tracking, and financial statements.",
    },
    {
      name: "Insurance Agents & Brokers",
      description:
        "Commission tracking, AP/AR, monthly financial statements, and tax-ready reporting.",
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "24-48 Hour Response Time",
      description: "All client queries answered within 2 business days maximum",
    },
    {
      icon: Award,
      title: "Monthly Deliverables",
      description:
        "P&L, Balance Sheet, and Cash Flow delivered within 7-12 business days after month-end",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Double-review process with senior accountant oversight and exception reporting",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Secure data storage, encrypted access, role-based permissions, and NDA protection",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center min-h-screen flex items-center"
          style={{ backgroundImage: `url(${servicesHeroBg.src})` }}
        >
          <div className="absolute inset-0 bg-white/[0.05] sm:bg-white/[0.05] sm:bg-gradient-to-r sm:from-white/[0.05] sm:to-white/5" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Professional
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}
                  Accounting Services
                </span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto bg-black/50 p-4 rounded-lg">
                Comprehensive outsourced accounting, bookkeeping, payroll, and
                trust accounting services for US businesses, CPAs, and law
                firms. Accurate, tax-ready books delivered by certified
                professionals.
              </p>

              <Badge variant="default" className="text-white px-4 py-2">
                Serving US CPAs, law firms & businesses since 2019
              </Badge>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our Services — Tailored for Your Success
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end outsourced bookkeeping, payroll, taxation support,
                and specialized accounting services so you can focus on growth
                and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="hover-lift group cursor-pointer border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">
                        {service.shortDesc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-primary">
                        Deliverables:
                      </h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <ArrowRight className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-auto"
                      asChild
                    >
                      <Link href="/contact?scrollTo=form">
                        {service.ctaText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Industries We Specialize In
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored accounting solutions with industry-specific expertise
                and compliance knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card
                  key={industry.name}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <Link href="/industries" className="text-wrap">
                  Find Out How We Can Support Your Industry
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Guarantees */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our Commitment to Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quality assurance, security, and timely delivery you can count
                on
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => (
                <div
                  key={guarantee.title}
                  className="text-center space-y-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                    <guarantee.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{guarantee.title}</h3>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-20 shadow-professional-lg border border-border/50">
          <div className="container mx-auto px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Streamline Your Accounting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team is ready to take over your bookkeeping, payroll,
              and compliance needs so you can focus on growing your business.
              Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link
                  href="https://calendly.com/kailash-shivaccounting/new-meeting"
                  target="_blank"
                >
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <Link href="/contact?scrollTo=form">Request Custom Quote</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Starting from $500/month • Custom quotes for complex needs •
              24-hour response guarantee
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
