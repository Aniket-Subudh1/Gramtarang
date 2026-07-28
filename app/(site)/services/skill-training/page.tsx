import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Note, PageHeader, Section, SectionHead } from "@/components/ui";
import { careerPathing, methodPhases, sectors, sixDimensions } from "@/lib/content";
import { methodImages, sectorImages, sixDimensionsDiagram } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Skill training",
  description:
    "Gram Tarang's training philosophy and learning methodology: three phases, six steps, six dimensions of skill.",
};

export default function SkillTrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Skill training"
        lede="A training philosophy that puts practice before certification and production before graduation. Nobody leaves with a certificate they cannot back up on a machine."
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Methodology"
          title="Three phases of learning."
        />
        <ol className="mt-12 space-y-14">
          {methodPhases.map((phase) => (
            <li key={phase.phase}>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-ink/25 pb-3">
                <span className="eyebrow text-madder">{phase.phase}</span>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {phase.name}
                </h2>
              </div>
              <ul className="mt-7 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {phase.steps.map((step, i) => (
                  <Reveal as="li" key={step.n} delay={i * 60}>
                    {methodImages[step.title] && (
                      <Photo
                        img={methodImages[step.title]}
                        ratio="3/2"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="mb-5 w-full"
                      />
                    )}
                    <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                      Step {String(step.n).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.94rem] leading-relaxed text-slate">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="chalk">
        <SectionHead
          eyebrow="What gets assessed"
          title="Six dimensions of skill."
          lede="Employers do not lose people because they cannot run the machine. They lose them because of everything else. So everything else is taught and measured too."
        />
        <Photo
          img={sixDimensionsDiagram}
          sizes="(max-width: 1280px) 100vw, 1100px"
          className="mx-auto mt-12 w-full max-w-4xl border border-line bg-white"
        />
        <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {sixDimensions.map((dim) => (
            <li key={dim.n} className="bg-white p-8">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                {String(dim.n).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                {dim.name}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{dim.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Pathway" title={careerPathing.heading} />
            {careerPathing.body.map((para) => (
              <p key={para.slice(0, 20)} className="mt-6 text-lg leading-relaxed text-slate">
                {para}
              </p>
            ))}
            <h3 className="mt-10 font-display text-lg font-semibold tracking-tight">
              Work-integrated learning combines
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careerPathing.workIntegrated.map((item) => (
                <li key={item} className="flex gap-3 text-[0.94rem] text-slate">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Assessment and certification conducted by
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careerPathing.assessment.map((item) => (
                <li key={item} className="flex gap-3 text-[0.94rem] text-slate">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Note>
                Fees for many programmes are covered by government schemes such
                as PMKVY, DDU-GKY, Aajeevika, OSEMS and OSFDC. Ask us which one
                applies to you before you pay anything.
              </Note>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="indigo-soft">
        <SectionHead eyebrow="Choose a trade" title="Where would you like to start?" />
        <ul className="mt-10 flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <li key={sector.slug} className="w-[15rem] max-w-full">
              <Link
                href={`/sectors/${sector.slug}`}
                className="group block border border-line-strong bg-white transition-colors hover:border-ink"
              >
                {sectorImages[sector.slug] && (
                  <Photo
                    img={sectorImages[sector.slug]}
                    ratio="16/10"
                    sizes="240px"
                    className="w-full"
                  />
                )}
                <span className="block px-5 py-3 font-display text-[0.92rem] font-medium">
                  {sector.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact">Ask about a course</ButtonLink>
        </div>
      </Section>
    </>
  );
}
