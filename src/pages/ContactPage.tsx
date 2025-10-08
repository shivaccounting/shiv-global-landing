import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <title>Contact Us - Shiv Accounting | Get Free Consultation</title>
      <meta
        name="description"
        content="Contact Shiv Accounting for expert bookkeeping and accounting services. Get a free consultation and discover affordable, scalable solutions for your business."
      />
      <meta
        name="keywords"
        content="contact shiv accounting, accounting consultation, bookkeeping services, accounting pricing, free consultation"
      />
      <link rel="canonical" href="https://shivaccounting.com/contact" />

      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
