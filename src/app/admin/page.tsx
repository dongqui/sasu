import { AdminHeader } from "@/widgets/header/ui/AdminHeader";
import { AddLinkForm } from "@/features/admin/ui/AddLinkForm";
import { EditLinkList } from "@/features/admin/ui/EditLinkList";

export default function Admin() {
  return (
    <>
      <AdminHeader />
      <AddLinkForm />
      <EditLinkList />
    </>
  );
}
