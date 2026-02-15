import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook } from "lucide-react";
import logoStacked from "@/assets/logo-stacked.png";
import { footerLinks } from "@/data/navigation";
import { contactInfo } from "@/data/contact";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src={logoStacked}
                alt="The Washboard"
                className="h-28 md:h-32 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-1 text-primary-foreground/70">
              Quick Links
            </h3>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-1 text-primary-foreground/70">
              Contact Us
            </h3>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone size={14} />
              {contactInfo.phoneFormatted}
            </a>
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <MapPin size={14} />
              {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.state}
            </a>
            <a
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Facebook size={14} />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} The Washboard — Murray's Friendly Neighborhood Laundromat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
