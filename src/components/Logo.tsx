// Import logos
import asanaLogo from "@/assets/logos/Asana.png";
import clioLogo from "@/assets/logos/clio-logo.svg";
import dextLogo from "@/assets/logos/Dext (1).png";
import gustoLogo from "@/assets/logos/Gusto_logo_f45d48.png";
import quickbooksLogo from "@/assets/logos/pngwing.com (10).png";
import adpLogo from "@/assets/logos/pngwing.com (13).png";
import shopifyLogo from "@/assets/logos/shopify_logo_black.png";
import xeroLogo from "@/assets/logos/Xero_(software)-Logo.wine.png";
import zohoLogo from "@/assets/logos/Zoho_Office_Suite-Logo.wine.png";

{
  /* Integration badges */
}
const Logo = () => {
  return (
    <section id="services" className="pb-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-professional-lg border border-border/50">
          <div className="">
            <div className="flex items-center justify-center">
              <h4 className="text-xl w-[70%] text-wrap text-center md:text-2xl font-bold">
                Trusted by CPAs, Bookkeepers, Law Firms, and Small Businesses
                Nationwide
              </h4>
            </div>
            <div className="relative mt-6 overflow-hidden">
              <div className="flex gap-8 items-center animate-scroll">
                {[
                  { src: quickbooksLogo, alt: "QuickBooks" },
                  { src: xeroLogo, alt: "Xero" },
                  { src: clioLogo, alt: "Clio" },
                  { src: adpLogo, alt: "ADP" },
                  { src: gustoLogo, alt: "Gusto" },
                  { src: shopifyLogo, alt: "Shopify" },
                  { src: asanaLogo, alt: "Asana" },
                  { src: dextLogo, alt: "Dext" },
                  { src: zohoLogo, alt: "Zoho" },
                ]
                  .concat([
                    { src: quickbooksLogo, alt: "QuickBooks" },
                    { src: xeroLogo, alt: "Xero" },
                    { src: clioLogo, alt: "Clio" },
                    { src: adpLogo, alt: "ADP" },
                    { src: gustoLogo, alt: "Gusto" },
                    { src: shopifyLogo, alt: "Shopify" },
                    { src: asanaLogo, alt: "Asana" },
                    { src: dextLogo, alt: "Dext" },
                    { src: zohoLogo, alt: "Zoho" },
                  ])
                  .map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
