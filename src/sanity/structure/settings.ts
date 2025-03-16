import type { StructureResolver } from "sanity/structure";

import { settings } from "../schemas/singletons/settings";

export const settingsStructure: StructureResolver = (S) =>
  S.list()
    .title("Settings")
    .items([
      // Settings as a singleton
      S.listItem()
        .title("Settings")
        .icon(settings.icon)
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
            .title('Settings')
        ),
    ]);