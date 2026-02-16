import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Jeevanshu-style career badges
const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Corp",
    period: "2024 – Present",
    description: "Leading product strategy for the core platform, driving 40% growth in user engagement.",
    badge: "🏆",
  },
  {
    role: "Product Manager",
    company: "StartupXYZ",
    period: "2022 – 2024",
    description: "Built and launched 3 major product features from 0 to 1, growing ARR by $2M.",
    badge: "🚀",
  },
  {
    role: "Associate Product Manager",
    company: "BigCo Inc.",
    period: "2020 – 2022",
    description: "Managed the onboarding experience, improving activation rates by 25%.",
    badge: "⚡",
  },
];

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Work() {
  return (
    <div className="space-y-16">
      <RevealSection>
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Gyms & Badges</h1>
          <p className="mt-2 text-muted-foreground">
            My professional journey — each role a new gym, each milestone a badge earned.
          </p>
        </div>
      </RevealSection>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <motion.div
              className="group relative border-l-2 border-border pl-8 transition-colors hover:border-foreground"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Badge */}
              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base">
                {exp.badge}
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
              <p className="mt-3 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          </RevealSection>
        ))}
      </div>
    </div>
  );
}
