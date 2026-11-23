import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const ACCENT_TEXT = "text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]";

/* ── Words light up one by one as the reader scrolls past ─────────────────── */
export type WordPart = { text: string; className?: string };

function ScrubWord({ word, progress, range, className }: { word: string; progress: MotionValue<number>; range: [number, number]; className?: string }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [14, 0]);
  const blur = useTransform(progress, range, [4, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <motion.span className={`inline-block will-change-transform ${className ?? ""}`} style={{ opacity, y, filter }}>
      {word}
    </motion.span>
  );
}

export function ScrubWords({ parts, className = "", as: Tag = "h2" }: { parts: WordPart[]; className?: string; as?: "h2" | "h3" | "h4" | "p" }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 92%", "start 38%"] });
  const words = parts.flatMap((p) => p.text.split(" ").filter(Boolean).map((w) => ({ w, c: p.className })));
  const MotionTag = motion[Tag];

  return (
    <MotionTag ref={ref} className={className} aria-label={parts.map((p) => p.text).join(" ")}>
      {words.map(({ w, c }, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1.6 / words.length + 0.08);
        return reduce ? (
          <span key={i} className={c} aria-hidden="true">{w}{" "}</span>
        ) : (
          <span key={i} aria-hidden="true">
            <ScrubWord word={w} progress={scrollYProgress} range={[start, end]} className={c} />{" "}
          </span>
        );
      })}
    </MotionTag>
  );
}

/* ── A photo window that opens up while the photo inside settles from a zoom ─ */
export function ZoomFrame({
  src, alt, className = "", imgClassName = "", imgStyle, from = 1.35, children,
}: { src: string; alt: string; className?: string; imgClassName?: string; imgStyle?: CSSProperties; from?: number; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [from, 1, 1.06]);
  const clip = useTransform(scrollYProgress, [0, 0.45], [14, 0]);
  const clipPath = useTransform(clip, (c) => `inset(${c}% ${c * 0.6}% ${c}% ${c * 0.6}% round 24px)`);
  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`} style={reduce ? undefined : { clipPath }}>
      <motion.img src={src} alt={alt} className={`h-full w-full object-cover ${imgClassName}`} style={{ ...imgStyle, ...(reduce ? {} : { scale }) }} />
      {children}
    </motion.div>
  );
}

/* ── A card-sized image that grows edge to edge as you scroll into it ─────── */
export function ExpandingImage({ src, alt, caption }: { src: string; alt: string; caption?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const side = useTransform(p, [0, 1], [18, 0]);
  const radius = useTransform(p, [0, 1], [40, 0]);
  const clipPath = useTransform([side, radius] as MotionValue<number>[], ([s, r]: number[]) => `inset(0% ${s}% 0% ${s}% round ${r}px)`);
  const scale = useTransform(p, [0, 1], [1.3, 1]);
  const captionOpacity = useTransform(p, [0.6, 1], [0, 1]);
  const captionY = useTransform(p, [0.6, 1], [30, 0]);

  return (
    <div ref={ref} className="relative left-1/2 my-12 w-screen -translate-x-1/2">
      <motion.div className="relative h-[62svh] min-h-[320px] overflow-hidden" style={reduce ? undefined : { clipPath }}>
        <motion.img src={src} alt={alt} className="h-full w-full object-cover" style={reduce ? undefined : { scale }} />
        {caption && (
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-6 pb-8 pt-24 text-center"
            style={reduce ? undefined : { opacity: captionOpacity, y: captionY }}
          >
            {caption}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

/* ── A coloured panel that rises and straightens as it reaches the screen ─── */
export function RisingPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 15%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [64, 32]);
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden border border-[hsl(200,50%,84%)] bg-[hsl(200,60%,95%)] dark:border-[hsl(200,40%,24%)] dark:bg-[hsl(200,40%,11%)] ${className}`}
      style={reduce ? { borderRadius: 32 } : { scale, y, borderRadius }}
    >
      {children}
    </motion.div>
  );
}

/* ── Drifts at its own speed for depth; optional tilt that settles ────────── */
export function Drift({ children, speed = 80, rotateFrom = 0, rotateTo = 0, className = "", style }: { children: ReactNode; speed?: number; rotateFrom?: number; rotateTo?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [rotateFrom, rotateTo]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.82, 1]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? { ...style, rotate: rotateTo } : { ...style, y, rotate, opacity, scale }}>
      {children}
    </motion.div>
  );
}

/* ── Two photo rows that glide in opposite directions with the scroll ─────── */
export function ScrollGallery({ images, alt }: { images: string[]; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-38%", "0%"]);
  const half = Math.ceil(images.length / 2);
  const rows = [
    [...images.slice(0, half), ...images.slice(0, half)],
    [...images.slice(half), ...images.slice(half)],
  ];
  return (
    <div ref={ref} className="relative left-1/2 my-6 w-screen -translate-x-1/2 space-y-4 overflow-hidden py-4">
      {rows.map((row, r) => (
        <motion.div key={r} className="flex w-max gap-4" style={reduce ? undefined : { x: r === 0 ? x1 : x2 }}>
          {row.map((img, i) => (
            <div key={i} className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl sm:h-56 sm:w-80">
              <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Pinned story: the photo stays put while each chapter takes the stage ─── */
export type StoryStep = { emoji: string; label: string; text: string };

export function PinnedStory({ steps, image, imageAlt, eyebrow }: { steps: StoryStep[]; image: string; imageAlt: string; eyebrow: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.max(0, Math.min(steps.length - 1, Math.floor(v * steps.length))));
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const jumpTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * (i + 0.5)) / steps.length, behavior: "smooth" });
  };

  if (reduce) {
    return (
      <div className="space-y-6">
        {steps.map((s) => (
          <div key={s.label}>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">{s.emoji} {s.label}</span>
            <p className="mt-1 text-[15px] leading-relaxed text-foreground/80">{s.text}</p>
          </div>
        ))}
      </div>
    );
  }

  const step = steps[active];
  return (
    <div ref={ref} className="relative" style={{ height: `${steps.length * 70 + 30}svh` }} data-pinned-story>
      <div className="sticky top-0 flex h-[100svh] items-center py-16">
        <div className="grid w-full items-center gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
          <motion.div className="relative mx-auto h-[30svh] w-[60%] overflow-hidden rounded-[28px] md:h-[64svh] md:w-full" style={{ rotate: imgRotate }}>
            <motion.img src={image} alt={imageAlt} className="h-full w-full object-cover object-top" style={{ scale: imgScale }} />
            <div className="absolute left-4 top-4 rounded-full border border-border bg-background/85 px-3 py-1 font-mono text-[12px] tracking-[0.18em] text-foreground backdrop-blur">
              {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </div>
          </motion.div>

          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</span>
            <div className="relative mt-4 min-h-[180px] md:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{step.emoji}</span>
                    <span className={`font-mono text-sm uppercase tracking-wider ${ACCENT_TEXT}`}>{step.label}</span>
                  </div>
                  <p className="mt-4 text-[20px] font-medium leading-[1.5] text-foreground md:text-[26px] md:leading-[1.4]">{step.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative mt-8 pl-5">
              <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-border" />
              <motion.div className="absolute left-0 top-0 w-[2px] rounded-full bg-primary" style={{ height: fill }} />
              <ul className="space-y-1.5">
                {steps.map((s, i) => (
                  <li key={s.label}>
                    <button
                      type="button"
                      onClick={() => jumpTo(i)}
                      className={`text-left font-mono text-[12px] uppercase tracking-wider transition-all duration-300 ${i === active ? "translate-x-1 text-foreground" : "text-muted-foreground/60 hover:text-muted-foreground"}`}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
