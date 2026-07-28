import NextImage from "next/image";
import type { Img } from "@/lib/assets";

/**
 * Thin wrapper over next/image.
 *
 * Assets are already generated at 2x display size and converted to
 * WebP, so the optimiser stays disabled (see next.config.ts). We still
 * use next/image for lazy loading and for the reserved aspect box that
 * keeps the layout from shifting as photographs arrive.
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
