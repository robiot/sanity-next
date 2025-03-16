/* eslint-disable unused-imports/no-unused-vars */
import React from "react";

import type { Section, SectionData } from "@/types/Section";
import { cn } from "@/lib/utils";

interface PageSectionProps
  extends Section<SectionData>,
    React.HTMLAttributes<HTMLDivElement> {}

function PageSection({
  className,
  index,
  isFirst,
  isLast,
  next,
  previous,
  data,
  dataAttribute,
  page,
  locale,
  siteSettings,
  ...props
}: PageSectionProps) {
  return (
    <section
      id={`page-section-${index}`}
      className={cn(
        "py-10 pt-20",
        className
      )}
      data-sanity={dataAttribute?.()}
      {...props}
    />
  );
}

export { PageSection };
