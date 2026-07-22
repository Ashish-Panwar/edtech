# Premium Coaching Website V1

Build Version 1 of a premium online coaching website.

**Domain:** UPSC | IIT-JEE | NEET | SSC | CAT

**Goal:** Premium marketing website with lead generation.

**Status:** ✅ Phase 1 Complete — Frontend landing page built and running.

---

## Architecture

Three-tier architecture:

| Tier | Technology | Status |
|------|-----------|--------|
| 1 — Frontend | Next.js + TypeScript + Tailwind CSS | ✅ Built |
| 2 — API | Node.js/NestJS | 🔧 In Progress (Admin auth login redirect fixed) |
| 3 — Database | PostgreSQL (planned) | 📅 Phase 2 |

## Frontend Stack

- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@theme` tokens)
- **Animation:** Framer Motion
- **Carousels:** Swiper.js
- **Fonts:** Playfair Display (headings), Inter (body)
- **Port:** 3000

## Design System

- **Navy:** #081B33 (primary backgrounds, text)
- **Gold:** #D4A017 (accents, CTAs, highlights)
- **White:** #FFFFFF (cards, contrast)
- **Background:** #F6F8FC (page backgrounds)
- **Style:** Premium minimal, large typography, glassmorphism nav, soft shadows, gold gradients

## What's Built (Phase 1)

- ✅ Premium homepage with 10 sections
- ✅ Hero carousel (3 slides, autoplay 6s, fade transitions)
- ✅ Exam category cards (UPSC, IIT-JEE, NEET, SSC, CAT)
- ✅ Course cards with highlights
- ✅ Faculty showcase
- ✅ Success stories / testimonials
- ✅ Achievement statistics (animated counters)
- ✅ Resources section
- ✅ Enquiry form (5 fields)
- ✅ Footer with links and social
- ✅ CMS-ready content structure (`src/data/content.ts`)
- ✅ Mobile responsive (375px → 1440px)
- ✅ Accessibility (focus rings, reduced motion, contrast)

## Phase 2 (Planned)

- Backend API (NestJS) - **Admin authentication login redirect FIXED** ✅
- PostgreSQL database
- Admin authentication
- Lead tracking system
- Dynamic CMS from API

## Phase 3 (Planned)

- Student login
- Course access
- Learning material

## Phase 4 (Planned)

- Live classes
- Tests & analytics
- AI and mobile applications

## Getting Started

```bash
cd frontend
npm run dev     # Dev server on localhost:3000
npm run build   # Production build
```