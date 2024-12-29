import { PricingCard } from "@/components/pricing/PricingCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Simple, traffic-based pricing
        </h1>
        <p className="text-muted-foreground">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <PricingCard />
    </main>
  );
}