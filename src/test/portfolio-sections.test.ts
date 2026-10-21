import { describe, it, expect } from "vitest";
import { getSectionForPath } from "@/lib/portfolio-sections";
import { impossibleCategories } from "@/pages/Index";

describe("shareable portfolio sections", () => {
  it.each([
    ["/homepage", "home"],
    ["/work", "work"],
    ["/projects", "projects"],
    ["/references", "references"],
    ["/about", "about"],
    ["/impossible-list", "impossible-list"],
  ])("opens %s at the %s section", (path, id) => {
    expect(getSectionForPath(path)?.id).toBe(id);
  });

  it("keeps the original homepage and accepts trailing slashes", () => {
    expect(getSectionForPath("/")?.id).toBe("home");
    expect(getSectionForPath("/work/")?.id).toBe("work");
    expect(getSectionForPath("/unknown")).toBeUndefined();
  });
});

it("marks solo travel to Europe in my 20s as completed in Travel", () => {
  const travel = impossibleCategories.find((category) => category.name === "TRAVEL");
  const goal = travel?.items.find((item) => item.text === "Solo travel to Europe in my 20s");
  expect(goal?.done).toBe(true);
});