const posts = [
  { title: "The Art of Product Thinking", date: "Jan 15, 2026", excerpt: "How to think like a product manager in everyday life.", tag: "Product" },
  { title: "Building in Public: A Year in Review", date: "Dec 28, 2025", excerpt: "Lessons learned from sharing my work openly.", tag: "Personal" },
  { title: "Why I Read 50 Books a Year", date: "Nov 10, 2025", excerpt: "My reading system and how it changed my perspective.", tag: "Reads" },
];

export default function Blog() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted-foreground">Thoughts on product, life, and everything in between.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer rounded-lg border border-border p-5 transition-colors hover:bg-accent/50">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-muted-foreground">{post.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold group-hover:underline">{post.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
