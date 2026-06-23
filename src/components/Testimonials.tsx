import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CPA Firm Owner",
      location: "New York",
      rating: 5,
      quote: "Shiv Accounting has been a game-changer for my practice. Their team handles our bookkeeping and payroll so efficiently that I can now focus fully on my clients. The accuracy and timeliness are exceptional.",
      company: "Johnson & Associates CPA"
    },
    {
      name: "Michael Chen", 
      role: "Managing Partner",
      location: "California",
      rating: 5,
      quote: "As a law firm, managing trust accounts was a headache. With Shiv Accounting and their Clio expertise, we now have full confidence in compliance and accuracy. They've streamlined our entire financial process.",
      company: "Chen Legal Group"
    },
    {
      name: "Lisa Rodriguez",
      role: "Small Business Owner",
      location: "Texas", 
      rating: 5,
      quote: "The monthly financial reports are incredibly detailed and always delivered on time. Kailash and his team have helped us understand our cash flow better and make smarter business decisions.",
      company: "Rodriguez Logistics LLC"
    },
    {
      name: "David Thompson",
      role: "E-commerce Owner",
      location: "Florida",
      rating: 5,
      quote: "Managing accounting across Shopify, Amazon, and our direct sales was overwhelming. Shiv Accounting integrated everything seamlessly. Their e-commerce expertise is unmatched.",
      company: "Thompson Electronics"
    },
    {
      name: "Jennifer Kim",
      role: "Restaurant Owner",
      location: "Illinois",
      rating: 5,
      quote: "The payroll management and tax preparation services have saved us countless hours. The team is responsive, professional, and truly understands the restaurant industry's unique needs.",
      company: "Kim's Kitchen"
    },
    {
      name: "Robert Davis",
      role: "Insurance Agent",
      location: "Arizona",
      rating: 5,
      quote: "Switching to Shiv Accounting was the best decision for our agency. Their white-label support has allowed us to scale our operations while maintaining the highest standards of financial accuracy.",
      company: "Davis Insurance Services"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            What Our US Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what CPAs, law firms, and business owners 
            across America are saying about our services.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="min-w-[300px] md:min-w-0 snap-start border-border/60 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative shrink-0"
            >
              <CardContent className="p-8 space-y-6">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="space-y-1 pt-4 border-t border-border/60">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-center">
              <div className="font-mono text-2xl font-bold text-success">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-center">
              <div className="font-mono text-2xl font-bold text-success">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Accuracy Rate</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-center">
              <div className="font-mono text-2xl font-bold text-success">45+</div>
              <div className="text-sm text-muted-foreground mt-1">US States Served</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-center">
              <div className="font-mono text-2xl font-bold text-success">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
