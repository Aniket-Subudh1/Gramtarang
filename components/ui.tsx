import Link from "next/link";
import { Reveal } from "./reveal";
import { Logo } from "./media";
import type { Img } from "@/lib/assets";

/* ----------------------------- section ---------------------------- */

export function Section({
  children,
  tone = "chalk",
  id,
  className = "",
}: {
  children: React.ReactNode;
  tone?: "chalk" | "white" | "indigo" | "indigo-soft";
  id?: string;
  className?: string;
}) {
  const tones = {
    chalk: "bg-chalk text-ink",
    white: "bg-white text-ink",
    indigo: "bg-indigo-900 text-white",
    "indigo-soft": "bg-indigo-50 text-ink",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

/* ----------------------------- headings --------------------------- */

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${tone === "light" ? "text-turmeric" : "text-madder"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold md:text-[2.6rem] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "light" ? "text-indigo-200" : "text-slate"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-line bg-white">
      <div className="shell py-16 md:py-24">
        <p className="eyebrow text-madder">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[4rem]">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
            {lede}
          </p>
        )}
      </div>
      <div className="rule-tick h-2 w-full opacity-70" aria-hidden />
    </header>
  );
}

/* ----------------------------- buttons ---------------------------- */

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  external?: boolean;
}) {
  const styles = {
    solid:
      "bg-indigo-900 text-white hover:bg-madder border border-transparent",
    outline:
      "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-white",
    light: "bg-white text-indigo-900 hover:bg-turmeric border border-transparent",
  } as const;

  const cls = `inline-flex items-center gap-2 px-6 py-3.5 font-display text-[0.9rem] font-semibold tracking-tight transition-colors ${styles[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <span aria-hidden>↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

/* ----------------------------- stats ------------------------------ */

export function StatGrid({
  items,
  tone = "dark",
}: {
  items: { value: string; label: string; note?: string }[];
  tone?: "dark" | "light";
}) {
  return (
    <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 70}
          className={`p-6 md:p-8 ${tone === "light" ? "bg-indigo-800" : "bg-white"}`}
        >
          <dt
            className={`eyebrow ${tone === "light" ? "text-turmeric" : "text-madder"}`}
          >
            {s.label}
          </dt>
          <dd
            className={`mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl ${
              tone === "light" ? "text-white" : "text-indigo-900"
            }`}
          >
            {s.value}
          </dd>
          {s.note && (
            <dd
              className={`mt-2 text-[0.85rem] ${
                tone === "light" ? "text-indigo-200" : "text-slate"
              }`}
            >
              {s.note}
            </dd>
          )}
        </Reveal>
      ))}
    </dl>
  );
}

/* ----------------------------- marquee ---------------------------- */

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="drift-host relative overflow-hidden py-2">
      <div className="drift flex w-max gap-3">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap border border-line bg-white px-5 py-3 font-display text-[0.9rem] font-medium text-ink"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-chalk to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-chalk to-transparent" />
    </div>
  );
}

export function LogoMarquee({ items }: { items: Img[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="drift-host relative overflow-hidden py-2">
      <div className="drift flex w-max items-stretch gap-3">
        {doubled.map((img, i) => (
          <span
            key={`${img.src}-${i}`}
            className="flex min-w-[9.5rem] items-center justify-center border border-line bg-white px-7 py-5"
          >
            <Logo img={img} height={38} />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-chalk to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-chalk to-transparent" />
    </div>
  );
}

/* ----------------------------- misc ------------------------------- */

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-line bg-white p-7 transition-colors hover:border-line-strong md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-turmeric bg-turmeric-soft px-5 py-4 text-[0.92rem] text-ink">
      {children}
    </p>
  );
}
