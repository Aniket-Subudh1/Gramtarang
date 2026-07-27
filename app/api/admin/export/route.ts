import { NextResponse } from "next/server";
import { listInquiries } from "@/lib/store";
import { hasSession } from "@/lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLUMNS = [
  "id",
  "createdAt",
  "status",
  "type",
  "name",
  "email",
  "phone",
  "organisation",
  "state",
  "interest",
  "message",
  "source",
  "notes",
] as const;

const cell = (value: unknown) => {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export async function GET() {
  if (!(await hasSession())) {
    return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  }

  const rows = await listInquiries(5000);
  const csv = [
    COLUMNS.join(","),
    ...rows.map((row) =>
      COLUMNS.map((key) => cell((row as Record<string, unknown>)[key])).join(","),
    ),
  ].join("\n");

  const stamp = new Date().toISOString().slice(0, 10);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="gram-tarang-inquiries-${stamp}.csv"`,
    },
  });
}
