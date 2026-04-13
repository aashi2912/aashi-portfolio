import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, FileText, Mail, MessageCircle } from "lucide-react";

const references = [
  {
    name: "Jane Smith",
    role: "Engineering Manager",
    company: "TechCorp",
    initials: "JS",
    color: "hsl(200,70%,50%)",
    text: "Aashi is one of the most thoughtful product managers I've worked with. She has a rare ability to translate complex technical constraints into clear product decisions that everyone can rally behind.",
  },
  {
    name: "Alex Johnson",
    role: "Senior Designer",
    company: "DesignStudio",
    initials: "AJ",
    color: "hsl(280,60%,55%)",
    text: "Working with Aashi was a masterclass in collaboration. She deeply understands user needs and always pushes for the best possible experience without losing sight of business goals.",
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    company: "DataCo",
    initials: "PP",
    color: "hsl(340,70%,55%)",
    text: "Aashi bridges the gap between data and product like no one else. She asks the right questions, digs into the numbers, and turns insights into actionable product improvements.",
  },
  {
    name: "Michael Chen",
    role: "VP of Product",
    company: "StartupXYZ",
    initials: "MC",
    color: "hsl(25,80%,50%)",
    text: "Aashi consistently demonstrated strong product instincts and an incredible work ethic. She's the kind of PM who makes everyone around her better.",
  },
  {
    name: "Sarah Williams",
    role: "Software Developer",
    company: "InnovateTech",
    initials: "SW",
    color: "hsl(120,50%,45%)",
    text: "As a developer, I really appreciated how Aashi wrote crystal-clear requirements and was always available to unblock the team. She genuinely cares about building the right thing.",
  },
  {
    name: "David Kim",
    role: "Product Lead",
    company: "GlobalFinance",
    initials: "DK",
    color: "hsl(45,90%,45%)",
    text: "Aashi has a natural talent for stakeholder management. She navigates complex organizational dynamics with grace and always keeps the user at the center of every decision.",
  },
];

function TestimonialsBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % references.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const toggleLike = (i: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const active = references[activeIndex];

  return (
    <div className="py-16 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
            But the{" "}
            <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">real story</span>{" "}
            comes from the people
          </h2>
          <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
            I built these projects with
          </h2>
        </div>
      </motion.div>

      {/* Chat Bubble - above avatars */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Name label above bubble */}
          <p className="text-sm text-muted-foreground mb-1.5 ml-1">{active.name}</p>
          
          <div className="relative bg-muted/60 border border-border rounded-2xl rounded-tl-sm p-5 md:p-6">
            {/* Tap to like - top right */}
            <motion.button
              onClick={() => toggleLike(activeIndex)}
              className="absolute top-4 right-4 flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              whileTap={{ scale: 0.85 }}
            >
              <span className="text-[11px] italic">
                {liked.has(activeIndex) ? "liked" : "tap to like"}
              </span>
              <Heart
                className={`w-4 h-4 transition-colors ${
                  liked.has(activeIndex)
                    ? "fill-red-500 text-red-500"
                    : ""
                }`}
              />
            </motion.button>

            <p className="text-[15px] md:text-[17px] leading-[1.75] text-foreground/90 pr-24">
              {active.text}
            </p>

            {/* Company at bottom */}
            <div className="mt-4 flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ background: active.color }}
              >
                {active.company.charAt(0)}
              </div>
              <span className="text-[12px] text-muted-foreground">{active.company}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Avatar Row - below bubble, centered */}
      <motion.div
        className="flex items-end justify-center gap-2 md:gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {references.map((person, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative group flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: activeIndex === i ? 1.1 : 1,
              y: activeIndex === i ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div
              className={`flex items-center justify-center rounded-full text-white font-bold shrink-0 transition-all duration-300 w-16 h-16 md:w-[100px] md:h-[100px] text-xl md:text-2xl ${
                activeIndex === i
                  ? "ring-2 ring-offset-2 ring-offset-background shadow-xl"
                  : "opacity-70 group-hover:opacity-100"
              }`}
              style={{
                background: person.color,
                ...(activeIndex === i ? { boxShadow: `0 8px 25px ${person.color}40` } : {}),
              }}
            >
              {person.initials}
            </div>
            <span className={`mt-2 text-[13px] md:text-[14px] font-semibold transition-colors ${
              activeIndex === i ? "text-foreground" : "text-muted-foreground"
            }`}>
              {person.name.split(" ")[0]}
            </span>
            <span className="text-[10px] md:text-[11px] text-muted-foreground italic">
              {person.role}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Section 3: Philosophy + Contact ── */
function PhilosophyBlock() {
  return (
    <motion.div
      className="py-8 md:py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Philosophy Text */}
        <div>
          <motion.p
            className="text-xl md:text-2xl font-bold text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My Philosophy
          </motion.p>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-[16px] md:text-[18px] leading-[1.8] text-foreground/90">
              In short, I'm someone who{" "}
              <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] font-medium">
                enjoys working in messy, complex spaces
              </span>{" "}
              and making them clearer and more human.
            </p>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-foreground/90">
              I do that by{" "}
              <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] font-medium">
                experimenting to learn, shaping clear stories that help people
                align, and designing systems with care
              </span>{" "}
              for the small details that quietly shape how something feels.
            </p>
          </motion.div>
        </div>

        {/* Right: Contact CTAs */}
        <motion.div
          className="flex flex-col items-center md:items-end gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* Chat bubble CTA */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl rounded-br-sm text-[15px] font-medium shadow-lg">
              <MessageCircle className="w-4 h-4 inline mr-2" />
              If this made sense, let's chat!
            </div>
          </motion.div>

          {/* Arrows */}
          <div className="flex gap-2 text-muted-foreground/40">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >
              ↓
            </motion.span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              ↓
            </motion.span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              ↓
            </motion.span>
          </div>

          {/* Email */}
          <motion.a
            href="mailto:aashithakkar29@gmail.com"
            className="group flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="border-2 border-foreground/20 rounded-full px-6 py-2.5 flex items-center gap-2 group-hover:border-foreground/50 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-[15px] font-medium">aashithakkar29@gmail.com</span>
            </div>
            <span className="text-[11px] text-muted-foreground mt-1 italic">
              tap to copy
            </span>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="#"
            className="flex items-center gap-2 border-2 border-foreground/20 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-4 h-4" />
            <span className="text-[15px] font-medium">My Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Main Export ── */
export function ReferencesSection() {
  return (
    <div className="space-y-0">
      <TestimonialsBlock />
      <PhilosophyBlock />
    </div>
  );
}
