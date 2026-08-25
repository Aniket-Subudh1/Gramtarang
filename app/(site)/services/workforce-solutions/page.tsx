import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { industryPartners, workforceSolutions } from "@/lib/content";
import { partnerLogos, workforceImages } from "@/lib/assets";
import { Logo, Photo } from "@/components/media";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.workforce;

export default function WorkforcePage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Workforce solutions"
        lede={workforceSolutions.intro}
      />

      <Photo
        img={workforceImages.staffing}
        priority
        sizes="100vw"
        className="h-[240px] w-full md:h-[400px]"
      />

      <Section tone="white">
        <ol className="grid gap-px border border-line bg-line md:grid-cols-3">
          {workforceSolutions.offerings.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 70} className="bg-white">
              <Photo
                img={
                  [
                    workforceImages.recruitment,
                    workforceImages.staffing,
                    workforceImages.payroll,
                  ][i]
                }
                ratio="16/9"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full"
              />
              <span className="block p-8">
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-bold">{item.name}</h2>
                <span className="mt-3 block text-[0.94rem] leading-relaxed text-slate">
                  {item.body}
                </span>
              </span>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="indigo">
        <SectionHead
          tone="light"
          eyebrow="Why it is different"
          title="We are not a labour contractor with a database."
          lede="The people we place are the people we trained. We know what they were assessed on, what machine they learned it on, and who taught them — which is why our placements hold."
        />
        <div className="mt-12">
          <p className="eyebrow text-turmeric">Employers we work with</p>
          <ul className="mt-5 grid grid-cols-2 gap-px border border-indigo-700 bg-indigo-700 sm:grid-cols-3 lg:grid-cols-5">
            {industryPartners.map((partner) => (
              <li
                key={partner.slug}
                className="flex min-h-[4.5rem] items-center justify-center bg-white px-6 py-4"
              >
                {partnerLogos[partner.slug] ? (
                  <Logo img={partnerLogos[partner.slug]} height={34} />
                ) : (
                  <span className="font-display text-[0.88rem] font-medium text-ink">
                    {partner.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Hiring"
            title="Tell us the role and the headcount."
            lede="Give us the trade, the location and roughly when you need people. We'll come back with what we can source, from which centres, and on what commercial basis."
          />
          <InquiryForm defaultType="hiring" />
        </div>
      </Section>
    </>
  );
}
