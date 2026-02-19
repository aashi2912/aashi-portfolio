import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, Mic, User, Triangle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "Work", id: "work", icon: Briefcase },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Hobbies", id: "hobbies", icon: Mic },
  { label: "About", id: "about", icon: User },
  { label: "Impossible List", id: "impossible-list", icon: Triangle },
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

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-screen w-14 flex-col items-center justify-between py-6 bg-background/90 backdrop-blur-sm border-r border-border/30">
      {/* Nav icons */}
      <div className="flex flex-col items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setTooltip(item.id)}
                onMouseLeave={() => setTooltip(null)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label={item.label}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-all duration-200",
                    active === item.id
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-80"
                  )}
                />
              </button>

              {/* Tooltip */}
              {tooltip === item.id && (
                <div className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-md">
                  {item.label}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 h-0 w-0 border-y-4 border-y-transparent border-r-4 border-r-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Theme toggle at bottom */}
      <ThemeToggle />
    </nav>
  );
}
