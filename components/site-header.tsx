"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/nav";
import { org } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-chalk/95 backdrop-blur-md"
          : "border-transparent bg-chalk"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-indigo-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${org.shortName} home`}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {primaryNav.map((item) => {
            const active =
              item.href && item.href !== "/"
                ? pathname.startsWith(item.href.split("/").slice(0, 2).join("/"))
                : false;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.children ? item.label : null)}
              >
                <Link
                  href={item.href ?? "#"}
                  aria-expanded={item.children ? menu === item.label : undefined}
                  className={`flex items-center gap-1.5 px-3 py-2 text-[0.9rem] font-medium tracking-tight transition-colors ${
                    active ? "text-madder" : "text-ink hover:text-indigo-700"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span
                      aria-hidden
                      className={`mt-px block h-1 w-1 rounded-full transition-colors ${
                        menu === item.label ? "bg-madder" : "bg-line-strong"
                      }`}
                    />
                  )}
                </Link>

                {item.children && menu === item.label && (
                  <div className="absolute left-0 top-full w-[22rem] pt-2">
                    <div className="border border-line bg-white p-2 shadow-[0_18px_40px_-24px_rgba(16,22,37,0.45)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-baseline justify-between gap-4 px-3 py-2.5 transition-colors hover:bg-indigo-50"
                        >
                          <span className="font-display text-[0.92rem] font-medium text-ink">
                            {child.label}
                          </span>
                          {child.note && (
                            <span className="eyebrow shrink-0 text-mist">
                              {child.note}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-indigo-900 px-5 py-2.5 font-display text-[0.85rem] font-semibold tracking-tight text-white transition-colors hover:bg-madder sm:inline-block"
          >
            Start an inquiry
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center border border-line-strong lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t border-line bg-chalk lg:hidden"
        >
          <div className="shell py-6">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-line py-4 last:border-0">
                <Link
                  href={item.href ?? "#"}
                  className="font-display text-lg font-semibold tracking-tight"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-1.5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="font-body text-[0.95rem] text-slate"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-6 block bg-indigo-900 px-5 py-3.5 text-center font-display font-semibold text-white"
            >
              Start an inquiry
            </Link>
            <a
              href={`tel:${org.phoneHref}`}
              className="mt-3 block border border-line-strong px-5 py-3.5 text-center font-display font-semibold"
            >
              Call {org.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
