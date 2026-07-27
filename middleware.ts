import { NextRequest, NextResponse } from "next/server";
import { sessionCookie, verifySessionValue } from "@/lib/auth";

/**
 * One deployment serves two hostnames.
 *
 *   gramtarang.org.in        → the public site
 *   admin.gramtarang.org.in  → the inquiry console, mapped onto /admin
 *
 * Add both domains to the same Vercel project and this handles the rest.
 */

const isAdminHost = (host: string) =>
  host.startsWith("admin.") || host.startsWith("admin-");

export async function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase();
  const { pathname, search } = req.nextUrl;

  let path = pathname;
  const onAdminHost = isAdminHost(host);

  // Fold the admin subdomain onto the /admin route tree.
  if (onAdminHost && !pathname.startsWith("/admin") && !pathname.startsWith("/api")) {
    path = pathname === "/" ? "/admin" : `/admin${pathname}`;
  }

  const needsSession = path.startsWith("/admin") && !path.startsWith("/admin/login");

  if (needsSession) {
    const ok = await verifySessionValue(req.cookies.get(sessionCookie.name)?.value);
    if (!ok) {
      const login = req.nextUrl.clone();
      login.pathname = onAdminHost ? "/login" : "/admin/login";
      login.search = pathname === "/" ? "" : `?next=${encodeURIComponent(pathname)}`;
      return NextResponse.redirect(login);
    }
  }

  if (path !== pathname) {
    const rewritten = req.nextUrl.clone();
    rewritten.pathname = path;
    rewritten.search = search;
    return NextResponse.rewrite(rewritten);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|pdf)$).*)"],
};
