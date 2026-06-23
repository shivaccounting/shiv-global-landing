import founderImage from "@/assets/founder-portrait.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ABOUT_STATS } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

const About = () => {
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
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Your Trusted Outsourced Accounting Partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Since 2019, Shiv Accounting and Business Services has been
            supporting businesses across the United States with professional
            accounting, bookkeeping, payroll, and taxation services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card p-6 text-center hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="font-mono text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
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
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge
                    key={industry}
                    variant="outline"
                    className="px-3 py-1.5 text-sm rounded-full border border-primary/20 bg-primary/5 text-foreground font-medium hover:bg-primary/10"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="professional" size="xl" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="gradient-border rounded-2xl p-8 bg-card shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm" />
                <Image
                  src={founderImage}
                  alt="Kailash, Founder of Shiv Accounting and Business Services"
                  width={96}
                  height={96}
                  className="relative w-24 h-24 rounded-full object-cover ring-2 ring-background"
                />
              </div>
              <div className="space-y-4 text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-semibold">Founder&apos;s Note</h3>
                  <p className="text-sm text-muted-foreground">
                    Kailash, Founder
                  </p>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                  &ldquo;I&apos;ve been working in accounting and bookkeeping since 2019,
                  helping businesses maintain accurate financial records and
                  streamline their financial processes. With a commitment to
                  precision and reliability, I ensure clients get clarity in their numbers
                  so they can focus on growth.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
