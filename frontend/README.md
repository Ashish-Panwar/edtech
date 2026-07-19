# Premium Coaching Academy — Frontend

Premium marketing website for competitive exams coaching (UPSC, IIT-JEE, NEET, SSC, CAT).

Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and Swiper.js.

## Stack

| Technology | Version |
|-----------|---------|
| Next.js | 16.2.10 (Turbopack) |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Framer Motion | latest |
| Swiper.js | latest |

## Design Tokens

- **Navy:** `#081B33`
- **Gold:** `#D4A017`
- **White:** `#FFFFFF`
- **Background:** `#F6F8FC`
- **Heading Font:** Playfair Display
- **Body Font:** Inter

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens + utilities
│   ├── layout.tsx           # Root layout + fonts
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # Reusable primitives
│   └── sections/            # Page sections (Header, Hero, etc.)
└── data/
    ├── types.ts             # TypeScript interfaces
    └── content.ts           # CMS-ready content
```

## Getting Started

```bash
npm install        # Install dependencies
npm run dev        # Dev server → http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

## Sections (Homepage)

1. Header (sticky glass nav)
2. Hero Carousel (Swiper + fade)
3. Exam Categories
4. Featured Courses
5. Statistics (animated counters)
6. Faculty
7. Success Stories
8. Resources
9. Enquiry Form
10. Footer

## Status

**Phase 1 Complete** — Marketing website with static CMS-ready data.
**Phase 2** — Backend API + database integration.