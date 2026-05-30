# CityGarden 🌿

A presentation-ready sustainable urban gardening website prototype built from the requirements and market research in `Entrepreneurship.docx`.

CityGarden helps urban residents in apartments, condominiums, student hostels, balconies, rooftops, and shared community spaces start practical, low-maintenance gardens through affordable starter kits, a rule-based Garden Planner, educational guides, and inquiry flows for rooftop/balcony and community greening services.

## Features

- 🌐 Bilingual routes: `/en/*` and `/zh/*`
- 🪴 Garden Planner: rule-based recommendations for kit, plants, layout, and estimated price
- 🛒 Products: affordable RM50–RM100 starter-first kit hierarchy plus optional upgrades
- 🏙️ Rooftop & Balcony Greening Services: visible inquiry page aligned with survey demand
- 🤝 Community Garden Program: survey-backed shared-garden service concept
- 📚 Blog & DIY Guides: education/support hub for beginners
- 📅 Consultation and contact forms: frontend prototype submissions with success toast

> Forms and cart actions are frontend demo interactions only. No real checkout, backend storage, or AI service is included.

## Tech Stack

- Astro static site generation
- Native TypeScript for the Garden Planner island
- Bilingual content through `src/i18n/ui.ts`
- CSS design tokens in `src/styles/global.css`

## Getting Started

Requires Node.js 18+.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Open `http://localhost:4321`; the root redirects to `/en/`.

## Project Structure

```text
src/
├── components/              # Navbar, Footer, forms, cards, planner
├── content/blog/{en,zh}/    # Blog and DIY guide markdown
├── data/                    # Products, plants, team, planner images
├── i18n/                    # UI dictionaries and routing helpers
├── layouts/                 # Base layout
├── pages/[lang]/            # Bilingual pages
└── styles/global.css        # Site styles
```
