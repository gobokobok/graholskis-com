// Landing page copy, v3 (11 Nov 2026): "Offer Structure & Landing Page", section 2.
// Copy is verbatim. Items that do not exist yet are flagged so the page shows them safely:
// the bank case is hidden until the client approves, links and prices left empty show "Coming soon".

export const meta = {
  title: "AI Implementation Workshops",
  description:
    "Practical workshops in which your team takes one AI use case from discovery to operations, using the tools you already have.",
};

export const hero = {
  eyebrow: "AI Implementation",
  headlineLead: "Take one AI use case",
  headlineAccent: "from idea to daily use.",
  sub: "In a practical workshop, your team builds a working AI solution on the tools you already have. We go through discovery, architecture, delivery and operations in one session.",
  primary: "Book a 30-minute call",
  secondary: "Do it yourself",
};

export const problem = {
  body: "In most cases, the model is not the problem. The problem is the work around it. Often the wrong use case is chosen, data and access rules come too late, the result is not measured, and nobody owns the solution after go-live.",
  /** Set as a title right after the body; it introduces the four phases below. */
  closing: "The workshop covers a real use case.",
};

export const workshop = {
  phases: [
    {
      name: "Discovery",
      text: "We choose the use case with the best value and the lowest risk, and agree on the KPIs before anything is built.",
      result: "a scored use case and agreed KPIs.",
    },
    {
      name: "Architecture",
      text: "We design the solution on the tools you already have. Data, access and approval rules are part of the design from the start.",
      result: "a solution design and a controls checklist.",
    },
    {
      name: "Delivery",
      text: "We build the smallest version that works, test it, and measure it against the KPIs.",
      result: "a working prototype with test results.",
    },
    {
      name: "Operations",
      text: "We decide who owns the solution, how it is monitored and how changes are approved.",
      result: "an ownership and operating model.",
    },
  ],
  facts: [
    { label: "Who", value: "data, IT and digital teams of 5 to 15 people" },
    { label: "Format", value: "on-site, about 4 hours" },
    { label: "Preparation", value: "I prepare a case for your industry and department in advance" },
    { label: "Tools", value: "the ones you already use, for example Microsoft 365, Azure or Claude" },
    { label: "Price", value: "from €2,000 per workshop" },
  ],
  button: "Book a call about a workshop",
};

export const howItWorks = {
  heading: "How it works",
  steps: [
    { name: "Intro call", text: "In 30 minutes, we discuss your team, your tools and your constraints." },
    { name: "Case selection", text: "We agree on one use case, and I prepare it for your tools and your data rules." },
    { name: "Workshop", text: "Your team builds the solution with me, one phase at a time." },
    { name: "Follow-up", text: "Your team keeps the materials, the templates and the method for the next use case." },
  ],
};

export interface WorkCard {
  title: string;
  text: string;
  /** Link target; empty shows no link yet. */
  href?: string;
  linkLabel?: string;
  /** Flow drawn on the card (from the card text); gate marks a human decision. */
  flow?: { label: string; c?: number; gate?: boolean }[];
  /** false hides the card (client approval pending). */
  show: boolean;
}

export const work = {
  heading: "Work I have done",
  intro: "The method comes from solutions I have built myself.",
  cards: [
    {
      title: "Knowledge base for a bank's Data Science team",
      text: "A Microsoft 365 solution with Copilot Studio, SharePoint and connections to GitHub and Confluence, built for the Risk department of a bank in Latvia. Currently in delivery.",
      show: false, // TODO: only after client approval; past tense after delivery
    },
    {
      title: "Content Factory",
      text: "My own video production platform. Specialised AI workers do the work, a person approves the key steps, and every result is traceable, including its cost. A 4-minute video now takes 20 to 30 minutes instead of up to a working day.",
      href: "/cases/content-factory",
      linkLabel: "Read the case",
      flow: [{ label: "Idea", c: 1 }, { label: "Script", c: 1 }, { label: "Storyboard", c: 1 }, { label: "Assets", c: 1 }, { label: "Render", c: 1 }],
      show: true,
    },
    {
      title: "ClauseWatch",
      text: "My own tool that checks internal policies against changes in law. The model prepares drafts, people make the decisions, and every decision is logged.",
      href: "", // TODO: page or link for ClauseWatch
      linkLabel: "Read more",
      // drawn from the card text: the model drafts, a person decides, the decision is logged
      flow: [{ label: "Law change", c: 1 }, { label: "Draft", c: 1 }, { label: "Decide", gate: true }, { label: "Log", c: 1 }],
      show: true,
    },
  ] as WorkCard[],
};

export type DiyAction = "featured" | "link" | "contact";

export interface DiyCard {
  label: string;
  /** Empty shows "Price TBC". */
  price: string;
  text: string;
  button: string;
  /** featured: highlighted card with a button to href (the capability matrix); link: href below (empty shows "Coming soon"); contact: opens the contact form. */
  action: DiyAction;
  href?: string;
}

export const diy = {
  heading: "Do it yourself",
  intro: "If you prefer to do it yourself, these materials will help, from the first assessment to running a solution.",
  cards: [
    {
      label: "Start here",
      price: "Free",
      text: "AI capability matrix. See where your organisation stands today and what the next step should be.",
      button: "Open the matrix",
      action: "featured",
      href: "/ai-capability-matrix",
    },
    {
      label: "AI Basics",
      price: "", // TODO: price
      text: "The main AI concepts and how to use Claude and Claude Code in daily work. Short and self-paced.",
      button: "Get the course",
      action: "link",
      href: "", // TODO: checkout link
    },
    {
      label: "Blueprints and templates",
      price: "", // TODO: "from €..."
      text: "Templates for each phase: use-case intake, reference architecture, controls checklist and AI asset catalogue.",
      button: "Browse templates",
      action: "link",
      href: "", // TODO: link
    },
    {
      label: "AIDLC starter kit",
      price: "Free, open source",
      text: "Take a feature from discovery to an engineering-ready handoff, in plain language and without touching Git. Review, approval, an audit trail and evaluation are handled for you. Works with Claude, Copilot, Cursor or no assistant at all.",
      button: "View on GitHub ↗",
      action: "link",
      href: "https://github.com/gobokobok/aidlc-kit",
    },
    {
      label: "AI Implementation online",
      price: "Coming later",
      text: "The full workshop method, phase by phase, on a standard case.",
      button: "Join the waiting list",
      action: "contact",
    },
  ] as DiyCard[],
};

export const faq = {
  heading: "Questions teams usually ask",
  items: [
    { q: "Which tools do you work with?", a: "The ones you already have, for example Microsoft 365, Azure or Claude. The method does not depend on one vendor." },
    { q: "Do we need to share our data?", a: "No. The workshop runs on synthetic or anonymised data. Real data is used later, inside your own environment and under your own rules." },
    { q: "Do we need IT or security approvals?", a: "The workshop is designed to run without extra permissions or infrastructure. We check this together on the intro call." },
    { q: "Who should attend?", a: "The people who will build and own the solution: data, IT and digital specialists, ideally with one person from the business side." },
    { q: "Can you adapt the workshop to our industry?", a: "Yes. Each workshop uses a case prepared for your industry and department." },
    { q: "What happens after the workshop?", a: "Your team has the method and the templates to continue on its own. If you need help with the next step, we can discuss it." },
  ],
};

export const about = {
  heading: "About me",
  paragraphs: [
    "I am Aleksandrs Graholskis. I have worked in enterprise architecture and IT transformation for more than 15 years. At Siemens Gamesa, I chaired the Architecture Review Board for a 25,000-person organisation and led programmes such as a €2.5M customer platform. After that, I ran my own consultancy for five years and worked with companies in logistics, healthcare and e-commerce.",
    "Today I build AI solutions myself and teach teams to do the same. I start with the simplest solution that works and add complexity only when it is needed.",
  ],
  /** Shown as tags after the text, followed by LinkedIn, YouTube and GitHub links. */
  facts: [] as string[],
};

export const contact = {
  heading: "Tell me about your use case",
  body: "Write a few lines about your team and the problem you want to solve. I will reply within one working day.", // TODO: keep the reply promise only if realistic
  button: "Send",
};
