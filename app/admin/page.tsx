import { Dashboard } from "@/components/admin/dashboard";
import { listInquiries, usingRemoteStore } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const inquiries = await listInquiries();
  return <Dashboard inquiries={inquiries} storageWarning={!usingRemoteStore} />;
}
