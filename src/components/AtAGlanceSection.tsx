import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

const projectLinkClass =
  "inline-flex items-center gap-0.5 font-medium text-story-ink underline decoration-story-line decoration-2 underline-offset-4 transition-colors hover:text-foreground";

function ProductDoodle() {
  return (
    <svg viewBox="0 0 72 64" className="h-16 w-[72px]" fill="none" aria-hidden="true">
      <path d="M20 9.5c8-3 23-2.6 30 .8 3.8 8.8 3.4 28.8-.5 38.5-8.4 3.2-23.6 3-30.7-.8-3.3-9.8-2.5-29.7 1.2-38.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21.5 11c8-2.2 20.7-2 27.8.2M31 51.5c3.2.7 6.4.7 9.2-.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M35.5 21c-3.2-4.2-10-1.3-9.1 3.7.7 4.1 6.3 8 9.4 10.1 2.8-2.5 8.2-6.7 8.6-10.7.5-5.1-6.1-7.2-8.9-3.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M56 7v8m-4-4h8M8 38v6m-3-3h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function AiDoodle() {
  return (
    <svg viewBox="0 0 72 64" className="h-16 w-[72px]" fill="none" aria-hidden="true">
      <path d="M35.5 7.5c1.7 8.7 4.7 12.1 12.8 14.1-8.2 1.7-11.2 5.3-13 13.7-1.6-8.4-4.8-11.8-12.8-13.6 8.1-2 11.2-5.4 13-14.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M54.5 34c1.1 5.4 3 7.5 8 8.8-5.1 1-7 3.3-8.1 8.6-1-5.2-3-7.4-8-8.5 5-1.3 7-3.3 8.1-8.9ZM17 37c.8 4.2 2.3 5.8 6.2 6.8-4 .8-5.5 2.5-6.3 6.6-.8-4.1-2.3-5.7-6.2-6.6 3.9-1 5.5-2.6 6.3-6.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M38 8.2c1.4 8 4.2 10.5 10 12.3M9.5 12.5c4.5-3.3 9-4.8 13.5-4.7M9 10l.5 6 5.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    </svg>
  );
}

function StrategyDoodle() {
  return (
    <svg viewBox="0 0 72 64" className="h-16 w-[72px]" fill="none" aria-hidden="true">
      <path d="M10 50.5c13.5-1.2 12.2-19.8 25.5-20.3 10.7-.4 6.8 13.8 17.3 10.3 4.2-1.4 6.2-5.2 7.5-9.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3.5 4" />
      <path d="m52.5 31.5 8.5-2.8.8 8.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13.5c7-4.3 17.3-3.5 21.8 2.8 4.3 6-1 12.2-7.2 11.4-5.5-.7-7.4-7.8-3.2-11.1 3.3-2.6 8.5-.7 8.1 3.1-.2 2.3-2.7 3.3-4.5 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 52c15 1.8 37.5 1.4 54-.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

type Pillar = {
  number: string;
  title: string;
  idea: string;
  steps: string[];
  note: string;
  icon: ReactNode;
  radius: string;
  tilt: string;
  links?: { label: string; to: string }[];
  footer?: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Product",
    idea: "People before features.",
    steps: ["Discover", "Decide", "Return"],
    note: "Useful, personal, and worth coming back to.",
    icon: <ProductDoodle />,
    radius: "rounded-[46%_54%_48%_52%/18%_20%_16%_19%]",
    tilt: "md:-rotate-2",
    links: [
      { label: "Vibe Route", to: "/projects/vibe-route" },
      { label: "Spotify AI DJ", to: "/projects/spotify-ai-dj" },
    ],
  },
  {
    number: "02",
    title: "AI",
    idea: "Intelligence with judgment.",
    steps: ["Context", "Trust", "Control"],
    note: "Not AI for the demo. AI that earns its place.",
    icon: <AiDoodle />,
    radius: "rounded-[52%_48%_54%_46%/19%_17%_21%_18%]",
    tilt: "md:translate-y-4 md:rotate-1",
    links: [
      { label: "Blind Spot", to: "/projects/blind-spot" },
      { label: "Fine Print", to: "/projects/fine-print" },
    ],
  },
  {
    number: "03",
    title: "Strategy & GTM",
    idea: "From insight to adoption.",
    steps: ["Position", "Prioritize", "Launch"],
    note: "Clear trade-offs, a story people get, something real shipped.",
    icon: <StrategyDoodle />,
    radius: "rounded-[48%_52%_45%_55%/20%_18%_19%_17%]",
    tilt: "md:-rotate-1",
    footer: "In practice: AI product strategy on the Aiden platform at RBC.",
  },
];

export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">The thread through my work</h2>

      <div className="relative mx-auto mt-7 max-w-2xl">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-story-line/50" />
        <motion.p {...fade(0)} className="pt-5 text-[22px] font-semibold leading-snug tracking-tight text-foreground">
          Engineer-first product and AI strategist who{" "}
          <span className="relative inline-block">
            ships.
            <svg aria-hidden="true" viewBox="0 0 70 8" className="absolute -bottom-2 left-0 h-2 w-full text-story-line" fill="none">
              <path d="M2 5.5c17-4 41-4.5 66-1.5M8 7c16-2.5 34-3 52-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </motion.p>
        <motion.p {...fade(0.06)} className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Three lenses · one builder mindset
        </motion.p>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
        <svg aria-hidden="true" viewBox="0 0 900 90" className="pointer-events-none absolute -top-9 left-[12%] hidden w-[76%] text-story-line/60 md:block" fill="none">
          <path d="M20 60c120-45 210-38 320 5 110 42 205 35 300-5 95-39 160-35 240-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="5 8" />
          <path d="m868 38 14 10-13 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            {...fade(0.1 + index * 0.08)}
            className={`group relative mx-auto flex min-h-[340px] w-full max-w-sm flex-col overflow-visible border border-story-line/45 bg-story-bubble px-7 pb-8 pt-7 text-story-ink transition-transform duration-300 hover:rotate-0 md:hover:translate-y-0 md:min-h-[370px] md:px-6 md:pb-9 ${pillar.radius} ${pillar.tilt}`}
          >
            <div aria-hidden="true" className={`pointer-events-none absolute inset-[5px] border border-story-line/25 ${pillar.radius}`} />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-story-ink/65">{pillar.number} / pillar</span>
              <div className="-mr-1 -mt-2 text-story-ink/80 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">{pillar.icon}</div>
            </div>

            <div className="relative mt-1 flex flex-1 flex-col">
              <h3 className="text-[25px] font-bold leading-tight tracking-tight">{pillar.title}</h3>
              <p className="mt-2 text-[17px] font-medium leading-snug">{pillar.idea}</p>

              <div className="my-5 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.08em] sm:text-[10px]">
                {pillar.steps.map((step, stepIndex) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="rounded-full border border-story-line/45 px-2 py-1.5">{step}</span>
                    {stepIndex < pillar.steps.length - 1 && <span aria-hidden="true" className="text-story-ink/55">→</span>}
                  </span>
                ))}
              </div>

              <p className="mx-auto max-w-[240px] text-[14px] leading-relaxed text-story-ink/75">{pillar.note}</p>

              <div className="mt-auto pt-5">
                <div aria-hidden="true" className="mx-auto mb-4 h-px w-16 bg-story-line/45" />
                {pillar.links ? (
                  <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px]">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-story-ink/60">See it in</span>
                    {pillar.links.map((link, linkIndex) => (
                      <span key={link.to} className="inline-flex items-center gap-2">
                        {linkIndex > 0 && <span aria-hidden="true" className="text-story-ink/40">·</span>}
                        <Link to={link.to} className={projectLinkClass}>
                          {link.label}
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="mx-auto max-w-[235px] text-[12px] leading-relaxed text-story-ink/70">{pillar.footer}</p>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div {...fade(0.34)} className="mx-auto mt-12 max-w-xl border-y border-border/70 py-4 md:mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Curious about people · Opinionated about AI · Happiest when shipping
        </p>
      </motion.div>

      <motion.p {...fade(0.4)} className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
        Along the way, the Aiden team I am part of was featured in{" "}
        <a
          href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-story-line decoration-2 underline-offset-4"
        >
          NVIDIA&apos;s customer story
        </a>{" "}
        and presented at the{" "}
        <a
          href="https://www.youtube.com/watch?v=c4oVUmt15PY"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-story-line decoration-2 underline-offset-4"
        >
          Databricks Data + AI Summit
        </a>
        .
      </motion.p>
    </div>
  );
}
