// Checks the built site (dist/): every internal link, anchor and asset must exist.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const dist = "dist";
const pages = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : extname(p) === ".html" && pages.push(p);
  }
})(dist);

const urlToFile = (u) => {
  const clean = u.split("#")[0].split("?")[0];
  const base = join(dist, clean);
  for (const c of [base, base + ".html", join(base, "index.html")]) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
};
const ids = (file) => new Set([...readFileSync(file, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

let bad = 0;
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const here = "/" + page.slice(dist.length + 1).replace(/index\.html$/, "");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(u)) continue;
    const target = u.startsWith("#") ? here : u;
    const file = urlToFile(target === here && u.startsWith("#") ? here : target);
    if (!file) {
      console.log(`BROKEN  ${page}: ${u}`);
      bad++;
      continue;
    }
    const hash = u.includes("#") ? u.split("#")[1] : "";
    if (hash && !ids(file).has(hash)) {
      console.log(`NO ANCHOR  ${page}: ${u}`);
      bad++;
    }
  }
}
console.log(bad ? `${bad} problem(s)` : `OK: ${pages.length} pages, all internal links resolve`);
process.exit(bad ? 1 : 0);
