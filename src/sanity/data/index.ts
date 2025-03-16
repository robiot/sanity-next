import { sanityFetch } from "../lib/fetch";


import { CATEGORIES_QUERY, PAGE_QUERY, SETTINGS_QUERY } from "./queries";
import { Category, Page, Settings } from "@/types/sanity.types";

export async function loadPage(slug: string) {
  if (slug.indexOf(".") > -1) {
    return null;
  }

  return sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  }) as Promise<Page | null>;
}

export async function loadCategories() {
  return sanityFetch({
    query: CATEGORIES_QUERY,
  }) as Promise<Category | null>;
}

export async function loadSettings() {
  return sanityFetch({
    query: SETTINGS_QUERY,
    stega: false,
  }) as Promise<Settings | null>;
}