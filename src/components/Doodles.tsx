import { motion } from "framer-motion";

// ─── Squiggly Underline ─────────────────────────────────────────────────────
export function SquigglyUnderline({ width = 120, color = "hsl(200,50%,35%)", className = "" }: { width?: number; color?: string; className?: string }) {
  return (
    <motion.svg
      width={width}
      height="8"
      viewBox={`0 0 ${width} 8`}
      fill="none"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.path
        d={`M0 4 Q ${width * 0.1} 0, ${width * 0.2} 4 Q ${width * 0.3} 8, ${width * 0.4} 4 Q ${width * 0.5} 0, ${width * 0.6} 4 Q ${width * 0.7} 8, ${width * 0.8} 4 Q ${width * 0.9} 0, ${width} 4`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// ─── Hand-drawn Circle ──────────────────────────────────────────────────────
export function DoodleCircle({ size = 60, color = "hsl(200,50%,35%)", className = "" }: { size?: number; color?: string; className?: string }) {
  const r = size / 2 - 3;
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.ellipse
        cx={size / 2}
        cy={size / 2}
        rx={r}
        ry={r * 0.92}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 3"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// ─── Curvy Arrow ────────────────────────────────────────────────────────────
export function DoodleArrow({ direction = "down", size = 40, color = "hsl(200,50%,35%)", className = "" }: { direction?: "down" | "right" | "left"; size?: number; color?: string; className?: string }) {
  const paths: Record<string, string> = {
    down: "M20 2 Q22 15, 18 25 Q14 35, 20 38 M15 33 L20 38 L25 33",
    right: "M2 20 Q15 18, 25 22 Q35 26, 38 20 M33 15 L38 20 L33 25",
    left: "M38 20 Q25 18, 15 22 Q5 26, 2 20 M7 15 L2 20 L7 25",
  };
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.path
        d={paths[direction]}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      />
    </motion.svg>
  );
}

// ─── Sparkle / Star ─────────────────────────────────────────────────────────
export function DoodleStar({ size = 20, color = "hsl(45,90%,55%)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <motion.path
        d="M10 0 L12 7 L20 8 L13 13 L15 20 L10 16 L5 20 L7 13 L0 8 L8 7 Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// ─── Floating element wrapper ───────────────────────────────────────────────
export function FloatingDoodle({ children, className = "", delay = 0, amplitude = 6 }: { children: React.ReactNode; className?: string; delay?: number; amplitude?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Wiggle text wrapper ────────────────────────────────────────────────────
export function WiggleText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      whileHover={{ rotate: [0, -2, 2, -1, 0] }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.span>
  );
}

// ─── Section Divider (wavy hand-drawn line) ─────────────────────────────────
export function WavyDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <motion.svg
        width="300"
        height="20"
        viewBox="0 0 300 20"
        fill="none"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.3, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <path
          d="M0 10 Q25 2, 50 10 Q75 18, 100 10 Q125 2, 150 10 Q175 18, 200 10 Q225 2, 250 10 Q275 18, 300 10"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
}

// ─── Animated counter ───────────────────────────────────────────────────────
export function AnimatedCounter({ value, suffix = "", label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span
        className="text-3xl md:text-4xl font-bold text-[hsl(200,50%,35%)] dark:text-[hsl(200,40%,75%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}{suffix}
      </motion.span>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
}

// ─── Sketch-style highlight box ─────────────────────────────────────────────
export function SketchHighlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -inset-2 border-2 border-dashed border-[hsl(200,50%,35%,0.3)] dark:border-[hsl(200,40%,75%,0.3)] rounded-lg"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      {children}
    </motion.div>
  );
}
