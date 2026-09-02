"use client";

import Link from "next/link";
import { useState } from "react";
import { SectorSlideshow } from "@/components/sector-slideshow";
import { sectorGalleries, sectorImages, type Img } from "@/lib/assets";
import type { Sector } from "@/lib/content";

export function SectorPreview({ sectors }: { sectors: Sector[] }) {
  const [active, setActive] = useState(0);
  const current = sectors[active] ?? sectors[0];
  const image: Img | undefined = sectorImages[current.slug];
  const gallery = sectorGalleries[current.slug] ?? [];
  const images: Img[] = gallery.length > 1 ? gallery : image ? [image] : gallery;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
      <div className="relative min-h-72 overflow-hidden bg-indigo-900 lg:min-h-136">
        {images.length ? (
          <SectorSlideshow
            key={current.slug}
            images={images}
            showDots={false}
            className="sector-fade absolute inset-0 h-full w-full"
          />
        ) : (
          <span
            key={current.slug}
            aria-hidden
            className="sector-fade absolute inset-0 flex items-center justify-center font-display text-7xl font-extrabold tracking-[-0.06em] text-indigo-500 md:text-8xl"
          >
            {current.code}
          </span>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-indigo-900/80 via-indigo-900/10 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="eyebrow text-turmeric">{current.code}</p>
          <p className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            {current.name}
          </p>
          <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed text-indigo-100">
            {current.blurb}
          </p>
        </div>
      </div>

      <ul className="divide-y divide-[--color-line] border-y border-line self-center">
        {sectors.map((sector, i) => {
          const isActive = i === active;
          return (
            <li key={sector.slug}>
              <Link
                href={`/sectors/${sector.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex items-baseline justify-between gap-4 py-3.5 transition-colors md:py-4 ${
                  isActive ? "text-indigo-900" : "text-ink hover:text-indigo-700"
                }`}
              >
                <span className="flex min-w-0 items-baseline gap-4 md:gap-5">
                  <span
                    className={`eyebrow shrink-0 ${
                      isActive ? "text-madder" : "text-mist"
                    }`}
                  >
                    {sector.code}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold tracking-tight md:text-xl">
                      {sector.name}
                    </span>
                    <span
                      className={`mt-1 block text-[0.82rem] leading-snug ${
                        isActive ? "text-slate" : "text-mist"
                      }`}
                    >
                      {sector.trades.length} trades
                      {sector.enrolments
                        ? ` · ${sector.enrolments.toLocaleString("en-IN")} trained`
                        : ""}
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 transition-transform duration-300 ${
                    isActive
                      ? "translate-x-0 text-madder"
                      : "-translate-x-1 text-line-strong group-hover:translate-x-0 group-hover:text-madder"
                  }`}
                >
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
