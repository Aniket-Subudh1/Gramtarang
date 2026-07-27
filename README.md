# Gram Tarang — website & inquiries console

A rebuild of gramtarang.org.in in Next.js 15 (App Router, React 19, Tailwind v4,
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

`middleware.ts` folds any host starting with `admin.` onto the `/admin` route
tree. Nothing else changes; a single deployment serves both.

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
lib/                 content.ts · nav.ts · store.ts · auth.ts
middleware.ts        host routing + session gate
public/fonts/        self-hosted woff2 (OFL licences included)
```

---

## Design notes

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

**Images.** The rebuild is typographic and uses no photography. The original
site's images are still on the old host; `next.config.ts` allows that hostname
so you can reference them, but download the ones worth keeping into `public/`
before decommissioning WordPress. Photographs of actual workshops and trainees
would strengthen the sector pages considerably.

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
individual accounts and an audit trail, `lib/auth.ts` is the only file that
reads the session — swap it for an auth provider and nothing else changes.
