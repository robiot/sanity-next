import { Page } from "@/components/pages/Page";
import { loadPage } from "@/sanity/data";

export default async function HomeRoute() {
  const data = await loadPage("/");

  return <Page data={data} />;
}
