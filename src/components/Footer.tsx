import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const services = [
    "Bookkeeping & Reporting",
    "Payroll Management",
    "Tax Preparation",
    "Trust Account Management",
    "E-commerce Accounting",
    "White-Label Outsourcing",
  ];

  const industries = [
    "CPA Firms",
    "Law Firms",
    "Small Businesses",
    "E-commerce",
    "Restaurants",
    "Healthcare",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Shiv Accounting</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Professional accounting and business services for US companies.
                Trusted by CPAs, law firms, and businesses nationwide since
                2019.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@shivaccounting.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 83067 44700</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Porbandar, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#about"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get Started</h4>
            <p className="text-sm text-primary-foreground/80">
              Ready to streamline your accounting? Schedule a free consultation
              today.
            </p>
            <Button variant="secondary" size="lg" className="w-full" asChild>
              <Link href="/contact?scrollTo=form">Free Consultation</Link>
            </Button>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/shiv-accounting"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2025 Shiv Accounting and Business Services. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              {/* <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
