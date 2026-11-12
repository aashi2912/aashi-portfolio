import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const impact = [
  { value: "7", label: "GenAI research agents shipped to production" },
  { value: "10x", label: "Document processing scale" },
  { value: "60%", label: "Faster earnings-note turnaround" },
  { value: "8,000", label: "Users on the Aiden platform" },
];

const decisions = [
  {
    title: "Broke a stalled MD-level deadlock",
    body: "Drove the investment roadmap across 4-5 data and AI products and settled where to bet.",
  },
  {
    title: "Set a 99% accuracy bar for client-facing AI",
    body: "Built the evaluation and guardrails analysts and clients could trust in a regulated bank.",
  },
  {
    title: "Rejected LLM scoring in Vibe Route",
    body: "Chose clustering over LLM-based scoring to avoid affluence bias, grounded in 6 peer-reviewed studies.",
  },
  {
    title: "Constrained the LLM in Blind Spot",
    body: "Limited recommendations to verified data so the model can't hallucinate titles.",
  },
];

const featured = [
  { name: "Blind Spot", line: "Shows you what your Netflix algorithm is hiding.", slug: "blind-spot" },
  { name: "Vibe Route", line: "Ranks walking routes by how the streets feel.", slug: "vibe-route" },
];

export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">At a glance</h2>
      <p className="mt-3 text-[18px] text-muted-foreground max-w-2xl mx-auto">
        Engineer-first AI product manager who ships. I own the strategy and roadmap for AidenResearch, a multi-agent
        GenAI research platform at RBC Capital Markets, featured in NVIDIA's customer story and presented at the
        Databricks Data + AI Summit.
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-[hsl(200,50%,80%)] dark:border-[hsl(200,40%,30%)] bg-[hsl(200,60%,92%)] dark:bg-[hsl(200,40%,18%)]">
        {impact.map((i) => (
          <div key={i.label}>
            <div className="text-[30px] font-bold tracking-tight">{i.value}</div>
            <div className="text-[13px] text-muted-foreground leading-snug">{i.label}</div>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Product decisions</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4 text-left">
        {decisions.map((d) => (
          <div key={d.title} className="p-5 rounded-xl border border-border bg-card">
            <div className="text-[16px] font-semibold">{d.title}</div>
            <div className="mt-1 text-[14px] text-muted-foreground">{d.body}</div>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Start here</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4 text-left">
        {featured.map((f) => (
          <Link key={f.slug} to={`/projects/${f.slug}`} className="group p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors flex items-start justify-between gap-3">
            <div>
              <div className="text-[16px] font-semibold">{f.name}</div>
              <div className="mt-1 text-[14px] text-muted-foreground">{f.line}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
