"use client";

import { Card, CardContent } from "@/components/ui/card";

import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready to Get Started?
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            {" "}
            Let's Talk!
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch for a free consultation and discover how we can
          streamline your accounting processes and help your business grow.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="grid lg:grid-cols-2 gap-16 mb-20" id="form">
        {/* Contact Form */}
        <div className="w-full min-h-[800px] bg-card/50 rounded-xl border border-border/50 overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScQ2CKaTjoA1tRITMSZBgsda7tLSsJZxvwUaO3s5gK9N6tDZQ/viewform?usp=sharing&ouid=111372871625306707850"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-full"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>

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

          {/* Quick Info Card */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-professional-lg">
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
