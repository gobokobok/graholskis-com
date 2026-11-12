// Details for each cell of the AI capability matrix, shown in the side panel.
// Key: "<capability id>-<level>", for example "strat-1".
// `items` follow the order of the cell's items in capability-matrix.ts (the names come from there).
// `template` is the link to a downloadable file; until it exists the panel shows "Template coming soon".
// Written domain by domain for review. Cells without an entry show their items only.

export interface DetailItem {
  text: string;
  example: string;
}
export interface Artefact {
  name: string;
  text: string;
  template?: string;
}
export interface CellDetail {
  items: DetailItem[];
  artefacts: Artefact[];
  checklist: string[];
}

export const details: Record<string, CellDetail> = {
  /* ---------------- 01 Strategy and value realisation ---------------- */

  // AI strategy and target architecture
  "strat-1": {
    items: [
      {
        text: "Why the organisation uses AI, where it starts and what it will not do. One page, signed by an executive sponsor.",
        example:
          "In 2027 we use AI to reduce the time spent on routine documents and customer replies. A person checks every output. We do not use AI to make decisions about employees or customers.",
      },
      {
        text: "The rules for which AI spending is approved at this stage and which has to wait.",
        example:
          "We fund licences for approved tools and training for all staff. Custom builds are funded only after a pilot shows measured value against a baseline.",
      },
      {
        text: "Which AI tools people may use, and with which data.",
        example:
          "Microsoft 365 Copilot for internal documents up to Confidential. ChatGPT Enterprise for public and internal data. No free consumer tools for any work data.",
      },
    ],
    artefacts: [
      { name: "AI ambition statement", text: "Purpose, first areas of use, what we will not do, sponsor, review date." },
      { name: "Investment principles", text: "One page: what is funded now, what needs a pilot first, who approves spend, spend limit per team." },
      {
        name: "Approved-tool list",
        text: "Tool, allowed data classification, allowed uses, business owner, licence status. Published on the intranet and linked from the AI policy.",
      },
    ],
    checklist: [
      "Ambition statement signed off by the executive sponsor",
      "Investment principles agreed with finance",
      "Approved-tool list published and linked from the AI policy",
      "Owner named for each of the three",
      "Review date set, at least once a year",
    ],
  },
  "strat-2": {
    items: [
      {
        text: "The AI capabilities the organisation needs in the next two to three years, with the current and target level for each.",
        example:
          "Retrieval over internal documents: none today, target Level 3 by 2028. Evaluation: manual spot checks today, target an automated eval harness for every production use case.",
      },
      {
        text: "A sequenced plan built from the maturity assessment, not from vendor offers.",
        example:
          "Q1: data classification and a model gateway. Q2: first two pilots with baselines. Q3: eval harness and decision log. Q4: decide which pilot goes to production.",
      },
      {
        text: "Short rules that every AI solution design must follow.",
        example:
          "All model calls go through the gateway. No customer data in prompts without masking. Use a fixed workflow by default, and an agent only when the next step cannot be known in advance.",
      },
    ],
    artefacts: [
      { name: "Target capability map", text: "Capability, current level, target level, gap, owner." },
      { name: "AI roadmap", text: "Quarter, initiative, dependency, owner, success measure. Each item traced to an assessment finding." },
      { name: "Architecture principles", text: "One page: principle, reason, how it is checked in design review." },
    ],
    checklist: [
      "Capability map reviewed by IT and business leads",
      "Roadmap linked to the assessment results",
      "Each roadmap item has an owner and a quarter",
      "Architecture principles published and used in at least one pilot design review",
    ],
  },
  "strat-3": {
    items: [
      {
        text: "The AI reference architecture is owned by the enterprise architecture board, and every new AI solution goes through its review.",
        example:
          "A new contract review tool must use the shared retrieval service and the gateway. The EA board rejects a design that brings its own vector database without a documented reason.",
      },
      {
        text: "Approved building blocks that teams reuse before they build something new.",
        example:
          "Patterns for document Q&A, classification inside a workflow and summarisation with human approval. Each has code templates, an eval set and a named owner.",
      },
    ],
    artefacts: [
      { name: "AI reference architecture", text: "Diagram and description: gateway, model access, retrieval, evaluation, logging, identity." },
      { name: "Architecture decision record", text: "Context, options considered, decision, consequences." },
      { name: "Pattern catalogue entry", text: "Problem, when to use, when not to use, components, owner, example implementations." },
      { name: "EA review checklist for AI solutions", text: "The questions every AI design must answer before build." },
    ],
    checklist: [
      "Reference architecture approved by the EA board",
      "Every AI solution in production has passed EA review",
      "At least three patterns in the catalogue, each with an owner",
      "New designs record why they do not reuse an existing pattern",
    ],
  },
  "strat-4": {
    items: [
      {
        text: "For each capability in the map, a recorded decision to build, buy or use a partner, reviewed every year.",
        example:
          "Buy: the enterprise chat assistant. Partner: speech-to-text for the call centre. Build: claims triage, because it depends on our own data and rules.",
      },
      {
        text: "The strategy accounts for how \"agents\" change cost, risk and staffing, not only licence prices.",
        example:
          "An agent handles 2,000 supplier queries a month for about EUR 1,500 in model and run costs, plus a 2-minute human check per query. The current process takes 10 minutes per query. Scale-up is approved on this comparison.",
      },
    ],
    artefacts: [
      {
        name: "Build, buy or partner decision record",
        text: "Capability, options, three-year cost, lock-in risk, decision, review date.",
      },
      {
        name: "Agent business case",
        text: "Volume, cost per action, human oversight time, cost of errors, comparison with the current process.",
      },
      { name: "Annual strategy review agenda", text: "What is reviewed each year and who signs it off." },
    ],
    checklist: [
      "Decision recorded for every capability in the target map",
      "Agent business cases include run cost and oversight time",
      "Exit option documented for each bought capability",
      "Strategy reviewed in the last 12 months",
    ],
  },

  // Use-case portfolio
  "portfolio-1": {
    items: [
      {
        text: "Each team keeps a simple list of tasks where AI could help.",
        example: "Finance team: summarise supplier contracts, draft month-end commentary, match invoice queries to answers.",
      },
      {
        text: "Ideas raised during the AI at Work training are collected in one place.",
        example:
          "After the session, each participant submits one weekly task that takes more than 30 minutes and could be drafted by AI.",
      },
      {
        text: "Every idea has a named person who can describe the task and judge the result.",
        example: "Draft month-end commentary: owner is the finance controller, who decides whether AI drafts are usable.",
      },
    ],
    artefacts: [
      { name: "Use-case idea form", text: "Task, team, frequency, time per task, data used, owner." },
      { name: "Team backlog", text: "Spreadsheet with one row per idea, its owner and status." },
    ],
    checklist: [
      "Each participating team has a backlog",
      "Ideas from the AI at Work track collected in one list",
      "Every idea has an owner",
      "Ideas that use restricted data are flagged",
    ],
  },
  "portfolio-2": {
    items: [
      {
        text: "Each candidate is scored on value, feasibility and risk with the same simple rubric.",
        example:
          "Contract summarisation: value 4 (about 300 hours a year), feasibility 4 (documents already digital), risk 2 (internal use, human review).",
      },
      {
        text: "Only a few use cases move forward, so each gets enough attention to be measured properly.",
        example:
          "From 46 ideas, the steering group selects four: contract summarisation, customer reply drafting, policy Q&A and invoice query matching.",
      },
      {
        text: "One pilot is chosen to show the full path from idea to measured result.",
        example: "Customer reply drafting: high volume, a clear baseline of 12 minutes per reply and a team lead who wants it.",
      },
    ],
    artefacts: [
      { name: "Scoring rubric", text: "Value, feasibility, risk and data readiness, with a definition for each score from 1 to 5." },
      { name: "Prioritisation pack", text: "Scored list and recommendation for the steering group." },
      { name: "Pilot charter", text: "Problem, scope, baseline, success metric, owner, timeline, stop criteria." },
    ],
    checklist: [
      "All candidates scored with the same rubric",
      "Top 3-5 agreed by the sponsor",
      "Lighthouse pilot has a signed charter",
      "Stop criteria agreed before the pilot starts",
    ],
  },
  "portfolio-3": {
    items: [
      {
        text: "A standing group owns the AI portfolio and meets on a fixed schedule.",
        example: "Monthly, chaired by the COO, with finance, IT, risk and two business unit heads.",
      },
      {
        text: "Money is released in steps tied to evidence, not given up front for the full build.",
        example: "EUR 40,000 for the pilot. A further EUR 150,000 for production only if the pilot meets its success metric.",
      },
      {
        text: "Each use case passes defined gates, with the evidence required at each one.",
        example:
          "Pilot to production requires measured results against the baseline, a risk tier, an eval set and a named service owner.",
      },
    ],
    artefacts: [
      { name: "Portfolio board terms of reference", text: "Members, decisions it makes, meeting schedule, inputs it needs." },
      { name: "Stage-gate criteria", text: "Required evidence for each gate, from idea to retirement." },
      { name: "Funding request", text: "Stage, amount, evidence so far, expected benefit." },
      { name: "Portfolio register", text: "Every use case with its owner, gate, funding and status." },
    ],
    checklist: [
      "Board meets on schedule and keeps minutes",
      "Every funded use case is in the register with its current gate",
      "Gate decisions recorded with their evidence",
      "Funding released only at gates",
    ],
  },
  "portfolio-4": {
    items: [
      {
        text: "Money and people move to the use cases that deliver measured value.",
        example:
          "Policy Q&A saves less time than planned while invoice matching beats its target. The board moves one engineer from the first to the second.",
      },
      {
        text: "Use cases that do not deliver are stopped, and the reason is recorded.",
        example: "Meeting summaries stopped after six months: under 10% adoption and no measurable time saved. Licences cancelled.",
      },
      {
        text: "Use cases with a strong track record are assessed for more autonomy, within clear limits.",
        example:
          "Invoice query matching has run for nine months at 98% accuracy with human approval. Proposed for autonomy level A2: the agent sends standard replies and a person reviews a 10% sample.",
      },
    ],
    artefacts: [
      { name: "Quarterly value review", text: "Planned against realised value for each use case, with a recommendation." },
      { name: "Stop decision record", text: "Use case, reason, lessons, what happens to the data, licences and code." },
      { name: "Autonomy candidate assessment", text: "Track record, cost of errors, proposed autonomy level, required controls." },
    ],
    checklist: [
      "Value review held every quarter",
      "At least one stop or rebalancing decision recorded each year",
      "Stopped use cases fully decommissioned",
      "Autonomy candidates assessed against the oversight rules",
    ],
  },

  // Baselines and benefits
  "baselines-1": {
    items: [
      {
        text: "Who uses the approved tools and how often, measured from the start.",
        example: "Month one: 420 of 1,200 licensed users active weekly (35%). Highest in marketing, lowest in operations.",
      },
      {
        text: "A short regular survey gives a first view of value. Its limits are stated in every report.",
        example:
          "Monthly three-question pulse: which tasks did you use AI for, roughly how much time did it save, would you miss it. Median answer: 1.5 hours a week.",
      },
    ],
    artefacts: [
      { name: "Adoption dashboard", text: "Active users, usage by department, trend over time." },
      { name: "Time-saved pulse survey", text: "Three questions, sent monthly." },
    ],
    checklist: [
      "Baseline taken in the first month after rollout",
      "Survey runs on a fixed schedule",
      "Results shared with the sponsor",
      "Self-reported figures marked as estimates in every report",
    ],
  },
  "baselines-2": {
    items: [
      {
        text: "The current time, cost or quality of the task, measured before the pilot starts.",
        example: "Customer replies: 12 minutes average handling time and 8% reopened, measured over four weeks on 1,100 replies.",
      },
      {
        text: "What counts as success, agreed before the pilot.",
        example: "Handling time under 7 minutes, with a reopen rate no higher than 8%.",
      },
      {
        text: "The pilot result is measured the same way as the baseline.",
        example: "After six weeks: 6.5 minutes and 7% reopened. Target met, report signed by the team lead.",
      },
    ],
    artefacts: [
      { name: "Baseline measurement plan", text: "Metric, method, sample size, period." },
      { name: "Success metrics sheet", text: "Metric, baseline, target, who confirms the result." },
      { name: "Pilot results report", text: "Baseline, result, method, decision, sign-off." },
    ],
    checklist: [
      "Baseline measured before the pilot starts",
      "Success metrics written in the pilot charter",
      "Results measured with the same method as the baseline",
      "Report reviewed by the business owner",
    ],
  },
  "baselines-3": {
    items: [
      {
        text: "Benefits are measured continuously after go-live, not only during the pilot.",
        example: "Every month: replies handled, minutes saved per reply, reopen rate and run cost.",
      },
      {
        text: "Finance confirms how benefits are counted and whether they show up in the budget.",
        example:
          "Finance agrees that saved time counts as capacity, not cost reduction, until headcount plans change. The benefit is reported as 2.1 FTE of capacity.",
      },
    ],
    artefacts: [
      { name: "Benefits register", text: "Use case, metric, baseline, current value, owner." },
      { name: "Benefit counting rules", text: "Agreed with finance: what counts, how it is measured, when it is a saving." },
      { name: "Quarterly benefits report", text: "Gross benefit, run cost, net benefit per use case." },
    ],
    checklist: [
      "Every production use case is in the benefits register",
      "Counting rules signed off by finance",
      "Benefits reported every quarter",
      "Run costs subtracted from the gross benefit",
    ],
  },
  "baselines-4": {
    items: [
      {
        text: "Value is reported automatically from production data.",
        example: "A dashboard updated daily from the gateway logs and the ticketing system, reviewed monthly by the portfolio board.",
      },
      {
        text: "Each \"agent\" has its own value and cost figures, so weak ones are easy to find.",
        example:
          "Supplier query agent: 1,800 queries a month, EUR 9,000 of handling time saved, EUR 1,400 run cost, 1.2% escalated to a person.",
      },
    ],
    artefacts: [
      { name: "Value dashboard specification", text: "Metrics, data sources, refresh schedule, owner." },
      { name: "Agent value card", text: "Volume, cost saved, run cost, error rate, escalation rate." },
    ],
    checklist: [
      "Value figures come from system data, not surveys",
      "Each agent has a value card",
      "Agents that cost more than they save are reviewed by the board",
      "Reporting definitions documented",
    ],
  },

  // Process redesign
  "process-2": {
    items: [
      {
        text: "The process is changed to fit the AI step, instead of adding AI to the old process.",
        example:
          "Customer replies: AI drafts the reply when the ticket arrives, so the service agent reviews instead of writing. The second review is removed for standard replies.",
      },
      {
        text: "Job descriptions and controls reflect the new way of working.",
        example: "Service agents are responsible for checking AI drafts. The quality team samples 5% of sent replies each week.",
      },
    ],
    artefacts: [
      { name: "Process map, before and after", text: "Steps, roles and controls in the current and redesigned process." },
      { name: "RACI for the redesigned process", text: "Who is responsible, accountable, consulted and informed at each step." },
      { name: "Control change log", text: "Control, old version, new version, reason, approver." },
    ],
    checklist: [
      "Before and after maps documented",
      "Affected staff trained on the new process",
      "Control changes approved by risk",
      "Process owner named",
    ],
  },
  "process-3": {
    items: [
      {
        text: "Redesign becomes a standard step in moving a use case to production.",
        example: "Claims intake, invoice queries and contract review redesigned in the same year with one method.",
      },
      {
        text: "Controls move to where they work best once the AI step is in place.",
        example:
          "In invoice matching, the manual check moves from every invoice to exceptions only. Automated checks on amounts and supplier IDs run before the AI step.",
      },
    ],
    artefacts: [
      { name: "Process redesign playbook", text: "The method, steps and roles for redesigning a process around AI." },
      { name: "Control point assessment", text: "Each control, its purpose, where it sits now, where it should sit." },
      { name: "Process register", text: "Processes with AI steps, their owners and last review date." },
    ],
    checklist: [
      "Every production use case has a redesigned process",
      "Control changes reviewed by internal audit",
      "Process register kept up to date",
      "Lessons from each redesign shared across teams",
    ],
  },
  "process-4": {
    items: [
      {
        text: "Processes are designed with \"agents\" as participants, with clear hand-offs between agent and person.",
        example:
          "Supplier onboarding: the agent collects documents and checks they are complete. A person approves the supplier. The agent then creates the record in the ERP.",
      },
      {
        text: "It is written down which decisions an agent may take and which stay with people.",
        example: "The agent may request missing documents and send reminders. Only a person may approve a supplier or change bank details.",
      },
    ],
    artefacts: [
      { name: "Human and agent process map", text: "Steps, owner of each step and the hand-off points." },
      { name: "Decision rights matrix", text: "Decision, agent allowed or not, person required, escalation route." },
    ],
    checklist: [
      "Every agent step has a defined hand-off",
      "Decision rights matrix approved by the process owner and risk",
      "Escalation route tested",
      "Staff know which decisions stay with them",
    ],
  },
};
