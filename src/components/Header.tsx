import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { navLinks } from "@/data/navigation";
import { contactInfo } from "@/data/contact";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (link: { label: string; href: string }, className: string) => {
    if (link.href.startsWith("/#")) {
      return (
        <Link
          key={link.href}
          to={link.href}
          className={className}
          onClick={() => handleNavClick(link.href)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className={className}
        onClick={() => setMobileOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoHorizontal} alt="The Washboard" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            renderLink(link, "font-heading uppercase tracking-wide text-base font-medium text-foreground hover:text-primary transition-colors")
          )}
          <a
            href={contactInfo.phoneHref}
            className="font-heading uppercase tracking-wide text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href={contactInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading uppercase tracking-wide inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <MapPin size={16} />
            Get Directions
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[4.5rem] z-40 bg-background md:hidden flex flex-col overflow-y-auto">
          {/* Nav links */}
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {navLinks.map((link) =>
              renderLink(
                link,
                "font-heading uppercase tracking-wide text-lg font-medium text-foreground hover:text-primary py-3 border-b border-border/50"
              )
            )}
          </nav>

          {/* Contact info + CTA buttons at bottom */}
          <div className="mt-auto px-6 pb-8 pt-6 border-t border-border">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
              <span className="text-foreground/80">{contactInfo.address.formatted}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-primary shrink-0" size={20} />
              <a
                href={contactInfo.phoneHref}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {contactInfo.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-primary shrink-0" size={20} />
              <span className="text-foreground/80">{contactInfo.hours}</span>
            </div>

            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading uppercase tracking-wide inline-flex items-center justify-center gap-2 rounded-full bg-primary w-full py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity mb-3"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            <a
              href={contactInfo.phoneHref}
              className="font-heading uppercase tracking-wide inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary w-full py-4 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone size={18} />
              Call {contactInfo.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
