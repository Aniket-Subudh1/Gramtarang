"use client";

import { useEffect, useRef, useState } from "react";
import { enrolmentSeries, enrolmentTotal } from "@/lib/content";

const fmt = new Intl.NumberFormat("en-IN");

/**
 * The measure.
 *
 * One bar per financial year, height proportional to enrolments that
 * year, drawn from the year-on-year workbook. It reads as a quantity
 * and a chronology at once — the way a rule on a workshop bench
 * measures both a part and a shift.
 *
 * The 2019-20 spike is real: the Agri RPL project certified 70,805
 * farming households in a single year.
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

  const peak = Math.max(...enrolmentSeries.map((y) => y.total));
  const shown = active === null ? null : enrolmentSeries[active];

  return (
    <div ref={ref} className="select-none">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="eyebrow text-mist">Enrolments by financial year</p>
        <p className="eyebrow text-mist">
          {fmt.format(enrolmentTotal)} life-to-date
        </p>
      </div>

      <div className="mt-4 flex h-28 items-end gap-[2px] border-b border-ink/25 sm:gap-1">
        {enrolmentSeries.map((year, i) => {
          const isActive = active === i;
          const isPeak = year.total === peak;
          return (
            <button
              key={year.fy}
              type="button"
              aria-label={`${year.fy}: ${fmt.format(year.total)} enrolments${year.note ? `. ${year.note}` : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              className={`${run ? "tick" : "opacity-0"} flex-1 origin-bottom transition-colors`}
              style={{
                // square root keeps the early years legible next to the
                // 2019-20 spike without misrepresenting the ratio
                height: `${Math.max(2, Math.sqrt(year.total / peak) * 100)}%`,
                animationDelay: run ? `${i * 40}ms` : undefined,
                background: isActive
                  ? "var(--color-madder)"
                  : isPeak
                    ? "var(--color-turmeric)"
                    : year.note
                      ? "var(--color-indigo-900)"
                      : "var(--color-indigo-500)",
              }}
            />
          );
        })}
      </div>

      <div className="mt-2 flex justify-between font-mono text-[0.65rem] tracking-wide text-mist">
        <span>2006-07</span>
        <span className="hidden sm:inline">2016-17</span>
        <span>2026-27</span>
      </div>

      <p className="mt-3 min-h-[2.75rem] font-body text-[0.9rem] leading-snug text-slate sm:min-h-[1.5rem]">
        {shown ? (
          <>
            <span className="font-display font-semibold text-ink">
              {shown.fy} — {fmt.format(shown.total)} enrolments
            </span>
            {shown.note && <span className="italic"> · {shown.note}</span>}
          </>
        ) : (
          <span className="italic opacity-60">
            Hover a year to see its intake. Bars are square-root scaled so the
            early years stay visible beside the 2019-20 peak.
          </span>
        )}
      </p>
    </div>
  );
}
