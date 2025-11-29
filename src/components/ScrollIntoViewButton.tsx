"use client";
import { Button } from "./ui/button";

interface plan {
  name: String;
  price: String;
  period: String;
  features: String[];
  popular: Boolean;
}

const ScrollIntoViewButton = ({ plan }: { plan: plan }) => {
  return (
    <Button
      onClick={() =>
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
      }
      variant={plan.popular ? "cta" : "professional"}
      size="lg"
      className="w-full"
    >
      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
    </Button>
  );
};

export default ScrollIntoViewButton;
