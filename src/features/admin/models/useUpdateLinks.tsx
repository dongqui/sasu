import { atom, useAtom } from "jotai";

import type { Link } from "@/shared/config/types";

const linksAtom = atom<{
  addedLinks: Link[];
  deletedLinks: number[];
  editedLinks: Link[];
}>({
  addedLinks: [],
  deletedLinks: [],
  editedLinks: [],
});

export const useUpdateLinks = () => {
  const [links, setLinks] = useAtom(linksAtom);

  function addLink(link: Link) {
    setLinks((prev) => ({
      ...prev,
      addedLinks: [link, ...prev.addedLinks],
    }));
  }

  function deleteAddedLink(id: number) {
    setLinks((prev) => ({
      ...prev,
      addedLinks: prev.addedLinks.filter((link) => link.id !== id),
    }));
  }

  function editAddedLink(editedLink: Link) {
    const index = links.addedLinks.findIndex(
      (link) => link.id === editedLink.id
    );
    if (index > -1) {
      setLinks((prev) => {
        prev.addedLinks.splice(index, 1, {
          ...prev.addedLinks[index],
          ...editedLink,
        });

        return {
          ...prev,
          addedLinks: prev.addedLinks.slice(),
        };
      });
    }
  }

  function deleteDeploiedLink(id: number) {
    setLinks((prev) => ({
      ...prev,
      deletedLinks: [...prev.deletedLinks, id],
    }));
  }

  function editDeploiedLink(link: Link) {
    setLinks((prev) => ({
      ...prev,
      editedLinks: [...prev.editedLinks, link],
    }));
  }

  return {
    deleteAddedLink,
    editAddedLink,
    deleteDeploiedLink,
    editDeploiedLink,
    addLink,
    addedLinks: links.addedLinks,
    deletedLinks: links.deletedLinks,
    editedLinks: links.editedLinks,
  };
};
