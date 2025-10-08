import heroImage from "@/assets/hero-accounting.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-subtle"
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
              <Link
                to={"https://calendly.com/kailash-shivaccounting/new-meeting"}
                target="_blank"
              >
                <Button variant="hero" size="xl" className="group">
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={"/services"}>
                <Button variant="professional" size="xl">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Integration badges */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4 font-semibold">
                "Trusted by CPAs, Bookkeepers, Law Firms, and Small Businesses
                Nationwide"
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                {["QuickBooks", "Xero", "Clio", "ADP", "Gusto", "Shopify"].map(
                  (platform) => (
                    <div
                      key={platform}
                      className="text-sm font-semibold text-primary"
                    >
                      {platform}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-down">
            <div className="relative rounded-2xl overflow-hidden shadow-professional-lg">
              <img
                src={heroImage}
                alt="Professional accounting team working with financial data and modern technology"
                className="w-full h-auto object-cover"
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
