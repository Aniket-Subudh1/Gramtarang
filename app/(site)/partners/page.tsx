import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHeader, Section, SectionHead } from "@/components/ui";
import { governmentPartners, industryPartners, partnerNote } from "@/lib/content";
import { partnerLogos } from "@/lib/assets";
import { Logo } from "@/components/media";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.partners;

function PartnerList({
  heading,
  note,
  items,
}: {
  heading: string;
  note: string;
  items: { name: string; slug: string }[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/25 pb-3">
        <h2 className="font-display text-2xl font-bold tracking-tight">{heading}</h2>
        <span className="eyebrow text-mist">{items.length}</span>
      </div>
      <p className="mt-4 max-w-2xl text-slate">{note}</p>
      <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((partner, i) => (
          <Reveal
            as="li"
            key={partner.slug}
            delay={i * 35}
            className="flex min-h-[9.5rem] flex-col items-center justify-center gap-4 bg-white px-7 py-8 text-center"
          >
            {partnerLogos[partner.slug] && (
              <Logo img={partnerLogos[partner.slug]} height={46} />
            )}
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              {partner.name}
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Governments fund it. Industry hires from it."
        lede={partnerNote}
      />

      <Section tone="white">
        <div className="space-y-20">
          <PartnerList
            heading="Government"
            note="Central ministries and state governments who commission programmes, set the qualifications framework, or fund training under national schemes."
            items={governmentPartners}
          />
          <PartnerList
            heading="Industry"
            note="Employers who co-design courses, host apprentices, or hire directly from our batches. Several of these relationships have run for more than a decade."
            items={industryPartners}
          />
        </div>
      </Section>

      <Section tone="indigo">
        <SectionHead
          tone="light"
          eyebrow="Become a partner"
          title="Joint programmes work better than job fairs."
          lede="The partnerships that last are the ones where the employer helped write the syllabus. If you have a role you struggle to fill, that is the place to start."
        />
        <div className="mt-8">
          <ButtonLink href="/contact" variant="light">
            Talk to us about a partnership
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
