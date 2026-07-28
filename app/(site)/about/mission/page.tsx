import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section, SectionHead } from "@/components/ui";
import { sixDimensions } from "@/lib/content";
import { home, sixDimensionsDiagram } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Mission, vision & values",
  description:
    "To be a globally accredited human resource centre of excellence catalysing sustainable livelihoods in less developed markets.",
};

const values = [
  {
    name: "Dignity of labour",
    body: "A machinist, a sewing operator and a lab technician are professionals. Everything from how a workshop is kept to how a trainer speaks follows from that.",
  },
  {
    name: "Nobody is written off",
    body: "School dropouts, deaf trainees, a young man with one hand who wanted to make coffee. If someone will do the work, our job is to find the route.",
  },
  {
    name: "Measure honestly",
    body: "Daily assessment on accuracy, process and time. Third-party certification. Placement tracked after the fact, not promised in advance.",
  },
  {
    name: "Stay after placement",
    body: "The first six months in a new city decide whether a placement holds. Post-placement support is part of the programme, not a favour.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Mission, vision & values"
        lede="Written down because a hundred centres in five states cannot be run on instinct alone."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-madder">Our vision</p>
            <p className="mt-6 font-display text-2xl font-bold leading-[1.15] tracking-[-0.025em] md:text-[2.4rem]">
              To be a globally accredited human resource centre of excellence,
              catalysing sustainable livelihoods in the less developed markets
              across the globe.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-madder">Our mission</p>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              To give young people in underdeveloped regions high quality
              vocational education and skill training, relevant and recognised
              certification, and — through it — meaningful employment and a
              career in the organised sector.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              We work where the institutional capacity does not exist yet:
              districts with high dropout rates, large unskilled workforces and
              few employers of scale.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="chalk">
        <SectionHead eyebrow="Our values" title="Four things we do not trade away." />
        <Photo
          img={home.training}
          sizes="100vw"
          className="mt-10 h-[220px] w-full md:h-[340px]"
        />
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.name} delay={i * 70} className="bg-white p-8">
              <h3 className="text-xl font-bold">{value.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                {value.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="What we develop"
          title="Six dimensions of skill."
          lede="A trade certificate on its own does not hold a job. These six are assessed together, because employers hire and keep people on all of them."
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
    </>
  );
}
