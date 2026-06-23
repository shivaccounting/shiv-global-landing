import { Button } from "@/components/ui/button";
import { HERO_TRUST_INDICATORS } from "@/data/content";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import DashboardMock from "./DashboardMock";
import SectionLabel from "./SectionLabel";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-mesh"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-slide-up">
            <SectionLabel>Outsourced Accounting</SectionLabel>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-foreground">
                Reliable Outsourced Accounting & Bookkeeping for US Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Affordable bookkeeping, payroll, tax support, and law firm trust
                accounting — trusted by CPAs, accountants, and small businesses
                across the United States.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {HERO_TRUST_INDICATORS.map((indicator) => (
                <span
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-3.5 py-1.5 text-sm font-medium text-success"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  {indicator}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="cta" size="xl" className="group" asChild>
                <Link href="/contact?scrollTo=form">
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="professional" size="xl" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-down lg:pl-4">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
