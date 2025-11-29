import Contact from "@/components/Contact";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section id="contact" className="py-20 bg-gradient-section">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <PricingCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
