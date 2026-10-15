// Mini products. All placeholders: set `href` to the checkout link (Lemon Squeezy,
// Gumroad, Stripe Payment Link) and `available: true` when one goes on sale.
export interface Product {
  title: string;
  body: string;
  format: string[];
  price: string;
  href: string;
  available: boolean;
  /** Small visual for the card: a palette slot (1-6). */
  c: number;
}

export const products: Product[] = [
  {
    title: "AI audit guideline",
    body: "The checklist I use in a one-week AI audit: what to inventory, what to measure, where the risk usually hides, and how to write the findings up.",
    format: ["PDF", "40 pages", "Checklist"],
    price: "€49",
    href: "",
    available: false,
    c: 1,
  },
  {
    title: "AI implementation template",
    body: "A ready project plan from use case to production: phases, roles, evaluation set-up, go-live criteria and a handover pack.",
    format: ["Notion", "Sheets", "Plan + docs"],
    price: "€79",
    href: "",
    available: false,
    c: 3,
  },
  {
    title: "Evaluation starter kit",
    body: "Templates for building a test set from your own examples and tracking quality, latency and cost per answer every week.",
    format: ["Sheets", "Python notebook"],
    price: "€29",
    href: "",
    available: false,
    c: 4,
  },
];
