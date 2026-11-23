import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Light wrapper: soft atmosphere drift + gentle entrance. Scroll-driven scenes live in ScrollScenes. */
export function MotionSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const atmosphereY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <motion.div
      ref={ref}
      data-motion-section
      className={`relative isolate ${className}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="section-atmosphere pointer-events-none absolute -inset-x-16 -top-24 bottom-0 -z-10"
          style={{ y: atmosphereY }}
        />
      )}
      {children}
    </motion.div>
  );
}
