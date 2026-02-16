import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/", num: "1" },
  { label: "Work", path: "/work", num: "2" },
  { label: "Blog", path: "/blog", num: "3" },
  { label: "Podcast", path: "/podcast", num: "4" },
  { label: "Reads", path: "/reads", num: "5" },
  { label: "About", path: "/about", num: "6" },
  { label: "Impossible List", path: "/impossible-list", num: "7" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent",
                pathname === item.path
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <span className="font-mono text-xs text-muted-foreground">{item.num}.</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setOpen(!open)} className="p-1">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <ThemeToggle />
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 py-2 text-sm transition-colors",
                pathname === item.path
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <span className="font-mono text-xs text-muted-foreground">{item.num}.</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
