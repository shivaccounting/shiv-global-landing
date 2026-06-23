import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary",
      className,
    )}
  >
    {children}
  </span>
);

export default SectionLabel;
