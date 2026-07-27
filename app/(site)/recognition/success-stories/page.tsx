import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink, PageHeader, Section } from "@/components/ui";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Success stories",
  description:
    "What happened to some of the people who trained with Gram Tarang, in their districts and after.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Success stories"
        lede="Placement rates are an average. These are the individual cases the average is made of, told as plainly as we can."
      />

      <Section tone="white">
        <ul className="divide-y divide-[--color-line]">
          {stories.map((story, i) => (
            <Reveal as="li" key={story.name} delay={i * 40} className="py-12 first:pt-0">
              <article className="grid gap-6 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12">
                <header>
                  <h2 className="text-2xl font-bold tracking-[-0.03em]">{story.name}</h2>
                  <p className="eyebrow mt-2 text-madder">{story.trade}</p>
                  <p className="mt-1.5 font-mono text-[0.78rem] text-mist">{story.from}</p>
                </header>
                <div>
                  <blockquote className="border-l-2 border-turmeric pl-5 font-body text-xl italic leading-snug">
                    “{story.quote}”
                  </blockquote>
                  <p className="mt-5 text-[1rem] leading-relaxed text-slate">
                    {story.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="indigo-soft">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Trained with us? Tell us where you are now.</h2>
          <p className="mt-4 text-lg text-slate">
            We track placements for years afterwards, and alumni are the most
            credible thing we can show a family deciding whether to send their
            daughter to a residential course.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Send us your update</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
