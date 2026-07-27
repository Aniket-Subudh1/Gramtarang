import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createSessionValue, sessionCookie } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Sign in. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = typeof body.password === "string" ? body.password : "";

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin access isn't configured yet. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET." },
      { status: 500 },
    );
  }

  // Slow brute force down a little without any external dependency.
  await new Promise((r) => setTimeout(r, 350));

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "That password doesn't match." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(sessionCookie.name, await createSessionValue(), sessionCookie.options);
  return res;
}

/** Sign out. */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(sessionCookie.name, "", { ...sessionCookie.options, maxAge: 0 });
  return res;
}
