import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Check, ExternalLink } from "lucide-react";

import heroImage from "@/assets/hero-transparent.png";

const roles = ["Product Manager.", "Software Developer.", "Business Systems Analyst.", "Lifelong Learner."];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aashithakkar29/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/aashi2912", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/aashi_2912/", label: "Instagram" },
];

const updates = [
  { date: "Feb 2026", text: "Launched new podcast season", tag: "Podcast" },
  { date: "Jan 2026", text: "Published article on product thinking", tag: "Blog" },
  { date: "Dec 2025", text: "Spoke at ProductCon 2025", tag: "Speaking" },
  { date: "Nov 2025", text: "Finished reading 50 books this year", tag: "Reads" },
  { date: "Oct 2025", text: "Started new role as Senior PM", tag: "Work" },
];

const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Corp",
    period: "Nov 2024 — Present",
  },
  {
    role: "Product Manager",
    company: "StartupXYZ",
    period: "2022 — 2024",
  },
  {
    role: "Associate Product Manager",
    company: "BigCo Inc.",
    period: "2020 — 2022",
  },
];

const skillCategories = [
  {
    name: "Product Management",
    items: ["Communication", "Stakeholder Management", "Critical Thinking", "User Research", "UX Design", "Wireframing", "Product Strategy", "Prioritization", "Roadmapping", "Data Analysis", "A/B Testing"],
  },
  {
    name: "Tools",
    items: ["Notion", "JIRA", "Figma", "Amplitude", "Google Analytics", "Firebase"],
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
  },
];

const contentCreation = [
  { title: "Podcast Host", platform: "@MyPodcast", period: "Jan 2023 — Present", link: "#" },
  { title: "Medium Author", platform: "Medium", period: "Oct 2018 — Present", link: "#" },
];

const publications = [
  { title: "Research Paper Title", subtitle: "Published at Conference 2019", date: "May 2019", link: "#" },
];

const volunteering = [
  { role: "Product Expert", org: "Organization Name", period: "May 2020 — Present" },
  { role: "Mentor", org: "EducationUSA", period: "Aug 2015 — Present" },
];

const projects = [
  {
    title: "Product Analytics Dashboard",
    description: "Built an internal analytics tool that reduced reporting time by 60% for the PM team.",
    tag: "Product",
    link: "#",
    year: "2025",
  },
  {
    title: "Onboarding Flow Redesign",
    description: "Redesigned the end-to-end onboarding experience, improving activation rate by 35%.",
    tag: "UX",
    link: "#",
    year: "2024",
  },
  {
    title: "Podcast Website",
    description: "Designed and built a personal podcast website with episode archive and newsletter integration.",
    tag: "Side Project",
    link: "#",
    year: "2024",
  },
  {
    title: "PM Toolkit",
    description: "A curated Notion template system used by 500+ product managers to run discovery and roadmaps.",
    tag: "Templates",
    link: "#",
    year: "2023",
  },
];

const hobbies = [
  {
    emoji: "📚",
    title: "Reading",
    description: "I read ~50 books a year across product, philosophy, and fiction. Current stack: Sapiens, The Mom Test.",
  },
  {
    emoji: "🎙️",
    title: "Podcasting",
    description: "I host a podcast about product thinking, career pivots, and building with intention.",
  },
  {
    emoji: "✍️",
    title: "Writing",
    description: "I write essays about product management, mental models, and learning in public on Medium.",
  },
  {
    emoji: "🏃",
    title: "Running",
    description: "Completed my first marathon in 2024. Currently training for a triathlon.",
  },
];

const impossibleCategories = [
  {
    name: "Fitness",
    items: [
      { text: "Run a marathon", done: true },
      { text: "Complete a triathlon", done: false },
      { text: "Do 100 push-ups in a row", done: true },
      { text: "Hold a 5-minute plank", done: false },
    ],
  },
  {
    name: "Professional",
    items: [
      { text: "Get promoted to Senior PM", done: true },
      { text: "Launch a product used by 1M+ people", done: false },
      { text: "Speak at a major conference", done: true },
      { text: "Mentor 10 aspiring PMs", done: false },
    ],
  },
  {
    name: "Creative",
    items: [
      { text: "Start a podcast", done: true },
      { text: "Write a book", done: false },
      { text: "Publish 100 blog posts", done: false },
      { text: "Reach 10K YouTube subscribers", done: false },
    ],
  },
  {
    name: "Travel",
    items: [
      { text: "Visit Japan", done: true },
      { text: "See the Northern Lights", done: false },
      { text: "Travel to all 7 continents", done: false },
      { text: "Road trip across the US", done: false },
    ],
  },
];

// ─── Utilities ───────────────────────────────────────────────────────────────

function ScrambleText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text.split("").map((char, i) => {
          if (i < iteration) return char;
          if (char === " ") return " ";
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      iteration += 1 / 2;
      if (iteration > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-mono text-sm text-muted-foreground">{displayed}</span>;
}

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Constrained content wrapper used by all non-hero sections
function ContentWrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Index() {
  const [roleIndex, setRoleIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ── Home ── */}
      <section id="home" className="scroll-mt-20">

        {/* Top header: name / roles / social / location */}
        <ContentWrap className="pt-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left: name + roles + social */}
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl leading-tight">
                Aashi Thakkar
              </h1>
              <div className="h-6 text-sm font-normal text-muted-foreground sm:text-base">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1.5 text-muted-foreground transition-all hover:text-foreground"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: location */}
            <div className="self-start">
              <ScrambleText text="TORONTO, ONTARIO" />
            </div>
          </motion.div>
        </ContentWrap>

        {/* Hero image — true full-bleed, zero padding */}
        <motion.div
          className="bg-background relative flex items-center justify-center"
          style={{ height: 'calc(100vh - 160px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <img
            src={heroImage}
            alt="Hero illustration of a person jumping between cliffs"
            className="w-full h-full object-cover"
          />
          <h2 className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center px-4">
            I <span className="italic">bridge</span> the gap between<br />ambition and execution!
          </h2>
        </motion.div>



      </section>

      {/* ── Work ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="work" className="scroll-mt-20">
          <RevealText>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work</h2>
            <p className="mt-1 text-muted-foreground">an overview of my career</p>
          </RevealText>

          {/* Profile Card */}
          <RevealText delay={0.1}>
            <div className="mt-12 flex flex-col items-center text-center gap-4">
              <div className="h-48 w-48 rounded-2xl bg-muted" />
              <div>
                <h3 className="text-2xl font-bold">Aashi Thakkar</h3>
                <p className="text-muted-foreground">Product Manager</p>
              </div>
              <div className="flex gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent">
                  Résumé <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.linkedin.com/in/aashithakkar29/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent">
                  LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </RevealText>

          {/* Bio */}
          <RevealText delay={0.15}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Bio</span>
              </div>
              <div className="flex-1 space-y-4 text-sm leading-relaxed">
                <p>I'm a Product Manager based in Toronto, and I currently work at Tech Corp leading product strategy for the core platform.</p>
                <p className="text-muted-foreground">After discovering HCI during my studies, I realized I could combine two of my greatest passions: tech and psychology. This led me on a clear path towards product management.</p>
                <p className="text-muted-foreground">With a background in Computer Science, I've honed my skills through years of experience as a Product Manager at various tech companies. I firmly believe that products should be user-centric.</p>
              </div>
            </div>
          </RevealText>

          {/* Experience */}
          <RevealText delay={0.2}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Experience</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex items-start gap-4 py-5">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-muted" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-sm font-semibold">{exp.role}</h4>
                        <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealText>




          {/* Skills */}
          <RevealText delay={0.3}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Skills</span>
              </div>
              <div className="flex-1 space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.name}>
                    <h4 className="mb-2 text-xs font-mono tracking-wider text-muted-foreground uppercase">{cat.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealText>

          {/* Education */}
          <RevealText delay={0.35}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Education</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-4 py-5">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-muted" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-sm font-semibold">{edu.degree}</h4>
                        <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealText>




          {/* Contact */}
          <RevealText delay={0.55}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Contact</span>
              </div>
              <div className="flex-1 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/aashithakkar29/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent">Hire Me</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent">Coffee Chat</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent">1:1 Mentorship</a>
              </div>
            </div>
          </RevealText>
        </section>
      </ContentWrap>

      {/* ── Projects ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="projects">
          <RevealText>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
              <p className="mt-2 text-muted-foreground">Things I've built, shipped, or experimented with.</p>
            </div>
          </RevealText>

          <StaggerContainer className="space-y-6">
            {projects.map((project, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="group cursor-pointer rounded-lg border border-border p-5 transition-colors hover:bg-accent/50"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-muted-foreground">{project.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold group-hover:underline">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ContentWrap>

      {/* ── Hobbies ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="hobbies">
          <RevealText>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hobbies</h2>
              <p className="mt-2 text-muted-foreground">What I do when I'm not building products.</p>
            </div>
          </RevealText>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {hobbies.map((hobby, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="rounded-lg border border-border p-6 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-3xl">{hobby.emoji}</span>
                  <h3 className="mt-3 text-lg font-semibold">{hobby.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hobby.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ContentWrap>

      {/* ── About ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="about">
          <RevealText>
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Jack of all trades,
              </h2>
              <h3 className="text-4xl font-bold tracking-tight md:text-5xl text-muted-foreground">
                Master of <span className="italic text-foreground">some.</span>
              </h3>
            </div>
          </RevealText>

          <div className="grid gap-12 md:grid-cols-[auto_1fr]">
            <RevealText delay={0.1}>
              <div className="h-64 w-64 rounded-2xl bg-muted" />
            </RevealText>

            <div className="space-y-6">
              <RevealText delay={0.2}>
                <p className="text-base leading-relaxed">
                  Hey there! I'm <span className="font-semibold">Aashi Thakkar</span> — a product
                  builder based in <span className="font-semibold">Toronto, Ontario</span> with a
                  passion for turning ambiguous problems into elegant solutions.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I started my career in software engineering before transitioning to product management.
                  This technical background helps me bridge the gap between engineering and business — and
                  I love the challenge of making complex systems feel effortless to use.
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  When I'm not obsessing over product strategy, you'll find me recording podcast episodes,
                  writing blog posts, or buried in a good book. I believe in{" "}
                  <span className="font-semibold text-foreground">learning in public</span> and sharing everything I discover.
                </p>
              </RevealText>
            </div>
          </div>
        </section>
      </ContentWrap>

      {/* ── Impossible List ── */}
      <ContentWrap className="py-24 pb-32 scroll-mt-20">
        <section id="impossible-list">
          <RevealText>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Impossible List</h2>
              <p className="mt-2 text-muted-foreground">
                Not a bucket list — it's an evolving list of goals that push my limits.
              </p>
            </div>
          </RevealText>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2">
            {impossibleCategories.map((cat) => (
              <StaggerItem key={cat.name}>
                <div>
                  <h3 className="mb-4 text-lg font-semibold">{cat.name}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        {item.done ? (
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                        ) : (
                          <span className="h-4 w-4 shrink-0 rounded-full border border-border" />
                        )}
                        <span className={item.done ? "line-through text-muted-foreground" : ""}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ContentWrap>

    </div>
  );
}
