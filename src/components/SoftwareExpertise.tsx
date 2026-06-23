"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  SOFTWARE_CATEGORIES,
  SOFTWARE_LOGOS,
  type SoftwareCategory,
} from "@/data/software-logos";
import SectionLabel from "./SectionLabel";

const SoftwareExpertise = () => {
  const [activeCategory, setActiveCategory] = useState<SoftwareCategory>("all");

  const filteredLogos = useMemo(
    () =>
      activeCategory === "all"
        ? SOFTWARE_LOGOS
        : SOFTWARE_LOGOS.filter((logo) => logo.category === activeCategory),
    [activeCategory],
  );

  const activeLabel =
    SOFTWARE_CATEGORIES.find((c) => c.id === activeCategory)?.label ??
    "All Software";

  return (
    <section
      id="software-expertise"
      className="relative py-24 md:py-32 bg-mesh-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel className="border-white/10 bg-white/5 text-white/80">
            Integrations
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
            Software Expertise
          </h2>
          <p className="text-white/60 text-center mt-3">
            We&apos;re proficient in 28+ leading accounting, property
            management, e-commerce, and payroll platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-4xl mx-auto">
          {SOFTWARE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border",
                activeCategory === category.id
                  ? "bg-white text-primary border-white shadow-sm"
                  : "text-white/70 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mt-6">
          {filteredLogos.length} platform{filteredLogos.length !== 1 ? "s" : ""}{" "}
          · {activeLabel}
        </p>

        <div
          key={activeCategory}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 animate-in fade-in duration-300"
        >
          {filteredLogos.map((logo) => (
            <div
              key={logo.name}
              className={cn(
                "group flex flex-col items-center justify-center rounded-xl border border-white/10 p-4 sm:p-5 min-h-[108px] transition-all duration-200",
                "hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5",
                logo.darkBackground ? "bg-slate-900/90" : "bg-white/95",
              )}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.src.width}
                height={logo.src.height}
                className="object-contain max-h-9 sm:max-h-10 w-auto"
              />
              <span
                className={cn(
                  "mt-3 text-[11px] font-medium text-center leading-tight line-clamp-2 transition-colors",
                  logo.darkBackground
                    ? "text-white/50 group-hover:text-white/70"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareExpertise;
