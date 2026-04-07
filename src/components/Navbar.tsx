import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, User, Quote, ListChecks, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", id: "home", icon: Home, num: "1" },
  { label: "Work", id: "work", icon: Briefcase, num: "2" },
  { label: "Projects", id: "projects", icon: FolderOpen, num: "3" },
  { label: "About", id: "about", icon: User, num: "4" },
  { label: "References", id: "references", icon: Quote, num: "5" },
  { label: "Impossible List", id: "impossible-list", icon: ListChecks, num: "6" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

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
                <button
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setTooltip(item.id)}
                  onMouseLeave={() => setTooltip(null)}
                  aria-label={item.label}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
                    isActive ? "opacity-100" : "opacity-30 hover:opacity-70"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </button>

                {/* Tooltip */}
                {tooltip === item.id && (
                  <div className="pointer-events-none absolute left-[52px] top-1/2 -translate-y-1/2 z-50 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background shadow-lg">
                    {item.label}
                    <span className="ml-1.5 font-mono opacity-50">{item.num}</span>
                    <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 border-y-[4px] border-r-[4px] border-y-transparent border-r-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Theme toggle bottom */}
        <ThemeToggle />
      </nav>

      {/* ── Mobile: top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-sm border-b border-border/20">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <ThemeToggle />
      </div>

      {/* ── Mobile: slide-down menu ── */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[49px] left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/20">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 px-6 py-3.5 text-sm border-b border-border/20 last:border-0 transition-opacity",
                  active === item.id ? "opacity-100 font-medium" : "opacity-40"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1 text-left">{item.label}</span>
                <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
