'use client';

import { useQuery } from "@tanstack/react-query";

import { EditLinkCard } from "../LinkCard/EditLinkCard";
import { getLinks } from "../../api";
import type { Link } from "@/shared/config/types";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  addedLinks: Link[];
}

export function EditLinkCardList({ addedLinks }: Props) {
  const { data: links } = useQuery<Link[]>({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  return (
    <ul className={cx("container")}>
      {addedLinks.map((link) => (
        <li key={link.id}>
          <EditLinkCard {...link} />
        </li>
      ))}

      {links?.map((link) => (
        <li key={link.id}>
          <EditLinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
