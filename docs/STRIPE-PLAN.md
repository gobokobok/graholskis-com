# Stripe integration plan — graholskis.com

Business: Digitalisation and AI Automation Consulting (EU-based, B2B-first).
Stripe products: Payments, Invoicing, Tax.
Site today: static Astro build served by Caddy in Docker — **no backend, no Stripe code yet**.

Built from Stripe's own best-practice guidance (stripe-best-practices skill, API version `2026-10-28.endive`).
The `stripe_implementation_planner` MCP tool was not reachable in this session; re-run it later and diff against this file.

---

## 1. Which Stripe surface for which kind of sale

| Sale type | Example | Stripe surface | Code needed |
| --- | --- | --- | --- |
| Fixed-price package | Workshop seat, AI readiness audit, 2-hour advisory call | **Payment Links** (+ Stripe Tax) | Only a link/button on the site |
| Project / milestone / custom quote | Automation build, discovery phase, deposit + balance | **Stripe Invoicing** (hosted invoice page + PDF) | None — Dashboard |
| Monthly retainer | "Fractional AI lead", support hours | **Invoicing with a subscription** (`collection_method: send_invoice`) or a Payment Link in subscription mode | None at first |

Stripe's own order of preference is Payment Links → Checkout → Payment Element. For a consulting business, Payment Links + Invoicing cover nearly everything without a server.

## 2. Phase 0 — account and environment

1. **Use a sandbox** (Dashboard → Sandboxes), not the shared test mode, for building and testing.
2. **Restricted API key (`rk_…`)**, not the secret key (`sk_…`), for any script or server code. Grant only the resources it uses (Products, Prices, Payment Links, Invoices, Customers, Tax read).
3. Keys live in `.env` (already gitignored) or the server's secret store — never in the Astro build, never in git, never in chat.
4. Turn on 2FA for every Dashboard user.
5. Branding (Settings → Branding): logo, colours matching the site, so invoices and checkout pages look like graholskis.com.
6. Public details: legal entity name, VAT number, support email, statement descriptor (e.g. `GRAHOLSKIS`).

## 3. Phase 1 — Stripe Tax (do this before any live sale)

Order matters; skipping step 2 is the #1 Stripe Tax mistake (tax silently = 0).

1. **Head office address** in Tax → Settings. Until it's set, tax status stays `pending` and nothing is calculated.
2. **Registrations** in Tax → Locations: record every jurisdiction where you are *already* registered (your home-country VAT, plus any OSS registration if applicable). Adding a registration in Stripe does **not** register you with the tax authority. Which EU VAT scheme applies (domestic only, Union OSS, etc.) is a call for you and your tax advisor — see Stripe's [EU tax guidance](https://docs.stripe.com/tax/supported-countries/european-union.md).
3. **Product tax code**: set one preset code for consulting services in Tax → Settings (and per product where different, e.g. a recorded online course vs. live consulting). Pick from Stripe's [tax code guide](https://docs.stripe.com/tax/tax-codes.md) / [Tax Codes API](https://docs.stripe.com/api/tax_codes.md) — look at the professional/consulting services codes and, for any AI-delivered product, the [AI services codes](https://docs.stripe.com/tax/ai.md). Confirm the choice with your advisor; don't use the Nontaxable code.
4. **Tax behaviour**: B2B pricing in the EU is usually quoted *exclusive* of VAT — set default tax behaviour to `exclusive` (or `inclusive` if your public prices include VAT). Be consistent with the prices shown on the site.
5. **B2B reverse charge**: enable **tax ID collection** on every Payment Link, and store the client's VAT ID on the Customer for invoices. Without a valid VAT ID, a cross-border EU B2B sale is taxed as B2C.
6. **Verify**: in the sandbox, run a test tax calculation (or a test payment) for (a) a domestic business, (b) an EU business in another country with a VAT ID, (c) a non-EU client. Check `taxability_reason` — `not_collecting` means setup is broken; `reverse_charge` is what you expect for (b).
7. **Monitoring**: Tax → Locations → *Needs attention* flags possible new obligations (live-mode only). Review with your advisor.
8. **Filing**: Stripe Tax calculates and reports; it doesn't file EU VAT returns for you. Use Tax → Reports for your VAT return / OSS return, or a filing partner.

## 4. Phase 2 — Payments via Payment Links (fixed-price offers)

1. Create a **Product + Price** for each fixed offer (one-time; currency EUR).
2. Create a **Payment Link** for each with:
   - Automatic tax **on**
   - **Tax ID collection on** (lets businesses enter their VAT ID → reverse charge)
   - Collect **business name** and billing address
   - Payment methods: leave on the dynamic default (cards, Apple/Google Pay, SEPA Debit, Link, etc. per Dashboard settings) — don't restrict to cards only
   - After-payment: redirect to a thank-you page on the site (e.g. `/thank-you`) with a link to book the session (Calendly/Cal.com)
   - Custom field if needed ("Company / project name")
3. Put the links on the site as plain `<a href="https://buy.stripe.com/…">` buttons — e.g. on `src/pages/workshops/` and a pricing/offers section on `index.astro`. Keep the URLs in `src/config.ts` so test/live links swap in one place.
4. Receipts: turn on automatic email receipts (Settings → Emails) so the client gets a receipt with VAT breakdown.

## 5. Phase 3 — Invoicing (projects, milestones, retainers)

1. Settings → Invoices: default payment terms (e.g. 14 days), footer with legal entity + VAT number, invoice numbering prefix, memo text.
2. Customers: create each client with legal name, billing address, **VAT ID** (needed for reverse charge and for a compliant invoice).
3. Invoices: line items per milestone, **automatic tax on**, send via email → client pays on the Stripe hosted invoice page (card or SEPA/bank transfer). Enable bank transfer for larger invoices to avoid card fees.
4. Deposits: send a deposit invoice up front, balance invoice on delivery.
5. Retainers: a subscription with `collection_method: send_invoice` and automatic tax on, so a tax-calculated invoice goes out each month.
6. Automatic reminders and Smart Retries: Settings → Billing → Automatic collection / reminders.
7. Refunds/credits: issue **credit notes** on the invoice (Stripe Tax adjusts the tax liability automatically).

## 6. Phase 4 — webhooks and automation (required before anything happens automatically after payment)

Today nothing in code reacts to a payment — you deliver the service personally, so Stripe's own emails cover notification. The moment you want **anything automatic** (confirmation email with booking link, CRM entry, Slack/Telegram ping, retainer status), a webhook endpoint is **required**, not optional:

- Small service next to the site (e.g. a Node endpoint behind the existing Caddy, or a serverless function), using a `StripeClient` instance with the restricted key.
- **Verify the signature** on every event with the endpoint's signing secret (in `.env`).
- Events to handle:
  - Payment Links / Checkout: `checkout.session.completed` **and** `checkout.session.async_payment_succeeded` (fulfil only when `payment_status` isn't `unpaid` — SEPA Debit settles days later), `checkout.session.async_payment_failed`
  - Invoicing: `invoice.paid`, `invoice.payment_failed`, `invoice.overdue`
  - Retainers: `customer.subscription.created/updated/deleted`
  - Risk: `charge.dispute.created`, `charge.refunded`
- Never fulfil from the thank-you page — clients can pay and close the tab before it loads.

## 7. Phase 5 — optional later: on-site Checkout

Only if you want a custom flow (e.g. picking a workshop date, quantity of seats, coupon logic): add a server endpoint that creates a **Checkout Session** (`mode: payment`, `automatic_tax: {enabled: true}`, `tax_id_collection: {enabled: true}`, no `payment_method_types`, with an `integration_identifier`). This needs the Phase 4 server anyway.

## 8. Go-live checklist

- [ ] Live-mode Tax settings: head office address set, registrations **added in live mode** (sandbox ones don't carry over), preset tax code + behaviour
- [ ] Test calculations show expected `taxability_reason` for domestic / EU B2B / non-EU
- [ ] Live Payment Links recreated (sandbox links don't work in live) and swapped into `src/config.ts`
- [ ] Invoice settings + branding done in live mode
- [ ] Restricted live key created, stored only in server secrets
- [ ] Payout bank account verified
- [ ] Terms page (`/terms`) and privacy page cover payments, refunds and cancellations
- [ ] Webhook endpoint live (if any automation exists) and signing secret set
- [ ] [Stripe go-live checklist](https://docs.stripe.com/get-started/checklist/go-live.md) reviewed

## 9. Decisions waiting on you

1. Which offers are fixed-price (→ Payment Links) and their prices — inc. or excl. VAT on the site?
2. Your VAT registrations (country, OSS or not) — confirm with your advisor.
3. Tax code choice from Stripe's list.
4. Do you want any automation after payment now (→ Phase 4 server), or is Dashboard + Stripe emails enough to start?
