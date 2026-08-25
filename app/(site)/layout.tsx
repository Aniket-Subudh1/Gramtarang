import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PathJsonLd } from "@/components/path-jsonld";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <PathJsonLd />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
