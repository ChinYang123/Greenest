# Task

Implement the approved brainstorm spec at `.unipi/docs/specs/2026-05-30-citygarden-website-alignment-design.md` to revise the Astro website so it strictly aligns with `Entrepreneurship.docx` as a presentation-ready CityGarden assignment prototype.

Important context:
- Primary audience: lecturer / assignment evaluator.
- Success target: presentation-ready prototype with obvious alignment to the report.
- Chosen approach: assignment-first website restructure.
- CityGarden should become the primary visible brand; GreenNest may be removed or kept only as a sub-brand/product line if useful.
- Use the current Astro static architecture and bilingual `/en` + `/zh` routing.
- No real backend, checkout, payments, database, email delivery, or real AI integration.

## Goals

- Make the website visibly match `Entrepreneurship.docx` requirements and recommendations.
- Preserve a polished, demo-ready user experience.
- Keep implementation scoped to static Astro/content changes and existing mock interactions.
- Verify key pages and both locales after changes.

## Checklist

- [x] Review the approved spec and current website structure before editing.
- [x] Rebrand primary visible site identity from GreenNest to CityGarden across navigation, layout metadata, footer, about page, and key CTAs.
- [x] Redesign homepage content around the report: problem statement, survey evidence, target persona, solution pillars, and presentation-ready CTAs.
- [x] Revise product data and product page hierarchy so the lead starter offer aligns with the RM50–RM100 survey preference while premium offers are clearly optional.
- [x] Restore or create a visible Rooftop & Balcony Services page and navigation path instead of relying on a redirect-only roof service route.
- [x] Update Garden Planner positioning from overclaimed AI language to assignment-aligned personalized/smart recommendation language unless real AI is later added.
- [x] Add or revise educational/support content so Blog & DIY Guides visibly satisfy the report’s recommendation for tutorials and customer support resources.
- [x] Update community garden messaging to connect directly to the report’s community-gardening interest and shared urban green-space goals.
- [x] Remove, soften, or qualify unsupported traction/testimonial claims and replace them with survey-backed evidence where appropriate.
- [x] Update English and Chinese translation strings together for all revised brand, product, service, and evidence copy.
- [x] Verify all revised pages, links, forms, and CTAs in both locales.
- [x] Run the project’s normal Astro build/check verification and fix issues.
- [x] Summarize changed files, verification results, and any remaining limitations.

## Notes

Reflection checkpoint after Iteration 3:
- Accomplished: primary CityGarden rebrand, report-aligned homepage, survey-evidence sections, starter-first product pricing, visible Rooftop & Balcony page, and planner repositioning away from unsupported AI claims.
- Working well: keeping changes static/content-focused fits the Astro architecture and build checks have stayed green after each major iteration.
- Risks/blockers: older blog/team copy still contains GreenNest branding and unsupported traction-style claims; these should be softened before final verification.
- Approach adjustment: continue the assignment-first restructure, but prioritize visible evaluator-facing pages before deep cleanup of every long-form article.
- Next priorities: make Blog/DIY explicitly satisfy education/support requirements, revise Community page around the report’s community-gardening interest, then clean remaining unsupported brand/traction copy.

Iteration 1 progress:
- Reviewed approved brainstorm spec plus current Ralph task file, layout, navbar, footer, and bilingual UI dictionary.
- Rebranded primary visible identity to CityGarden in nav/drawer logo, footer logo/copyright, base layout title generation, root redirect title/body, English and Chinese brand strings, consultation copy, about copy, and planner labels.
- Softened first-pass AI wording in shared strings to “Garden Planner” / “Smart Recommendations” where it was part of the primary brand surface.

Iteration 2 progress:
- Redesigned the homepage around the report: survey-backed hero stats, problem barriers (space/time/knowledge), market evidence percentages, target persona, solution pillars, research-to-feature mapping, and presentation-ready CTAs.
- Removed the rendered testimonial section from the homepage and replaced it with report-aligned evidence and feature mapping to avoid unsupported traction claims on the main page.
- Revised product data so the first visible/featured offer is a RM79 Urban Starter Kit and the next kit is RM99, matching the survey’s RM50–RM100 willingness-to-pay range; reframed the self-watering kit as an optional RM199 upgrade and rooftop/balcony greening as a custom service.
- Reworked the Products page hierarchy to explicitly explain the research fit and show affordable kits before optional upgrades and services.
- Ran `npm run build` after the homepage/product edits; Astro build completed successfully (31 pages).

Iteration 3 progress:
- Replaced the redirect-only `src/pages/[lang]/roof-garden.astro` with a visible Rooftop & Balcony Greening Services page containing survey evidence, service types, process cards, and an inquiry form.
- Added the rooftop/balcony page to desktop/mobile navigation via `Navbar.astro` and to footer links via `Footer.astro`; updated nav label to “Rooftop & Balcony” / “屋顶与阳台”.
- Reworked `src/pages/[lang]/design-your-garden.astro` to focus only on the Garden Planner and removed the previously merged roof-service section.
- Repositioned planner copy as transparent personalized/rule-based recommendations rather than complex AI, updated planner CTA/result labels, changed localStorage key to `citygarden.planner.config`, and reset the default budget to RM100 to match the starter-kit emphasis.
- Ran `npm run build`; Astro build completed successfully (31 pages).

Iteration 4 reflection/progress:
- Reflection added: progress is strong on visible assignment alignment; remaining risk is older GreenNest/traction copy in deep content and team/blog materials.
- Revised `src/pages/[lang]/blog/index.astro` so Blog & DIY Guides explicitly functions as an education/support hub, with modules mapped to the report’s knowledge, time, and space barriers.
- Rewrote `src/pages/[lang]/community.astro` around survey-backed community interest: 66% community gardening interest, 82% well-being agreement, 88% eco-material importance, program steps, outcomes, and registration form.
- Updated English and Chinese community/blog strings in `src/i18n/ui.ts`, replacing the older PPR Ampang success-story framing with prototype-safe service-concept language.
- Ran `npm run build`; Astro build completed successfully (31 pages).

Iteration 5 progress:
- Cleaned unsupported or confusing traction-style copy across visible/deep content: rewrote `src/data/team.ts` as prototype roles, reframed gallery labels/subtitle as concepts, and softened blog claims that implied existing clients, app/sensor infrastructure, or exact customer savings.
- Replaced remaining GreenNest/Garden Designer/AI Recommendation wording in site source, README, package metadata, and bilingual content with CityGarden/Garden Planner/prototype-safe phrasing.
- Updated English and Chinese strings together for gallery, community/blog support language, planner labels, and service descriptions.
- Updated `README.md`, `package.json`, and `package-lock.json` to use CityGarden identity.
- Ran `rg` for old branding/unsupported claim patterns; remaining matches were false positives such as “customer support” and icon-wrapper lines.
- Ran `npm run build`; Astro build completed successfully (31 pages).

Iteration 6 progress:
- Ran final build and type diagnostics: `npm run build` completed successfully with 31 pages; `npx astro check` completed with 0 errors, 0 warnings, and 0 hints.
- Ran a custom static verification script against `dist/` covering 18 key English/Chinese page files, assignment-aligned content markers, all built locale internal href targets, and mock forms/buttons on inquiry/contact/consultation pages.
- Verification passed after accounting for HTML entity escaping in built output.
- All checklist implementation/verification items are complete except the final summary handoff.

Reflection checkpoint after Iteration 7 / final summary:
- Accomplished: the site is now a CityGarden-first, assignment-aligned Astro prototype. Visible pages now map directly to `Entrepreneurship.docx`: homepage problem/evidence/persona/solution pillars, RM79/RM99 starter-first product hierarchy, visible rooftop/balcony service page, transparent Garden Planner, Blog & DIY education/support hub, and survey-backed community garden page. Unsupported GreenNest/traction/client/app/sensor claims were softened or replaced with prototype-safe report evidence.
- Working well: the assignment-first restructure made the lecturer-facing evidence obvious without adding backend scope. Static Astro content changes preserved the bilingual `/en` and `/zh` route architecture and kept builds fast and green.
- Not working/blocking: no blockers remain. The only known limitations are intentional prototype limits: no real backend, checkout/payment, email delivery, database, deployment, or real AI service; forms/cart/planner remain frontend-only demonstrations.
- Approach adjustment: no further implementation adjustment is needed for this scope. Future work should be treated as a new phase only if real commerce, AI, CMS, or deployment is required.
- Changed files summary: updated brand/project metadata (`README.md`, `package.json`, `package-lock.json`), shared layout/navigation/footer (`src/layouts/BaseLayout.astro`, `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/pages/index.astro`), bilingual UI strings (`src/i18n/ui.ts`), product/team/data files (`src/data/products.ts`, `src/data/team.ts`, `src/data/designerImages.ts`), planner files (`src/pages/[lang]/design-your-garden.astro`, `src/components/garden-designer/GardenDesigner.astro`, `src/components/garden-designer/designer.ts`), key bilingual pages (`src/pages/[lang]/index.astro`, `products.astro`, `roof-garden.astro`, `community.astro`, `blog/index.astro`, `gallery.astro`), styles (`src/styles/global.css`), and bilingual blog content under `src/content/blog/en` and `src/content/blog/zh`. Added workflow/spec documentation under `.unipi/`.
- Verification results: `npm run build` passed with 31 pages; `npx astro check` passed with 0 errors, 0 warnings, and 0 hints; custom `dist/` verification passed for 18 key English/Chinese pages, all built locale internal href targets, and mock forms/buttons on inquiry/contact/consultation pages.
- Next priorities: none for this assignment-alignment scope. Present the prototype with the limitation note that dynamic actions are demos until a later implementation phase.

Refer to these key source files discovered during brainstorm:
- `Entrepreneurship.docx` — market research requirements source.
- `README.md` — current project overview.
- `src/i18n/ui.ts` — bilingual UI strings.
- `src/pages/[lang]/index.astro` — homepage.
- `src/data/products.ts` — product offers and pricing.
- `src/pages/[lang]/design-your-garden.astro` and `src/components/garden-designer/designer.ts` — planner and roof-service merged content.
- `src/pages/[lang]/roof-garden.astro` — currently redirect-only.
- `src/pages/[lang]/community.astro` — community garden program.
- `src/components/Navbar.astro` and `src/components/Footer.astro` — visible brand/navigation.
