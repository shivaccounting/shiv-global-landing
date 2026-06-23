"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  SOFTWARE_CATEGORIES,
  SOFTWARE_LOGOS,
  type SoftwareCategory,
} from "@/data/software-logos";

const SoftwareExpertise = () => {
  const [activeCategory, setActiveCategory] = useState<SoftwareCategory>("all");

  const filteredLogos = useMemo(
    () =>
      activeCategory === "all"
        ? SOFTWARE_LOGOS
        : SOFTWARE_LOGOS.filter((logo) => logo.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="software-expertise" className="pb-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Software Expertise
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mt-3">
            We&apos;re proficient in 28+ leading accounting, property
            management, e-commerce, and payroll platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
          {SOFTWARE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:border-primary/40",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {filteredLogos.map((logo) => (
            <div
              key={logo.name}
              className={cn(
                "w-36 sm:w-40 rounded-xl border border-border/50 shadow-professional-lg p-6 flex items-center justify-center h-28",
                logo.darkBackground ? "bg-slate-800" : "bg-card",
              )}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.src.width}
                height={logo.src.height}
                className="object-contain max-h-12 w-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareExpertise;
