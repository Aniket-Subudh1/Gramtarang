import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHeader, Section, SectionHead } from "@/components/ui";
import { awards, recognitionNotes } from "@/lib/content";
import { awardImages } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "NAAC 'A' grade, NSDC best performer, FICCI Skills Champion of India, and other recognition.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Awards"
        lede="Recognition matters here mostly because it is what convinces a district administration to send us their young people."
      />

      <Section tone="white">
        <ol className="divide-y divide-[--color-line] border-y border-line">
          {awards.map((award, i) => (
            <Reveal as="li" key={award.title} delay={i * 50}>
              <article className="grid gap-6 py-8 md:grid-cols-[8rem_1fr_16rem] md:gap-10">
                <p className="font-mono text-[0.85rem] font-medium tracking-wide text-madder">
                  {award.year}
                </p>
                <div>
                  <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                    {award.title}
                  </h2>
                  <p className="mt-2.5 max-w-3xl text-[0.96rem] leading-relaxed text-slate">
                    {award.body}
                  </p>
                </div>
                {awardImages[i] && (
                  <Photo
                    img={awardImages[i]}
                    ratio="3/2"
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="w-full border border-line"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="chalk">
        <SectionHead eyebrow="Also noted" title="Elsewhere on the record." />
        <ul className="mt-10 space-y-5">
          {recognitionNotes.map((note) => (
            <li
              key={note.slice(0, 24)}
              className="border-l-2 border-line-strong pl-6 text-lg leading-relaxed text-slate"
            >
              {note}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/recognition/success-stories" variant="outline">
            Read the success stories
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
