"use client";

import { EditLinkCardList } from "@/entities/link/ui/LinkCardList/EditLinkCardList";

import { useUpdateLinks } from "../models/useUpdateLinks";

export function EditLinkList() {
  const {
    deleteAddedLink,
    deleteDeploiedLink,
    editAddedLink,
    editDeploiedLink,
    addedLinks,
    deletedLinks,
  } = useUpdateLinks();

  return (
    <EditLinkCardList
      deleteAddedLink={deleteAddedLink}
      deleteDeploiedLink={deleteDeploiedLink}
      editAddedLink={editAddedLink}
      editDeploiedLink={editDeploiedLink}
      addedLinks={addedLinks}
      deletedLinks={deletedLinks}
    />
  );
}
