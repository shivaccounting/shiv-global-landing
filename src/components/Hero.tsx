import heroImage from "@/assets/hero-accounting.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-subtle sm:mt-4"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Reliable Outsourced
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}
                  Accounting & Bookkeeping
                </span>{" "}
                for US Businesses
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Affordable bookkeeping, payroll, tax support, and law firm trust
                accounting — trusted by CPAs, accountants, and small businesses
                across the United States.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-success">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Trusted by 500+ US Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Since 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Accuracy Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
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

          {/* Hero Image */}
          <div className="relative animate-slide-down">
            <div className="relative rounded-2xl overflow-hidden shadow-professional-lg aspect-[4/3]">
              <Image
                src={heroImage}
                alt="Professional accounting team working with financial data and modern technology"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-professional-lg border border-border">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">$2M+</div>
                <div className="text-sm text-muted-foreground">
                  Managed Monthly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
