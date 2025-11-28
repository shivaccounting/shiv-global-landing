"use client";

import About from "@/components/About";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Logo = dynamic(() => import("@/components/Logo"), {
  loading: () => <></>,
  ssr: false,
});

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Logo />
        <Services />
        <About />
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
