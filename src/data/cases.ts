// Case studies. Every page follows the same six parts:
// header (title, summary, meta) → request → challenges → solution (+ tech stack) → outcome → lessons.

export interface CaseLink {
  href: string; // empty = not published yet, shown as "Coming soon"
  note: string;
}

export interface Case {
  slug: string;
  /** Short name for the landing-page card. */
  cardTitle: string;
  /** Page title (H1). */
  title: string;
  /** One-line summary under the title, also used on the card. */
  summary: string;
  meta: { k: string; v: string }[];
  /** Keywords shown as chips on the card. */
  chips: string[];
  request: string[];
  challenges: string[];
  solution: {
    intro: string[];
    /** Named parts of the solution, rendered as cards. */
    parts?: { title: string; body: string }[];
    /** Paragraphs after the parts. */
    outro?: string[];
    stack: string;
  };
  outcome: string[];
  /** Optional headline figures shown above the outcome text. */
  figures?: { metric: string; label: string }[];
  lessons: string[];
  links?: {
    product?: CaseLink; // live product, usually a subdomain of graholskis.com
    code?: CaseLink; // GitHub repository with the code
    project?: CaseLink; // GitHub repository with the project description only
    video?: CaseLink; // YouTube walkthrough
  };
  /** Content Factory only: screens shown in "Delivered solution". */
  screens?: { src: string; caption: string }[];
  /** True while the text is a draft waiting for the real content. */
  placeholder: boolean;
  /** Diagram on the landing-page card (and inside the solution for Content Factory). */
  visual:
    | { kind: "bars"; name: string; values: number[]; labels: string[] }
    | { kind: "flow"; steps: { label: string; sub?: string; c?: number; gate?: boolean }[]; loop?: string };
}

export const cases: Case[] = [
  {
    slug: "industrial-iot",
    cardTitle: "Industrial IoT, road safety equipment",
    title: "Connected asset tracking for a road safety equipment provider",
    summary:
      "From a 20-line requirements list to an RFID business case with over €500K in identified annual savings.",
    meta: [
      { k: "Role", v: "Product Owner and Enterprise Architect, through SitaEst APs" },
      { k: "Client", v: "Road safety equipment provider, Scandinavia and Germany" },
      { k: "Scope", v: "~30 depots, thousands of assets" },
      { k: "Phase", v: "Discovery to business case, prototype and roadmap" },
    ],
    chips: ["RFID", "Business case", "Figma"],
    request: [
      "The client sent an Excel file with about 20 high-level requirements. Their equipment management system covered orders, planning and depot allocation, but visibility stopped when equipment left the depot. They could not see what was delivered, returned, damaged or missing. They asked me to extend the system to close that gap.",
    ],
    challenges: [
      "The requirements described a solution. They did not describe the problem.",
      "Inventory was counted by hand twice a year and typed into Excel. This produced a discrepancy of around 7% and consumed roughly 400 person-days per year.",
      "After shipment, the client often could not prove what had been delivered versus what came back. They could not bill for missing or damaged equipment and absorbed the loss.",
      "The business case had to hold up with leadership, so hardware cost and feasibility could not rest on vendor assumptions.",
    ],
    solution: {
      intro: [
        "I did not start from the requirements list. A first workshop with IT and the business process manager, about 90 minutes, showed that the real problem was a structural lack of asset visibility. I reworked the 20 requirements into a discovery backlog covering business problems, user needs, edge cases and operational scenarios.",
        "The solution is an RFID-based asset management platform: passive tags on individual units, RFID gates at depot entrances and exits, and handheld readers for warehouse and field staff. The unit economics are simple. A piece of equipment is worth around €20 or more, and a tag costs about €0.10.",
        "I redesigned the processes end to end: dispatch through the gate, delivery confirmation on site, damage and loss reporting during use, and automatic updates on return. Each asset also gets a digital history (activation, deployments, maintenance), which supports replacement planning based on age and utilisation.",
        "Before finalising the business case, I sourced an RFID supplier in China, ordered samples and tested the use case with the technical team. I built clickable Figma prototypes for the warehouse and field mobile app and for the back-office web app, based on defined personas and user journeys.",
        "I presented the business case to business management, IT leadership and operations. It included a phased roadmap: discovery and design (2-3 months), a pilot at one depot (3-6 months), and scale-out across all depots (12-18 months).",
      ],
      stack:
        "Passive RFID tags, RFID gates, handheld readers, integration with the client’s existing equipment management system, Figma for prototypes.",
    },
    figures: [
      { metric: "€500K+", label: "annual savings identified" },
      { metric: "400", label: "person-days of manual counting per year" },
      { metric: "~7%", label: "inventory discrepancy before" },
    ],
    outcome: [
      "The business case identified over €500K in annual savings. The sources are the recovered 400 person-days of manual counting, a lower inventory discrepancy and safety-stock buffer, and revenue recovered from equipment that could not be billed. The hardware assumptions were tested on physical samples before the case went to leadership. My engagement covered discovery through roadmap and prototype.",
    ],
    lessons: [
      "A requirements list often describes a solution someone has already chosen. One structured workshop was enough to show it did not match the problem.",
      "Quantify the problem in person-days, percentages and unit costs. That is what leadership can act on.",
      "Test the hardware before the business case, not after.",
      "Propose a pilot at one site before a full rollout. It reduces risk and makes approval easier.",
    ],
    placeholder: false,
    visual: {
      kind: "flow",
      steps: [
        { label: "Depot gate", c: 1 },
        { label: "On site", c: 2 },
        { label: "In use", c: 3 },
        { label: "Return gate", c: 4 },
      ],
    },
  },
  {
    slug: "enterprise-iam",
    cardTitle: "Enterprise IAM at Siemens Gamesa",
    title: "Identity and access management after the Siemens–Gamesa merger",
    summary:
      "A governed identity lifecycle for employees and external users across a 25,000-person organisation.",
    meta: [
      { k: "Role", v: "Enterprise Architect, owner of the IAM capability" },
      { k: "Organisation", v: "Siemens Gamesa Renewable Energy" },
      { k: "Scope", v: "Global, employees and external workforce" },
      { k: "Duration", v: "Multi-year, phased" },
      { k: "Partners", v: "Deloitte, Infosys" },
    ],
    chips: ["Workday", "Azure AD", "ServiceNow"],
    request: [
      "After the 2017 merger, identity management was left open by the IT rationalisation programme. The CIO raised it as a risk: there was no consistent governance, little transparency, and no clear ownership of identities. I was asked to define the target architecture and the roadmap to reach it.",
    ],
    challenges: [
      "Regional SAP HR systems ran in parallel, with no single source of identity.",
      "On-premise Active Directory, Azure AD, Microsoft Identity Manager and ServiceNow were all in use. The result was duplicate identities, inconsistent data and manual provisioning.",
      "External users (consultants, contractors, students, technicians at wind farm sites) had no accountable owner.",
      "The Workday rollout was a phased regional migration over several years. Old and new systems had to run side by side.",
      "The work needed alignment between the CIO, Infrastructure, Cybersecurity and Enterprise Architecture. None of them reported to me.",
    ],
    solution: {
      intro: [
        "I treated this as a product problem before a technical one. I started with the current state and identified four user groups with different needs: employees, external users, IT administrators and HR. Employees and external users needed different lifecycles, not one generic process.",
      ],
      parts: [
        {
          title: "Internal employees",
          body: "Workday is the source of truth and generates the unique identifier. Microsoft Identity Manager synchronises the identity into Azure AD, and access follows organisational rules. This is a standard joiner-mover-leaver lifecycle.",
        },
        {
          title: "External users",
          body: "An internal employee acts as sponsor and requests the identity in ServiceNow. After approval, the identity is created in Azure AD through Microsoft Identity Manager, with the identifier and ownership recorded.",
        },
        {
          title: "Governance",
          body: "Every identity has a named owner and sponsor. If a sponsor leaves the company, responsibility moves automatically to their management chain, so no external account exists without an accountable person. A golden-record matching approach checks whether a person already exists before a new identity is created.",
        },
        {
          title: "Transition",
          body: "Legacy SAP HR systems stayed synchronised with Azure AD during the migration. Their dependencies were decommissioned region by region as each completed the move to Workday.",
        },
      ],
      outro: [
        "I ran architecture reviews and weekly governance meetings on progress, budget, risks and decisions. I prepared the initial budget (consultants, internal resources, licences, technology) and handed it to the project manager for delivery. I was involved in selecting and onboarding Deloitte and governed Infosys’s ServiceNow development through architecture review.",
      ],
      stack:
        "Workday, legacy SAP HR, on-premise Active Directory, Azure AD (Microsoft Entra), Microsoft Identity Manager, ServiceNow.",
    },
    outcome: [
      "The organisation moved from a fragmented, manual landscape to a centralised model across Workday, ServiceNow and Azure AD. The programme tracked these measures: provisioning cycle time, external request turnaround, duplicate identities, ownership coverage (target: 100% of identities with a responsible owner), dormant identity cleanup, and manual provisioning effort.",
    ],
    lessons: [
      "Different identity types need different lifecycles. A single process either blocks employees or leaves external users unmanaged.",
      "Accountability has to be built into the system. A policy alone does not survive people changing roles or leaving.",
      "In a phased migration, the transition design is as important as the target state.",
      "A job title does not limit the scope of the work. Discovery, prioritisation and roadmap sequencing were the same product skills, applied to an internal capability.",
    ],
    placeholder: false,
    visual: {
      kind: "flow",
      steps: [
        { label: "Workday", c: 1 },
        { label: "Identity Manager", c: 2 },
        { label: "Azure AD", c: 3 },
        { label: "Access", c: 4 },
      ],
    },
  },
  {
    slug: "content-factory",
    cardTitle: "Content Factory",
    title: "Content Factory: an AI video pipeline run daily in production",
    summary:
      "A niche in, a finished video out, with a human approval gate at each editorial step.",
    meta: [
      { k: "Role", v: "Builder" },
      { k: "Type", v: "Own product" },
      { k: "Status", v: "Live, friends beta" },
      { k: "Duration", v: "Ongoing" },
    ],
    chips: ["FastAPI", "Claude", "Postgres"],
    request: [
      "Draft, waiting for your text. Make a finished short video from a niche in under an hour, with a person deciding at every editorial step.",
    ],
    challenges: [
      "Scenes have to cut on the exact words of the voiceover, not on guesses.",
      "Every paid call is estimated and reserved before it runs, and refunded if it fails.",
      "Each step writes a versioned artifact, so any step can be inspected and rerun.",
      "Accounts, credits, limits and moderation had to exist before other people could use it.",
    ],
    solution: {
      intro: [
        "Draft, waiting for your text. A pipeline of six steps, each producing a stored, versioned artifact that the operator reviews before the next step unlocks.",
      ],
      stack: "Python, FastAPI, Claude, Gemini TTS, Deepgram, Postgres, Cloudflare R2, Railway.",
    },
    outcome: ["Draft, waiting for your text."],
    lessons: ["Draft, waiting for your text."],
    links: {
      product: { href: "https://cf.graholskis.com", note: "cf.graholskis.com, the Content Factory studio" },
      code: { href: "https://github.com/gobokobok/content-factory-saas", note: "Full source, FastAPI and vanilla JS" },
      video: { href: "", note: "How I built it, step by step" },
    },
    screens: [
      { src: "/cases/content-factory/storyboard.webp", caption: "Storyboard: scene by scene, cut on word timestamps" },
      { src: "/cases/content-factory/script.webp", caption: "Script: paste or generate, with a live word count" },
      { src: "/cases/content-factory/video.webp", caption: "Video: the render with captions and music" },
    ],
    placeholder: true,
    visual: {
      kind: "flow",
      steps: [
        { label: "Niche", sub: "topic discovery", c: 1 },
        { label: "Script", sub: "fact-checked", c: 2 },
        { label: "Voice", sub: "TTS + timestamps", c: 3 },
        { label: "Storyboard", sub: "scene by scene", c: 4 },
        { label: "Footage", sub: "stock or generated", c: 5 },
        { label: "Render", sub: "captions, music", c: 6 },
      ],
      loop: "Approval gate at each editorial step",
    },
  },
];
