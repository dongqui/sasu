import { AddLinkForm } from "@/features/admin/ui";
import { LinkCardList } from "@/entities/link/ui/LinkCardList";

export default function Admin() {
  return (
    <main>
      <AddLinkForm />
      <LinkCardList />
    </main>
  );
}
