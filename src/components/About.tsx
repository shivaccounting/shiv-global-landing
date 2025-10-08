import founderImage from "@/assets/founder-portrait.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Globe, label: "US States Served", value: "45+" },
    { icon: TrendingUp, label: "Monthly Transactions", value: "$2M+" },
    { icon: Award, label: "Years of Experience", value: "5+" },
  ];

  const industries = [
    "Restaurants & Hospitality",
    "Transportation & Logistics",
    "E-commerce & Retail",
    "Manufacturing",
    "Insurance Agents",
    "Law Firms & Legal Services",
    "Pharmacy & Healthcare",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Your Trusted Outsourced
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              {" "}
              Accounting Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2019, Shiv Accounting and Business Services has been
            supporting businesses across the United States with professional
            accounting, bookkeeping, payroll, and taxation services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Text */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a skilled team, we combine affordability, accuracy, and
                compliance to deliver high-quality financial management for
                CPAs, law firms, and small businesses.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans QuickBooks, Xero, Clio, ADP, Gusto, Shopify,
                Amazon, and more. We ensure clients get clarity in their numbers
                so they can focus on growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Industries We Serve:</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <Badge
                    key={industry}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-secondary-light transition-colors"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="professional" size="xl">
              <Link to={"about"}>Learn More About Us</Link>
            </Button>
          </div>

          {/* Founder Section */}
          <div className="space-y-6 animate-slide-down">
            <Card className="p-8 bg-gradient-section border-border/50 shadow-professional">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={founderImage}
                    alt="Kailash, Founder of Shiv Accounting and Business Services"
                    className="w-24 h-24 rounded-full object-cover shadow-professional"
                  />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-xl font-semibold">Founder's Note</h3>
                    <p className="text-sm text-muted-foreground">
                      Kailash, Founder
                    </p>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "I've been working in accounting and bookkeeping since 2019,
                    helping businesses maintain accurate financial records and
                    streamline their financial processes. With a commitment to
                    precision and reliability, I ensure clients get clarity in
                    their numbers so they can focus on growth."
                  </blockquote>
                </div>
              </div>
            </Card>

            {/* Process Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How It Works</h3>
              <div className="space-y-3">
                {[
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
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
