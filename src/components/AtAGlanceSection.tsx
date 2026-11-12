
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


export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">At a glance</h2>
      <div className="mt-6 max-w-2xl mx-auto space-y-4 text-[18px] leading-relaxed text-muted-foreground">
        <p>
          Engineer-first product and AI strategist who ships. Today I walk that bridge every day at RBC Capital Markets, owning the strategy and roadmap for AidenResearch -
          a team of AI agents that help research analysts get to the insight faster, so they can spend their time on the
          thinking only humans can do.
        </p>
        <p>
          The work got noticed: it's featured in{" "}
          <a href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold underline decoration-2 underline-offset-4 decoration-[hsl(200,60%,60%)] hover:decoration-[hsl(200,70%,45%)] transition-colors">NVIDIA's customer story</a>{" "}
          and was presented on stage at the{" "}
          <a href="https://www.youtube.com/watch?v=c4oVUmt15PY" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold underline decoration-2 underline-offset-4 decoration-[hsl(200,60%,60%)] hover:decoration-[hsl(200,70%,45%)] transition-colors">Databricks Data + AI Summit</a>.
          Not bad for someone who still gets excited every time an agent gets it right.
        </p>
      </div>

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

    </div>
  );
}
