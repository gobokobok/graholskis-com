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

  /* ---------------- 02 People, skills and operating model ---------------- */

  // Operating model and decision rights
  "opmodel-1": {
    items: [
      {
        text: "The person who uses AI is responsible for what they send, publish or decide with it.",
        example:
          "A sales manager uses Copilot to draft a proposal. If the proposal contains a wrong price, the sales manager is accountable, not the tool or IT.",
      },
      {
        text: "One central team decides which AI tools are allowed, so teams do not each buy their own.",
        example:
          "Marketing asks for an image generator. The CoE checks the data terms and licence cost, approves it for public content only and adds it to the approved-tool list.",
      },
    ],
    artefacts: [
      { name: "Output accountability statement", text: "A section of the AI policy: who owns AI-assisted work and what checking is expected." },
      { name: "Tool request form", text: "Tool, purpose, data used, number of users, cost." },
      { name: "Tool decision log", text: "Request, decision, conditions, date, who decided." },
    ],
    checklist: [
      "Output ownership written in the AI policy and covered in training",
      "All tool requests go through one route",
      "Every approved tool has a recorded CoE decision",
      "Rejected requests get a reason and, where possible, an alternative",
    ],
  },
  "opmodel-2": {
    items: [
      {
        text: "Each pilot has a business owner who wants the result and decides whether it continues.",
        example:
          "Customer reply drafting is owned by the head of customer service, who signs the pilot charter and makes the final go or stop decision.",
      },
      {
        text: "It is clear who approves a pilot start, access to data and a wider rollout.",
        example:
          "Pilot start: business owner and CoE lead. Access to customer data: data owner and DPO. Rollout to more users: portfolio sponsor.",
      },
    ],
    artefacts: [
      { name: "Pilot roles sheet", text: "Business owner, technical lead, data owner, risk contact, with names." },
      { name: "Approval matrix", text: "Decision, approver, evidence needed before approval." },
    ],
    checklist: [
      "Every pilot has a named business owner",
      "The owner has signed the pilot charter",
      "Approval matrix published",
      "Approvals recorded for each pilot",
    ],
  },
  "opmodel-3": {
    items: [
      {
        text: "A central team sets standards and runs the platform, hubs in business units build use cases, and teams use them.",
        example:
          "Central CoE: platform, standards and approvals. Finance and operations hubs: three to five people each, building use cases. Teams: request, test and use.",
      },
      {
        text: "Every AI asset in production has an owner who is accountable for how it runs.",
        example:
          "The contract review assistant is owned by the legal operations manager, who is responsible for its quality, cost, user feedback and changes.",
      },
      {
        text: "Users know where to go when an AI service fails or gives wrong answers.",
        example:
          "First line: the IT service desk, with an AI category. Second line: the hub that built the service. Third line: the platform team, for model or gateway issues.",
      },
    ],
    artefacts: [
      { name: "Operating model description", text: "Roles of the central team, hubs and teams, and how work moves between them." },
      { name: "Service owner role description", text: "Responsibilities, decisions, time needed, reporting." },
      { name: "Support model", text: "Support lines, escalation route, response times." },
      { name: "RACI for AI delivery", text: "Who does what from idea to retirement." },
    ],
    checklist: [
      "Operating model approved by the sponsor",
      "Every production asset has a service owner in the catalogue",
      "Support route tested with a real incident",
      "Hubs follow the central standards",
    ],
  },
  "opmodel-4": {
    items: [
      {
        text: "Every \"agent\" has a named person who is accountable for what it does.",
        example:
          "The supplier onboarding agent is owned by the procurement operations lead, who approves changes to its instructions and reviews its error log every week.",
      },
      {
        text: "The organisation states which decisions agents may take and which stay with people.",
        example:
          "Agents may send standard replies and update ticket status. Payments, contract changes and anything about an employee always need a person.",
      },
    ],
    artefacts: [
      { name: "Agent ownership record", text: "Agent, owner, purpose, autonomy level, review date." },
      { name: "Decision rights policy", text: "Decisions agents may take, decisions reserved for people, how exceptions are approved." },
      { name: "Agent change approval", text: "Change, reason, test results, owner approval." },
    ],
    checklist: [
      "Every agent in production has an owner",
      "Decision rights policy approved by risk and legal",
      "Agent changes approved by the owner before release",
      "Owners review agent performance on a fixed schedule",
    ],
  },

  // AI CoE and champions
  "coe-1": {
    items: [
      {
        text: "A small central team takes responsibility for safe AI use.",
        example:
          "Four people part-time: an IT architect, a data protection specialist, a business lead from operations and a programme manager, reporting to the CIO.",
      },
      {
        text: "One person in each team helps colleagues and passes feedback to the CoE.",
        example: "18 champions across departments, each with two hours a week agreed with their manager.",
      },
      {
        text: "One place where people ask questions about AI tools and rules.",
        example: "A Teams channel monitored by the CoE, with answers within one working day and a pinned FAQ.",
      },
    ],
    artefacts: [
      { name: "CoE charter", text: "Purpose, members, decisions it owns, reporting line." },
      { name: "Champion role description", text: "Time, tasks and the support champions get from the CoE." },
      { name: "Support channel FAQ", text: "The questions people ask most, with agreed answers." },
    ],
    checklist: [
      "CoE members named and their time agreed",
      "Charter approved by the sponsor",
      "A champion in every participating team",
      "Support channel live and announced",
    ],
  },
  "coe-2": {
    items: [
      {
        text: "Champions run small sessions and collect use-case ideas, not only answer questions.",
        example: "Each champion runs a 30-minute monthly show-and-tell in their team and submits at least two ideas a quarter.",
      },
      {
        text: "Champions and practitioners meet regularly to share what works.",
        example:
          "A monthly one-hour call: one team demos a use case, one lesson learned, one update from the CoE. Recordings kept on the intranet.",
      },
    ],
    artefacts: [
      { name: "Champion activity tracker", text: "Sessions held, ideas submitted, questions answered, per champion." },
      { name: "Community of practice agenda", text: "Standing agenda and calendar for the monthly call." },
      { name: "Show-and-tell template", text: "Task, what was tried, result, what to watch out for." },
    ],
    checklist: [
      "Champions active in every pilot team",
      "Community meets at least monthly",
      "Ideas from champions reach the portfolio backlog",
      "Champion time protected by their managers",
    ],
  },
  "coe-3": {
    items: [
      {
        text: "Each shared AI asset, such as a prompt library, eval set or pattern, has a steward who keeps it current.",
        example:
          "The steward of the contract clause library reviews changes, removes outdated prompts and checks results against the eval set every quarter.",
      },
      {
        text: "The CoE maintains the delivery method and the list of all AI assets.",
        example:
          "Every new AI asset follows the ADLM stages and gets a catalogue entry before release: owner, risk tier, data used, version, status.",
      },
    ],
    artefacts: [
      { name: "Steward role description", text: "Assets covered, review schedule, what the steward may change." },
      { name: "ADLM process guide", text: "Stages, gates and the evidence required at each gate." },
      { name: "AI asset catalogue entry", text: "Owner, purpose, risk tier, data used, version, status." },
    ],
    checklist: [
      "Every shared asset has a steward",
      "ADLM published and used by all delivery teams",
      "Catalogue complete for all production assets",
      "Catalogue reviewed every quarter",
    ],
  },
  "coe-4": {
    items: [
      {
        text: "The CoE provides shared AI services that teams use, such as the gateway, retrieval and evaluation.",
        example:
          "Teams request a new retrieval index through a self-service form. The platform team delivers it within two days, with logging and access control in place.",
      },
      {
        text: "Shared AI services are managed as products, with a roadmap and feedback from the teams that use them.",
        example: "The gateway has a product owner, a quarterly roadmap, usage figures and a satisfaction score from user teams.",
      },
    ],
    artefacts: [
      { name: "Platform service catalogue", text: "Service, what it provides, how to request it, service levels." },
      { name: "Product roadmap", text: "Quarter, change, reason, teams affected." },
      { name: "Internal user survey", text: "Short quarterly survey of the teams that use the platform." },
    ],
    checklist: [
      "Platform services listed with service levels",
      "Each platform service has a product owner",
      "Roadmap reviewed with user teams every quarter",
      "Service levels measured and reported",
    ],
  },

  // Training tracks
  "training-1": {
    items: [
      {
        text: "Basic training for every employee on using the approved AI tools well.",
        example:
          "A 90-minute session: what the approved tools are good and bad at, how to write a clear request, and three exercises on everyday tasks.",
      },
      {
        text: "What data may go into which tool, taught with concrete cases.",
        example:
          "Allowed in Copilot: internal reports and emails. Not allowed in any AI tool: customer ID numbers, health data and passwords.",
      },
      {
        text: "People learn to check AI output before they use it.",
        example: "Check every figure against the source, ask the tool where it got the answer, and never send a draft you have not read in full.",
      },
    ],
    artefacts: [
      { name: "AI at Work training pack", text: "Slides, exercises and trainer notes." },
      { name: "Data rules one-pager", text: "What data is allowed in which tool, with examples." },
      { name: "Verification card", text: "Five checks to run before using AI output." },
      { name: "Training record", text: "Who completed which version and when. Supports the AI literacy duty in the EU AI Act." },
    ],
    checklist: [
      "Training available to all staff",
      "Completion tracked by department",
      "Data rules and verification covered in every session",
      "Training record kept for the AI literacy duty",
    ],
  },
  "training-2": {
    items: [
      {
        text: "Deeper training for people who build or run use cases, taught in small groups.",
        example:
          "Cohorts of 12 over six weeks: request design, evaluation, working with documents, and risks. Each person brings a real task.",
      },
      {
        text: "A team builds and tests one use case in a short, supported sprint.",
        example:
          "A two-week sprint with the finance hub: build a first version of invoice query matching, test it on 200 past queries and present the results.",
      },
    ],
    artefacts: [
      { name: "Practitioner curriculum", text: "Modules, exercises, time needed, assessment." },
      { name: "Sprint brief", text: "Problem, data, success measure, team, demo date." },
      { name: "Sprint results", text: "What was built, test results, recommendation." },
    ],
    checklist: [
      "At least one cohort trained for each pilot team",
      "Every practitioner works on a real use case",
      "Sprint results feed portfolio decisions",
      "Cohort feedback used to update the curriculum",
    ],
  },
  "training-3": {
    items: [
      {
        text: "Training for the engineers who put AI into production: evaluation, monitoring, security and cost.",
        example:
          "Five modules: eval harness, gateway and logging, retrieval quality, prompt injection and access control, cost management. Each ends with a hands-on lab.",
      },
      {
        text: "Everyone who delivers AI learns the delivery method before their first release.",
        example: "A half-day onboarding on the ADLM stages and gates, followed by a first release done with a CoE reviewer.",
      },
    ],
    artefacts: [
      { name: "Engineering track curriculum", text: "Modules, labs and the skills each one covers." },
      { name: "ADLM onboarding guide", text: "Stages, gates, templates and where to get help." },
      { name: "Skills matrix", text: "Delivery roles and the skills each one needs." },
    ],
    checklist: [
      "Engineers on AI teams have completed the track",
      "New delivery staff onboarded on ADLM before their first release",
      "Skills matrix kept up to date",
      "Training updated when the platform changes",
    ],
  },
  "training-4": {
    items: [
      {
        text: "Training is part of each role and is updated as the tools change.",
        example:
          "Each role has a learning path. When a new model or tool is approved, a short update module goes to the roles that use it.",
      },
      {
        text: "People who oversee \"agents\" learn how to review their work, spot failures and step in.",
        example:
          "Supervisors practise on recorded agent runs: find the wrong action, decide whether to stop the agent, and log the incident.",
      },
    ],
    artefacts: [
      { name: "Role-based learning paths", text: "Role, required modules, refresh frequency." },
      { name: "Agent supervision training", text: "Practice cases based on real agent runs, with model answers." },
      { name: "Annual skills review", text: "Gaps found, training planned, owner." },
    ],
    checklist: [
      "Every AI-related role has a learning path",
      "Update modules issued within a month of a tool change",
      "Agent supervisors trained before they take on the role",
      "Skills reviewed every year",
    ],
  },

  // Adoption measurement
  "adoption-1": {
    items: [
      {
        text: "How many licensed people use the approved tools each week.",
        example: "Weekly active users: 520 of 1,200 licences (43%), up from 35% in month one.",
      },
      {
        text: "Usage broken down by department, taken from the vendor admin console.",
        example: "Marketing 71% active, finance 48%, operations 19%. Operations gets extra champion support next quarter.",
      },
    ],
    artefacts: [
      { name: "Adoption dashboard", text: "Active users, usage by department, trend." },
      { name: "Licence review", text: "Inactive licences, decision to reassign or cancel, savings." },
    ],
    checklist: [
      "Usage data pulled from vendor logs every month",
      "Results shared with department heads",
      "Departments with low usage get a support plan",
      "Inactive licences reviewed every quarter",
    ],
  },
  "adoption-2": {
    items: [
      {
        text: "Usage is measured for each use case, not only for the tool in general.",
        example:
          "Customer reply drafting: the AI draft is used on 85% of eligible tickets. Policy Q&A: 140 questions a week, down from 300 at launch.",
      },
    ],
    artefacts: [
      { name: "Use-case usage report", text: "Eligible volume, actual use, trend, comments from users." },
      { name: "Usage tracking requirements", text: "What every new pilot must log so usage can be measured." },
    ],
    checklist: [
      "Every pilot defines how usage is measured",
      "Usage reported against the eligible volume",
      "Falling usage triggers a review with users",
      "Usage reviewed at each stage gate",
    ],
  },
  "adoption-3": {
    items: [
      {
        text: "Usage figures are combined with benefits, to show where the value comes from.",
        example:
          "Reply drafting is used on 85% of tickets and saves 5.5 minutes on each. The other 15% are complex cases, so the team stops pushing for full adoption.",
      },
    ],
    artefacts: [
      { name: "Adoption and benefits report", text: "Usage and benefit per use case, side by side, with trend." },
      { name: "Adoption targets", text: "Target usage per use case, where higher usage drives value." },
    ],
    checklist: [
      "Adoption and benefits reported together",
      "Adoption targets set where usage drives value",
      "Low adoption investigated before more spend",
      "Report reviewed by the portfolio board",
    ],
  },

  /* ---------------- 03 Governance, risk and compliance ---------------- */

  // AI policy and acceptable use
  "policy-1": {
    items: [
      {
        text: "The policy names the tools people may use and links to the current list.",
        example: "Only tools on the approved-tool list may be used with work data. The list is on the intranet and kept up to date by the CoE.",
      },
      {
        text: "What data may go into which tool, by data classification.",
        example:
          "Public and internal data: any approved tool. Confidential: Copilot only. Restricted, such as health data or card numbers: no AI tool without a separate approval.",
      },
      {
        text: "Who is responsible for AI-assisted work.",
        example: "You are responsible for anything you send, publish or decide with AI help, in the same way as for your own work.",
      },
      {
        text: "What AI must not be used for, in plain words.",
        example:
          "No AI for decisions about hiring, performance or dismissal. No emotion recognition at work. No uploading other people's personal data to check or profile them.",
      },
      {
        text: "How to ask for something the policy does not allow, instead of working around it.",
        example:
          "Send a request to the CoE with the tool, data and reason. Answer within five working days. Approved exceptions are time-limited and logged.",
      },
    ],
    artefacts: [
      { name: "AI policy", text: "Scope, approved tools, data rules, accountability, prohibited uses, exceptions, review." },
      { name: "Acceptable use summary", text: "One page for all staff: what you can do, what you cannot, who to ask." },
      { name: "Exception request and log", text: "Request form, decision, conditions, expiry date." },
    ],
    checklist: [
      "Policy approved by management and published",
      "All staff have acknowledged the policy",
      "Prohibited uses checked against the EU AI Act prohibitions",
      "Exception route live and exceptions logged",
      "Review date set",
    ],
  },
  "policy-2": {
    items: [
      {
        text: "The policy points to the risk tiers and says who approves use cases in each tier.",
        example:
          "Low-risk use cases are approved by the business owner. Medium by the CoE. High by the AI risk committee, with legal and the DPO.",
      },
    ],
    artefacts: [
      { name: "Policy update", text: "A section on risk tiers and the approval route for each." },
      { name: "Approval routes by tier", text: "One page: tier, approver, evidence needed, expected time." },
    ],
    checklist: [
      "Policy updated with references to the risk tiers",
      "Approval route published for each tier",
      "Staff know how to submit a use case",
      "Approvals recorded against the tier",
    ],
  },
  "policy-3": {
    items: [
      {
        text: "Policy requirements are checked at the delivery gates, not only written down.",
        example:
          "The pilot-to-production gate checks that the data used matches the data rules and that the risk tier is approved. A release without these checks does not pass.",
      },
      {
        text: "The policy is reviewed every year against new tools, incidents and regulation.",
        example: "The 2027 review adds rules for meeting transcription tools and tightens the prohibited uses after two incidents.",
      },
    ],
    artefacts: [
      { name: "Policy-to-gate mapping", text: "Each policy requirement, the gate that checks it and the evidence needed." },
      { name: "Annual review checklist", text: "Inputs to review: incidents, new tools, regulation, audit findings." },
      { name: "Policy change log", text: "Change, reason, date, approver." },
    ],
    checklist: [
      "Every policy requirement mapped to a gate",
      "Gate reviewers check the policy evidence",
      "Review held in the last 12 months",
      "Changes communicated to staff",
    ],
  },
  "policy-4": {
    items: [
      {
        text: "The policy states which autonomy levels are allowed and under what conditions.",
        example:
          "A3 is allowed only in the low-risk tier, with a named owner, a tested kill switch and weekly sampling. No agent may make payments or change access rights on its own.",
      },
    ],
    artefacts: [
      { name: "Autonomy rules", text: "A section of the AI policy: allowed levels, conditions, actions no agent may take." },
      { name: "Autonomy approval form", text: "Agent, requested level, risk tier, controls, approver." },
    ],
    checklist: [
      "Autonomy rules approved by the risk committee",
      "Every agent's autonomy level matches the rules",
      "Exceptions approved and time-limited",
      "Rules reviewed after every agent incident",
    ],
  },

  // Use-case inventory
  "inventory-1": {
    items: [
      {
        text: "A simple list of every AI use, with its owner, purpose, data and the decision it feeds.",
        example:
          "Contract summaries. Owner: legal operations manager. Purpose: faster first review. Data: supplier contracts, Confidential. Decision fed: whether a contract goes to a lawyer.",
      },
    ],
    artefacts: [
      { name: "AI use register", text: "Spreadsheet with one row per use: owner, purpose, data, decision fed, tool, status." },
      { name: "What counts as an AI use", text: "Short guidance with examples, so teams know what to record." },
    ],
    checklist: [
      "Register created and owned by the CoE",
      "Known uses recorded, including team-level ones",
      "Every entry has an owner",
      "Register reviewed every quarter",
    ],
  },
  "inventory-2": {
    items: [
      {
        text: "New use cases enter through one form, so nothing starts without being recorded.",
        example: "Seven questions: task, users, data, decision affected, people affected, tool, owner. It takes about ten minutes.",
      },
      {
        text: "The depth of review depends on the risk, so low-risk ideas move fast.",
        example:
          "Drafting internal emails: approved by the CoE in two days. Screening job applications: goes to the risk committee and needs a DPIA.",
      },
    ],
    artefacts: [
      { name: "Intake form", text: "The seven questions, with guidance for each." },
      { name: "Triage guide", text: "How answers on the form map to a review route." },
      { name: "Approval record", text: "Use case, tier, approver, conditions, date." },
    ],
    checklist: [
      "All new use cases enter through the intake form",
      "Triage done within the agreed time",
      "Approvals recorded in the register",
      "High-risk cases escalated as defined",
    ],
  },
  "inventory-3": {
    items: [
      {
        text: "Each register entry links to the asset in the catalogue, so the use and the asset stay in step.",
        example: "The register entry for contract summaries links to catalogue asset version 2.3, with its eval results and owner.",
      },
      {
        text: "Each use case has a status, including retired, and retirement is a real process.",
        example: "Meeting summaries retired in March: access removed, stored transcripts deleted after 30 days, licences cancelled.",
      },
    ],
    artefacts: [
      { name: "Lifecycle status definitions", text: "Idea, approved, pilot, production, suspended, retired, with entry criteria." },
      { name: "Retirement checklist", text: "Access, data, licences, documentation, communication to users." },
      { name: "Reconciliation report", text: "Differences between the register and the catalogue, with actions." },
    ],
    checklist: [
      "Every production use case linked to a catalogue entry",
      "Status kept current",
      "Retired use cases follow the retirement checklist",
      "Register and catalogue reconciled every quarter",
    ],
  },
  "inventory-4": {
    items: [
      {
        text: "Every agent is in the register with its autonomy level, tools and permissions.",
        example:
          "Supplier onboarding agent. Autonomy A1. Tools: email, document store, draft supplier records in the ERP. Cannot approve suppliers. Owner: procurement operations lead.",
      },
    ],
    artefacts: [
      { name: "Agent register entry", text: "Agent, owner, autonomy level, tools, permissions, limits, review date." },
      { name: "Quarterly agent review", text: "Permissions in the register compared with permissions in the systems." },
    ],
    checklist: [
      "Every agent registered before release",
      "Permissions in the register match the systems",
      "Autonomy level approved",
      "Entries reviewed every quarter",
    ],
  },

  // Vendor and third-party risk
  "vendor-1": {
    items: [
      {
        text: "Each AI vendor is checked for security, data use and contract terms before use.",
        example:
          "Questions include: is our data used for training, where is it stored, how long are prompts kept, and which subprocessors are used.",
      },
      {
        text: "A data processing agreement is signed where the vendor handles personal data.",
        example: "The DPA states EU data residency, no training on customer data and deletion of prompts within 30 days.",
      },
      {
        text: "The vendor is recorded in the same register as other suppliers.",
        example: "Entry: vendor, service, data categories, contract owner, renewal date, risk rating.",
      },
    ],
    artefacts: [
      { name: "AI vendor questionnaire", text: "Security, data use, retention, subprocessors, model changes." },
      { name: "DPA checklist", text: "Clauses to check in a data processing agreement with an AI vendor." },
      { name: "Third-party register entry", text: "The fields every AI vendor entry must have." },
    ],
    checklist: [
      "Every AI vendor assessed before use",
      "DPA signed where personal data is processed",
      "AI vendors recorded in the third-party register",
      "Contract owner named for each vendor",
    ],
  },
  "vendor-2": {
    items: [
      {
        text: "Each new model provider or connector is assessed, even when the main platform is already approved.",
        example:
          "A team wants to connect the assistant to the CRM through an MCP server. Security reviews the server, what data it can read and who maintains it.",
      },
    ],
    artefacts: [
      { name: "Connector assessment form", text: "Connector, data it can read and write, maintainer, permissions, risks." },
      { name: "Approved connector list", text: "Connector, allowed use, permissions, owner, review date." },
    ],
    checklist: [
      "New providers and connectors assessed before use",
      "Approved connectors listed",
      "Connector permissions limited to what the use case needs",
      "Reassessment after major version changes",
    ],
  },
  "vendor-3": {
    items: [
      {
        text: "For each important AI vendor, a plan for how to leave without stopping the business.",
        example:
          "If the model provider changes its terms, our prompts and eval sets let us move to a second provider within six weeks. Tested once a year on one use case.",
      },
      {
        text: "The organisation knows how much depends on one vendor, and limits it.",
        example: "70% of AI use cases run on one provider. Target: critical use cases able to run on a second provider by year end.",
      },
    ],
    artefacts: [
      { name: "Exit plan", text: "Trigger, alternative provider, steps, time needed, test date." },
      { name: "Concentration view", text: "Use cases per vendor, with criticality." },
    ],
    checklist: [
      "Exit plan for each critical AI vendor",
      "Each exit plan tested at least once",
      "Concentration reported to risk",
      "In financial services, plans aligned with DORA",
    ],
  },

  // Risk tiering
  "tiering-2": {
    items: [
      {
        text: "Every use case gets a risk tier at intake.",
        example: "Internal email drafting: low. Customer reply drafting: medium. Credit decision support: high.",
      },
      {
        text: "A short set of questions decides the tier, so different reviewers reach the same answer.",
        example:
          "Does it affect customers or employees? Does it use personal or restricted data? Does it feed a decision with legal effect? Does a person check every output?",
      },
    ],
    artefacts: [
      { name: "Tiering rubric", text: "Questions, scoring and how the score maps to a tier." },
      { name: "Tier record", text: "Use case, answers, tier, reviewer, date." },
    ],
    checklist: [
      "Rubric approved by risk",
      "Every use case has a tier",
      "Tier recorded with the reasons",
      "Tier reviewed when the use case changes",
    ],
  },
  "tiering-3": {
    items: [
      {
        text: "Each tier has a fixed list of evidence needed before release.",
        example:
          "Low: owner and data check. Medium: eval results and a fallback. High: eval results, DPIA, bias testing, human oversight design and legal sign-off.",
      },
      {
        text: "Higher tiers get deeper and more independent review.",
        example: "Low: CoE review in two days. High: risk committee review, with testing by someone outside the delivery team.",
      },
    ],
    artefacts: [
      { name: "Evidence requirements by tier", text: "Tier, required evidence, who checks it." },
      { name: "Review route by tier", text: "Reviewer, independence required, expected time." },
    ],
    checklist: [
      "Evidence list published for each tier",
      "Releases checked against the list",
      "High-tier reviews include independent testing",
      "Evidence stored with the asset",
    ],
  },
  "tiering-4": {
    items: [
      {
        text: "The risk tier sets the highest autonomy level an agent may have.",
        example: "Low tier: up to A3. Medium: up to A2. High: A1 at most, with a person approving every action.",
      },
    ],
    artefacts: [{ name: "Tier and autonomy table", text: "Tier, highest allowed autonomy level, extra controls." }],
    checklist: [
      "Table approved by the risk committee",
      "Every agent within its allowed level",
      "Raising a level requires a new review",
      "Table reviewed every year",
    ],
  },

  // Autonomy and human oversight
  "oversight-1": {
    items: [
      {
        text: "At this level a person reviews every AI output before it is used.",
        example: "No AI draft is sent to a customer, published or used in a decision without a person reading and approving it.",
      },
    ],
    artefacts: [{ name: "Review guidance", text: "What to check in an AI output before using it, with examples." }],
    checklist: [
      "Rule written in the AI policy",
      "Covered in the AI at Work training",
      "Managers spot-check that drafts are reviewed",
      "No exceptions at this level",
    ],
  },
  "oversight-2": {
    items: [
      {
        text: "Clear rules send uncertain or sensitive cases to a person.",
        example: "Replies about complaints, refunds over EUR 200 or legal threats always go to a person, whatever the AI suggests.",
      },
      {
        text: "The system is designed to say it does not know, instead of guessing.",
        example:
          "If policy Q&A finds no matching document, it answers \"I could not find this in our policies\" and gives the contact for the policy owner.",
      },
    ],
    artefacts: [
      { name: "Review threshold list", text: "Case type, threshold, who reviews." },
      { name: "Abstention test set", text: "Questions with no answer in the source, used to test that the system abstains." },
    ],
    checklist: [
      "Thresholds defined for each pilot",
      "Thresholds tested before go-live",
      "Abstention tested with questions that have no answer",
      "Overrides by reviewers logged",
    ],
  },
  "oversight-3": {
    items: [
      {
        text: "Each tier has its own oversight design: who reviews, how much and how fast.",
        example:
          "Low: a weekly 5% sample. Medium: a 20% sample plus all flagged cases. High: every output reviewed by a trained reviewer before use.",
      },
    ],
    artefacts: [
      { name: "Oversight standard", text: "Tier, review method, sample size, reviewer qualification." },
      { name: "Reviewer training record", text: "Who is trained to review which use cases." },
      { name: "Oversight log", text: "Reviews done, issues found, actions taken." },
    ],
    checklist: [
      "Oversight standard approved",
      "Every production use case follows the oversight for its tier",
      "Reviewers trained",
      "Review results feed quality monitoring",
    ],
  },
  "oversight-4": {
    items: [
      {
        text: "Four defined levels describe how much an agent may do on its own.",
        example:
          "A0: the AI suggests, a person acts. A1: the AI prepares actions, a person approves each one. A2: the AI acts on defined low-risk actions, a person reviews samples and exceptions. A3: the AI acts within set limits, monitored, with a kill switch.",
      },
      {
        text: "Specific steps where an agent must stop and wait for a person.",
        example:
          "The onboarding agent stops before creating a supplier in the ERP and before any message that commits the company to terms.",
      },
    ],
    artefacts: [
      { name: "Autonomy level definitions", text: "A0 to A3, what each allows, required controls." },
      { name: "Approval point design", text: "Step, what the person sees, how they approve or reject, time limit." },
    ],
    checklist: [
      "Every agent assigned an autonomy level",
      "Approval points designed and tested",
      "People at approval points trained",
      "Level changes approved before release",
    ],
  },

  // Regulatory scope
  "regscope-1": {
    items: [
      {
        text: "Article 4 of the EU AI Act requires organisations to ensure their staff have sufficient AI literacy. It has applied since February 2025.",
        example: "AI at Work training for all staff, extra modules for heavy users, and a training record for each person.",
      },
      {
        text: "A data protection impact assessment is done when AI processing of personal data is likely to be high risk under GDPR.",
        example: "Transcribing customer calls with AI: DPIA completed with the DPO before the pilot starts.",
      },
    ],
    artefacts: [
      { name: "AI literacy plan and record", text: "Measures per role, completion records, review date." },
      { name: "DPIA screening questions", text: "Short check to decide whether a use case needs a full DPIA." },
    ],
    checklist: [
      "AI literacy measures in place and recorded",
      "DPIA screening done for every use case with personal data",
      "DPIAs completed before processing starts",
      "DPO consulted",
    ],
  },
  "regscope-2": {
    items: [
      {
        text: "Each pilot is checked against the EU AI Act categories: prohibited, high-risk, transparency duties or minimal risk.",
        example:
          "CV screening pilot: high-risk, because employment is listed in Annex III. Paused until the requirements are understood. Internal email drafting: minimal risk.",
      },
    ],
    artefacts: [
      { name: "Classification questionnaire", text: "Questions that place a use case in an EU AI Act category." },
      { name: "Classification record", text: "Use case, category, reasoning, reviewer, date." },
    ],
    checklist: [
      "Every pilot classified before it starts",
      "Classification reviewed by legal",
      "Prohibited and high-risk cases escalated",
      "Record kept",
    ],
  },
  "regscope-3": {
    items: [
      {
        text: "Every use case in the register has its classification and the role the organisation plays: provider or deployer.",
        example:
          "Customer chatbot: transparency duty, we are the deployer. Claims model built in-house: we are the provider.",
      },
      {
        text: "One list of the regulations that apply to AI use, with an owner for each.",
        example: "EU AI Act: legal. GDPR: DPO. DORA: ICT risk. Sector rules from the financial supervisor: compliance.",
      },
    ],
    artefacts: [
      { name: "Classification record per use case", text: "Category, provider or deployer role, obligations that follow." },
      { name: "Regulatory register", text: "Regulation, scope, owner, key obligations, review date." },
      { name: "Obligation tracker", text: "Obligation, use cases affected, status, owner." },
    ],
    checklist: [
      "All use cases classified",
      "Provider or deployer role recorded",
      "Regulatory register owned and current",
      "Obligations tracked to completion",
    ],
  },
  "regscope-4": {
    items: [
      {
        text: "If the organisation provides a high-risk AI system, it completes the conformity assessment before putting the system into service.",
        example:
          "Credit scoring model built in-house: technical documentation, risk management system, data governance, human oversight design and a conformity assessment before go-live.",
      },
      {
        text: "High-risk systems are monitored after release, and serious incidents are reported.",
        example:
          "Monthly review of accuracy and bias metrics, complaints and incidents. Serious incidents reported to the market surveillance authority within the legal deadline.",
      },
    ],
    artefacts: [
      { name: "Technical documentation", text: "The documentation set the EU AI Act requires for a high-risk system." },
      { name: "Post-market monitoring plan", text: "Metrics, data sources, review schedule, owner." },
      { name: "Serious incident procedure", text: "What counts as serious, who decides, how and when to report." },
    ],
    checklist: [
      "High-risk systems identified",
      "Conformity assessment done before the system goes into service",
      "Post-market monitoring running",
      "Incident reporting procedure tested",
    ],
  },

  // Model risk management for AI
  "mrm-2": {
    items: [
      {
        text: "The model risk function sees pilots early, so production does not stall later.",
        example:
          "The MRM team reviews the credit memo drafting pilot at design stage and agrees what validation it will need before production.",
      },
    ],
    artefacts: [{ name: "MRM consultation note", text: "Pilot, MRM view, validation expected later, open points." }],
    checklist: [
      "MRM consulted on every pilot in scope",
      "Expected validation agreed before the pilot ends",
      "Advice recorded",
      "Open points tracked",
    ],
  },
  "mrm-3": {
    items: [
      {
        text: "The model risk framework covers LLM-based solutions, including prompts and retrieval.",
        example:
          "The framework treats the prompt, the retrieval set and the vendor model version as parts of the model. In the UK, the PRA's SS1/23 uses a similarly broad definition of a model.",
      },
      {
        text: "Each model asset has a short document describing its purpose, data, limits and test results.",
        example:
          "Card for credit memo drafting: intended use, not for final credit decisions, eval results by segment, known failure modes, owner.",
      },
      {
        text: "Defined events that require the model to be validated again.",
        example: "A new vendor model version, a change to the retrieval set, an eval score drop of more than 5 points, or a new use.",
      },
    ],
    artefacts: [
      { name: "Model card", text: "Purpose, intended and excluded uses, data, test results, limits, owner." },
      { name: "Revalidation trigger list", text: "Trigger, how it is detected, who is notified." },
      { name: "Validation report", text: "Scope, tests, findings, decision, conditions." },
    ],
    checklist: [
      "Framework updated and approved",
      "Every LLM asset in scope has a model card",
      "Revalidation triggers monitored",
      "Revalidation completed before changes go live",
    ],
  },
  "mrm-4": {
    items: [
      {
        text: "Validation evidence comes continuously from monitoring, not only from periodic reviews.",
        example:
          "Eval results, drift metrics and sampled reviews feed a validation dashboard. The MRM team reviews it monthly instead of running a full revalidation once a year.",
      },
    ],
    artefacts: [
      { name: "Validation dashboard specification", text: "Metrics, thresholds, data sources, review schedule." },
      { name: "Monitoring-to-validation mapping", text: "Which monitoring output answers which validation question." },
    ],
    checklist: [
      "Evidence produced automatically",
      "MRM has accepted the evidence format",
      "Threshold breaches trigger a review",
      "Annual summary signed off",
    ],
  },

  // Transparency and disclosure
  "transparency-3": {
    items: [
      {
        text: "People are told when they talk to AI or see AI-generated content. Under Article 50 of the EU AI Act, these duties apply from August 2026.",
        example:
          "The website chatbot opens with \"You are chatting with an AI assistant. You can ask for a person at any time.\" Synthetic images and video in marketing are labelled.",
      },
    ],
    artefacts: [
      { name: "Disclosure standard", text: "Where disclosure is needed, what it must say, where it appears." },
      { name: "Disclosure wording library", text: "Approved wording for chatbots, emails, images, audio and video." },
    ],
    checklist: [
      "Every customer-facing chatbot discloses that it is AI",
      "Generated images and video labelled",
      "Wording approved by legal",
      "Disclosure checked at release",
    ],
  },
  "transparency-4": {
    items: [
      {
        text: "AI-generated content carries a machine-readable mark, so it can be detected later.",
        example:
          "Generated images carry C2PA content credentials. Generated audio and video use the provider's watermark, and the marks are checked before publishing.",
      },
    ],
    artefacts: [
      { name: "Content marking standard", text: "Content types, marking method, how marks are checked." },
      { name: "Generation tool list", text: "Tools in use and whether each one adds a machine-readable mark." },
    ],
    checklist: [
      "Generation tools support machine-readable marking",
      "Marks verified before publishing",
      "Editing steps do not strip the marks",
      "Standard reviewed as technical standards change",
    ],
  },
};
