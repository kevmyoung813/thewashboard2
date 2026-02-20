export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  phoneHref: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    formatted: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  hours: string;
  social: {
    facebook: string;
  };
}

export interface ServiceOffering {
  icon: string;
  title: string;
  description: string;
}

export interface SelfServiceFeature {
  icon: string;
  text: string;
}

export interface PricingItem {
  item: string;
  price: string;
}

export interface WashFoldPricing {
  minimum: string;
  items: PricingItem[];
  detergentOptions: string;
  additionalOptions: string;
}

export interface SelfServicePricing {
  items: PricingItem[];
  note: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RuleSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HowToServiceBox {
  icon: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export interface HowItWorksStep {
  icon: string;
  label: string;
}
