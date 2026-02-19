import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Youtube, Instagram, BookOpen, Twitter, Check } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const roles = ["Product Manager.", "YouTuber.", "Podcast Host.", "Writer.", "Lifelong Learner."];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: BookOpen, href: "#", label: "Medium" },
  { icon: Twitter, href: "#", label: "Twitter" },
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

const posts = [
  { title: "The Art of Product Thinking", date: "Jan 15, 2026", excerpt: "How to think like a product manager in everyday life.", tag: "Product" },
  { title: "Building in Public: A Year in Review", date: "Dec 28, 2025", excerpt: "Lessons learned from sharing my work openly.", tag: "Personal" },
  { title: "Why I Read 50 Books a Year", date: "Nov 10, 2025", excerpt: "My reading system and how it changed my perspective.", tag: "Reads" },
];

const episodes = [
  { title: "Ep. 12 — Finding Your Niche", description: "We discuss how to find your niche in a crowded market.", date: "Feb 1, 2026" },
  { title: "Ep. 11 — The Power of Habits", description: "A deep dive into building habits that last.", date: "Jan 15, 2026" },
  { title: "Ep. 10 — From Side Project to Startup", description: "How to turn your side project into a real business.", date: "Dec 20, 2025" },
];

const books = [
  { title: "Atomic Habits", author: "James Clear", review: "A practical guide to building good habits and breaking bad ones." },
  { title: "The Mom Test", author: "Rob Fitzpatrick", review: "Essential reading for anyone building products. Changed how I do user research." },
  { title: "Sapiens", author: "Yuval Noah Harari", review: "A sweeping history of humankind that puts everything in perspective." },
  { title: "Deep Work", author: "Cal Newport", review: "Convinced me to restructure my entire work day around focused blocks." },
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

function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-mono text-sm text-muted-foreground">
      {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
    </span>
  );
}

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

// ─── Section wrapper with id for scroll-spy ───────────────────────────────────

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {children}
    </section>
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
    <div className="space-y-32">

      {/* ── Home ── */}
      <Section id="home" className="space-y-8">
        {/* Clock */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <LiveClock />
        </motion.div>

        {/* Bold Statement Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl leading-[1.1]">
            I bridge the gap between
            <br />
            <span className="text-muted-foreground">what teams imagine</span> and
            <br />
            what users{" "}
            <span className="italic text-muted-foreground">fall in love with</span>
          </h1>
        </motion.div>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hey there! I'm <span className="font-semibold text-foreground">John Doe</span>,
            a product builder based in <span className="font-semibold text-foreground">Cairo</span> with
            a passion for weaving <span className="font-semibold text-foreground">meaningful stories</span> through chaos.
          </p>
        </motion.div>

        {/* Rotating roles */}
        <motion.div
          className="h-10 text-2xl font-light text-muted-foreground md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-foreground hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          <ScrambleText text="Cairo, Egypt · GMT+2" />
        </motion.div>

        {/* Hero Illustration */}
        <RevealText>
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={heroIllustration}
              alt="Person leaping between cliffs"
              className="w-full object-cover rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </RevealText>

        {/* Statement section */}
        <div className="space-y-4 pt-4">
          <RevealText>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              I blend my <span className="italic text-muted-foreground">engineering roots</span> with
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              product thinking to make experiences that
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-muted-foreground">
              just… <span className="text-foreground italic">make sense.</span>
            </h2>
          </RevealText>
        </div>
      </Section>

      {/* ── Work ── */}
      <Section id="work">
        <RevealText>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Gyms & Badges</h2>
            <p className="mt-2 text-muted-foreground">
              My professional journey — each role a new gym, each milestone a badge earned.
            </p>
          </div>
        </RevealText>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <RevealText key={i} delay={i * 0.1}>
              <motion.div
                className="group relative border-l-2 border-border pl-8 transition-colors hover:border-foreground"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
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
            </RevealText>
          ))}
        </div>
      </Section>

      {/* ── Blog ── */}
      <Section id="blog">
        <RevealText>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Blog</h2>
            <p className="mt-2 text-muted-foreground">Thoughts on product, life, and everything in between.</p>
          </div>
        </RevealText>

        <StaggerContainer className="space-y-6">
          {posts.map((post, i) => (
            <StaggerItem key={i}>
              <motion.article
                className="group cursor-pointer rounded-lg border border-border p-5 transition-colors hover:bg-accent/50"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-muted-foreground">{post.tag}</span>
                  <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── Podcast ── */}
      <Section id="podcast">
        <RevealText>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Podcast</h2>
            <p className="mt-2 text-muted-foreground">Conversations with interesting people.</p>
          </div>
        </RevealText>

        <StaggerContainer className="space-y-6">
          {episodes.map((ep, i) => (
            <StaggerItem key={i}>
              <div className="rounded-lg border border-border p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{ep.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{ep.date}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{ep.description}</p>
                <div className="mt-3 h-10 rounded-md bg-muted" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── Reads ── */}
      <Section id="reads">
        <RevealText>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Reads</h2>
            <p className="mt-2 text-muted-foreground">Books that shaped my thinking.</p>
          </div>
        </RevealText>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {books.map((book, i) => (
            <StaggerItem key={i}>
              <div className="rounded-lg border border-border p-5 h-full">
                <div className="mb-3 h-32 rounded-md bg-muted" />
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <p className="mt-2 text-sm leading-relaxed">{book.review}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── About ── */}
      <Section id="about">
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
                Hey there! I'm <span className="font-semibold">John Doe</span> — a product
                builder based in <span className="font-semibold">Cairo, Egypt</span> with a
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
      </Section>

      {/* ── Impossible List ── */}
      <Section id="impossible-list" className="pb-24">
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
                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
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
      </Section>

      {/* Updates — floating at bottom between impossible list and footer */}
      <Section id="updates" className="pb-24">
        <RevealText>
          <h2 className="mb-6 text-lg font-semibold">Recent Updates</h2>
        </RevealText>
        <StaggerContainer className="space-y-4">
          {updates.map((update, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="flex items-start gap-4 border-l-2 border-border pl-4 py-2 transition-colors hover:border-foreground"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="min-w-[5rem] font-mono text-xs text-muted-foreground">{update.date}</span>
                <p className="flex-1 text-sm">{update.text}</p>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {update.tag}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

    </div>
  );
}
