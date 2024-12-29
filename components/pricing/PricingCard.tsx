"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  pageviews: string;
  monthlyPrice: number;
}

const pricingTiers: PricingTier[] = [
  { pageviews: "10K", monthlyPrice: 8 },
  { pageviews: "50K", monthlyPrice: 12 },
  { pageviews: "100K", monthlyPrice: 16 },
  { pageviews: "500K", monthlyPrice: 24 },
  { pageviews: "1M", monthlyPrice: 36 },
];

export function PricingCard() {
  const [sliderValue, setSliderValue] = useState([2]);
  const [isYearly, setIsYearly] = useState(false);
  
  const currentTier = pricingTiers[sliderValue[0]];
  const price = isYearly 
    ? currentTier.monthlyPrice * 0.75 
    : currentTier.monthlyPrice;

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-8 transition-all duration-300">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            {currentTier.pageviews} Pageviews
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-extrabold text-primary">
              ${price.toFixed(2)}
            </span>
            <span className="text-muted-foreground">
              / {isYearly ? "year" : "month"}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={4}
            step={1}
            className="w-full"
          />

          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm text-muted-foreground">Monthly Billing</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className="text-sm text-muted-foreground">
              Yearly Billing
              <span className="ml-2 px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                25% discount
              </span>
            </span>
          </div>
        </div>

        <hr className="border-border" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            {[
              "Unlimited websites",
              "100% data ownership",
              "Email reports",
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Start my trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}