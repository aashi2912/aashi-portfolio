import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", id: "home", num: "1" },
  { label: "Work", id: "work", num: "2" },
  { label: "Projects", id: "projects", num: "3" },
  { label: "Hobbies", id: "hobbies", num: "4" },
  { label: "About", id: "about", num: "5" },
  { label: "Impossible List", id: "impossible-list", num: "6" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

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
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Desktop nav — omareletr style: label on top, number below */}
        <div className="hidden items-end gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group flex flex-col items-start gap-0 transition-opacity",
                active === item.id ? "opacity-100" : "opacity-40 hover:opacity-70"
              )}
            >
              <span className="text-sm font-medium leading-tight tracking-tight">
                {item.label}
              </span>
              <span className="font-mono text-[10px] leading-tight text-muted-foreground">
                {item.num}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setOpen(!open)} className="p-1">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <ThemeToggle />
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between py-3 text-sm transition-opacity text-left border-b border-border/50 last:border-0",
                active === item.id
                  ? "opacity-100 font-medium"
                  : "opacity-40"
              )}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

