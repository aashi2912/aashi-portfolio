import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, ArrowLeft, FileText, X, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tag: string;
  year: string;
  link?: string;
  color: string;
  secondaryColor?: string;
  cardBg?: string;
  icon?: string;
  image?: string;
  caseStudyPdf?: string;
  githubLink?: string;
  details?: {
    background?: string;
    role?: string;
    duration?: string;
    team?: string;
    overview?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    tools?: string[];
    heroTagline?: string;
    sections?: CaseStudySection[];
  };
};

export type CaseStudySection = {
  label: string;
  title?: string;
  content: string;
  highlights?: string[];
  type?: "text" | "grid" | "list" | "quote";
};

/* ─── Project Card ─── */

function ProjectCard({
  project,
  index,
  onClick,
  isEven,
}: {
  project: Project;
  index: number;
  onClick: () => void;
  isEven: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.68, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 rounded-3xl overflow-hidden border transition-all duration-500`}
        style={{
          borderColor: `${project.color}20`,
          background: project.cardBg
            ? `linear-gradient(135deg, ${project.cardBg}40, hsl(var(--card)))`
            : `linear-gradient(135deg, hsl(var(--card)), ${project.color}08)`,
        }}
      >
        {/* Visual hero side */}
        <motion.div
          className="relative w-full md:w-[55%] min-h-[280px] md:min-h-[400px] overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: project.cardBg || undefined,
            background: project.cardBg
              ? project.cardBg
              : `linear-gradient(135deg, ${project.color}22, ${project.color}10, ${project.color}05)`,
          }}
        >
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-6 md:p-8"
              animate={hovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 0.68, 0.36, 1] }}
            />
          ) : (
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={hovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[100px] md:text-[140px] select-none">
                {project.icon || "🚀"}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Content side */}
        <div className="relative w-full md:w-[45%] flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                }}
              >
                {project.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                {project.year}
              </span>
            </div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4 text-foreground"
              animate={hovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>

            {project.details?.tools && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.details.tools.slice(0, 4).map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full px-3 py-1 text-[11px] font-medium border"
                    style={{
                      borderColor: `${project.color}30`,
                      backgroundColor: `${project.color}08`,
                      color: project.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <motion.div
            className="flex items-center gap-2 text-sm font-semibold tracking-wide"
            style={{ color: project.color }}
            animate={hovered ? { x: 6 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Read case study
            <motion.span
              animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 rounded-full"
            style={{ backgroundColor: project.color }}
            initial={{ width: "0%" }}
            animate={hovered ? { width: "100%" } : { width: "40%" }}
            transition={{ duration: 0.5, ease: [0.22, 0.68, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Editorial Section Block (inspired by omareletr.com) ─── */

function SectionBlock({
  label,
  title,
  children,
  color,
  delay = 0,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Colored accent line on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ backgroundColor: `${color}30` }} />
      <div className="pl-6">
        <span
          className="text-[11px] uppercase tracking-[0.2em] font-mono font-semibold block mb-2"
          style={{ color }}
        >
          {label}
        </span>
        {title && (
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{title}</h3>
        )}
        <div className="text-[15px] leading-[1.85] text-muted-foreground">{children}</div>
      </div>
    </motion.div>
  );
}

/* ─── Stat Card ─── */
function StatCard({ value, label, color, delay = 0 }: { value: string; label: string; color: string; delay?: number }) {
  return (
    <motion.div
      className="rounded-2xl p-5 border text-center"
      style={{ borderColor: `${color}25`, backgroundColor: `${color}08` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>{value}</p>
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl h-[85vh] bg-card rounded-2xl overflow-hidden border shadow-2xl"
        style={{ borderColor: `${color}30` }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: `${color}20`, backgroundColor: `${color}06` }}>
          <span className="text-sm font-semibold text-foreground">Case Study PDF</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-background/60 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <iframe
          src={pdfUrl}
          className="w-full h-[calc(85vh-60px)]"
          title="Case Study PDF"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Case Study Drawer ─── */

function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  

  if (!project) return null;
  const details = project.details;
  const c = project.color;
  const sc = project.secondaryColor || c;

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[600px] md:w-[720px] bg-card border-l border-border overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            {/* ─── Hero Banner ─── */}
            <div
              className="relative min-h-[380px] md:min-h-[460px] flex flex-col justify-end p-8 md:p-10 overflow-hidden"
              style={{
                background: project.cardBg
                  ? `linear-gradient(180deg, ${project.cardBg}, ${project.cardBg}DD, ${project.cardBg})`
                  : `linear-gradient(180deg, ${c}30, ${c}15, hsl(var(--card)))`,
              }}
            >
              {/* Close & back */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={18} />
              </motion.button>
              <motion.button
                onClick={onClose}
                className="absolute top-6 left-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: -3 }}
              >
                <ArrowLeft size={16} /> Back
              </motion.button>

              {/* Large hero image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="absolute top-4 right-0 w-[200px] md:w-[280px] opacity-30 select-none pointer-events-none object-contain"
                />
              ) : (
                <div className="absolute top-12 right-8 text-[100px] md:text-[140px] opacity-25 select-none pointer-events-none">
                  {project.icon || "🚀"}
                </div>
              )}

              {/* Tag + Year */}
              <div className="flex items-center gap-3 mb-4 relative z-[1]">
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${c}30`, color: c }}
                >
                  {project.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-tight relative z-[1] text-foreground">
                {project.title}
              </h2>

              {/* Hero tagline - different from card description */}
              {details?.heroTagline && (
                <p className="text-muted-foreground text-base leading-relaxed max-w-lg relative z-[1] italic">
                  {details.heroTagline}
                </p>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-6 relative z-[1]">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: c }}
                  >
                    Try Live Product <ExternalLink size={14} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:scale-105"
                    style={{ borderColor: `${c}40`, color: c, backgroundColor: `${c}08` }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.caseStudyPdf && (
                  <a
                    href={project.caseStudyPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:scale-105"
                    style={{ borderColor: `${sc}40`, color: sc, backgroundColor: `${sc}08` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileText size={14} /> View Full Case Study PDF
                  </a>
                )}
              </div>
            </div>

            {/* Gradient divider */}
            <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${c}, ${sc || c}, ${c}40, transparent)` }} />

            {/* ─── Content ─── */}
            {details && (
              <div className="px-8 md:px-10 py-10 space-y-12">

                {/* Key stats row */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <StatCard value="4" label="AI Components" color={c} delay={0.12} />
                  <StatCard value="6" label="Research Studies" color={sc} delay={0.16} />
                  <StatCard value="30+" label="POIs per Route" color={c} delay={0.2} />
                  <StatCard value="5" label="Weeks to Ship" color={sc} delay={0.24} />
                </motion.div>

                {/* The Problem */}
                {details.background && (
                  <SectionBlock label="The Problem" title="The Problem Nobody Has Solved" color={c} delay={0.2}>
                    <p className="mb-4">{details.background}</p>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[
                        { label: "Scenic Driving", status: "Solved", tools: "Roadtrippers, Scenic", solved: true },
                        { label: "Hiking & Trails", status: "Solved", tools: "AllTrails, Komoot", solved: true },
                        { label: "Urban Walking", status: "Huge Gap", tools: "Google Maps = speed only", solved: false },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-3 border text-center"
                          style={{
                            borderColor: item.solved ? `${c}20` : `${sc}40`,
                            backgroundColor: item.solved ? `${c}06` : `${sc}12`,
                          }}
                        >
                          <p className="text-xs font-bold mb-1 text-foreground">{item.label}</p>
                          <p className="text-[10px] font-semibold mb-1" style={{ color: item.solved ? c : sc }}>
                            {item.solved ? "✓" : "✕"} {item.status}
                          </p>
                          <p className="text-[10px] text-muted-foreground">{item.tools}</p>
                        </div>
                      ))}
                    </div>
                  </SectionBlock>
                )}

                {/* Research-Backed */}
                <SectionBlock label="Research" title="Every Decision Backed by Research" color={sc} delay={0.25}>
                  <p className="mb-4">6 peer-reviewed studies shaped the MVP.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { num: "1", title: "Detour tolerance", desc: "Leisure walkers accept ~25% detours - cap at ~30%" },
                      { num: "2", title: "What people love", desc: "Parks, sky visibility, amenities - define vibe dimensions" },
                      { num: "3", title: "Facility detours", desc: "Walkers detour for attractive stops - waypoint injection" },
                      { num: "4", title: "Night safety gap", desc: "Different needs after dark - Night Walker persona" },
                      { num: "5", title: "Avoid poor lighting", desc: "People avoid dark routes - Well-Lit scoring (V2)" },
                      { num: "6", title: "Night attention", desc: "Hazard scanning changes - night-mode weights" },
                    ].map((r, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl border"
                        style={{ borderColor: `${sc}15`, backgroundColor: `${sc}05` }}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: sc }}
                        >
                          {r.num}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionBlock>

                {/* How It Works */}
                <SectionBlock label="How It Works" title="How Vibe Route Works" color={c} delay={0.3}>
                  <div className="space-y-3">
                    {[
                      { step: "1", title: "Enter Origin & Destination", desc: "User inputs start and end points on the map" },
                      { step: "2", title: "Select Vibes", desc: "Choose preferences like 'Green & Peaceful' or 'Coffee Stops' - or type naturally" },
                      { step: "3", title: "AI Discovers Waypoints", desc: "ML clustering generates genuinely different routes when Google alternatives overlap >70%" },
                      { step: "4", title: "Score Routes", desc: "Density-based vibe scoring with diminishing returns (log curve) to avoid inflation" },
                      { step: "5", title: "Generate Narratives", desc: "LLM summaries constrained to verified POIs with anti-hallucination guardrails" },
                      { step: "6", title: "Compare & Navigate", desc: "Side-by-side comparison with deep link to Google Maps for real navigation" },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl border"
                        style={{ borderColor: `${c}15`, backgroundColor: `${c}04` }}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                      >
                        <span
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ backgroundColor: c }}
                        >
                          {s.step}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{s.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionBlock>

                {/* AI Architecture */}
                <SectionBlock label="AI Architecture" title="4 AI Components - Each One Earns Its Place" color={sc} delay={0.35}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {[
                      { title: "Waypoint Discovery", desc: "ML clustering to create genuinely different route options" },
                      { title: "Natural Language", desc: "Parse 'quiet walk with coffee' into structured vibe preferences" },
                      { title: "Route Narratives", desc: "LLM summaries constrained to verified POIs (anti-hallucination)" },
                      { title: "Vibe Scoring", desc: "Density-based scoring with diminishing returns" },
                    ].map((ai, i) => (
                      <motion.div
                        key={i}
                        className="rounded-2xl p-4 border"
                        style={{ borderColor: `${sc}20`, backgroundColor: `${sc}06` }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.06 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: sc }}>
                            {i + 1}
                          </span>
                          <p className="text-sm font-bold text-foreground">{ai.title}</p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{ai.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4 border" style={{ borderColor: `${c}15`, backgroundColor: `${c}04` }}>
                    <p className="text-xs font-semibold text-foreground mb-2">What I rejected (on purpose):</p>
                    <div className="space-y-1.5">
                      {["Personalization (not enough user data yet)", "'Scenic' LLM scoring (high bias risk)", "AI soundtrack (feature creep)"].map((r, i) => (
                        <p key={i} className="text-xs text-muted-foreground">✕ {r}</p>
                      ))}
                    </div>
                  </div>
                </SectionBlock>

                {/* Designing Around Bias */}
                <SectionBlock label="Bias Design" title="Designing Around Bias" color={c} delay={0.4}>
                  <p className="mb-4 italic" style={{ color: c }}>Bias isn't a reason not to build - it's a design constraint.</p>
                  <div className="space-y-3">
                    {[
                      { title: "Objective signals", desc: "Use parks, POI density, road types - not subjective 'beauty'. Reduces value-judgment bias." },
                      { title: "User-defined vibe", desc: "'Green & peaceful' is a preference - not a neighborhood ranking. Shifts agency to the user." },
                      { title: "Audit for correlation", desc: "Planned: 50 routes across diverse Toronto neighborhoods. Correlate vibe scores with census data." },
                      { title: "Reward local discovery", desc: "Count cultural spots + independent shops as positive 'Local Character'. Rewards diversity, not just affluence." },
                    ].map((b, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl border"
                        style={{ borderColor: `${c}15`, backgroundColor: `${c}04` }}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + i * 0.05 }}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: c }}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{b.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{b.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionBlock>

                {/* Results */}
                {details.results && details.results.length > 0 && (
                  <SectionBlock label="Results" title="Key Outcomes" color={sc} delay={0.45}>
                    <div className="space-y-3 mt-2">
                      {details.results.map((r, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl border"
                          style={{ borderColor: `${sc}15`, backgroundColor: `${sc}05` }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: sc }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-[14px] leading-relaxed pt-0.5 text-foreground">{r}</span>
                        </motion.div>
                      ))}
                    </div>
                  </SectionBlock>
                )}

                {/* Decisions & Tradeoffs */}
                <SectionBlock label="Decisions" title="Decisions & Tradeoffs" color={c} delay={0.5}>
                  <p className="mb-3">6 choices that shaped the MVP.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Overlap check", desc: "Alternates overlap - waypoint injection fallback" },
                      { title: "Scoring curve", desc: "Linear to diminishing returns (log) to avoid score inflation" },
                      { title: "Global-first MVP", desc: "No city datasets yet - ship everywhere using Maps APIs" },
                      { title: "Progressive loading", desc: "Routes, scores, narratives for faster perceived speed" },
                      { title: "Anti-hallucination", desc: "Constrained prompts + template fallback for reliability" },
                      { title: "Scope cut", desc: "Defer 'Well-Lit' to V2 due to data availability" },
                    ].map((d, i) => (
                      <motion.div
                        key={i}
                        className="rounded-xl p-3 border"
                        style={{ borderColor: `${c}15`, backgroundColor: `${c}04` }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 + i * 0.04 }}
                      >
                        <p className="text-sm font-semibold text-foreground mb-1">{d.title}</p>
                        <p className="text-xs text-muted-foreground">{d.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs mt-3 italic" style={{ color: c }}>
                    Tradeoff principle: ship the core loop first, then deepen quality + safety.
                  </p>
                </SectionBlock>

                {/* Future Roadmap */}
                <SectionBlock label="Roadmap" title="Future Roadmap" color={sc} delay={0.55}>
                  <div className="space-y-3">
                    {[
                      { version: "V2", title: "Street View Computer Vision", desc: "Green View Index via semantic segmentation - measure what a route actually looks like" },
                      { version: "V2", title: "Well-Lit Scoring", desc: "Use streetlight datasets to support the Night Walker persona" },
                      { version: "V2", title: "Bias Audit", desc: "Run 50 routes across diverse neighborhoods, correlate with census income data, publish results" },
                      { version: "V3", title: "Community Layer", desc: "User-submitted vibes + ratings. Big value - but comes with moderation & privacy risks." },
                    ].map((r, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl border"
                        style={{ borderColor: `${sc}15`, backgroundColor: `${sc}04` }}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                      >
                        <span
                          className="flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-bold text-white"
                          style={{ backgroundColor: sc }}
                        >
                          {r.version}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionBlock>

                {/* Key Takeaway Quote */}
                <motion.div
                  className="rounded-2xl p-6 md:p-8 border"
                  style={{
                    borderColor: `${c}25`,
                    background: `linear-gradient(135deg, ${c}08, ${sc}06)`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                >
                  <p className="text-lg md:text-xl font-bold leading-relaxed text-foreground mb-4">
                    "The best AI project isn't the one with the most AI - it's the one where every AI component exists because the product is genuinely <span style={{ color: c }}>better</span> with it."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Research-driven thinking", "Honest about limitations", "AI applied where it adds value", "Bias-aware design", "End-to-end shipping", "Scope management"].map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full px-3 py-1 text-[10px] font-medium border"
                        style={{ borderColor: `${c}25`, backgroundColor: `${c}10`, color: c }}
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                {details.tools && details.tools.length > 0 && (
                  <SectionBlock label="Tools & Stack" color={c} delay={0.7}>
                    <div className="flex flex-wrap gap-2.5">
                      {details.tools.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full px-4 py-2 text-xs font-medium border"
                          style={{
                            borderColor: `${c}25`,
                            backgroundColor: `${c}10`,
                            color: c,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </SectionBlock>
                )}
              </div>
            )}

            {/* Footer spacer */}
            <div className="h-16" />
          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          index={i}
          onClick={() => handleCardClick(project)}
          isEven={i % 2 === 0}
        />
      ))}

      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
