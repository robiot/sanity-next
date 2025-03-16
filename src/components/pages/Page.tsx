import { draftMode } from "next/headers";
import { createDataAttribute } from "next-sanity";
import { PagePayload } from "@/types/Page";
import { PageSection } from "../sections/PageSection";
import { Hero } from "../sections/Hero";
import { type Page } from "@/types/sanity.types";
import { loadSettings } from "@/sanity/data";

const pageSections: {
  [key: string]: (props?: any) => JSX.Element | Promise<JSX.Element>;
} = {
  hero: Hero,
};

export async function Page({
  data,
  locale,
}: {
  data: Page | null;
  locale?: string;
}) {
  const { sections } = data ?? {};

  if (!data) {
    return null;
  }

  const siteSettings = await loadSettings();

  return (
    <>
      {sections?.map(async (section, index) => {
        const type = section._type.replace(/^section./, "");

        if (type && pageSections[type]) {
          const Component = pageSections[type];

          const sectionProps = {
            page: data,
            data: {
              ...section,
              _type: type,
            },
            isFirst: index === 0,
            isLast: sections.length === index + 1,
            previous: index !== 0 ? sections[index - 1] : undefined,
            next:
              index !== sections.length - 1 ? sections[index + 1] : undefined,
            dataAttribute: (await draftMode()).isEnabled
              ? createDataAttribute({
                  baseUrl: "/", // todo
                  id: data._id,
                  type: data._type,
                  path: ["sections", index],
                })
              : undefined,
            index,
            locale,
            siteSettings,
          };

          return (
            <PageSection key={section._key} {...sectionProps}>
              <Component {...sectionProps} />
            </PageSection>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
