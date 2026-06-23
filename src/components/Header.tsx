"use client";

import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="shiv accounting"
              height={48}
              width={120}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918306744700"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@shivaccounting.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact?scrollTo=form">Get Free Consultation</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              aria-hidden
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="lg:hidden relative z-50 py-4 border-t border-border/60 bg-background animate-fade-in">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "font-medium py-2.5 px-3 rounded-xl transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="cta" size="lg" className="w-full mt-3" asChild>
                  <Link href="/contact?scrollTo=form">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
