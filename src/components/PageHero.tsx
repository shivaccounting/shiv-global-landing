import { ReactNode } from "react";
import Link from "next/link";

interface PageHeroProps {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
}

const PageHero = ({ title, description, eyebrow, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumb.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                {index > 0 && <span className="text-border">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <div className="mb-4">{eyebrow}</div>}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-tight">
            {title}
          </h1>
          {description && (
            <div className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
              {description}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
