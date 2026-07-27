"use client";

import { useEffect, useRef, useState } from "react";
import { scaleBar } from "@/lib/content";

/**
 * The measure.
 *
 * Seventy marks, one for every thousand people Gram Tarang has trained.
 * Milestone years sit under the mark where they fall, so the bar reads
 * as both a quantity and a chronology — the way a rule on a workshop
 * bench measures a part and a shift at the same time.
 */
export function ScaleBar() {
  const [run, setRun] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const total = scaleBar.totalThousands;
  const marks = Array.from({ length: total }, (_, i) => i + 1);
  const milestoneAt = new Map(scaleBar.milestones.map((m) => [m.at, m]));

  return (
    <div ref={ref} className="select-none">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow text-mist">{scaleBar.unit}</p>
        <p className="eyebrow text-mist">70,000 people</p>
      </div>

      {/* the rule */}
      <div className="mt-3 flex h-16 items-end gap-[3px] border-b border-ink/25 pb-0 sm:gap-[5px]">
        {marks.map((m) => {
          const milestone = milestoneAt.get(m);
          const decade = m % 10 === 0;
          const height = milestone ? 100 : decade ? 62 : 34;
          const isActive = active === m;
          return (
            <button
              key={m}
              type="button"
              tabIndex={milestone ? 0 : -1}
              aria-hidden={!milestone}
              aria-label={
                milestone ? `${milestone.year}: ${milestone.note}` : undefined
              }
              onMouseEnter={() => milestone && setActive(m)}
              onFocus={() => milestone && setActive(m)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              className={`${run ? "tick" : "opacity-0"} flex-1 origin-bottom ${
                milestone ? "cursor-help" : "cursor-default"
              }`}
              style={{
                height: `${height}%`,
                animationDelay: run ? `${m * 14}ms` : undefined,
                background: milestone
                  ? isActive
                    ? "var(--color-madder)"
                    : "var(--color-indigo-900)"
                  : decade
                    ? "var(--color-indigo-500)"
                    : "var(--color-line-strong)",
              }}
            />
          );
        })}
      </div>

      {/* milestone labels */}
      <div className="relative mt-2 h-10">
        {scaleBar.milestones.map((m) => {
          const pct = ((m.at - 0.5) / total) * 100;
          const isLast = m.at === total;
          return (
            <div
              key={m.year}
              className="absolute top-0"
              style={{
                left: `${pct}%`,
                transform: isLast ? "translateX(-100%)" : "translateX(-4px)",
              }}
            >
              <span className="font-mono text-[0.6875rem] font-medium tracking-wide text-ink">
                {m.year}
              </span>
            </div>
          );
        })}
      </div>

      <p
        className="min-h-[1.5rem] font-body text-[0.9rem] italic text-slate transition-opacity duration-200"
        style={{ opacity: active ? 1 : 0.55 }}
      >
        {active
          ? milestoneAt.get(active)?.note
          : "Hover a tall mark to see what happened that year."}
      </p>
    </div>
  );
}
