import type {
  ServiceOffering,
  SelfServiceFeature,
  SelfServicePricing,
  WashFoldPricing,
} from "./types";

export const serviceOfferings: ServiceOffering[] = [
  {
    icon: "WashingMachine",
    title: "Self-Service Laundry",
    description:
      "Modern washers and dryers that make quick work of your laundry.",
  },
  {
    icon: "HandHelping",
    title: "Wash & Fold Service",
    description:
      "Drop off your laundry and let us handle the washing, drying, and folding for you.",
  },
  {
    icon: "Bed",
    title: "Comforters & Specialty Items",
    description:
      "Large bedding and select specialty items handled with care.",
  },
];

export const selfServiceFeatures: SelfServiceFeature[] = [
  { icon: "Maximize", text: "Multiple washer and dryer sizes" },
  { icon: "Sparkles", text: "Clean, well-maintained equipment" },
  { icon: "Maximize", text: "Spacious folding tables" },
  { icon: "Clock", text: "Open daily for your convenience" },
];

export const selfServicePricing: SelfServicePricing = {
  items: [
    { item: "Small Washer", price: "$4.50" },
    { item: "Medium Washer", price: "$6.00" },
    { item: "Large Washer", price: "$7.50" },
    { item: "Extra Large Washer", price: "$9.50" },
    { item: "Small Dryer (per 7 min)", price: "$0.25" },
    { item: "Large Dryer (per 10 min)", price: "$1.00" },
  ],
  note: "Prices are subject to change.",
};

export const washFoldPricing: WashFoldPricing = {
  minimum: "$15 minimum on all Wash & Fold orders.",
  items: [
    { item: "Clothing", price: "$1.50 per pound" },
    { item: "Twin/Full Comforter", price: "$15 each" },
    { item: "Queen Comforter", price: "$20 each" },
    { item: "King Comforter", price: "$25 each" },
    { item: "Small Pillow", price: "$5 each" },
    { item: "Large Pillow", price: "$10 each" },
  ],
  detergentOptions:
    "Detergent options available: Tide, Gain, and All Free & Clear.",
  additionalOptions:
    "Optional dryer sheet and bleach available upon request.",
};

export const experienceFeatures: string[] = [
  "Clean, modern machines that are easy to use",
  "Reloadable laundry card system — no coins needed",
  "Comfortable, welcoming environment",
  "Friendly support when you need it",
  "Wash & Fold service for busy days",
];
