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
  CheckCircle,
  Factory,
  Globe,
  Scale,
  ShoppingCart,
  Stethoscope,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const IndustriesPage = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <title>Industries We Serve - Shiv Accounting Services</title>
      <meta
        name="description"
        content="Specialized accounting and bookkeeping services for restaurants, retail, law firms, e-commerce, transportation, healthcare, and manufacturing industries."
      />
      <meta
        name="keywords"
        content="industry accounting, restaurant bookkeeping, retail accounting, law firm accounting, e-commerce bookkeeping, transportation accounting, healthcare accounting, manufacturing accounting"
      />

      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Industry Expertise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Accounting & Bookkeeping Services for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Customized solutions for US CPAs, law firms, small businesses, and
              online sellers. Accuracy, compliance, and efficiency — handled by
              our trained team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale">
                <Link
                  to={"https://calendly.com/kailash-shivaccounting/new-meeting"}
                  target="_blank"
                >
                  Request a Free Consultation
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Link to={"/contact"} state={{ scrollTo: "form" }}>
                  Get a Custom Quote
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Serving US businesses since 2019 — QuickBooks, Xero, Clio, ADP,
              and industry-specific expertise.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized accounting solutions tailored to the unique needs of
                your industry
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <Card
                    key={industry.id}
                    className="hover-scale transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {industry.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-destructive mb-3">
                          Common Challenges:
                        </h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                          Our Solutions:
                        </h4>
                        <ul className="space-y-2">
                          {industry.services.map((service, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        onClick={() =>
                          navigate("/contact", { state: { scrollTo: "form" } })
                        }
                        className="w-full hover-scale"
                        variant="outline"
                      >
                        Get Industry-Specific Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
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
              <Link
                to={"https://calendly.com/kailash-shivaccounting/new-meeting"}
                target="_blank"
              >
                <Button size="lg" className="hover-scale">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to={"/services"}>
                <Button variant="outline" size="lg" className="hover-scale">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage;
