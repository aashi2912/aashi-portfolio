import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, FileText, Mail, MessageCircle } from "lucide-react";

/* ── Main Export ── */
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
  const active = references[activeIndex];

  const toggleLike = () => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(activeIndex)) next.delete(activeIndex);
      else next.add(activeIndex);
      return next;
    });
  };

  return (
    <div className="py-16 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
            But the{" "}
            <span className="italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">real story</span>{" "}
            comes from the people
          </h2>
          <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
            I've worked with!
          </h2>
        </div>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        className="mt-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Name label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`name-${activeIndex}`}
            className="text-sm text-muted-foreground mb-2 font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {active.name}
          </motion.p>
        </AnimatePresence>

        {/* Bubble + like */}
        <div className="relative w-full max-w-2xl">
          {/* Tap to like - positioned outside bubble */}
          <motion.button
            onClick={toggleLike}
            className="absolute -right-2 top-2 md:right-[-80px] flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors z-10"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="text-[11px] italic hidden md:inline"
              initial={false}
              animate={{ opacity: liked.has(activeIndex) ? 0 : 0.7 }}
            >
              tap to like
            </motion.span>
            <motion.div
              initial={false}
              animate={{
                scale: liked.has(activeIndex) ? [1, 1.4, 1] : 1,
                color: liked.has(activeIndex) ? "hsl(0,80%,55%)" : "currentColor",
              }}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className="w-5 h-5"
                fill={liked.has(activeIndex) ? "hsl(0,80%,55%)" : "none"}
              />
            </motion.div>
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`bubble-${activeIndex}`}
              className="relative rounded-2xl bg-muted/60 dark:bg-muted/40 px-7 py-6 shadow-sm"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-[16px] md:text-[18px] leading-[1.75] text-foreground/90">
                {active.text}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full text-white text-[10px] font-bold"
                  style={{ background: active.color }}
                >
                  {active.initials}
                </div>
                <span className="text-xs text-muted-foreground">
                  {active.company}
                </span>
              </div>

              {/* Bubble tail */}
              <div className="absolute -bottom-2 left-10 w-4 h-4 rotate-45 bg-muted/60 dark:bg-muted/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar Row */}
        <div className="mt-10 flex items-end justify-center gap-3 sm:gap-5">
          {references.map((ref, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.div
                  className="relative flex items-center justify-center rounded-full text-white font-bold shadow-md transition-all duration-300"
                  style={{
                    background: ref.color,
                    width: isActive ? 72 : 56,
                    height: isActive ? 72 : 56,
                    fontSize: isActive ? 20 : 16,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {ref.initials}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: ref.color }}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1.25, opacity: [0, 0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                <div className="text-center">
                  <p
                    className={`text-[13px] font-semibold leading-tight transition-opacity ${
                      isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                    }`}
                  >
                    {ref.name.split(" ")[0]}
                  </p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        className="text-[10px] text-muted-foreground leading-tight italic"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {ref.role}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="mt-6 flex items-center gap-1.5">
          {references.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all"
              animate={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                background:
                  i === activeIndex
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted-foreground) / 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Section 3: Philosophy + Contact ── */
function PhilosophyBlock() {
  return (
    <motion.div
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Philosophy Text */}
        <div>
          <motion.p
            className="text-sm italic text-muted-foreground mb-4 font-handwriting"
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
              <span className="bg-primary/20 px-1 rounded font-medium">
                enjoys working in messy, complex spaces
              </span>{" "}
              and making them clearer and more human.
            </p>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-foreground/90">
              I do that by{" "}
              <span className="bg-primary/20 px-1 rounded font-medium">
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
            href="mailto:aashi@example.com"
            className="group flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="border-2 border-foreground/20 rounded-full px-6 py-2.5 flex items-center gap-2 group-hover:border-foreground/50 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-[15px] font-medium">aashi@example.com</span>
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
