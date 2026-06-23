import About from "@/components/About";
import CtaBand from "@/components/CtaBand";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingTeaser from "@/components/PricingTeaser";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const SoftwareExpertise = dynamic(
  () => import("@/components/SoftwareExpertise"),
  {
    loading: () => <></>,
  },
);

const Index = () => {
  return (
    <>
      <Hero />
      <SoftwareExpertise />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <PricingTeaser />
      <CtaBand />
    </>
  );
};

export default Index;
