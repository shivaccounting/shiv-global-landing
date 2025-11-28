import founderImage from "@/assets/founder-portrait.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  HeadphonesIcon,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import aboutHeroBg from "@/assets/hero-accounting.jpg";

export const metadata: Metadata = {
  title: "About Shiv Accounting | Trusted Bookkeeping & Accounting Experts",
  description:
    "Learn about Shiv Accounting's journey, mission, and team. We provide expert outsourced accounting services to US businesses, CPAs, and law firms.",
};

const AboutUsPage = () => {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Globe, label: "Countries Served", value: "3" },
    { icon: TrendingUp, label: "Monthly Growth", value: "25%" },
  ];

  const expertise = [
    "QuickBooks & Xero",
    "Clio Integration",
    "ADP & Gusto Payroll",
    "Shopify & Amazon",
    "Bill.com & Dext",
    "Form 1099",
    "Trust Account Management",
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "US-Focused Expertise",
      desc: "Deep knowledge of US accounting, tax, and payroll requirements",
    },
    {
      icon: TrendingUp,
      title: "Software Proficiency",
      desc: "Expert in QuickBooks, Xero, Clio, ADP, Gusto, and more",
    },
    {
      icon: Users,
      title: "Custom Solutions",
      desc: "Tailored services for CPAs, law firms, and small businesses",
    },
    {
      icon: Globe,
      title: "Affordable & Scalable",
      desc: "Outsourced services starting at $500/month",
    },
  ];

  const workProcess = [
    {
      step: "1",
      title: "Consultation & Needs Assessment",
      desc: "Understanding your unique business requirements and challenges",
    },
    {
      step: "2",
      title: "Secure Onboarding",
      desc: "NDA & data access agreement, software setup, historical data review",
    },
    {
      step: "3",
      title: "Customized Setup",
      desc: "Chart of accounts, payroll configuration, e-commerce integration",
    },
    {
      step: "4",
      title: "Ongoing Bookkeeping & Reporting",
      desc: "Reconciliations, payroll processing, AP/AR management",
    },
    {
      step: "5",
      title: "Tax-Ready Deliverables",
      desc: "P&L, Balance Sheet, Cash Flow statements",
    },
    {
      step: "6",
      title: "Review & Support",
      desc: "Continuous communication, adjustments, and proactive support",
    },
  ];

  const expectations = [
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Financial statements and reports delivered on schedule",
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      desc: "Safe and confidential management of all financial data",
    },
    {
      icon: Users,
      title: "Industry Expertise",
      desc: "Experienced team handling industry-specific requirements",
    },
    {
      icon: HeadphonesIcon,
      title: "Clear Communication",
      desc: "Proactive problem-solving and transparent updates",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center min-h-screen flex items-center"
          style={{ backgroundImage: `url(${aboutHeroBg.src})` }}
        >
          <div className="absolute" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Trusted Accounting &
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  {" "}
                  Bookkeeping Experts
                </span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto bg-black/50 p-4 rounded-lg">
                Accurate, compliant, and tax-ready financial solutions for CPAs,
                law firms, and small businesses — offshore expertise with US
                standards.
              </p>

              <p className="text-sm text-white max-w-2xl mx-auto bg-black/50 p-2 rounded-lg">
                Serving US clients since 2019 — QuickBooks, Xero, Clio, ADP,
                Gusto, Shopify, Amazon, and more.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-secondary flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-slide-up">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    How Shiv Accounting Started
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Since 2019, Kailash Dabhi and his team have helped US
                    businesses maintain accurate financial records, streamline
                    processes, and stay compliant with US accounting and tax
                    standards. What started as a small bookkeeping venture in
                    India has grown into a trusted outsourcing partner for US
                    CPAs, small businesses, law firms, and e-commerce companies.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Over 5 years of accounting, bookkeeping, payroll, and
                        taxation experience
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Dedicated team trained in US accounting standards and
                        software
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Managing clients across the US, Canada, and Australia
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="professional" size="lg">
                  Learn About Our Journey{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-6 animate-slide-down">
                <Card className="p-8 bg-gradient-section border-border/50 shadow-professional">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={founderImage}
                        alt="Kailash Dabhi, Founder of Shiv Accounting"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full object-cover shadow-professional"
                      />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Kailash Dabhi
                        </h3>
                        <p className="text-muted-foreground">Founder & CEO</p>
                      </div>
                      <blockquote className="text-muted-foreground italic leading-relaxed">
                        "Your financial data is handled by certified
                        professionals with a commitment to accuracy,
                        confidentiality, and compliance."
                      </blockquote>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Our Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-secondary-light transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Empower US-based businesses and CPAs by providing accurate,
                    tax-ready, and cost-effective accounting, bookkeeping,
                    payroll, and trust account solutions, allowing them to focus
                    on growth and core operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center">
                      <Eye className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the most trusted offshore accounting and
                    bookkeeping partner for US clients, delivering seamless
                    services with professionalism, accuracy, and transparency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine offshore efficiency with US expertise to deliver
                exceptional results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <Card
                  key={item.title}
                  className="p-6 hover-lift text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How We Work With You
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our proven 6-step process ensures seamless onboarding and
                ongoing success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workProcess.map((item, index) => (
                <Card
                  key={item.step}
                  className="p-6 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <Link href="/contact?scrollTo=form">
                  Start Your Accounting Setup{" "}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What You Can Expect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are committed to being your trusted financial partner,
                helping your business run efficiently and compliantly
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectations.map((item, index) => (
                <Card
                  key={item.title}
                  className="p-6 hover-lift text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-secondary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Talk About Your Business
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to streamline your accounting and focus on growth? Get a
              free consultation and see how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild>
                <Link
                  href="https://calendly.com/kailash-shivaccounting/new-meeting"
                  target="_blank"
                >
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
