// Case content is placeholder (placeholder: true shows a chip on the card and page).
// Replace each field with the real story; set placeholder to false when done.

export interface CaseLink {
  href: string; // empty = not published yet, shown as "Coming soon"
  note: string;
}

export interface Case {
  slug: string;
  title: string;
  summary: string;
  client: string;
  role: string;
  duration: string;
  status: string;
  /** What the customer asked for, in their words. */
  request: string;
  challenges: { title: string; body: string }[];
  stack: { layer: string; items: string[] }[];
  solution: { title: string; body: string }[];
  timeline: { unit: "W" | "M"; length: number; phases: { label: string; from: number; to: number; note: string; c: number }[] };
  results: { metric: string; label: string }[];
  links: {
    product?: CaseLink; // live product, usually a subdomain of graholskis.com
    code?: CaseLink; // GitHub repository with the code
    project?: CaseLink; // GitHub repository with the project description only
    video?: CaseLink; // YouTube walkthrough
  };
  placeholder: boolean;
  /** Exhibit shown on the card and the case page. Illustrative until replaced. */
  visual:
    | { kind: "bars"; name: string; values: number[]; labels: string[] }
    | { kind: "flow"; steps: { label: string; sub?: string; c?: number; gate?: boolean }[]; loop?: string };
}

export const cases: Case[] = [
  {
    slug: "production-ai-assistants",
    title: "Six AI assistants in production across procurement, HR and analytics",
    summary:
      "From scattered pilots to assistants that staff use daily, with retrieval, evaluation and governance built in.",
    client: "Enterprise, 25K+ employees",
    role: "AI Implementation Lead",
    duration: "9 months",
    status: "In production",
    request:
      "We have a dozen AI pilots and none of them is in daily use. Get the useful ones into production and stop the rest.",
    challenges: [
      { title: "No owners", body: "Each pilot belonged to an enthusiast, not a team. Nobody was accountable after the demo." },
      { title: "No evaluation", body: "Quality was judged by demos. There was no test set and no way to compare versions." },
      { title: "Invisible cost", body: "Usage and spend grew month on month with nobody watching either." },
      { title: "Strict permissions", body: "HR and procurement data could not leak between teams or into prompts." },
    ],
    stack: [
      { layer: "Models", items: ["Claude", "Azure OpenAI"] },
      { layer: "Retrieval", items: ["pgvector", "Hybrid search"] },
      { layer: "Platform", items: ["Azure", "Postgres"] },
      { layer: "Operations", items: ["Eval harness", "Cost dashboards"] },
    ],
    solution: [
      { title: "One retrieval layer", body: "A shared search service with document-level permissions that every assistant reuses." },
      { title: "An evaluation harness", body: "Test sets built from real questions, run on every change, with a pass bar before release." },
      { title: "Six assistants shipped", body: "Taken from pilot to production one at a time, each with a named owner and a cost limit." },
      { title: "Light governance", body: "Review gates, an incident path and a monthly cost review, kept to one page." },
    ],
    timeline: {
      unit: "M",
      length: 9,
      phases: [
        { label: "Audit", from: 1, to: 1, note: "12 pilots reviewed", c: 1 },
        { label: "Platform", from: 2, to: 3, note: "retrieval + eval", c: 2 },
        { label: "Assistants", from: 3, to: 8, note: "one every 4–6 weeks", c: 3 },
        { label: "Handover", from: 8, to: 9, note: "owners, runbooks", c: 4 },
      ],
    },
    results: [
      { metric: "6", label: "assistants in daily use" },
      { metric: "—", label: "hours saved per month (to add)" },
      { metric: "—", label: "cost per answer (to add)" },
    ],
    links: {
      project: { href: "", note: "Architecture and lessons learned, no client code" },
      video: { href: "", note: "How the evaluation harness works" },
    },
    placeholder: true,
    visual: {
      kind: "bars",
      name: "Assistants in production",
      values: [1, 2, 4, 6],
      labels: ["Q1", "Q2", "Q3", "Q4"],
    },
  },
  {
    slug: "agentic-procurement",
    title: "Agentic workflows for procurement and operations",
    summary:
      "Deciding where an agent earns its keep, then building it with human approval at each costly step.",
    client: "Mid-size manufacturer",
    role: "AI Builder",
    duration: "4 months",
    status: "Pilot to rollout",
    request:
      "Our buyers spend days chasing suppliers. Can an agent do the chasing without ever sending something we would regret?",
    challenges: [
      { title: "Exceptions everywhere", body: "Earlier rule-based automation broke on every unusual order." },
      { title: "Trust", body: "Nothing could reach a supplier without a buyer approving it first." },
      { title: "Legacy ERP", body: "Order data sat in an ERP with a limited API and nightly exports." },
      { title: "Audit trail", body: "Every action had to be explainable to finance after the fact." },
    ],
    stack: [
      { layer: "Models", items: ["Claude", "Tool use"] },
      { layer: "Orchestration", items: ["Python", "n8n"] },
      { layer: "Data", items: ["ERP API", "Postgres"] },
      { layer: "Operations", items: ["Tracing", "Review queue"] },
    ],
    solution: [
      { title: "Agent or rule?", body: "A short design canvas to decide which steps need an agent and which should stay simple rules." },
      { title: "Drafting agent", body: "Drafts follow-ups and document checks, then waits for the buyer's approval." },
      { title: "Approval in the inbox", body: "Buyers approve or edit in the tools they already use; nothing is sent automatically." },
      { title: "Tracing", body: "Every step logged with inputs and outputs, reviewable by finance." },
    ],
    timeline: {
      unit: "W",
      length: 16,
      phases: [
        { label: "Discovery", from: 1, to: 2, note: "map the work", c: 1 },
        { label: "Prototype", from: 3, to: 6, note: "on real orders", c: 2 },
        { label: "Pilot", from: 7, to: 12, note: "3 buyers", c: 3 },
        { label: "Rollout", from: 13, to: 16, note: "whole team", c: 4 },
      ],
    },
    results: [
      { metric: "—", label: "hours returned to buyers weekly (to add)" },
      { metric: "—", label: "share of drafts sent unedited (to add)" },
      { metric: "0", label: "messages sent without approval" },
    ],
    links: {
      code: { href: "", note: "Agent and approval flow, anonymised" },
      video: { href: "", note: "Walkthrough of the approval loop" },
    },
    placeholder: true,
    visual: {
      kind: "flow",
      steps: [
        { label: "Request", sub: "ERP event", c: 1 },
        { label: "Agent drafts", sub: "follow-up, checks", c: 4 },
        { label: "Buyer approves", sub: "before anything is sent", gate: true },
        { label: "Send & track", sub: "supplier portal", c: 3 },
      ],
      loop: "Every action traced and reviewable",
    },
  },
  {
    slug: "content-factory",
    title: "Content Factory: an AI video pipeline run daily in production",
    summary:
      "A niche in, a finished video out: script, voiceover, storyboard, footage and render, with a human approval gate at each editorial step.",
    client: "Own product",
    role: "Builder",
    duration: "Ongoing",
    status: "Live, friends beta",
    request:
      "Make a finished short video from a niche in under an hour, with a person deciding at every editorial step.",
    challenges: [
      { title: "Timing", body: "Scenes have to cut on the exact words of the voiceover, not on guesses." },
      { title: "Cost control", body: "Every paid call is estimated and reserved before it runs, and refunded if it fails." },
      { title: "Retry anything", body: "Each step writes a versioned artifact, so any step can be inspected and rerun." },
      { title: "Safe for other users", body: "Accounts, credits, limits and moderation before friends can use it." },
    ],
    stack: [
      { layer: "Backend", items: ["Python", "FastAPI"] },
      { layer: "Models", items: ["Claude", "Gemini TTS", "Deepgram"] },
      { layer: "Data", items: ["Postgres", "Cloudflare R2"] },
      { layer: "Operations", items: ["Railway", "GitHub Actions"] },
    ],
    solution: [
      { title: "Pipeline of artifacts", body: "Script, voice, storyboard, footage and render, each stored and versioned." },
      { title: "Word-level storyboard", body: "Scenes are planned against word timestamps from the transcription." },
      { title: "Studio UI", body: "One working column, cost shown before every paid action, approval at each step." },
      { title: "Accounts and credits", body: "Google sign-in, per-user isolation and a credit ledger with hold and refund." },
    ],
    timeline: {
      unit: "M",
      length: 9,
      phases: [
        { label: "Pipeline", from: 1, to: 3, note: "first videos", c: 1 },
        { label: "Studio UI", from: 3, to: 6, note: "approval gates", c: 2 },
        { label: "Accounts", from: 6, to: 8, note: "auth, credits", c: 3 },
        { label: "Beta", from: 8, to: 9, note: "friends", c: 4 },
      ],
    },
    results: [
      { metric: "6", label: "steps from niche to video" },
      { metric: "—", label: "videos per week (to add)" },
      { metric: "—", label: "cost per video (to add)" },
    ],
    links: {
      product: { href: "", note: "studio.graholskis.com, opens with the beta" },
      code: { href: "https://github.com/gobokobok/content-factory-saas", note: "Full source, FastAPI + vanilla JS" },
      video: { href: "", note: "How I built it, step by step" },
    },
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
