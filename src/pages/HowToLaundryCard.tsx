import { CreditCard, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  "Pick up a reloadable laundry card at The Washboard, available at the front counter.",
  "Add value to your card using the card loading station.",
  "Take your card to any available washer or dryer.",
  "Tap your card on the machine's card reader to start your cycle.",
  "Reload your card anytime you need more value.",
];

const HowToLaundryCard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <Link
              to="/how-to"
              className="text-sm text-primary hover:underline mb-6 inline-block"
            >
              ← Back to How-To
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <CreditCard size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                How to Use the Laundry Card System
              </h1>
            </div>

            <p className="text-lg text-muted-foreground mb-10">
              No coins needed — our reloadable laundry card makes doing laundry at The Washboard in Murray, KY simple and convenient.
            </p>

            <ol className="space-y-4 mb-12">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-foreground/80 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            <div className="bg-accent rounded-2xl p-6 text-sm text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> Keep your laundry card safe — it holds your balance and can be reloaded as many times as you need. Perfect for Murray State students and Calloway County families who visit regularly.
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold !text-primary-foreground mb-8">
              Need Help?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2707687058" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:opacity-90 transition-opacity">
                <Phone size={18} /> Call 270-768-7058
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=605+S+12th+St+Murray+KY+42071" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <MapPin size={18} /> Visit Us in Murray, KY
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToLaundryCard;
