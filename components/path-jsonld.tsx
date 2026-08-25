"use client";

import { usePathname } from "next/navigation";
import { footerNav, primaryNav } from "@/lib/nav";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "./json-ld";

const labels = new Map<string, string>([
  ["/", "Home"],
  ...primaryNav.flatMap((item) => [
    ...(item.href ? ([[item.href, item.label]] as const) : []),
    ...(item.children?.map((child) => [child.href, child.label] as const) ?? []),
  ]),
  ...footerNav.flatMap((col) =>
    col.links.map((link) => [link.href, link.label] as const),
  ),
  ["/privacy", "Privacy"],
]);

export function PathJsonLd() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const crumbs = [{ name: "Home", path: "/" }];
  const parts = pathname.split("/").filter(Boolean);
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    crumbs.push({
      name: labels.get(acc) ?? part.replace(/-/g, " "),
      path: acc,
    });
  }

  return <JsonLd data={breadcrumbJsonLd(crumbs)} />;
}
