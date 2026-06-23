import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import dynamic from "next/dynamic";

const SoftwareExpertise = dynamic(
  () => import("@/components/SoftwareExpertise"),
  {
    loading: () => <></>,
  },
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SoftwareExpertise />
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
