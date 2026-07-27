import { NextRequest, NextResponse } from "next/server";
import { deleteInquiry, InquiryStatus, updateInquiry } from "@/lib/store";
import { hasSession } from "@/lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STATUSES: InquiryStatus[] = ["new", "open", "closed"];

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await hasSession()))
    return NextResponse.json({ error: "Sign in first." }, { status: 401 });

  const { id } = await params;
  const body = await req.json().catch(() => ({}));

  const patch: { status?: InquiryStatus; notes?: string } = {};
  if (typeof body.status === "string" && STATUSES.includes(body.status as InquiryStatus)) {
    patch.status = body.status as InquiryStatus;
  }
  if (typeof body.notes === "string") {
    patch.notes = body.notes.slice(0, 2000);
  }

  const updated = await updateInquiry(id, patch);
  if (!updated)
    return NextResponse.json({ error: "No inquiry with that reference." }, { status: 404 });

  return NextResponse.json({ inquiry: updated });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await hasSession()))
    return NextResponse.json({ error: "Sign in first." }, { status: 401 });

  const { id } = await params;
  await deleteInquiry(id);
  return NextResponse.json({ ok: true });
}
