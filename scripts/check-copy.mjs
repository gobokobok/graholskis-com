// Copy rules: no em dashes anywhere; no banned words on the landing page and earlier-work page.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const banned = /\b(transformative|cutting-edge|leverage[sd]?|leveraging|unlock(s|ed|ing)?|passionate|journey(s)?)\b/i;
const strict = new Set(["dist/index.html", "dist/earlier-work/index.html"]);
let bad = 0;
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (extname(p) !== ".html") continue;
    // visible text only: drop scripts, styles and JSON-LD
    const text = readFileSync(p, "utf8").replace(/<(script|style)[\s\S]*?<\/\1>/g, "").replace(/<[^>]+>/g, " ");
    if (text.includes("—")) { console.log(`EM DASH  ${p}`); bad++; }
    if (strict.has(p)) {
      const m = text.match(banned);
      if (m) { console.log(`BANNED WORD "${m[0]}"  ${p}`); bad++; }
    }
  }
})("dist");
console.log(bad ? `${bad} problem(s)` : "OK: copy rules hold");
process.exit(bad ? 1 : 0);
