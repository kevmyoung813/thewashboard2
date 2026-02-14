import { MapPin, Phone } from "lucide-react";

const CtaBand = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !text-primary-foreground mb-8">
          Ready for a better laundry experience in Murray?
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
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
