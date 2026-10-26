// AI capability matrix: domains as bands, capabilities as rows, maturity levels as columns.
// Content from the workshop coverage matrix, without the workshop layer, with the review's must-fix changes
// (autonomy levels A0-A3, named training tracks, incident management at L2, glossary).
// A cell is a ";"-separated list of what is added at that level; null means nothing new at that level.

export interface Level {
  n: number;
  name: string;
  /** One line under the column heading. TODO: review wording. */
  line: string;
}

/** F = needed by every organisation, C = needed once you use that kind of AI, I = depends on industry. */
export type CapabilityType = "F" | "C" | "I";

export interface Capability {
  id: string;
  name: string;
  type: CapabilityType;
  cells: [string | null, string | null, string | null, string | null];
}

export interface Domain {
  n: number;
  name: string;
  caps: Capability[];
}

export const levels: Level[] = [
  { n: 1, name: "Enable safely", line: "People use approved AI tools under clear rules." },
  { n: 2, name: "Prove repeatable value", line: "First pilots are measured against a baseline." },
  { n: 3, name: "Industrialise", line: "AI is built and run like other production systems." },
  { n: 4, name: "Controlled autonomy", line: "Agents act in systems, within owned and monitored limits." },
];

export const typeLabel: Record<CapabilityType, string> = {
  F: "Foundational",
  C: "Conditional",
  I: "Industry-dependent",
};

export const typeHelp: Record<CapabilityType, string> = {
  F: "Every organisation needs this.",
  C: "Only needed if you use that technology, such as retrieval, connectors or agents.",
  I: "Depends on your industry and regulator.",
};

export const domains: Domain[] = [
  {
    n: 1,
    name: "Strategy and value realisation",
    caps: [
      { id: "strat", name: "AI strategy and target architecture", type: "F", cells: ["AI ambition statement; investment principles; approved-tool direction", "Target capability map; roadmap from assessment; architecture principles", "Target architecture governed by EA board; reuse-first patterns", "Build, buy or partner decision per capability; strategy adapted to agent economics"] },
      { id: "portfolio", name: "Use-case portfolio", type: "F", cells: ["Team backlogs; candidate list from the AI at Work track; owner per idea", "Value and risk scoring; top 3-5 prioritised; lighthouse pilot selected", "Portfolio board; funding decisions; stage-gate reviews", "Rebalancing on realised value; stop decisions; autonomy candidates identified"] },
      { id: "baselines", name: "Baselines and benefits", type: "F", cells: ["Adoption baseline; self-reported time saved", "Baseline per pilot; success metrics; measured vs baseline", "Benefits tracked in production; finance sign-off", "Continuous value reporting; value per agent"] },
      { id: "process", name: "Process redesign", type: "F", cells: [null, "One process redesigned around a pilot; roles and controls updated", "Several processes redesigned; control points moved", "Human + agent process design; decision rights redefined"] },
    ],
  },
  {
    n: 2,
    name: "People, skills and operating model",
    caps: [
      { id: "opmodel", name: "Operating model and decision rights", type: "F", cells: ["User owns the output; CoE decides approved tools", "Named business owner per pilot; approval roles defined", "Federated model (central, hub, teams); service owner per production asset; support model", "Accountable owner per agent; human and agent decision rights"] },
      { id: "coe", name: "AI CoE and champions", type: "F", cells: ["CoE formed; champions named; support channel", "Champions active per team; community of practice", "Asset stewards; CoE owns ADLM and catalogue", "CoE runs as platform team; internal product management"] },
      { id: "training", name: "Training tracks", type: "F", cells: ["AI at Work track for all; data rules; verification habits", "Practitioner track in cohorts; use-case sprints", "Engineering and Production AI track; ADLM onboarding", "Continuous role-based learning; agent supervision skills"] },
      { id: "adoption", name: "Adoption measurement", type: "F", cells: ["Active users; usage per department (vendor logs)", "Usage per use case", "Adoption linked to benefits", null] },
    ],
  },
  {
    n: 3,
    name: "Governance, risk and compliance",
    caps: [
      { id: "policy", name: "AI policy and acceptable use", type: "F", cells: ["Approved tools; data rules; accountability; prohibited uses; exception route", "References risk tiers and approvals", "Linked to ADLM stage gates; annual review", "Autonomy rules"] },
      { id: "inventory", name: "Use-case inventory", type: "F", cells: ["Register: owner, purpose, data, decision fed", "Intake form; risk-based approval", "Linked to catalogue; lifecycle status incl. retirement", "Agents registered with autonomy level"] },
      { id: "vendor", name: "Vendor and third-party risk", type: "F", cells: ["Vendor assessment; DPA; third-party register entry", "Assessment per new provider or connector", "Exit plans; concentration risk", null] },
      { id: "tiering", name: "Risk tiering", type: "F", cells: [null, "Tier per use case; tiering rubric", "Required evidence per tier; review depth per tier", "Tier drives allowed autonomy level"] },
      { id: "oversight", name: "Autonomy and human oversight", type: "F", cells: ["Human reviews all outputs", "Manual-review thresholds; abstention", "Oversight defined per risk tier", "Autonomy levels A0-A3; approval points"] },
      { id: "regscope", name: "Regulatory scope", type: "F", cells: ["AI literacy duty; DPIA where needed", "Classification check per pilot", "Classification per use case; regulatory register", "Conformity for high-risk systems; post-market monitoring"] },
      { id: "mrm", name: "Model risk management for AI", type: "I", cells: [null, "MRM consulted on pilots", "Framework covers LLM assets; model cards; revalidation triggers", "Continuous validation evidence"] },
      { id: "transparency", name: "Transparency and disclosure", type: "I", cells: [null, null, "Disclosure for chatbots and generated content", "Machine-readable content marking"] },
    ],
  },
  {
    n: 4,
    name: "Data and knowledge",
    caps: [
      { id: "classification", name: "Data classification", type: "F", cells: ["Prompt rules per data class", "Enforced via masking and DLP", "Automated tagging", null] },
      { id: "retrieval", name: "Retrieval and knowledge", type: "C", cells: ["File upload; shared projects", "Team knowledge assistant; citations", "Shared retrieval platform; inherited permissions", "Agents retrieve under own identity"] },
      { id: "dataprod", name: "Governed data products", type: "C", cells: [null, "Curated extracts for pilots", "Owned data products; catalog-based access (e.g. Unity Catalog); column masks", "Agent-level attribute-based access"] },
      { id: "synthetic", name: "Synthetic data", type: "I", cells: [null, "Synthetic sets for dev and test", "Shared generators; fidelity checks", null] },
    ],
  },
  {
    n: 5,
    name: "AI platforms and model access",
    caps: [
      { id: "sso", name: "SSO and approved tools", type: "F", cells: ["Corporate SSO; licences per user group", "Power-user tooling (e.g. Claude Code)", null, null] },
      { id: "modelaccess", name: "Enterprise model access", type: "F", cells: ["No-training terms; EU processing; DPA", "Second provider; model allow-list", "Model selection policy per use case", null] },
      { id: "gateway", name: "Model gateway", type: "C", cells: [null, "Single endpoint; keys per team; rate limits", "Routing; fallback; quotas", "Agent traffic; per-agent policies"] },
      { id: "pii", name: "PII masking and DLP", type: "C", cells: [null, "Masking on egress", "Policies per data class; controlled re-identification", null] },
      { id: "agentid", name: "Agent identities and RBAC", type: "C", cells: [null, null, "Service principal per workflow", "Least privilege per agent; credential rotation"] },
      { id: "guardrails", name: "Output guardrails", type: "I", cells: [null, "Basic output checks", "Guardrails per use case; LLM judges", "Runtime guardrails on agent actions"] },
      { id: "custom", name: "Model customisation", type: "I", cells: [null, null, "Fine-tuning when evals justify it; model registry", null] },
    ],
  },
  {
    n: 6,
    name: "AI solutions and integration",
    caps: [
      { id: "patterns", name: "Solution patterns", type: "F", cells: ["Chat; drafting; document Q&A", "Workflows with an LLM step; extraction; classification", "Integrated apps; RAG in production", "Agents acting in systems"] },
      { id: "mcp", name: "Connectors (MCP)", type: "C", cells: [null, "A few approved read-only connectors", "Connector registry with owners", "Write-capable tools under approval"] },
      { id: "orch", name: "Orchestration", type: "C", cells: [null, null, null, "Multi-agent orchestration where justified"] },
    ],
  },
  {
    n: 7,
    name: "Engineering, evaluation and lifecycle",
    caps: [
      { id: "adlm", name: "Unified delivery and lifecycle (ADLM)", type: "F", cells: [null, "Method per pilot team; plan before code; tests before push", "One method across teams and asset types; stage gates; evidence by risk tier; enforced by templates and CI", "Agents follow it as builders and as managed assets"] },
      { id: "repos", name: "Repos and templates", type: "F", cells: [null, "Central repos; CLAUDE.md; permission settings", "Template per asset type; CODEOWNERS", null] },
      { id: "eval", name: "Eval harness", type: "F", cells: ["Manual spot checks", "Eval set and baseline per pilot; held-out data", "Shared harness; standard metrics", "Continuous automated evals"] },
      { id: "catalog", name: "AI asset catalogue", type: "F", cells: [null, "v1: owner, version, risk tier", "Stewards; pinned releases; deprecation", "Agents listed with autonomy level"] },
      { id: "cigates", name: "CI eval gates and releases", type: "F", cells: [null, null, "Regression gates; tagged releases", "Red-team suites in CI"] },
      { id: "sectest", name: "Security testing", type: "F", cells: [null, "Prompt-injection checks for pilots", "Security review in release", "Continuous adversarial testing"] },
    ],
  },
  {
    n: 8,
    name: "Production operations and assurance",
    caps: [
      { id: "logging", name: "Logging and cost", type: "F", cells: ["Vendor admin logs", "Gateway request logs; cost per use case", "Chargeback; budgets and alerts", "Cost per agent action"] },
      { id: "lineage", name: "Lineage and audit (shared with data)", type: "F", cells: [null, "Decision log; versions in Git", "Immutable audit store; run IDs", "Agent actions traced end to end"] },
      { id: "monitoring", name: "Monitoring and drift", type: "F", cells: [null, null, "Quality sampling; drift alerts", "Continuous monitoring; automatic rollback"] },
      { id: "incident", name: "Incident management", type: "F", cells: ["Reporting channel for AI issues", "Pilot issues logged and reviewed by the owner", "AI incidents in ITSM; runbooks", "Kill-switch drills"] },
      { id: "resilience", name: "Service resilience and continuity", type: "F", cells: [null, "Manual fallback process for pilots", "Provider fallback; recovery targets for AI services; ICT risk coverage", "Agent failure handling tested; safe stop and recovery"] },
      { id: "runtime", name: "Agent runtime", type: "C", cells: [null, null, null, "Sandbox; human approvals; kill switch"] },
    ],
  },
];

/** Abbreviations used in the matrix. The panel lists the ones a capability uses; the page lists all. */
export const glossary: { term: string; text: string }[] = [
  { term: "ADLM", text: "One delivery and lifecycle method for all AI assets, from plan and build to release, change and retirement." }, // TODO: confirm the expansion
  { term: "CI", text: "Continuous integration: automated checks that run on every change." },
  { term: "CoE", text: "Centre of Excellence: the central team that sets standards and supports AI use." },
  { term: "DLP", text: "Data loss prevention: controls that stop sensitive data leaving the organisation." },
  { term: "DPA", text: "Data processing agreement with a provider that handles personal data." },
  { term: "DPIA", text: "Data protection impact assessment, required under GDPR for high-risk processing." },
  { term: "EA", text: "Enterprise architecture." },
  { term: "ICT", text: "Information and communication technology." },
  { term: "ITSM", text: "IT service management: the tools and process for incidents, changes and requests." },
  { term: "LLM", text: "Large language model." },
  { term: "MCP", text: "Model Context Protocol: an open standard for connecting AI models to tools and data." },
  { term: "MRM", text: "Model risk management: the function that validates models before and during use." },
  { term: "PII", text: "Personally identifiable information." },
  { term: "RAG", text: "Retrieval-augmented generation: the model answers from documents retrieved for the question." },
  { term: "RBAC", text: "Role-based access control." },
  { term: "SSO", text: "Single sign-on." },
];

/** Glossary entries whose term appears in a capability's name or cells. */
export const termsIn = (c: Capability) => {
  const text = [c.name, ...c.cells].filter(Boolean).join(" ");
  return glossary.filter((g) => new RegExp(`\\b${g.term}\\b`).test(text));
};

/** Splits a cell into its items. The first item is the cell's headline in the matrix. */
export const items = (cell: string | null): string[] => (cell ? cell.split(";").map((s) => s.trim()).filter(Boolean) : []);
