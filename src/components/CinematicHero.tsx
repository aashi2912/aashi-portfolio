import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Pause,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-transparent.png";
import profilePhoto from "@/assets/profile-photo.jpeg";
import vibeRouteHero from "@/assets/vibe-route-hero.png";
import blindSpotHero from "@/assets/blind-spot-hero-v2.jpg";

const roles = ["Product Manager.", "Software Developer.", "Vibe Coder.", "Lifelong Learner."];

const SubstackIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinejoin="round"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <g transform="translate(1.68 1.68) scale(0.86)">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </g>
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aashithakkar29/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/aashi2912", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/aashi_2912/", label: "Instagram" },
  { icon: SubstackIcon, href: "https://substack.com/@aashithakkar", label: "Substack" },
];

const chapters = [
  {
    eyebrow: "Technology × people",
    title: <>I <em>bridge</em> the gap between<br className="hidden sm:block" /> ambition and execution!</>,
    shortTitle: "The bridge",
    description: "Engineer-first product and AI strategist who ships.",
    cta: "Discover my story",
    path: "/homepage",
    target: "summary",
  },
  {
    eyebrow: "Product × AI",
    title: <>Building AI products<br className="hidden sm:block" /> around <em>real people.</em></>,
    shortTitle: "What I build",
    description: "Strategy, experimentation, and thoughtful execution - from ambiguity to launch.",
    cta: "Explore selected work",
    path: "/projects",
    target: "projects",
  },
  {
    eyebrow: "Curiosity × momentum",
    title: <>Always learning.<br className="hidden sm:block" /> Always <em>moving.</em></>,
    shortTitle: "Beyond the roadmap",
    description: "The same curiosity that shapes my products follows me everywhere else.",
    cta: "Meet me beyond work",
    path: "/about",
    target: "about",
  },
];

function Opening({ onComplete }: { onComplete: () => void }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onComplete, reduceMotion ? 150 : 1650);
    return () => window.clearTimeout(timer);
  }, [onComplete, reduceMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground text-background"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: reduceMotion ? 0.1 : 0.75, ease: [0.76, 0, 0.24, 1] }}
      aria-label="Opening Aashi Thakkar's portfolio"
    >
      <div className="relative overflow-hidden px-6 text-center">
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-none tracking-[-0.055em]">
            Aashi Thakkar
          </div>
          <div className="mt-5 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
            <span>Product</span><span className="h-1 w-1 rounded-full bg-current" />
            <span>AI</span><span className="h-1 w-1 rounded-full bg-current" />
            <span>Strategy</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-background/70"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: reduceMotion ? 0.1 : 1.45, ease: "easeInOut" }}
      />
      <button
        type="button"
        onClick={onComplete}
        className="absolute bottom-7 right-7 rounded-full border border-background/30 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:bg-background hover:text-foreground"
      >
        Skip intro
      </button>
    </motion.div>
  );
}

function SceneVisual({ index }: { index: number }) {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[28px] border border-border/50 bg-secondary sm:min-h-[390px] lg:min-h-0 lg:rounded-[36px]">
      <AnimatePresence mode="popLayout" initial={false}>
        {index === 0 && (
          <motion.div
            key="bridge"
            className="absolute inset-0"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.img
              src={heroImage}
              alt="Two cliffs connected by a bridge"
              className="h-full w-full object-cover object-center mix-blend-multiply dark:brightness-150"
              initial={{ scale: 1.13 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
          </motion.div>
        )}
        {index === 1 && (
          <motion.div
            key="product"
            className="absolute inset-0"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <img src={vibeRouteHero} alt="Vibe Route product" className="h-full w-full object-cover" />
            <motion.div
              className="absolute -bottom-10 -right-4 w-[58%] overflow-hidden rounded-2xl border-[5px] border-background shadow-2xl sm:-right-8"
              initial={{ x: 100, rotate: 8, opacity: 0 }}
              animate={{ x: 0, rotate: -4, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={blindSpotHero} alt="Blind Spot product" className="aspect-[4/3] w-full object-cover" />
            </motion.div>
            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Shipped, not just imagined
            </div>
          </motion.div>
        )}
        {index === 2 && (
          <motion.div
            key="person"
            className="absolute inset-0 bg-[hsl(200,60%,92%)] dark:bg-[hsl(200,40%,18%)]"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.img
              src={profilePhoto}
              alt="Aashi Thakkar"
              className="h-full w-full object-cover object-[center_18%]"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">Based in</div>
                <div className="mt-1 text-2xl font-bold tracking-tight">Toronto, Ontario</div>
              </div>
              <div className="text-4xl" aria-hidden="true">↗</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-[0.09]" />
      <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-current opacity-30" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-current opacity-30" />
    </div>
  );
}

export function CinematicHero() {
  const [chapter, setChapter] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [introVisible, setIntroVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem("aashi-intro-seen") !== "true";
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const dismissIntro = useCallback(() => {
    window.sessionStorage.setItem("aashi-intro-seen", "true");
    setIntroVisible(false);
  }, []);

  const selectChapter = useCallback((next: number) => {
    setChapter((next + chapters.length) % chapters.length);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((value) => (value + 1) % roles.length), 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || introVisible) return;
    const interval = window.setInterval(() => selectChapter(chapter + 1), 6800);
    return () => window.clearInterval(interval);
  }, [chapter, paused, reduceMotion, introVisible, selectChapter]);

  const current = chapters[chapter];

  return (
    <>
      <AnimatePresence>{introVisible && <Opening onComplete={dismissIntro} />}</AnimatePresence>
      <div ref={heroRef} className="cinematic-hero relative min-h-[100svh] overflow-hidden">
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-[0.045]" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[8vw] top-[12%] select-none text-[34vw] font-bold leading-none tracking-[-0.1em] text-foreground/[0.025]"
          animate={reduceMotion ? undefined : { x: [0, -24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          AT
        </motion.div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 pb-6 pt-6 sm:px-8 lg:px-12 lg:pb-8 lg:pt-8">
          <motion.header
            className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
            initial={{ opacity: 0, y: -18 }}
            animate={introVisible ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }}
            transition={{ delay: introVisible ? 0 : 0.1, duration: 0.65 }}
          >
            <div>
              <h1>
                <Link to="/homepage" className="inline-block text-[27px] font-bold tracking-[-0.04em] sm:text-[32px]">
                  Aashi Thakkar
                </Link>
              </h1>
              <div className="mt-1 h-6 text-[16px] text-muted-foreground sm:text-[18px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="block"
                    initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(5px)" }}
                    transition={{ duration: 0.35 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:pt-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(200,60%,55%)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(200,60%,45%)] dark:bg-[hsl(200,60%,70%)]" />
              </span>
              Toronto, Ontario
            </div>
          </motion.header>

          <div className="grid flex-1 items-center gap-7 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-7">
            <motion.div style={{ y: reduceMotion ? 0 : contentY }} className="relative z-10 flex flex-col justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={chapter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[hsl(200,50%,35%)] dark:text-[hsl(200,45%,72%)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <span className="h-px w-10 bg-current" />
                    {current.eyebrow}
                  </motion.div>
                  <div className="overflow-hidden pb-2">
                    <motion.h2
                      className="max-w-[760px] text-[clamp(2.65rem,5.2vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.055em]"
                      initial={{ y: "110%", rotate: 2 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {current.title}
                    </motion.h2>
                  </div>
                  <motion.p
                    className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.55 }}
                  >
                    {current.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.55 }}
                  >
                    <Link
                      to={current.path}
                      onClick={(event) => {
                        if (current.target !== "summary") return;
                        event.preventDefault();
                        document.getElementById("summary")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
                      }}
                      className="group mt-7 inline-flex items-center gap-4 text-[15px] font-semibold"
                    >
                      <span className="relative">
                        {current.cta}
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-300 group-hover:scale-x-0" />
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              style={{ y: reduceMotion ? 0 : visualY }}
              className="relative h-[42vh] min-h-[320px] lg:h-[min(62vh,680px)] lg:min-h-[440px]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={introVisible ? { opacity: 0, scale: 0.94 } : { opacity: 1, scale: 1 }}
              transition={{ delay: introVisible ? 0 : 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <SceneVisual index={chapter} />
            </motion.div>
          </div>

          <div className="relative z-20 grid gap-5 border-t border-border/60 pt-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {chapters.map((item, index) => (
                <button
                  type="button"
                  key={item.shortTitle}
                  onClick={() => selectChapter(index)}
                  className="group text-left"
                  aria-label={`Show ${item.shortTitle}`}
                  aria-pressed={chapter === index}
                >
                  <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground sm:text-[10px]">
                    <span>0{index + 1}</span>
                    <span className="hidden truncate sm:inline">{item.shortTitle}</span>
                  </div>
                  <div className="h-[2px] overflow-hidden bg-border">
                    {chapter === index ? (
                      <motion.div
                        key={`${chapter}-${paused}`}
                        className="h-full origin-left bg-foreground"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: paused || reduceMotion ? 0.2 : 6.8, ease: "linear" }}
                      />
                    ) : (
                      <div className="h-full w-0 bg-foreground transition-all duration-300 group-hover:w-1/3" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between gap-2 lg:justify-end">
              <div className="mr-3 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground md:flex">
                Scroll to explore <ArrowDown className="h-3 w-3 animate-bounce" />
              </div>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
                aria-label={paused ? "Play hero slideshow" : "Pause hero slideshow"}
              >
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => selectChapter(chapter - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
                aria-label="Previous hero scene"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => selectChapter(chapter + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
                aria-label="Next hero scene"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
