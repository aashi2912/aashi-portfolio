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
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-300 hover:-translate-y-0.5"
      style={{ borderColor: `${color}40`, color, backgroundColor: `${color}0d` }}
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

      <div className="mt-6 mx-auto max-w-2xl space-y-4">
        <motion.p
          {...fade(0)}
          className="text-[22px] font-semibold leading-snug tracking-tight text-foreground"
        >
          Engineer-first product and AI strategist who ships.
        </motion.p>
        <motion.p {...fade(0.1)} className="text-[18px] leading-relaxed text-muted-foreground">
          I came up through engineering, so the bridge between technology and people is where I do my
          best work. These days that's RBC Capital Markets, where I own the strategy and roadmap for
          AidenResearch - a team of AI agents that get research analysts to the insight faster, so
          their time goes to the thinking only humans can do.
        </motion.p>
        <motion.p {...fade(0.2)} className="text-[18px] leading-relaxed text-muted-foreground">
          The work got noticed: featured in{" "}
          <a
            href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold underline decoration-2 underline-offset-4 decoration-[hsl(200,60%,60%)] hover:decoration-[hsl(200,70%,45%)] transition-colors"
          >
            NVIDIA's customer story
          </a>{" "}
          and presented on stage at the{" "}
          <a
            href="https://www.youtube.com/watch?v=c4oVUmt15PY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-semibold underline decoration-2 underline-offset-4 decoration-[hsl(200,60%,60%)] hover:decoration-[hsl(200,70%,45%)] transition-colors"
          >
            Databricks Data + AI Summit
          </a>
          . And I still get a kick out of every agent that gets it right.
        </motion.p>
      </div>

      <motion.div
        {...fade(0.25)}
        className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-[hsl(200,50%,80%)] bg-[hsl(200,60%,92%)] p-6 dark:border-[hsl(200,40%,30%)] dark:bg-[hsl(200,40%,18%)] md:grid-cols-4"
      >
        {impact.map((i, idx) => (
          <div
            key={i.label}
            className={`group/impact relative transition-transform duration-300 hover:-translate-y-1 ${
              idx > 0 ? "md:border-l md:border-[hsl(200,45%,72%)] md:pl-4 dark:md:border-[hsl(200,35%,32%)]" : ""
            }`}
          >
            <div className="text-[30px] font-bold tracking-tight">{i.value}</div>
            <div className="text-[13px] leading-snug text-muted-foreground">{i.label}</div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-6 opacity-0 blur-md transition-opacity duration-500 group-hover/impact:opacity-60 bg-[hsl(200,70%,60%)]" />
          </div>
        ))}
      </motion.div>

      <h3 className="mt-10 text-[13px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        Product decisions
      </h3>

      <div className="mt-4 grid gap-4 text-left md:grid-cols-2">
        {decisions.map((d, idx) => {
          const card = (
            <div className="relative flex h-full flex-col p-5">
              <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                {d.num}
              </div>
              <div className="mt-1.5 text-[16px] font-semibold leading-snug">{d.title}</div>
              <div className="mt-1 mb-4 text-[14px] leading-relaxed text-muted-foreground">
                {d.body}
              </div>

              <div className="mt-auto flex min-h-[26px] flex-wrap items-center gap-2 border-t border-border/60 pt-3">
                <span
                  className={`mr-auto inline-flex h-[27px] items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] ${
                    d.project ? "" : "text-muted-foreground"
                  }`}
                  style={d.project ? { color: d.project.color } : undefined}
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
              className="group relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1"
              style={d.project ? { borderColor: `${d.project.color}35` } : undefined}
            >
              {d.project && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(120% 90% at 100% 0%, ${d.project.color}26, transparent 65%)`,
                  }}
                />
              )}
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
