"use client";

import { useEffect, useMemo, useState } from "react";
import { Photo } from "@/components/media";
import type { Img } from "@/lib/assets";

const SLIDE_INTERVAL_MS = 6_000;

export function SectorSlideshow({
  images,
  className = "",
  showDots = true,
  priority = false,
}: {
  images: Img[];
  className?: string;
  showDots?: boolean;
  priority?: boolean;
}) {
  const slides = useMemo(
    () => images.filter((image, index) => images.findIndex((item) => item.src === image.src) === index),
    [images],
  );
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setActive(0);
  }, [slides]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused || reducedMotion) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden bg-indigo-900 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((image, index) => (
        <Photo
          key={image.src}
          img={image}
          priority={priority && index === 0}
          position="top"
          sizes="100vw"
          className={`sector-slide absolute inset-0 h-full w-full ${
            index === active ? "sector-slide-active" : ""
          }`}
        />
      ))}

      {showDots && slides.length > 1 ? (
        <div
          className="absolute bottom-5 right-5 z-10 flex gap-2 md:bottom-7 md:right-8"
          aria-label="Photo slideshow"
        >
          {slides.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show photo ${index + 1} of ${slides.length}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                index === active ? "w-7 bg-white" : "w-1.5 bg-white/55 hover:bg-white"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
