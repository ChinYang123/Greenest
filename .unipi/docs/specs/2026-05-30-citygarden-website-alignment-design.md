---
title: "CityGarden Website Alignment"
type: brainstorm
date: 2026-05-30
---

# CityGarden Website Alignment

## Problem Statement

The current website broadly supports an urban gardening concept, but it does not strictly align with `Entrepreneurship.docx` as a presentation-ready assignment prototype. The revision should make a lecturer quickly see that the website implements the documented CityGarden business idea: a website-based urban gardening platform for young urban residents with limited space, limited time, limited gardening knowledge, and interest in sustainable, low-maintenance gardening solutions.

The core problem is not simply “make the site prettier.” It is to make the site visibly match the requirements, evidence, target market, recommendations, and business positioning from the market research document while remaining polished enough to demo as a real startup website.

## Context

Key findings from `Entrepreneurship.docx`:

- Business concept: CityGarden is a website-based urban gardening service platform for apartments, condominiums, student hostels, and other urban residences.
- Main customer problems: lack of time for maintenance (52%), lack of physical space (50%), insufficient gardening knowledge (34%), and concerns about messiness, dirt, or insects (38%).
- Target market: young urban residents aged roughly 18–35, especially students and young working adults living in apartments, condos, and student accommodation.
- Strong survey evidence: 72% interest in urban gardening, around 80% willingness to use vertical gardening systems, 82% increased willingness with automatic watering, 88% importance placed on eco-friendly materials, 74% interest in rooftop/balcony greening services, and 80% future purchase likelihood.
- Recommended business direction: space-saving vertical/balcony kits, easy-maintenance or self-watering features, eco-friendly materials, website as the primary sales/communication channel, educational content, customer support, installation/consultation, rooftop/balcony greening, and community gardening programs.
- Price sensitivity: most respondents preferred RM50–RM100 for a smart eco-friendly vertical gardening starter kit; only a small minority were willing to pay above RM200.

Key findings from the current website:

- The site is an Astro static website with bilingual `/en` and `/zh` routes.
- It already includes products, a garden designer, vertical garden content, roof/community service content, gallery, blog/guides, consultation, contact, and about pages.
- The current visible brand is mostly GreenNest, with CityGarden positioned as a parent company. For strict assignment alignment, CityGarden should become the primary visible brand.
- Existing content already supports many requirements, including vertical gardening, sustainability, community gardens, rooftop services, and educational blog content.
- Alignment gaps include brand mismatch, unsupported traction claims, pricing mismatch with survey willingness-to-pay, hidden/redirected rooftop service visibility, and missing explicit market research evidence/persona messaging.

## Chosen Approach

Use an assignment-first website restructure.

The revised website should present CityGarden as the primary startup brand and organize the website around the market research document’s core logic: problem, evidence, target market, solution, products/services, sustainability, community, education/support, and inquiry flows. Existing Astro architecture, bilingual routing, structured data files, mock forms, and current interactive planner can be retained, but content and page structure should be revised so the website clearly demonstrates alignment with the assignment requirements.

## Why This Approach

This approach best balances strict document alignment with a polished presentation-ready prototype.

Rejected alternatives:

- Alignment polish: faster and lower effort, but it would leave too much of the current GreenNest-first structure intact and may not make the assignment alignment obvious enough to a lecturer.
- Full platform simulation: stronger as a product demo, but likely too broad for the immediate goal. Real or simulated checkout, customer accounts, richer support flows, and backend-like behavior would add complexity beyond the brainstormed assignment-alignment objective.

The chosen approach focuses effort where it matters most: making the website visibly prove the CityGarden concept from the documentation.

## Design

### Architecture

The site remains a static Astro website with bilingual English and Chinese routes. The revision should not introduce a backend, account system, or real checkout during this phase. Instead, the content architecture should be reshaped around CityGarden as the primary brand.

Recommended top-level journey:

1. Home — CityGarden value proposition, problem, market evidence, solution pillars, target audience, and CTAs.
2. Products/Kits — affordable starter kit first, then vertical/self-watering and premium options.
3. Garden Planner — personalized recommendation flow using the existing rule-based designer.
4. Rooftop & Balcony Services — visible service page instead of a hidden redirect-only route.
5. Community Garden Program — shared-space program with planning, setup, workshop, and support flow.
6. Blog & DIY Guides — educational resources that support beginners and build trust.
7. About/Contact/Consultation — assignment-aligned mission, target market, and inquiry forms.

### Components and Content Modules

Primary content changes:

- Brand layer: use CityGarden consistently in the logo, metadata, page titles, footer, about page, and CTAs. If GreenNest remains, position it only as a product line or remove it from core messaging.
- Homepage hero: communicate the documented value proposition: sustainable urban gardening for limited city spaces.
- Problem section: use the report’s barriers: lack of time, lack of space, limited knowledge, and mess/insect concerns.
- Survey evidence strip: show selected figures from the report, such as 72% interest, 80% vertical garden willingness, 82% auto-watering impact, 88% eco-material importance, 74% rooftop/balcony interest, and 80% purchase likelihood.
- Target persona section: describe the ideal customer as an 18–35 urban resident, student, or young working adult in an apartment, condo, or student hostel.
- Solution pillars: space-saving vertical systems, automatic/easy watering, eco-friendly materials, education/support, installation/consultation, and community programs.
- Products: lead with an affordable RM50–RM100 starter offer to match survey price sensitivity. Keep higher-priced smart/commercial options as premium or future expansion tiers.
- Rooftop/balcony service: make it directly visible through navigation and page content because the report identifies strong interest in these services.
- Credibility: replace unsupported startup traction claims with report-backed evidence or prototype-safe phrasing.

### Data Flow

The market research document is the content authority for website messaging. Existing structured data files can continue to drive products, plants, team information, and bilingual copy, but they should be updated to reflect CityGarden’s assignment-aligned positioning.

User journey:

1. Visitor lands on the home page and sees the problem, survey evidence, and CityGarden solution.
2. Visitor chooses a path: affordable starter kit, garden planner, rooftop/balcony inquiry, community garden registration, or educational guide.
3. Garden Planner collects space, size, sunlight, goals, and budget, then produces a personalized recommendation using current rule-based logic.
4. Forms collect interest for consultation, contact, rooftop/balcony service, or community programs and show prototype success feedback.

The Garden Planner should be framed as personalized planning or smart recommendation unless implementation later supports a real AI service.

### Error Handling and Edge Cases

- Avoid brand confusion by using CityGarden as the primary visible brand everywhere.
- Avoid contradictory pricing by making the main starter offer fit the RM50–RM100 willingness-to-pay range.
- Avoid unsupported claims such as large customer counts unless clearly presented as fictional demo copy; prefer report-backed evidence.
- Avoid hiding major services behind redirects; rooftop/balcony services should be visible and easy to find.
- Keep form validation clear for required fields and use honest mock-success messages if no backend exists.
- Keep English and Chinese content consistent so both locales communicate the same assignment-aligned business concept.

### Verification and Testing

Verification in the later work phase should include:

- Content alignment checklist against `Entrepreneurship.docx`.
- Manual walkthrough of Home, Products, Garden Planner, Rooftop/Balcony, Community, Blog, About, Consultation, and Contact in both locales.
- Confirmation that navigation exposes all assignment-relevant pages.
- Confirmation that CTAs point to the correct planner or inquiry flows.
- Confirmation that form validation and mock success behavior are understandable.
- Normal Astro build/check verification during implementation.

## Implementation Checklist

- [ ] Rebrand primary visible site identity from GreenNest to CityGarden across navigation, layout metadata, footer, about page, and key CTAs.
- [ ] Redesign homepage content around the report: problem statement, survey evidence, target persona, solution pillars, and presentation-ready CTAs.
- [ ] Revise product data and product page hierarchy so the lead starter offer aligns with the RM50–RM100 survey preference while premium offers are clearly optional.
- [ ] Restore or create a visible Rooftop & Balcony Services page and navigation path instead of relying on a redirect-only roof service route.
- [ ] Update Garden Planner positioning from overclaimed AI language to assignment-aligned personalized/smart recommendation language unless real AI is later added.
- [ ] Add or revise educational/support content so Blog & DIY Guides visibly satisfy the report’s recommendation for tutorials and customer support resources.
- [ ] Update community garden messaging to connect directly to the report’s community-gardening interest and shared urban green-space goals.
- [ ] Remove, soften, or qualify unsupported traction/testimonial claims and replace them with survey-backed evidence where appropriate.
- [ ] Update English and Chinese translation strings together for all revised brand, product, service, and evidence copy.
- [ ] Verify all revised pages, links, forms, and CTAs in both locales during the later implementation phase.

## Open Questions

- Should GreenNest be removed entirely, or kept as a sub-brand/product line under CityGarden?
- Should the final website include explicit survey percentages on the public pages, or should some evidence be expressed more subtly for a marketing feel?
- Should forms remain clearly marked as prototype/demo, or should they appear as real inquiry flows for presentation purposes while still using mock submission behavior?
- How much Chinese copy quality is required for the assignment compared with English copy quality?

## Out of Scope

- Real checkout, payments, shopping cart persistence, or order fulfillment.
- Real backend form submission, database storage, email delivery, or admin dashboard.
- Real AI integration beyond the existing rule-based planner.
- New market research, survey redesign, or rewriting the original `Entrepreneurship.docx`.
- Deployment or production hosting changes.
