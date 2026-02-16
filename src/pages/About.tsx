import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="space-y-16">
      {/* Suhad-style headline */}
      <RevealSection>
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Jack of all trades,
          </h1>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-muted-foreground">
            Master of <span className="italic text-foreground">some.</span>
          </h2>
        </div>
      </RevealSection>

      <div className="grid gap-12 md:grid-cols-[auto_1fr]">
        <RevealSection delay={0.1}>
          <div className="h-64 w-64 rounded-2xl bg-muted" /> {/* Photo placeholder */}
        </RevealSection>

        <div className="space-y-6">
          {/* Suhad-style personal storytelling with bold keywords */}
          <RevealSection delay={0.2}>
            <p className="text-base leading-relaxed">
              Hey there! I'm <span className="font-semibold">John Doe</span> — a product
              builder based in <span className="font-semibold">Cairo, Egypt</span> with a
              passion for turning ambiguous problems into elegant solutions. I do a lot of
              things, but the heart of it would be weaving{" "}
              <span className="font-semibold">meaningful stories</span> through chaos.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p className="text-base leading-relaxed text-muted-foreground">
              I started my career in software engineering before transitioning to product management.
              This technical background helps me bridge the gap between engineering and business — and
              I love the challenge of making complex systems feel effortless to use.
            </p>
          </RevealSection>

          <RevealSection delay={0.4}>
            <p className="text-base leading-relaxed text-muted-foreground">
              When I'm not obsessing over product strategy, you'll find me recording podcast episodes,
              writing blog posts, or buried in a good book. I believe in{" "}
              <span className="font-semibold text-foreground">learning in public</span> and sharing
              everything I discover along the way.
            </p>
          </RevealSection>

          <RevealSection delay={0.5}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Outside of work, I'm working through my{" "}
              <span className="font-semibold text-foreground">impossible list</span> — a living document
              of goals and challenges that push me beyond what I thought possible.
            </p>
          </RevealSection>
        </div>
      </div>
    </div>
  );
}
