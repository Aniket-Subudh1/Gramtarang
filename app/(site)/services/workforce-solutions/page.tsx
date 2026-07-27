import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { industryPartners, workforceSolutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workforce solutions",
  description:
    "End-to-end recruitment, payrolling and statutory compliance for employers hiring skilled workers at scale across India.",
};

export default function WorkforcePage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Workforce solutions"
        lede={workforceSolutions.intro}
      />

      <Section tone="white">
        <ol className="grid gap-px border border-line bg-line md:grid-cols-3">
          {workforceSolutions.offerings.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 70} className="bg-white p-8">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-bold">{item.name}</h2>
              <p className="mt-3 text-[0.94rem] leading-relaxed text-slate">
                {item.body}
              </p>
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
          <ul className="mt-5 flex flex-wrap gap-2">
            {industryPartners.map((partner) => (
              <li
                key={partner.slug}
                className="border border-indigo-700 px-4 py-2 font-display text-[0.88rem] font-medium text-white"
              >
                {partner.name}
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
