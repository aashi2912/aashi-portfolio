import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, ArrowLeft } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tag: string;
  year: string;
  link?: string;
  color: string;
  icon?: string;
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
  const num = String(index + 1).padStart(2, "0");

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
        className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 rounded-3xl overflow-hidden border border-border/60 transition-all duration-500`}
        style={{
          background: `linear-gradient(135deg, hsl(var(--card)), ${project.color}08)`,
        }}
      >
        {/* Visual hero side */}
        <motion.div
          className="relative w-full md:w-[55%] aspect-[16/10] md:aspect-auto md:min-h-[380px] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}18, ${project.color}08, hsl(var(--card)))`,
          }}
          animate={hovered ? { scale: 1.0 } : { scale: 1.0 }}
        >
          {/* Large number watermark */}
          <motion.span
            className="absolute top-6 left-8 font-mono text-[120px] md:text-[180px] font-black leading-none select-none pointer-events-none"
            style={{ color: `${project.color}12` }}
            animate={hovered ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {num}
          </motion.span>

          {/* Icon */}
          <motion.div
            className="absolute bottom-8 right-8 w-20 h-20 md:w-28 md:h-28 rounded-3xl flex items-center justify-center text-5xl md:text-7xl"
            style={{ backgroundColor: `${project.color}15` }}
            animate={
              hovered
                ? { rotate: [0, -8, 8, -4, 0], scale: 1.1 }
                : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.6 }}
          >
            {project.icon || "🚀"}
          </motion.div>

          {/* Decorative dots pattern */}
          <div
            className="absolute top-8 right-8 grid grid-cols-4 gap-2 opacity-[0.15]"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.color }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content side */}
        <div className="relative w-full md:w-[45%] flex flex-col justify-between p-8 md:p-10">
          {/* Top: tag + year */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                }}
              >
                {project.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-4 text-foreground"
              animate={hovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tools preview */}
            {project.details?.tools && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.details.tools.slice(0, 4).map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full px-3 py-1 text-[11px] font-medium bg-muted/60 text-muted-foreground border border-border/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA */}
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

          {/* Accent line */}
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

function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;
  const details = project.details;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[580px] md:w-[680px] bg-card border-l border-border overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            {/* Hero header */}
            <div
              className="relative px-8 pt-8 pb-12"
              style={{
                background: `linear-gradient(180deg, ${project.color}12, transparent)`,
              }}
            >
              {/* Back button */}
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                whileHover={{ x: -3 }}
              >
                <ArrowLeft size={16} /> Back to projects
              </motion.button>

              {/* Tag + year */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${project.color}18`,
                    color: project.color,
                  }}
                >
                  {project.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                {project.description}
              </p>

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold hover:underline"
                  style={{ color: project.color }}
                >
                  Visit project <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Content */}
            {details && (
              <div className="px-8 pb-16 space-y-10">
                {/* Meta cards */}
                {(details.role || details.duration || details.team) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Role", value: details.role },
                      { label: "Duration", value: details.duration },
                      { label: "Team", value: details.team },
                    ]
                      .filter((m) => m.value)
                      .map((m, i) => (
                        <motion.div
                          key={m.label}
                          className="rounded-2xl p-5 bg-muted/30 border border-border/40"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.08 }}
                        >
                          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-mono mb-1.5">
                            {m.label}
                          </p>
                          <p className="text-sm font-semibold">{m.value}</p>
                        </motion.div>
                      ))}
                  </div>
                )}

                {/* Sections */}
                {[
                  { key: "background", label: "Background" },
                  { key: "overview", label: "Overview" },
                  { key: "challenge", label: "The Challenge" },
                  { key: "solution", label: "The Solution" },
                ].map(
                  (s) =>
                    details[s.key as keyof typeof details] && (
                      <motion.div
                        key={s.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-mono font-semibold">
                          {s.label}
                        </h3>
                        <p className="text-[15px] leading-[1.8]">
                          {details[s.key as keyof typeof details] as string}
                        </p>
                      </motion.div>
                    )
                )}

                {/* Results */}
                {details.results && details.results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono font-semibold">
                      Key Results
                    </h3>
                    <div className="space-y-3">
                      {details.results.map((r, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-border/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                        >
                          <span
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                            style={{
                              backgroundColor: `${project.color}15`,
                              color: project.color,
                            }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-[15px] leading-relaxed pt-1">
                            {r}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tools */}
                {details.tools && details.tools.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-mono font-semibold">
                      Tools & Tech
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {details.tools.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full px-4 py-2 text-xs font-medium bg-muted/40 text-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
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

      {/* Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
