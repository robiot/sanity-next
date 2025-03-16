import type { Slug } from "sanity";
import type { SanityDocument } from "next-sanity";

import type { SectionData } from "./Section";

export interface PagePayload extends SanityDocument {
  title?: string;
  slug: Slug;
  sections: SectionData[];
}
