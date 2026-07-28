import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHeader, Section, SectionHead } from "@/components/ui";
import { centreGroups } from "@/lib/content";
import { centreImages } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Our centres",
  description:
    "Gram Tarang training centres across Odisha, Andhra Pradesh, Telangana, Jharkhand and Assam.",
};

const total = centreGroups.reduce((n, g) => n + g.centres.length, 0);

export default function CentresPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our centres"
        lede={`${total} centres across five states, run on a hub-and-spoke model: a small number of mother centres on Centurion University campuses, with satellite centres in the districts they serve.`}
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Coverage"
          title="Close enough to walk to."
          lede="Mobilisation happens through gram panchayats, self-help groups and NGOs, so a centre has to be in reach of the villages it recruits from. Future coverage extends into Jharkhand, Chhattisgarh, Bihar and Meghalaya."
        />

        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-5">
          {centreImages.map((img, i) => (
            <li key={img.src} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <Photo
                img={img}
                ratio="7/5"
                sizes="(max-width: 768px) 50vw, 20vw"
                className="w-full"
              />
            </li>
          ))}
        </ul>

        <div className="mt-16 space-y-16">
          {centreGroups.map((group) => (
            <div key={group.region}>
              <div className="flex items-baseline justify-between gap-4 border-b border-ink/25 pb-3">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {group.region}
                </h2>
                <span className="eyebrow text-mist">
                  {group.centres.length} centres
                </span>
              </div>

              <ul className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
                {group.centres.map((centre, i) => (
                  <Reveal
                    as="li"
                    key={centre.city}
                    delay={i * 50}
                    className="bg-white p-7"
                  >
                    <h3 className="text-xl font-bold">{centre.city}</h3>
                    <p className="eyebrow mt-1.5 text-madder">
                      {centre.district ? `${centre.district} · ` : ""}
                      {centre.state}
                    </p>
                    <address className="mt-4 not-italic text-[0.9rem] leading-relaxed text-slate">
                      {centre.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <dl className="mt-5 space-y-2 border-t border-line pt-4 text-[0.87rem]">
                      {centre.contactPerson && (
                        <div className="flex gap-2">
                          <dt className="text-mist">Contact</dt>
                          <dd className="font-display font-medium">
                            {centre.contactPerson}
                          </dd>
                        </div>
                      )}
                      {centre.phone?.map((number) => (
                        <div key={number} className="flex gap-2">
                          <dt className="sr-only">Phone</dt>
                          <dd>
                            <a
                              href={`tel:${number.replace(/\s/g, "")}`}
                              className="font-mono text-[0.82rem] text-indigo-700 underline-offset-4 hover:underline"
                            >
                              {number}
                            </a>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ButtonLink href="/contact">Ask about a centre near you</ButtonLink>
        </div>
      </Section>
    </>
  );
}
