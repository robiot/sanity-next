import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import * as demo from "@/sanity/lib/demo";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your website.",
      title: "Title",
      type: "string",
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "Used both for the <meta> description tag for SEO, and the website subheader.",
      title: "Description",
      type: "array",
      initialValue: demo.description,
      of: [
        defineArrayMember({
          type: "block",
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: "object",
                name: "link",
                fields: [
                  {
                    type: "string",
                    name: "href",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
    }),
    // site logo
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Used in the header and footer.",
      options: {
        hotspot: true,
      },
    }),
    // contact information
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          description: "Important for accessibility and SEO.",
          title: "Alternative text",
          type: "string",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        }),
        defineField({
          name: "metadataBase",
          type: "url",
          description: (
            <a
              href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
              rel="noreferrer noopener"
            >
              More information
            </a>
          ),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
