import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

import { Suspense } from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
