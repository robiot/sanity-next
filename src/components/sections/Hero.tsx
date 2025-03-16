import type { Section } from "@/types/Section";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { type Hero } from "@/types/sanity.types";
import { PinIcon } from "@sanity/icons";

function Hero({ data }: Section<Hero>) {
  return (
    <div
      className={cn(
        "min-h-[90vh] flex items-center relative overflow-hidden",
        "bg-gradient-to-r from-gray-50 to-gray-100"
      )}
    >
      <div className="container grid md:grid-cols-2 gap-10 py-16">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium bg-black text-white rounded-full px-3 py-1 mb-6 w-fit">
            <PinIcon className="inline-block mr-2" />
            Åland
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            {data.heading}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            {data.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="md:w-auto">
              <Link href={data.link ?? "#"}>Visa produkter</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gray-900/5 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
              alt="Premium Headphones"
              className="relative z-10 w-full h-auto object-contain animate-float"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
