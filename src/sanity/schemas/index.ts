import type { SchemaTypeDefinition } from 'sanity';

import { documents } from './documents';
import { sections } from './sections';
import { singletons } from './singletons';

export const schemaTypes = [
  ...documents,
  ...sections,
  ...singletons
] as SchemaTypeDefinition[];
