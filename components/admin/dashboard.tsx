"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Inquiry, InquiryStatus } from "@/lib/store";
import { inquiryTypes } from "@/lib/content";
import { Wordmark } from "@/components/wordmark";

const typeLabel = (value: string) =>
  inquiryTypes.find((t) => t.value === value)?.label ?? value;

const statusStyles: Record<InquiryStatus, string> = {
  new: "bg-madder text-white",
  open: "bg-turmeric text-ink",
  closed: "bg-chalk-deep text-slate",
};

function when(iso: string) {
  const date = new Date(iso);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function Dashboard({
  inquiries,
  storageWarning,
}: {
  inquiries: Inquiry[];
  storageWarning: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"all" | InquiryStatus>("all");
  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const counts = useMemo(() => {
    const base = { all: inquiries.length, new: 0, open: 0, closed: 0 };
    for (const item of inquiries) base[item.status]++;
    return base;
  }, [inquiries]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inquiries.filter((item) => {
      if (status !== "all" && item.status !== status) return false;
      if (type !== "all" && item.type !== type) return false;
      if (!q) return true;
      return [item.id, item.name, item.email, item.phone, item.organisation, item.message, item.state, item.interest]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(q));
    });
  }, [inquiries, status, type, query]);

  const selected = inquiries.find((i) => i.id === openId) ?? null;

  async function patch(id: string, body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setBusy(false);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this inquiry permanently?")) return;
    setBusy(true);
    await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
    setBusy(false);
    setOpenId(null);
    router.refresh();
  }

  async function signOut() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-chalk/95 backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[100rem] items-center justify-between gap-6 px-5 md:px-8">
          <div className="flex items-center gap-5">
            <Wordmark compact />
            <span className="hidden border-l border-line pl-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist sm:block">
              Inquiries console
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/api/admin/export"
              className="border border-line-strong px-4 py-2 font-display text-[0.82rem] font-semibold transition-colors hover:border-ink"
            >
              Download CSV
            </a>
            <button
              type="button"
              onClick={signOut}
              className="font-display text-[0.82rem] font-semibold text-slate hover:text-madder"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 py-8 md:px-8">
        {storageWarning && (
          <p className="mb-6 border-l-2 border-madder bg-madder-soft px-5 py-4 text-[0.9rem] text-madder-dark">
            Inquiries are being held in memory only, and will disappear when the
            server restarts. Set <code className="font-mono">UPSTASH_REDIS_REST_URL</code>{" "}
            and <code className="font-mono">UPSTASH_REDIS_REST_TOKEN</code> to
            store them permanently.
          </p>
        )}

        {/* counters double as filters */}
        <div className="flex flex-wrap items-center gap-3">
          {(["all", "new", "open", "closed"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setStatus(key)}
              className={`border px-4 py-2.5 font-display text-[0.85rem] font-semibold capitalize transition-colors ${
                status === key
                  ? "border-ink bg-white"
                  : "border-line text-slate hover:border-line-strong"
              }`}
            >
              {key}
              <span className="ml-2 font-mono text-[0.75rem] text-mist">
                {counts[key]}
              </span>
            </button>
          ))}

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-line bg-white px-4 py-2.5 font-display text-[0.85rem]"
          >
            <option value="all">All subjects</option>
            {inquiryTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, phone, message…"
            className="min-w-[14rem] flex-1 border border-line bg-white px-4 py-2.5 font-body text-[0.9rem] placeholder:text-mist focus:border-indigo-700 focus:outline-none"
          />
        </div>

        {/* table */}
        <div className="mt-6 overflow-x-auto border border-line bg-white">
          <table className="w-full min-w-[52rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-chalk">
                {["Reference", "Received", "Subject", "Name", "Contact", "State", "Status"].map(
                  (head) => (
                    <th
                      key={head}
                      className="px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-mist"
                    >
                      {head}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => setOpenId(item.id)}
                  className="cursor-pointer border-b border-line last:border-0 hover:bg-indigo-50"
                >
                  <td className="px-4 py-3.5 font-mono text-[0.78rem]">{item.id}</td>
                  <td className="px-4 py-3.5 text-[0.85rem] text-slate">
                    {when(item.createdAt)}
                  </td>
                  <td className="px-4 py-3.5 text-[0.88rem]">{typeLabel(item.type)}</td>
                  <td className="px-4 py-3.5 font-display text-[0.9rem] font-semibold">
                    {item.name}
                  </td>
                  <td className="px-4 py-3.5 text-[0.82rem] text-slate">
                    {item.phone}
                    <br />
                    {item.email}
                  </td>
                  <td className="px-4 py-3.5 text-[0.85rem] text-slate">
                    {item.state ?? "—"}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-block px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {visible.length === 0 && (
            <div className="px-6 py-20 text-center">
              <p className="font-display text-lg font-semibold">
                {inquiries.length === 0
                  ? "No inquiries yet."
                  : "Nothing matches those filters."}
              </p>
              <p className="mt-2 text-[0.92rem] text-slate">
                {inquiries.length === 0
                  ? "The first one from the website's form will appear here."
                  : "Clear the search or pick a different status."}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* detail panel */}
      {selected && (
        <div className="fixed inset-0 z-40 flex justify-end">
          <button
            type="button"
            aria-label="Close details"
            onClick={() => setOpenId(null)}
            className="absolute inset-0 bg-ink/40"
          />
          <aside className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-line bg-white">
            <div className="flex items-start justify-between gap-4 border-b border-line p-6">
              <div>
                <p className="font-mono text-[0.78rem] text-mist">{selected.id}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em]">
                  {selected.name}
                </h2>
                <p className="mt-1 text-[0.9rem] text-slate">
                  {typeLabel(selected.type)} · {when(selected.createdAt)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="shrink-0 border border-line px-3 py-1.5 font-display text-[0.8rem] font-semibold"
              >
                Close
              </button>
            </div>

            <div className="flex-1 space-y-7 p-6">
              <div className="flex flex-wrap gap-2">
                {(["new", "open", "closed"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    disabled={busy}
                    onClick={() => patch(selected.id, { status: option })}
                    className={`border px-4 py-2 font-display text-[0.82rem] font-semibold capitalize transition-colors ${
                      selected.status === option
                        ? "border-ink bg-ink text-white"
                        : "border-line text-slate hover:border-ink"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <dl className="divide-y divide-[--color-line] border-y border-line">
                {[
                  ["Phone", selected.phone, `tel:${selected.phone.replace(/\s/g, "")}`],
                  ["Email", selected.email, `mailto:${selected.email}`],
                  ["Organisation", selected.organisation],
                  ["State", selected.state],
                  ["Trade interest", selected.interest],
                  ["Came from", selected.source],
                ]
                  .filter(([, value]) => Boolean(value))
                  .map(([label, value, href]) => (
                    <div key={label as string} className="grid grid-cols-3 gap-4 py-3">
                      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-mist">
                        {label}
                      </dt>
                      <dd className="col-span-2 text-[0.92rem]">
                        {href ? (
                          <a
                            href={href as string}
                            className="text-indigo-700 underline underline-offset-4"
                          >
                            {value as string}
                          </a>
                        ) : (
                          (value as string)
                        )}
                      </dd>
                    </div>
                  ))}
              </dl>

              {selected.message && (
                <div>
                  <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-mist">
                    Message
                  </h3>
                  <p className="mt-2 whitespace-pre-wrap text-[0.95rem] leading-relaxed">
                    {selected.message}
                  </p>
                </div>
              )}

              <div>
                <label
                  htmlFor="notes"
                  className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-mist"
                >
                  Internal notes
                </label>
                <textarea
                  id="notes"
                  key={selected.id}
                  defaultValue={selected.notes ?? ""}
                  rows={4}
                  onBlur={(e) => {
                    if (e.target.value !== (selected.notes ?? "")) {
                      patch(selected.id, { notes: e.target.value });
                    }
                  }}
                  placeholder="Who called, what was agreed, what happens next."
                  className="mt-2 w-full resize-y border border-line-strong px-4 py-3 font-body text-[0.93rem] focus:border-indigo-700 focus:outline-none"
                />
                <p className="mt-1.5 text-[0.78rem] text-mist">Saves when you click away.</p>
              </div>
            </div>

            <div className="border-t border-line p-6">
              <button
                type="button"
                disabled={busy}
                onClick={() => remove(selected.id)}
                className="font-display text-[0.85rem] font-semibold text-madder underline underline-offset-4"
              >
                Delete this inquiry
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
