/**
 * Inquiry storage.
 *
 * There is no server to run and no database driver to install. In
 * production this talks to Upstash Redis over plain HTTPS; without
 * credentials it falls back to an in-process map so `npm run dev`
 * works immediately.
 *
 * Swapping in Postgres later only means rewriting this file.
 */

export type InquiryStatus = "new" | "open" | "closed";

export type Inquiry = {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  type: string;
  name: string;
  email: string;
  phone: string;
  organisation?: string;
  state?: string;
  interest?: string;
  message: string;
  source?: string;
  userAgent?: string;
  notes?: string;
};

const KEY_LIST = "gt:inquiries";
const KEY_ITEM = (id: string) => `gt:inquiry:${id}`;

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

export const usingRemoteStore = Boolean(url && token);

/* ------------------------------ memory fallback ------------------- */

declare global {
  // eslint-disable-next-line no-var
  var __gtInquiries: Map<string, Inquiry> | undefined;
}

const memory = (): Map<string, Inquiry> => {
  if (!globalThis.__gtInquiries) globalThis.__gtInquiries = new Map();
  return globalThis.__gtInquiries;
};

/* ------------------------------ redis ----------------------------- */

async function redis<T = unknown>(command: (string | number)[]): Promise<T | null> {
  if (!usingRemoteStore) return null;
  const res = await fetch(url!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Storage request failed (${res.status})`);
  }
  const data = (await res.json()) as { result: T };
  return data.result;
}

/* ------------------------------ api ------------------------------- */

export function newId(): string {
  const now = new Date();
  const stamp = now.toISOString().slice(2, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `GT-${stamp}-${rand}`;
}

export async function saveInquiry(inquiry: Inquiry): Promise<void> {
  if (usingRemoteStore) {
    await redis(["SET", KEY_ITEM(inquiry.id), JSON.stringify(inquiry)]);
    await redis(["LPUSH", KEY_LIST, inquiry.id]);
    return;
  }
  memory().set(inquiry.id, inquiry);
}

export async function listInquiries(limit = 500): Promise<Inquiry[]> {
  if (usingRemoteStore) {
    const ids = (await redis<string[]>(["LRANGE", KEY_LIST, 0, limit - 1])) ?? [];
    if (ids.length === 0) return [];
    const raw = (await redis<(string | null)[]>(["MGET", ...ids.map(KEY_ITEM)])) ?? [];
    return raw
      .filter((r): r is string => Boolean(r))
      .map((r) => JSON.parse(r) as Inquiry);
  }
  return [...memory().values()].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

export async function getInquiry(id: string): Promise<Inquiry | null> {
  if (usingRemoteStore) {
    const raw = await redis<string | null>(["GET", KEY_ITEM(id)]);
    return raw ? (JSON.parse(raw) as Inquiry) : null;
  }
  return memory().get(id) ?? null;
}

export async function updateInquiry(
  id: string,
  patch: Partial<Pick<Inquiry, "status" | "notes">>,
): Promise<Inquiry | null> {
  const current = await getInquiry(id);
  if (!current) return null;
  const next: Inquiry = { ...current, ...patch };
  if (usingRemoteStore) {
    await redis(["SET", KEY_ITEM(id), JSON.stringify(next)]);
  } else {
    memory().set(id, next);
  }
  return next;
}

export async function deleteInquiry(id: string): Promise<void> {
  if (usingRemoteStore) {
    await redis(["DEL", KEY_ITEM(id)]);
    await redis(["LREM", KEY_LIST, 0, id]);
    return;
  }
  memory().delete(id);
}

/* ------------------------------ rate limit ------------------------- */

/** Coarse per-IP throttle so the public form can't be flooded. */
export async function tooManyRequests(ip: string, max = 5, windowSec = 600) {
  const key = `gt:rate:${ip}`;
  if (usingRemoteStore) {
    const count = (await redis<number>(["INCR", key])) ?? 1;
    if (count === 1) await redis(["EXPIRE", key, windowSec]);
    return count > max;
  }
  return false;
}
