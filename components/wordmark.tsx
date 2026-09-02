import NextImage from "next/image";
import { brand } from "@/lib/assets";
import { org } from "@/lib/content";

/**
 * GTET lockup plus the legal company name. No backing tile — the
 * artwork already has a dark badge and sits on both white and indigo.
 */
export function Wordmark({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const height = compact ? 58 : 72;

  return (
    <span className="flex items-center gap-3 sm:gap-3.5">
      <NextImage
        src={brand.lockup.src}
        alt=""
        width={brand.lockup.w}
        height={brand.lockup.h}
        priority
        style={{ height, width: "auto" }}
      />
      <span
        className={`flex max-w-[11.5rem] flex-col font-display font-semibold leading-[1.15] tracking-[-0.03em] sm:max-w-[15.5rem] ${
          compact ? "text-[0.78rem] sm:text-[0.84rem]" : "text-[0.92rem]"
        }`}
        style={{ color: tone === "light" ? "#ffffff" : "#101625" }}
      >
        {org.legalName}
      </span>
    </span>
  );
}
