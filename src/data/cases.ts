// Case content is placeholder (placeholder: true shows a chip on the card and page).
// Replace each field with the real story; set placeholder to false when done.
export interface Case {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  client: string;
  role: string;
  timeline: string;
  stack: string[];
  problem: string;
  built: string[];
  result: string[];
  placeholder: boolean;
  /** Exhibit shown on the card and the case page. Illustrative until replaced. */
  visual:
    | { kind: "bars"; name: string; values: number[]; labels: string[] }
    | { kind: "flow"; steps: { label: string; sub?: string; c?: number; gate?: boolean }[]; loop?: string };
}

export const cases: Case[] = [
  {
    slug: "production-ai-assistants",
    tag: "Enterprise · Assistants",
    title: "Six AI assistants in production across procurement, HR and analytics",
    summary:
      "From scattered pilots to assistants that staff use daily, with retrieval, evaluation and governance built in.",
    client: "Enterprise, 25K+ employees",
    role: "AI Implementation Lead",
    timeline: "9 months",
    stack: ["Claude", "RAG", "Postgres", "Azure"],
    problem:
      "Several teams had built their own assistants. None had evaluation, ownership or a path to production, and costs were growing without anyone watching.",
    built: [
      "A shared retrieval layer and evaluation harness every assistant reuses.",
      "Six assistants taken from pilot to production with named owners.",
      "A lightweight governance routine: review gates, cost limits and an incident path.",
    ],
    result: [
      "Result metric goes here (adoption, hours saved).",
      "Result metric goes here (cost per answer).",
      "Result metric goes here (time to ship a new assistant).",
    ],
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
    tag: "Operations · Agents",
    title: "Agentic workflows for procurement and operations",
    summary:
      "Deciding where an agent earns its keep, then building it with human approval at each costly step.",
    client: "Mid-size manufacturer",
    role: "AI Builder",
    timeline: "4 months",
    stack: ["Claude", "Tool use", "Python", "n8n"],
    problem:
      "Buyers spent most of the week on repetitive supplier follow-ups and document checks, and earlier automation broke on every exception.",
    built: [
      "A design canvas to decide which steps should be agents and which should stay rules.",
      "An agent that drafts and tracks supplier follow-ups with approval before sending.",
      "Tracing and a review queue so every action can be inspected.",
    ],
    result: [
      "Result metric goes here (hours returned to buyers).",
      "Result metric goes here (exception rate).",
    ],
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
    tag: "Own product · Platform",
    title: "Content Factory: an AI video pipeline run daily in production",
    summary:
      "A niche in, a finished video out: script, voiceover, storyboard, footage and render, with a human approval gate at each editorial step.",
    client: "Own product",
    role: "Builder",
    timeline: "Ongoing",
    stack: ["FastAPI", "Claude", "Postgres", "Cloudflare R2", "Railway"],
    problem:
      "Making a short video takes hours of manual steps across many tools, and every step is hard to repeat or inspect.",
    built: [
      "A pipeline where every artifact is stored and versioned, so any step can be retried.",
      "A studio UI with cost estimates shown before any paid action.",
      "Accounts, credits and moderation so friends can use it safely.",
    ],
    result: [
      "Result metric goes here (videos per week).",
      "Link to the live platform goes here.",
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
