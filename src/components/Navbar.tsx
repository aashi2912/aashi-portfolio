import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Briefcase, FolderOpen, User, Quote, ListChecks, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { portfolioSections } from "@/lib/portfolio-sections";
import { cn } from "@/lib/utils";

const sectionIcons = { home: Home, work: Briefcase, projects: FolderOpen, references: Quote, about: User, "impossible-list": ListChecks };
const navItems = portfolioSections.map((section) => ({ ...section, icon: sectionIcons[section.id] }));

export function Navbar() {
  const [active, setActive] = useState("home");
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Desktop: fixed left sidebar ── */}
      <nav className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-14 flex-col items-center justify-between py-6 border-r border-border/20 bg-background/80 backdrop-blur-sm">
        {/* Spacer top */}
        <div />

        {/* Icons centered vertically */}
        <div className="flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <div key={item.id} className="relative">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  onMouseEnter={() => setTooltip(item.id)}
                  onMouseLeave={() => setTooltip(null)}
                  aria-label={item.label}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
                    isActive ? "opacity-100" : "opacity-30 hover:opacity-70"
                  )}
                >
                  <Link to={item.path} aria-current={isActive ? "location" : undefined}>
                    <span className="relative flex h-10 w-10 items-center justify-center">
                      {isActive && (
                        <motion.span
                          layoutId="active-section"
                          className="absolute inset-0 rounded-lg bg-accent"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <Icon className="relative h-5 w-5" />
                    </span>
                  </Link>
                </Button>

                {/* Tooltip */}
                <AnimatePresence>
                  {tooltip === item.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -8, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -5, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="pointer-events-none absolute left-[52px] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background shadow-lg"
                    >
                      {item.label}
                      <span className="ml-1.5 font-mono opacity-50">{item.num}</span>
                      <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 border-y-[4px] border-r-[4px] border-y-transparent border-r-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Theme toggle bottom */}
        <ThemeToggle />
      </nav>

      {/* ── Mobile: top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-sm border-b border-border/20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="h-7 w-7 p-1 text-foreground"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <ThemeToggle />
      </div>

      {/* ── Mobile: slide-down menu ── */}
      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed top-[49px] left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/20"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                asChild
                variant="ghost"
                key={item.id}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex h-auto w-full items-center gap-3 rounded-none px-6 py-3.5 text-sm border-b border-border/20 last:border-0 transition-opacity",
                  active === item.id ? "opacity-100 font-medium" : "opacity-40"
                )}
              >
                <Link to={item.path} aria-current={active === item.id ? "location" : undefined}>
                  <Icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
                </Link>
              </Button>
            );
          })}
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
