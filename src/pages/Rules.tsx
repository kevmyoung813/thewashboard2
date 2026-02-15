import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Phone } from "lucide-react";

const sections = [
  {
    title: "Customer Responsibility",
    items: [
      "Customers are responsible for their own safety and personal property.",
      "The Washboard is not responsible for lost, stolen, or damaged items.",
      "Please check machines before and after use for any items left behind.",
    ],
  },
  {
    title: "Using Our Equipment",
    items: [
      "Do not overload washers or dryers. Proper loading ensures better results and protects equipment.",
      "Use only the recommended amount of detergent.",
      "Do not use dyes or products that may damage machines.",
      "If you experience an issue with a machine, please notify a staff member.",
    ],
  },
  {
    title: "Unattended Laundry",
    items: [
      "Please monitor your laundry while it is in use.",
      "Laundry left unattended after cycles are complete may be removed to allow other customers to use machines.",
      "Abandoned items may be disposed of or donated after a reasonable period.",
      "Wash & Fold orders not picked up within 30 days may be disposed of or donated.",
    ],
  },
  {
    title: "Safety & Courtesy",
    intro: "To maintain a welcoming environment for all customers:",
    items: [
      "Children must be supervised at all times.",
      "No running or horseplay.",
      "Do not sit or stand on folding tables, washers, or dryers.",
      "No alcohol, smoking, or vaping inside the facility.",
      "Shirts and shoes are required at all times.",
      "No loitering or soliciting.",
    ],
  },
  {
    title: "Respecting the Facility",
    intro: "Please help keep the laundromat clean.",
    items: [
      "Dispose of trash properly.",
      "Be mindful of wet floors.",
      "Return carts to designated areas after use.",
    ],
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
              <ShieldCheck size={28} className="text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Store Guidelines &amp; Policies
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              To keep The Washboard clean, safe, and comfortable for everyone in Murray, KY, we ask all customers to follow the guidelines below.
            </p>
            <p className="text-base text-muted-foreground">
              We appreciate your cooperation and thank you for choosing The Washboard.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-20 md:pb-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-8">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-secondary rounded-2xl border border-border shadow-sm p-6 md:p-8"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {section.title}
                </h2>
                <div className="h-px bg-border mb-5" />
                {section.intro && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {section.intro}
                  </p>
                )}
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[0.95rem] md:text-base leading-relaxed text-foreground"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Rules;
