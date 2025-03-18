import { InlineIcon } from "@sanity/icons";

import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  icon: InlineIcon,
  options: {},
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      heading: "heading",
      image: "image",
    },
    prepare({ heading, image }) {
      return {
        title: heading ? heading : "",
        media: image || InlineIcon,
      };
    },
  },
});
