import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tag: string;
  year: string;
  link?: string;
  color: string; // hsl accent color for the card
  icon?: string; // emoji
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

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[320px] sm:w-[380px] cursor-pointer select-none"
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.68, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden border border-border group"
        style={{
          background: `linear-gradient(145deg, ${project.color}15, hsl(var(--card)))`,
        }}
        whileHover={{
          y: -8,
          boxShadow: `0 20px 60px -15px ${project.color}40`,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top accent bar */}
        <div
          className="h-1.5 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }}
        />

        {/* Icon area */}
        <div className="relative px-6 pt-8 pb-4">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
            style={{ backgroundColor: `${project.color}20` }}
            animate={hovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {project.icon || "🚀"}
          </motion.div>

          {/* Tag + Year */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.tag}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight leading-tight mb-3 text-foreground">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <motion.div
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: project.color }}
            animate={hovered ? { x: 4 } : { x: 0 }}
          >
            View case study <ArrowRight size={14} />
          </motion.div>
        </div>

        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-[0.07]"
          style={{
            background: `radial-gradient(circle at top right, ${project.color}, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectDrawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  const details = project.details;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[560px] md:w-[640px] bg-card border-l border-border overflow-y-auto shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-4 left-4 z-10 ml-4 mt-4 w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="px-8 pt-4 pb-8">
              <div
                className="h-1.5 w-20 rounded-full mb-8"
                style={{ background: project.color }}
              />

              <div className="flex items-center gap-2 mb-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                >
                  {project.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight mb-3">{project.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium hover:underline"
                  style={{ color: project.color }}
                >
                  Visit project <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Details */}
            {details && (
              <div className="px-8 pb-12 space-y-8">
                {/* Meta row */}
                {(details.role || details.duration || details.team) && (
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                    {details.role && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
                        <p className="text-sm font-medium">{details.role}</p>
                      </div>
                    )}
                    {details.duration && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                        <p className="text-sm font-medium">{details.duration}</p>
                      </div>
                    )}
                    {details.team && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                        <p className="text-sm font-medium">{details.team}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Sections */}
                {details.background && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">Background</h3>
                    <p className="text-[15px] leading-relaxed">{details.background}</p>
                  </div>
                )}

                {details.overview && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">Overview</h3>
                    <p className="text-[15px] leading-relaxed">{details.overview}</p>
                  </div>
                )}

                {details.challenge && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">The Challenge</h3>
                    <p className="text-[15px] leading-relaxed">{details.challenge}</p>
                  </div>
                )}

                {details.solution && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">The Solution</h3>
                    <p className="text-[15px] leading-relaxed">{details.solution}</p>
                  </div>
                )}

                {details.results && details.results.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">Results</h3>
                    <ul className="space-y-2">
                      {details.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px]">
                          <span style={{ color: project.color }} className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.tools && details.tools.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-mono">Tools & Tech</h3>
                    <div className="flex flex-wrap gap-2">
                      {details.tools.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Mouse drag to scroll
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    dragStart.current = { x: e.pageX, scrollLeft: scrollRef.current.scrollLeft };
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragStart.current || !scrollRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    if (Math.abs(dx) > 5) setIsDragging(true);
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    dragStart.current = null;
  };

  const handleCardClick = (project: Project) => {
    if (!isDragging) {
      setSelectedProject(project);
      document.body.style.overflow = "hidden";
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <div className="hidden sm:flex items-center justify-end gap-2 mb-4">
        <button
          onClick={() => scroll("left")}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {/* Left padding spacer */}
        <div className="flex-shrink-0 w-0 sm:w-4" />

        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onClick={() => handleCardClick(project)}
          />
        ))}

        {/* Right padding spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Scroll hint gradient */}
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent" />

      {/* Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
