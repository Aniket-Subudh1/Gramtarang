import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PageHeader, Section } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skill training, workforce solutions, production and action learning, and work-integrated apprenticeships.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Four ways to work with us."
        lede="Most partners start with one and end up using two. The training pipeline and the staffing business feed each other."
      />
      <Section tone="white">
        <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 60} className="bg-white">
              <Link
                href={service.href}
                className="group flex h-full flex-col p-9 transition-colors hover:bg-indigo-50"
              >
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em]">
                  {service.name}
                </h2>
                <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-slate">
                  {service.summary}
                </p>
                <p className="mt-8 font-display text-[0.88rem] font-semibold text-indigo-700">
                  <span className="underline-offset-4 group-hover:underline">Read more</span>{" "}
                  <span aria-hidden>→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
