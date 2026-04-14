import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, ArrowLeft, FileText, X, Github, ChevronLeft, ChevronRight } from "lucide-react";

export type DrawerSection = {
  label: string;
  title?: string;
  content?: string;
  items?: { title: string; desc: string; num?: string; version?: string }[];
  layout?: "text" | "grid" | "list" | "steps" | "roadmap";
  rejections?: string[];
  quote?: string;
  quoteAttribution?: string;
};

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
  caseStudyPages?: string[];
  prdPages?: string[];
  prdPdf?: string;
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
    stats?: { value: string; label: string }[];
    drawerSections?: DrawerSection[];
    competitiveGap?: { label: string; status: string; tools: string; solved: boolean }[];
    takeawayQuote?: string;
    takeawayTags?: string[];
  };
};

/* ─── Project Card ─── */

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
  isEven?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const productSkills = ['RICE','KPI','OKR','PRD','Roadmap','User Research','Market Analysis','Product Strategy','Persona','Journey Map','Wireframe','Prototype','GTM','Go-to-Market','Prioritization','Data Analysis','A/B Test','Experiment','Discovery','Stakeholder','Agile','Scrum','Kanban','Funnel','Cohort','Retention','Churn','Conversion','Adoption','Engagement','Growth'];
  const aiSkills = ['AI','ML','LLM','NLP','Clustering','K-Means','scikit','Cosine','Filtering','Herfindahl','Gen AI','Generative AI','Machine Learning','GPT','Claude','LLaMA','Gemini','Hugging Face','Transformers','BERT','OpenAI','Anthropic'];
  const engSkills = ['React','TypeScript','Vercel','Node.js','Nodejs','Next.js','Nextjs','Vue','Angular','Express','Django','Flask','Docker','Kubernetes','AWS','GCP','Azure','Tailwind','Bootstrap','jQuery','HTML','CSS','JavaScript','Python','Java','Go','Rust'];

  const filteredTools = project.details?.tools?.filter(t => {
    const isEng = engSkills.some(s => t.toLowerCase().includes(s.toLowerCase()));
    const isProduct = productSkills.some(s => t.toLowerCase().includes(s.toLowerCase()));
    const isAI = aiSkills.some(s => t.toLowerCase().includes(s.toLowerCase()));
    return !isEng && (isProduct || isAI);
  }).slice(0, 5) || [];

  return (
    <motion.div
      className="group cursor-pointer flex-shrink-0 w-[75vw] sm:w-[360px] md:w-[400px] lg:w-[440px] snap-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 0.68, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative flex flex-col rounded-2xl overflow-hidden border-[3px] transition-all duration-500 h-full"
        style={{
          borderColor: hovered ? `${project.color}60` : `${project.color}30`,
          boxShadow: hovered ? `0 20px 60px -15px ${project.color}25` : 'none',
        }}
      >
        {/* Hero image section */}
        <div className="relative h-[200px] md:h-[230px] overflow-hidden" style={{ backgroundColor: project.cardBg || '#111' }}>
          <motion.div
            className="absolute inset-0"
            animate={hovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 0.68, 0.36, 1] }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[80px] select-none">{project.icon || "🚀"}</span>
              </div>
            )}
          </motion.div>

          {/* Tag + year badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
              style={{
                backgroundColor: `${project.color}cc`,
                color: '#fff',
              }}
            >
              {project.tag}
            </span>
            <span className="rounded-full px-2.5 py-1 text-[10px] font-mono tracking-wider backdrop-blur-md bg-black/40 text-white/80">
              {project.year}
            </span>
          </div>

          {/* Live Product chip */}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold text-white bg-black/50 backdrop-blur-md hover:bg-black/70 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={10} />
              Live
            </a>
          )}
        </div>

        {/* Content section - solid card background */}
        <div className="flex flex-col justify-between flex-1 p-5 md:p-6 bg-card">
          <div>
            <motion.h3
              className="text-lg md:text-xl font-bold tracking-tight leading-snug mb-2 text-foreground"
              animate={hovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Skills */}
            {filteredTools.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {filteredTools.map((t, i) => {
                  const isAI = aiSkills.some(s => t.toLowerCase().includes(s.toLowerCase()));
                  return (
                    <span
                      key={i}
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium border ${isAI ? 'font-bold' : ''}`}
                      style={{
                        borderColor: `${project.color}50`,
                        backgroundColor: `${project.color}12`,
                        color: project.color,
                      }}
                    >
                      {isAI ? `✦ ${t}` : t}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA row */}
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold tracking-wide"
            style={{ color: project.color }}
            animate={hovered ? { x: 4 } : { x: 0 }}
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
        </div>

        {/* Bottom accent bar */}
        <motion.div
          className="h-[3px]"
          style={{ backgroundColor: project.color }}
          initial={{ width: "0%" }}
          animate={hovered ? { width: "100%" } : { width: "35%" }}
          transition={{ duration: 0.5, ease: [0.22, 0.68, 0.36, 1] }}
        />
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
      <p className="mb-1 text-2xl font-bold md:text-3xl" style={{ color }}>{value}</p>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
    </motion.div>
  );
}

/* ─── Case Study Pages Modal ─── */
function CaseStudyModal({
  title,
  pages,
  color,
  secondaryColor,
  onClose,
}: {
  title: string;
  pages: string[];
  color: string;
  secondaryColor?: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md p-3 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border bg-card shadow-2xl"
        style={{ borderColor: `${color}35` }}
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between gap-4 border-b px-5 py-4 md:px-7"
          style={{
            borderColor: `${color}20`,
            background: `linear-gradient(90deg, ${color}12, ${secondaryColor || color}08, transparent)`,
          }}
        >
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.24em]" style={{ color }}>
              Full case study
            </p>
            <h3 className="text-lg font-semibold text-foreground md:text-xl">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 text-foreground transition-colors hover:text-foreground hover:bg-background"
            style={{ borderColor: `${color}30` }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-muted/30 px-3 py-4 md:px-6 md:py-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {pages.map((page, index) => (
              <motion.figure
                key={page}
                className="overflow-hidden rounded-[24px] border bg-background shadow-lg"
                style={{ borderColor: `${index % 2 === 0 ? color : secondaryColor || color}25` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * index, duration: 0.35 }}
              >
                <img
                  src={page}
                  alt={`${title} case study page ${index + 1}`}
                  className="block h-auto w-full"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <figcaption className="border-t px-4 py-2 text-right text-[11px] font-medium text-muted-foreground" style={{ borderColor: `${color}12` }}>
                  Page {index + 1}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
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
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  

  if (!project) return null;
  const details = project.details;
  const c = project.color;
  const sc = project.secondaryColor || c;
  const isDarkBg = project.cardBg && project.cardBg !== "#F5F0E8";
  const heroTextColor = project.cardBg ? (isDarkBg ? "#f0f0f0" : "#1a1a1a") : undefined;
  const heroSubTextColor = project.cardBg ? (isDarkBg ? "#ccc" : "#555") : undefined;
  const heroMutedColor = project.cardBg ? (isDarkBg ? "#999" : "#777") : undefined;

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
              {/* Back button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 left-8 flex items-center gap-2 text-sm transition-colors"
                style={{ color: heroMutedColor }}
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
                <span className="font-mono text-xs tracking-wider" style={{ color: heroMutedColor }}>{project.year}</span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-tight relative z-[1]"
                style={{ color: heroTextColor }}
              >
                {project.title}
              </h2>

              {/* Hero tagline - different from card description */}
              {details?.heroTagline && (
                <p
                  className="text-base leading-relaxed max-w-lg relative z-[1] italic"
                  style={{ color: heroSubTextColor }}
                >
                  {details.heroTagline}
                </p>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-[1]">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: c }}
                  >
                    Live Product <ExternalLink size={12} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                    style={{ borderColor: `${c}40`, color: c, backgroundColor: `${c}08` }}
                  >
                    <Github size={12} /> GitHub
                  </a>
                )}
                {project.caseStudyPages && project.caseStudyPages.length > 0 && (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                    style={{ borderColor: `${sc}40`, color: sc, backgroundColor: `${sc}08` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCaseStudyModal(true);
                    }}
                  >
                    <FileText size={12} /> Case Study PDF
                  </button>
                )}
                {project.prdPdf && (
                  <a
                    href={project.prdPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                    style={{ borderColor: `${c}40`, color: c, backgroundColor: `${c}08` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileText size={12} /> PRD
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
                {details.stats && details.stats.length > 0 && (
                  <motion.div
                    className={`grid grid-cols-2 ${details.stats.length >= 4 ? 'sm:grid-cols-4' : `sm:grid-cols-${details.stats.length}`} gap-3`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {details.stats.map((stat, i) => (
                      <StatCard key={i} value={stat.value} label={stat.label} color={i % 2 === 0 ? c : sc} delay={0.12 + i * 0.04} />
                    ))}
                  </motion.div>
                )}

                {/* Background / Problem */}
                {details.background && (
                  <SectionBlock label="The Problem" color={c} delay={0.2}>
                    <p className="mb-4">{details.background}</p>
                    {details.competitiveGap && (
                      <div className={`grid grid-cols-${Math.min(details.competitiveGap.length, 3)} gap-3 mt-4`}>
                        {details.competitiveGap.map((item, i) => (
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
                    )}
                  </SectionBlock>
                )}

                {/* Dynamic drawer sections */}
                {details.drawerSections?.map((section, sectionIdx) => {
                  const sColor = sectionIdx % 2 === 0 ? sc : c;
                  const delay = 0.25 + sectionIdx * 0.05;

                  return (
                    <SectionBlock key={sectionIdx} label={section.label} title={section.title} color={sColor} delay={delay}>
                      {section.content && <p className="mb-4">{section.content}</p>}
                      {section.quote && (
                        <p className="mb-4 italic" style={{ color: sColor }}>"{section.quote}"</p>
                      )}

                      {section.items && section.layout === "grid" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.items.map((item, i) => (
                            <motion.div
                              key={i}
                              className="rounded-2xl p-4 border"
                              style={{ borderColor: `${sColor}20`, backgroundColor: `${sColor}06` }}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: delay + 0.05 + i * 0.05 }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: sColor }}>
                                  {item.num || i + 1}
                                </span>
                                <p className="text-sm font-bold text-foreground">{item.title}</p>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.items && section.layout === "list" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.items.map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl border"
                              style={{ borderColor: `${sColor}15`, backgroundColor: `${sColor}05` }}
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: delay + 0.05 + i * 0.04 }}
                            >
                              <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: sColor }}>
                                {item.num || i + 1}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.items && section.layout === "steps" && (
                        <div className="space-y-3">
                          {section.items.map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-4 p-4 rounded-xl border"
                              style={{ borderColor: `${sColor}15`, backgroundColor: `${sColor}04` }}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: delay + 0.05 + i * 0.04 }}
                            >
                              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: sColor }}>
                                {item.num || i + 1}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.items && section.layout === "roadmap" && (
                        <div className="space-y-3">
                          {section.items.map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl border"
                              style={{ borderColor: `${sColor}15`, backgroundColor: `${sColor}04` }}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: delay + 0.05 + i * 0.04 }}
                            >
                              <span className="flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-bold text-white" style={{ backgroundColor: sColor }}>
                                {item.version || "V2"}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.items && !section.layout && (
                        <div className="space-y-3">
                          {section.items.map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl border"
                              style={{ borderColor: `${sColor}15`, backgroundColor: `${sColor}05` }}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: delay + 0.05 + i * 0.04 }}
                            >
                              <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: sColor }}>
                                {item.num || i + 1}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {section.rejections && (
                        <div className="rounded-xl p-4 border mt-4" style={{ borderColor: `${c}15`, backgroundColor: `${c}04` }}>
                          <p className="text-xs font-semibold text-foreground mb-2">What I rejected (on purpose):</p>
                          <div className="space-y-1.5">
                            {section.rejections.map((r, i) => (
                              <p key={i} className="text-xs text-muted-foreground">✕ {r}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </SectionBlock>
                  );
                })}

                {/* Results */}
                {details.results && details.results.length > 0 && (
                  <SectionBlock label="Results" title="Key Outcomes" color={sc} delay={0.6}>
                    <div className="space-y-3 mt-2">
                      {details.results.map((r, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl border"
                          style={{ borderColor: `${sc}15`, backgroundColor: `${sc}05` }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.65 + i * 0.04 }}
                        >
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: sc }}>
                            {i + 1}
                          </span>
                          <span className="text-[14px] leading-relaxed pt-0.5 text-foreground">{r}</span>
                        </motion.div>
                      ))}
                    </div>
                  </SectionBlock>
                )}

                {/* Key Takeaway Quote */}
                {details.takeawayQuote && (
                  <motion.div
                    className="rounded-2xl p-6 md:p-8 border"
                    style={{ borderColor: `${c}25`, background: `linear-gradient(135deg, ${c}08, ${sc}06)` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-lg md:text-xl font-bold leading-relaxed text-foreground mb-4">
                      "{details.takeawayQuote}"
                    </p>
                    {details.takeawayTags && (
                      <div className="flex flex-wrap gap-2">
                        {details.takeawayTags.map((tag, i) => (
                          <span key={i} className="rounded-full px-3 py-1 text-[10px] font-medium border" style={{ borderColor: `${c}25`, backgroundColor: `${c}10`, color: c }}>
                            ✓ {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Tools & Stack - Categorized */}
                {details.tools && details.tools.length > 0 && (
                  <SectionBlock label="Tools & Stack" color={c} delay={0.75}>
                    {(() => {
                      const aiKeywords = ['AI','ML','LLM','NLP','Clustering','Cosine','Filtering','Herfindahl','scikit','K-Means','Claude','GPT'];
                      const pmKeywords = ['RICE','Product Strategy','User Research','A/B Test','Data Analysis','Roadmap','Stakeholder','OKR','PRD','Persona','Journey Map','Competitive Analysis','Sprint','Acceptance Criteria','User Story','Discovery','Prioritization'];
                      const engKeywords = ['React','TypeScript','Vercel','Python','pandas','SQL','Recharts','Node','Next','Google Maps','Google Places','TMDB','API'];

                      const categorize = (t: string) => {
                        if (aiKeywords.some(k => t.toLowerCase().includes(k.toLowerCase()))) return 'ai';
                        if (pmKeywords.some(k => t.toLowerCase().includes(k.toLowerCase()))) return 'pm';
                        return 'eng';
                      };

                      const groups = {
                        ai: { label: 'AI / ML', items: details.tools.filter(t => categorize(t) === 'ai') },
                        pm: { label: 'Product Management', items: details.tools.filter(t => categorize(t) === 'pm') },
                        eng: { label: 'Engineering', items: details.tools.filter(t => categorize(t) === 'eng') },
                      };

                      return (
                        <div className="space-y-5">
                          {Object.entries(groups).filter(([, g]) => g.items.length > 0).map(([key, group]) => (
                            <div key={key}>
                              <p className="text-[11px] uppercase tracking-widest font-semibold mb-2.5" style={{ color: `${c}99` }}>{group.label}</p>
                              <div className="flex flex-wrap gap-2">
                                {group.items.map((t, i) => {
                                  const isAI = key === 'ai';
                                  return (
                                    <span key={i} className={`rounded-full px-3.5 py-1.5 text-xs font-medium border ${isAI ? 'font-bold' : ''}`} style={{ borderColor: isAI ? `${c}45` : `${c}20`, backgroundColor: isAI ? `${c}15` : `${c}08`, color: c }}>
                                      {isAI ? `✦ ${t}` : t}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </SectionBlock>
                )}
              </div>
            )}

            {/* Footer spacer */}
            <div className="h-16" />
          </motion.div>

          <AnimatePresence>
            {showCaseStudyModal && project.caseStudyPages && project.caseStudyPages.length > 0 && (
              <CaseStudyModal
                title={project.title}
                pages={project.caseStudyPages}
                color={c}
                secondaryColor={sc}
                onClose={() => setShowCaseStudyModal(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 440;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
