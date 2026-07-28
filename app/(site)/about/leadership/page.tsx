import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section } from "@/components/ui";
import { leadership } from "@/lib/content";
import { leaderPortraits } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Executive leadership",
  description:
    "The co-founders and executive team behind Gram Tarang and Centurion University.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Executive leadership"
        lede="Two professors, a banker who moved to Bhubaneswar, and a team that mostly came up through the centres."
      />

      <Section tone="white">
        <ul className="divide-y divide-[--color-line]">
          {leadership.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 40} className="py-12 first:pt-0">
              <div className="grid gap-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">
                <div>
                  {leaderPortraits[person.name] && (
                    <Photo
                      img={leaderPortraits[person.name]}
                      ratio="1/1"
                      sizes="(max-width: 768px) 40vw, 200px"
                      className={`mb-5 w-40 md:w-48 ${person.memoriam ? "grayscale" : ""}`}
                    />
                  )}
                  <h2 className="text-2xl font-bold tracking-[-0.03em]">
                    {person.name}
                  </h2>
                  <p className="mt-2 font-display text-[0.9rem] font-semibold text-madder">
                    {person.role}
                  </p>
                  {person.memoriam && (
                    <p className="mt-3 inline-block border border-line bg-chalk px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate">
                      In memoriam
                    </p>
                  )}
                </div>
                <div>
                  <p className="border-l-2 border-line-strong pl-5 font-mono text-[0.8rem] leading-relaxed text-slate">
                    {person.credentials}
                  </p>
                  <div className="prose-gt mt-5">
                    {person.bio.map((para) => (
                      <p key={para.slice(0, 30)}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
