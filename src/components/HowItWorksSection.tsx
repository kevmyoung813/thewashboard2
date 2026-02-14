import { CreditCard, MonitorSmartphone, Fingerprint, Armchair } from "lucide-react";

const steps = [
  { icon: CreditCard, label: "Load your laundry card" },
  { icon: MonitorSmartphone, label: "Choose your machine" },
  { icon: Fingerprint, label: "Tap your card to start" },
  { icon: Armchair, label: "Relax while your laundry gets done" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-accent">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Simple. Straightforward. Comfortable.
        </h2>
        <p className="text-muted-foreground mb-14 max-w-xl mx-auto">
          Getting your laundry done has never been easier.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-foreground text-primary text-xs font-bold flex items-center justify-center border-2 border-primary">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground/80 leading-snug">{step.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          See How It Works
        </a>
      </div>
    </section>
  );
};

export default HowItWorksSection;
