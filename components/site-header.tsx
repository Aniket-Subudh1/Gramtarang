"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/nav";
import { org } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const overlay = pathname === "/" && !scrolled && !open;
  const inverted = overlay || open;

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        open
          ? "border-indigo-800 bg-indigo-900"
          : overlay
            ? "border-transparent bg-indigo-900/10 backdrop-blur-[2px]"
            : "border-line/80 bg-white/92 shadow-[0_1px_0_rgba(16,22,37,0.04)] backdrop-blur-md"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-indigo-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="shell flex h-22 items-center justify-between gap-4 md:gap-6">
        <Link href="/" className="min-w-0 shrink" aria-label={`${org.legalName} home`}>
          <Wordmark tone={inverted ? "light" : "dark"} compact />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {primaryNav.map((item) => {
            const active =
              item.href && item.href !== "/"
                ? pathname.startsWith(item.href.split("/").slice(0, 2).join("/"))
                : false;
            const expanded = menu === item.label;
            const wide = (item.children?.length ?? 0) > 5;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.children ? item.label : null)}
              >
                <Link
                  href={item.href ?? "#"}
                  aria-expanded={item.children ? expanded : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  onFocus={() => setMenu(item.children ? item.label : null)}
                  className={`group relative flex items-center gap-1.5 px-3 py-2 text-[0.88rem] font-medium tracking-tight transition-colors ${
                    inverted
                      ? active
                        ? "text-turmeric"
                        : "text-white/85 hover:text-white"
                      : active
                        ? "text-indigo-900"
                        : "text-slate hover:text-ink"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span
                      aria-hidden
                      className={`mt-px block border-x-4 border-t-4 border-x-transparent transition-transform ${
                        inverted ? "border-t-white/55" : "border-t-mist"
                      } ${expanded ? "rotate-180" : ""}`}
                    />
                  )}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-px h-px origin-left transition-transform duration-300 ${
                      inverted ? "bg-turmeric" : "bg-madder"
                    } ${active || expanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>

                {item.children && expanded && (
                  <div
                    className={`absolute top-full pt-3 ${
                      wide ? "left-1/2 w-[28rem] -translate-x-1/2" : "left-0 w-[22rem]"
                    }`}
                  >
                    <div className="menu-panel border border-line bg-white p-2 shadow-[0_24px_60px_-28px_rgba(16,22,37,0.45)]">
                      <div className={wide ? "grid grid-cols-2 gap-0.5" : "grid"}>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/item flex items-baseline justify-between gap-3 px-3 py-2.5 transition-colors hover:bg-indigo-50"
                          >
                            <span className="font-display text-[0.9rem] font-medium text-ink">
                              {child.label}
                            </span>
                            {child.note && (
                              <span className="eyebrow shrink-0 text-mist group-hover/item:text-indigo-500">
                                {child.note}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${org.phoneHref}`}
            className={`hidden font-display text-[0.82rem] font-medium tracking-tight transition-colors xl:inline ${
              inverted ? "text-white/75 hover:text-white" : "text-slate hover:text-ink"
            }`}
          >
            {org.phone}
          </a>

          <Link
            href="/contact"
            className={`hidden px-5 py-2.5 font-display text-[0.82rem] font-semibold tracking-tight transition-colors sm:inline-block ${
              inverted
                ? "bg-white text-indigo-900 hover:bg-turmeric"
                : "bg-indigo-900 text-white hover:bg-madder"
            }`}
          >
            Start an inquiry
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
              inverted ? "border-white/30" : "border-line-strong"
            }`}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 transition-transform ${
                  inverted ? "bg-white" : "bg-ink"
                } ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 transition-opacity ${
                  inverted ? "bg-white" : "bg-ink"
                } ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-px w-4 transition-transform ${
                  inverted ? "bg-white" : "bg-ink"
                } ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-indigo-900 text-white lg:hidden"
        >
          <div className="shell py-8">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-5 last:border-0">
                <Link
                  href={item.href ?? "#"}
                  className="font-display text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1 text-[0.95rem] text-indigo-200 transition-colors hover:text-white"
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
              className="mt-8 block bg-white px-5 py-3.5 text-center font-display font-semibold text-indigo-900"
            >
              Start an inquiry
            </Link>
            <a
              href={`tel:${org.phoneHref}`}
              className="mt-3 block border border-white/25 px-5 py-3.5 text-center font-display font-semibold text-white"
            >
              Call {org.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
