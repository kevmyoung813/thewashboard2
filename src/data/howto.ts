import type { FAQ, HowToServiceBox, HowItWorksStep } from "./types";

export const howToServiceBoxes: HowToServiceBox[] = [
  {
    icon: "WashingMachine",
    title: "How to Use the Washers",
    description:
      "Step-by-step instructions for starting a wash cycle using our laundry card system.",
    button: "View Washer Instructions",
    link: "/how-to/washers",
  },
  {
    icon: "Wind",
    title: "How to Use the Dryers",
    description:
      "Learn how to load, start, and get the best results from our modern dryers.",
    button: "View Dryer Instructions",
    link: "/how-to/dryers",
  },
  {
    icon: "CreditCard",
    title: "How to Use the Laundry Card System",
    description:
      "Instructions for loading value and starting machines with our reloadable laundry card.",
    button: "View Card Instructions",
    link: "/how-to/laundry-card",
  },
];

export const washerSteps: string[] = [
  "Load your clothes into the washer. Avoid overloading. Leave room for items to move freely.",
  "Close the washer door securely.",
  "Select your wash cycle on the machine display.",
  "Place your laundry card on the ledge above the card reader's green screen to start.",
  "Wait for the cycle to complete, then promptly remove your items.",
];

export const washerTip =
  "Use only the recommended amount of detergent. Overusing detergent can affect wash quality and machine performance.";

export const dryerSteps: string[] = [
  "Transfer your washed clothes into the dryer. Shake out items to help reduce drying time.",
  "Close the dryer door securely.",
  "Select your preferred heat setting on the display.",
  "Place your laundry card on the ledge above the card reader's green screen to start.",
  "Remove your clothes promptly when the cycle finishes to reduce wrinkles.",
];

export const dryerTip =
  "Avoid overloading the dryer. Proper loading allows air to circulate and dry your clothes more efficiently.";

export const laundryCardSteps: string[] = [
  "Purchase a reloadable laundry card at one of our two payment kiosks on the back wall. Include your phone number so we can replace it if lost.",
  "Take your card to any available washer or dryer.",
  "Place your card on the ledge above the reader (it doesn't swipe or insert) to start the cycle.",
  "Reload your card at the same kiosks any time.",
];

export const laundryCardTip =
  "Keep your laundry card safe: it holds your balance and can be reloaded as many times as you need. Perfect for Murray State students and Calloway County families who visit regularly.";

export const visitingFaqs: FAQ[] = [
  {
    q: "What are your hours?",
    a: "We're open every day from 6:00 AM to 11:00 PM. An attendant is on-site from 8:00 AM to 5:00 PM to help with any questions.",
  },
  {
    q: "Do you accept quarters or just laundry cards?",
    a: "We use a reloadable laundry card system, so no quarters needed. You can reload your card with cash (minimum $1) or credit/debit card (minimum $10) at one of our two payment kiosks on the back wall.",
  },
  {
    q: "How much does it cost?",
    a: "Prices vary by washer size. A typical load costs $3.50 to $7.50 to wash and dry. Our attendants can help you choose the right size machine for your load.",
  },
  {
    q: "Can I stay while my laundry is washing?",
    a: "Yes. We have comfortable seating, free WiFi, and a clean, bright space to relax while you wait.",
  },
  {
    q: "What size loads can your washers handle?",
    a: "We have multiple washer sizes, from standard loads up to extra-large machines for comforters, blankets, and bulky bedding.",
  },
  {
    q: "Do you offer Wash & Fold service?",
    a: "Yes. Drop off your laundry during attendant hours (8:00 AM to 5:00 PM) and we'll wash, dry, and fold it for you. Ask our attendant about pricing.",
  },
  {
    q: "When is the best time to visit?",
    a: "Weekday mornings and early afternoons (roughly 9:00 AM to 3:00 PM) tend to be quieter. Weekends and evenings are our busiest times.",
  },
  {
    q: "Is there WiFi available?",
    a: "Yes. We offer free WiFi for all customers.",
  },
];

export const usageFaqs: FAQ[] = [
  {
    q: "Do I need coins to use the machines?",
    a: "No. The Washboard uses a reloadable laundry card system instead of coins.",
  },
  {
    q: "How much detergent should I use?",
    a: "Use only the recommended amount. Overusing detergent can affect machine performance and wash quality.",
  },
  {
    q: "Can I leave my laundry unattended?",
    a: "Please monitor your laundry. Unattended items may be removed after cycles are complete to allow others to use machines.",
  },
  {
    q: "What if I overload a washer?",
    a: "Avoid overloading machines. Proper loading ensures better cleaning results and helps protect the equipment.",
  },
  {
    q: "Are children allowed?",
    a: "Children must be supervised at all times for safety.",
  },
  {
    q: "What items are not allowed in machines?",
    a: "Items that may damage machines, including certain dyes or heavily soiled materials, should not be placed in washers or dryers.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  { icon: "CreditCard", label: "Load your laundry card" },
  { icon: "MonitorSmartphone", label: "Choose your machine" },
  { icon: "ArrowDownToLine", label: "Place your card on the reader" },
  { icon: "Armchair", label: "Relax while your laundry gets done" },
];
