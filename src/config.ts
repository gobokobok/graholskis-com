// ----------------------------------------------------------------------------
// One place for everything that is a placeholder or will change.
// Anything marked TODO needs a real value before launch.
// ----------------------------------------------------------------------------

// ---- TODO: placeholders -----------------------------------------------------

/** TODO: your calendar booking link (Cal.com, Calendly, Google). Empty = "Book a call" jumps to the contact form. */
export const calendarUrl = "";

/** TODO: confirm. Used only as the mailto fallback while the form key is empty. */
export const contactEmail = "alex@graholskis.com";

/** TODO: free Web3Forms access key (https://web3forms.com, enter your email, they send the key).
 *  The key is public by design. Empty = the forms open an email instead. */
export const web3formsKey = "";

/** TODO: confirm profile URLs. */
export const links = {
  linkedin: "https://www.linkedin.com/in/aleksandrs-graholskis/",
  github: "https://github.com/gobokobok",
  youtube: "https://www.youtube.com/@GraholskisAI", // empty = hidden
};

/** TODO: your portrait. Put the file in /public (for example /public/aleksandrs.webp) and set src to "/aleksandrs.webp".
 *  Empty src shows a grey placeholder frame. Recommended: 1440 x 1800 px (4:5). */
export const heroPhoto = { src: "", alt: "Aleksandrs Graholskis" };

/** TODO: base domain for live tools on subdomains. */
export const domain = "graholskis.com";

// ---- Site -------------------------------------------------------------------

export const site = {
  name: "Aleksandrs Graholskis",
  role: "AI Enablement Lead",
  tagline: "I help organisations move from AI experiments to governed, scaled adoption.",
};

/** Primary call to action. Goes to the calendar when set, otherwise to the contact form. */
export const bookHref = calendarUrl || "/#contact";
export const bookLabel = "Book a call";

// ---- Navigation -------------------------------------------------------------

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#labs", label: "Labs" },
  { href: "/#workshops", label: "Workshops" },
  { href: "/#resources", label: "Resources" },
  { href: "/#contact", label: "Contact" },
];

// ---- What I do --------------------------------------------------------------

export const services = [
  {
    title: "Build",
    body: "Working AI agents, workflows and web apps, built with Claude Code and taken to production. Not slides, running systems.",
  },
  {
    title: "Architect",
    body: "The central AI platform that every team goes through: cost control, agent access, data masking and an AI asset catalogue. One entry point instead of fifty unmanaged API keys.",
  },
  {
    title: "Enable",
    body: "Workshops and training on Claude, Claude Code and governed AI use. From the first agent to company-wide rules.",
  },
];

// ---- What I have built ------------------------------------------------------
// Add a card by adding an object. `caseHref` and `liveHref` are optional.
// `visual` picks the schematic on the card: "pipeline" (uses `flow`), "platform" or "person".

export interface WorkItem {
  title: string;
  summary: string;
  badge?: string;
  caseHref?: string;
  liveHref?: string;
  visual: "pipeline" | "platform" | "person";
  flow?: { label: string; c?: number }[];
}

export const workHeading = "What I have built";

export const work: WorkItem[] = [
  {
    title: "Content Factory",
    summary:
      "A multi-agent video production platform with 27 specialised workers, live in production. It cut a 4-minute video from up to a working day to 20 to 30 minutes.",
    caseHref: "/cases/content-factory",
    liveHref: `https://cf.${domain}`,
    visual: "pipeline",
    flow: [
      { label: "Idea", c: 1 },
      { label: "Script", c: 2 },
      { label: "Storyboard", c: 3 },
      { label: "Assets", c: 4 },
      { label: "Render", c: 5 },
    ],
  },
  {
    title: "Reference AI Platform",
    summary: "Gateway with cost tracking, agent access control and PII masking.",
    badge: "In progress",
    visual: "platform",
  },
  {
    title: "Enterprise IAM, employee identity onboarding",
    summary:
      "Identity lifecycle and governance model for a 25,000-person organisation. The same principle now applies to AI agents: nothing runs without an accountable owner.",
    caseHref: "/cases/enterprise-iam",
    visual: "person",
  },
];

// ---- Labs -------------------------------------------------------------------
// One tile per live tool on a subdomain. Add a tile by adding a line.
// `video`: a YouTube video id for the 60-second walkthrough. Empty shows a placeholder slot.
// Leave `video` out to hide the slot.

export interface LabItem {
  name: string;
  line: string;
  /** Link target. Empty shows a "Coming soon" chip instead of a link. */
  href: string;
  /** Link text. Default: "Open the tool". */
  cta?: string;
  video?: string;
}

export const labs: LabItem[] = [
  {
    name: "Content Factory",
    line: "Live video production platform with a human approving each step.",
    href: `https://cf.${domain}`,
    video: "", // TODO: YouTube video id of the 60-second walkthrough
  },
  {
    name: "ADLM via Claude Code",
    line: "A walkthrough of my approach to delivering solutions with Claude Code.",
    href: "https://www.youtube.com/watch?v=NL1U9x3Tgw0",
    cta: "Watch the video",
    video: "NL1U9x3Tgw0",
  },
];

// ---- Workshops --------------------------------------------------------------
// Each topic has its own page at /workshops/<slug>. Put longer content in `details`
// (title + body pairs); they appear on the detail page once filled.

export interface WorkshopTopic {
  slug: string;
  title: string;
  summary: string;
  details: { title: string; body: string }[];
}

export const workshops = {
  topics: [
    {
      slug: "building-with-claude-code",
      title: "Building with Claude Code",
      summary:
        "A hands-on session where your team builds a working agent or app from a real use case, and learns the workflow to keep going on their own.",
      details: [], // TODO: audience, agenda, prerequisites, outcomes
    },
    {
      slug: "claude-for-teams",
      title: "Claude for teams: Cowork, Code and agents",
      summary:
        "A practical tour of how teams use Claude in daily work, from Cowork and Claude Code to agents, and where each one fits.",
      details: [],
    },
    {
      slug: "governing-ai-use",
      title: "Governing AI use across the organisation",
      summary:
        "How to set rules people can follow: which data may go where, who owns which agent, and how costs and access are controlled.",
      details: [],
    },
  ] as WorkshopTopic[],
  formats: "Half-day or full-day, on-site or remote.",
  /** Hidden until filled: { quote: "...", by: "Name, Role, Company" } */
  testimonial: null as { quote: string; by: string } | null,
};

// ---- Resources --------------------------------------------------------------
// `kind: "free"` shows the email capture. Paid items use `checkoutUrl` (Lemon Squeezy overlay link).
// Empty `checkoutUrl` shows a disabled "Coming soon" button. Empty `price` shows "Price TBC".

export interface ResourceItem {
  title: string;
  line: string;
  kind: "free" | "paid";
  price: string;
  checkoutUrl: string;
}

export const resources: ResourceItem[] = [
  {
    title: "AI Adoption Readiness Checklist",
    line: "A short checklist to see how ready your organisation is for governed AI use.",
    kind: "free",
    price: "Free",
    checkoutUrl: "",
  },
  {
    title: "AI Platform Blueprint",
    line: "The reference design for a central AI platform: gateway, cost control, access and data masking.",
    kind: "paid",
    price: "", // TODO
    checkoutUrl: "", // TODO: Lemon Squeezy checkout link
  },
  {
    title: "Build your first agent with Claude Code",
    line: "Online training: from an empty folder to a working agent, built with Claude Code.",
    kind: "paid",
    price: "", // TODO
    checkoutUrl: "", // TODO: Lemon Squeezy checkout link
  },
];

// ---- Background -------------------------------------------------------------

export const background =
  "Before AI, I spent four years as Enterprise Architect at Siemens Gamesa, chaired the Architecture Review Board and led programmes including a €2.5M customer platform. I also ran my own consultancy across logistics, healthcare and e-commerce. TOGAF certified, MSc Economics.";

// ---- Earlier work -----------------------------------------------------------
// Entries without `href` show "Case to be added".

export interface EarlierItem {
  title: string;
  summary: string;
  href?: string;
}

export const earlierWork: EarlierItem[] = [
  {
    title: "Equipment tracking with IoT devices",
    summary: "From a 20-line requirements list to an RFID business case with over €500K in identified annual savings.",
    href: "/cases/industrial-iot",
  },
  { title: "DXP", summary: "" }, // TODO: one-line summary and case page,
  { title: "MyChildApp", summary: "" }, // TODO: one-line summary and case page,
  { title: "E-commerce", summary: "" }, // TODO: one-line summary and case page,
];
