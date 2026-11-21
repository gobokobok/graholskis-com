# Revolut-style Design Kit

> **Unofficial.** This is a reference built from Revolut's public website and app, plus community write-ups of what they do. Revolut does not publish a design system. Hex values and fonts are close approximations, not brand-approved values. Use it as inspiration for your own product, and don't use Revolut's name, logo or card art.

---

## 1. Principles

1. **Monochrome first.** Near-black and white carry almost every screen. Colour is a signal, not decoration.
2. **Contrast instead of shadows.** Depth comes from stacked surfaces (white on light grey, grey on black), not drop shadows.
3. **Big numbers, quiet labels.** Balances and amounts are the hero. Supporting text is small and grey.
4. **Round everything.** Pill buttons, circular icons, large card radii.
5. **One action per moment.** Each screen has a single primary button; everything else is secondary or a list row.

---

## 2. Colour

### Core

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#191C1F` | Primary text, dark surfaces, primary button background |
| `--paper` | `#FFFFFF` | Page and card background (light) |
| `--surface` | `#F4F4F4` | Grouped sections, inputs, list backgrounds |
| `--surface-2` | `#E8E8EA` | Dividers, pressed states, skeletons |
| `--muted` | `#717173` | Secondary text, captions, timestamps |
| `--subtle` | `#A5A5A7` | Placeholders, disabled text |

### Accent and semantic

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#494FDF` | Links, selected tabs, focus rings, key highlights |
| `--accent-soft` | `#EDEEFC` | Accent chip and badge background |
| `--positive` | `#00A87E` | Incoming money, success, "up" deltas |
| `--negative` | `#E23B4A` | Errors, declines, "down" deltas |
| `--warning` | `#EC7E00` | Pending, needs attention |

### Dark mode

| Token | Hex |
|---|---|
| `--paper` | `#000000` |
| `--surface` | `#191C1F` |
| `--surface-2` | `#26292D` |
| `--ink` | `#FFFFFF` |
| `--muted` | `#8B8D90` |

**Rule of thumb:** about 90% ink/paper/surface, 8% muted grey, 2% accent and semantic colours.

---

## 3. Typography

| Role | Font | Fallback |
|---|---|---|
| Display / headings | **Aeonik Pro** (geometric grotesque, commercial) | Inter Display, Manrope |
| Body / UI | **Inter** | system-ui, -apple-system, sans-serif |
| Numbers | Inter with `font-variant-numeric: tabular-nums` | — |

Sources disagree on whether the display face is Aeonik Pro or Inter everywhere. If you don't have an Aeonik licence, Inter at tight tracking gets you 90% of the look.

### Scale

| Token | Size / line-height | Weight | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | 80 / 84 | 500 | -0.03em | Marketing hero |
| `display-l` | 56 / 60 | 500 | -0.025em | Section heroes |
| `h1` | 40 / 44 | 500 | -0.02em | Page title |
| `h2` | 28 / 32 | 500 | -0.015em | Section title |
| `amount` | 36 / 40 | 600 | -0.02em | Balance, transfer amount |
| `h3` | 20 / 26 | 600 | -0.01em | Card title |
| `body` | 16 / 24 | 400 | 0 | Default text |
| `body-strong` | 16 / 24 | 600 | 0 | List-row primary line |
| `caption` | 14 / 20 | 400 | 0 | List-row secondary line, helper text |
| `micro` | 12 / 16 | 500 | 0.01em | Badges, tab labels |

Headings use **medium (500), not bold**. Bold is reserved for amounts and row titles.

---

## 4. Spacing, radius, elevation

**Spacing (4-pt base):** `4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 120`
- Screen side padding: 16 (mobile), 24 (tablet), 40+ (desktop)
- Gap between cards: 12–16
- Section gap on marketing pages: 80–120

**Radius**

| Token | Value | Use |
|---|---|---|
| `--r-sm` | 8px | Chips, small inputs |
| `--r-md` | 16px | Inputs, small cards |
| `--r-lg` | 20–24px | Cards, sheets |
| `--r-xl` | 32px | Marketing feature panels |
| `--r-pill` | 9999px | Buttons, segmented controls, avatars |

**Elevation:** none by default. Separate layers with colour (`--paper` on `--surface`). Only bottom sheets and menus get a soft shadow: `0 8px 32px rgba(25,28,31,0.12)`.

---

## 5. Components

### Buttons
All pill-shaped, 600 weight, no uppercase.

| Variant | Background | Text | Height |
|---|---|---|---|
| Primary | `--ink` | `--paper` | 48 (52 on mobile CTA) |
| Secondary | `--surface` | `--ink` | 48 |
| Accent | `--accent` | white | 48 |
| Ghost | transparent | `--accent` | 40 |
| Small | `--surface` | `--ink` | 32, 14px text |

Padding 0 24px. Pressed state: scale to 0.97 and darken 6%. Full-width on mobile when it's the screen's main action.

### Circular action buttons
The "Add money / Exchange / Send / More" row: 48px circle in `--surface` (or translucent white on a coloured header), 24px icon, `micro` label underneath, 24px gap between items.

### Balance header
- Small `caption` label ("Personal · EUR") in `--muted`
- `amount` text, with decimals in a smaller size (e.g. **€2,480**.50)
- Account switcher chip below
- Optional gradient or photo background behind; text stays white with sufficient contrast

### List row (transactions, settings)
- Height 64–72px, 16px horizontal padding
- Left: 40px circular avatar or merchant logo
- Middle: `body-strong` title + `caption` subtitle in `--muted`
- Right: amount in `body-strong` (green with `+` for incoming), optional `caption` below
- Rows grouped inside a `--paper` card with `--r-lg`; no dividers, or 1px `--surface-2` inset from the avatar

### Cards
`--paper` on `--surface` page, `--r-lg`, 16–20px padding, no border, no shadow. Card title `h3`, optional "See all" ghost link top-right.

### Inputs
56px tall, `--surface` fill, `--r-md`, no border. Floating label in `--muted`. Focus: 2px `--accent` ring. Error: 2px `--negative` ring plus `caption` message.

### Amount entry
Huge centred number (48–56px, 600), currency selector pill beside it, numeric keypad below. Conversion rate shown as a `caption` chip.

### Segmented control / tabs
Pill track in `--surface`, active segment is a `--paper` pill (light) or `--ink` pill with white text. 36px tall, `micro`/`caption` labels.

### Chips and badges
24–28px tall, pill radius, `micro` text. Neutral: `--surface`. Accent: `--accent-soft` + `--accent` text. Status: tinted semantic background at ~12% opacity.

### Bottom sheet
`--paper`, top radius 24px, 36×4px grabber in `--surface-2`, 24px padding, single primary button pinned at the bottom.

### Bottom navigation
5 items, 24px outline icons, `micro` labels, active = `--ink`, inactive = `--subtle`. No background colour change; thin top hairline only.

---

## 6. Iconography and imagery

- **Icons:** 24px grid, 1.5–2px stroke, rounded caps and joins, outline by default, filled for active nav states.
- **Avatars:** circular; initials on a pastel tint when no photo.
- **Marketing imagery:** large 3D-rendered objects or bold product shots on flat or soft-gradient backgrounds, lots of empty space, phones shown at slight angles.
- **Gradients:** used on cards and balance headers, saturated (violet → blue, pink → orange), never on buttons or text.

---

## 7. Motion

| Use | Duration | Easing |
|---|---|---|
| Button press | 100ms | ease-out |
| Sheet open / close | 300ms | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| Screen push | 350ms | same |
| Number change (balance) | 400ms | count-up / rolling digits |
| Success state | 600ms | check draw + light haptic |

Keep motion purposeful: confirm actions, show where things came from. Respect `prefers-reduced-motion`.

---

## 8. Voice

- Short, direct, second person: "You sent €20 to Anna."
- Sentence case everywhere; no all-caps.
- Numbers formatted for the user's locale, currency symbol always shown.
- Errors say what happened and what to do next in one line.

---

## 9. CSS tokens (drop-in)

```css
:root {
  --ink: #191c1f;
  --paper: #ffffff;
  --surface: #f4f4f4;
  --surface-2: #e8e8ea;
  --muted: #717173;
  --subtle: #a5a5a7;
  --accent: #494fdf;
  --accent-soft: #edeefc;
  --positive: #00a87e;
  --negative: #e23b4a;
  --warning: #ec7e00;

  --font-display: "Aeonik Pro", "Inter Display", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;

  --r-sm: 8px;
  --r-md: 16px;
  --r-lg: 24px;
  --r-xl: 32px;
  --r-pill: 9999px;

  --shadow-sheet: 0 8px 32px rgba(25, 28, 31, 0.12);
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --ink: #ffffff;
    --paper: #000000;
    --surface: #191c1f;
    --surface-2: #26292d;
    --muted: #8b8d90;
    --subtle: #5c5f63;
    --accent-soft: #23255a;
  }
}

body {
  background: var(--paper);
  color: var(--ink);
  font: 400 16px/24px var(--font-body);
  -webkit-font-smoothing: antialiased;
}

h1, h2, .display {
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: -0.02em;
}

.amount {
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.btn {
  height: 48px;
  padding: 0 24px;
  border: 0;
  border-radius: var(--r-pill);
  font: 600 16px/1 var(--font-body);
  transition: transform 100ms ease-out, background 100ms;
}
.btn:active { transform: scale(0.97); }
.btn-primary   { background: var(--ink);     color: var(--paper); }
.btn-secondary { background: var(--surface); color: var(--ink); }
.btn-accent    { background: var(--accent);  color: #fff; }

.card {
  background: var(--paper);
  border-radius: var(--r-lg);
  padding: 20px;
}

.input {
  height: 56px;
  padding: 0 16px;
  background: var(--surface);
  border: 0;
  border-radius: var(--r-md);
  font: 400 16px var(--font-body);
}
.input:focus { outline: 2px solid var(--accent); outline-offset: 0; }
```

---

## 10. Checklist before shipping a screen

- [ ] Is there exactly one primary (black or accent) button?
- [ ] Are amounts the largest text on the screen?
- [ ] Is colour only used for meaning (accent, positive, negative)?
- [ ] No drop shadows except sheets and menus?
- [ ] Headings at weight 500, not bold?
- [ ] Every interactive element at least 44px tall?
- [ ] Works in dark mode?
