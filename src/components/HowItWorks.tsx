import { HOME_PROCESS_STEPS } from "@/data/content";
import SectionLabel from "./SectionLabel";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mt-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HOME_PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="group relative rounded-2xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 font-mono text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {item.step}
              </div>
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mb-6">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
              {index < HOME_PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-px bg-border z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
