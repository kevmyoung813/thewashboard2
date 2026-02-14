import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Phone, MapPin } from "lucide-react";

const rules = [
  "All customers must use the laundry card system — no coins.",
  "Do not overload washers or dryers. Follow posted load limits.",
  "Use only the recommended amount of detergent.",
  "Remove laundry promptly when cycles are complete.",
  "Unattended items may be removed to allow others to use machines.",
  "Children must be supervised at all times.",
  "No dyeing or bleaching of fabrics in machines.",
  "Do not wash heavily soiled or hazardous materials.",
  "Keep the facility clean — dispose of lint, trash, and leftover supplies properly.",
  "Report any machine issues to management immediately.",
  "The Washboard is not responsible for lost, stolen, or damaged items.",
  "Respect other customers and staff at all times.",
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                <ShieldCheck size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Facility Rules
              </h1>
              <p className="text-lg text-muted-foreground">
                Please follow these guidelines to keep The Washboard a clean, safe, and friendly place for everyone.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-10">
              <ol className="space-y-4">
                {rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="font-bold text-primary min-w-[1.5rem]">{i + 1}.</span>
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
              Questions About Our Policies?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2707687058"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                <Phone size={18} />
                Call 270-768-7058
              </a>
              <a
                href="https://maps.google.com/?q=605+S+12th+St+Murray+KY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <MapPin size={18} />
                Visit Us in Murray, KY
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
