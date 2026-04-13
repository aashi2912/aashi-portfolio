import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, ArrowLeft, FileText, X } from "lucide-react";

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
  };
};

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
        {/* Visual hero side - FULL BLEED */}
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

/* ─── Case Study Drawer ─── */

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
      className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <span
        className="text-[11px] uppercase tracking-[0.2em] font-mono font-semibold pt-1 shrink-0"
        style={{ color }}
      >
        {label}
      </span>
      <div>
        {title && (
          <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{title}</h3>
        )}
        <div className="text-[15px] leading-[1.85] text-muted-foreground">{children}</div>
      </div>
    </motion.div>
  );
}

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
            {/* Hero banner with project color */}
            <div
              className="relative min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-8 md:p-10"
              style={{
                background: project.cardBg
                  ? `linear-gradient(180deg, ${project.cardBg}, ${project.cardBg}CC, hsl(var(--card)))`
                  : `linear-gradient(180deg, ${c}25, ${c}12, hsl(var(--card)))`,
              }}
            >
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={18} />
              </motion.button>

              {/* Back button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 left-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: -3 }}
              >
                <ArrowLeft size={16} /> Back
              </motion.button>

              {/* Large image or icon in hero */}
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="absolute top-8 right-4 md:right-8 w-[160px] md:w-[220px] opacity-40 select-none pointer-events-none object-contain"
                />
              ) : (
                <div className="absolute top-16 right-8 md:right-12 text-[80px] md:text-[120px] opacity-30 select-none pointer-events-none">
                  {project.icon || "🚀"}
                </div>
              )}

              {/* Tag + year */}
              <div className="flex items-center gap-3 mb-4 relative z-[1]">
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${c}25`, color: c }}
                >
                  {project.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-tight relative z-[1]">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg relative z-[1]">
                {project.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-6 relative z-[1]">
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: c }}
                  >
                    Visit Live <ExternalLink size={14} />
                  </a>
                )}
                {project.caseStudyPdf && (
                  <a
                    href={project.caseStudyPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:bg-muted/40"
                    style={{ borderColor: `${c}40`, color: c }}
                  >
                    <FileText size={14} /> View Full Case Study PDF
                  </a>
                )}
              </div>
            </div>

            {/* Colored divider */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${c}, ${c}40, transparent)` }} />

            {/* Content sections */}
            {details && (
              <div className="px-8 md:px-10 py-10 space-y-10">
                {/* Meta cards with color accents */}
                {(details.role || details.duration || details.team) && (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {[
                      { label: "Role", value: details.role },
                      { label: "Duration", value: details.duration },
                      { label: "Team", value: details.team },
                    ]
                      .filter((m) => m.value)
                      .map((m, i) => (
                        <div
                          key={m.label}
                          className="rounded-2xl p-5 border"
                          style={{
                            borderColor: `${c}20`,
                            backgroundColor: `${c}06`,
                          }}
                        >
                          <p
                            className="text-[11px] uppercase tracking-[0.15em] font-mono mb-1.5 font-semibold"
                            style={{ color: c }}
                          >
                            {m.label}
                          </p>
                          <p className="text-sm font-semibold text-foreground">{m.value}</p>
                        </div>
                      ))}
                  </motion.div>
                )}

                {/* Content sections - editorial layout */}
                {details.background && (
                  <SectionBlock label="Background" color={c} delay={0.2}>
                    {details.background}
                  </SectionBlock>
                )}

                {details.overview && (
                  <SectionBlock label="Overview" color={c} delay={0.25}>
                    {details.overview}
                  </SectionBlock>
                )}

                {details.challenge && (
                  <SectionBlock label="Challenge" title="The Problem" color={c} delay={0.3}>
                    {details.challenge}
                  </SectionBlock>
                )}

                {details.solution && (
                  <SectionBlock label="Solution" title="What I Built" color={c} delay={0.35}>
                    {details.solution}
                  </SectionBlock>
                )}

                {/* Results with colored accent */}
                {details.results && details.results.length > 0 && (
                  <SectionBlock label="Results" title="Key Outcomes" color={c} delay={0.4}>
                    <div className="space-y-3 mt-2">
                      {details.results.map((r, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl border"
                          style={{
                            borderColor: `${c}15`,
                            backgroundColor: `${c}05`,
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45 + i * 0.06 }}
                        >
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: c }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-[14px] leading-relaxed pt-0.5 text-foreground">
                            {r}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </SectionBlock>
                )}

                {/* Tools with color pills */}
                {details.tools && details.tools.length > 0 && (
                  <SectionBlock label="Tools" color={c} delay={0.5}>
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

                {/* Embedded PDF viewer */}
                {project.caseStudyPdf && (
                  <SectionBlock label="Case Study" title="Full Document" color={c} delay={0.55}>
                    <div
                      className="rounded-2xl overflow-hidden border mt-3"
                      style={{ borderColor: `${c}20` }}
                    >
                      <iframe
                        src={project.caseStudyPdf}
                        className="w-full h-[500px] md:h-[600px]"
                        title={`${project.title} Case Study`}
                      />
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
