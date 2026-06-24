import { Button } from "@/components/ui/button";
import { HOME_SERVICES } from "@/data/content";
import { ArrowRight, Check } from "lucide-react";
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

const iconAccents = [
  "from-white/20 to-white/5",
  "from-primary/15 to-secondary/10",
  "from-secondary/15 to-primary/10",
  "from-primary/15 to-accent/10",
  "from-accent/15 to-secondary/10",
  "from-secondary/15 to-primary/10",
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16 auto-rows-fr">
          {HOME_SERVICES.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <Link
                key={service.title}
                href="/services"
                style={{ animationDelay: `${index * 80}ms` }}
                className={cn(
                  "group relative rounded-2xl p-6 md:p-7 transition-all duration-300 flex flex-col overflow-hidden",
                  "animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:both]",
                  "hover:-translate-y-1",
                  bentoLayout[index],
                  isFeatured
                    ? "md:min-h-[260px] hover:shadow-2xl hover:shadow-primary/25"
                    : "gradient-border bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl hover:shadow-primary/8 hover:border-primary/20",
                )}
              >
                {isFeatured ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/50" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(185_57%_35%_/_0.35),transparent_60%)]" />
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
                  </>
                ) : (
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.04]",
                    )}
                  />
                )}

                <span
                  className={cn(
                    "absolute top-5 right-5 font-mono text-4xl font-bold leading-none select-none transition-colors duration-300",
                    isFeatured
                      ? "text-white/10 group-hover:text-white/15"
                      : "text-primary/[0.06] group-hover:text-primary/10",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        "bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
                        isFeatured
                          ? "from-white/20 to-white/5 shadow-lg shadow-black/10"
                          : iconAccents[index],
                      )}
                    >
                      <service.icon
                        className={cn(
                          "w-5 h-5",
                          isFeatured ? "text-white" : "text-primary",
                        )}
                      />
                    </div>
                    {isFeatured && (
                      <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/10">
                        Core Service
                      </span>
                    )}
                  </div>

                  <h3
                    className={cn(
                      "text-lg font-semibold mb-2 pr-10",
                      isFeatured
                        ? "text-white"
                        : "text-foreground group-hover:text-primary transition-colors",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      isFeatured ? "text-white/80 max-w-lg" : "text-muted-foreground",
                    )}
                  >
                    {service.description}
                  </p>

                  {isFeatured ? (
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/85"
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/15">
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted/80 text-muted-foreground group-hover:bg-primary/8 group-hover:text-primary transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    className={cn(
                      "mt-auto pt-5 flex items-center gap-2 text-sm font-medium",
                      isFeatured ? "text-white/90" : "text-muted-foreground group-hover:text-primary",
                    )}
                  >
                    <span>Explore service</span>
                    <span
                      className={cn(
                        "inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                        "group-hover:translate-x-0.5",
                        isFeatured
                          ? "bg-white/10 group-hover:bg-white/20"
                          : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground",
                      )}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
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
