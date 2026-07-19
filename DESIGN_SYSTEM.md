# Premium Design System — Implemented

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#081B33` | Primary backgrounds, text, header |
| Navy Light | `#0F2A4A` | Gradients, hover states |
| Navy Dark | `#040E1E` | Deep backgrounds |
| Gold | `#D4A017` | Accents, CTAs, highlights |
| Gold Light | `#F0C040` | Text gradients, hover |
| Gold Dark | `#B8860B` | Gradient depth |
| White | `#FFFFFF` | Cards, text on dark |
| Background | `#F6F8FC` | Page backgrounds |
| Alt Background | `#EDF0F6` | Section alternates |

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Heading | Playfair Display | 400–900 | Hero titles, section headings, names |
| Body | Inter | 300–700 | All body text, nav, buttons |
| Mono | System monospace | — | Code only |

## Button Styles (52px height, 30px border-radius)

| Variant | Style | Hover |
|---------|-------|-------|
| Primary | Gold gradient (#D4A017 → #B8860B) | Lift + glow shadow |
| Secondary | Navy solid | Lighten + lift |
| Outline | Gold border, transparent | Gold fill |
| Ghost | Transparent on dark | White/10 bg |

## Effects

- **Glass header:** `rgba(255,255,255,0.85)` + `backdrop-filter: blur(20px)`
- **Card shadows:** `0 4px 24px rgba(8,27,51,0.08)` → hover `0 12px 40px rgba(8,27,51,0.14)`
- **Gold glow:** `0 4px 24px rgba(212,160,23,0.25)`
- **Gradients:** Gold `135deg`, Navy `135deg`, Navy-to-Gold
- **Border radius:** 8px (sm), 12px (md), 20px (lg), 30px (xl/buttons)

## Spacing

- **Section padding:** 120px desktop / 64px mobile
- **Card gap:** 24px (Swiper slides)
- **Layout max-width:** 1280px (`max-w-7xl`)

## Animations

- **Duration:** 300–700ms (Framer Motion)
- **Easing:** Default (gentle spring)
- **Scroll reveal:** Staggered fade-up on `whileInView`
- **Hover:** `scale`, `y` transforms with `duration-300`
- **Carousel:** Autoplay 4–6s, fade transitions (hero), slide (rest)
- **Reduced motion:** `prefers-reduced-motion` respected globally

## Pre-Delivery Checklist — Applied

- [x] SVG icons used (no emoji as icons in production UI)
- [x] `cursor-pointer` on clickable elements
- [x] Hover states with smooth transitions (150–300ms)
- [x] Text contrast ≥ 4.5:1 minimum
- [x] Focus states visible (`focus-visible: gold ring`)
- [x] `prefers-reduced-motion` respected
- [x] Responsive: 375px, 768px, 1024px, 1440px