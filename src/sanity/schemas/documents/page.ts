import { defineArrayMember, defineField, defineType } from "sanity";
import {
  DocumentTextIcon,
  HomeIcon,
} from "@sanity/icons";
import { sections } from "../sections";
// import { SectionsArrayInput } from '@tinloof/sanity-studio';

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentTextIcon,
  orderings: [
    {
      name: "titleAsc",
      title: "Title (A-Z)",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Title (Z-A)",
      by: [{ field: "title", direction: "desc" }],
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: sections.map((section) =>
        defineArrayMember({
          name: section.name,
          type: section.name,
        })
      ),
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: "/" + slug?.current?.replace(/^\//, ""),
        media: slug.current === "/" ? HomeIcon : undefined,
      };
    },
  },
});
