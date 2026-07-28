import Link from "next/link";
import { ScaleBar } from "@/components/scale-bar";
import { Reveal } from "@/components/reveal";
import { Photo, Logo } from "@/components/media";
import {
  ButtonLink,
  Card,
  LogoMarquee,
  Section,
  SectionHead,
  StatGrid,
} from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import {
  ecosystem,
  governmentPartners,
  hero,
  industryPartners,
  methodPhases,
  org,
  sectors,
  services,
  stats,
  stories,
  workforceSolutions,
} from "@/lib/content";
import {
  ecosystemLogos,
  facilityImages,
  heroPrimary,
  partnerLogos,
  sectorImages,
  storyPortraits,
  workforceImages,
} from "@/lib/assets";

const govLogos = governmentPartners
  .map((p) => partnerLogos[p.slug])
  .filter(Boolean);
const indLogos = industryPartners.map((p) => partnerLogos[p.slug]).filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ hero ------------------------ */}
      <section className="border-b border-line bg-white">
        <div className="shell pb-12 pt-16 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow text-madder">{hero.eyebrow}</p>
              <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-6xl xl:text-[4.5rem]">
                {hero.headline.map((line, i) => (
                  <span key={line} className="block">
                    {i === hero.headline.length - 1 ? (
                      <span className="text-indigo-700">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                {hero.lede}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>

            {/* three routes in, because three different people arrive here */}
            <div className="self-end border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="eyebrow text-mist">Who are you?</p>
              <ul className="mt-4 divide-y divide-[--color-line]">
                {[
                  {
                    who: "A young person looking for a trade",
                    href: "/sectors",
                    what: "See the six sectors and every trade we run",
                  },
                  {
                    who: "An employer who needs people",
                    href: "/services/workforce-solutions",
                    what: "Recruitment, payrolling and compliance",
                  },
                  {
                    who: "A government or CSR partner",
                    href: "/partners",
                    what: "How our programmes are structured and certified",
                  },
                ].map((row) => (
                  <li key={row.href}>
                    <Link
                      href={row.href}
                      className="group flex items-start justify-between gap-4 py-4 transition-colors hover:text-indigo-700"
                    >
                      <span>
                        <span className="block font-display text-[1.02rem] font-semibold tracking-tight">
                          {row.who}
                        </span>
                        <span className="mt-0.5 block font-body text-[0.88rem] text-slate">
                          {row.what}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-madder transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* full-bleed photograph of the thing itself */}
        <div className="relative">
          <Photo
            img={heroPrimary}
            priority
            sizes="100vw"
            className="h-[300px] w-full md:h-[440px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-900/45 via-indigo-900/10 to-transparent"
          />
        </div>

        {/* ---------------------- the measure (signature) ----------- */}
        <div className="shell py-12">
          <ScaleBar />
        </div>
      </section>

      {/* ------------------------------ stats ---------------------- */}
      <Section tone="chalk" className="!py-16">
        <StatGrid items={stats} />
      </Section>

      {/* ------------------------------ sectors -------------------- */}
      <Section tone="white" id="sectors">
        <SectionHead
          eyebrow="What we teach"
          title="Six sectors, one standard."
          lede="Every trade is aligned to a national occupational standard, taught on the equipment the job actually uses, and assessed by an independent body — a sector skill council, NCVT, or Centurion University."
        />

        <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal as="li" key={sector.slug} delay={i * 60} className="bg-white">
              <Link
                href={`/sectors/${sector.slug}`}
                className="group flex h-full flex-col transition-colors hover:bg-indigo-50"
              >
                {sectorImages[sector.slug] && (
                  <Photo
                    img={sectorImages[sector.slug]}
                    ratio="16/10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="w-full"
                  />
                )}
                <span className="flex flex-1 flex-col p-7 md:p-8">
                  <span className="eyebrow text-madder">{sector.code}</span>
                  <h3 className="mt-3 text-2xl font-bold">{sector.name}</h3>
                  <span className="mt-3 block flex-1 text-[0.95rem] leading-relaxed text-slate">
                    {sector.blurb}
                  </span>
                  <span className="mt-6 block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-mist">
                    {sector.trades.length} trades
                  </span>
                  <span className="mt-2 block font-display text-[0.88rem] font-semibold text-indigo-700">
                    <span className="underline-offset-4 group-hover:underline">
                      See the trades
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------ method --------------------- */}
      <Section tone="chalk">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="How we teach"
              title="Six steps, in order."
              lede="The sequence matters. Nobody touches a production machine before they have watched the job done, and nobody is certified by us alone."
            />
            <Photo
              img={facilityImages.trainingFloor}
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="mt-9 w-full"
            />
            <div className="mt-8">
              <ButtonLink href="/services/skill-training" variant="outline">
                The full methodology
              </ButtonLink>
            </div>
          </div>

          <ol className="space-y-10">
            {methodPhases.map((phase) => (
              <li key={phase.phase}>
                <div className="flex items-baseline gap-3 border-b border-line-strong pb-2">
                  <span className="eyebrow text-madder">{phase.phase}</span>
                  <span className="font-display text-[0.95rem] font-semibold tracking-tight">
                    {phase.name}
                  </span>
                </div>
                <ul className="mt-5 space-y-5">
                  {phase.steps.map((step, i) => (
                    <Reveal as="li" key={step.n} delay={i * 60}>
                      <div className="flex gap-5">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-ink/20 font-mono text-[0.75rem] font-medium">
                          {String(step.n).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight">
                            {step.title}
                          </h3>
                          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ------------------------------ ecosystem ------------------ */}
      <Section tone="indigo">
        <SectionHead
          tone="light"
          eyebrow="How it holds together"
          title="A ministry, a university and an operator."
          lede="Skilling at this scale needs policy, a qualifications framework and someone who can actually run a centre in Rayagada. The model splits those three jobs cleanly."
        />
        <div className="mt-14 grid gap-px border border-indigo-700 bg-indigo-700 lg:grid-cols-3">
          {ecosystem.map((part, i) => (
            <Reveal key={part.name} delay={i * 80} className="bg-indigo-900 p-8">
              {ecosystemLogos[part.name] && (
                <span className="mb-6 inline-flex items-center justify-center bg-white px-4 py-3">
                  <Logo img={ecosystemLogos[part.name]} height={38} />
                </span>
              )}
              <p className="eyebrow text-turmeric">{part.role}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{part.name}</h3>
              <ul className="mt-5 space-y-3">
                {part.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[0.9rem] leading-relaxed text-indigo-200"
                  >
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-indigo-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------ services ------------------- */}
      <Section tone="white">
        <SectionHead eyebrow="What we do" title="Four ways to work with us." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Card className="flex h-full flex-col">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 font-display text-[0.88rem] font-semibold text-indigo-700 underline-offset-4 hover:underline"
                >
                  Read more <span aria-hidden>→</span>
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------ workforce ------------------ */}
      <Section tone="indigo-soft">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="For employers"
              title="Hire people we already trained."
              lede={workforceSolutions.intro}
            />
            <Photo
              img={workforceImages.recruitment}
              ratio="16/9"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="mt-9 w-full"
            />
            <div className="mt-8">
              <ButtonLink href="/services/workforce-solutions">
                Workforce solutions
              </ButtonLink>
            </div>
          </div>
          <dl className="divide-y divide-[--color-line]">
            {workforceSolutions.offerings.map((item) => (
              <div key={item.name} className="py-6 first:pt-0 last:pb-0">
                <dt className="font-display text-lg font-semibold tracking-tight">
                  {item.name}
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-slate">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ------------------------------ partners ------------------- */}
      <Section tone="chalk">
        <SectionHead
          eyebrow="Who we work with"
          title="Governments fund it. Industry hires from it."
          align="center"
        />
        <div className="mt-12 space-y-4">
          <LogoMarquee items={govLogos} />
          <LogoMarquee items={indLogos} />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/partners" variant="outline">
            All partners
          </ButtonLink>
        </div>
      </Section>

      {/* ------------------------------ stories -------------------- */}
      <Section tone="white">
        <SectionHead
          eyebrow="Who it is for"
          title="One person at a time, which is the only way it works."
        />
        <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {stories.slice(0, 3).map((story, i) => {
            const portrait = storyPortraits[story.name];
            return (
              <Reveal as="li" key={story.name} delay={i * 70} className="bg-white p-8">
                <p className="eyebrow text-madder">{story.trade}</p>
                <blockquote className="mt-5 font-body text-xl italic leading-snug text-ink">
                  “{story.quote}”
                </blockquote>
                <p className="mt-5 text-[0.92rem] leading-relaxed text-slate">
                  {story.body.split(". ").slice(0, 2).join(". ")}.
                </p>
                <footer className="mt-6 flex items-center gap-4 border-t border-line pt-4">
                  {portrait ? (
                    <Photo
                      img={portrait}
                      ratio="1/1"
                      sizes="56px"
                      className="h-14 w-14 shrink-0 rounded-full"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-50 font-display text-[0.95rem] font-bold text-indigo-700"
                    >
                      {story.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                  <span>
                    <span className="block font-display text-[0.95rem] font-semibold">
                      {story.name}
                    </span>
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-mist">
                      {story.from}
                    </span>
                  </span>
                </footer>
              </Reveal>
            );
          })}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/recognition/success-stories" variant="outline">
            More stories
          </ButtonLink>
        </div>
      </Section>

      {/* ------------------------------ inquiry -------------------- */}
      <Section tone="chalk" id="inquiry">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="Get in touch"
              title="Tell us what you need."
              lede="Whether you want to train, to hire, or to fund a programme, this is the fastest route in. Every inquiry lands with a named person, not an inbox."
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
