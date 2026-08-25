import type { Metadata } from "next";
import Link from "next/link";
import { pages } from "@/lib/seo";
import { ScaleBar } from "@/components/scale-bar";
import { Reveal } from "@/components/reveal";
import { Photo, Logo } from "@/components/media";
import { ButtonLink, LogoMarquee, Section, SectionHead } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { SectorPreview } from "@/components/sector-preview";
import {
  governmentPartners,
  hero,
  industryPartners,
  methodPhases,
  org,
  sectors,
  stats,
  stories,
} from "@/lib/content";
import {
  ecosystemLogos,
  facilityImages,
  heroPrimary,
  partnerLogos,
  sectorImages,
  storyAtmosphere,
  storyPortraits,
} from "@/lib/assets";

export const metadata: Metadata = pages.home;

const govLogos = governmentPartners
  .map((p) => partnerLogos[p.slug])
  .filter(Boolean);
const indLogos = industryPartners.map((p) => partnerLogos[p.slug]).filter(Boolean);

const methodSteps = methodPhases.flatMap((phase) => phase.steps);

const featuredStory = stories.find((s) => s.name === "Gurudev Hansdah") ?? stories[0];
const featuredPortrait = storyPortraits[featuredStory.name];

const routes = [
  {
    who: "Looking for a trade",
    what: "Six sectors. Every course we run.",
    href: "/sectors",
    image: sectorImages.manufacturing,
  },
  {
    who: "Hiring a workforce",
    what: "Recruitment, payrolling, compliance.",
    href: "/services/workforce-solutions",
    image: sectorImages.automotive,
  },
  {
    who: "Funding a programme",
    what: "How we structure and certify.",
    href: "/partners",
    image: sectorImages.agriculture,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate -mt-18 min-h-svh overflow-hidden bg-indigo-900 text-white">
        <div className="absolute inset-0 hero-zoom">
          <Photo
            img={heroPrimary}
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-indigo-900/88 via-indigo-900/55 to-indigo-900/15"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-indigo-900 via-indigo-900/20 to-indigo-900/35"
        />

        <div className="shell relative flex min-h-svh flex-col justify-end pb-10 pt-32 md:pb-14 md:pt-36">
          <p
            className="hero-rise eyebrow text-turmeric"
            style={{ animationDelay: "80ms" }}
          >
            {hero.eyebrow}
          </p>
          <span
            aria-hidden
            className="hero-rise mt-4 block h-px w-10 bg-turmeric"
            style={{ animationDelay: "120ms" }}
          />

          <h1
            className="hero-rise mt-5 max-w-4xl font-display text-[clamp(2.6rem,7.2vw,6.25rem)] font-extrabold leading-[0.9] tracking-[-0.045em]"
            style={{ animationDelay: "160ms" }}
          >
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-base leading-relaxed text-indigo-100 md:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            {hero.lede}
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "440ms" }}
          >
            <ButtonLink href={hero.primaryCta.href} variant="light">
              {hero.primaryCta.label}
            </ButtonLink>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 font-display text-[0.9rem] font-semibold tracking-tight text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {hero.secondaryCta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <dl
            className="hero-rise mt-14 grid grid-cols-2 gap-px border-t border-white/15 pt-8 sm:grid-cols-4"
            style={{ animationDelay: "560ms" }}
          >
            {stats.map((item) => (
              <div key={item.label} className="pr-4">
                <dt className="eyebrow text-indigo-200">{item.label}</dt>
                <dd className="mt-2 font-display text-2xl font-extrabold tracking-[-0.03em] text-white md:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section tone="white" className="py-16! md:py-20!">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow text-madder">The measure</p>
            <span aria-hidden className="mt-4 block h-px w-10 bg-madder" />
            <h2 className="mt-5 text-3xl font-bold md:text-[2.4rem]">
              Twenty years, one rising line.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate">
              From 263 trainees in our first year to over a lakh a year now —
              mostly school dropouts, tribal youth and first-generation earners.
            </p>
          </Reveal>
          <ScaleBar />
        </div>
      </Section>

      <Section tone="chalk" id="sectors">
        <SectionHead
          eyebrow="What we teach"
          title="Six sectors. One standard."
          lede="Every trade is aligned to a national occupational standard, taught on the equipment the job uses, and assessed independently."
        />
        <div className="mt-12 md:mt-16">
          <SectorPreview sectors={sectors} />
        </div>
        <div className="mt-10">
          <ButtonLink href="/sectors" variant="outline">
            All trades
          </ButtonLink>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="How we teach"
              title="Six steps, in order."
              lede="Nobody touches a production machine before they have watched the job done. Nobody is certified by us alone."
            />
            <Photo
              img={facilityImages.trainingFloor}
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="mt-10 w-full"
            />
          </div>
          <ol className="divide-y divide-[--color-line] border-y border-line">
            {methodSteps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 50} className="py-6">
                <div className="flex gap-5 md:gap-7">
                  <span className="font-mono text-[0.75rem] font-medium text-madder">
                    {String(step.n).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-slate">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-12">
          <ButtonLink href="/services/skill-training" variant="outline">
            The full methodology
          </ButtonLink>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-indigo-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-88 lg:min-h-144">
            <Photo
              img={storyAtmosphere}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-indigo-900 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-indigo-900/75"
            />
          </div>
          <div className="shell flex flex-col justify-center py-16 md:py-24 lg:max-w-none lg:px-16 xl:px-24">
            <Reveal>
              <p className="eyebrow text-turmeric">{featuredStory.trade}</p>
              <blockquote className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] md:text-4xl">
                “{featuredStory.quote}”
              </blockquote>
              <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-indigo-100">
                {featuredStory.body.split(". ").slice(0, 3).join(". ")}.
              </p>
              <footer className="mt-8 flex items-center gap-4">
                {featuredPortrait ? (
                  <Photo
                    img={featuredPortrait}
                    ratio="1/1"
                    sizes="56px"
                    className="h-14 w-14 shrink-0 rounded-full"
                  />
                ) : null}
                <span>
                  <span className="block font-display text-lg font-semibold">
                    {featuredStory.name}
                  </span>
                  <span className="mt-1 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-indigo-200">
                    {featuredStory.from}
                  </span>
                </span>
              </footer>
              <div className="mt-10">
                <ButtonLink href="/recognition/success-stories" variant="light">
                  More stories
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="chalk">
        <SectionHead
          eyebrow="Start here"
          title="Three ways in."
          lede="Tell us who you are. We will take it from there."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {routes.map((row, i) => (
            <Reveal as="li" key={row.href} delay={i * 70}>
              <Link
                href={row.href}
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden bg-indigo-900 text-white"
              >
                <Photo
                  img={row.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-indigo-900 via-indigo-900/45 to-transparent"
                />
                <span className="relative p-6 md:p-7">
                  <span className="block font-display text-2xl font-bold tracking-tight">
                    {row.who}
                  </span>
                  <span className="mt-2 block text-[0.92rem] text-indigo-100">
                    {row.what}
                  </span>
                  <span className="mt-5 inline-flex text-turmeric transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Who we work with"
          title="Governments fund it. Industry hires from it."
        />
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          {Object.entries(ecosystemLogos).map(([name, img]) => (
            <span key={name} className="flex items-center gap-3">
              <span className="flex items-center justify-center bg-chalk px-3 py-2">
                <Logo img={img} height={36} />
              </span>
              <span className="hidden font-display text-[0.85rem] font-medium text-slate sm:inline">
                {name}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-12 space-y-3">
          <LogoMarquee items={govLogos} />
          <LogoMarquee items={indLogos} />
        </div>
        <div className="mt-10">
          <ButtonLink href="/partners" variant="outline">
            All partners
          </ButtonLink>
        </div>
      </Section>

      <Section tone="chalk" id="inquiry">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="Get in touch"
              title="Tell us what you need."
              lede="Whether you want to train, to hire, or to fund a programme — every inquiry lands with a named person, not an inbox."
            />
            <dl className="mt-10 space-y-6 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-mist">Call</dt>
                <dd className="mt-1.5">
                  <a href={`tel:${org.phoneHref}`} className="font-display font-semibold">
                    {org.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mist">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${org.email}`} className="font-display font-semibold">
                    {org.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mist">Visit</dt>
                <dd className="mt-1.5 text-slate">
                  {org.registeredOffice.line2}, {org.registeredOffice.line3}
                </dd>
              </div>
            </dl>
          </div>
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}
