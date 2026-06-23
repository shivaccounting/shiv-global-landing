import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaBand = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-dark rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Schedule a Free Consultation
            </h2>
            <p className="text-white/60">
              Get in touch for a free consultation and discover how we can
              streamline your accounting processes and help your business grow.
            </p>
          </div>
          <Button
            variant="cta"
            size="xl"
            className="shrink-0 group"
            asChild
          >
            <Link href="/contact?scrollTo=form">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
