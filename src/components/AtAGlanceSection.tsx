import { BrainCircuit, HeartHandshake, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

const projectLinkClass =
  "font-medium text-story-ink underline decoration-story-line decoration-2 underline-offset-4 transition-colors hover:text-foreground";

const panelClass =
  "relative overflow-hidden rounded-[28px] border border-story-line/30 bg-story-bubble p-6 text-left text-story-ink sm:p-7 md:p-8";

const iconClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-story-line/35 bg-background/45 text-story-ink";

export function AtAGlanceSection() {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold tracking-tight">The thread through my work</h2>

      <div className="relative mx-auto mt-7 max-w-2xl">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-story-line/50" />
        <motion.p {...fade(0)} className="pt-5 text-[22px] font-semibold leading-snug tracking-tight text-foreground">
          Engineer-first product and AI strategist who{" "}
          <span className="relative inline-block">
            ships.
            <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-story-line transition-transform duration-500 hover:scale-x-75" />
          </span>
        </motion.p>
        <motion.p {...fade(0.05)} className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Product · AI · Strategy & GTM
        </motion.p>
      </div>

      <div className="relative mx-auto mt-9 max-w-4xl space-y-5">
        <motion.article {...fade(0.08)} className={panelClass}>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div className="flex items-center gap-4 md:w-40 md:shrink-0 md:flex-col md:items-start md:justify-center">
              <div className={iconClass}>
                <HeartHandshake className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-story-ink/60">01 / Product</p>
                <h3 className="mt-1 text-[22px] font-bold tracking-tight">People first</h3>
              </div>
            </div>
            <p className="flex-1 text-[17px] leading-[1.75] text-story-ink/80 md:border-l md:border-story-line/25 md:pl-8">
              I started in code, but the question that stayed with me was never just &ldquo;How do we
              build it?&rdquo; It was &ldquo;Why would someone choose this, trust it, and come
              back?&rdquo; That is what pulls me toward consumer products: the everyday moments where
              technology can feel useful, personal, and a little more human.
            </p>
          </div>
        </motion.article>

        <motion.article {...fade(0.16)} className={panelClass}>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div className="flex items-center gap-4 md:w-40 md:shrink-0 md:flex-col md:items-start md:justify-center">
              <div className={iconClass}>
                <BrainCircuit className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-story-ink/60">02 / AI</p>
                <h3 className="mt-1 text-[22px] font-bold tracking-tight">Built on trust</h3>
              </div>
            </div>
            <p className="flex-1 text-[17px] leading-[1.75] text-story-ink/80 md:border-l md:border-story-line/25 md:pl-8">
              At RBC, I lead AI product strategy on the <span className="font-medium text-story-ink">Aiden platform</span>.
              It has taught me how to make complex AI dependable. Outside work, I explore the other side
              of the craft through{" "}
              <Link to="/projects/vibe-route" className={projectLinkClass}>Vibe Route</Link>,{" "}
              <Link to="/projects/blind-spot" className={projectLinkClass}>Blind Spot</Link>,{" "}
              <Link to="/projects/fine-print" className={projectLinkClass}>Fine Print</Link>, and{" "}
              <Link to="/projects/spotify-ai-dj" className={projectLinkClass}>Spotify AI DJ</Link>{" "}
              - how people discover, decide, personalize, and stay in control.
            </p>
          </div>
        </motion.article>

        <motion.article {...fade(0.24)} className={panelClass}>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div className="flex items-center gap-4 md:w-40 md:shrink-0 md:flex-col md:items-start md:justify-center">
              <div className={iconClass}>
                <Route className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-story-ink/60">03 / Strategy & GTM</p>
                <h3 className="mt-1 text-[22px] font-bold tracking-tight">Real outcomes</h3>
              </div>
            </div>
            <p className="flex-1 text-[17px] leading-[1.75] text-story-ink/80 md:border-l md:border-story-line/25 md:pl-8">
              The thread through all of it is <span className="font-medium text-story-ink">consumer instinct,
              AI judgment, and strategy that ends in something real.</span> I like getting close to the
              problem, making the trade-offs clear, and building enough of the first version myself to
              understand what I am asking of the technology.
            </p>
          </div>
        </motion.article>
      </div>

      <motion.div {...fade(0.32)} className="mx-auto mt-8 max-w-xl border-y border-border/70 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Curious about people · Opinionated about AI · Happiest when shipping
        </p>
      </motion.div>

      <motion.p {...fade(0.38)} className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
        Along the way, the Aiden team I am part of was featured in{" "}
        <a
          href="https://www.nvidia.com/en-us/case-studies/rbc-capital-markets/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-story-line decoration-2 underline-offset-4"
        >
          NVIDIA&apos;s customer story
        </a>{" "}
        and presented at the{" "}
        <a
          href="https://www.youtube.com/watch?v=c4oVUmt15PY"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-story-line decoration-2 underline-offset-4"
        >
          Databricks Data + AI Summit
        </a>
        .
      </motion.p>
    </div>
  );
}
