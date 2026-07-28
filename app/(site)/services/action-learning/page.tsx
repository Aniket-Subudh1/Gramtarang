import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHeader, Section, SectionHead } from "@/components/ui";
import { actionLearning, org } from "@/lib/content";
import { docs, facilityImages } from "@/lib/assets";
import { Photo } from "@/components/media";

export const metadata: Metadata = {
  title: "Production & action learning",
  description:
    "Trainees learn by producing goods with real buyers, tolerances and deadlines — including aero engine components at an HAL-empanelled tool room.",
};

export default function ActionLearningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Production & action learning"
        lede={actionLearning.intro}
      />

      <Photo
        img={facilityImages.trainingFloor}
        priority
        sizes="100vw"
        className="h-[240px] w-full md:h-[400px]"
      />

      <Section tone="white">
        <SectionHead
          eyebrow="Where it happens"
          title="Four live production environments."
          lede="Each one is a working unit first and a classroom second. That order is deliberate: a part that fails inspection teaches more than a demonstration that goes well."
        />
        <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {actionLearning.units.map((unit, i) => (
            <Reveal as="li" key={unit.name} delay={i * 60} className="bg-white">
              <Photo
                img={
                  [
                    facilityImages.mtrtc[1],
                    facilityImages.mtrtc[2],
                    facilityImages.ashokLeyland,
                    facilityImages.mtrtc[4],
                  ][i]
                }
                ratio="16/10"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full"
              />
              <span className="block p-8 md:p-10">
                <h2 className="text-2xl font-bold tracking-[-0.03em]">{unit.name}</h2>
                <span className="mt-4 block text-[0.96rem] leading-relaxed text-slate">
                  {unit.body}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="indigo">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <SectionHead
            tone="light"
            eyebrow="Why production"
            title="A tolerance is a better teacher than a grade."
            lede="When a component has to fit, and someone downstream is waiting for it, accuracy stops being an abstraction. Trainees are assessed daily on accuracy, process and time taken — the same three things a supervisor will judge them on in a job."
          />
          <div className="self-end">
            <ButtonLink href={docs.wellCatalogue} variant="light" external>
              WEL Lab catalogue (PDF)
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="white" className="!pt-0">
        <ul className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {[facilityImages.mtrtc[0], facilityImages.mtrtc[2], facilityImages.mtrtc[3], facilityImages.mtrtc[4]].map(
            (img) => (
              <li key={img.src}>
                <Photo img={img} ratio="9/7" sizes="(max-width: 768px) 50vw, 25vw" className="w-full" />
              </li>
            ),
          )}
        </ul>
      </Section>

      <Section tone="chalk">
        <SectionHead
          eyebrow="Beyond employment"
          title="Some people would rather start something."
          lede="Trainees who want to run their own workshop instead of joining someone else's get incubation support to become nano, mini or micro entrepreneurs."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={org.incubatorUrl} external>
            Business incubation
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Talk to us about a production partnership
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
