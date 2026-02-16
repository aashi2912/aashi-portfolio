export default function About() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-2 text-muted-foreground">A little bit about me.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <div className="h-64 w-64 rounded-2xl bg-muted" /> {/* Photo placeholder */}

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Hi, I'm John Doe — a product manager, writer, and lifelong learner based in Cairo, Egypt.
            I'm passionate about building products that make people's lives better.
          </p>
          <p>
            When I'm not working on product strategy, you can find me recording podcast episodes,
            writing blog posts, or buried in a good book. I believe in learning in public and
            sharing everything I learn along the way.
          </p>
          <p>
            I started my career in software engineering before transitioning to product management.
            This technical background helps me bridge the gap between engineering and business,
            and I love the challenge of turning ambiguous problems into clear, actionable solutions.
          </p>
          <p>
            Outside of work, I'm working through my impossible list — a living document of
            goals and challenges that push me outside my comfort zone.
          </p>
        </div>
      </div>
    </div>
  );
}
