// AI Problem Board product page, copy v2 (20 Nov 2026, "AI Problem Board: product page").
// Copy is verbatim. The build notes in that file are not shown on the site.
// Things that do not exist yet show safely: empty checkout links show "Coming soon",
// the free board form sends the request by email until the files exist.

/** TODO: checkout links (merchant of record: Lemon Squeezy, Paddle or Gumroad). Empty = "Coming soon". */
export const checkout = {
  kit: "",
  kitReview: "",
};

export const meta = {
  title: "AI Problem Board",
  description:
    "A two-week check your own team runs before you approve an AI idea. You end with a ranked list: fix now without AI, pilot with AI, or drop.",
};

export const hero = {
  eyebrow: "Do it yourself",
  title: "AI Problem Board",
  lead: "Your team brings you AI ideas faster than anyone can check them. Each one arrives with a vendor demo and a budget request. Very few arrive with a measured problem.",
  sub: "The AI Problem Board is a two-week check your own team runs before you approve anything. You end with a short ranked list: what to fix now without AI, what deserves an AI pilot, and what to drop.",
  free: "Download the free board",
  kit: "Get the full kit",
  session: "Book a facilitated session",
};

export const cost = {
  heading: "What unchecked ideas cost you",
  intro: "Most AI projects do not fail on the technology. They fail because nobody checked the problem first.",
  lead: "You have probably seen the results:",
  items: [
    "A pilot proves the tool works, but no KPI moves.",
    "A vendor is chosen before anyone has defined what “good” looks like.",
    "The people who do the work were never asked, and they do not use the tool.",
    "A simple process change would have fixed most of the problem, and nobody looked for it.",
  ],
  closing: "Each of these costs budget, months and your team’s patience with the next idea.",
};

export const what = {
  heading: "What it is",
  lead: "A one-page board that takes one business problem from “AI could help here” to a measured, ranked list of fixes, in two weeks, run by your own people.",
  body: "It is the method I use in my workshops, packaged so your team can run it without me.",
  resultsLabel: "At the end you have",
  results: [
    { name: "The problem in numbers", text: "How big it is, where it happens and when." },
    { name: "Quick fixes", text: "Changes to a rule or a process that need no AI and can start in week three." },
    { name: "AI use cases, if any survive", text: "Each with a low and high value estimate, a small test and a rule for when to stop." },
    {
      name: "A go or stop decision",
      text: "One that someone else can check, and a one-page request to management: data access, an owner, a review date.",
    },
  ],
  callout: { lead: "Often the answer is a process fix and no AI at all.", rest: "That is a good result." },
};

export const how = {
  heading: "How it works",
  steps: [
    {
      name: "Agree the target",
      when: "one 90-minute session",
      text: "Which number hurts most? What must not get worse while you fix it? Which part of the business is in scope, and who owns it?",
    },
    {
      name: "Describe today and make one guess",
      when: "",
      text: "How is the work done now, and where does it break? The team writes down one guess about the cause, so the fact-finding has a direction.",
    },
    {
      name: "Check the facts",
      when: "two weeks",
      text: "The team measures the problem and tests the guess. They also check whether the data is good enough to build on. Then go or stop.",
    },
    {
      name: "Decide what to do",
      when: "",
      text: "Simple fixes come first. AI is considered only where a rule or process change cannot do the job. Every idea that survives gets an owner, a dated target, a small test and a stop rule.",
    },
  ],
  rule: { lead: "The rule behind every step:", rest: "evidence someone else can check, not an opinion." },
  facilitatorLabel: "For the person who will run it",
  columns: ["Goal and limits", "Scope", "How it works today", "The guess", "The facts", "The options", "The safeguards", "The test plan"],
};

export const example = {
  heading: "A short example",
  intro:
    "A regional food distributor has one warehouse with 120 pickers. Overtime is 12% of hours and rising. The proposal on the table is an AI forecasting tool.",
  note: "All figures are synthetic.",
  rows: [
    { label: "Target", text: "Lower cost per order line. On-time dispatch must stay at 98%." },
    { label: "Today", text: "The roster is built in a spreadsheet. Overtime is called at 2 pm, when the gap shows." },
    { label: "Guess", text: "Overtime comes from a late-afternoon wave of orders, not from total volume." },
    { label: "Facts after two weeks", text: "70% of overtime falls on Mondays and Fridays between 3 and 6 pm. Large customers send their orders late." },
    { label: "Quick fixes", text: "An earlier order cut-off for the top 10 customers, and a flexible pool of staff for peak days." },
    {
      label: "AI use case",
      text: "An hourly forecast of orders, which then feeds the shift plan. Team leads approve every plan, and nobody is scored individually.",
    },
    {
      label: "Test",
      text: "Check the forecast against the last six months. Then run it beside the current plan on one shift for four weeks. Stop if it is no more accurate than today’s plan.",
    },
  ],
  value: {
    label: "The value",
    figure: "50,000 to 100,000 EUR",
    unit: "a year",
    text: "One percentage point of overtime is about 2,040 hours a year, or about 25,000 EUR in overtime premium. Cutting 2 to 4 points is worth roughly 50,000 to 100,000 EUR a year.",
  },
  after: "The quick fixes go first. The AI use case then has to beat the improved process, not the old one.",
  other:
    "The same board works for a month-end close that takes too long, a support backlog or slow hiring. It fits any process with a number attached.",
};

export const asks = {
  heading: "What it asks of you",
  items: [
    {
      name: "Time",
      text: "One 90-minute session. Then two weeks in which the person running the board spends about one day a week, the process owner an hour a week, and the people who do the work an hour or two each.",
    },
    {
      name: "People",
      text: "A process owner, someone from your team to run the board, and the people who do the work. No data science skills are needed at this stage.",
    },
    { name: "Data", text: "Access to the numbers you already have on the process. No new systems." },
  ],
  risk: {
    lead: "What you risk. Very little.",
    rest: "The worst outcome is two weeks spent and a documented “stop”. That is still cheaper than a pilot that goes nowhere. There are no refunds, so start with the free board and see the method before you pay anything.",
  },
};

export type PathAction = "free" | "kit" | "kitReview" | "book";

export interface PathOption {
  name: string;
  price: string;
  priceNote?: string;
  /** Makes the price a link (the workshop has its own section on the landing page). */
  priceHref?: string;
  gets: string;
  pick: string;
  button: string;
  action: PathAction;
  featured?: boolean;
}

export const paths = {
  heading: "Choose your path",
  options: [
    {
      name: "Free",
      price: "0 EUR",
      priceNote: "email required",
      gets: "Blank board, one-page overview, technique selector.",
      pick: "You want to see the method and show it to a colleague before you commit anyone’s time.",
      button: "Download the free board",
      action: "free",
    },
    {
      name: "Kit",
      price: "149 EUR",
      priceNote: "+ VAT",
      gets: "All 12 assets, one company licence, updates to version 1.x.",
      pick: "You have a problem in mind and someone on your team who can run a workshop.",
      button: "Get the kit",
      action: "kit",
      featured: true,
    },
    {
      name: "Kit + review call",
      price: "390 EUR",
      priceNote: "+ VAT",
      gets: "The kit, plus a 60-minute call where I review your first filled board.",
      pick: "You want a second opinion before you take the result to management.",
      button: "Get the kit and call",
      action: "kitReview",
    },
    {
      name: "Facilitated workshop",
      price: "See the workshop page",
      priceHref: "/#workshop",
      gets: "I run the board with your team on your problem.",
      pick: "The problem is high-stakes or political, or nobody has time to learn the method.",
      button: "Book a facilitated session",
      action: "book",
    },
  ] as PathOption[],
  elseHeading: "Use something else when",
  /** TODO: link the Use-Case Funnel and the Vendor Proof Protocol once they have their own pages. */
  else: [
    { when: "The problem is already measured and you have a list of use cases to rank.", then: "Use the Use-Case Funnel." },
    { when: "You are about to choose a vendor.", then: "Use the Vendor Proof Protocol first." },
    { when: "Nobody owns the process or can give the team two weeks.", then: "Find the owner before you start." },
  ],
};

export const kit = {
  heading: "What is in the kit",
  assets: [
    { name: "Blank board", text: "The board itself, ready to fill", access: "Free" },
    { name: "One-page overview", text: "The method on one page, to share with your manager", access: "Free" },
    { name: "Technique selector", text: "Which type of AI fits which type of problem", access: "Free" },
    {
      name: "Facilitator guide and question bank",
      text: "How to run the session: timings and 40+ questions, with what each answer tells you",
      access: "Kit",
    },
    { name: "Worked example", text: "A fully filled board, with notes on each decision", access: "Kit" },
    { name: "Two-week discovery plan", text: "A day-by-day plan, the data to ask for, go or stop criteria", access: "Kit" },
    {
      name: "Quick-fix sorter",
      text: "A test for each idea: would a simple rule fix it, and where does the rule stop working?",
      access: "Kit",
    },
    { name: "Value calculator", text: "Low and high value estimate, after running costs", access: "Kit" },
    { name: "Data readiness check", text: "Five checks per data source, scored by the weakest one", access: "Kit" },
    {
      name: "Safeguards checklist",
      text: "Personal data, worker monitoring, EU AI Act red flags, who has the final say",
      access: "Kit",
    },
    { name: "Close and ask script", text: "How to summarise the board and get data access, an owner and a review date", access: "Kit" },
  ],
  formats: "Miro template, PDF and spreadsheet. The board also works in Mural, in FigJam or on a wall.",
};

export const faq = {
  heading: "Questions",
  items: [
    { q: "Is this only for operations?", a: "No. It works for any process with a number attached: cost, time, errors, backlog." },
    {
      q: "Do we need data scientists?",
      a: "Not to run the board. You will need them later, and only for the use cases that pass the check.",
    },
    {
      q: "What if the answer is “no AI”?",
      a: "Then you have saved the cost of a pilot, and you usually have a process fix to make. Many boards end this way.",
    },
    {
      q: "Does our data leave the company?",
      a: "No. The kit is templates and documents, so your numbers stay in your own tools. In a facilitated session I work with synthetic data, unless you agree to share real data. In that case it is anonymised first.",
    },
    {
      q: "What does the licence cover?",
      a: "One company, unlimited internal use, all 1.x updates by email. Consultants need a separate licence.",
    },
    { q: "Do I get an invoice with our VAT number?", a: "Yes, at checkout." },
  ],
};

export const decide = {
  heading: "Decide",
  lead: "If AI ideas keep reaching your desk without a measured problem behind them, check one before you approve the next.",
  options: [
    { q: "Not sure yet?", a: "Download the free board and read it in ten minutes." },
    { q: "Have a problem and a person to run it?", a: "Get the kit." },
    { q: "Want it done with you, on your problem?", a: "Book a facilitated session." },
  ],
  formTitle: "Get the free board",
  formText: "The blank board, the one-page overview and the technique selector, by email.",
  formButton: "Send me the free board",
  kitButton: "Get the full kit: 149 EUR + VAT",
};
