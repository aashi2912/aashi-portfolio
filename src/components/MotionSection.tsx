import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function MotionSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [32, 0, 0, -18]);
  const atmosphereY = useTransform(scrollYProgress, [0, 1], [-48, 48]);

  return (
    <motion.div
      ref={ref}
      data-motion-section
      className={`relative isolate ${className}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 72, clipPath: "inset(10% 0 0 0)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="section-atmosphere pointer-events-none absolute -inset-x-16 -top-24 bottom-0 -z-10"
          style={{ y: atmosphereY }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cinematic-grid absolute inset-0 opacity-[0.018] [mask-image:linear-gradient(to_bottom,transparent,black_18%,transparent_72%)]" />
        </motion.div>
      )}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-[hsl(200,55%,58%)] to-transparent dark:via-[hsl(200,45%,68%)]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.45 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div style={{ y: reduceMotion ? 0 : contentY }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
