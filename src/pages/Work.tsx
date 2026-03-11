import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Corp",
    period: "Nov 2024 — Present",
    logo: null,
  },
  {
    role: "Product Manager, Design Systems",
    company: "Asana",
    period: "Feb 2023 — Jan 2024",
    logo: null,
  },
  {
    role: "Product Manager, Mobile",
    company: "Pluralsight",
    period: "Sep 2019 — Feb 2023",
    logo: null,
  },
  {
    role: "UX Research Intern",
    company: "Udemy",
    period: "Jun 2018 — Aug 2018",
    logo: null,
  },
];

const projects = [
  {
    title: "Product Analytics Dashboard",
    description: "Built an internal analytics tool that reduced reporting time by 60%.",
    link: "#",
  },
  {
    title: "Onboarding Flow Redesign",
    description: "Redesigned end-to-end onboarding, improving activation rate by 35%.",
    link: "#",
  },
];

const skillCategories = [
  {
    name: "Product Management",
    items: [
      "Communication", "Stakeholder Management", "Critical Thinking",
      "User Research", "UX Design", "Wireframing", "Product Strategy",
      "Project Management", "Market Research", "Competitive Analysis",
      "Data Analysis", "A/B Testing", "Data Visualization",
    ],
  },
  {
    name: "AI/ML",
    items: [
      "LLMs", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering",
      "NLP", "Embeddings", "Vector Search", "AI Agents", "Model Evaluation Metrics",
    ],
  },
  {
    name: "Tools",
    items: [
      "Notion", "JIRA", "Figma", "Framer", "Amplitude",
      "Google Analytics", "Firebase", "Segment",
    ],
  },
  {
    name: "Programming",
    items: ["SQL", "HTML", "CSS", "Python", "JavaScript"],
  },
  {
    name: "Languages",
    items: ["English", "Hindi 🇮🇳", "Gujarati"],
  },
];

const education = [
  {
    degree: "Bachelor of Arts, Computer Science",
    school: "University Name",
    period: "Aug 2015 — May 2019",
    note: null,
    logo: null,
  },
];

const contentCreation = [
  {
    title: "Podcast Host",
    platform: "@MyPodcast",
    period: "Jan 2023 — Present",
    link: "#",
  },
  {
    title: "Medium Author",
    platform: "Medium",
    period: "Oct 2018 — Present",
    link: "#",
  },
];

const publications = [
  {
    title: "Research Paper Title (200+ citations)",
    subtitle: "Published at CHI 2019",
    date: "May 2019",
    link: "#",
  },
];

const volunteering = [
  {
    role: "Product Expert",
    org: "Organization Name",
    period: "May 2020 — Present",
    link: "#",
  },
  {
    role: "Mentor",
    org: "EducationUSA",
    period: "Aug 2015 — Present",
    link: null,
  },
];

// ─── Utilities ──────────────────────────────────────────────────────────────

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

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
      <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{label}</span>
    </div>
  );
}

function ContentWrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Work() {
  return (
    <div>
      {/* Header */}
      <ContentWrap className="pt-12 pb-10">
        <RevealSection>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Work</h1>
          <p className="mt-1 text-muted-foreground">An overview of my career.</p>
        </RevealSection>
      </ContentWrap>

      {/* Profile Card */}
      <ContentWrap className="pb-12">
        <RevealSection delay={0.1}>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-48 w-48 rounded-2xl bg-muted" />
            <div>
              <h2 className="text-2xl font-bold">Aashi Thakkar</h2>
              <p className="text-muted-foreground">Product Manager</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Résumé <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aashithakkar29/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Bio */}
      <ContentWrap className="pb-16">
        <RevealSection delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Bio" />
            <div className="flex-1 space-y-4 text-sm leading-relaxed">
              <p>
                I'm a Product Manager based in Toronto, and I currently work at Tech Corp leading
                product strategy for the core platform.
              </p>
              <p className="text-muted-foreground">
                After discovering HCI during my studies, I realized I could combine two of my
                greatest passions: tech and psychology. This led me on a clear path towards product
                management.
              </p>
              <p className="text-muted-foreground">
                With a background in Computer Science, I've honed my skills through years of
                experience as a Product Manager at various tech companies. I firmly believe that
                products should be user-centric.
              </p>
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Experience */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Experience" />
            <div className="flex-1 divide-y divide-border/40">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-4 py-5">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-muted" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold">{exp.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Projects Portfolio */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Projects" />
            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  className="group rounded-xl border border-border p-5 transition-colors hover:bg-accent/50"
                >
                  <div className="mb-3 h-10 w-10 rounded-lg bg-muted" />
                  <h3 className="text-sm font-semibold group-hover:underline">{project.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Skills */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Skills" />
            <div className="flex-1 space-y-6">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <h4 className="mb-2 text-xs font-mono tracking-wider text-muted-foreground uppercase">{cat.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Education */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Education" />
            <div className="flex-1 divide-y divide-border/40">
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-4 py-5">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-muted" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold">{edu.degree}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    {edu.note && <p className="mt-1 text-xs text-muted-foreground italic">{edu.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Content Creation */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Content" />
            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {contentCreation.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border p-5 transition-colors hover:bg-accent/50"
                >
                  <div className="mb-3 h-10 w-10 rounded-lg bg-muted" />
                  <h3 className="text-sm font-semibold group-hover:underline">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.platform}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Publications */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Publications" />
            <div className="flex-1 divide-y divide-border/40">
              {publications.map((pub, i) => (
                <a
                  key={i}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-5 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-semibold group-hover:underline">{pub.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{pub.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{pub.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Volunteering */}
      <ContentWrap className="pb-16">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Volunteering" />
            <div className="flex-1 divide-y divide-border/40">
              {volunteering.map((vol, i) => (
                <div key={i} className="flex items-start gap-4 py-5">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-muted" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold">{vol.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{vol.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{vol.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </ContentWrap>

      {/* Contact */}
      <ContentWrap className="pb-24">
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:gap-16">
            <SectionLabel label="Contact" />
            <div className="flex-1 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/aashithakkar29/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Coffee Chat
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                1:1 Mentorship
              </a>
            </div>
          </div>
        </RevealSection>
      </ContentWrap>
    </div>
  );
}
