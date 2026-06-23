import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";

const PricingTeaser = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-xl opacity-70" />
          <div className="relative text-center rounded-3xl border border-border/60 bg-card p-8 md:p-12 shadow-lg">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-4 mb-4">
              Affordable & Scalable Plans
            </h2>
            <p className="text-muted-foreground mb-8">
              Every business is unique — that&apos;s why our pricing is tailored to
              your needs.
            </p>
            <div className="inline-flex flex-col items-center rounded-2xl bg-primary/5 border border-primary/10 px-10 py-6 mb-8">
              <div className="font-mono text-5xl font-bold text-primary">
                $500
                <span className="text-lg text-muted-foreground font-normal font-sans">
                  /month
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Starting from</p>
            </div>
            <Button variant="cta" size="xl" asChild>
              <Link href="/contact?scrollTo=form">
                View Pricing Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
