import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

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

export function ReferencesSection() {
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
    <div>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15]">
          But{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]">
              the real story
            </span>
            <motion.span
              className="absolute inset-0 -inset-x-2 -inset-y-1 rounded-full bg-[hsl(200,80%,50%,0.12)] dark:bg-[hsl(200,80%,50%,0.15)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </span>{" "}
          comes from the
        </h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-[36px] md:leading-[1.15] text-muted-foreground">
          people I've worked with.
        </h3>
      </motion.div>

      {/* Chat Bubble Testimonial */}
      <motion.div
        className="mt-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Name label above bubble */}
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

        {/* Chat bubble */}
        <div className="relative w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bubble-${activeIndex}`}
              className="relative rounded-2xl bg-card border border-border/60 px-7 py-6 shadow-lg dark:shadow-[0_8px_30px_-10px_hsl(200,100%,50%,0.1)]"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-[16px] md:text-[17px] leading-[1.75] text-foreground/90">
                {active.text}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                {/* Like button */}
                <motion.button
                  onClick={toggleLike}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span
                    className="text-[11px] italic"
                    initial={false}
                    animate={{ opacity: liked.has(activeIndex) ? 0 : 1 }}
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
                      className="w-4 h-4"
                      fill={liked.has(activeIndex) ? "hsl(0,80%,55%)" : "none"}
                    />
                  </motion.div>
                </motion.button>
              </div>

              {/* Bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-r border-b border-border/60" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar Row */}
        <div className="mt-10 flex items-end justify-center gap-2 sm:gap-4">
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
                {/* Avatar circle */}
                <motion.div
                  className="relative flex items-center justify-center rounded-full text-white font-bold shadow-md transition-all duration-300"
                  style={{
                    background: ref.color,
                    width: isActive ? 64 : 48,
                    height: isActive ? 64 : 48,
                    fontSize: isActive ? 18 : 14,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {ref.initials}
                  {/* Active ring */}
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

                {/* Name + Role below avatar */}
                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[13px] font-semibold leading-tight">
                        {ref.name.split(" ")[0]}
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-tight italic">
                        {ref.role}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {ref.name.split(" ")[0]}
                    </motion.p>
                  )}
                </AnimatePresence>
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
                    ? "hsl(200,70%,50%)"
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
