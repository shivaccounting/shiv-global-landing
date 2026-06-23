"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GOOGLE_FORM } from "@/data/content";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Contact = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["India: +91 83067 44700"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shivaccounting.com"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: [" Ahmedabad, Gujarat, India"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9 AM - 6 PM IST", "24/7 Support Available"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const payload = new URLSearchParams();
    payload.append(GOOGLE_FORM.fields.name, formData.get("name") as string);
    payload.append(GOOGLE_FORM.fields.email, formData.get("email") as string);
    payload.append(GOOGLE_FORM.fields.phone, formData.get("phone") as string);
    payload.append(GOOGLE_FORM.fields.message, formData.get("message") as string);

    try {
      await fetch(GOOGLE_FORM.action, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      toast.success("Thank you! Your message has been submitted.");
      form.reset();
    } catch(error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-secondary">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
          Ready to Get Started? Let&apos;s Talk!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Get in touch for a free consultation and discover how we can
          streamline your accounting processes and help your business grow.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20" id="form">
        <Card className="border-border/60 bg-card shadow-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help you? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your accounting needs..."
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="border-border/60 bg-card shadow-sm"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Why Choose Shiv Accounting?
              </h3>
              <ul className="space-y-3">
                {[
                  "5+ years serving US businesses",
                  "99.9% accuracy in financial reporting",
                  "Expertise in 15+ accounting platforms",
                  "Dedicated US time zone support",
                  "Scalable solutions for any business size",
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
  );
};

export default Contact;
