"use client";

import { useState } from "react";
import { indianStates, inquiryTypes, sectors } from "@/lib/content";

type State = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border border-line-strong bg-white px-4 py-3 font-body text-[0.95rem] text-ink placeholder:text-mist focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-700";

const labelClass =
  "block font-display text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-slate";

export function InquiryForm({ defaultType }: { defaultType?: string }) {
  const [type, setType] = useState(defaultType ?? "training");
  const [state, setState] = useState<State>("idle");
  const [ref, setRef] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: window.location.pathname }),
      });
      const body = await res.json();

      if (!res.ok) {
        setError(body.error ?? "That didn't send. Try again in a moment.");
        setState("error");
        return;
      }

      setRef(body.id);
      setState("sent");
      form.reset();
    } catch {
      setError("No connection. Check your network and try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-indigo-200 bg-white p-8 md:p-10">
        <p className="eyebrow text-madder">Inquiry received</p>
        <h3 className="mt-4 text-2xl font-bold">We have it.</h3>
        <p className="mt-4 text-slate">
          Someone from the right team replies within two working days. Keep this
          reference if you need to follow up.
        </p>
        <p className="mt-6 inline-block border border-line bg-chalk px-4 py-3 font-mono text-sm font-medium tracking-wide">
          {ref}
        </p>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setRef(null);
          }}
          className="mt-8 block font-display text-[0.9rem] font-semibold text-indigo-700 underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(16,22,37,0.28)] md:p-9">
      <fieldset className="mb-7">
        <legend className={labelClass}>What is this about?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {inquiryTypes.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer flex-col border px-4 py-3 transition-colors ${
                type === option.value
                  ? "border-indigo-700 bg-indigo-50"
                  : "border-line hover:border-line-strong"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={type === option.value}
                  onChange={() => setType(option.value)}
                  className="accent-[#27407f]"
                />
                <span className="font-display text-[0.92rem] font-semibold">
                  {option.label}
                </span>
              </span>
              {option.hint && (
                <span className="mt-1 pl-6 font-body text-[0.8rem] text-mist">
                  {option.hint}
                </span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={`mt-2 ${fieldClass}`}
            placeholder="Sunita Behera"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            maxLength={20}
            autoComplete="tel"
            className={`mt-2 ${fieldClass}`}
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            className={`mt-2 ${fieldClass}`}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="state">
            State
          </label>
          <select id="state" name="state" className={`mt-2 ${fieldClass}`} defaultValue="">
            <option value="">Select a state</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {(type === "hiring" || type === "partnership") && (
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="organisation">
              Organisation
            </label>
            <input
              id="organisation"
              name="organisation"
              maxLength={160}
              autoComplete="organization"
              className={`mt-2 ${fieldClass}`}
              placeholder="Company, department or foundation"
            />
          </div>
        )}

        {type === "training" && (
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="interest">
              Which trade interests you?
            </label>
            <select
              id="interest"
              name="interest"
              className={`mt-2 ${fieldClass}`}
              defaultValue=""
            >
              <option value="">Not sure yet</option>
              {sectors.map((sector) => (
                <optgroup key={sector.slug} label={sector.name}>
                  {sector.trades.map((trade) => (
                    <option key={trade} value={`${sector.name} — ${trade}`}>
                      {trade}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        )}

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            className={`mt-2 ${fieldClass} resize-y`}
            placeholder="Age, qualification, how many people you need, timelines — whatever is relevant."
          />
        </div>
      </div>

      {/* Bot trap. Real people never see or fill this. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" && error && (
        <p
          role="alert"
          className="mt-6 border-l-2 border-madder bg-madder-soft px-4 py-3 text-[0.9rem] text-madder-dark"
        >
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={state === "sending"}
          className="bg-indigo-900 px-7 py-3.5 font-display text-[0.9rem] font-semibold tracking-tight text-white transition-colors hover:bg-madder disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="font-body text-[0.82rem] text-mist">
          We use your details only to answer this inquiry.
        </p>
      </div>
    </form>
  );
}
