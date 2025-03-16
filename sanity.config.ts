"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media} from "sanity-plugin-media";

import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
} from "./src/sanity/lib/api";
import { singletonPlugin } from "./src/sanity/plugins/settings";

import { settings } from "./src/sanity/schemas/singletons/settings";


import { EditIcon } from "@sanity/icons";
import { contentStructure } from "@/sanity/structure/content";
import { schemaTypes } from "@/sanity/schemas";
import { settingsStructure } from "@/sanity/structure/settings";

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      title: 'Content',
      name: 'content',
      icon: EditIcon,
      structure: contentStructure,
    }),

    structureTool({
      title: "Settings",
      name: "settings",
      icon: EditIcon,
      structure: settingsStructure,
    }),

    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/posts/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          // settings: defineLocations({
          //   locations: [homeLocation],
          //   message: "This document is used on all pages",
          //   tone: "caution",
          // }),
          content: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: "/",
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    }),

    media(),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
