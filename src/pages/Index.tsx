import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

import { lazy, Suspense } from "react";

const Logo = lazy(() => import("@/components/Logo"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
        <About />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
