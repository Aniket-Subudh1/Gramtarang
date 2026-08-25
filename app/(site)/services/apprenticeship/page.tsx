import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Note, PageHeader, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { apprenticeship, org } from "@/lib/content";
import { facilityImages } from "@/lib/assets";
import { Photo } from "@/components/media";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.apprenticeship;

export default function ApprenticeshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Work-integrated training & apprenticeship"
        lede={apprenticeship.intro}
      />

      <Photo
        img={facilityImages.ashokLeyland}
        priority
        sizes="100vw"
        className="h-[240px] w-full md:h-[400px]"
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="How it works" title="Earn from month one." />
            <ol className="mt-8 space-y-6">
              {apprenticeship.howItWorks.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 60} className="flex gap-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-ink/20 font-mono text-[0.75rem] font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.98rem] leading-relaxed text-slate">{step}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <Note>
              An apprenticeship suits people who cannot afford to stop earning
              for a year. The trade-off is that it takes longer, and it needs an
              employer willing to release you for contact classes.
            </Note>
            <div className="border border-line bg-chalk p-8">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Our standing with the regulator
              </h2>
              <ul className="mt-4 space-y-3 text-[0.93rem] text-slate">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  Third-party aggregator for the DGT apprenticeship programme
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  Flexi MoU with MSDE for the Work Integrated ITI
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  Granted affiliation for NCVT ITIs and implementing PMKVY
                </li>
              </ul>
              <div className="mt-7">
                <ButtonLink href={org.wistaUrl} variant="outline" external>
                  WISTA programme site
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Apply"
            title="Want an apprenticeship?"
            lede="Tell us where you are and what you have studied. If you are an employer who wants apprentices, say so — we handle the aggregation and the paperwork."
          />
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}
