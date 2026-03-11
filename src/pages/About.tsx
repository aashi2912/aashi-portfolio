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
          <RevealSection delay={0.2}>
            <p className="text-base leading-relaxed">
              I'm a Product Manager based in Toronto 🇨🇦, currently leading Alternative Data, Gen AI, and Research Technology products at Royal Bank of Canada – Capital Markets 🏦.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p className="text-base leading-relaxed text-muted-foreground">
              I started out as a software developer 👨‍💻. Three years in, I noticed something: I was spending more time thinking about why we were building things than actually building them. Who was this for? Does it actually solve their problem? Does it matter? 🤔 Turns out, those were the questions I cared about most.
            </p>
          </RevealSection>

          <RevealSection delay={0.4}>
            <p className="text-base leading-relaxed text-muted-foreground">
              That curiosity pulled me toward UX and Product 🎨 — and honestly, it clicked in a way that writing code never quite did. I found I was good at it, even before I had the title to match 💡✨.
            </p>
          </RevealSection>

          <RevealSection delay={0.5}>
            <p className="text-base leading-relaxed text-muted-foreground">
              What drew me to product management wasn't just the craft — it was the mindset 🧠. Owning a problem end-to-end, bringing clarity to messy situations, and working with people across disciplines to build something that genuinely makes a difference 🎯. That's the work I find most meaningful 🚀.
            </p>
          </RevealSection>

          <RevealSection delay={0.6}>
            <p className="text-base leading-relaxed text-muted-foreground">
              These days, I sit at the intersection of technology and business 💼⚙️. My job is to make sense of complex, ambiguous problems and turn them into something a team can actually build — and that users actually want to use 🙌.
            </p>
          </RevealSection>

          <RevealSection delay={0.7}>
            <p className="text-base leading-relaxed text-muted-foreground">
              The thing I keep coming back to is this: the best products aren't just technically solid, they're built around real human needs ❤️. That belief shapes how I approach every decision 🔍.
            </p>
          </RevealSection>

          <RevealSection delay={0.8}>
            <p className="text-base leading-relaxed">
              If you're into AI 🤖, data products 📊, or product strategy — I'd love to connect 🤝.
            </p>
          </RevealSection>
        </div>
      </div>
    </div>
  );
}
