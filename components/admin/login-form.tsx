"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function Form() {
  const router = useRouter();
  const search = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);

    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "That didn't work.");
      setBusy(false);
      return;
    }

    router.replace(search.get("next") || "/");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="password"
        className="block font-display text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-slate"
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoFocus
        required
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 w-full border border-line-strong bg-white px-4 py-3 font-mono text-[0.95rem] focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-700"
      />

      {error && (
        <p
          role="alert"
          className="mt-4 border-l-2 border-madder bg-madder-soft px-4 py-3 text-[0.88rem] text-madder-dark"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="mt-6 w-full bg-indigo-900 px-6 py-3.5 font-display text-[0.9rem] font-semibold text-white transition-colors hover:bg-madder disabled:opacity-60"
      >
        {busy ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}

export function LoginForm() {
  return (
    <Suspense fallback={null}>
      <Form />
    </Suspense>
  );
}
