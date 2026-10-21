export const portfolioSections = [
  { label: "Home", id: "home", path: "/homepage", num: "1" },
  { label: "Work", id: "work", path: "/work", num: "2" },
  { label: "Projects", id: "projects", path: "/projects", num: "3" },
  { label: "References", id: "references", path: "/references", num: "4" },
  { label: "About", id: "about", path: "/about", num: "5" },
  { label: "Impossible List", id: "impossible-list", path: "/impossible-list", num: "6" },
] as const;

export function getSectionForPath(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/" || path === "/home") return portfolioSections[0];
  return portfolioSections.find((section) => section.path === path);
}