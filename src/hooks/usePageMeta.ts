import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://washboardmurray.com";

const DEFAULTS = {
  title: "The Washboard - Laundromat in Murray, KY | Wash & Fold Service",
  description:
    "Clean, modern laundromat serving Murray, KY and Murray State. Self-service laundry, wash & fold, and comfortable space. Open every day.",
  ogImage: `${BASE_URL}/og-image.jpg`,
  ogType: "website",
};

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(
    `meta[${attr}="${key}"]`
  ) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

export function usePageMeta(options: PageMetaOptions) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = options.canonical || `${BASE_URL}${pathname}`;

    // Title
    document.title = options.title;

    // Meta description
    setMeta("name", "description", options.description);

    // Canonical
    const canonicalEl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonicalEl) {
      canonicalEl.href = canonicalUrl;
    }

    // Open Graph
    setMeta("property", "og:title", options.ogTitle || options.title);
    setMeta(
      "property",
      "og:description",
      options.ogDescription || options.description
    );
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", options.ogImage || DEFAULTS.ogImage);
    setMeta("property", "og:type", options.ogType || DEFAULTS.ogType);

    // Twitter
    setMeta("name", "twitter:title", options.ogTitle || options.title);
    setMeta(
      "name",
      "twitter:description",
      options.ogDescription || options.description
    );
    setMeta("name", "twitter:image", options.ogImage || DEFAULTS.ogImage);

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = DEFAULTS.title;
      setMeta("name", "description", DEFAULTS.description);
      const canon = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (canon) canon.href = BASE_URL;
      setMeta("property", "og:title", DEFAULTS.title);
      setMeta("property", "og:description", DEFAULTS.description);
      setMeta("property", "og:url", BASE_URL);
      setMeta("property", "og:image", DEFAULTS.ogImage);
      setMeta("name", "twitter:title", DEFAULTS.title);
      setMeta("name", "twitter:description", DEFAULTS.description);
      setMeta("name", "twitter:image", DEFAULTS.ogImage);
    };
  }, [options.title, options.description, options.canonical, options.ogTitle, options.ogDescription, options.ogImage, options.ogType, pathname]);
}
