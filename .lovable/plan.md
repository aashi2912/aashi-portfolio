## Goal

1. Add a 4th project — **Spotify AI DJ: A Strategic Exercise** — case study only (no live product link).
2. Make sure it looks right in both light and dark themes.
3. Replace the current horizontal-scroll carousel with a layout where all projects are visible at once, so nothing gets missed.

---

## 1. Add the Spotify AI DJ project

Source: the uploaded PDF *Spotify_AI_DJ_-_A_Strategic_Exercise*. Key points captured from it:

- Type: **Product Strategy Exercise** (not a live product). Thought experiment on Spotify's AI DJ "loss of agency" friction.
- Author framing: "if I owned AI DJ at Spotify for two quarters, what would I ship?"
- The pick: evolve thumbs into a richer signal layer + surface them more prominently when the model's confidence is low.
- Two personas: **Maya** (engaged-but-stuck) and **Jordan** (the foil, passive listener).
- Structure: Context → Problem Framing → Solution Space → Success Metrics → Risks → Open Questions.

### Asset prep
- Copy the uploaded PDF to `public/case-studies/spotify-ai-dj-case-study.pdf`.
- Convert each page to JPG into `public/case-studies/spotify-ai-dj-pages/page-N.jpg` (same pattern as the other projects, so `caseStudyPages` works and `CaseStudyModal` renders).
- Pick a hero image: render page 1 of the PDF at high quality and save to `src/assets/spotify-ai-dj-hero.jpg` for the card image.

### Project entry (added to `projects` in `src/pages/Index.tsx`)

- `title`: "Spotify AI DJ"
- `tag`: "Product Strategy"
- `year`: "2026"
- `link`: omitted (no Live Product CTA — the bottom-right button only renders when `link` exists, so it won't show).
- `color`: Spotify green `#1DB954`; `secondaryColor`: `#1ED760`; `cardBg`: `#191414` (Spotify black — works in both themes since it only backs the hero image area; content section already uses `bg-card`).
- `caseStudyPdf` + `caseStudyPages` wired to the new files above.
- `description` (card copy): short, story-led — about giving listeners agency without breaking the passive experience.
- `details`:
  - `heroTagline`: "A two-quarter decision document — without access to internal Spotify data."
  - `background`: the loss-of-agency framing + cost of inaction.
  - `stats`: e.g. `{1400+ user comments analyzed}`, `{3 frictions named}`, `{2 quarters scoped}`, `{1 cut}`.
  - `competitiveGap`: Mood prompt at session start / In-session controls / Confidence-aware surfacing — with which one was picked.
  - `drawerSections`:
    - **Problem Framing** — Maya vs Jordan personas (grid).
    - **Solution Space** — three options + the cut (grid).
    - **Phasing & Gate** — Phase 1 (Q1 5% alpha, evolve thumbs) → Gate (+50% control engagement?) → Phase 2 (Q2 25% beta, confidence-aware surfacing) (roadmap layout).
    - **Success Metrics** — what to ship against + what to refuse (guardrails) (list).
    - **Risks** — four ways the call could be wrong + detection/mitigation (grid).
    - **Open Questions** — the four unknowns that would change the recommendation (list).
  - `takeawayQuote`: from the doc ("Evolve the existing thumbs into a richer signal layer, and surface them more prominently when the model's confidence is low.").
  - `tools`: Product Strategy, PRD, Roadmap, RICE, Persona, Journey Map, A/B Test, Discovery, Stakeholder, Goodhart's Law, etc.

Note: since `link` is absent, the bottom-right "Live Product" CTA won't render and the drawer hero's "Live Product" button is conditional on `link` too — both safely skip. Only the "Read case study" CTA + case-study modal will be available, which matches the brief ("just case study").

---

## 2. Light/dark theme compatibility

Already mostly handled — cards use `bg-card`, `text-foreground`, `text-muted-foreground`. The only theme-sensitive bit is `cardBg` (hero image background); `#191414` keeps the Spotify identity and reads correctly under both themes since it's bounded to the hero image area. The drawer's `heroTextColor`/`heroSubTextColor` logic already switches based on `cardBg` brightness, so it will pick light text automatically. No design-token changes needed.

---

## 3. Replace horizontal scroller with an all-at-once grid

File: `src/components/ProjectCarousel.tsx`, the exported `ProjectCarousel` component (lines 807–894).

Changes:
- Remove the horizontal scroll container, the `scrollRef`, `checkScroll`, `canScrollLeft/Right` state, the scroll arrows, and the `scroll()` helper.
- Replace with a responsive CSS grid that shows every project at once:
  - `grid-cols-1` on mobile
  - `sm:grid-cols-2` on small screens
  - `lg:grid-cols-2` on desktop (2x2 for 4 projects — best balance of card size + "see them all" at the current ~1136px viewport)
  - Optionally `xl:grid-cols-4` on very wide screens.
- Update `ProjectCard`'s root class so it stretches to the grid cell instead of using fixed widths (`w-[70vw] sm:w-[320px] …` → `w-full h-full`). Keep `snap-center` off (no longer needed).
- Keep the per-card hover, motion entrance, drawer-open behavior, and the bottom-right "Live Product" CTA exactly as they are.
- The component name stays `ProjectCarousel` (so `Index.tsx` doesn't need an import change), but it now renders a gallery grid.

Why a grid (vs. an auto-scrolling marquee): with 4 substantive case-study cards, a marquee would keep things moving past the reader and re-introduce the "I might miss one" problem. A 2×2 grid puts every project in view simultaneously, which is exactly what the user asked for. Mobile falls back to a single column — natural and scrollable, but each card is full-width so nothing is hidden off-screen.

---

## Files touched

- `src/pages/Index.tsx` — add the 4th project entry to `projects`.
- `src/components/ProjectCarousel.tsx` — swap horizontal scroller for responsive grid; update `ProjectCard` width classes.
- `public/case-studies/spotify-ai-dj-case-study.pdf` — new (copied from upload).
- `public/case-studies/spotify-ai-dj-pages/page-*.jpg` — new (converted pages).
- `src/assets/spotify-ai-dj-hero.jpg` — new (hero image for the card).

No backend, no schema, no auth changes.
