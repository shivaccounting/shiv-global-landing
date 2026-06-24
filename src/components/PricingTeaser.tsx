import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";

const PricingTeaser = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm">
          <div className="space-y-4 max-w-xl">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Affordable & Scalable Plans
            </h2>
            <p className="text-muted-foreground">
              Every business is unique — that&apos;s why our pricing is tailored to
              your needs.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-1">Starting from</p>
              <div className="font-mono text-4xl md:text-5xl font-bold text-primary">
                $500
                <span className="text-lg text-muted-foreground font-normal font-sans">
                  /month
                </span>
              </div>
            </div>
            <Button variant="cta" size="xl" className="shrink-0 group" asChild>
              <Link href="/contact?scrollTo=form">
                View Pricing Plans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
