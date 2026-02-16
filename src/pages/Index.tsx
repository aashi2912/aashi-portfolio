import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Youtube, Instagram, BookOpen, Twitter } from "lucide-react";

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

export default function Index() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16">
      {/* Clock */}
      <div className="flex justify-end">
        <LiveClock />
      </div>

      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              John Doe
            </h1>
            <div className="mt-3 h-10 text-2xl font-light text-muted-foreground md:text-3xl">
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
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <ScrambleText text="Cairo, Egypt · GMT+2" />
          </div>
        </div>

        {/* Hero Photo Placeholder */}
        <div className="flex items-start justify-center">
          <div className="h-48 w-48 rounded-2xl bg-muted" />
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Recent Updates</h2>
        <div className="space-y-4">
          {updates.map((update, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-border pl-4">
              <span className="min-w-[5rem] font-mono text-xs text-muted-foreground">{update.date}</span>
              <p className="flex-1 text-sm">{update.text}</p>
              <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-muted-foreground">{update.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
