import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, Check, ExternalLink, FileText, Coffee, Link } from "lucide-react";

import heroImage from "@/assets/hero-transparent.png";
import profilePhoto from "@/assets/profile-photo.jpeg";
import logoRbc from "@/assets/logo-rbc.svg";
import logoCognizant from "@/assets/logo-cognizant.png";
import logoGirlscript from "@/assets/logo-girlscript.png";
import logoLt from "@/assets/logo-lt.png";
import logoUwindsor from "@/assets/logo-uwindsor.svg";
import logoGtu from "@/assets/logo-gtu.png";
import eduPhoto1 from "@/assets/edu-photo-1.jpeg";
import eduPhoto2 from "@/assets/edu-photo-2.jpeg";

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
    role: "Product Manager",
    company: "RBC Capital Markets",
    period: "Jan 2025 — Present",
    logo: logoRbc,
  },
  {
    role: "Software Developer",
    company: "RBC Capital Markets",
    period: "Sep 2023 — Dec 2024",
    logo: logoRbc,
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "Mar 2021 — Jun 2022",
    logo: logoCognizant,
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    period: "Mar 2021 — May 2021",
    logo: logoGirlscript,
  },
  {
    role: "Software Developer Intern",
    company: "Larsen & Toubro",
    period: "May 2019 — Jun 2019",
    logo: logoLt,
  },
];

const skillCategories = [
  {
    name: "Product Management",
    items: ["Communication", "Stakeholder Management", "Critical Thinking", "User Research", "Product Strategy", "Project Management", "Market Research", "Design Systems", "Competitive Analysis", "Data Analysis", "AI/ML", "A/B Testing", "Product Integration", "Data Visualization", "Product Localization", "Product Vision", "Roadmap Planning", "Feature Prioritization", "Product Lifecycle Management", "Product Launch Execution", "Agile/Scrum", "Backlog Grooming", "User Stories", "Acceptance Criteria", "Cross-functional Collaboration", "PRDs", "BRDs", "Functional Specifications", "Data Flow Diagrams", "Process Modeling (BPM)", "UAT", "Requirements Gathering"],
  },
  {
    name: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "C", "HTML/CSS"],
  },
  {
    name: "Technologies/Frameworks",
    items: ["React", "Bootstrap", "MUI", "Next.js", "Node.js", "Git"],
  },
  {
    name: "Tools",
    items: ["Notion", "Figma", "VS Code", "JIRA", "Power BI", "Tableau", "Microsoft Visio", "Excel", "Postman", "GitHub", "Confluence"],
  },
  {
    name: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    name: "Spoken Languages",
    items: ["English", "Hindi 🇮🇳", "Gujarati"],
  },
];

const education = [
  {
    degree: "Masters of Engineering, Applied Computing",
    school: "University of Windsor",
    period: "Sept 2022 — April 2024",
    logo: logoUwindsor,
  },
  {
    degree: "Bachelors of Engineering, Computer Science",
    school: "Gujarat Technological University",
    period: "Aug 2016 — Aug 2020",
    logo: logoGtu,
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
              <h1 className="text-[26px] font-bold tracking-tight sm:text-[32px] leading-tight">
                Aashi Thakkar
              </h1>
              <div className="h-6 text-[16px] font-normal text-muted-foreground sm:text-[18px]">
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
                    <Icon className="h-5 w-5" />
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
            <h2 className="text-[28px] font-bold tracking-tight">Work</h2>
            <p className="mt-1 text-[18px] text-muted-foreground">an overview of my career</p>
          </RevealText>

          {/* Profile Card */}
          <RevealText delay={0.1}>
            <div className="mt-12 flex flex-col items-center text-center gap-4">
              <img src={profilePhoto} alt="Aashi Thakkar" className="w-80 h-[28rem] rounded-2xl object-cover object-top" />
              <div>
                <h3 className="text-[26px] font-bold">Aashi Thakkar</h3>
                <p className="text-[18px] text-muted-foreground">Product Manager</p>
              </div>


            </div>
          </RevealText>

          {/* Bio */}
          <RevealText delay={0.15}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Bio</span>
              </div>
              <div className="flex-1 space-y-4 text-[17px] leading-[1.75]">
                <p>I am a Product Manager based in Toronto, currently leading Alternative Data, Gen AI, and Research Technology products at Royal Bank of Canada – Capital Markets.</p>
                <p>I started my career in software development. After 3 years of building systems and writing code, I realized I was more curious about how technology actually fits into people's workflows. I was always more interested in the "why" behind things — what we were shipping, why we were building them, who they were for, and whether they truly made an impact.</p>
                <p>That's when I found my passion for UX and Product. And guess what? I was actually better at it — even while performing those responsibilities in my role as a developer. 💡</p>
                <p>I don't just enjoy building systems — I enjoy deciding what should be built, why, and for whom. 🎯</p>
                <p>What I've come to love most is how Product Managers think and operate — owning the problem, shaping the solution, and driving impact through clarity and collaboration. 🚀 Ultimately, that led me to a clear path toward product management.</p>
                <p>Today, I work at the intersection of tech and business, translating complex, ambiguous problems into clear product direction. I build solutions that are not only technically sound, but genuinely useful. ⚙️</p>
                <p>I strongly believe great products are user-centered and grounded in real needs — and that lens guides everything I build. ✨</p>
                <p>If you're curious about AI, data-driven products, or thoughtful product strategy, let's connect. 🤝</p>
                <p>And if you want to see what I'm up to outside of work — check out my <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] underline underline-offset-4 decoration-[hsl(200,50%,35%,0.4)] dark:decoration-[hsl(200,40%,75%,0.4)] hover:opacity-80 transition-opacity font-medium">About</a>!</p>
              </div>
            </div>
          </RevealText>

          {/* Experience */}
          <RevealText delay={0.2}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Experience</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex items-start gap-4 py-5">
                    <img src={exp.logo} alt={exp.company} className="mt-1 h-10 w-10 shrink-0 rounded-lg object-contain" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-[17px] font-semibold">{exp.role}</h4>
                        <span className="font-mono text-[13px] text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-[15px] text-muted-foreground">{exp.company}</p>
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
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Skills</span>
              </div>
              <div className="flex-1 space-y-8">
                {skillCategories.map((cat) => (
                  <div key={cat.name}>
                    <h4 className="mb-4 text-[22px] font-bold">{cat.name}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {cat.items.map((skill) => (
                        <span key={skill} className="rounded-full border border-[hsl(200,100%,40%,0.25)] bg-[hsl(200,100%,50%,0.1)] px-3 py-2 text-[14px] text-[hsl(200,50%,35%)] dark:border-[hsl(200,100%,50%,0.15)] dark:bg-[hsl(200,100%,50%,0.13)] dark:text-[hsl(200,40%,75%)]">{skill}</span>
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
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Education</span>
              </div>
              <div className="flex-1 divide-y divide-border/40">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-4 py-5">
                    <img src={edu.logo} alt={edu.school} className="mt-1 h-10 w-10 shrink-0 rounded-lg object-contain dark:mix-blend-lighten" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-[17px] font-semibold">{edu.degree}</h4>
                        <span className="font-mono text-[13px] text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-[15px] text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealText>

          {/* Education Photos */}
          <RevealText delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto1} alt="At Assumption College" className="w-full h-full object-cover object-[center_85%]" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={eduPhoto2} alt="Graduation" className="w-full h-full object-cover object-[center_25%]" />
              </div>
            </div>
          </RevealText>


          {/* Contact */}
          <RevealText delay={0.55}>
            <div className="mt-16 flex flex-col sm:flex-row sm:gap-16">
              <div className="mb-4 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-[15px] font-mono tracking-[0.2em] text-muted-foreground uppercase">Contact</span>
              </div>
              <div className="flex-1">
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="/Aashi_Thakkar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">Hire Me <FileText size={16} /></a>
                  <a href="https://www.linkedin.com/in/aashithakkar29/" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">Coffee Chat <Coffee size={16} /></a>
                  <a href="https://topmate.io/aashi_thakkar" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-[15px] font-medium transition-colors hover:bg-accent">1:1 Mentorship <Link size={16} /></a>
                </div>

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

      {/* ── About ── */}
      <ContentWrap className="py-24 scroll-mt-20">
        <section id="about">
          {/* Headline */}
          <RevealText>
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] whitespace-nowrap">
                When I'm not obsessing over product strategy,
              </h2>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground whitespace-nowrap">
                I'm probably doing <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">all of this.</span>
              </h3>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="mb-14 text-[17px] text-muted-foreground whitespace-nowrap">
              Indulging in the many hobbies I try to juggle outside the 9-to-5. Here's a peek 👀
            </p>
          </RevealText>

          {/* Current Hobbies - Polaroid scattered layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { emoji: "🎨", title: "Painting", caption: "Bringing colors to life on canvas", rotate: "-2deg", delay: 0.1 },
              { emoji: "🌍", title: "Exploring new places", caption: "Always planning the next adventure", rotate: "1.5deg", delay: 0.15 },
              { emoji: "🤿", title: "Snorkelling", caption: "Discovering the world beneath the waves", rotate: "-1deg", delay: 0.2 },
              { emoji: "📚", title: "Reading", caption: "Getting lost in stories & ideas", rotate: "2.5deg", delay: 0.25 },
              { emoji: "🏺", title: "Pottery", caption: "Moulding clay into something beautiful", rotate: "-3deg", delay: 0.3 },
              { emoji: "🥾", title: "Hiking", caption: "Chasing trails & mountain views", rotate: "1deg", delay: 0.35 },
              { emoji: "💃", title: "Kathak", caption: "Indian classical dance — rhythm & expression", rotate: "-2.5deg", delay: 0.4 },
              { emoji: "🏊‍♀️", title: "Swimming", caption: "My kind of meditation", rotate: "2deg", delay: 0.45 },
            ].map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: hobby.rotate }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: hobby.delay, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <motion.div
                  className="relative rounded-lg border border-border bg-card p-4 shadow-lg dark:shadow-[0_8px_30px_-12px_hsl(200,100%,50%,0.1)] cursor-grab"
                  whileHover={{ scale: 1.06, rotate: "0deg", zIndex: 10, boxShadow: "0 20px 40px -15px hsl(200 100% 50% / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Polaroid "photo" area */}
                  <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-secondary to-muted flex items-center justify-center mb-3">
                    <motion.span
                      className="text-5xl"
                      whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {hobby.emoji}
                    </motion.span>
                  </div>
                  {/* Caption */}
                  <h4 className="text-[15px] font-bold leading-snug">{hobby.title}</h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{hobby.caption}</p>
                  {/* Pin dot */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[hsl(200,50%,35%)] dark:bg-[hsl(200,40%,75%)] shadow-md" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* In the Queue section */}
          <RevealText delay={0.2}>
            <div className="mt-20 mb-6">
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                In the Queue 🎯
              </h3>
              <p className="mt-1 text-sm text-muted-foreground italic">
                Gonna try these soon — the list never stops growing
              </p>
            </div>
          </RevealText>

          <StaggerContainer className="flex flex-wrap gap-2.5">
            {[
              { label: "⛷️ Ski", delay: 0.05 },
              { label: "⛸️ Skate", delay: 0.08 },
              { label: "🤿 Scuba Diving", delay: 0.11 },
              { label: "🪂 Sky Diving", delay: 0.14 },
              { label: "🎸 Learn Guitar", delay: 0.17 },
              { label: "🖥️ Digital Art", delay: 0.2 },
              { label: "🎨 Graphic Design", delay: 0.23 },
              { label: "🧶 Knitting", delay: 0.26 },
              { label: "💃 Salsa", delay: 0.29 },
              { label: "🏓 Table Tennis", delay: 0.32 },
              { label: "🪡 Embroidery", delay: 0.35 },
              { label: "🏄‍♀️ Surf", delay: 0.38 },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.span
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {item.label}
                </motion.span>
              </StaggerItem>
            ))}
            <StaggerItem>
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-muted-foreground/30 bg-transparent px-4 py-2 text-sm text-muted-foreground italic cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                ...and so many more ✨
              </motion.span>
            </StaggerItem>
          </StaggerContainer>

          <RevealText delay={0.3}>
            <p className="mt-10 text-center text-sm text-muted-foreground font-mono tracking-wide">
              Jack of all trades, master of none? <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">But oftentimes better than a master of one.</span>
            </p>
          </RevealText>
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
