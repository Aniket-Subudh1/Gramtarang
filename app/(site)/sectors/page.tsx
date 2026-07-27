import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section } from "@/components/ui";
import { sectors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sectors & trades",
  description:
    "Every trade Gram Tarang runs, across manufacturing, apparel, automotive, retail and hospitality, healthcare and agriculture.",
};

const tradeCount = sectors.reduce((n, s) => n + s.trades.length, 0);

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we teach"
        title="Six sectors, thirty-odd trades."
        lede={`${tradeCount} trades in all. Each one is aligned to a national occupational standard, taught on the equipment the job actually uses, and assessed by someone other than us.`}
      />

      <Section tone="white">
        <ul className="space-y-px">
          {sectors.map((sector, i) => (
            <Reveal as="li" key={sector.slug} delay={i * 50}>
              <Link
                href={`/sectors/${sector.slug}`}
                className="group grid gap-6 border border-line bg-white p-8 transition-colors hover:border-indigo-500 hover:bg-indigo-50 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-12"
              >
                <div>
                  <p className="eyebrow text-madder">{sector.code}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                    {sector.name}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                    {sector.blurb}
                  </p>
                  <p className="mt-5 font-display text-[0.88rem] font-semibold text-indigo-700">
                    <span className="underline-offset-4 group-hover:underline">
                      Open this sector
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-mist">Trades</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {sector.trades.map((trade) => (
                      <li
                        key={trade}
                        className="border border-line bg-chalk px-3 py-1.5 font-display text-[0.85rem] font-medium"
                      >
                        {trade}
                      </li>
                    ))}
                  </ul>
                  {sector.employers && (
                    <>
                      <p className="eyebrow mt-6 text-mist">Where people are placed</p>
                      <p className="mt-2 font-mono text-[0.8rem] text-slate">
                        {sector.employers.join(" · ")}
                      </p>
                    </>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
