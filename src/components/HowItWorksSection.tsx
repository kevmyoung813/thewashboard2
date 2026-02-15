import { CreditCard, MonitorSmartphone, Fingerprint, Armchair } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { howItWorksSteps } from "@/data/howto";

const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  MonitorSmartphone,
  Fingerprint,
  Armchair,
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-accent">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Simple. Straightforward. Comfortable.
        </h2>
        <p className="text-muted-foreground mb-14 max-w-xl mx-auto">
          A few quick steps are all it takes to get started.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.label} className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Icon size={28} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-foreground text-primary text-xs font-bold flex items-center justify-center border-2 border-primary">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/80 leading-snug">{step.label}</p>
              </div>
            );
          })}
        </div>

        <Link
          to="/how-to"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          See How It Works
        </Link>
      </div>
    </section>
  );
};

export default HowItWorksSection;
