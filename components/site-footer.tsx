import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { org } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const adminHref = process.env.NEXT_PUBLIC_ADMIN_HOST
    ? `https://${process.env.NEXT_PUBLIC_ADMIN_HOST}`
    : "/admin";

  return (
    <footer className="bg-indigo-900 text-indigo-200">
      <div className="border-b border-indigo-700">
        <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-12">
          <div className="max-w-xl">
            <p className="eyebrow text-turmeric">Work with us</p>
            <p className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Train. Hire. Fund a programme.
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-indigo-200">
              Every inquiry reaches a named person — not a general inbox.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-display text-[0.88rem] font-semibold text-indigo-900 transition-colors hover:bg-turmeric"
            >
              Start an inquiry
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`tel:${org.phoneHref}`}
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-display text-[0.88rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {org.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="shell py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-20">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-indigo-200">
              {org.aboutShort}
            </p>
            <dl className="mt-8 space-y-5 text-[0.9rem]">
              <div>
                <dt className="eyebrow text-indigo-400">Registered office</dt>
                <dd className="mt-2 leading-relaxed text-white">
                  {org.registeredOffice.line1}
                  <br />
                  {org.registeredOffice.line2}
                  <br />
                  {org.registeredOffice.line3}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-indigo-400">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${org.email}`}
                    className="text-white underline-offset-4 hover:underline"
                  >
                    {org.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="eyebrow text-indigo-400">{col.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-indigo-200 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      <div className="rule-tick-dark h-1.5 w-full opacity-40" aria-hidden />

      <div className="shell flex flex-col gap-5 py-6 text-[0.78rem] text-indigo-300 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>
            © {year} {org.legalName}
          </span>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <a
            href={org.feePaymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Pay course fees
          </a>
        </div>
        <a
          href={adminHref}
          className="eyebrow text-indigo-500 transition-colors hover:text-white"
        >
          Staff sign-in
        </a>
      </div>
    </footer>
  );
}
