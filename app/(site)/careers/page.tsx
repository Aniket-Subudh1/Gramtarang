import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { careers, centreGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Trainers, mobilisers, placement officers and centre managers across Odisha, Andhra Pradesh, Assam and Jharkhand.",
};

const states = [
  ...new Set(centreGroups.flatMap((g) => g.centres.map((c) => c.state))),
];

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Work at Gram Tarang" lede={careers.intro} />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Why" title="What the job is actually like." />
            <ul className="mt-8 divide-y divide-[--color-line]">
              {careers.whyJoin.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 60} className="py-6 first:pt-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Roles we hire for
            </h2>
            <ul className="mt-4 space-y-2.5">
              {careers.roleFamilies.map((role) => (
                <li key={role} className="flex gap-3 text-[0.95rem] text-slate">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {role}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-lg font-semibold tracking-tight">
              Where
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {states.map((state) => (
                <li
                  key={state}
                  className="border border-line bg-chalk px-4 py-2 font-display text-[0.87rem] font-medium"
                >
                  {state}
                </li>
              ))}
            </ul>

            <p className="mt-10 border-l-2 border-turmeric bg-turmeric-soft px-5 py-4 text-[0.93rem]">
              {careers.howToApply}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Apply"
            title="Send us your details."
            lede="Name the role family and the state. If you have a CV, mention it and we will write back with an address to send it to."
          />
          <InquiryForm defaultType="careers" />
        </div>
      </Section>
    </>
  );
}
