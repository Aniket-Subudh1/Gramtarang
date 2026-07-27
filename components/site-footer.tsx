import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { org } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-900 text-indigo-200">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-indigo-200">
              {org.about}
            </p>

            <dl className="mt-8 space-y-4 text-[0.9rem]">
              <div>
                <dt className="eyebrow text-indigo-500">Registered office</dt>
                <dd className="mt-1.5 text-white">
                  {org.registeredOffice.line1}
                  <br />
                  {org.registeredOffice.line2}
                  <br />
                  {org.registeredOffice.line3}
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <dt className="eyebrow text-indigo-500">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${org.phoneHref}`}
                      className="text-white underline-offset-4 hover:underline"
                    >
                      {org.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-indigo-500">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${org.email}`}
                      className="text-white underline-offset-4 hover:underline"
                    >
                      {org.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="eyebrow text-indigo-500">{col.heading}</h2>
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

        <div className="mt-14 flex flex-col gap-6 border-t border-indigo-700 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem]">
            <span>
              © {year} {org.legalName}
            </span>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <a
              href={org.feePaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Pay course fees online
            </a>
          </div>

          <a
            href={
              process.env.NEXT_PUBLIC_ADMIN_HOST
                ? `https://${process.env.NEXT_PUBLIC_ADMIN_HOST}`
                : "/admin"
            }
            className="eyebrow text-indigo-500 transition-colors hover:text-white"
          >
            Staff sign-in
          </a>
        </div>
      </div>
    </footer>
  );
}
