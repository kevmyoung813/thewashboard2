import { WashingMachine, HandHelping, Bed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceOfferings } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  WashingMachine,
  HandHelping,
  Bed,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for a great laundry experience, all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {serviceOfferings.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
