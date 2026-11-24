import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

const projectLinkClass =
  "font-medium text-foreground underline decoration-[hsl(200,60%,60%)] decoration-2 underline-offset-4 transition-colors hover:decoration-[hsl(200,70%,45%)]";

export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">The thread through my work</h2>

      <div className="relative mx-auto mt-7 max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[hsl(200,55%,60%)] to-transparent"
        />
        <motion.p
          {...fade(0)}
          className="pt-5 text-[22px] font-semibold leading-snug tracking-tight text-foreground"
        >
          Engineer-first product and AI strategist who{" "}
          <span className="relative inline-block">
            ships.
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-[hsl(200,60%,62%)] transition-transform duration-500 hover:scale-x-75 dark:bg-[hsl(200,55%,70%)]"
            />
          </span>
        </motion.p>

        <motion.p {...fade(0.08)} className="mt-6 text-[18px] leading-relaxed text-muted-foreground">
          I started in code, but the question that stayed with me was never just &ldquo;How do we
          build it?&rdquo; It was &ldquo;Why would someone choose this, trust it, and come
          back?&rdquo; That is what pulls me toward consumer products: the everyday moments where
          technology can feel useful, personal, and a little more human.
        </motion.p>

        <motion.p {...fade(0.16)} className="mt-5 text-[18px] leading-relaxed text-muted-foreground">
          At RBC, I lead AI product strategy on the <span className="text-foreground">Aiden platform</span>.
          It has taught me how to make complex AI dependable. Outside work, I explore the other side
          of the craft through{" "}
          <Link to="/projects/vibe-route" className={projectLinkClass}>
            Vibe Route
          </Link>
          ,{" "}
          <Link to="/projects/blind-spot" className={projectLinkClass}>
            Blind Spot
          </Link>
          ,{" "}
          <Link to="/projects/fine-print" className={projectLinkClass}>
            Fine Print
          </Link>
          , and{" "}
          <Link to="/projects/spotify-ai-dj" className={projectLinkClass}>
            Spotify AI DJ
          </Link>{" "}
          - how people discover, decide, personalize, and stay in control.
        </motion.p>

        <motion.p {...fade(0.24)} className="mt-5 text-[18px] leading-relaxed text-muted-foreground">
          The thread through all of it is <span className="font-medium text-foreground">consumer instinct,
          AI judgment, and strategy that ends in something real.</span> I like getting close to the
          problem, making the trade-offs clear, and building enough of the first version myself to
          understand what I am asking of the technology.
        </motion.p>

        <motion.div {...fade(0.32)} className="mx-auto mt-8 max-w-xl border-y border-border/70 py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Curious about people · Opinionated about AI · Happiest when shipping
          </p>
        </motion.div>

        <motion.p {...fade(0.38)} className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
          Along the way, the Aiden team I am part of was featured in{" "}
          <a
            href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/"
            target="_blank"
            rel="noopener noreferrer"
            className={projectLinkClass}
          >
            NVIDIA&apos;s customer story
          </a>{" "}
          and presented at the{" "}
          <a
            href="https://www.youtube.com/watch?v=c4oVUmt15PY"
            target="_blank"
            rel="noopener noreferrer"
            className={projectLinkClass}
          >
            Databricks Data + AI Summit
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}
