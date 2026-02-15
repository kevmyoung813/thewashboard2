import { WashingMachine, Wind, CreditCard, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceBoxes = [
  {
    icon: WashingMachine,
    title: "How to Use the Washers",
    description:
      "Step-by-step instructions for starting a wash cycle using our laundry card system.",
    button: "View Washer Instructions",
    link: "/how-to/washers",
  },
  {
    icon: Wind,
    title: "How to Use the Dryers",
    description:
      "Learn how to load, start, and get the best results from our modern dryers.",
    button: "View Dryer Instructions",
    link: "/how-to/dryers",
  },
  {
    icon: CreditCard,
    title: "How to Use the Laundry Card System",
    description:
      "Instructions for loading value and starting machines with our reloadable laundry card.",
    button: "View Card Instructions",
    link: "/how-to/laundry-card",
  },
];

const faqs = [
  {
    q: "Do I need coins to use the machines?",
    a: "No. The Washboard uses a reloadable laundry card system instead of coins.",
  },
  {
    q: "How much detergent should I use?",
    a: "Use only the recommended amount. Overusing detergent can affect machine performance and wash quality.",
  },
  {
    q: "Can I leave my laundry unattended?",
    a: "Please monitor your laundry. Unattended items may be removed after cycles are complete to allow others to use machines.",
  },
  {
    q: "What if I overload a washer?",
    a: "Avoid overloading machines. Proper loading ensures better cleaning results and helps protect the equipment.",
  },
  {
    q: "Are children allowed?",
    a: "Children must be supervised at all times for safety.",
  },
  {
    q: "What items are not allowed in machines?",
    a: "Items that may damage machines — including certain dyes or heavily soiled materials — should not be placed in washers or dryers.",
  },
];

const HowTo = () => {
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
            <p className="text-sm text-muted-foreground">
              Serving customers throughout Murray, KY with modern, easy-to-use
              equipment.
            </p>
          </div>
        </section>

        {/* Three Service Boxes */}
        <section className="py-16 md:py-24 bg-warm">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {serviceBoxes.map((box) => (
                <div
                  key={box.title}
                  className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                    <box.icon size={28} className="text-primary" />
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
              ))}
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
