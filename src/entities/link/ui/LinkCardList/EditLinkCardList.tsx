"use client";

import { useQuery } from "@tanstack/react-query";

import { EditLinkCard } from "../LinkCard/EditLinkCard";
import { getLinks } from "../../api";
import type { Link } from "@/shared/config/types";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  addedLinks: Link[];
  deletedLinks: number[];
  deleteAddedLink: (id: number) => void;
  editAddedLink: (editedLink: Link) => void;
  deleteDeploiedLink: (id: number) => void;
  editDeploiedLink: (link: Link) => void;
}

export function EditLinkCardList({
  addedLinks,
  deletedLinks,
  deleteAddedLink,
  editAddedLink,
  deleteDeploiedLink,
  editDeploiedLink,
}: Props) {
  const { data: links } = useQuery<Link[]>({
    queryKey: ["links"],
    queryFn: getLinks,
  });
  return (
    <ul className={cx("container")}>
      {addedLinks.map((link) => (
        <li key={link.id}>
          <EditLinkCard
            link={link}
            onEdit={editAddedLink}
            onDelete={deleteAddedLink}
          />
        </li>
      ))}

      {links
        ?.filter((link) => !deletedLinks.includes(link.id))
        ?.map((link) => (
          <li key={link.id}>
            <EditLinkCard
              link={link}
              onEdit={editDeploiedLink}
              onDelete={deleteDeploiedLink}
            />
          </li>
        ))}
    </ul>
  );
}
