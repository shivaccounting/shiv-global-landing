import { Button } from "@/components/ui/button";
import { HOME_SERVICES } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";

const bentoLayout = [
  "md:col-span-2 md:row-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Comprehensive Outsourced Accounting Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From bookkeeping to trust account management, we provide end-to-end
            financial services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {HOME_SERVICES.map((service, index) => (
            <Link
              key={service.title}
              href="/services"
              className={cn(
                "group relative rounded-2xl p-6 transition-all duration-300 flex flex-col overflow-hidden",
                bentoLayout[index],
                index === 0
                  ? "bg-primary text-primary-foreground md:min-h-[220px] hover:shadow-xl hover:shadow-primary/20"
                  : "gradient-border bg-card hover:shadow-lg hover:shadow-primary/5",
              )}
            >
              {index === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/40 opacity-90" />
              )}
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                    index === 0
                      ? "bg-white/10 backdrop-blur-sm"
                      : "bg-primary/10 group-hover:bg-primary/15 transition-colors",
                  )}
                >
                  <service.icon
                    className={cn(
                      "w-5 h-5",
                      index === 0 ? "text-white" : "text-primary",
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "text-lg font-semibold mb-2",
                    index === 0
                      ? "text-white"
                      : "text-foreground group-hover:text-primary transition-colors",
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed flex-1",
                    index === 0 ? "text-white/75" : "text-muted-foreground",
                  )}
                >
                  {service.description}
                </p>
                <span
                  className={cn(
                    "inline-flex items-center justify-center w-9 h-9 rounded-full mt-4 transition-all",
                    index === 0
                      ? "bg-white/10 group-hover:bg-white/20"
                      : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground",
                  )}
                >
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-50" />
          <div className="relative glass rounded-2xl p-8 md:p-12 border border-border/60">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Ready to streamline your accounting processes?
              </h3>
              <p className="text-muted-foreground">
                Our expert team is ready to take over your bookkeeping, payroll,
                and compliance needs so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
                <Button variant="professional" size="xl" asChild>
                  <Link href="/contact?scrollTo=form">Get Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
