import type { CreateDataAttribute } from 'next-sanity';

import { Page, Settings } from './sanity.types';

export interface SectionData {
  _type: string;
  _key: string;
  [key: string]: unknown;
}
export interface Section<T> {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  dataAttribute?: CreateDataAttribute<{
    baseUrl: string;
    id: string;
    type: string;
    path: string[];
  }>;
  data: T;
  page: Page;
  locale?: string;
  siteSettings: Settings | null;
}
