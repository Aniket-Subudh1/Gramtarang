import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sessionCookie, verifySessionValue } from "./auth";

/**
 * The authoritative admin check.
 *
 * Middleware also gates /admin, but middleware is an optimistic filter,
 * not a security boundary — Next.js has shipped several advisories where
 * a crafted request skips it (GHSA-267c-6grr-h53f, GHSA-26hh-7cqf-hhc6,
 * CVE-2025-29927). So every page and route handler that touches inquiry
 * data verifies the session itself, right next to the data it protects.
 *
 * If middleware were bypassed entirely, this would still hold.
 */
export async function requireSession() {
  const store = await cookies();
  const ok = await verifySessionValue(store.get(sessionCookie.name)?.value);
  if (!ok) redirect("/admin/login");
}

/** Same check for route handlers, which return a status rather than redirect. */
export async function hasSession() {
  const store = await cookies();
  return verifySessionValue(store.get(sessionCookie.name)?.value);
}
