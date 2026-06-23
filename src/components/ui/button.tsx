import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "rounded-md border border-input bg-background hover:bg-muted hover:text-foreground",
        secondary: "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-md hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 font-semibold",
        cta: "rounded-full bg-accent text-accent-foreground shadow-glow-accent hover:bg-accent/90 hover:shadow-lg font-semibold",
        professional: "rounded-full border border-border/80 bg-background/80 backdrop-blur-sm text-foreground hover:bg-muted hover:border-primary/20",
        success: "rounded-md bg-success text-success-foreground hover:bg-success/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-full px-8",
        xl: "h-14 rounded-full px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };