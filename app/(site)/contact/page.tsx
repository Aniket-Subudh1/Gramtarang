import type { Metadata } from "next";
import { PageHeader, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { centreGroups, org } from "@/lib/content";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.contact;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need."
        lede="One form, four routes. Pick what your inquiry is about and it reaches the person who handles that, not a general inbox."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-7">
              <div>
                <dt className="eyebrow text-madder">Call</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${org.phoneHref}`}
                    className="font-display text-xl font-semibold tracking-tight underline-offset-4 hover:underline"
                  >
                    {org.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-madder">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${org.email}`}
                    className="font-display text-xl font-semibold tracking-tight underline-offset-4 hover:underline"
                  >
                    {org.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-madder">Registered office</dt>
                <dd className="mt-2 not-italic leading-relaxed text-slate">
                  {org.registeredOffice.line1}
                  <br />
                  {org.registeredOffice.line2}
                  <br />
                  {org.registeredOffice.line3}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-madder">Course fees</dt>
                <dd className="mt-2 text-slate">
                  Many programmes are free under government schemes.{" "}
                  <a
                    href={org.feePaymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 underline underline-offset-4"
                  >
                    Pay online
                  </a>{" "}
                  only if a centre has asked you to.
                </dd>
              </div>
            </dl>
          </div>

          <InquiryForm />
        </div>
      </Section>

      <Section tone="chalk">
        <SectionHead
          eyebrow="Or go direct"
          title="Contact a centre."
          lede="Every centre has someone who answers the phone. If you know which district you are in, calling them is faster than the form."
        />
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {centreGroups
            .flatMap((g) => g.centres)
            .filter((c) => c.phone?.length)
            .map((centre) => (
              <div key={centre.city} className="bg-white p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {centre.city}
                </h3>
                <p className="eyebrow mt-1 text-mist">{centre.state}</p>
                {centre.contactPerson && (
                  <p className="mt-3 text-[0.9rem] text-slate">{centre.contactPerson}</p>
                )}
                <ul className="mt-2 space-y-1">
                  {centre.phone?.map((number) => (
                    <li key={number}>
                      <a
                        href={`tel:${number.replace(/\s/g, "")}`}
                        className="font-mono text-[0.84rem] text-indigo-700 underline-offset-4 hover:underline"
                      >
                        {number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </Section>
    </>
  );
}
