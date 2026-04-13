import { motion } from "framer-motion";

const drawTransition = { duration: 1, ease: "easeInOut" as const };
const drawProps = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: drawTransition,
};

// ─── Sketchy Sparkle ✨ ─────────────────────────────────────────────────
export function SketchSparkle({ size = 28, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <motion.path d="M14 2 C14.5 8, 16 12, 14 14 C12 12, 8 14.5, 2 14 C8 13.5, 12 16, 14 14 C16 16, 13.5 20, 14 26 C14.5 20, 12 16, 14 14 C16 12, 20 13.5, 26 14 C20 14.5, 16 12, 14 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.path d="M6 4 L7 7 L4 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M22 22 L23 25 L20 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Lightbulb 💡 ───────────────────────────────────────────────
export function SketchLightbulb({ size = 28, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <motion.path d="M14 3 C8 3, 4 7.5, 4 12.5 C4 16, 6.5 18, 9 20 C9.5 20.5, 10 21.5, 10 22 L18 22 C18 21.5, 18.5 20.5, 19 20 C21.5 18, 24 16, 24 12.5 C24 7.5, 20 3, 14 3Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.path d="M10 22 L10 24 C10 25.5, 12 27, 14 27 C16 27, 18 25.5, 18 24 L18 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M11 22 L17 22" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
      {/* rays */}
      <motion.path d="M14 0 L14 2" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M3 8 L5 9.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M25 8 L23 9.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Target 🎯 ─────────────────────────────────────────────────
export function SketchTarget({ size = 28, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <motion.circle cx="14" cy="14" r="12" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 2" fill="none" {...drawProps} />
      <motion.circle cx="14" cy="14" r="7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.circle cx="14" cy="14" r="3" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill={color} fillOpacity={0.2} {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Briefcase 💼 ──────────────────────────────────────────────
export function SketchBriefcase({ size = 32, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <motion.path d="M4 12 C4 10.5, 5 9.5, 6.5 9.5 L25.5 9.5 C27 9.5, 28 10.5, 28 12 L28 25 C28 26.5, 27 27.5, 25.5 27.5 L6.5 27.5 C5 27.5, 4 26.5, 4 25Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.path d="M11 9.5 L11 6.5 C11 5, 12 4, 13.5 4 L18.5 4 C20 4, 21 5, 21 6.5 L21 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M4 16 L28 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 3" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Pin 📌 ────────────────────────────────────────────────────
export function SketchPin({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <motion.path d="M12 2 C14 2, 17 4, 17 8 C17 11, 14 14, 12 17 C10 14, 7 11, 7 8 C7 4, 10 2, 12 2Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.circle cx="12" cy="8" r="2.5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity={0.15} {...drawProps} />
      <motion.path d="M12 17 L12 22" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Rocket 🚀 ─────────────────────────────────────────────────
export function SketchRocket({ size = 32, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <motion.path d="M16 3 C18 8, 22 14, 22 20 C22 24, 19 26, 16 28 C13 26, 10 24, 10 20 C10 14, 14 8, 16 3Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.circle cx="16" cy="16" r="2.5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity={0.2} {...drawProps} />
      <motion.path d="M10 20 C7 21, 5 23, 4 26" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M22 20 C25 21, 27 23, 28 26" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" {...drawProps} />
      {/* exhaust flames */}
      <motion.path d="M13 28 Q14 30, 16 31 Q18 30, 19 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Palette 🎨 ────────────────────────────────────────────────
export function SketchPalette({ size = 32, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <motion.path d="M16 4 C8 4, 3 10, 3 16 C3 22, 8 28, 16 28 C18 28, 19 27, 19 25.5 C19 24.5, 18.5 24, 18 23.5 C17.5 23, 17 22, 18 21 C19 20, 21 20, 22.5 20 C26 20, 29 18, 29 14 C29 8, 23 4, 16 4Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.circle cx="10" cy="13" r="2" stroke={color} strokeWidth="1.3" fill={color} fillOpacity={0.15} {...drawProps} />
      <motion.circle cx="15" cy="9" r="1.8" stroke={color} strokeWidth="1.3" fill={color} fillOpacity={0.15} {...drawProps} />
      <motion.circle cx="21" cy="12" r="1.8" stroke={color} strokeWidth="1.3" fill={color} fillOpacity={0.15} {...drawProps} />
      <motion.circle cx="10" cy="20" r="1.6" stroke={color} strokeWidth="1.3" fill={color} fillOpacity={0.15} {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Speech Bubble 💬 ──────────────────────────────────────────
export function SketchSpeechBubble({ size = 28, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <motion.path d="M4 6 C4 4.5, 5.5 3, 7 3 L21 3 C22.5 3, 24 4.5, 24 6 L24 17 C24 18.5, 22.5 20, 21 20 L10 20 L6 25 L7 20 L7 20 C5.5 20, 4 18.5, 4 17Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.path d="M9 9 L19 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" fill="none" {...drawProps} />
      <motion.path d="M9 13 L16 13" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Handshake 🤝 ──────────────────────────────────────────────
export function SketchHandshake({ size = 28, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <motion.path d="M2 14 L8 8 L12 10 L16 8 L20 10 L26 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" {...drawProps} />
      <motion.path d="M8 8 L6 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M20 10 L22 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" {...drawProps} />
      <motion.path d="M10 15 C12 13, 16 13, 18 15" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2" fill="none" {...drawProps} />
    </svg>
  );
}

// ─── Sketchy Heart 💖 ──────────────────────────────────────────────────
export function SketchHeart({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <motion.path d="M12 21 C10 19, 3 14, 3 8.5 C3 5, 5.5 3, 8 3 C9.5 3, 11 4, 12 5.5 C13 4, 14.5 3, 16 3 C18.5 3, 21 5, 21 8.5 C21 14, 14 19, 12 21Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity={0.1} {...drawProps} />
    </svg>
  );
}
