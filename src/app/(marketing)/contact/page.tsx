import Contact from "@/components/Contact";
import { Suspense } from "react";
import PricingCard from "@/components/PricingCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Shiv Accounting | Get Free Consultation",
  description:
    "Contact Shiv Accounting for expert bookkeeping and accounting services. Get a free consultation and discover affordable, scalable solutions for your business.",
  keywords:
    "contact shiv accounting, accounting consultation, bookkeeping services, accounting pricing, free consultation",
  alternates: {
    canonical: "https://shivaccounting.com/contact",
  },
};

const ContactPage = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCard />
      </div>
    </section>
  );
};

export default ContactPage;
