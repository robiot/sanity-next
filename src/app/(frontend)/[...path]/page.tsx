import { Page } from "@/components/pages/Page";
import { loadPage } from "@/sanity/data";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function PageRoute({
  params,
}: {
  params: { path: string[] };
}) {
  const slug = params.path.join("/");
  const data = await loadPage(slug);
  const dm = await draftMode();

  if (!data && !dm.isEnabled) {
    notFound();
  }

  return <Page data={data} />;
}
