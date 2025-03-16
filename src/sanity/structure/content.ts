import type { StructureResolver } from "sanity/structure";

import { page } from "@/sanity/schemas/documents/page";

export const contentStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Pages
      S.listItem()
        .title("Pages")
        .icon(page.icon)
        .child(S.documentTypeList(page.name).title("Pages")),

      // *Below* this divider, add content types that do *not* map to public pages,
      // i.e. do not have a pathname field, such as FAQ items and the like.
      S.divider(),
    ]);
