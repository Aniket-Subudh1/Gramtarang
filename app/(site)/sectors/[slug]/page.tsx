import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { sectors } from "@/lib/content";
import { sectorGalleries, sectorImages } from "@/lib/assets";
import { SectorSlideshow } from "@/components/sector-slideshow";
import { JsonLd } from "@/components/json-ld";
import { sectorJsonLd } from "@/lib/jsonld";
import { sectorMeta } from "@/lib/seo";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};
  return sectorMeta(sector);
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const others = sectors.filter((s) => s.slug !== slug);
  const leadImage = sectorImages[sector.slug];
  const gallery = sectorGalleries[sector.slug] ?? [];
  const heroImages = gallery.length > 1 ? gallery : leadImage ? [leadImage] : gallery;

  return (
    <>
      <JsonLd data={sectorJsonLd(slug)} />
      <section className="relative isolate h-120 overflow-hidden bg-indigo-900 text-white md:h-152">
        <SectorSlideshow
          images={heroImages}
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-indigo-900 via-indigo-900/25 to-indigo-900/10"
        />
        <div className="shell relative flex h-full flex-col justify-end pb-10 md:pb-14">
          <p className="eyebrow text-turmeric">Sector · {sector.code}</p>
          <span aria-hidden className="mt-4 block h-px w-10 bg-turmeric" />
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[4rem]">
            {sector.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100 md:text-xl">
            {sector.blurb}
          </p>
        </div>
      </section>

      {(sector.enrolments || sector.placement) && (
        <div className="border-b border-line bg-indigo-900">
          <dl className="shell grid grid-cols-2 gap-px py-0 sm:grid-cols-3">
            {sector.enrolments && (
              <div className="py-7">
                <dt className="eyebrow text-turmeric">Enrolments to date</dt>
                <dd className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                  {sector.enrolments.toLocaleString("en-IN")}
                </dd>
              </div>
            )}
            {sector.placement && (
              <div className="py-7">
                <dt className="eyebrow text-turmeric">Placement offers</dt>
                <dd className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                  {sector.placement}
                </dd>
              </div>
            )}
            <div className="py-7">
              <dt className="eyebrow text-turmeric">Trades</dt>
              <dd className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                {sector.trades.length}
              </dd>
            </div>
          </dl>
        </div>
      )}

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="prose-gt max-w-none">
            <h2 className="text-2xl font-bold">How the programme runs</h2>
            {sector.detail.map((para) => (
              <p key={para.slice(0, 30)} className="text-lg leading-relaxed">
                {para}
              </p>
            ))}
            {sector.employers && (
              <>
                <h3 className="mt-10 text-xl font-bold">Where people are placed</h3>
                <ul className="mt-4 flex flex-wrap gap-2 not-prose">
                  {sector.employers.map((employer) => (
                    <li
                      key={employer}
                      className="border border-line bg-chalk px-4 py-2 font-display text-[0.88rem] font-medium"
                    >
                      {employer}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="border border-line bg-chalk p-8">
            <h2 className="eyebrow text-madder">Trades in this sector</h2>
            <ul className="mt-5 divide-y divide-[--color-line]">
              {sector.trades.map((trade) => (
                <li
                  key={trade}
                  className="py-3 font-display text-[1rem] font-medium tracking-tight"
                >
                  {trade}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="#apply">Ask about these courses</ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="chalk" id="apply">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Apply"
              title={`Interested in ${sector.name.toLowerCase()}?`}
              lede="Tell us your age, your qualification and the state you're in. We'll tell you which centre runs the course, when the next batch starts, and whether a scheme covers the fee."
            />
          </div>
          <InquiryForm defaultType="training" />
        </div>
      </Section>

      <Section tone="white" className="py-14!">
        <p className="eyebrow text-mist">Other sectors</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/sectors/${other.slug}`}
                className="inline-block border border-line px-4 py-2.5 font-display text-[0.9rem] font-medium transition-colors hover:border-ink"
              >
                {other.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
