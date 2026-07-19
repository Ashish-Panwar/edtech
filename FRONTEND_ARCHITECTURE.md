# Frontend Architecture — Implemented ✅

## Directory Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, utilities, base styles
│   │   ├── layout.tsx           # Root layout (fonts, metadata)
│   │   └── page.tsx             # Homepage assembly
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Multi-variant button (primary/secondary/outline/ghost)
│   │   │   └── SectionHeading.tsx  # Reusable section title + subtitle
│   │   └── sections/
│   │       ├── Header.tsx       # Sticky glass nav with mobile menu
│   │       ├── HeroCarousel.tsx # Full-screen Swiper with fade transitions
│   │       ├── ExamCarousel.tsx # Auto-looping exam cards
│   │       ├── CourseCarousel.tsx  # 4-col course cards with highlights
│   │       ├── StatsSection.tsx # Animated number counters
│   │       ├── FacultyCarousel.tsx # Faculty cards with avatars
│   │       ├── SuccessCarousel.tsx # Testimonials grid
│   │       ├── ResourcesSection.tsx # Resource cards
│   │       ├── EnquirySection.tsx # Lead capture form + contact info
│   │       └── Footer.tsx       # 4-column footer
│   └── data/
│       ├── types.ts             # TypeScript interfaces for all data
│       └── content.ts           # CMS-ready content data
├── public/                      # Static assets
├── package.json                 # Dependencies
└── tsconfig.json                # TypeScript config with @/ alias
```

## Architecture Principles

1. **Server Components by default** — Only interactive components use `"use client"`
2. **Data-driven content** — All copy lives in `src/data/content.ts`, not hardcoded in components
3. **Typed interfaces** — Every content type has a TypeScript interface in `types.ts`
4. **Reusable primitives** — `Button` and `SectionHeading` shared across sections
5. **Isolated sections** — Each page section is its own component, easy to reorder or extend

## Component Tree

```
layout.tsx (fonts: Playfair Display + Inter)
└── page.tsx
    ├── Header (sticky, glass)
    ├── HeroCarousel (Swiper, Framer Motion)
    ├── ExamCarousel (Swiper)
    ├── CourseCarousel (Swiper)
    ├── StatsSection (Framer Motion counters)
    ├── FacultyCarousel (Swiper)
    ├── SuccessCarousel (Swiper)
    ├── ResourcesSection
    ├── EnquirySection (form + contact)
    └── Footer
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.10 | Framework |
| react | 19.x | UI library |
| framer-motion | latest | Animations |
| swiper | latest | Carousels |
| tailwindcss | 4.x | Styling |
| typescript | 5.x | Type safety |

## Build Output

- **Static Site Generation** — All pages pre-rendered at build time
- **Route:** `/` (homepage) — static, no server required
- **Build command:** `npm run build`
- **Dev server:** `npm run dev` (port 3000)

## Phase 2 Enhancements

- Replace static data with API calls
- Add dynamic routing for exam/course/faculty pages
- Add loading states with `loading.tsx`
- Add error boundaries with `error.tsx`
- Move to hybrid rendering (SSR/ISR for dynamic content)