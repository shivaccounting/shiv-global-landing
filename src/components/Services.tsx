import servicesImage from "@/assets/services-team.jpg";
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
  Briefcase,
  Calculator,
  CreditCard,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
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
    // {
    //   icon: FileText,
    //   title: "Taxation Support",
    //   description: "Tax-ready books, Tax filing, 1099 preparation, and Form 5472 compliance.",
    //   features: ["Tax preparation", "1099 processing", "Form 5472", "Compliance support"]
    // },
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

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Comprehensive Outsourced
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Accounting Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From bookkeeping to trust account management, we provide end-to-end
            financial services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-lift group cursor-pointer border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-professional-lg border border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to streamline your accounting processes?
              </h3>
              <p className="text-muted-foreground">
                Our expert team is ready to take over your bookkeeping, payroll,
                and compliance needs so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
                <Button variant="professional" size="xl" asChild>
                  <Link href="/contact?scrollTo=form">Get Custom Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-professional">
              <Image
                src={servicesImage}
                alt="Professional team analyzing financial reports and business data"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
