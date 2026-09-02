import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Note, PageHeader, Section, SectionHead } from "@/components/ui";
import { careerPathing, methodPhases } from "@/lib/content";
import { campusGallery, pedagogyProduction } from "@/lib/assets";
import { Photo, PhotoStrip } from "@/components/media";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.trainers;

const capability = [
  { figure: "200", label: "Trainers on staff" },
  { figure: "60", label: "Field mobilisation staff" },
  { figure: "350+", label: "Employees in total" },
];

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Trainers & pedagogy"
        lede="Curriculum, pedagogy and technical upgradation run continuously through Centurion University's School of Vocational Training. A trainer at a satellite centre teaches the same syllabus, to the same standard, as one at a mother centre."
      />

      <PhotoStrip images={campusGallery} />

      <Section tone="chalk" className="!py-14">
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {capability.map((item) => (
            <div key={item.label} className="bg-white p-8">
              <dd className="font-display text-4xl font-extrabold tracking-[-0.04em] text-indigo-900">
                {item.figure}
              </dd>
              <dt className="eyebrow mt-3 text-madder">{item.label}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Method"
          title="Teach me, show me, let me practise."
          lede="Three phases and six steps. The order is fixed because skipping a step is what produces a certificate nobody trusts."
        />
        <ol className="mt-12 space-y-12">
          {methodPhases.map((phase) => (
            <li key={phase.phase}>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-line-strong pb-3">
                <span className="eyebrow text-madder">{phase.phase}</span>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {phase.name}
                </h3>
              </div>
              <ul className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {phase.steps.map((step, i) => (
                  <Reveal as="li" key={step.n} delay={i * 60}>
                    <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                      Step {String(step.n).padStart(2, "0")}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">
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
          eyebrow="Pedagogy"
          title="Theory, practice and production."
          lede="15% theory, 15% life skills and IT literacy, 70% practical in the workshop. Every programme ends with a live project — welding, fabrication, machining, a garment, or a cup of coffee. This is what trainees actually made."
        />
        <ul className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {pedagogyProduction.map((img) => (
            <li key={img.src}>
              <Photo img={img} ratio="3/2" sizes="(max-width: 768px) 50vw, 25vw" className="w-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="indigo-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              eyebrow="After the classroom"
              title={careerPathing.heading}
            />
            {careerPathing.body.map((para) => (
              <p key={para.slice(0, 20)} className="mt-6 text-slate">
                {para}
              </p>
            ))}
            <h3 className="mt-10 font-display text-lg font-semibold tracking-tight">
              Work-integrated learning combines
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careerPathing.workIntegrated.map((item) => (
                <li key={item} className="flex gap-3 text-[0.93rem] text-slate">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Assessment and certification
            </h3>
            <ul className="mt-4 space-y-2.5">
              {careerPathing.assessment.map((item) => (
                <li key={item} className="flex gap-3 text-[0.93rem] text-slate">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Note>
                Final certification is always by an independent third party — a
                sector skill council, NCVT or the university — never by the
                trainer who taught the batch.
              </Note>
            </div>
            <div className="mt-8">
              <ButtonLink href="/careers">Train with us as a trainer</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
