import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-chalk px-5">
      <div className="max-w-md text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist">
          404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em]">
          That page isn't here.
        </h1>
        <p className="mt-4 text-slate">
          It may have moved when the site was rebuilt. Start from the top, or go
          straight to what we teach.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-indigo-900 px-6 py-3.5 font-display text-[0.9rem] font-semibold text-white"
          >
            Home
          </Link>
          <Link
            href="/sectors"
            className="border border-ink/25 px-6 py-3.5 font-display text-[0.9rem] font-semibold"
          >
            Sectors &amp; trades
          </Link>
        </div>
      </div>
    </div>
  );
}
