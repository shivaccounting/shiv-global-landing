"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Logo = () => {
  const [logos, setLogos] = useState<{ src: any; alt: string }[]>([]);

  useEffect(() => {
    const loadLogos = async () => {
      const [app1, app2, app3, app4, app5, app8, app9, app10, app12, app13] =
        await Promise.all([
          import("@/assets/logos/app1.svg"),
          import("@/assets/logos/app2.png"),
          import("@/assets/logos/app3.png"),
          import("@/assets/logos/app4.png"),
          import("@/assets/logos/app5.png"),
          import("@/assets/logos/app8.png"),
          import("@/assets/logos/app9.png"),
          import("@/assets/logos/app10.png"),
          import("@/assets/logos/app12.png"),
          import("@/assets/logos/app13.png"),
        ]);

      setLogos([
        { src: app1.default, alt: "Clio" },
        { src: app2.default, alt: "Dext" },
        { src: app3.default, alt: "Amazon" },
        { src: app4.default, alt: "Gusto" },
        { src: app5.default, alt: "Sage" },
        { src: app8.default, alt: "Wave" },
        { src: app9.default, alt: "QuickBooks" },
        { src: app10.default, alt: "Shopify" },
        { src: app12.default, alt: "Xero" },
        { src: app13.default, alt: "Zoho" },
      ]);
    };

    loadLogos();
  }, []);

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
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    height={64}
                    width={120}
                    style={{ width: "auto", height: "64px" }}
                    className="object-contain transition-all flex-shrink-0"
                  />
                ))}
                {/* Duplicate for infinite scroll effect */}
                {logos.map((logo, index) => (
                  <Image
                    key={`dup-1-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    height={64}
                    width={120}
                    style={{ width: "auto", height: "64px" }}
                    className="object-contain transition-all flex-shrink-0"
                  />
                ))}
                {logos.map((logo, index) => (
                  <Image
                    key={`dup-2-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    height={64}
                    width={120}
                    style={{ width: "auto", height: "64px" }}
                    className="object-contain transition-all flex-shrink-0"
                  />
                ))}
                {logos.map((logo, index) => (
                  <Image
                    key={`dup-3-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    height={64}
                    width={120}
                    style={{ width: "auto", height: "64px" }}
                    className="object-contain transition-all flex-shrink-0"
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
