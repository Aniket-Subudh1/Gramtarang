import { Dashboard } from "@/components/admin/dashboard";
import { listInquiries, usingRemoteStore } from "@/lib/store";
import { requireSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // Authoritative check. Middleware is a convenience, not the boundary:
  // no inquiry data is read until this passes.
  await requireSession();

  const inquiries = await listInquiries();
  return <Dashboard inquiries={inquiries} storageWarning={!usingRemoteStore} />;
}
