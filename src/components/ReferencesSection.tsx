import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, FileText, Mail, MessageCircle, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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

function TestimonialCard({ person, index, isActive, onClick }: { person: typeof references[0]; index: number; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative text-left w-full rounded-2xl p-6 md:p-7 transition-all duration-300 border cursor-pointer ${
        isActive
          ? "bg-card border-border shadow-lg scale-[1.02]"
          : "bg-transparent border-transparent hover:bg-muted/40 hover:border-border/50"
      }`}
      layout
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Quote icon */}
      <Quote
        className={`w-8 h-8 mb-4 transition-colors duration-300 ${
          isActive ? "text-foreground/20" : "text-muted-foreground/10"
        }`}
        strokeWidth={1.5}
      />

      {/* Quote text */}
      <AnimatePresence mode="wait">
        <motion.p
          className={`text-[14px] md:text-[15px] leading-[1.7] transition-colors duration-300 ${
            isActive ? "text-foreground/90" : "text-muted-foreground/70"
          }`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: isActive ? 999 : 3,
            WebkitBoxOrient: "vertical",
            overflow: isActive ? "visible" : "hidden",
          }}
        >
          "{person.text}"
        </motion.p>
      </AnimatePresence>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-white text-[11px] font-bold shrink-0"
          style={{ background: person.color }}
        >
          {person.initials}
        </div>
        <div>
          <p className="text-[13px] font-semibold leading-tight">{person.name}</p>
          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
            {person.role} · {person.company}
          </p>
        </div>
      </div>

      {/* Active indicator line */}
      {isActive && (
        <motion.div
          className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-foreground/20"
          layoutId="active-indicator"
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </motion.button>
  );
}

function TestimonialsBlock() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % references.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % references.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + references.length) % references.length);

  // Split into two columns
  const col1 = references.filter((_, i) => i % 2 === 0);
  const col2 = references.filter((_, i) => i % 2 === 1);

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

      {/* Testimonial Grid */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Desktop: 2-column masonry-style */}
        <div className="hidden md:grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {col1.map((person, ci) => {
              const realIndex = ci * 2;
              return (
                <TestimonialCard
                  key={realIndex}
                  person={person}
                  index={realIndex}
                  isActive={activeIndex === realIndex}
                  onClick={() => setActiveIndex(realIndex)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            {col2.map((person, ci) => {
              const realIndex = ci * 2 + 1;
              return (
                <TestimonialCard
                  key={realIndex}
                  person={person}
                  index={realIndex}
                  isActive={activeIndex === realIndex}
                  onClick={() => setActiveIndex(realIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard
                person={references[activeIndex]}
                index={activeIndex}
                isActive={true}
                onClick={() => {}}
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile nav */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <motion.button
              onClick={goPrev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            <div className="flex items-center gap-1.5">
              {references.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all"
                  animate={{
                    width: i === activeIndex ? 20 : 6,
                    height: 6,
                    background:
                      i === activeIndex
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground) / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
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
