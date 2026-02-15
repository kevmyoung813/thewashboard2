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
  "Load your clothes into the washer. Avoid overloading — leave room for items to move freely.",
  "Close the washer door securely.",
  "Select your wash cycle on the machine display.",
  "Tap your loaded laundry card on the card reader to start.",
  "Wait for the cycle to complete, then promptly remove your items.",
];

export const washerTip =
  "Use only the recommended amount of detergent. Overusing detergent can affect wash quality and machine performance.";

export const dryerSteps: string[] = [
  "Transfer your washed clothes into the dryer. Shake out items to help reduce drying time.",
  "Close the dryer door securely.",
  "Select your preferred heat setting on the display.",
  "Tap your loaded laundry card on the card reader to start.",
  "Remove your clothes promptly when the cycle finishes to reduce wrinkles.",
];

export const dryerTip =
  "Avoid overloading the dryer. Proper loading allows air to circulate and dry your clothes more efficiently.";

export const laundryCardSteps: string[] = [
  "Pick up a reloadable laundry card at The Washboard, available at the front counter.",
  "Add value to your card using the card loading station.",
  "Take your card to any available washer or dryer.",
  "Tap your card on the machine's card reader to start your cycle.",
  "Reload your card anytime you need more value.",
];

export const laundryCardTip =
  "Keep your laundry card safe — it holds your balance and can be reloaded as many times as you need. Perfect for Murray State students and Calloway County families who visit regularly.";

export const faqs: FAQ[] = [
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
    a: "Items that may damage machines — including certain dyes or heavily soiled materials — should not be placed in washers or dryers.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  { icon: "CreditCard", label: "Load your laundry card" },
  { icon: "MonitorSmartphone", label: "Choose your machine" },
  { icon: "Fingerprint", label: "Tap your card to start" },
  { icon: "Armchair", label: "Relax while your laundry gets done" },
];
