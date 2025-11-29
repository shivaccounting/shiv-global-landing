import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ScrollIntoViewButton from "./ScrollIntoViewButton";

const PricingCard = () => {
  const pricingPlans = [
    {
      name: "Bookkeeping Services",
      price: "$500",
      period: "/month",
      features: [
        "Bank and CC updation",
        "Monthly Reconciliation",
        "Payroll Updation",
        "Financials report with Insight",
        "Tax Ready Books",
      ],
      popular: false,
    },
    {
      name: "Complete Package",
      price: "$750",
      period: "/month",
      features: [
        "Everything in Bookkeeping",
        "Full payroll management",
        "Bills and Invoice updation",
        "AP & AR Tracking",
        "Trust account management",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      period: "pricing",
      features: [
        "White-label outsourcing",
        "Dedicated offshore team",
        "Multiple entity management",
        "Custom integrations",
        "Priority support",
      ],
      popular: false,
    },
  ];
  return (
    <div className="">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Affordable & Scalable Plans
        </h3>
        <p className="text-muted-foreground">
          Every business is unique — that's why our pricing is tailored to your
          needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`relative hover-lift ${
              plan.popular
                ? "border-accent shadow-glow bg-gradient-accent/5"
                : "border-border/50 bg-card/50"
            } backdrop-blur-sm`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge
                  variant="secondary"
                  className="bg-accent text-accent-foreground"
                >
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-xl mb-4">{plan.name}</CardTitle>
              <div className="space-y-1">
                <div className="text-3xl font-bold">
                  {plan.price}
                  <span className="text-sm text-muted-foreground font-normal">
                    {plan.period}
                  </span>
                </div>
                {plan.name === "Bookkeeping Services" && (
                  <p className="text-sm text-muted-foreground">Starting from</p>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <ScrollIntoViewButton plan={plan} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
