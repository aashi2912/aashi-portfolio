import { describe, expect, it } from "vitest";
import { vibeRouteV2 } from "@/pages/Index";

describe("Vibe Route version preservation", () => {
  it("keeps V1's original case study and PRD attached to the same project", () => {
    const original = vibeRouteV2.previousVersion;
    expect(original?.slug).toBe("vibe-route");
    expect(original?.caseStudyPdf).toBe("/case-studies/vibe-route-case-study.pdf");
    expect(original?.caseStudyPages).toHaveLength(13);
    expect(original?.prdPdf).toBe("/case-studies/vibe-route-prd.pdf");
    expect(original?.prdPages).toHaveLength(5);
    expect(original?.demoVideo).toBeUndefined();
  });

  it("makes the new case study and demo primary without overwriting V1 assets", () => {
    expect(vibeRouteV2.caseStudyPages).toHaveLength(13);
    expect(vibeRouteV2.caseStudyPdf).not.toBe(vibeRouteV2.previousVersion?.caseStudyPdf);
    expect(new URL(vibeRouteV2.demoVideo ?? "").origin).toBe("https://aashi-portfolio.lovable.app");
    for (const page of vibeRouteV2.caseStudyPages ?? []) {
      expect(new URL(page).origin).toBe("https://aashi-portfolio.lovable.app");
    }
    expect(vibeRouteV2.metricsLink).toBe("https://vibe-route.vercel.app/metrics");
  });
});