import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 64, clipPath: "inset(8% 0 0 0)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 origin-center bg-[hsl(200,55%,58%)] dark:bg-[hsl(200,45%,68%)]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
      />
      {children}
    </motion.div>
  );
}
