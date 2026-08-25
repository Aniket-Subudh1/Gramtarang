import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { org } from "@/lib/content";
import { pages } from "@/lib/seo";

export const metadata: Metadata = pages.privacy;

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        lede="Short version: we use your details to answer your inquiry, and for nothing else."
      />
      <Section tone="white">
        <div className="prose-gt max-w-2xl">
          <h2 className="text-xl font-bold">What we collect</h2>
          <p>
            When you send an inquiry we store the name, phone number, email
            address, state, trade interest and message you type, along with the
            page you sent it from and your browser's user-agent string. Nothing
            else.
          </p>

          <h2 className="mt-8 text-xl font-bold">Why</h2>
          <p>
            So that a person on our team can call or write back, and so that we
            can route your inquiry to the right centre or department. We do not
            sell these details, and we do not use them for advertising.
          </p>

          <h2 className="mt-8 text-xl font-bold">Where it is kept</h2>
          <p>
            Inquiries are stored in a managed database and are visible only to
            Gram Tarang staff who have been given access to the internal
            console. Access requires a password and expires after twelve hours.
          </p>

          <h2 className="mt-8 text-xl font-bold">How long</h2>
          <p>
            Inquiries are kept for two years, then deleted. Job applications are
            kept for six months unless you ask us to keep them longer.
          </p>

          <h2 className="mt-8 text-xl font-bold">Removing your details</h2>
          <p>
            Write to <a href={`mailto:${org.email}`}>{org.email}</a> with the
            reference number shown after you submitted, and we will delete the
            record and confirm it.
          </p>

          <h2 className="mt-8 text-xl font-bold">Cookies</h2>
          <p>
            The public site sets no cookies. The staff console sets one
            session cookie, which is required to keep you signed in.
          </p>
        </div>
      </Section>
    </>
  );
}
