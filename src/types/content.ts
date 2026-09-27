export type { SolutionPageContent } from "@/data/solutionsData";
export type { Tier3Page } from "@/data/shared/tier3Pages";

/** Basic fields shared by new Tier 2 topics. Existing pages add family-specific copy. */
export interface Tier2Topic {
  id: string;
  title: string;
  href: string;
  description?: string;
}

/** Basic fields shared by new Tier 3 entries. */
export interface Tier3Item {
  id: string;
  title: string;
  description: string;
}

