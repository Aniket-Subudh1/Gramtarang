import NextImage from "next/image";
import { brand } from "@/lib/assets";

/**
 * The organisation's own logo. On a dark ground it sits on a light
 * tile, because the mark is coloured artwork on a transparent ground
 * and inverting it would misrepresent the brand.
 */
export function Wordmark({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const height = compact ? 34 : 40;

  return (
    <span className="flex items-center gap-3">
      <span
        className={
          tone === "light"
            ? "flex items-center justify-center bg-white px-2 py-1.5"
            : "flex items-center"
        }
      >
        <NextImage
          src={brand.lockup.src}
          alt={brand.lockup.alt}
          width={brand.lockup.w}
          height={brand.lockup.h}
          priority
          style={{ height, width: "auto" }}
        />
      </span>

      <span className="hidden flex-col leading-none sm:flex">
        <span
          className={`font-display font-extrabold tracking-[-0.03em] ${
            compact ? "text-[0.98rem]" : "text-[1.05rem]"
          }`}
          style={{ color: tone === "light" ? "#ffffff" : "#101625" }}
        >
          Gram Tarang
        </span>
        <span
          className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.16em]"
          style={{ color: tone === "light" ? "#b8c6e2" : "#8a93a6" }}
        >
          Employability Training
        </span>
      </span>
    </span>
  );
}
