import { usePageMeta } from "@/hooks/usePageMeta";
import { WashingMachine, Wind, CreditCard, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { howToServiceBoxes, faqs } from "@/data/howto";
import { contactInfo } from "@/data/contact";

const iconMap: Record<string, LucideIcon> = {
  WashingMachine,
  Wind,
  CreditCard,
};

const HowTo = () => {
  usePageMeta({
    title: "How to Use Our Laundromat - Murray, KY | The Washboard",
    description:
      "Easy laundry card system, modern washers & dryers. Located near Murray State University in Calloway County.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              How to Use Our Machines
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3">
              Step-by-step instructions to help make your visit to The
              Washboard simple and straightforward.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Serving customers throughout Murray, KY with modern, easy-to-use
              equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone size={18} />
                Call {contactInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        {/* Three Service Boxes */}
        <section className="py-16 md:py-24 bg-warm">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {howToServiceBoxes.map((box) => {
                const Icon = iconMap[box.icon];
                return (
                  <div
                    key={box.title}
                    className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{box.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {box.description}
                    </p>
                    <Link
                      to={box.link}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      {box.button}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Helpful Guidelines &amp; FAQs
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions before you start your laundry.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HowTo;
