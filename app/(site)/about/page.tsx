import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  ButtonLink,
  Card,
  PageHeader,
  Section,
  SectionHead,
  StatGrid,
} from "@/components/ui";
import { ecosystem, impactDetail, org, stats } from "@/lib/content";
import { ecosystemLogos, home } from "@/lib/assets";
import { Logo, Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "At a glance",
  description:
    "How Gram Tarang works: a ministry, a university and an operator, and what that has produced since 2006.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A skills ecosystem, not a training centre."
        lede={org.about}
      />

      <Photo
        img={home.classroom}
        priority
        sizes="100vw"
        className="h-[240px] w-full md:h-[420px]"
      />

      <Section tone="chalk" className="!py-16">
        <StatGrid items={stats} />
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="The model"
          title="Three institutions, three jobs."
          lede="Policy and funding come from one place, the qualification from another, and delivery from a third. Keeping them separate is what lets a programme in Koraput carry the same certificate as one in Pune."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ecosystem.map((part, i) => (
            <Reveal key={part.name} delay={i * 70}>
              <Card className="h-full">
                {ecosystemLogos[part.name] && (
                  <span className="mb-6 flex h-14 items-center">
                    <Logo img={ecosystemLogos[part.name]} height={44} />
                  </span>
                )}
                <p className="eyebrow text-madder">{part.role}</p>
                <h3 className="mt-4 text-xl font-bold">{part.name}</h3>
                <ul className="mt-5 space-y-3">
                  {part.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.92rem] leading-relaxed text-slate"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="indigo-soft">
        <SectionHead eyebrow="The record" title="What that has produced." />
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {impactDetail.map((block, i) => (
            <Reveal key={block.heading} delay={i * 70} className="bg-white p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {block.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="text-[0.92rem] leading-relaxed text-slate">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/about/leadership">Meet the leadership</ButtonLink>
          <ButtonLink href="/about/centres" variant="outline">
            Where our centres are
          </ButtonLink>
          <ButtonLink href="/recognition/awards" variant="outline">
            Awards and recognition
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
