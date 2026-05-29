# GreenNest — Sustainable Urban Gardening Platform (Phase 1 + 2)

**Date:** 2026-05-29
**Status:** Approved for implementation (user opted to build via ralph loop)
**Repo:** Greenest (github.com/ChinYang123/Greenest), branch `main`

## 1. Summary

Rebuild the existing single static `index.html` GreenNest landing page into a
full **Astro** static site for GreenNest, the online platform of parent company
**CityGarden** (a Malaysian eco urban-gardening company). Scope is **Phase 1
(marketing/content site) + Phase 2 (interactive "Design Your Garden"
configurator + rule-based plant recommendation)**. No backend, no database, no
real checkout/accounts — those are deferred to Phase 3.

## 2. Locked Decisions

| Topic | Decision |
|-------|----------|
| Scope | Phase 1 + Phase 2 only. Exclude Dashboard + real cart/checkout (Phase 3). |
| Tech stack | **Astro**, `output: 'static'`. Vanilla TS island for the configurator (no UI framework). |
| Brand | Site name **GreenNest**. **CityGarden** = parent company (footer + About). |
| Language | **Bilingual EN + ZH** with switcher, via Astro i18n routing (`/en/*`, `/zh/*`), default `en`. |
| Forms/transactions | **Pure front-end mock** — submit shows a success toast, nothing is sent. Includes Buy/Shop. |
| Configurator | **Visual configurator (level 2)**: quiz inputs → animated analyze → result with recommended kit, recommended plants, a visual grid layout, computed price. |
| Plant recommendation | **Rule-based** scoring over a `plants.ts` JSON dataset. |
| Visual design | **Keep & extend** existing green design tokens (`--primary:#2E7D32`, Inter + Outfit, card/shadow style). |

## 3. Architecture

- Astro static site. Builds to `dist/`; deployable to any static host.
- i18n: Astro built-in. Default `en`, second `zh`. URLs `/en/products`, `/zh/products`. Root `/` redirects to `/en/`.
- UI strings live in `src/i18n/ui.ts` dictionaries; page body copy resolved via a `t()` helper. Blog posts split by language folder.
- Only the configurator hydrates on the client (`client:visible`), implemented in vanilla TS.

### Project structure

```
Greenest/
├── astro.config.mjs          # Astro config + i18n (en default, zh)
├── package.json / tsconfig.json
├── public/images/            # placeholder images, favicon, og image
└── src/
    ├── styles/global.css      # ported design tokens + base styles from old styles.css
    ├── i18n/
    │   ├── ui.ts              # en/zh UI string dictionaries
    │   └── utils.ts           # getLangFromUrl(), useTranslations(), getLocalizedPath()
    ├── data/
    │   ├── products.ts        # 3 kits (bilingual fields, price, features, specs)
    │   ├── plants.ts          # plant dataset for recommendation
    │   └── team.ts            # CityGarden leadership for About
    ├── content/
    │   ├── config.ts          # content collection schema (category: 'blog' | 'diy')
    │   └── blog/{en,zh}/*.md   # >=3 sample posts per lang incl. >=1 DIY guide
    ├── layouts/BaseLayout.astro   # <head> (per-lang title/meta/og), Navbar, Footer, html lang
    ├── components/
    │   ├── Navbar.astro            # responsive, working mobile drawer (not alert)
    │   ├── Footer.astro            # CityGarden info, social, nav, contact
    │   ├── LanguageSwitcher.astro  # toggles en<->zh keeping current path
    │   ├── Button.astro / Card.astro / SectionHeader.astro / Badge.astro
    │   ├── ProductCard.astro
    │   ├── MockForm.astro          # configurable fields; submit -> success toast
    │   ├── Toast.astro             # shared toast used by MockForm + configurator
    │   └── garden-designer/
    │       ├── GardenDesigner.astro   # island wrapper + markup
    │       └── designer.ts            # vanilla TS: state, scoring, grid render
    └── pages/
        ├── index.astro             # redirect -> /en/
        ├── en/{index,products,vertical-garden,roof-garden,community,
        │       gallery,consultation,contact,about,design-your-garden}.astro
        ├── en/blog/{index.astro,[slug].astro}
        └── zh/ (identical structure + content)
```

### Cleanup
- Delete legacy `index.html`, `styles.css`, `script.js`, and the unrelated `home.html`.
- Port design tokens from old `styles.css` into `src/styles/global.css`.
- Rewrite `README.md` to document the Astro project (install / dev / build).

## 4. Pages (Phase 1)

Each exists under both `/en/` and `/zh/`.

1. **Home** — port existing landing sections: hero (with a CTA to the configurator), problem, AI/recommendation teaser, featured products, benefits, testimonials, final CTA.
2. **Products / Shop** — catalog of the 3 kits; "Buy"/"Add to cart" = mock toast.
3. **Vertical Garden** — product category detail/info.
4. **Roof Garden Service** — service info + inquiry MockForm.
5. **Community Program** — program info + registration MockForm.
6. **Gallery** — responsive image grid with placeholder images + lightbox optional.
7. **Blog** — list from content collection; **DIY Guide** = posts with `category: 'diy'` (filterable). `[slug]` renders a post.
8. **Book Consultation** — booking MockForm (name, contact, space type, preferred date).
9. **Contact** — contact MockForm + company info/map placeholder.
10. **About** — CityGarden story, mission/vision, leadership team (from `team.ts`).

Excluded (Phase 3): Dashboard, real cart/checkout/payment.

## 5. Phase 2 — Design Your Garden configurator

Route: `/en/design-your-garden`, `/zh/design-your-garden`. Hydrated vanilla TS island.

**Flow (3 steps, single page, no reload):**
1. **Inputs:** space type (Balcony / Rooftop / Indoor), size (Small ~2×3m / Medium / Large), sunlight (Full sun / Partial shade / Low light), goal (Vegetables / Flowers / Decorative / Mixed), budget (slider RM100–RM2000).
2. **Analyze:** reuse existing scanner animation (~1.2s) for feel.
3. **Result:**
   - **Matched kit** from `products.ts` (by space + budget) with a **match %**.
   - **Recommended plants:** top 6 from `plants.ts` via scoring (below).
   - **Visual layout:** CSS-grid representing the space; size → slot count (S=6, M=12, L=20). Recommended plants placed into slots showing emoji/icon + name. Responsive.
   - **Price estimate:** kit price + sum of placed plant prices, live.
   - **Actions:** "Add to cart" (mock toast), "Book consultation" (link), "Start over".
   - Persist last config to `localStorage` (restore on return).

**Plant recommendation algorithm (rule-based):**
- Plant fields: `id`, `name{en,zh}`, `type` (vegetable|flower|decorative|herb), `sunlight` (full|partial|low), `spaceFit` (array of balcony|rooftop|indoor), `difficulty` (easy|medium|hard), `waterNeed` (low|medium|high), `emoji`, `priceRM`.
- Hard filter: drop plants whose `sunlight` is incompatible with the user's sunlight (allow equal or easier light requirement).
- Score (weighted): sunlight exact match +5; goal/type match +4 (Mixed matches any); spaceFit includes user space +3; difficulty `easy` +1 (beginner-friendly). Sort desc, take top 6.
- Kit match %: normalize chosen kit's fit score to a 80–99% display range (always reads positive, demo-friendly).

## 6. Data, errors, edge cases

- **Data** is typed TS (`products.ts`, `plants.ts`, `team.ts`) with bilingual string fields `{en, zh}`; components pick by current lang. Seed: 3 products, ≥18 plants spanning all type/sunlight combos, 5 team members, ≥4 blog posts (≥1 DIY).
- **Mock forms:** client-side required-field validation; on submit `preventDefault`, show success Toast, reset form. No network.
- **i18n fallback:** missing key → fall back to `en` string (never blank).
- **Configurator edge cases:** no plant passes filter → show friendly "broaden your criteria" message; budget below cheapest kit → recommend cheapest kit and note it; grid never overflows slot count.
- **Accessibility:** semantic landmarks, alt text, keyboard-focusable controls, color-contrast on green palette, `lang` attribute per locale.

## 7. Verification / Definition of Done

The ralph loop is "done" when **all** hold:

1. `npm install` succeeds; `npm run build` exits 0 with no errors.
2. `npm run dev` serves; **every** page in §4 + §5 loads in both `/en` and `/zh` with no console errors.
3. Language switcher toggles en↔zh preserving the current page.
4. Configurator: completing the quiz renders a kit, ≥1 recommended plant, a visual grid, and a price; "Start over" resets; invalid/empty handled.
5. All mock forms validate and show a success toast; no unhandled network calls.
6. Legacy `index.html`, `styles.css`, `script.js`, `home.html` removed; no dead links; nav links resolve.
7. Responsive at 375px / 768px / 1280px; mobile menu opens a real drawer.
8. `README.md` documents install/dev/build (bilingual not required for README).
9. Build output committed; spec checklist items all checked.

## 8. Out of scope (Phase 3, do NOT build)

Real e-commerce cart/checkout/payment, user accounts/auth, Dashboard, real booking backend/calendar, CMS, server/API, email delivery.
