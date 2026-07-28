# Gram Tarang — website & inquiries console

A rebuild of gramtarang.org.in in Next.js 16 (App Router, React 19, Tailwind v4,
TypeScript), plus a staff console at `admin.gramtarang.org.in` where inquiries
sent from the site arrive.

One codebase, one Vercel project, two domains.

---

## Before you deploy: the old site is compromised

Every page on the live WordPress site currently serves an obfuscated PHP payload
(`eval(gzinflate(base64_decode(str_rot13(...))))`) above the `<title>` tag, plus
injected spam links in the header and footer pointing at replica-watch sites.

That is a backdoor executing on each request, not a content problem. Take the
WordPress install offline or have it cleaned before or alongside this
deployment — while it is up, the domain is being used to boost spam sites, which
costs you search reputation and puts visitors at risk.

This rebuild contains none of that code.

---

## Security posture

`npm audit` reports **0 vulnerabilities**. Keep it that way — run it before
each deploy, and enable Dependabot or Renovate on the repo. Next.js ships
security releases often; an unpatched version here is not academic, because
this app holds people's names and phone numbers.

**Authorization does not depend on `proxy.ts`.** Next.js has published repeated
advisories for requests that skip the middleware/proxy layer entirely —
CVE-2025-29927, then GHSA-267c-6grr-h53f and GHSA-26hh-7cqf-hhc6 for
segment-prefetch routes. So the proxy is treated as an optimistic filter for
routing and redirects, and the real check lives in `lib/session.ts`, invoked
inside every protected page and route handler right next to the data it
guards. If the proxy were bypassed completely, `/admin` would still redirect
and every admin API would still return 401. There are regression probes for
this; see below.

**Version pins are exact** (`next`, `react`, `react-dom`, `typescript`) rather
than caret ranges, so a deploy months from now builds what was tested.
`overrides` forces patched `postcss` and `sharp` inside Next's own dependency
tree.

**The image optimiser is switched off** (`images.unoptimized`). Every image is
local and pre-generated at its exact display size, so the optimiser would buy
almost nothing — and leaving it off removes a whole family of reported issues:
optimiser DoS, cache confusion, unbounded cache growth, content injection. No
remote image hosts are allowed, so nothing can be proxied through the app.

**Other measures**: `X-Robots-Tag: noindex` on the console, `poweredByHeader`
off, nosniff / frame-options / referrer-policy / permissions-policy on every
response, HttpOnly + SameSite=Lax + Secure session cookie, HMAC-signed with a
12-hour expiry, constant-time password comparison, and a deliberate delay on
sign-in attempts.

### Verifying the guard yourself

With the server running, none of these should return inquiry data:

```bash
curl -i localhost:3000/admin                                     # 307
curl -i -H 'x-middleware-subrequest: middleware' localhost:3000/admin   # 307
curl -i -H 'RSC: 1' 'localhost:3000/admin?_rsc=abc'              # 307
curl -i localhost:3000/api/inquiries                             # 401
curl -i localhost:3000/api/admin/export                          # 401
```

---

## Quick start

```bash
npm install
cp .env.example .env.local     # fill in ADMIN_PASSWORD and ADMIN_SESSION_SECRET
npm run dev
```

- Site — http://localhost:3000
- Console — http://localhost:3000/admin

Without Upstash credentials the app runs fine and holds inquiries in memory.
They vanish on restart, and the console shows a banner saying so.

---

## Deploying to Vercel

**1. Push to a Git repo and import it at vercel.com.** Framework detection
handles the build; no settings to change.

**2. Set environment variables** (Project → Settings → Environment Variables):

| Variable | Value |
|---|---|
| `ADMIN_PASSWORD` | The password staff type to reach the console |
| `ADMIN_SESSION_SECRET` | 32+ random chars — `openssl rand -base64 32` |
| `UPSTASH_REDIS_REST_URL` | From the Upstash console |
| `UPSTASH_REDIS_REST_TOKEN` | From the Upstash console |
| `NEXT_PUBLIC_SITE_URL` | `https://gramtarang.org.in` |
| `NEXT_PUBLIC_ADMIN_HOST` | `admin.gramtarang.org.in` |

**3. Create the inquiry store.** At console.upstash.com create a free Redis
database, pick a region near India (`ap-south-1`), and copy the two **REST API**
values above. This is the whole "backend" — a managed key-value store reached
over HTTPS. There is no server to run, no driver to install, and no connection
pool to manage.

**4. Add both domains** under Project → Settings → Domains:

- `gramtarang.org.in`
- `admin.gramtarang.org.in`

`proxy.ts` folds any host starting with `admin.` onto the `/admin` route tree.
Nothing else changes; a single deployment serves both.

**5. Point DNS** at Vercel as instructed on the Domains screen. The
`admin` subdomain needs its own CNAME.

---

## How inquiries flow

```
Visitor fills the form on any page
   │
   ├─ POST /api/inquiries          honeypot, per-IP throttle, validation
   │
   ├─ lib/store.ts                 → Upstash Redis over HTTPS
   │
   └─ Visitor sees a reference     GT-260727-K3F9P
                                       │
Staff open admin.gramtarang.org.in     │
   │                                   │
   ├─ password → signed cookie (HMAC, 12h)
   │
   └─ Console: filter, search, open, set status, add notes, export CSV
```

**Console features** — status counters that double as filters (new / open /
closed), subject filter, search across name, phone, email and message body, a
detail panel with click-to-call and click-to-email, internal notes that save on
blur, per-inquiry delete, and a CSV download of everything.

**Protections on the public endpoint** — a hidden honeypot field (bots that fill
it get a plausible-looking success response and nothing is stored), a per-IP
rate limit of 5 submissions per 10 minutes, server-side validation of email and
phone, and length caps on every field.

---

## Images

All photography, logos and diagrams come from the WordPress media library.
Before anything was used it was scanned: every file's magic bytes were checked
against its extension, and all 200 files grepped for embedded PHP, `eval(`,
`base64_decode`, `gzinflate` and `<script`. Nothing was found — the infection
was in the WordPress install, not the uploads.

**Every image is placed where gramtarang.org.in actually uses it.** The mapping
was taken from the live pages, not inferred from filenames, which matters
because the filenames mislead:

| File | Looks like | Actually used for |
|---|---|---|
| `award*.png` | Award certificates | Ministerial visit photos (gallery) — not used |
| `Picture1/2/3` | Nothing obvious | **The awards page** |
| `c1`–`c6.jpg` | Centres | **Named CCD trainee portraits** |
| `peda-*.jpg` | Pedagogy steps | **Production output** on the trainers page |
| `Six_Dimensions.jpg` | The methodology wheel | Superseded — `gtet.jpg` is the one in use |
| `GTET-logo-330` | Header logo | `2017/04/logo.png` is the header logo |
| `Banner-2/3/4.jpg` | Generic banners | Ashok Leyland / Sewing Operator / CNC slides |
| `Banu-SMO.jpg` | Generic banner | Bhanu, Khorda → Shahi Exports, Bangalore |

`scripts/build-assets.sh` regenerates everything from a fresh export; each line
carries the source page it was verified against. **33 MB of source became
2.1 MB of WebP.** Every image is registered in **`lib/assets.ts`** with its
dimensions and alt text, so the layout reserves space and nothing shifts as
photographs load. Swapping one means changing one line.

The image optimiser stays off (`images.unoptimized`) because assets are already
generated at exact display sizes in WebP. `next/image` is still used, for lazy
loading and the reserved aspect box.

### Content corrected alongside the images

The success stories page has **nine** people, not the six I first transcribed.
Sagar Naik, Pritisudha Panda and Sk Nakir were missing, and Hadibandhu
Badaseth's salary figures were wrong. All nine now carry their own photograph
from the source page.

---

## Editing content

Nearly all copy lives in **`lib/content.ts`** as typed data — the org
description, statistics, all six sectors and their trades, leadership bios, the
thirteen centres with addresses and phone numbers, partners, awards, success
stories and careers text. Change a string there and it updates everywhere it
appears, including navigation, the sitemap and the form's trade dropdown.

Navigation structure is in `lib/nav.ts`.

**Adding a sector** — append an entry to the `sectors` array. Its page,
navigation entry, footer link, homepage card, sitemap entry and form dropdown
options all generate from it.

---

## Project structure

```
app/
  (site)/            public pages — route group, shares the header/footer layout
    page.tsx         home
    about/           at a glance · mission · leadership · trainers · centres
    services/        skill training · workforce · action learning · apprenticeship
    sectors/         index + [slug] (statically generated per sector)
    partners/  recognition/  careers/  contact/  privacy/
  admin/             console + login (no header/footer)
  api/
    inquiries/       POST public · GET admin · PATCH & DELETE per id
    admin/session/   sign in / sign out
    admin/export/    CSV
  layout.tsx  globals.css  sitemap.ts  robots.ts  not-found.tsx

components/          header, footer, wordmark, scale-bar, reveal, ui, inquiry-form
                     admin/dashboard, admin/login-form
lib/                 content.ts · nav.ts · store.ts
                     auth.ts (crypto) · session.ts (authoritative guard)
proxy.ts             host routing (optimistic filter only)
public/
  fonts/             self-hosted woff2 (OFL licences included)
  images/            photography, portraits, logos, diagrams (WebP)
  docs/              WEL catalogue PDF
scripts/
  build-assets.sh    regenerates public/images from a media-library export
```

---

## Design notes

**Photography is documentary, not decorative** — real workshop floors, real
trainees at real machines. The palette below was chosen partly because it sits
under these photographs without fighting them.

**Palette** is drawn from Odisha ikat dyeing — indigo ground `#14204a`, madder
`#b23a2b`, turmeric `#e5a83c` — rather than generic institutional blue. The
apparel programme literally produces textile, and the organisation's roots are
in Gajapati and Koraput.

**Type** — Archivo for display and interface, Source Serif 4 for running prose,
IBM Plex Mono for labels, codes and data. Serif body text is deliberate: this
organisation lives on government tenders and reports, and the register should
read as a document rather than a brochure.

**The signature element** is the measure bar on the home page: seventy ticks,
one for every thousand people trained, animating in left to right, with
milestone years sitting under the tick where they fall. It reads as a quantity
and a chronology at once — the way a rule on a workshop bench measures both a
part and a shift. Hovering a tall mark shows what happened that year.

**Fonts are self-hosted** from `public/fonts` rather than fetched from Google's
CDN: no third-party request on page load, no data leaving to a third party, and
the build does not depend on an external service. All three are Open Font
Licence; the licences sit beside the files. They were extracted from the
`@fontsource` npm packages.

**Accessibility** — visible keyboard focus rings, skip-to-content link, reduced
motion respected throughout, semantic landmarks, and colour contrast checked
against the palette.

---

## Legacy URLs

`next.config.ts` maps every indexed WordPress path to its new home with a
permanent redirect — `/index.php/at-a-glance` → `/about`,
`/index.php/awards-recognition/success-stories-2` → `/recognition/success-stories`,
all `/index.php/industry/*` and `/index.php/government/*` pages → `/partners`,
and so on. Existing search rankings and inbound links survive the move.

---

## Things left for you

**Two data corrections carried over from the old site**, which I have left as
they were rather than guess:

- Keonjhar's map embed pointed at Storey Avenue, San Francisco
- Jorhat's map embed pointed at Rajendra Nagar, Hyderabad

Both are omitted here rather than reproduced wrongly. Add correct coordinates
when convenient.

**Email notification.** Inquiries currently land in the console only. If you
want a copy emailed on arrival, add a call to Resend or Postmark inside
`app/api/inquiries/route.ts` after `saveInquiry`.

**Per-person logins.** The console uses one shared password. If you later need
individual accounts and an audit trail, `lib/auth.ts` and `lib/session.ts` are
the only files that read the session — swap them for an auth provider and
nothing else changes.

**Keep dependencies current.** This was pinned to a patched Next.js on the day
it was built. Turn on automated dependency updates; do not let it drift.
