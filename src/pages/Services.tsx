import { MapPin, Phone, WashingMachine, HandHelping, Bed, CreditCard, Clock, Sparkles, Maximize } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import selfServiceImage from "@/assets/self-service-machines.jpg";
import washFoldImage from "@/assets/wash-fold-laundry.jpg";
import comforterImage from "@/assets/comforter-machines.jpg";
import { contactInfo } from "@/data/contact";
import { selfServiceFeatures, washFoldPricing } from "@/data/services";

const featureIconMap: Record<string, LucideIcon> = {
  Maximize,
  Sparkles,
  Clock,
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Laundry Services in Murray, KY</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Modern machines. Customer-first service. Convenient options for every household.
            </p>
          </div>
        </section>

        {/* Self-Service Laundry */}
        <section className="py-16 md:py-24 bg-warm">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent">
                <WashingMachine size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Self-Service Laundry</h2>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6 max-w-2xl">
              Our modern washers and dryers are designed for simplicity and efficiency. With our reloadable laundry card
              system, there is no need for coins — load your card and start your cycle.
            </p>
            <ul className="space-y-3 mb-10">
              {selfServiceFeatures.map((feature) => {
                const Icon = featureIconMap[feature.icon] ?? Maximize;
                return (
                  <li key={feature.text} className="flex items-center gap-3 text-foreground/80">
                    <Icon size={18} className="text-primary shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={selfServiceImage}
                alt="Folded laundry and modern washing machines at The Washboard in Murray, KY"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Wash & Fold Service */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Image - shows first on mobile */}
              <div className="rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
                <img
                  src={washFoldImage}
                  alt="Neatly folded laundry at The Washboard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent">
                    <HandHelping size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Wash &amp; Fold Service</h2>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  When time is limited, drop off your laundry and let our team handle the washing, drying, and folding.
                  Your items are returned fresh, neatly folded, and ready to put away — ideal for Murray State students
                  and families throughout Calloway County.
                </p>

                {/* Pricing Card */}
                <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-1">
                    <CreditCard size={20} className="text-primary" />
                    <h3 className="text-lg font-semibold text-primary">Wash &amp; Fold Pricing</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5">{washFoldPricing.minimum}</p>

                  <ul className="space-y-3 text-foreground/80">
                    {washFoldPricing.items.map(({ item, price }) => (
                      <li
                        key={item}
                        className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0"
                      >
                        <span>{item}</span>
                        <span className="font-semibold text-primary">{price}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground text-xs mt-5 leading-relaxed">
                    {washFoldPricing.detergentOptions} {washFoldPricing.additionalOptions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comforters & Specialty */}
        <section className="py-16 md:py-24 bg-warm">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent">
                <Bed size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Comforters &amp; Specialty Items</h2>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed mb-10 max-w-2xl">
              We handle large bedding and select specialty items with care. Visit our Murray, KY location to speak with
              our team about your specific needs.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                alt="Clean laundry equipment at The Washboard laundromat"
                className="w-full h-64 md:h-80 object-cover object-[center_calc(50%+100px)]"
                loading="lazy"
                src={comforterImage}
              />
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !text-primary-foreground mb-8">
              Have Questions About Our Services?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                <Phone size={18} />
                Call {contactInfo.phoneFormatted}
              </a>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
