import NextImage from "next/image";
import type { Img } from "@/lib/assets";

/**
 * Thin wrapper over next/image.
 *
 * Photographs are converted to WebP ahead of time, so the optimiser
 * stays disabled (see next.config.ts). We still use next/image for lazy
 * loading and for the reserved aspect box that keeps the layout from
 * shifting as photographs arrive.
 */
export function Photo({
  img,
  className = "",
  sizes,
  priority = false,
  ratio,
}: {
  img: Img;
  className?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <span
      className={`block overflow-hidden bg-chalk-deep ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <NextImage
        src={img.src}
        alt={img.alt}
        width={img.w}
        height={img.h}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/** A tight row of photographs. Used as a gallery strip across sector and campus pages. */
export function PhotoStrip({
  images,
  ratio = "3/2",
  className = "",
}: {
  images: Img[];
  ratio?: string;
  className?: string;
}) {
  if (images.length === 0) return null;
  const cols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-2"
        : images.length === 3
          ? "grid-cols-2 md:grid-cols-3"
          : "grid-cols-2 md:grid-cols-4";
  return (
    <ul className={`grid gap-px border border-line bg-line ${cols} ${className}`}>
      {images.map((img) => (
        <li key={img.src}>
          <Photo
            img={img}
            ratio={ratio}
            sizes={
              images.length <= 2
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 50vw, 25vw"
            }
            className="w-full"
          />
        </li>
      ))}
    </ul>
  );
}

/** Logos keep their own proportions and sit on a light tile. */
export function Logo({ img, height = 40 }: { img: Img; height?: number }) {
  return (
    <NextImage
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      loading="lazy"
      style={{ height, width: "auto" }}
      className="max-w-full object-contain"
    />
  );
}
