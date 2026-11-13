import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const impact = [
  { value: "7", label: "GenAI research agents shipped to production" },
  { value: "10x", label: "Document processing scale" },
  { value: "60%", label: "Faster earnings-note turnaround" },
  { value: "8,000", label: "Users on the Aiden platform" },
];

type Decision = {
  num: string;
  title: string;
  body: string;
  context: string;
  project?: {
    name: string;
    emoji: string;
    color: string;
    href: string;
    live: string;
    github: string;
  };
};

const decisions: Decision[] = [
  {
    num: "01",
    title: "Broke a stalled MD-level deadlock",
    body: "Drove the investment roadmap across 4-5 data and AI products and settled where to bet.",
    context: "RBC Capital Markets",
  },
  {
    num: "02",
    title: "Set a 99% accuracy bar for client-facing AI",
    body: "Built the evaluation and guardrails analysts and clients could trust in a regulated bank.",
    context: "RBC Capital Markets",
  },
  {
    num: "03",
    title: "Rejected LLM scoring in Vibe Route",
    body: "Chose clustering over LLM-based scoring to avoid affluence bias, grounded in 6 peer-reviewed studies.",
    context: "Vibe Route",
    project: {
      name: "Vibe Route",
      emoji: "🗺️",
      color: "#2D6A4F",
      href: "/projects/vibe-route",
      live: "https://vibe-route.vercel.app/",
      github: "https://github.com/aashi2912/vibe-route",
    },
  },
  {
    num: "04",
    title: "Constrained the LLM in Blind Spot",
    body: "Limited recommendations to verified data so the model can't hallucinate titles.",
    context: "Blind Spot",
    project: {
      name: "Blind Spot",
      emoji: "🎬",
      color: "#6366F1",
      href: "/projects/blind-spot",
      live: "https://my-blind-spot.vercel.app/",
      github: "https://github.com/aashi2912/blind-spot",
    },
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

function LinkPill({
  href,
  label,
  icon: Icon,
  color,
}: {
  href: string;
  label: string;
  icon: typeof ExternalLink;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium text-[var(--decision-accent)] transition-all duration-300 hover:-translate-y-0.5 dark:text-foreground"
      style={{ borderColor: `${color}40`, backgroundColor: `${color}0d` }}
    >
      <Icon className="h-3 w-3" />
      {label}
    </a>
  );
}

export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">At a glance</h2>

      <div className="relative mx-auto mt-7 max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[hsl(200,55%,60%)] to-transparent"
        />
        <motion.p
          {...fade(0)}
          className="pt-5 text-[22px] font-semibold leading-snug tracking-tight text-foreground"
        >
          Engineer-first product and AI strategist who{" "}
          <span className="relative inline-block">
            ships.
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-[hsl(200,60%,62%)] transition-transform duration-500 hover:scale-x-75 dark:bg-[hsl(200,55%,70%)]"
            />
          </span>
        </motion.p>
        <motion.p {...fade(0.1)} className="mt-5 text-[18px] leading-relaxed text-muted-foreground">
          I came up through engineering, so the bridge between technology and people is where I do my
          best work. These days that's RBC Capital Markets, where I own the strategy and roadmap for
          AidenResearch - a team of AI agents that get research analysts to the insight faster, so
          their time goes to the thinking only humans can do.
        </motion.p>
        <motion.p {...fade(0.2)} className="mt-4 text-[18px] leading-relaxed text-muted-foreground">
          The work got noticed: featured in{" "}
          <a
            href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-[hsl(200,60%,60%)] decoration-2 underline-offset-4 transition-colors hover:decoration-[hsl(200,70%,45%)]"
          >
            NVIDIA's customer story
          </a>{" "}
          and presented on stage at the{" "}
          <a
            href="https://www.youtube.com/watch?v=c4oVUmt15PY"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-[hsl(200,60%,60%)] decoration-2 underline-offset-4 transition-colors hover:decoration-[hsl(200,70%,45%)]"
          >
            Databricks Data + AI Summit
          </a>
          . And I still get a kick out of every agent that gets it right.
        </motion.p>
      </div>

      <motion.div
        {...fade(0.25)}
        className="relative mt-9 overflow-hidden rounded-[24px] border border-[hsl(200,50%,80%)] bg-[hsl(200,60%,92%)] p-5 dark:border-[hsl(200,40%,30%)] dark:bg-[hsl(200,40%,18%)] sm:p-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(hsl(200,45%,45%,0.22)_1px,transparent_1px)] [background-size:18px_18px] dark:opacity-25"
        />
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 h-3 w-3 border-l border-t border-[hsl(200,45%,55%)] dark:border-[hsl(200,45%,65%)]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[hsl(200,45%,55%)] dark:border-[hsl(200,45%,65%)]"
        />

        <div className="relative mb-5 flex items-center justify-between border-b border-[hsl(200,45%,72%)] pb-3 text-left dark:border-[hsl(200,35%,32%)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Impact, in numbers
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">01 — 04</span>
        </div>

        <div className="relative grid grid-cols-2 gap-y-7 md:grid-cols-4">
          {impact.map((item, idx) => (
            <div
              key={item.label}
              className={`group/impact relative px-3 text-left transition-transform duration-300 hover:-translate-y-1 md:px-5 ${
                idx > 0
                  ? "md:border-l md:border-[hsl(200,45%,72%)] dark:md:border-[hsl(200,35%,32%)]"
                  : ""
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground">
                  0{idx + 1}
                </span>
                <span className="h-px w-5 bg-[hsl(200,45%,58%)] transition-all duration-300 group-hover/impact:w-9 dark:bg-[hsl(200,45%,68%)]" />
              </div>
              <div className="text-[32px] font-bold leading-none tracking-tight">{item.value}</div>
              <div className="mt-2 max-w-[160px] text-[13px] leading-snug text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-11 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
        <h3 className="text-[13px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Product decisions
        </h3>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
      </div>

      <div className="mt-5 grid gap-4 text-left md:grid-cols-2">
        {decisions.map((d, idx) => {
          const accent = d.project?.color ?? "hsl(200, 65%, 55%)";
          const cardStyle = { "--decision-accent": accent } as CSSProperties;
          const card = (
            <div className="relative flex h-full min-h-[246px] flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-[13px] font-semibold text-[var(--decision-accent)] dark:text-foreground"
                    style={{
                      borderColor: `color-mix(in srgb, ${accent} 35%, transparent)`,
                      backgroundColor: `color-mix(in srgb, ${accent} 9%, transparent)`,
                    }}
                  >
                    {d.num}
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-card"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Decision
                    </div>
                    <div
                      aria-hidden="true"
                      className="mt-2 h-px w-10 origin-left transition-transform duration-500 group-hover:scale-x-[1.8]"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                </div>
                <span
                  className={`flex h-8 min-w-8 items-center justify-center rounded-full border border-border/70 px-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground ${
                    d.project ? "text-[15px]" : ""
                  }`}
                  aria-hidden="true"
                >
                  {d.project?.emoji ?? "RBC"}
                </span>
              </div>

              <h4 className="mt-5 max-w-[330px] text-[17px] font-semibold leading-snug tracking-tight">
                {d.title}
              </h4>
              <p className="mb-5 mt-2 max-w-[350px] text-[14px] leading-relaxed text-muted-foreground">
                {d.body}
              </p>

              <div className="mt-auto flex min-h-[29px] flex-wrap items-center gap-2 border-t border-border/70 pt-3">
                <span
                  className={`mr-auto inline-flex h-[27px] items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] ${
                    d.project
                      ? "text-[var(--decision-accent)] dark:text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {d.context}
                  {d.project && (
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </span>
                {d.project && (
                  <>
                    <LinkPill
                      href={d.project.live}
                      label="Live"
                      icon={ExternalLink}
                      color={d.project.color}
                    />
                    <LinkPill
                      href={d.project.github}
                      label="GitHub"
                      icon={Github}
                      color={d.project.color}
                    />
                  </>
                )}
              </div>
            </div>
          );

          return (
            <motion.div
              key={d.title}
              {...fade(idx * 0.08)}
              className="group relative h-full overflow-hidden rounded-[20px] border bg-card/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_-30px_var(--decision-accent)]"
              style={{
                ...cardStyle,
                borderColor: `color-mix(in srgb, ${accent} 25%, hsl(var(--border)))`,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-[0.22] transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: accent }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full border opacity-40 transition-transform duration-700 group-hover:rotate-45"
                style={{ borderColor: `color-mix(in srgb, ${accent} 28%, transparent)` }}
              >
                <div
                  className="absolute inset-4 rounded-full border border-dashed"
                  style={{ borderColor: `color-mix(in srgb, ${accent} 28%, transparent)` }}
                />
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ backgroundColor: accent }}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(120% 100% at 100% 0%, color-mix(in srgb, ${accent} 14%, transparent), transparent 65%)`,
                }}
              />
              {d.project ? (
                <Link to={d.project.href} className="relative block h-full">
                  {card}
                </Link>
              ) : (
                <div className="relative h-full">{card}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
