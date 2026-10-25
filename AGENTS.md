# Architecture rules
- Keep the portfolio as one continuous Index page; section paths render the same page and Layout scrolls to the selected section so direct links and browser history work without splitting content.
- Define shareable section paths in src/lib/portfolio-sections.ts and reuse them in routing and navigation to prevent path drift.
- Project skills are explicit per-project data in src/pages/Index.tsx: `cardSkills` (card tiles) and `details.stack` ({ ai, pm, eng }) for the drawer's Tools & Stack groups. Never keyword-infer categories from tool names, and only list skills verified against the project's GitHub repo, live app, or case study PDFs.
- Preserve full original project data in `previousVersion` when introducing a new primary version; the same drawer toggles versions without changing the shareable project path, so original narrative and materials remain together.
- New project media uses imported asset pointers with absolute Lovable-hosted URLs so the same PDFs, images, and video also resolve on external hosting.
