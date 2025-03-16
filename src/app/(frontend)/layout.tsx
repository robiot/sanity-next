import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";

import * as demo from "@/sanity/lib/demo";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { WarningOutlineIcon } from "@sanity/icons";
import { Navbar } from "@/components/common/Navbar";
import { loadSettings } from "@/sanity/data";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await loadSettings();
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }

  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <div className={"bg-white text-black"}>
      <div className="min-h-screen">
        {isDraftMode && (
          <div className="fixed inset-0 w-full h-16">
            <WarningOutlineIcon />
            Draft mode
          </div>
        )}
        <Navbar />
        <main>{children}</main>
      </div>

      {isDraftMode && <VisualEditing />}

      <SpeedInsights />
    </div>
  );
}
