export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ink = tone === "light" ? "#ffffff" : "#101625";
  const sub = tone === "light" ? "#b8c6e2" : "#8a93a6";

  return (
    <span className="flex items-center gap-3">
      {/* A rising measure — the same motif as the scale bar in the hero. */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect width="34" height="34" fill="#14204a" />
        <rect x="6" y="20" width="2.5" height="8" fill="#b8c6e2" />
        <rect x="11" y="15" width="2.5" height="13" fill="#b8c6e2" />
        <rect x="16" y="11" width="2.5" height="17" fill="#e5a83c" />
        <rect x="21" y="8" width="2.5" height="20" fill="#b23a2b" />
        <rect x="26" y="6" width="2.5" height="22" fill="#ffffff" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.08rem] font-extrabold tracking-[-0.03em]"
          style={{ color: ink }}
        >
          Gram Tarang
        </span>
        <span
          className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.18em]"
          style={{ color: sub }}
        >
          Employability Training
        </span>
      </span>
    </span>
  );
}
