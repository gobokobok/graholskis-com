# graholskis.com

Astro 6 + Tailwind 4 + MDX. Static build, served by Caddy on Railway (see `Dockerfile`).

## Where things live
- `src/config.ts`: every placeholder (calendar link, form key, checkout links, prices, domain) marked TODO, plus the content arrays for services, work, labs, workshops, resources and earlier work. Adding a lab tile or a resource is one entry.
- `src/pages/index.astro`: the landing page. `src/pages/cases/[slug].astro`: case pages, content in `src/data/cases.ts`.
- `src/styles/global.css`: design tokens and components ("Monochrome Console"). Fonts: Poppins for titles (`--font-head`), Schibsted Grotesk for body text (`--font`), Fragment Mono for labels. All self-hosted through @fontsource.

## Commands
```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run check     # after a build: internal links, anchors, copy rules
```

## Forms
The contact form and the checklist email capture use Web3Forms (free). Set `web3formsKey` in `src/config.ts`. Until then they open an email instead.
