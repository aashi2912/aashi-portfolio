import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Linkedin, Youtube, Instagram, BookOpen, Twitter, ArrowDown } from "lucide-react";
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
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return char;
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono text-sm text-muted-foreground">{displayed}</span>;
}

// Arjun-style animated text reveal
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

// Jeevanshu-style staggered scroll animation
function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
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

export default function Index() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24">
      {/* Clock */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <LiveClock />
      </motion.div>

      {/* Lokesh-style Bold Statement Hero */}
      <section className="relative">
        <div className="space-y-8">
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

          {/* Suhad-style warm intro */}
          <motion.div
            className="max-w-2xl space-y-4"
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

          {/* Rotating roles - Omar style */}
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
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
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
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            <ScrambleText text="Cairo, Egypt · GMT+2" />
          </motion.div>
        </div>
      </section>

      {/* Lokesh-style Hero Illustration */}
      <RevealText>
        <section className="relative overflow-hidden rounded-2xl">
          <motion.img
            src={heroIllustration}
            alt="Person leaping between cliffs — bridging imagination and reality"
            className="w-full object-cover rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        </section>
      </RevealText>

      {/* Arjun-style "How I Think" Section */}
      <section className="space-y-8">
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
      </section>

      {/* Updates Timeline - Omar style with Jeevanshu scroll animations */}
      <section className="space-y-6">
        <RevealText>
          <h2 className="text-lg font-semibold">Recent Updates</h2>
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
      </section>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}
