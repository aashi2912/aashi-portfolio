const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Corp",
    period: "2024 – Present",
    description: "Leading product strategy for the core platform, driving 40% growth in user engagement.",
  },
  {
    role: "Product Manager",
    company: "StartupXYZ",
    period: "2022 – 2024",
    description: "Built and launched 3 major product features from 0 to 1, growing ARR by $2M.",
  },
  {
    role: "Associate Product Manager",
    company: "BigCo Inc.",
    period: "2020 – 2022",
    description: "Managed the onboarding experience, improving activation rates by 25%.",
  },
];

export default function Work() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Work</h1>
        <p className="mt-2 text-muted-foreground">My professional journey so far.</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-border pl-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-semibold">{exp.role}</h3>
              <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
