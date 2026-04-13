import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, FileText, Mail, MessageCircle } from "lucide-react";
import { FloatingDoodle } from "@/components/Doodles";
import { SketchSpeechBubble } from "@/components/SketchIcons";
import jackEvansPhoto from "@/assets/jack-evans.jpeg";
import gouthamKonthamPhoto from "@/assets/goutham-kontham.jpeg";
import lindaBugaziyanosPhoto from "@/assets/linda-bugaziyanos.jpeg";
import josephWongPhoto from "@/assets/joseph-wong.jpeg";

const references = [
  {
    name: "Goutham Kontham",
    role: "AI Lead, Engineering",
    company: "RBC Capital Markets",
    initials: "GK",
    photo: gouthamKonthamPhoto,
    color: "hsl(200,70%,50%)",
    text: "Aashi is a key pillar in the successful rollout of our AI product suite. She has a rare ability to translate complex AI capabilities into precise, high-impact business requirements. Her meticulous attention to detail ensures engineering efforts stay focused on what matters most to end users - and the high adoption rates we've seen are a direct result of her user-centric vision and solutions-oriented approach.",
  },
  {
    name: "Joseph Wong",
    role: "Project & Program Manager",
    company: "RBC Capital Markets",
    initials: "JW",
    photo: josephWongPhoto,
    color: "hsl(280,60%,55%)",
    text: "Aashi is friendly, helpful, and consistently responsive when it comes to collaboration. She communicates clearly, follows up promptly, and contributes in a genuinely supportive way to every team she's part of - the kind of teammate who makes complex assignments feel manageable.",
  },
  {
    name: "Jack Evans",
    role: "VP, AI & Digital Product",
    company: "RBC Capital Markets",
    initials: "JE",
    photo: jackEvansPhoto,
    color: "hsl(25,80%,50%)",
    text: "Aashi consistently demonstrated strong product instincts and has been a key partner on the AidenResearch team. She translates business needs into clear acceptance criteria, partners closely with engineering leads to maintain alignment, and works effectively with stakeholders to keep workstreams progressing smoothly. Organized, communicative, and dependable - her collaborative approach makes everyone around her better.",
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
    name: "Linda Bugaziyanos",
    role: "Director, Product Management",
    company: "RBC Capital Markets",
    initials: "LB",
    photo: lindaBugaziyanosPhoto,
    color: "hsl(45,90%,45%)",
    text: "Aashi has a practical understanding of technology that's rare to find in product. She identifies gaps early, brings real structure to complex initiatives, and keeps cross-functional teams moving without unnecessary back-and-forth. Proactive, resourceful, and sharp - she sees around corners and ensures nothing falls through the cracks.",
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

  const safeIndex = activeIndex % references.length;
  const active = references[safeIndex];

  return (
    <div className="py-16 md:py-24 relative">
      {/* Floating doodles */}
      <FloatingDoodle className="-left-8 top-20 hidden md:block" delay={0.8} amplitude={8}>
        <SketchSpeechBubble size={28} className="text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]" color="currentColor" />
      </FloatingDoodle>

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
            I built these products with!
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
          <div className="flex items-center justify-between mb-1.5 ml-1 mr-1">
            <p className="text-sm text-muted-foreground">{active.name}</p>
            <motion.button
              onClick={() => toggleLike(activeIndex)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
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
          </div>
          
          <div className="relative bg-muted/60 border border-border rounded-2xl rounded-tl-sm p-5 md:p-6">
            <p className="text-[15px] md:text-[17px] leading-[1.75] text-foreground/90">
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
              className={`flex items-center justify-center rounded-full text-white font-bold shrink-0 transition-all duration-300 w-16 h-16 md:w-[100px] md:h-[100px] text-xl md:text-2xl overflow-hidden ${
                activeIndex === i
                  ? "ring-2 ring-offset-2 ring-offset-background shadow-xl"
                  : "opacity-70 group-hover:opacity-100"
              }`}
              style={{
                background: person.color,
                ...(activeIndex === i ? { boxShadow: `0 8px 25px ${person.color}40` } : {}),
              }}
            >
              {person.photo ? (
                <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
              ) : (
                person.initials
              )}
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
            className="text-xl md:text-2xl font-bold text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)] mb-4"
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
