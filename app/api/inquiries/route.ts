import { NextRequest, NextResponse } from "next/server";
import {
  Inquiry,
  listInquiries,
  newId,
  saveInquiry,
  tooManyRequests,
} from "@/lib/store";
import { hasSession } from "@/lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Send valid JSON." }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Accept quietly so the
  // bot doesn't learn anything, but store nothing.
  if (clean(body.website, 10)) {
    return NextResponse.json({ id: newId() }, { status: 201 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (await tooManyRequests(ip)) {
    return NextResponse.json(
      { error: "Too many inquiries from this connection. Try again later." },
      { status: 429 },
    );
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 20);
  const message = clean(body.message, 2000);

  if (!name) return NextResponse.json({ error: "Add your name." }, { status: 400 });
  if (!EMAIL.test(email))
    return NextResponse.json({ error: "Check the email address." }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 8)
    return NextResponse.json({ error: "Check the phone number." }, { status: 400 });

  const inquiry: Inquiry = {
    id: newId(),
    createdAt: new Date().toISOString(),
    status: "new",
    type: clean(body.type, 40) || "other",
    name,
    email,
    phone,
    organisation: clean(body.organisation, 160) || undefined,
    state: clean(body.state, 60) || undefined,
    interest: clean(body.interest, 160) || undefined,
    message,
    source: clean(body.source, 200) || undefined,
    userAgent: clean(req.headers.get("user-agent"), 200) || undefined,
  };

  try {
    await saveInquiry(inquiry);
  } catch {
    return NextResponse.json(
      { error: "We couldn't save that. Please call us instead." },
      { status: 503 },
    );
  }

  return NextResponse.json({ id: inquiry.id }, { status: 201 });
}

export async function GET() {
  if (!(await hasSession()))
    return NextResponse.json({ error: "Sign in first." }, { status: 401 });

  return NextResponse.json({ inquiries: await listInquiries() });
}
