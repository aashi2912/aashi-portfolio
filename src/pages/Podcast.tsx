const episodes = [
  { title: "Ep. 12 - Finding Your Niche", description: "We discuss how to find your niche in a crowded market.", date: "Feb 1, 2026" },
  { title: "Ep. 11 - The Power of Habits", description: "A deep dive into building habits that last.", date: "Jan 15, 2026" },
  { title: "Ep. 10 - From Side Project to Startup", description: "How to turn your side project into a real business.", date: "Dec 20, 2025" },
];

export default function Podcast() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Podcast</h1>
        <p className="mt-2 text-muted-foreground">Conversations with interesting people.</p>
      </div>

      <div className="space-y-6">
        {episodes.map((ep, i) => (
          <div key={i} className="rounded-lg border border-border p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{ep.title}</h2>
              <span className="font-mono text-xs text-muted-foreground">{ep.date}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{ep.description}</p>
            <div className="mt-3 h-10 rounded-md bg-muted" /> {/* Audio player placeholder */}
          </div>
        ))}
      </div>
    </div>
  );
}
