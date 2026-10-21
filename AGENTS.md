# Architecture rules
- Keep the portfolio as one continuous Index page; section paths render the same page and Layout scrolls to the selected section so direct links and browser history work without splitting content.
- Define shareable section paths in src/lib/portfolio-sections.ts and reuse them in routing and navigation to prevent path drift.