import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { navLinks } from "@/data/navigation";
import { contactInfo } from "@/data/contact";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
            renderLink(link, "text-sm font-medium text-foreground hover:text-primary transition-colors")
          )}
          <a
            href={contactInfo.phoneHref}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href={contactInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) =>
              renderLink(link, "text-base font-medium text-foreground hover:text-primary py-2")
            )}
            <a
              href={contactInfo.phoneHref}
              className="text-base font-medium text-foreground hover:text-primary py-2"
            >
              Contact
            </a>
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground mt-2"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
