import type { Metadata } from "next";

import { AdminHeader } from "@/widgets/header/ui/AdminHeader";
import { AddLinkForm } from "@/features/admin/ui/AddLinkForm";
import { EditLinkList } from "@/features/admin/ui/EditLinkList";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default function Admin() {
  return (
    <>
      <AdminHeader />
      <AddLinkForm />
      <EditLinkList />
    </>
  );
}
