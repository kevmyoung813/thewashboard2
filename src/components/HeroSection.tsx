import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-laundromat.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clean, modern laundromat interior at The Washboard in Murray, KY"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight !text-primary-foreground mb-6">
            Murray's Friendly Neighborhood Laundromat
          </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-medium mb-2">
              Clean machines. Comfortable space. Genuine customer care.
            </p>
            <p className="text-base md:text-lg text-primary-foreground/75 mb-8">
              Serving the Murray, KY community with a dependable laundry experience.
            </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=605+S+12th+St+Murray+KY+42071"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            <a
              href="tel:2707687058"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={18} />
              Call 270-768-7058
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60">
            Open Every Day · Wash &amp; Fold Service Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
