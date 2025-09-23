import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calculator,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["US: +1 (555) 123-4567", "India: +91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@shivaccounting.com", "support@shivaccounting.com"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["New Delhi, India", "Serving US Businesses Globally"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9 AM - 6 PM EST", "24/7 Support Available"],
    },
  ];

  const pricingPlans = [
    {
      name: "Bookkeeping Services",
      price: "$500",
      period: "/month",
      features: [
        "Monthly reconciliations",
        "Financial reports", 
        "AP/AR management",
        "Payroll support (optional)",
        "Tax-ready books"
      ],
      popular: false
    },
    {
      name: "Complete Package",
      price: "$750",
      period: "/month", 
      features: [
        "Everything in Bookkeeping",
        "Full payroll management",
        "Tax preparation & filing",
        "Trust account management",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      period: "pricing",
      features: [
        "White-label outsourcing",
        "Dedicated offshore team",
        "Multiple entity management", 
        "Custom integrations",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Get Started?
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Let's Talk!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for a free consultation and discover how we can streamline 
            your accounting processes and help your business grow.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Affordable & Scalable Plans
            </h3>
            <p className="text-muted-foreground">
              Every business is unique — that's why our pricing is tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative hover-lift ${
                  plan.popular 
                    ? 'border-accent shadow-glow bg-gradient-accent/5' 
                    : 'border-border/50 bg-card/50'
                } backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl mb-4">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-sm text-muted-foreground font-normal">
                        {plan.period}
                      </span>
                    </div>
                    {plan.name === "Bookkeeping Services" && (
                      <p className="text-sm text-muted-foreground">Starting from</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "cta" : "professional"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calculator className="w-6 h-6 text-primary" />
                Get Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Business Type</label>
                <Input placeholder="e.g., CPA Firm, Law Firm, E-commerce" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">How can we help you?</label>
                <Textarea 
                  placeholder="Tell us about your accounting needs, current challenges, or questions..."
                  rows={4}
                />
              </div>

              <Button variant="cta" size="xl" className="w-full group">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No commitment required. We'll respond within 24 hours.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info Card */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-professional-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Shiv Accounting?</h3>
                <ul className="space-y-3">
                  {[
                    "5+ years serving US businesses",
                    "99.9% accuracy in financial reporting", 
                    "Expertise in 15+ accounting platforms",
                    "Dedicated US time zone support",
                    "Scalable solutions for any business size"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;